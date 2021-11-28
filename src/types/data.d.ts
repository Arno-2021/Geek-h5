export type LoginForm = {
    mobile: string
    code: string
}
// axios类型处理
export type ApiResopense<T> = {
    message: string
    data: T
}

export type Token = {
    token: string
    refresh_token: string
}
export type User = {
    id: string
    name: string
    photo: string
    art_count: number
    follow_count: number
    fans_count: number
    like_count: number
}
export type UserDetail = {
    id: string
    name: string
    photo: string
    mobile: string
    gender: number
    birthday: string
    intro: string
}
