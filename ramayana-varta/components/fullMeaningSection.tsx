import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";

const FullMeaningSection = ({ fullMeaning }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Complete Meaning</Text>
      <Text style={styles.fullMeaning}>{fullMeaning}</Text>
    </View>
  );
};

export default FullMeaningSection;