import { User } from '@/types/data'
import { ProfileAction } from '@/types/store'

type ProfileType = {
    userProfile: User
}
const initVal = {
    userProfile: {},
} as ProfileType
const profileRuducer = (
    state = initVal,
    action: ProfileAction
): ProfileType => {
    if (action.type === 'profile/getProfile') {
        return {
            ...state,
            userProfile: action.payload,
        }
    }
    return state
}
export default profileRuducer
