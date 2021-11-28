import { TabBar } from 'antd-mobile'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useHistory, Route, Switch, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import QA from '@/pages/Question'
import Video from '@/pages/Video'
import Profile from '@/pages/Profile'
const tabs = [
    { path: '/home', icon: 'iconbtn_home', text: '首页' },
    { path: '/home/question', icon: 'iconbtn_qa', text: '问答' },
    { path: '/home/video', icon: 'iconbtn_video', text: '视频' },
    { path: '/home/profile', icon: 'iconbtn_mine', text: '我的' },
]

const Layout = () => {
    const history = useHistory()
    const location = useLocation()

    const routeChange = (key: string) => {
        history.push(key)
    }
    return (
        <div className={styles.root}>
            {/* 内容 */}
            <Switch>
                <Route exact path='/home'>
                    <Home></Home>
                </Route>
                <Route path='/home/question'>
                    <QA></QA>
                </Route>
                <Route path='/home/video'>
                    <Video></Video>
                </Route>
                <Route path='/home/profile'>
                    <Profile></Profile>
                </Route>
            </Switch>
            {/* Tab栏 */}
            <TabBar className='tab-bar' onChange={routeChange}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.path}
                        icon={
                            <Icon
                                type={
                                    location.pathname === item.path
                                        ? `${item.icon}_sel`
                                        : item.icon
                                }
                                className='tab-bar-item-icon'
                            />
                        }
                        title={item.text}
                    />
                ))}
            </TabBar>
        </div>
    )
}

export default Layout
