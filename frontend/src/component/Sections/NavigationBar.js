import Buttons from "./Buttons";

const NavigationBar = () => {

    return (
        <div className="NavigationBar">
            <LoginNav />
        </div>
    )
}


const LoginNav = () => {
    return (
        <div className="NavigationBar">
            <Buttons name="Gallery" />
            <Buttons name="Log In" />
        </div>
    )
}

const UserNav = () => {
    return (
        <div className="NavigationBar">
            <Buttons name="Log Out" />
        </div>
    )
}

const CompNav = () => {
    return (
        <div className="NavigationBar">
            <Buttons name="Log Out" />
        </div>
    )
}

export default NavigationBar;