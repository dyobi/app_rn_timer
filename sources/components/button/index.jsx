import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Component = (props) => {
    return (
        <TouchableOpacity>
            <FontAwesome name={props.iconName} size={80} color={'white'} />
        </TouchableOpacity>
    );
};

export default Component;