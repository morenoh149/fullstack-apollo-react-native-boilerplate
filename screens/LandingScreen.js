import React from 'react';
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}></View>
        <Text style={{textAlign: 'center', fontSize: 24}}>Landing</Text>
        <View style={{flex: 1}}></View>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}
