// EditMenu component to edit the userName
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import Button from "../button/Button";

const EditMenu = () => {
    const pseudo = useSelector(state => state.userSlice.userProfil.userName);
    const firstName = useSelector(state => state.userSlice.userProfil.firstName);
    const lastName = useSelector(state => state.userSlice.userProfil.lastName);
    //const dispatch = useDispatch();

    return (
        <div>
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
                >
                </Button>
                <Button
                    className="edit-button"
                    type="submit"
                    // onClick={window.location.href = "/"}
                    btnText="Cancel"
                >
                </Button>
            </form>
        </div>
    );
};

export default EditMenu;