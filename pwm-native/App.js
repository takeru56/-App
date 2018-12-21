import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ボタンをおして!!</Text>
        <Text />
        <Button
          onPress={sendPress}
          title="On"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text />
        <Button
          onPress={sendPressOff}
          title="Off"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center"
  }
});

sendPress = () => {
  fetch("http://raspberrypi.local:8080/on?num=1&duration1=50")
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
};

sendPressOff = () => {
  fetch("http://raspberrypi.local:8080/off")
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
};
