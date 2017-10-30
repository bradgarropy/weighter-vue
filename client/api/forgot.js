import Vue from 'vue';


export default function forgot(data) {

    return Vue.http.post(`${process.env.API_URL}/api/forgot`, data);

}
