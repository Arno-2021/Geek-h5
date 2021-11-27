import React from 'react'
import { Button } from 'antd-mobile'
export default function Login() {
    return (
        <div>
            <Button color='primary'>按钮</Button>
            <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#iconbtn_like_sel'></use>
            </svg>
        </div>
    )
}
