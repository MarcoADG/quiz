import { embaralhar } from "../../../functions/arrays";
import questoes from "../bancoDeQuestoes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questaoIds = questoes.map((questao) => questao.id);

  res.status(200).json(embaralhar(questaoIds));
}
