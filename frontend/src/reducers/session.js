const initialState = {
    isLoggedIn: false,
    user: {},
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                isLoggedIn: false,
                user: action.payload,
            };
        case 'LOGIN':
            return {
                isLoggedIn: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...initialState,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
};

export default session;
