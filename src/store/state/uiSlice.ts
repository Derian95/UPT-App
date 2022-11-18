import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CodesState {
    dark:string
}


const initialState: CodesState = {
    dark: 'light'
}



export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDark:(state, action:PayloadAction<string>)=>{
            //action.payload.forEach((item) => state.codes.push(item))
            //state.codes=action.payload
            // state.codes=action.payload
            state.dark=action.payload
        },
      
    },
})

// Action creators are generated for each case reducer function
export const { setDark  } = uiSlice.actions

export default uiSlice.reducer
