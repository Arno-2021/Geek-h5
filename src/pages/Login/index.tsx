import { Button } from 'antd-mobile'
import Icon from '@/components/Icon'
export default function Login() {
    return (
        <div>
            <Button color='primary'>按钮</Button>
            <Icon
                type='iconbtn_like_sel'
                className='aa'
                onClick={() => console.log('点击了')}
            ></Icon>
        </div>
    )
}
