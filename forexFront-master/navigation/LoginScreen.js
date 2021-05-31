import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,ImageBackground } from 'react-native';
import * as Google from "expo-google-app-auth";

const image = { uri: "https://db.hfsplay.fr/files/2019/09/19/Google-logo-2015-G-icon_msaHv56.png" };

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("login");
    try {
      const { type, user } = await Google.logInAsync({
        androidClientId: `607696297500-d29dk1ssear0btfbo847146s9rv8lvev.apps.googleusercontent.com`,
        scopes: ['profile', 'email'],
      });

      if (type === "success") {
         // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        // loginResult.user.name
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
     <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}  onPress={signInAsync}>Login with Google</Text>
    </ImageBackground>
  
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: "column"
  },
image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
      
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
});
