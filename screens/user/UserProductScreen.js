import React from 'react';
import { View, Text, FlatList, Button, Platform, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';
import BottomNav from '../../components/BottomNav/BottomNav';

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  
  const dispatch = useDispatch();

  const editProductHandler = id => {
    props.navigation.navigate('EditProduct', { productId: id });
  };

  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        }
      }
    ]);
  };

  if (userProducts.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.centered}>
          <Text style={{ fontSize: 21, marginHorizontal: 10, textAlign: 'center' }}>
            No products found. Maybe start adding some!</Text>
        </View>
        <BottomNav
          BuyCar={() => props.navigation.navigate('Products')}
          SellCar={() => props.navigation.navigate('Orders')}
          Live={() => props.navigation.navigate('Admin')}
        />
      </View>
    );
  }

  return (

    <View style={{ flex: 1 }}>
        <FlatList
          data={userProducts}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <ProductItem
              image={itemData.item.imageUri}
              title={itemData.item.title}
              price={itemData.item.price}
              onSelect={() => {
                editProductHandler(itemData.item.id);
              }}
            >
              <Button
                color={Colors.primary}
                title="Edit"
                onPress={() => {
                  editProductHandler(itemData.item.id);
                }}
              />
              <Button
                color={Colors.primary}
                title="Delete"
                onPress={deleteHandler.bind(this, itemData.item.id)}
              />
            </ProductItem>
          )}
        />
        <BottomNav
        BuyCar={() => props.navigation.navigate('Products')}
        SellCar={() => props.navigation.navigate('Orders')}
        Live={() => props.navigation.navigate('Admin')}
      />
    </View>
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Products',

    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditProduct');
          }}
        />
      </HeaderButtons>

  };
};
const styles = StyleSheet.create({

  centered: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    /* backgroundColor:Colors.primary */
  }
});

export default UserProductsScreen;
