import { SquadModel } from "@/models/Squad";

type SquadCardLeaderProps = {
  squad: SquadModel
}

export const SquadCardLeader = ({squad}: SquadCardLeaderProps) => {
  const DISCORD_MEMBER_URL = 'https://discord.com/users/'
  
  return (
    <p className={'text-sm'}>
      <span className={'font-bold text-xs text-[#5B8FB9]'}>Líder:</span> <span className={'text-sm'}>{squad.leader.name}</span>
      <span className={'text-xs/3'}> (<a
        href={`${DISCORD_MEMBER_URL + squad.leader.userId}`}
        target={'_blank'}
        className={'text-indigo-400'}
      >
            @{squad.leader.username}
          </a>)</span>
    </p>
  )
}