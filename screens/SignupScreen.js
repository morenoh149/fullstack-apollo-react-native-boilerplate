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

const SIGN_UP = gql`
  mutation signUp ($username: String!, $email: String!, $password: String!) {
    signUp (username: $username, email: $email, password: $password) {
      token
    }
  }
`;


export default class SignupScreen extends React.Component {
  static navigationOptions = {
  };
  state = {
    username: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <Mutation mutation={SIGN_UP}>
        {(signUp, { loading, error, data }) => {
          if (data && data.signUp) {
            AsyncStorage.setItem('userToken', data.signUp.token)
              .then(() => {
                this.props.navigation.navigate('Main')
              });
          }

          return (
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', fontSize: 24}}>
                Sign Up
              </Text>
              <TextInput
                style={styles.input}
                placeholder='Username'
                onChangeText={username => this.setState({username})}
              />
              <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={email => this.setState({email})}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
              />
              <Button
                title="Login"
                onPress={() => signUp({
                  variables: {
                    username: this.state.username,
                    email: this.state.email,
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
}
