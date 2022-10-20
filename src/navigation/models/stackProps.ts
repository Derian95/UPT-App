
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native';


/*
Types for screens for navigation
*/
export type propsNavigationStack={
    Home:{
        idSemester:number
        idStament:number
    }
    Notes:{
        idSemester:number
        idStament:number
    }
    Login:undefined
    Attendance:undefined
    Schedule:undefined
    Codes:undefined
}

/*
Types for params navigation
*/
export type RootStackParamList = {
    Home: 
    {  
        idSemester:number
        idStament:number 
    }
    Codes: 
    {  
        idSemester:number
        idStament:number 
    }
  }



export type propsStack=NativeStackNavigationProp<propsNavigationStack>
export type routeProps=RouteProp<RootStackParamList>