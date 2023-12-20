import axios from "axios";

const url = "https://academics.newtonschool.co/api/v1/"
export const headers = {
  "Content-Type": "application/json",
  projectId: "gams07bkd3di",
};
const instance = axios.create({
    baseURL: url,
    headers
  });

  const dressList = async () => {
    const suffix=url+"ecommerce/clothes/products?limit=1597";
    try {
      const response = await instance.get(
        suffix,
      );
  
      return response.data;
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  };

  const dressDetail = async (id) => {
    const suffix=url+"ecommerce/product/"+id;
    try {
      const response = await instance.get(
        suffix,
      );
  
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export  {dressList,dressDetail,instance};