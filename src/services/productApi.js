import { axiosInstance } from "../config/axios";

const getProducts = async (category) => {
  try {
    let api = "api/products/getProductsByCategory/" + category;
    if (category === "allProduct") {
      api = "api/products/getAllProducts";
    }
    const response = await axiosInstance.get(api);
    console.log("Response-", response);
    return response;
  } catch (e) {
    console.log("Error while calling api-", e);
  }
};

export { getProducts };
