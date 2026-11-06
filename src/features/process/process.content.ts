export type ProcessStep = {
  title: string
  description: string
  tag: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Você manda uma mensagem',
    description: 'Pelo WhatsApp, conte em poucas palavras o que te traz. Não precisa saber explicar direito.',
    tag: 'WhatsApp',
  },
  {
    title: 'Uma primeira conversa',
    description: 'Para nos conhecermos, entender o que você busca e ver se faz sentido seguirmos.',
    tag: '50 minutos',
  },
  {
    title: 'Sessões semanais',
    description: 'Mesmo dia e horário toda semana. A regularidade faz parte do processo.',
    tag: 'seg a sex, 8h–20h',
  },
  {
    title: 'Online ou no consultório',
    description: 'Por vídeo, de onde você estiver, ou presencial na Cidade Universitária, em Campinas.',
    tag: 'você escolhe',
  },
]
