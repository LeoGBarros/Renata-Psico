import { site } from '@/config/site'
import { faqItems } from '@/features/faq'
import { topics } from '@/features/topics'

// Sem aggregateRating nem depoimentos: o Google não aceita nota auto-declarada e o
// Código de Ética do psicólogo restringe o uso de depoimentos de pacientes.
export function buildJsonLd() {
  const practiceId = `${site.url}/#consultorio`
  const psychologistId = `${site.url}/#psicologa`
  const { address } = site

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalBusiness', 'ProfessionalService'],
        '@id': practiceId,
        name: `${site.professional.displayName} · Psicóloga`,
        description: site.description,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        telephone: site.phone.e164,
        address: {
          '@type': 'PostalAddress',
          streetAddress: address.street,
          addressLocality: address.city,
          addressRegion: address.state,
          addressCountry: address.country,
        },
        hasMap: site.mapsUrl,
        areaServed: [{ '@type': 'City', name: 'Campinas' }, { '@type': 'Country', name: 'Brasil' }],
        availableService: topics.map((topic) => ({
          '@type': 'MedicalTherapy',
          name: `Psicoterapia: ${topic.name}`,
          description: topic.description,
        })),
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: site.hours.days,
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
        sameAs: [site.instagram.url, site.doctoraliaUrl],
        employee: { '@id': psychologistId },
      },
      {
        '@type': 'Person',
        '@id': psychologistId,
        name: site.professional.legalName,
        alternateName: site.professional.displayName,
        jobTitle: site.professional.jobTitle,
        image: `${site.url}${site.professional.portrait}`,
        worksFor: { '@id': practiceId },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Universidade Estadual de Campinas (UNICAMP)' },
          { '@type': 'CollegeOrUniversity', name: 'Universidade Estadual de Londrina (UEL)' },
          { '@type': 'CollegeOrUniversity', name: 'Universidade do Oeste Paulista (UNOESTE)' },
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Registro profissional',
          name: site.professional.crp,
          recognizedBy: { '@type': 'Organization', name: 'Conselho Regional de Psicologia de São Paulo' },
        },
        sameAs: [site.instagram.url, site.doctoraliaUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.title,
        inLanguage: 'pt-BR',
        publisher: { '@id': practiceId },
      },
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#perguntas`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }
}

export function serializeJsonLd() {
  return JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c')
}
