import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,
  Modal,
  Component,
} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';

 export default class animation extends Component{

   componentDidMount() {
     //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
     SplashScreen.close({
       animationType: SplashScreen.animationType.scale,
       duration: 2000,
       delay: 2000,
     })
   }
 }