import { combineReducers } from "redux"
import User from './users'
import Register from './register'
import ChangePin from './changePin'
import UserDetail from './userDetail'
import ChangePhone from './changePhone'
import Login from './login'

const rootReducers = combineReducers({
    User,
    Register,
    ChangePin,
    UserDetail,
    ChangePhone,
    Login
})

export default rootReducers