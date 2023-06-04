import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    // 这里的name与外层的reducer下的名称要对应，不然使用useSelector提取不到数据
    name: 'logins',
    initialState: {
        value: false
    },
    reducers: {
        login: state => {
            state.value = true
        },
        logout: state => {
            state.value = false
        },
    }
})

export const selectLogin = (state: { logins: { value: any } }) => state.logins.value

export const { login, logout } = counterSlice.actions

export default counterSlice.reducer