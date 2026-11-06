export type TopicTone = 'paper' | 'powder' | 'coral' | 'ink'

export type Topic = {
  name: string
  description: string
  tone: TopicTone
  tiltDegrees: number
  personalNote?: string
}

export const topics: Topic[] = [
  {
    name: 'Ansiedade',
    description: 'Preocupação que não desliga e um corpo sempre em alerta.',
    tone: 'paper',
    tiltDegrees: -2,
  },
  {
    name: 'Depressão',
    description: 'Tristeza que se prolonga, desânimo, perda de interesse.',
    tone: 'powder',
    tiltDegrees: 1.5,
  },
  {
    name: 'Trabalho e esgotamento',
    description: 'Estresse, pressão e sofrimento ligados ao trabalho.',
    tone: 'ink',
    tiltDegrees: -1,
    personalNote: 'tema do meu doutorado',
  },
  {
    name: 'Relações e casal',
    description: 'Conflitos que se repetem e o que se joga a dois.',
    tone: 'paper',
    tiltDegrees: 2.5,
  },
  {
    name: 'Sexualidade',
    description: 'Desejo, prazer e autoestima, num espaço seguro.',
    tone: 'coral',
    tiltDegrees: -2.5,
  },
  {
    name: 'TDAH',
    description: 'Atenção, impulsividade e organização no dia a dia.',
    tone: 'paper',
    tiltDegrees: 1,
  },
  {
    name: 'Compulsão alimentar',
    description: 'A relação com a comida e o que ela tenta calar.',
    tone: 'powder',
    tiltDegrees: -1.5,
  },
  {
    name: 'Oscilações de humor',
    description: 'Euforia e queda, incluindo o transtorno bipolar.',
    tone: 'paper',
    tiltDegrees: 2,
  },
]
