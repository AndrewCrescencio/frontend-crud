import type { User } from '~/types/user/user.type'

export interface UsersResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}
