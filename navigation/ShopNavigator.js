import React from 'react';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator,DrawerItems  } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';


import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

//---------------------Setting up default conf for navOptions re-use in all-------------------------
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};
//---------------------StackNav for 3 screens from meny to cart-------------------------------------
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
 {
    //----------------Re-used default from begining of page----------------------------------------
    defaultNavigationOptions: defaultNavOptions
  }
);
//-------------------Creating new navigator for Orders and adding same settings--------------------
const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
   //-----------Adding icon to all screens and adjusting it for ios or android--------------------
    
    //----------------Re-used default from begining of page----------------------------------------
    defaultNavigationOptions: defaultNavOptions
  }
);
//--------------------Creting new navigator for admin 2 pages------------------------------------
const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
  },
  {
    //-----------Adding icon to all screens and adjusting it for ios or android--------------------
   
    //----------------Re-used default from begining of page----------------------------------------
    defaultNavigationOptions: defaultNavOptions
  }
);
//------------Creating Side-Drawer and filling it with 3 Navigators----------------------
const ShopNavigator = createStackNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
  },
  {
    defaultNavigationOptions: defaultNavOptions, headerMode: 'none' 
  }
);
//--------------------Creting new navigator for Auth creating or log in users------------------------------------
const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions, headerMode: 'none' 
  }
);
//------------------- SwitchNavigator responsible for handling all main navigators---------------------------
const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthNavigator,
  Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);