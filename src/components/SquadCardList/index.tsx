import { SquadModel } from "@/models/Squad";
import { SquadCardItem } from "@/components/SquadCardItem";

export const SquadCardList = async () => {
  
  const response = await fetch('http://localhost:3000/api/squads')
  const squads: SquadModel[] = await response.json()
  
  return (
    <div className={'flex flex-col gap-8 mx-4 md:grid md:grid-cols-2 lg:mx-0 lg:grid-cols-3 md:gap-x-4 md:gap-y-8'}>
      {squads.map((squad) => <SquadCardItem key={squad.id} squad={squad}/>)}
    </div>
  )
}