import axios from 'axios'

async function login (email, password){
    const form = new FormData()
    form.append("email", email)
    form.append("password", password)

    // error handling try catch
    try {
        const res = await axios.post(`http://192.168.1.12:8000/api/login`, form)
        if (res.status === 200) {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log('err',err)
        return false
    }
}

export default login;