import { SquadModel } from "@/models/Squad";
import Image from "next/image";

type SquadCardMembersProps = {
  squad: SquadModel
}

export const SquadCardMembers = ({ squad }: SquadCardMembersProps) => {
  const DISCORD_MEMBER_URL = 'https://discord.com/users/'
  
  return (
    <div>
      <p className={'font-bold text-xs mt-2 text-[#5B8FB9]'}>Estagiários:</p>
      <div className="flex flex-col gap-2">
        {squad.members.map((member) => {
          return <p key={member.userId} className={'text-sm pl-2 flex flex-col'}>
            <span>{member.name}</span>
            <a href={`${DISCORD_MEMBER_URL + member.userId}`}
               target={'_blank'}
               className={'text-indigo-400/50 text-xs/3 flex items-center gap-1'}
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
              @{member.username}
            </a>
          </p>
        })}
      </div>
    </div>
  )
}