import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function TaskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your Task"
          style={styles.textInput}
          onChangeText={TaskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Task"
              color={Platform.OS === "android" ? "#5e0acc" : "#FFFFFF"}
              onPress={addTaskHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
