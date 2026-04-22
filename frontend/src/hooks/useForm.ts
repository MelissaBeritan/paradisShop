import { useReducer } from "react";
import type { FormAction, UserCredentials } from "../types/apptypes";

export const useForm=()=>{

    const initialState: UserCredentials = {
        user: '',
        password: '',
        confirmedPassword: ''
    }

    const formReducer = (state : UserCredentials, action : FormAction) => {
        switch (action.type) {
            case 'SET_USER':
                return { ...state, user: action.payload };
            case 'SET_PASSWORD':
                return { ...state, password: action.payload };
            case 'CONFIRM_PASSWORD':
                return { ...state, confirmedPassword: action.payload };
            case 'RESET':
                return initialState;            
            case 'CLEAN_PASSWORD':
                return {...state,password:'',confirmedPassword:''}    
            default:
                return state;
        }            
    }
    const [form, dispatch] = useReducer(formReducer, initialState);
    
    return {form,dispatch};

}
