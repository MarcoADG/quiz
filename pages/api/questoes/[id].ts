import questoes from "../bancoDeQuestoes";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const idSelecionado = Number(req.query.id);

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRepostas();
    questaoSelecionada.converterParaObjeto();
    res.status(200).json(questaoSelecionada.converterParaObjeto());
  } else {
    res.status(204).send;
  }
}
