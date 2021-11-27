import { LoginForm } from '@/types/data'
import { NavBar, Form, List, Input, Button } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './index.module.scss'
import { login } from '@/store/actions/login'
export default function Login() {
    const histroy = useHistory()
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    return (
        <div className={styles.root}>
            <NavBar onBack={() => histroy.go(-1)}></NavBar>
            {/* 表单 */}
            <div className='login-form'>
                <h2 className='title'>账号登录</h2>

                <Form
                    form={form}
                    autoComplete='off'
                    initialValues={{
                        mobile: '13511111111',
                        code: '246810',
                    }}
                    validateTrigger={['onBlur', 'onChange']}
                    onFinish={(values: LoginForm) => {
                        dispatch(login(values))
                        histroy.push('/home')
                    }}
                >
                    <Form.Item
                        className='login-item'
                        name='mobile'
                        rules={[
                            { required: true, message: '请输入手机号' },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号',
                            },
                        ]}
                    >
                        <Input
                            placeholder='请输入手机号'
                            maxLength={11}
                        ></Input>
                    </Form.Item>
                    <List.Item
                        className='login-code-extra'
                        extra={<span className='code-extra'>发送验证码</span>}
                    >
                        <Form.Item
                            className='login-item'
                            name='code'
                            rules={[
                                { required: true, message: '请输入验证码' },
                                {
                                    pattern: /^\d{6}$/,
                                    message: '请输入6位验证码',
                                },
                            ]}
                        >
                            <Input placeholder='请输入验证码'></Input>
                        </Form.Item>
                    </List.Item>
                    <Form.Item>
                        <Button
                            color='primary'
                            block
                            className='login-submit'
                            type='submit'
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
