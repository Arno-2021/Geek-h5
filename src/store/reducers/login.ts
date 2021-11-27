import { Token } from '@/types/data'
import { LoginAction } from '@/types/store'

const initVal: Token = {} as Token
function loginReducer(state = initVal, action: LoginAction) {
    if (action.type === 'login/login') {
        return action.payload
    }
    return state
}
export default loginReducer
