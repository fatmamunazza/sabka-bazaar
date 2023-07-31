import { axiosInstance } from "../config/axios";

const getCartDetails = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `api/cart/getAllProductsByUserId/${userId}`
    );
    console.log("Response-", response);
    return response;
  } catch (e) {
    console.log("Error while calling api-", e);
  }
};

const addOrRemoveProduct = async (data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post(
      "api/cart/addOrRemoveProduct",
      data
    );
    console.log("Response-", response);
    return response;
  } catch (e) {
    console.log("Error while calling api-", e);
  }
};
export { getCartDetails, addOrRemoveProduct };
