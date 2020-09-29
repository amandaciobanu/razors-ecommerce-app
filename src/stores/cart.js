import {writable, derived} from "svelte/store";
import localCart from '../localCart';
const cart= writable([...localCart]);
//cart total

export const cartTotal = derived(cart,($cart)=> {
    let total = $cart.reduce((acc, curr) => {
        return(acc+= (curr.amount * curr.price));
    },0)
    return total.toFixed(2);
})

//local function
const remove  = (id, items) => {
    return items.filter(item => item.id !== id);
}
//global function
export const removeItem = id => {
    cart.update(storeValue => {
        return remove(id, storeValue)
    })
}
//local storage
export default cart;