import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false
}

const burgerMenuSlice = createSlice({
    name:"burger-menu",
    initialState,
    reducers:{
        toogleMenu(state){
            state.isOpen = !state.isOpen
        }
    }
})

export const {toogleMenu} = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;