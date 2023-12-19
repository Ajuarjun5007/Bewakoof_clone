import { instance } from "../ApiFetch";

function signup(signupRequest) {
    const suffix = `user/signup`;
    return instance.post(suffix, signupRequest);
  }
  
  function login(email, password) {
    const suffix = `user/login`;
    return instance.post(suffix, {
      email: email,
      password: password,
      appType: "ecommerce",
    });
   
  }
  
  export { signup,login };
  