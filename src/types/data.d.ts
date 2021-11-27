export type LoginForm = {
    mobile: string
    code: string
}
export type Token = {
    token: string
    refresh_token: string
}
// axios类型处理
export type ApiResopense<T> = {
    message: string
    data: T
}
