// SignUpScreen.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button
        title="Sign Up"
        onPress={() => alert('Sign up functionality goes here')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SignUpScreen;
