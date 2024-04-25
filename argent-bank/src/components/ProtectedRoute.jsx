import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = useSelector(state => state.userSlice.userToken);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return token ? children : null;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;