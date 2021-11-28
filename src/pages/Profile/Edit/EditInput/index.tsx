import { editProfile } from '@/store/actions/profile'
import { Input, NavBar, TextArea } from 'antd-mobile'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './index.module.scss'
type Props = {
    hiddenInput: () => void
    type: '' | 'name' | 'intro'
    msg: string
}
const EditInput = ({ hiddenInput, type, msg }: Props) => {
    const [value, setValue] = useState(msg)
    const dispatch = useDispatch()
    return (
        <div className={styles.root}>
            <NavBar
                className='navbar'
                right={
                    <span
                        className='commit-btn'
                        onClick={() => {
                            dispatch(editProfile(type, value))
                            hiddenInput()
                        }}
                    >
                        提交
                    </span>
                }
                onBack={() => hiddenInput()}
            >
                编辑{type === 'name' ? '昵称' : '简介'}
            </NavBar>

            <div className='edit-input-content'>
                <h3>{type === 'name' ? '昵称' : '简介'}</h3>

                {type === 'name' ? (
                    <div className='input-wrap'>
                        <Input
                            placeholder='请输入昵称'
                            value={value}
                            onChange={val => setValue(val)}
                        />
                    </div>
                ) : (
                    <TextArea
                        className='textarea'
                        maxLength={99}
                        placeholder='请输入简介'
                        showCount
                        value={value}
                        onChange={val => setValue(val)}
                    ></TextArea>
                )}
            </div>
        </div>
    )
}

export default EditInput
