const defaultState = {
    quote: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
    author: '- Vincent Van Gogh'
}
const quoteReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'QUOTE':
            return Object.assign({}, action.quote);
        default:
            return state;
    }
}

export default quoteReducer;