import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const BottomNav = props => {
    return (
        <View style={styles.container}>
            <View style={styles.bottomNav}>
                <View style={styles.BottomContainer}>
                    <View style={styles.buyConteiner}>
                        <TouchableOpacity onPress={props.BuyCar}>
                            <Text style={styles.description}>Products</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sellConteiner}>
                        <TouchableOpacity onPress={props.SellCar}>
                            <Text style={styles.description}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LiveConteiner}>
                        <TouchableOpacity onPress={props.Live} >
                            <Text style={styles.description}>Admin</Text>
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
    
    buyConteiner: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sellConteiner: {
        width: '33%',
        borderLeftColor: Colors.white,
        borderLeftWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LiveConteiner: {
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