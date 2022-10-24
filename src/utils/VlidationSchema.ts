import * as Yup from 'yup'

export const validationSchemaLogin = Yup.object().shape({
    usuario: Yup.string()
        .required('Campo requerido')
        .matches(/^[0-9]+$/, 'Solo numeros')
        .min(10, 'El codigo debe tener 10 digitos')
        .max(10, 'El codigo debe tener 10 digitos'),
        contrasenia: Yup.string()
        .required('Campo requerido')
        .matches(/^[0-9]+$/, 'Solo numeros')
        .min(6, 'La contraseña debe tener 6 digitos')
        .max(6, 'La contraseña debe tener 6 digitos'),
})
