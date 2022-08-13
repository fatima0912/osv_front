import axios from './service';

// environments

const getUsers = (page, size)=>{
    let url = `/users/page/${page}/size/${size}`
    return axios.get(url);
}

export default getUsers;