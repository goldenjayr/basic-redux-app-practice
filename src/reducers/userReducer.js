export const initialState = {
    userName: 'Jahara'
}


// takes in an action and a state then processes it and returns a new state

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME': 
            state = {
                ...state,
                userName: action.payload
            }
        break
    }
    return state
}



export default reducer