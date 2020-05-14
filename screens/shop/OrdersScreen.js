import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

import OrderItem from '../../components/shop/OrderItem';
import * as ordersActions from '../../store/actions/orders';
import Colors from '../../constants/Colors';
import BottomNav from '../../components/BottomNav/BottomNav';

const OrdersScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(ordersActions.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.centered}>
          <Text style={{ fontSize: 21, marginHorizontal: 10, textAlign: 'center' }}>
            No products found. Maybe start adding some!</Text>
        </View>
        <BottomNav
          Home={() => props.navigation.navigate('Home')}
          Orders={() => props.navigation.navigate('Orders')}
          Profile={() => props.navigation.navigate('Profile')}
        />
      </View>
    );
  }

  return (
    <View style={{flex:1}}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        )}
      />
      <BottomNav
        Home={() => props.navigation.navigate('Home')}
        Orders={() => props.navigation.navigate('Orders')}
        Profile={() => props.navigation.navigate('Profile')}
      />
    </View>
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',


  };
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default OrdersScreen;
