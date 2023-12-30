import { instance, headers } from "../ApiFetch";

let key = JSON.parse(localStorage.getItem("userInfo")) || [];

const token = "Bearer " + key[0];
headers["Authorization"] = token;

function addtoWishlist(itemId){
  const suffix = `ecommerce/wishlist/`+itemId;
  return instance.patch(suffix, 
    {
        productId: itemId
    },
    {headers} );
}
function getWishlist() {
  const suffix =`ecommerce/wishlist`;
  return instance.get(suffix, 
    {headers} );
}
function removefromWishlist(itemId) {
  const suffix = `ecommerce/wishlist/` + itemId;
  return instance.delete(suffix, {
      data: {
          productId: itemId
      },
      headers: headers
  });
}

export { addtoWishlist,getWishlist,removefromWishlist};
