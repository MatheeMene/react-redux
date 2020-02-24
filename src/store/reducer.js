const initialState = {
    balance: 0
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'DEPOSIT':
            return { balance: state.balance + action.payload }
        case 'TAKE':
            return { balance: state.balance - action.payload }
        default: return state
    }

}