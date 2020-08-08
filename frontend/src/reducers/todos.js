const initialState = {
    data: [],
    error: false,
    loading: false,
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS_REQUEST':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'GET_TODOS_SUCCESS':
            return {
                ...initialState,
                data: [
                    ...state.data,
                    ...action.payload,
                ],
            };
        case 'GET_TODOS_FAILURE':
            return {
                ...state,
                loading: false,
                error: true,
            };
        case 'ADD_TODO_REQUEST':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'ADD_TODO_SUCCESS':
            return {
                ...initialState,
                data: [
                    ...state.data, 
                    action.payload,
                ],
            };
        case 'ADD_TODO_FAILURE':
            return {
                ...state,
                loading: false,
                error: true,
            };
        case 'REMOVE_TODO_REQUEST':
            return {
                ...initialState,
                data: state.data,
                loading: true,
            };
        case 'REMOVE_TODO_SUCCESS':
            return {
                ...initialState,
                data: state.data.filter(todo => todo._id !== action.payload),
            };
        case 'REMOVE_TODO_FAILURE':
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export default todos;
