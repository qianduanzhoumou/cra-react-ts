import styles from './index.less'
import LoginForm from './login-form';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.content}>
                <div className={styles['login-img']}>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login