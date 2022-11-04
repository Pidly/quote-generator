const defaultState = {
    bgColor: 'rgb(44, 62, 80)'
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'COLOR':
            return Object.assign({}, state);
        default:
            return state;
    }
};

export default reducer;