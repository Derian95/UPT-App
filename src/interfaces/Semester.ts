export interface Semestre {
    idSemestre: number;
    semestre: string;
    observacion: string;
}

export interface Datum {
    codigoUniversitario: number;
    itemEstamento: number;
    tipo: number;
    idPtaDependenciaFijo: number;
    idDependencia: number;
    escuela: string;
    semestres: Semestre[];
}

export interface RootObject {
    data: Datum[];
    success: boolean;
    mensajeError?: any;
}