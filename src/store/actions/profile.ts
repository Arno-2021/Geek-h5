import { ApiResopense, User } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import axios from '@/utils/request'
export const getProfile = (): RootThunkAction => {
    return async dispatch => {
        const res = await axios.get<ApiResopense<User>>('/user')
        dispatch({
            type: 'profile/getProfile',
            payload: res.data.data,
        })
    }
}
