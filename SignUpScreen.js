import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {/* GIF image */}
      <Image
        source={require('./assets/login.gif')} // Adjust the path to your GIF image
        style={styles.gif}
      />

      {/* Input fields */}
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
        secureTextEntry
      />
      
      {/* Sign Up button */}
      <View style={styles.signupContainer}>
        <Button
          title="Sign Up"
          onPress={handleSignUp}
          style={[styles.button, { width: '100%' }]}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.5)', // Light transparent blue
  },
  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 5,
    backgroundColor: 'skyblue',
  },
  signupContainer: {
    marginTop: 60,
    alignItems: 'left',
  },
  button: {
    marginBottom: 5,
  },
  gif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  wrapperButton: {
    width: '100%',
    height: 45,
    borderRadius: 40,
  }
});

export default SignUpScreen;
