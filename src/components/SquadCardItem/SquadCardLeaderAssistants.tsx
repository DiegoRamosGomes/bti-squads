import { SquadModel } from "@/models/Squad";
import Image from "next/image";

type SquadCardLeaderAssistantsProps = {
  squad: SquadModel
}

export const SquadCardLeaderAssistants = ({ squad }: SquadCardLeaderAssistantsProps) => {
  const DISCORD_MEMBER_URL = 'https://discord.com/users/'
  
  if (!squad.leader.assistants.length) {
    return null
  }
  
  return (
    <div>
      <p className={'font-bold text-xs mt-2 text-[#5B8FB9]'}>Assistentes do lider:</p>
      <div className="flex flex-col gap-2">
        {squad.leader.assistants.map((assistant) => {
          return <p key={assistant.userId} className={'text-sm pl-2 flex flex-col'}>
            <span>{assistant.name}</span>
            <a className={'text-indigo-400/50 text-xs/3 flex items-center gap-1'}
               href={`${DISCORD_MEMBER_URL + assistant.userId}`}
               target={'_blank'}
            >
              <Image
                src={'/assets/discord-icon.webp'}
                alt={'Discord'}
                width={12}
                height={12}
                style={{
                  opacity: .5
                }}
              />
              @{assistant.username}
            </a>
          </p>
        })}
      </div>
    </div>
  )
}