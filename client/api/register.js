import Vue from 'vue';


export default function createUser(data) {

    return Vue.http.post(`${process.env.API_URL}/api/user`, data);

}
