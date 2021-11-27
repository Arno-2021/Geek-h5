import { Token } from '@/types/data'
import { LoginAction } from '@/types/store'
import { getToken } from '@/utils/storage'

const initVal: Token = getToken()
function loginReducer(state = initVal, action: LoginAction) {
    if (action.type === 'login/login') {
        return action.payload
    }
    return state
}
export default loginReducer
