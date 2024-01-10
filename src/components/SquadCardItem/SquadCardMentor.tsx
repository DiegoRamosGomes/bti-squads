import { SquadModel } from "@/models/Squad";

type SquadCardMentorProps = {
  squad: SquadModel
}

export const SquadCardMentor = ({squad}: SquadCardMentorProps) => {
  const DISCORD_MEMBER_URL = 'https://discord.com/users/'
  
  return (
    <p className={'text-sm pb-2'}>
      <span className={'font-bold text-xs text-[#5B8FB9]'}>Mentor:</span> <span className={'text-sm'}>{squad.mentor.name}</span>
      <span className={'text-xs/3'}> (<a
        href={`${DISCORD_MEMBER_URL + squad.mentor.userId}`}
        target={'_blank'}
        className={'text-indigo-400'}
      >
            @{squad.mentor.username}
          </a>)</span>
    </p>
  )
}