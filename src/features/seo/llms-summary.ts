import { fullAddress, site, whatsappLink } from '@/config/site'
import { faqItems } from '@/features/faq'
import { educationMilestones } from '@/features/letter'
import { processSteps } from '@/features/process'
import { topics } from '@/features/topics'

export function buildLlmsSummary() {
  return `# ${site.title}

> ${site.description}

## Profissional

${site.professional.legalName} (${site.professional.displayName}), ${site.professional.jobTitle.toLowerCase()}, ${site.professional.crp}.

${educationMilestones.map((m) => `- ${m.year}: ${m.title}, ${m.institution}`).join('\n')}

## Atendimento

- Psicoterapia psicanalítica individual para adultos (18+)
- Online por vídeo ou presencial: ${fullAddress()}
- Sessões de 50 minutos, semanais
- Horário: ${site.hours.label}

## Como começar

${processSteps.map((step, index) => `${index + 1}. ${step.title}: ${step.description}`).join('\n')}

## Temas atendidos

${topics.map((topic) => `- ${topic.name}: ${topic.description}`).join('\n')}

## Perguntas frequentes

${faqItems.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n')}

## Contato

- WhatsApp e telefone: ${site.phone.display} (${whatsappLink()})
- Instagram: ${site.instagram.url}
- Doctoralia: ${site.doctoraliaUrl}
`
}
