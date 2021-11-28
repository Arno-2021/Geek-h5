import { getUserProfile } from '@/store/actions/profile'
import { RootStore } from '@/types/store'
import { Button, List, NavBar } from 'antd-mobile'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import styles from './index.module.scss'

const Item = List.Item

const ProfileEdit = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { userDetail } = useSelector((state: RootStore) => state.profile)
    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch])
    return (
        <div className={styles.root}>
            <div className='content'>
                {/* 标题 */}
                <NavBar
                    style={{
                        '--border-bottom': '1px solid #F0F0F0',
                    }}
                    onBack={() => history.go(-1)}
                >
                    个人信息
                </NavBar>

                <div className='wrapper'>
                    {/* 列表 */}
                    <List className='profile-list'>
                        {/* 列表项 */}
                        <Item
                            extra={
                                <span className='avatar-wrapper'>
                                    <img
                                        width={24}
                                        height={24}
                                        src={userDetail.photo}
                                        alt=''
                                    />
                                </span>
                            }
                            arrow
                        >
                            头像
                        </Item>
                        <Item arrow extra={userDetail.name}>
                            昵称
                        </Item>
                        <Item
                            arrow
                            extra={
                                <span
                                    className={classNames(
                                        'intro',
                                        userDetail.intro && 'normal'
                                    )}
                                >
                                    {userDetail.intro
                                        ? userDetail.intro
                                        : '未填写'}
                                </span>
                            }
                        >
                            简介
                        </Item>
                    </List>

                    <List className='profile-list'>
                        <Item
                            arrow
                            extra={userDetail.gender === 0 ? '男' : '女'}
                        >
                            性别
                        </Item>
                        <Item arrow extra={userDetail.birthday}>
                            生日
                        </Item>
                    </List>
                </div>

                <div className='logout'>
                    <Button className='btn'>退出登录</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
