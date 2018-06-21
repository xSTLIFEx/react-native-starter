/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

Navigation.registerComponent('awesome.AuthScreen', () => AuthScreen);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome.AuthScreen',
        title: 'Login'
    }
});
