import { combineReducers } from "redux"
import User from './users'
import Register from './register'
import ChangePin from './changePin'
import UserDetail from './userDetail'
import ChangePhone from './changePhone'
import Login from './login'
import Transfer from './transfer'
import TopUp from "./topUp"
import WalletDetail from './walletDetail'
import History from "./history"
import ChangePicture from './changePicture'
import Income from './income'
import Expense from './expense'

const rootReducers = combineReducers({
    User,
    Register,
    ChangePin,
    UserDetail,
    ChangePhone,
    Login,
    Transfer,
    TopUp,
    WalletDetail,
    History,
    ChangePicture,
    Income,
    Expense
})

export default rootReducers