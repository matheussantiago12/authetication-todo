const initialState = ['a'];

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return [
                ...action.payload,
            ];
        case 'CLEAR_USERS':
            return [
                ...initialState,
            ];
        case 'ADD_USER':
            return [
                ...state,
                action.payload,
            ];
        case 'REMOVE_TODO':
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
};

export default users;