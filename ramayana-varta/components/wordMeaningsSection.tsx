import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";

const WordMeaningsSection = ({ wordMeanings }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Word Meanings</Text>
      {wordMeanings.map((word, index) => (
        <Text key={index} style={styles.wordMeaning}>
          {word.sanskrit} - {word.english}
        </Text>
      ))}
    </View>
  );
};

export default WordMeaningsSection;