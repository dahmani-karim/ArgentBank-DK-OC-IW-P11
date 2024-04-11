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
    return userToken;
}
  
// Récupérer le Profil Utilisateur
export async function fetchUserProfil(token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const userProfile = (await response.json()).body;
    return userProfile;
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