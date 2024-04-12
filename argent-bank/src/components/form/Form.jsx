// Form component
import { fetchUserProfil, logUser } from "../../script/api.jsx"
import Button from "../button/Button.jsx"
import { useDispatch } from "react-redux";
import { getUserToken, getUserInfo } from "../../redux/userSlice";

const Form = () => {
    const dispatch = useDispatch();

    // Fonction de gestion de l’envoi du formulaire de connexion
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        //Récupération des valeurs des inputs
        const userEmail = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //Appel de la fonction logUser et récupération du token
        const userToken = await logUser(userEmail, password);
        localStorage.setItem('token', userToken);
        // Envoi du token au store
        dispatch(getUserToken(userToken))

        //Appel de la fonction fetchUserProfil
        const userProfil = await fetchUserProfil(userToken);
        // Création d’un objet contenant les informations de l’utilisateur
        const userInfos = {
            id : userProfil.id,
            email: userProfil.email,
            firstName: userProfil.firstName,
            lastName: userProfil.lastName,
            userName: userProfil.userName
        };
        // Envoi des informations de l’utilisateur au store
        dispatch(getUserInfo(userInfos));

        window.location.href = "/user";
    };

    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="example@example.fr" autoComplete="off"/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Password" autoComplete="off"/>
            </div>
            <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
            </div>
            <Button
                className="sign-in-button"
                type="submit"
                onClick={handleLoginSubmit}
                btnText="Sign In"
            >
            </Button>
        </form>
    );
};

export default Form;