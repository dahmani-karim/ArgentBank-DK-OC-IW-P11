import axios from 'axios';

//export const GET_TOKEN = 'GET_TOKEN';
export const GET_PROFILE = 'GET_PROFILE';

// export const getToken = (email,password) => {
//     return async (dispatch) => {
//         try {
//             return axios.post('http://localhost:3001/api/v1/user/login', {
//                 email,
//                 password
//             }).then((response) => {
//                 dispatch({type: GET_TOKEN,payload: response.data});
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }
const token = sessionStorage.getItem('token');
export const getProfile = () => {
    return async (dispatch) => {
        try {
            return axios.post('http://localhost:3001/api/v1/user/profil', {
                token
            }).then((response) => {
                dispatch({type: GET_PROFILE,payload: response.data});
            });
        } catch (error) {
            console.error(error);
        }
    };
}