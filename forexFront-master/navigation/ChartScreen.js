import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image, Linking, Pressable } from 'react-native';
import { Icon } from 'react-native-elements'

import axios from "axios"

const ChartScreen = ({ navigation, route }) => {
    const { userData, data, cryptoPrice } = route.params;

    const webView = () => {
        navigation.navigate("WebviewNav", { userData, data });
    }
    const walletFun = () => {
        navigation.navigate("WalletNav", { userData, data })
    }
    const buyFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreeeeex.herokuapp.com/api/user/buy", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('you have not money')
          })
    }
    const sellFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreeeeex.herokuapp.com/api/user/sell", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('you have not money')
          })
    }

  return (
    <View style={styles.container}>
         <View style={styles.cont}>
         <Image
                  style={styles.logo}
                  source={require('../assets/arrow.png')}
              />
        <Pressable onPress={webView}  style={styles.Redirect}>
            <Text style={{fontWeight: "bold", textAlign: "center",color:'white'}} > Redirect to chart</Text>
        </Pressable>
         </View>   
      
       

        <View style={styles.btnGroup}>
            <Pressable onPress={walletFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold",marginLeft: 50,color:"white"}} > WALLET <Icon name='account-balance-wallet'/> </Text>
            </Pressable>
            <Pressable onPress={buyFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold",marginLeft: 40,color:"white"}} >BUY <Icon name='shopping-basket'/></Text>
            </Pressable>
            <Pressable onPress={sellFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold",marginLeft: 30,color:"white"}} >SELL <Icon name='add-chart'/></Text>
            </Pressable>
        </View>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        
    },

    cont:{
        width:300,
        height:50,
        flexDirection: "column",
        marginLeft:120,
        marginTop:40
     },

     logo:{
        width:180,
        height:180,
        borderRadius:70,
        marginTop:10,
     },

     Redirect: {
        backgroundColor: 'orange',
        width:180,
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop:20,
    },

    userInfo: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    },
    userInfoTxt: {
        fontWeight: "bold"
    },
  
 
    BTN: {
        backgroundColor: 'orange',
        width:160,
        height: 48,
        justifyContent: 'center',
        marginTop:100,
    },

    btnGroup: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginTop:420,
    },
    
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
});
