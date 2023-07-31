import { axiosInstance } from "../config/axios";

const getDashboardData = async () => {
  try {
    const response = await axiosInstance.get("api/category/getAllCategories");
    console.log("Response-", response);
    return response;
  } catch (e) {
    console.log("Error while calling api-", e);
  }
};

export { getDashboardData };
