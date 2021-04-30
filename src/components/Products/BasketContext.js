import React, {useContext,useState } from 'react'

export const BasketContext = React.createContext([0 ,() => {}]);

export const BasketProvider = (props) => {
const [basket, setBasket] = useState([0]);

return (
    <BasketContext.Provider value={[basket, setBasket]}>
        {props.children}
    </BasketContext.Provider>
)
}