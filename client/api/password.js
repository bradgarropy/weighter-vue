import Vue from 'vue';


export default function changePassword(data) {

    return Vue.http.post(`${process.env.API_URL}/api/password`, data);

}
