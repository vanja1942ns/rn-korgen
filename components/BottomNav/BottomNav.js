import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const BottomNav = props => {
    return (
        <View style={styles.container}>
            <View style={styles.bottomNav}>
                <View style={styles.BottomContainer}>
                    <View style={styles.homeConteiner}>
                        <TouchableOpacity onPress={props.Home}>
                            <Text style={styles.description}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orderConteiner}>
                        <TouchableOpacity onPress={props.Orders}>
                            <Text style={styles.description}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileConteiner}>
                        <TouchableOpacity onPress={props.Profile} >
                            <Text style={styles.description}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65,
    },

    bottomNav: {
        paddingTop: 10,
        width: '100%',
        paddingBottom: 15,
        backgroundColor: Colors.primary,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',

    },
    BottomContainer: {
        width: '100%',
        flexDirection: 'row',
        height:42
    },
    
    homeConteiner: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderConteiner: {
        width: '33%',
        borderLeftColor: Colors.white,
        borderLeftWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileConteiner: {
        width: '33%',
        borderLeftColor: Colors.white,
        borderLeftWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        color: Colors.white,
        textAlign: 'center',
        marginHorizontal: 15,
        fontSize:20


    },
});

export default BottomNav;