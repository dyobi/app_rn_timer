import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, StatusBar, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DialogInput from 'react-native-dialog-input';

import { isPlaying, elapsedTime, changeTime, timeDuration } from '../../action';
import Button from '../button';
import styles from './styles';

let interval;

const Component = (props) => {

    const timer = useSelector(state => state.timer);
    const dispatch = useDispatch();

    const formatTime = (time) => {
        let mins = Math.floor(time / 60);
        time -= mins * 60;
        let secs = parseInt(time % 60, 10);
        return (`${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`);
    };

    const endTimer = () => {
        clearInterval(interval);
        dispatch(isPlaying(false));
        dispatch(elapsedTime(0));
        dispatch(timeDuration(0));
    };

    const setTime = (input) => {
        endTimer();
        dispatch(timeDuration(Number(input)));
        dispatch(changeTime(false));
    };

    const pressButton = () => {
        if (timer.timeDuration == 0) {
            alert('Enter Time Duration.');
        } else if (!timer.isPlaying) {
            let i = 0;
            dispatch(isPlaying(true));
            interval = setInterval(() => {
                i += 1;
                dispatch(elapsedTime(i));
                timer.timeDuration == i ? endTimer() : null;
            }, 1000);
        } else {
            endTimer();
        }
    }

    return (
        <LinearGradient colors={['#CE0B24', 'pink']} style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <TouchableOpacity style={styles.upper} onPress={() => dispatch(changeTime(true))}>
                {timer.changeTime ?
                    <DialogInput isDialogVisible={props.isDialogVisible}
                        title={"SET THE TIME"}
                        message={"Input as seconds"}
                        hintInput={"1 - 3600"}
                        submitInput={(input) => { setTime(input) }}
                        closeDialog={() => { dispatch(changeTime(false)) }}>
                    </DialogInput>
                    :
                    <Text style={styles.time}>
                        {timer.timeDuration == 0 ? '00:00' : formatTime(timer.timeDuration - timer.elapsedTime)}
                    </Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.lower} onPress={() => pressButton()}>
                <Button
                    iconName={!timer.isPlaying ? 'play-circle' : 'stop-circle'}
                    onPress={() => pressButton()}
                />
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default Component;