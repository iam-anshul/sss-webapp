import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  navButton: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 8,
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});