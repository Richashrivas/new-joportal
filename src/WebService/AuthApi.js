import axios from 'axios'

class AuthApi {

    PostApiCall(url, data) {
        return axios.post(url, data)
    }
}

const SERVER = 'http://apps.codebetter.in:8082/cbjobportal'

export const urls = {
    LOGIN: `${SERVER}/auth/login`,
    REGISTER: `${SERVER}/candidate/save`,

}

export default new AuthApi