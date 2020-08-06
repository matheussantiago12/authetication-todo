const initialState = [{nome:"matheus"}];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return [
                ...action.payload,
            ];
        case 'ADD_TODO':
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

export default todos;