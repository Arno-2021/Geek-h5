import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
export default function App() {
    return (
        <div>
            <Switch>
                <Redirect from='/' to='/home' exact></Redirect>
                <Route path='/home'>
                    <Layout></Layout>
                </Route>
                <Route path='/login'>
                    <Login></Login>
                </Route>
            </Switch>
        </div>
    )
}
