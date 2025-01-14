import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [chatLog, setChatLog] = useState([]);

  // Example Data (can be fetched from a backend)
  const verse = "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः";
  const wordMeanings = [
    { sanskrit: "धर्मक्षेत्रे", english: "in the field of dharma" },
    { sanskrit: "कुरुक्षेत्रे", english: "in the field of Kurukshetra" },
    { sanskrit: "समवेता", english: "assembled" },
    { sanskrit: "युयुत्सवः", english: "desiring to fight" },
  ];
  const fullMeaning = "In the field of dharma, in Kurukshetra, the assembled warriors desiring to fight...";

  // Handle Chat Query Submission
  const handleSendQuery = async () => {
    if (query.trim()) {
      setChatLog([...chatLog, { user: "You", message: query }]);
      setQuery("");

      // Simulate sending query to backend LLM
      try {
        const response = await axios.post("https://example.com/ask-verse", { query });
        setChatLog([...chatLog, { user: "LLM", message: response.data.answer }]);
      } catch (error) {
        setChatLog([...chatLog, { user: "LLM", message: "Sorry, I couldn't process your request." }]);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Verse Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Sanskrit Verse</Text>
        <Text style={styles.verse}>{verse}</Text>
      </View>

      {/* Word Meanings Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Word Meanings</Text>
        {wordMeanings.map((word, index) => (
          <Text key={index} style={styles.wordMeaning}>
            {word.sanskrit} - {word.english}
          </Text>
        ))}
      </View>

      {/* Full Meaning Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Complete Meaning</Text>
        <Text style={styles.fullMeaning}>{fullMeaning}</Text>
      </View>

      {/* Chat Section */}
      <View style={styles.chatSection}>
        <Text style={styles.heading}>Chat About the Verse</Text>
        {chatLog.map((log, index) => (
          <Text key={index} style={log.user === "You" ? styles.userMessage : styles.botMessage}>
            {log.user}: {log.message}
          </Text>
        ))}
        <TextInput
          style={styles.input}
          placeholder="Ask about the verse..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendQuery}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    minHeight: "100%",
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  verse: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#333",
  },
  wordMeaning: {
    fontSize: 16,
    marginVertical: 2,
  },
  fullMeaning: {
    fontSize: 16,
    marginTop: 8,
    color: "#555",
  },
  chatSection: {
    marginTop: 16,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#d1f0d1",
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0d1d1",
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#6200ea",
    padding: 10,
    marginTop: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
