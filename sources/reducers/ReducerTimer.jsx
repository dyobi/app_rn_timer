const initialize = {
    changeTime: false,
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: 0
};

const Component = (state = initialize, action) => {
    switch (action.type) {
        case 'CHANGE_TIME':
            return Object.assign({}, state, {
                changeTime: action.payload
            });
        case 'IS_PLAYING':
            return Object.assign({}, state, {
                isPlaying: action.payload
            });
        case 'ELAPSED_TIME':
            return Object.assign({}, state, {
                elapsedTime: action.payload
            });
        case 'TIME_DURATION':
            return Object.assign({}, state, {
                timeDuration: action.payload
            });
        default:
            return state;
    }
};

export default Component;