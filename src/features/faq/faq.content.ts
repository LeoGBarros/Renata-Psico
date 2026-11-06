export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Como funciona a sessão online?',
    answer:
      'Por chamada de vídeo, com a mesma duração e frequência da presencial. Você só precisa de um lugar reservado, onde possa falar à vontade.',
  },
  {
    question: 'Quanto dura cada sessão e com que frequência?',
    answer: 'Cada sessão tem 50 minutos e acontece uma vez por semana, no mesmo dia e horário.',
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer: 'Não há prazo fixo. Isso se constrói com você, ao longo do processo.',
  },
  {
    question: 'Atende crianças ou adolescentes?',
    answer: 'O atendimento é individual, para adultos a partir dos 18 anos.',
  },
]
