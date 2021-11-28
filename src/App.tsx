import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Edit from '@/pages/Profile/Edit'
export default function App() {
    return (
        <div className='app'>
            <Switch>
                <Redirect from='/' to='/home' exact></Redirect>
                <Route path='/home'>
                    <Layout></Layout>
                </Route>
                <Route path='/login'>
                    <Login></Login>
                </Route>
                <Route path='/profile/edit'>
                    <Edit></Edit>
                </Route>
            </Switch>
        </div>
    )
}
