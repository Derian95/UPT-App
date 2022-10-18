import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Datum, Semestre } from '../../interfaces'


interface SemestersState{
    semesters:Datum
}

const initialState:Datum = {
    codigoUniversitario: 0,
    itemEstamento: 0,
    tipo: 0,
    idPtaDependenciaFijo: 0,
    idDependencia: 0,
    escuela: '',
    semestres: []
}

/*
setUser: (state, action: PayloadAction<CodesState>) => {
            state.token = action.payload.token
            state.rol=action.payload.rol
            state.nombres=action.payload.nombres
        },
*/

export const semestersSlice = createSlice({
    name: 'semesters',
    initialState,
    reducers: {
        setSemesters:(state, action:PayloadAction<Datum>)=>{
            state.codigoUniversitario= action.payload.codigoUniversitario
            state.escuela= action.payload.escuela
            state.idDependencia= action.payload.idDependencia
            state.idPtaDependenciaFijo= action.payload.idPtaDependenciaFijo
            state.itemEstamento= action.payload.itemEstamento
            state.semestres= action.payload.semestres
            state.tipo= action.payload.tipo
        },
        
        defaultState: (state) => {
            state = initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSemesters, defaultState } = semestersSlice.actions

export default semestersSlice.reducer
