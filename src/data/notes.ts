

export interface Notes{
    notes:Cources[]
}

export interface Cources{
    nombre_curso:string
    unidades:Unidad[]

}

export interface Unidad{
    nombre:string
    peso_unidad:string
    data:Data[]
    promedio:number
}

interface Data{
criterio:string
peso_criterio:string
nota:number
fecha:string
descripcion:string

}

export const notesArray ={
    notes:[
        {
            nombre_curso:"Matematica I",
            unidades:[
                {
                  nombre:"I",
                  peso_unidad:"30%",
                  data:[
                    {
                        criterio:"Evaluacion 01",
                        peso_criterio:"5%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Asistencia"
                    },
                    {
                        criterio:"Evaluacion 02",
                        peso_criterio:"35%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Trabajos Academicos"
                    },
                    {
                        criterio:"Evaluacion 03",
                        peso_criterio:"60%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Evaluacion escrita"
                    }
                  ],
                  promedio:17

                },
                {
                    nombre:"II",
                    peso_unidad:"30%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17

                },
                {
                    nombre:"III",
                    peso_unidad:"30%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17
                
                },
                {
                    nombre:'IV',
                    peso_unidad:"10%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17
               
                }
            ]
        },
        {
            nombre_curso:"Peloncio I",
            unidades:[
                {
                  nombre:"I",
                  peso_unidad:"30%",
                  data:[
                    {
                        criterio:"Evaluacion 01",
                        peso_criterio:"5%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Asistencia"
                    },
                    {
                        criterio:"Evaluacion 02",
                        peso_criterio:"35%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Trabajos Academicos"
                    },
                    {
                        criterio:"Evaluacion 03",
                        peso_criterio:"60%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Evaluacion escrita"
                    }
                  ],
                  promedio:17

                },
                {
                    nombre:"II",
                    peso_unidad:"30%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17

                },
                {
                    nombre:"III",
                    peso_unidad:"30%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17
                
                },
                {
                    nombre:'IV',
                    peso_unidad:"10%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17
               
                }
            ]
        },
        {
            nombre_curso:"Peloncio",
            unidades:[
                {
                  nombre:"I",
                  peso_unidad:"30%",
                  data:[
                    {
                        criterio:"Evaluacion 01",
                        peso_criterio:"5%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Asistencia"
                    },
                    {
                        criterio:"Evaluacion 02",
                        peso_criterio:"35%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Trabajos Academicos"
                    },
                    {
                        criterio:"Evaluacion 03",
                        peso_criterio:"60%",
                        nota:17,
                        fecha:"12-10-2020",
                        descripcion:"Evaluacion escrita"
                    }
                  ],
                  promedio:17

                },
                {
                    nombre:"II",
                    peso_unidad:"30%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17

                },
                {
                    nombre:"III",
                    peso_unidad:"30%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17
                
                },
                {
                    nombre:'IV',
                    peso_unidad:"10%",
                    data:[
                        {
                            criterio:"Evaluacion 01",
                            peso_criterio:"5%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Asistencia"
                        },
                        {
                            criterio:"Evaluacion 02",
                            peso_criterio:"35%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Trabajos Academicos"
                        },
                        {
                            criterio:"Evaluacion 03",
                            peso_criterio:"60%",
                            nota:17,
                            fecha:"12-10-2020",
                            descripcion:"Evaluacion escrita"
                        }
                      ],
                      promedio:17
               
                }
            ]
        }
    ]

}