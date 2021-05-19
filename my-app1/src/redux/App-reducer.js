
import {getAuthUserData} from './Auth-reducer'
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialsState = {

    initialized: false,
  

}

const AppReducer = (state = initialsState, action) => {
    switch (action.type) {
        case  INITIALIZED_SUCCESS:
            return {...state, initialized:true}
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} )

export const initializeApp = () => (dispatch) => {
       let promise = dispatch(getAuthUserData());
        
        Promise.all([promise])
        .then ( () => {
        dispatch(initializedSuccess());

})}



export default AppReducer