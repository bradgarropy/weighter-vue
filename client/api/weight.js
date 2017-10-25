import Vue from 'vue';

export function getWeights() {

    return Vue.http.get(`${process.env.API_URL}/api/weight`);

}


export function getWeight(id) {

    return Vue.http.get(`${process.env.API_URL}/api/weight/${id}`);

}


export function createWeight(data) {

    return Vue.http.post(`${process.env.API_URL}/api/weight`, data);

}


export function updateWeight(id, data) {

    return Vue.http.put(`${process.env.API_URL}/api/weight/${id}`, data);

}


export function deleteWeight(id) {

    return Vue.http.delete(`${process.env.API_URL}/api/weight/${id}`);

}
