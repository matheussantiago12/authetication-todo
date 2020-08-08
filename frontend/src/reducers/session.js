const initialState = {
    isLoggedIn: false,
    data: {
        token: null,
        user: {},
    },
    error: false,
    loading: false,
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...initialState,
                loading: true,
                isLoggedIn: false,
                data: action.payload,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                isLoggedIn: true,
                data: action.payload,
            };
        case 'LOGIN_FAILURE':
            return {
                ...initialState,
                error: true,
            };
        case 'LOGOUT':
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default session;
