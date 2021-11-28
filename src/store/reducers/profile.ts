import { User, UserDetail } from '@/types/data'
import { ProfileAction } from '@/types/store'

type ProfileType = {
    userProfile: User
    userDetail: UserDetail
}
const initVal = {
    userProfile: {},
    userDetail: {},
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
    if (action.type === 'profile/getUserProfile') {
        return {
            ...state,
            userDetail: action.payload,
        }
    }
    return state
}
export default profileRuducer
