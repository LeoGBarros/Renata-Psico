# Pendências de conteúdo: validar com a Renata

Os textos do site foram reescritos no rebrand. Estes pontos precisam da palavra dela
antes do lançamento.

| # | Pendência | Onde mexer | Situação atual no site |
|---|---|---|---|
| 1 | **Abordagem:** o site antigo dizia "Terapia Cognitivo-Comportamental"; formação e Doctoralia dizem psicanálise | `features/hero`, `features/approach`, `config/site.ts` (descrição) | Psicoterapia psicanalítica |
| 2 | **"Trabalho e esgotamento" como tema** (sugestão, base no doutorado sobre estresse no trabalho) | `features/topics/topics.content.ts` | Publicado, com a nota "tema do meu doutorado" |
| 3 | **Convênio:** atende? reembolso? | adicionar em `features/faq/faq.content.ts` | Fora do FAQ |
| 4 | **Valor da sessão:** informar no site ou só no primeiro contato | idem | Fora do FAQ |
| 5 | **Textos em primeira pessoa** (título, carta, passos) escritos por nós: ela aprova o tom? | cada `*.content.ts` e componentes de `hero`, `approach`, `letter` | Versão proposta |
| 6 | **"Eu mesma respondo as mensagens"**: é verdade? | `features/hero/components/Hero.tsx` | Publicado |
| 7 | **Nome completo** "Renata Cristina Sobral Stephan" (tirado da URL da Doctoralia) | `config/site.ts` | No rodapé e no JSON-LD |
| 8 | **CEP e e-mail** do consultório | `config/site.ts` | Ausentes |
| 9 | **Foto profissional:** a atual tem 260×310 px e fica borrada no tamanho do hero | `public/images/renata-sobral-retrato.png` | Foto antiga |
| 10 | **Fotos do consultório** (opcional, reforçam confiança) | nova seção | Não há |
