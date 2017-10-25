import Vue from 'vue';


export function getUsers() {

    return Vue.http.get(`${process.env.API_URL}/api/user`);

}


export function getUser(id) {

    return Vue.http.get(`${process.env.API_URL}/api/user/${id}`);

}


export default function createUser(data) {

    return Vue.http.post(`${process.env.API_URL}/api/user`, data);

}


export function updateUser(id, data) {

    return Vue.http.put(`${process.env.API_URL}/api/user/${id}`, data);

}
