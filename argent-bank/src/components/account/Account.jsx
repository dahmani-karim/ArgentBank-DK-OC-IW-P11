// Component for the features section

import { PropTypes } from "prop-types";
import Button from "../button/Button";

const account = ({title,amount,description}) => {
    return (
      <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
      <Button
        className="transaction-button"
        type="button"
        btnText="View transactions"
      >
      </Button>
      </div>
    </section>
    );
};

account.propTypes = {
  amount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
};

export default account;