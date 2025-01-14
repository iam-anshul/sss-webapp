import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const ChatSection = ({ chatLog, onSendQuery }) => {
  const [query, setQuery] = useState("");

  const handleSend = () => {
    onSendQuery(query);
    setQuery("");
  };

  return (
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
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatSection;