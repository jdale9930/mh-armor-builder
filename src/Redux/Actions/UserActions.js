export const LOGIN = "Login";
export const LOGOUT = "Logout"

export function login(username, id){
    return{type: LOGIN, user: {username: username, id: id}}
}

export function logout(){
    return{type: LOGOUT}
}