import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import { Token } from './data'

// 根类型
export type RootStore = ReturnType<typeof store.getState>
export type RootAction = LoginAction
export type RootThunkAction = ThunkAction<void, RootStore, unknown, RootAction>

// LoginAction

export type LoginAction =
    | {
          type: 'login/login'
          payload: Token
      }
    | {
          type: 'login/getCode'
      }
