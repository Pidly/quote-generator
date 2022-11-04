const reducer = (state = 'chocolate', action) => {
    switch(action.type) {
        case 'COLOR':
            return action.color;
        default:
            return state;
    }
};

export default reducer;