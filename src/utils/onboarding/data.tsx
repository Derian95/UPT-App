import { Image } from 'react-native'
import { Card } from '../../components/onBoarding'


export const pages2 = [
  {
    backgroundColor: '#fff',
    image: <Image source={require('../../../assets/notesOn.png')} style={{ height: 300, width: 300, resizeMode: 'contain' }} />,
    title: <Card title={'Obten tus notas por semestre'} title2={'Todas tus notas'} description={'Verifica las calificacaciones que obtviste hasta la actualidad.'} />,
    subtitle: '',
  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../../../assets/horariOn.png')} style={{ height: 300, width: 300, resizeMode: 'contain' }} />,
    title: <Card title={'Consulta tu horario universitario'} title2={'Horarios de tus cursos'} description={'Consulta el horario que estas llevando para no perderte tus clases'} />,
    subtitle: '',

  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../../../assets/onAsis.png')} style={{ height: 300, width: 300, resizeMode: 'contain' }} />,
    title: <Card title={'Consulta tu asistencia'} title2={'Asistencias generales'} description={'Comprueba tus asitencias,faltas y tardanzas con las que cuentas hasta la fecha.'} />,
    subtitle: '',
  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../../../assets/cuentas.png')} style={{ height: 300, width: 300, resizeMode: 'contain' }} />,
    title: <Card title={'Consulta tu asistencia'} title2={'Asistencias generales'} description={'Comprueba tus asitencias,faltas y tardanzas con las que cuentas hasta la fecha.'} />,
    subtitle: '',
  }
]