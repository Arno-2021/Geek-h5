import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import { Token, User, UserDetail } from './data'

// 根类型
export type RootStore = ReturnType<typeof store.getState>
export type RootAction = LoginAction | ProfileAction
export type RootThunkAction = ThunkAction<void, RootStore, unknown, RootAction>

// LoginAction

export type LoginAction = {
    type: 'login/login'
    payload: Token
}
// ProfileAction
export type ProfileAction =
    | {
          type: 'profile/getProfile'
          payload: User
      }
    | {
          type: 'profile/getUserProfile'
          payload: UserDetail
      }
