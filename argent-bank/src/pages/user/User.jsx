// User page component

import Button from "../../components/button/Button";
import transactions from "../../datas/transactions";
import Account from "../../components/account/Account";
import { useSelector } from "react-redux";
import EditMenu from "../../components/editMenu/EditMenu";

const User = () => {

  const handleEditName = () => {
    document.querySelector(".edit-component").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
  }

  const pseudo = useSelector(state => state.userSlice.userProfil.userName);
  const userID = useSelector(state => state.userSlice.userProfil.id);
    return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{pseudo} !</h1>
        <EditMenu />
        <Button
          className="edit-button menu"
          type="button"
          btnText="Edit Name"
          onClick={handleEditName}
        >
        </Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {transactions[userID].map((transaction, index) => (
        <Account
        key={"transaction"+index}
        amount={transaction.amount}
        title={transaction.title}
        description={transaction.description}
        />
      ))}
    </main>
    );
};

export default User;