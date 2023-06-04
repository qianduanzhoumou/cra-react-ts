import { configureStore } from '@reduxjs/toolkit'
import loginsReducer from './loginsReducer'

export default configureStore({
    reducer: {
        logins: loginsReducer
    }
})