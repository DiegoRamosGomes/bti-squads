export interface SquadModel {
  id: number
  name: string
  nickname: string | null
  threadId: string
  mentor: MentorModel
  leader: LeaderModel
  members: MemberModel[]
}

export interface MentorModel {
  name: string
  userId: string
  username: string
}

export interface LeaderModel {
  name: string
  userId: string
  username: string
  assistants: Assistant[]
}

export interface Assistant {
  name: string
  userId: string
  username: string
}

export interface MemberModel {
  name: string
  userId: string
  username: string
}
