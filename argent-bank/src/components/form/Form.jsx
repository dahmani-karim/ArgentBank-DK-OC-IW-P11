// Form component

import { logUser } from "../../script/api.jsx"
import Button from "../button/Button.jsx"

const Form = () => {

    // Fonction de gestion de l’envoi du formulaire de connexion
    const handleSignIn = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        logUser(username, password);
    };

    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="example@example.fr"/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Password"/>
            </div>
            <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
            </div>
            <Button
                className="sign-in-button"
                type="submit"
                onClick={handleSignIn}
                btnText="Sign In"
            >
            </Button>
        </form>
    );
};

export default Form;