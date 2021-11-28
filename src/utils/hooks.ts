import { RootStore } from '@/types/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useProfile<T extends keyof RootStore>(
    action: () => void,
    key: T
) {
    const dispatch = useDispatch()
    const state = useSelector((state: RootStore) => state[key])
    useEffect(() => {
        dispatch(action())
    }, [dispatch, action])
    return state
}
