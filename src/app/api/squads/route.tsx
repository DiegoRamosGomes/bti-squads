import data from '@/utils/squads.json'

export async function GET() {
  return Response.json(data)
}