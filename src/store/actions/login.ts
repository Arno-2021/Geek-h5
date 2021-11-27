import { ApiResopense, LoginForm, Token } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import axios from '@/utils/request'
export const login = (data: LoginForm): RootThunkAction => {
    return async dispatch => {
        const res = await axios.post<ApiResopense<Token>>(
            '/authorizations',
            data
        )
        dispatch({
            type: 'login/login',
            payload: res.data.data,
        })
    }
}
