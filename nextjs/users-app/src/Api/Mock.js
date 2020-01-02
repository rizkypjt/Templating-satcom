// const users = [{
//     id: 1,    
//     username: 'admin',
//     password: 'admin'
// }]

async function login (email, password){
    if (email === "coba@gmail.com" && password === "cobacoba") {
        return true
    } else {
        return false
    }
}

export default login;