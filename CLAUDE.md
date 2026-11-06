# Site da Renata Sobral, psicóloga

Página única institucional. Next.js 16 (App Router, Turbopack), React 19, TypeScript,
**CSS puro com CSS Modules, sem bibliotecas de UI ou animação**. Tudo é gerado estático.

Direção visual "Escuta": creme, petróleo e coral tirados do logo; Kalnia (títulos),
Onest (texto), Playwrite BR (anotações à mão). Referência: template Softlife, adaptado.

## Comandos

```bash
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção (também checa tipos)
npm run lint
npm run typecheck
```

## Onde fica cada coisa

```
public/images/            foto e logo da Renata
src/app/                  só rotas: layout (fontes, metadata, JSON-LD), página, robots,
                          sitemap, llms.txt, imagem de compartilhamento, ícone
src/config/site.ts        nome, CRP, telefone, endereço, horário, redes: fonte única
src/components/           o que mais de uma seção usa: cabeçalho, botão flutuante de
                          WhatsApp, reveal/ (animação de entrada)
src/features/<seção>/     uma pasta por seção da página
  components/             componente + CSS Module
  <seção>.content.ts      textos e listas da seção, quando há
  index.ts                API pública da seção
src/features/seo/         JSON-LD e resumo para IAs (llms.txt), montados do conteúdo
src/styles/               tokens.css (cores, fontes, espaços), globals.css, reveal.css
doc/                      pendências de conteúdo
```

Seções, na ordem da página: `hero`, `approach` (como eu trabalho), `process` (como
funciona), `topics` (temas), `letter` (carta + formação), `faq`, `contact` (rodapé).

## Regras do projeto

- **Texto de seção muda no `*.content.ts`**, não no componente. JSON-LD e llms.txt
  leem dali; mudar em um lugar só mantém site, Google e IAs iguais.
- **Dado de contato muda só em `src/config/site.ts`.** Precisa bater com o Perfil da
  Empresa no Google e com a Doctoralia.
- **Animação de entrada:** atributo `data-reveal="rise|settle|weight|arch|ink|rule"` no
  elemento; `RevealOnScroll` marca `data-visible`. Ordem em sequência com
  `revealOrder(n)`. Sem JavaScript ou com "reduzir movimento", tudo aparece no estado
  final (`reveal.css`). Não esconder conteúdo de outro jeito.
- **Cor só por token** de `tokens.css`. Coral `--color-coral` é decoração; texto em coral
  usa `--color-coral-deep` (contraste).
- **Regras do CFP para divulgação:** nome completo e CRP visíveis; sem promessa de
  resultado; sem preço como chamariz; sem depoimentos de pacientes.

## Deploy

Vercel, projeto `renata-psico`, a partir do `main`. O `vercel.json` fixa framework
Next.js e os comandos de build, sobrepondo o painel, que ainda guarda o preset Angular
da versão antiga. `NEXT_PUBLIC_SITE_URL` define a URL
canônica quando houver domínio próprio; sem ela, usa a URL de produção da Vercel.

## Git

Commits em português, Conventional Commits (`feat:`, `fix:`, `docs:`...), sem prefixo
de ticket. Quem commita é o Leonardo.
