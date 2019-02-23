import React from 'react';
import {
  AsyncStorage,
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


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}></View>
        <Text>Main app view</Text>
        <Button
          title="Logout"
          onPress={() => {
            AsyncStorage.removeItem('userToken')
              .then(() => {
                this.props.navigation.navigate('Auth')
              });
          }}
        />
        <View style={{flex: 1}}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
