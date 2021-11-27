import { Token } from '@/types/data'

const TOKEN_KEY = 'login/token'
export const setToken = (value: Token): void => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(value))
}
export const getToken = (): Token => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}')
}
export const removeToken = (): void => {
    localStorage.removeItem(TOKEN_KEY)
}
export const hasToken = (): boolean => {
    return !!getToken().token
}
