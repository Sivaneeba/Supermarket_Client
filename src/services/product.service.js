import http from "../http-common";

const getAll = () => {
  return http.get("/products");
};

const get = id => {
  return http.get(`/products/${id}`);
};

const create = (data) => {   
  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("count", data.count);
  formData.append("price", data.price);
  formData.append("image", data.image);   
  formData.append("productCategoryId", data.productCategoryId);

  return http.post("/products",formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
};

// const create = (file) => {
//   let formData = new FormData();

//   formData.append("file", file);

//   return http.post("/products", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     }    
//   });
// };

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};

const remove = id => {
  return http.delete(`/products/${id}`);
};

const removeAll = () => {
  return http.delete(`/products`);
};

const findByName= name => {
  return http.get(`/products?name=${name}`);
};

const getAllPC = () => {
    return http.get("/proCategories");
  };
  
  const getPC = id => {
    return http.get(`/proCategories/${id}`);
  };
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
  getAllPC,
  getPC
};