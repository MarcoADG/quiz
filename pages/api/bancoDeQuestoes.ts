import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(
    1,
    `Quem é conhecido como o "Pokémon Mítico" que se assemelha a um fóssil?`,
    [
      RespostaModel.errada("Mewtwo"),
      RespostaModel.errada("Jirachi"),
      RespostaModel.errada("Groudon"),
      RespostaModel.certa("Aerodactyl"),
    ]
  ),

  new QuestaoModel(2, `Qual é o tipo principal do Pikachu?`, [
    RespostaModel.errada("Água"),
    RespostaModel.errada("Normal"),
    RespostaModel.errada("Grama"),
    RespostaModel.certa("Elétrico"),
  ]),

  new QuestaoModel(3, `Qual destes Pokémon é um tipo Dragão?`, [
    RespostaModel.errada("Charizard"),
    RespostaModel.errada("Gyarados"),
    RespostaModel.errada("Blastoise"),
    RespostaModel.certa("Dragonite"),
  ]),

  new QuestaoModel(4, `Qual é o Pokémon inicial da região de Sinnoh?`, [
    RespostaModel.errada("Bulbasaur"),
    RespostaModel.errada("Squirtle"),
    RespostaModel.errada("Totodile"),
    RespostaModel.certa("Chimchar"),
  ]),

  new QuestaoModel(
    5,
    `Quem é conhecido como "O Deus da Criação" no mundo Pokémon?`,
    [
      RespostaModel.errada("Giratina"),
      RespostaModel.errada("Dialga"),
      RespostaModel.errada("Palkia"),
      RespostaModel.certa("Arceus"),
    ]
  ),

  new QuestaoModel(
    6,
    `Qual desses Pokémon evolui para Gengar quando negociado?`,
    [
      RespostaModel.errada("Gastly"),
      RespostaModel.errada("Zubat"),
      RespostaModel.errada("Drowzee"),
      RespostaModel.certa("Haunter"),
    ]
  ),

  new QuestaoModel(
    7,
    `Qual é o número do Pokémon Bulbasaur na Pokédex nacional?`,
    [
      RespostaModel.errada("#002"),
      RespostaModel.errada("#004"),
      RespostaModel.errada("#007"),
      RespostaModel.certa("#001"),
    ]
  ),

  new QuestaoModel(
    8,
    `Qual é o Pokémon conhecido como "O Guardião dos Mares"?`,
    [
      RespostaModel.errada("Lapras"),
      RespostaModel.errada("Suicune"),
      RespostaModel.errada("Vaporeon"),
      RespostaModel.certa("Kyogre"),
    ]
  ),

  new QuestaoModel(
    9,
    `Qual desses Pokémon é conhecido por sua velocidade extrema?`,
    [
      RespostaModel.errada("Snorlax"),
      RespostaModel.errada("Slowpoke"),
      RespostaModel.errada("Onix"),
      RespostaModel.certa("Deoxys"),
    ]
  ),

  new QuestaoModel(10, `Quem é o líder da Equipe Rocket?`, [
    RespostaModel.errada("Jessie"),
    RespostaModel.errada("James"),
    RespostaModel.errada("Meowth"),
    RespostaModel.certa("Giovanni"),
  ]),

  new QuestaoModel(11, `Qual desses Pokémon é um tipo Psíquico e Voador?`, [
    RespostaModel.errada("Alakazam"),
    RespostaModel.errada("Kadabra"),
    RespostaModel.errada("Hypno"),
    RespostaModel.certa("Lugia"),
  ]),

  new QuestaoModel(
    12,
    `Quem é conhecido como o "Deus da Destruição" no universo Pokémon?`,
    [
      RespostaModel.errada("Kyurem"),
      RespostaModel.errada("Rayquaza"),
      RespostaModel.errada("Zygarde"),
      RespostaModel.certa("Giratina"),
    ]
  ),

  new QuestaoModel(13, `Qual é o tipo principal do Meowth da Equipe Rocket?`, [
    RespostaModel.errada("Noturno"),
    RespostaModel.errada("Venenoso"),
    RespostaModel.errada("Psíquico"),
    RespostaModel.certa("Normal"),
  ]),

  new QuestaoModel(
    14,
    `Qual destes Pokémon é conhecido por seu enorme poder de fogo?`,
    [
      RespostaModel.errada("Magikarp"),
      RespostaModel.errada("Psyduck"),
      RespostaModel.errada("Farfetch'd"),
      RespostaModel.certa("Arcanine"),
    ]
  ),

  new QuestaoModel(
    15,
    `Quem é conhecido como o "Mestre das Marés" na mitologia Pokémon?`,
    [
      RespostaModel.errada("Vaporeon"),
      RespostaModel.errada("Suicune"),
      RespostaModel.errada("Milotic"),
      RespostaModel.certa("Kyogre"),
    ]
  ),

  new QuestaoModel(
    16,
    `Qual é o nome do rival do jogador na região de Johto?`,
    [
      RespostaModel.errada("Blue"),
      RespostaModel.errada("May"),
      RespostaModel.errada("Wally"),
      RespostaModel.certa("Silver"),
    ]
  ),

  new QuestaoModel(17, `Qual destes Pokémon é capaz de megaevoluir?`, [
    RespostaModel.errada("Charmander"),
    RespostaModel.errada("Eevee"),
    RespostaModel.errada("Pidgey"),
    RespostaModel.certa("Lucario"),
  ]),

  new QuestaoModel(18, `Qual é o tipo do Pokémon Gengar?`, [
    RespostaModel.errada("Venenoso"),
    RespostaModel.errada("Noturno"),
    RespostaModel.errada("Psíquico"),
    RespostaModel.certa("Fantasma"),
  ]),

  new QuestaoModel(19, `Quem é o líder do ginásio da cidade de Cerulean?`, [
    RespostaModel.errada("Brock"),
    RespostaModel.errada("Lt. Surge"),
    RespostaModel.errada("Erika"),
    RespostaModel.certa("Misty"),
  ]),

  new QuestaoModel(
    20,
    `Qual é o Pokémon lendário que representa a noite eterna?`,
    [
      RespostaModel.errada("Cresselia"),
      RespostaModel.errada("Lunala"),
      RespostaModel.errada("Hoopa"),
      RespostaModel.certa("Darkrai"),
    ]
  ),
];

export default questoes;
