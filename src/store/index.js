import { createStore } from "vuex";
import ProductsModule from './modules/products.js'
import cartModule from './modules/cart.js'
const store=createStore({

modules:
{
    prods:ProductsModule,
    cart:cartModule,
}

});
export default store;