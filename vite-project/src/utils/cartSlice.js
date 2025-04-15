import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], 
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItems = state.items.find((item) => item.id == action.payload.id);
            if (existingItems) {
                existingItems.quantity += 1;
            }
            else {
                state.items.push(action.payload)
            }
        },

        removeFromCart: (state, action) => {
            state.items= state.items.filter((item)=>item.id!==action.payload)
        }
            
        }
    }
)
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
