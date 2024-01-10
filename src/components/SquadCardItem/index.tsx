import { SquadModel } from "@/models/Squad";
import { SquadCardHeader } from "@/components/SquadCardItem/SquadCardHeader";
import { SquadCardLeader } from "@/components/SquadCardItem/SquadCardLeader";
import { SquadCardLeaderAssistants } from "@/components/SquadCardItem/SquadCardLeaderAssistants";
import { SquadCardMembers } from "@/components/SquadCardItem/SquadCardMembers";
import { SquadCardMentor } from "@/components/SquadCardItem/SquadCardMentor";
import './styles.css'

type SquadCardItemProps = {
  squad: SquadModel
}

export const SquadCardItem = ({squad}: SquadCardItemProps) => {
  return (
    <div className={'border border-neutral-800/50 rounded-md flex flex-col'}>
      <SquadCardHeader squad={squad} />
      <div className={'px-4 py-2 bg-neutral-800/20 flex-1 max-h-80 overflow-y-scroll overflow-x-hidden custom-scroll-bar'}>
        <SquadCardLeader squad={squad} />
        <SquadCardMentor squad={squad} />
        <SquadCardLeaderAssistants squad={squad} />
        <SquadCardMembers squad={squad} />
      </div>
    </div>
  )
}