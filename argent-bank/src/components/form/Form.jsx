// Form component
import { getUserProfil, logUser } from "../../script/api.jsx"
import Button from "../button/Button.jsx"
import { useDispatch } from "react-redux";
import { login, profil } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction de gestion de l’envoi du formulaire de connexion
    const handleSignIn = async (event) => {
        event.preventDefault();
        //Récupération des valeurs des inputs
        const userEmail = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //Appel de la fonction logUser et récupération du token
        const userToken = await logUser(userEmail, password);
        // Envoi du token au store
        dispatch(login(userToken))

        //Appel de la fonction getUserProfil
        const userProfil = await getUserProfil(userToken);
        // Création d’un objet contenant les informations de l’utilisateur
        const userInfos = {
            email: userProfil.email,
            firstName: userProfil.firstName,
            lastName: userProfil.lastName,
            userName: userProfil.userName
        };
        // Envoi des informations de l’utilisateur au store
        dispatch(profil(userInfos));

        navigate('/user');
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