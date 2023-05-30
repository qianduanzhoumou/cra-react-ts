import { Button } from "antd"
import { useNavigate } from 'react-router-dom'
// import { useState } from "react"

const Login = () => {
    const navigate = useNavigate()
    const userInfo = 'zy'

    const handelClick = () => {
        localStorage.setItem('userData', userInfo)
        navigate('/')
    }

    return <div>
        <Button onClick={handelClick}>跳转到首页</Button>
    </div>
}

export default Login