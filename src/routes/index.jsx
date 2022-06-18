import {Route, Switch} from 'react-router-dom'
import {Login} from '../pages/Login'
import { Register } from '../pages/Register'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register/>
            </Route>
        </Switch>
    )
}