import { instance, headers } from "../ApiFetch";
let key = JSON.parse(localStorage.getItem("userInfo")) || [];

const token = "Bearer " + key[0];
headers["Authorization"] = token;

const productDetail = async (id) => {
    const suffix="ecommerce/product/"+id;
    try {
      const response = await instance.get(
        suffix,
      );
  
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const productFilterService = async (filters = {}) => {
    const size = 'size';
    const val = 'M';
    // const suffix=`ott/show?filter={"`+key+`":"`+value.toLowerCase()+`"}`

    const suffix=`ecommerce/clothes/products?filter=${JSON.stringify(filters)}`;
    
    try {
      const response = await instance.get(
        suffix,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const productReview = async (itemId) => {
    const suffix="ecommerce/review/"+itemId;
    // console.log("baseurl",instance.baseURL);
    try {
      const response = await instance.get(
        suffix,{
            headers: headers
        }
      );
  
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addReview = async (itemId) => {
    const suffix = "ecommerce/review/" + itemId;
    try {
      const response = await instance.post(
        suffix,
        {
          ratings: ratings,
          text: text,
        },
        {
          headers: headers,
        }
      );
  
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
export {productDetail,productFilterService,productReview,addReview};
