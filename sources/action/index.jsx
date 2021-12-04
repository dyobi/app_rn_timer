export const changeTime = (value) => {
    return ({
        type: 'CHANGE_TIME',
        payload: value
    });
};

export const isPlaying = (value) => {
    return ({
        type: 'IS_PLAYING',
        payload: value
    });
};

export const elapsedTime = (value) => {
    return ({
        type: 'ELAPSED_TIME',
        payload: value
    });
}

export const timeDuration = (value) => {
    return ({
        type: 'TIME_DURATION',
        payload: value
    });
}