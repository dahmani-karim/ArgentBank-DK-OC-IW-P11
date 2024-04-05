// Script pour les différents fetch API

// Récupérer le token de connexion
export async function logUser(email, password) {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const userToken = (await response.json()).body.token;
    sessionStorage.setItem("token", userToken);
    window.location.href = "/user";
    return userToken;
    //return response.json();
}
  
// Récupérer le Profil Utilisateur
export async function getUserProfile(token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
}
  
// Modifier le pseudo utilisateur
export async function changeUsername (newUserName,token){
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUserName }),
    });
    return response.json();
}