import axios from "axios";

const url = "http://localhost:3001/products";

export async function getAllProducts() {
  return axios.get(url).then((res) => res.data);
}

export const getProductById = async (id) => {
  //return axios.get(`${url}/${id}`).then((response) => response.data);
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const newProduct = async (product) => {
  return await axios.post(url, product);
};

export const editProduct = async (id, product) => {
  return await axios.put(`${url}/${id}`, product);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
