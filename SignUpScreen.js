import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

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
        secureTextEntry
      />
      
      <View style={styles.signupContainer}>
        <Button
          title="Sign Up"
          onPress={handleSignUp}
          style={[styles.button, { width: '100%' }]} // Adjust width to 100%
          color="black" // Change button color to black
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
    borderColor: 'skyblue', // Set border color as sky blue
    borderRadius: 5,
    backgroundColor: 'skyblue', // Change background color to sky blue
  },
  signupContainer: {
    marginTop: 60, // Adjust margin top as needed
    alignItems: 'left',
  },
  signupText: {
    marginBottom: 10, // Adjust margin bottom as needed
    color: '#333',
  },
  button: {
    marginBottom: 35, // Add margin bottom to the buttons for spacing
  },
});
export default SignUpScreen;
