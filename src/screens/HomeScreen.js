import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img1.png")} // Change the path to your background image
        style={styles.backgroundImage}
      >
        {/* You can add your workout videos or images here */}
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the next screen when the button is pressed
          navigation.navigate("WorkoutPlan"); // Assuming you have a screen named "WorkoutPlan"
        }}
      >
        <Text style={styles.buttonText}>Start Building My Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3498db", // Example button background color
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", // Button text color
    fontSize: 18,
  },
});

export default HomeScreen;
