import React from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const LOG_IN = gql`
  mutation signIn ($login: String!, $password: String!) {
    signIn (login: $login, password: $password) {
      token
    }
  }
`;


export default class LoginScreen extends React.Component {
  static navigationOptions = {
  };
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <Mutation mutation={LOG_IN}>
        {(logIn, { loading, error, data }) => {
          if (data && data.signIn) {
            AsyncStorage.setItem('userToken', data.signIn.token)
              .then(() => {
                this.props.navigation.navigate('Main')
              });
          }

          return (
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', fontSize: 24}}>
                Login
              </Text>
              <TextInput
                style={styles.input}
                placeholder='Username'
                onChangeText={username => this.setState({username})}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
              />
              <Button
                title="Login"
                onPress={() => logIn({
                  variables: {
                    login: this.state.username,
                    password: this.state.password
                  }
                })}
              />
              <View style={{flex: 1}}></View>
            </View>
          );
        }}
      </Mutation>
    );
  }
}

styles = {
  input: {
    margin: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey'
  }
};
