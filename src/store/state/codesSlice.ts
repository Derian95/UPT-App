import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CodesState {
    codes:string[]
}


const initialState: CodesState = {
    codes:['asd','aaaa']
}

/*
setUser: (state, action: PayloadAction<CodesState>) => {
            state.token = action.payload.token
            state.rol=action.payload.rol
            state.nombres=action.payload.nombres
        },
*/

export const codesSlice = createSlice({
    name: 'codes',
    initialState,
    reducers: {
        setCodes:(state, action:PayloadAction<CodesState>)=>{
            state.codes=action.payload.codes
        },
        
        defaultState: (state) => {
            state = initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCodes, defaultState } = codesSlice.actions

export default codesSlice.reducer
