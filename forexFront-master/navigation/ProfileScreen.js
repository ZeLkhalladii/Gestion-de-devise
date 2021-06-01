import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
 

  const DATA= [
    {
      id: 1,
      symbol: "USD /",
      name: " Dollar Américain",
      img: "https://thumbs.dreamstime.com/b/us-dollar-symbol-21171068.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 10
    },
    {
      id: 2,
      symbol: "GBP /",
     name: " BRITISH POUND",
      img: "https://audnews.com.au/wp-content/uploads/2013/10/British-Pound-symbol.jpg",
      redirectTo: "https://www.tradingview.com/symbols/TVC-IXIC/",
      price: 20
    },
    {
      id: 3,
      symbol: "JPY /",
      name: " JAPANESE YEN",
      img: "https://static1.squarespace.com/static/566f43754bf118d6d87ea12f/566f4a84df40f39ea7ef8c3f/58548398be659442d5fde0cb/1482171915613/Yen_Japan.png?format=1500w",
      redirectTo: "https://www.tradingview.com/symbols/DJ-DJI/",
      price: 30
    }
  ]




  const { userData, user } = route.params;
  console.log("user from google", userData);

  return (
    <View>
      <View style={styles.userInfo}>
        <Image source={{uri: `${userData.photoUrl}`}} style={{width:40, height:40,borderRadius:25}} />
        <Text style={styles.userInfoTxt}> welcome {userData.name} ^_^ </Text>
      </View>

      <SafeAreaView style={styles.areaView}>
      <Image source={require('../assets/devise.png')} style={{width: 410, height: 340, borderRadius:10,}} />

        <ScrollView style={styles.scrollView}>
          <View style={styles.cryptoLists}>
            {
              DATA.map((data, i) => {
                return (
                  <View style={styles.cryptoListsData} key={i}>
                    <View style={styles.cryptoListsTopData}>
                      <Image style={styles.imgDevise}  source={{uri: `${data.img}`}} />
                      <Text  style={styles.symbol}>{data.symbol}</Text>
                      <Text  style={styles.nameDevise}>{data.name}</Text>

                    <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", { userData, data: data.redirectTo, cryptoPrice: data.price }); }}>
                      {/* navigation.navigate("Chart", { user }); */}
                      <Text style={styles.GRAPHIC}>GRAPHIC</Text>
                    </Pressable>

                    </View>
                    {/* <Text style={styles.cryptoListsTxt}>{data.price} $</Text> */}
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    marginTop: 15,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "baseline",
  },
  userInfoTxt: {
    fontWeight: "bold",
    color:"orange",
    fontSize:19,
  },

  cryptoLists: {
    marginTop: 10
  },
  cryptoListsData: {
    padding: 20,
    margin: 10,
    backgroundColor: "#dfe6e9",
    borderRadius: 20,
     flex: 1,
    flexDirection: "row",
    alignItems: "baseline",

  },
  scrollView: {
    marginHorizontal: 2,
    
  },
  areaView: {
    marginTop: 70,
    marginBottom: 60,
    
  },
  cryptoListsTxt: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cryptoListsTopData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  imgDevise: {
    width:40, 
    height:40,
    borderRadius:3,
    marginLeft: 26, 
  },
  nameDevise: {
    marginLeft: 70,
  },
  symbol: {
  marginLeft: 80,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "#fdcb6e",
    marginLeft: 120,
  },
  GRAPHIC:{
    color: "white",
  }
});
