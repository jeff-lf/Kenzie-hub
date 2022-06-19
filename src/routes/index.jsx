import { useEffect } from 'react'
import { useState } from 'react'
import {Route, Switch} from 'react-router-dom'
import { Home } from '../pages/Home'
import {Login} from '../pages/Login'
import { Register } from '../pages/Register'

export const Routes = () => {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@Kenziehub:token'))

        if(token){
            return setAuthenticated(true)
        }
    }, [authenticated])


    return (
        <Switch>
            <Route exact path='/'>
                <Login 
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Route>
            <Route path='/register'>
                <Register authenticated={authenticated}/>
            </Route>
            <Route path='/home'>
                <Home authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}