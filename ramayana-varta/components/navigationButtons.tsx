import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

const NavigationButtons = ({ onPrevious, onNext }) => {
  return (
    <View style={styles.navigationButtons}>
      <TouchableOpacity style={styles.navButton} onPress={onPrevious}>
        <Text style={styles.navButtonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={onNext}>
        <Text style={styles.navButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationButtons;