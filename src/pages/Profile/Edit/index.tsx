import { getUserProfile } from '@/store/actions/profile'
import { useProfile } from '@/utils/hooks'
import { Button, List, NavBar, Popup } from 'antd-mobile'
import classNames from 'classnames'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import EditInput from './EditInput'
import EditList from './EditList'
const Item = List.Item
type InputType = {
    visible: boolean
    type: '' | 'name' | 'intro'
}
type ListType = {
    visible: boolean
    type: '' | 'gender' | 'photo'
}
const ProfileEdit = () => {
    const [hideInput, setHideInput] = useState<InputType>({
        visible: false,
        type: '',
    })
    const [hideList, setHideList] = useState<ListType>({
        visible: false,
        type: '',
    })
    const history = useHistory()
    const { userDetail } = useProfile(getUserProfile, 'profile')
    const hiddenInput = () => {
        setHideInput({
            type: '',
            visible: false,
        })
    }
    const hiddenList = () => {
        setHideList({
            type: '',
            visible: false,
        })
    }
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
                            onClick={() =>
                                setHideList({ type: 'photo', visible: true })
                            }
                            arrow
                        >
                            头像
                        </Item>
                        <Item
                            arrow
                            extra={userDetail.name}
                            onClick={() =>
                                setHideInput({
                                    type: 'name',
                                    visible: true,
                                })
                            }
                        >
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
                            onClick={() =>
                                setHideInput({
                                    type: 'intro',
                                    visible: true,
                                })
                            }
                        >
                            简介
                        </Item>
                    </List>

                    <List className='profile-list'>
                        <Item
                            arrow
                            extra={userDetail.gender === 0 ? '男' : '女'}
                            onClick={() =>
                                setHideList({ type: 'gender', visible: true })
                            }
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
            <Popup
                visible={hideInput.visible}
                bodyStyle={{ width: '100vw' }}
                position='right'
                destroyOnClose
            >
                <EditInput
                    hiddenInput={hiddenInput}
                    type={hideInput.type}
                    msg={
                        hideInput.type === 'name'
                            ? userDetail.name
                            : userDetail.intro
                    }
                ></EditInput>
            </Popup>
            <Popup
                visible={hideList.visible}
                destroyOnClose
                onMaskClick={() => {
                    hiddenList()
                }}
            >
                <EditList
                    type={hideList.type}
                    hiddenList={hiddenList}
                ></EditList>
            </Popup>
        </div>
    )
}

export default ProfileEdit
