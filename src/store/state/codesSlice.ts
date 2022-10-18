import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CodesState {
    codes:string[]
    selected:string
    modalShow:boolean
}


const initialState: CodesState = {
    codes: [],
    selected: '',
    modalShow: false
}



export const codesSlice = createSlice({
    name: 'codes',
    initialState,
    reducers: {
        setCodes:(state, action:PayloadAction<string[]>)=>{
            //action.payload.forEach((item) => state.codes.push(item))
            state.codes=action.payload
        },
        addCodes:(state, action:PayloadAction<string>)=>{
            state.codes.push(action.payload)
        },
        setSelectedCode:(state, action:PayloadAction<string>)=>{
            state.selected=action.payload
        },
        changeModalShow:(state)=>{
            state.modalShow = !state.modalShow
        },
        defaultState: (state) => {
            state = initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCodes, defaultState, addCodes,setSelectedCode, changeModalShow } = codesSlice.actions

export default codesSlice.reducer
