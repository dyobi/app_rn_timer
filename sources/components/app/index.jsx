import React from 'react';
import { View } from 'react-native';

import Timer from '../timer';
import styles from './styles';

const Component = () => {
    return (
        <View style={styles.container}>
            <Timer />
        </View>
    );
};

export default Component;