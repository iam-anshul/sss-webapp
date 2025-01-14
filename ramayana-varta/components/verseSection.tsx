import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";

const VerseSection = ({ verse }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Sanskrit Verse</Text>
      <Text style={styles.verse}>{verse}</Text>
    </View>
  );
};

export default VerseSection;