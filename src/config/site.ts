// Fonte única de nome, endereço e telefone: site, JSON-LD, llms.txt e imagem de
// compartilhamento leem daqui, e precisam bater com o Perfil da Empresa no Google.

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const site = {
  url: productionUrl.replace(/\/$/, ''),
  name: 'Renata Sobral',
  title: 'Renata Sobral — Psicóloga e psicanalista em Campinas',
  description:
    'Psicoterapia psicanalítica para adultos, online ou presencial em Campinas-SP. Renata Sobral, psicóloga (CRP 06/76943), doutora em Psicologia pela UNICAMP.',
  locale: 'pt_BR',
  professional: {
    displayName: 'Renata Sobral',
    legalName: 'Renata Cristina Sobral Stephan',
    jobTitle: 'Psicóloga e psicanalista',
    crp: 'CRP 06/76943',
    portrait: '/images/renata-sobral-retrato.png',
  },
  phone: {
    display: '(19) 99877-2525',
    e164: '+5519998772525',
    whatsapp: '5519998772525',
  },
  address: {
    street: 'Rua Dr. Antônio Augusto de Almeida, 54',
    neighborhood: 'Cidade Universitária',
    city: 'Campinas',
    state: 'SP',
    country: 'BR',
  },
  hours: {
    label: 'Segunda a sexta, 8h às 20h',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '20:00',
  },
  instagram: {
    handle: '@renatasobral.psicologa',
    url: 'https://www.instagram.com/renatasobral.psicologa/',
  },
  doctoraliaUrl: 'https://www.doctoralia.com.br/renata-cristina-sobral-stephan/psicologo-psicanalista',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Dr+Antonio+Augusto+de+Almeida+54+Cidade+Universitaria+Campinas',
}

export const FIRST_CONTACT_MESSAGE = 'Olá, Renata. Gostaria de saber mais sobre o atendimento.'

export function whatsappLink(message: string = FIRST_CONTACT_MESSAGE) {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`
}

export function fullAddress() {
  const { street, neighborhood, city, state } = site.address
  return `${street} · ${neighborhood}, ${city}-${state}`
}
