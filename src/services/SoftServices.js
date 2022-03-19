import axios from 'axios';

const Soft_API_Url='http://localhost:8080/api/v1/software';

class SoftService{
    getSoftwares(){
        return axios.get(Soft_API_Url)
    }

    createSoftware(software)
    {
        return axios.post(Soft_API_Url,software)
    }
}

export default new SoftService();