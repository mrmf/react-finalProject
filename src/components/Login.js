import React from "react";
import { AuthContext } from "../authContext";
export const Login = () => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };
const [data, setData] = React.useState(initialState);
const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    fetch("https://fakestoreapi.com/auth/login", {
        method:'POST',
        body:JSON.stringify({
            username: data.username, //"mor_2314",
            password: data.password //"83r5^_"
        }),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        }
    })

        .then((res)  =>  res.json())
         .then((result) => {
         dispatch({
             type: "LOGIN",
             user: data.username,
             token: result.token
         });
        
           //console.log(result.token);
       
         localStorage.setItem("token", result.token)
         localStorage.setItem("user", data.username)
       })
       .catch(error => {
         setData({
           ...data,
           isSubmitting: false,
           errorMessage: error.message || error.statusText
         });
      });      
       
  };
return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
  
			<label htmlFor="username">
              Username
              <input
                type="text"
                value={data.username}
                onChange={handleInputChange}
                name="username"
                id="username"
              />
            </label>

			<label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>

			{data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}

           <button disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                "Loading..."
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;