import Axios from "axios";

export async function getProduct(id) {
  let response = await Axios.get(
    "https://5dd14f8d15bbc2001448d07d.mockapi.io/products/" + id
  );
  return response;
}

export async function getProducts() {
  let response = await Axios.get(
    "https://5dd14f8d15bbc2001448d07d.mockapi.io/products/"
  );
  return response;
}

export async function deleteProduct(id) {
  let response = await Axios.delete(
    "https://5dd14f8d15bbc2001448d07d.mockapi.io/products/" + id
  );
  return response;
}

export async function newProduct(payLoad) {
  const response = await Axios.post(
    "https://5dd14f8d15bbc2001448d07d.mockapi.io/products",
    payLoad
  );
  return response;
}

export function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
