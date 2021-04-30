import React,{useContext} from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import Header from "./components/Nav/Header"
import Product from "./components/Products/Product";
import ProductsList from "./components/Products/ProductsList";
import {AuthContext} from "./authContext";
import {BasketContext} from "./components/Products/BasketContext"
import {ThemeContext} from "./components/ThemeContext";

const initialState = {
  isAuthenticated: (localStorage.getItem("token") != null) ?true :false,
  user: (localStorage.getItem("token") != null) ?localStorage.getItem("user") :null,
  token: (localStorage.getItem("token") != null) ?localStorage.getItem("token") :null,
  
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,  
        token: action.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  //const [appTheme, setAppTheme] = useContext(ThemeContext)
 // const [basket, setBasket] = useContext(BasketContext);
return (
  <BrowserRouter>
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }} 
    >
      
        <Header />
        <main>
      <Switch>
      <Route path="/product/:id" component={(props)=>{return !state.isAuthenticated ? <Login /> : <Product />}} />
      <Route path="/" exact> {!state.isAuthenticated ? <Login /> : <ProductsList />}</Route>
      <Route path="/products" > {!state.isAuthenticated ? <Login /> : <ProductsList />}</Route>
      </Switch>
        </main>
    </AuthContext.Provider>
    </BrowserRouter>
  );
}
export default App;