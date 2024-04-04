import axios from 'axios';

export const GET_TOKEN = 'GET_TOKEN';
export const GET_USER = 'GET_USER';

export const logUser = (email, password) => {
    return async (dispatch) => {
        try {
            return axios.post('http://localhost:3001/api/v1/user/login', {
                email,
                password
            }).then((response) => {
                dispatch({type: GET_TOKEN,payload: response.data});
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const getUser = (token) => {
    return async (dispatch) => {
        try {
            return axios.post('http://localhost:3001/api/v1/user/profil', {
                token
            }).then((response) => {
                dispatch({type: GET_USER,payload: response.data});
            });
        } catch (error) {
            console.error(error);
        }
    };
}