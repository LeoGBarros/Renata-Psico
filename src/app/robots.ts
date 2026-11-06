import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

// Robôs de IA liberados um a um: bloquear qualquer um tira a Renata das respostas
// do ChatGPT, Gemini, Perplexity e Claude.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'Google-Extended',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Applebot-Extended',
  'Bingbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  }
}
