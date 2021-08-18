import http from "../http-common";

const create = data => {
    return http.post("/carts", data);
};

const get = id => {
    return http.get(`/carts/${id}`);
};

const remove = (id, data) => {
    return http.put(`/carts/pro/${id}`, data);
};

const removeAll = id =>{
    return http.delete(`/carts/user/${id}`)
};

const update = (id,data) =>{
    return http.put(`/carts/${id}`)
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    get,
    remove, 
    removeAll,
    update
}