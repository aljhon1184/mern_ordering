import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },

    reducers: {
        addProduct: (state, action) =>{
            const productId = state.products.map(product => product.id)
            if(!productId.includes(action.payload.id)){
                state.products.push(action.payload);
                state.quantity += 1;
                state.total += action.payload.price * action.payload.quantity;
            }
            
        },
        updatePrice: (state, action) =>{
            state.quantity += action.payload.quantity;
            const qtty = action.payload.qtty1;
            const subtotal = action.payload.price * qtty;;
            state.total += subtotal;
        },
        updateTotal: (state, action) =>{
            if(action.payload.qttq){
                const total = action.payload.price * action.payload.qttq;
                state.total = state.total - total;
            }else{
                state.total = state.total - action.payload.price;
            }
            

        },
        removeProduct: (state, action) =>{
            // state.products({
            //     state: state.products.filter(item => item.id != action.payload.id)
            // })
            state.products = state.products.filter((product) => product.id !== action.payload.id);
            console.log(state.products)
        },
        reset: (state) =>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, reset, updatePrice, updateTotal, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;