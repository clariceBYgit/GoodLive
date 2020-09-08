import * as userActions from '../constants/userinfo'
const initialState = {

}

// export default (state = initialState, action) => {
//     switch (action.type) {

//     case userActions.LOGIN_USERINFO:
//         return state = action.data
//     case userActions.LOGIN_UPDATE:
//         return state = action.data

//     default:
//         return state
//     }
// }






export default function userinfo(state = initialState, action){
    switch (action.type) {

        case userActions.LOGIN_USERINFO:
            return state = action.data
        case userActions.LOGIN_UPDATE:
            return state = action.data
    
        default:
            return state
    }
}
