// EditMenu component to edit the userName
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import { changeUsername } from "../../script/api";
import { getUserInfo } from "../../redux/userSlice";

const EditMenu = () => {
    const token = useSelector(state => state.userSlice.userToken);
    const pseudo = useSelector(state => state.userSlice.userProfil.userName);
    const firstName = useSelector(state => state.userSlice.userProfil.firstName);
    const lastName = useSelector(state => state.userSlice.userProfil.lastName);
    const email = useSelector(state => state.userSlice.userProfil.email);
    const dispatch = useDispatch();

    const handleCancelEdit = () => {
        document.querySelector(".edit-component").classList.toggle("active");
        document.querySelector(".menu").classList.toggle("active");
    }

    const handleSaveEdit = () => {
        //Récupération des valeurs des inputs
        const newUserName = document.getElementById('username').value;

        //Appel de la fonction changeUserName
        changeUsername(token, newUserName);
        
        // Mise à jour du userName dans le store
        const userInfos = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            userName: newUserName
        };
        dispatch(getUserInfo(userInfos));

        // Redirection vers la page user
        window.location.href = "/user";
    }

    return (
        <div className="edit-component">
            <h1>Edit user info</h1>
            <form className="edit-menu">
                <div className="input-wrapper">
                    <label htmlFor="username">User name:</label>
                    <input type="text" id="username" placeholder={pseudo}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" id="firstname" placeholder={firstName} disabled/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" id="lastname" placeholder={lastName} disabled/>
                </div>
                <Button
                    className="edit-button"
                    type="submit"
                    btnText="Save"
                    onClick={handleSaveEdit}
                >
                </Button>
                <Button
                    className="edit-button"
                    type="submit"
                    btnText="Cancel"
                    onClick={handleCancelEdit}
                >
                </Button>
            </form>
        </div>
    );
};

export default EditMenu;