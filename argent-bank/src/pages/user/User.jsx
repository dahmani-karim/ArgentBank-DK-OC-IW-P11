// User page component

import Button from "../../components/button/Button";
import transactions from "../../datas/transactions";
import Account from "../../components/account/Account";
import { useSelector } from "react-redux";

const User = () => {
  const pseudo = useSelector(state => state.userSlice.userProfil.userName);
    return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{pseudo}!</h1>
        <Button
          className="edit-button"
          type="button"
          btnText="Edit Name"
        >
        </Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {transactions.map((transaction, index) => (
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