import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.TaskItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.TaskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  TaskItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },

  pressedItem: {
    opacity: 0.5,
  },

  TaskText: {
    color: "#ffffff",
    fontSize: 18,
    padding: 8,
  },
});
