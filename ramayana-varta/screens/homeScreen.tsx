import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import VerseSection from "../components/verseSection";
import WordMeaningsSection from "../components/wordMeaningsSection";
import FullMeaningSection from "../components/fullMeaningSection";
import ChatSection from "../components/chatSection";
import NavigationButtons from "../components/navigationButtons";
import { verses } from "../data/verses";
import { styles } from "../styles/styles";

const HomeScreen = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [chatLog, setChatLog] = useState([]);

  const currentVerse = verses[currentVerseIndex];

  const handleNextVerse = () => {
    if (currentVerseIndex < verses.length - 1) {
      setCurrentVerseIndex(currentVerseIndex + 1);
    }
  };

  const handlePreviousVerse = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(currentVerseIndex - 1);
    }
  };

  const handleSendQuery = (query) => {
    if (query.trim()) {
      setChatLog([...chatLog, { user: "You", message: query }]);
      // Simulate sending query to backend LLM
      setTimeout(() => {
        setChatLog([...chatLog, { user: "LLM", message: "This is a mock response." }]);
      }, 1000);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display Kaanda and Sarga */}
      <View style={styles.section}>
        <Text style={styles.heading}>
          {currentVerse.kaanda} - Sarga {currentVerse.sarga}
        </Text>
      </View>

      {/* Render the current verse */}
      <VerseSection verse={currentVerse.verse} />
      <WordMeaningsSection wordMeanings={currentVerse.wordMeanings} />
      <FullMeaningSection fullMeaning={currentVerse.fullMeaning} />

      {/* Navigation buttons to switch between verses */}
      <NavigationButtons onPrevious={handlePreviousVerse} onNext={handleNextVerse} />

      {/* Chat section for user interaction */}
      <ChatSection chatLog={chatLog} onSendQuery={handleSendQuery} />
    </ScrollView>
  );
};

export default HomeScreen;