import { Button } from "antd"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const userInfo = 'zy'

    const handelClick = () => {
        localStorage.setItem('userData', userInfo)
        navigate('/')
    }

    return (
        <div>
            <Button onClick={handelClick}>{t('首页')}</Button>
        </div>
    )
}

export default Login