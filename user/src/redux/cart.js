import {createSlice} from '@reduxjs/toolkit';


const cart = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            state.products= [];
            state.quantity= 0;
            state.total= 0;
        },
        addOne: (state, action) => {
            state.quantity += 1;
            const index = state.products.findIndex(
                (item) => item._id === action.payload.id
            );
            if (index >= 0) {
                state.products[index].quantity += 1;
            }
        },
        subtractOne: (state, action) => {
            const index = state.products.findIndex(
                (item) => item._id === action.payload.id
            );
            if (index >= 0 && state.products[index].quantity > 0) {
                state.products[index].quantity -= 1;
                state.quantity -= 1;
            }
        },
        removeOne:(state, action) => {
            const index = state.products.findIndex(
                    (item) => item._id === action.payload.id
                );
            if (index >= 0) {
                    state.quantity -= state.products[index].quantity;

                    state.products.splice(index, 1);
            } else {
                    console.warn(
                      `Cant remove product (id: ${action.payload.id}) as its not in basket!`
                    )
            }
        }
    }
})

export const {addProduct,  deleteProduct, addOne, subtractOne, removeOne} = cart.actions

export default cart.reducer;

export const emptyCart = async(dispatch) => {
    try{
      dispatch(deleteProduct());
    } catch(e){
      console.log(e)
    }
  }

