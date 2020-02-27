const INITIAL_STATE = {
    balance: 0.0
};

export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

const reducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case DEPOSIT:
            return { balance: state.balance + action.payload }
        case WITHDRAW:
            return { balance: state.balance - action.payload }
        default: return state
    }
}

export default reducer;