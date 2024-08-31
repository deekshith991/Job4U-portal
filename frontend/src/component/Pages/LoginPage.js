import '../css/LoginPage.css';
import Loginform from '../Sections/Loginform';


const LoginPage = () => {

    return (
        <div className="loginpage">
            <div className='LoginCard'>
                <h1>Login Page</h1>
                <Loginform />
            </div>
        </div>
    )
}

export default LoginPage;