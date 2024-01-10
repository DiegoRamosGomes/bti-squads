import { SquadModel } from "@/models/Squad";

type SquadCardHeaderProps = {
  squad: SquadModel
}

export const SquadCardHeader = ({squad}: SquadCardHeaderProps) => {
  const DISCORD_THREAD_URL = 'https://discord.com/channels/1184997707580977283/1192873001314693130/threads/'
  
  return (
    <div className={'bg-violet-950 px-4 py-2 rounded-t'}>
      <div>
        <a target={'_blank'} href={`${DISCORD_THREAD_URL + squad.threadId}`}><h1
          className={'text-base m-0 p-0'}>{squad.name}</h1></a>
        <h2 className={'text-xs m-0 p-0 text-[#5B8FB9] font-bold'}>{squad.nickname ?? squad.name}</h2>
      </div>
      
    </div>
  )
}