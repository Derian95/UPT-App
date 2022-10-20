
    export interface Criterion {
        idArbol: number;
        nombre: string;
        peso: number;
        promedio: number;
    }

    export interface Units {
        idChoCargaCROM: number;
        idArbol: number;
        unidad: string;
        nombre: string;
        peso: number;
        promedio: number;
        criterios: Criterion[];
    }

    export interface Grade {
        idMatCursoMatricula: number;
        seccion: string;
        notaFinal: number;
        idPesPlanEstudioCurso: number;
        codigoCurso: string;
        asignatura: string;
        creditos: number;
        ciclo: number;
        electivo: boolean;
        extracurricular: boolean;
        idChoCargaHoraria: number;
        idChoCargaCROM: number;
        docente: string;
        unidades: Units[];
    }
 
    export interface NotesBySemester {
        idMatMatricula: number;
        cicloUbicacion: string;
        matriculaPagada: boolean;
        fecha: Date;
        cursos: Grade[];
    }

    // export interface RootObject {
    //     data: Datum[];
    //     success: boolean;
    //     mensajeError?: any;
    // }

