import { API_URL } from "@lib/Enviroments";

export const GetAllProducts = async (token) => {
  // let query_params = new URLSearchParams()
  // if (preferencia_id) {
  //   query_params.append('preferencia', preferencia_id)
  // }
  // const response = await fetch(`${API_URL}/productos/productos/list?${query_params}`)
  const response = await fetch(`${API_URL}/products`, {
    //headers: {
      //Authorization: "Bearer " + token,
    //},
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};

export const SearchAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`, {
  });
  const status = response.status;
  const data = await response.json();
  console.log("lista de productos a buscar:",data);
  return { data, status };
};
export const GetProductById = async (id) => {
  const response = await fetch(`${API_URL}/productos/productos/${id}`);
  const data = await response.json();
  return data;
};

export const PostProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const UploadProductImage = async (image) => {
  let formData = new FormData();
  formData.append("productImage", image);
  const response = await fetch(`${API_URL}/products/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log("data de retorno de upload image : ",data)
  return data;
};
