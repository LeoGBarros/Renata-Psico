import { buildLlmsSummary } from '@/features/seo'

export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsSummary(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
