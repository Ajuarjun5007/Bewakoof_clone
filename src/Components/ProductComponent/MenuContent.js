import { useSelector, useDispatch } from "react-redux";

const MenuContent = () =>{
    
    const productListResult = useSelector(
        (state) => state.productReducer.dressList
      );
      const productList = productListResult?.data;
      console.log("pro",productList);
}
export {MenuContent};