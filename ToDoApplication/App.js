import { StyleSheet, View, FlatList, Button } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseTasks, setCourseTasks] = useState([]);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setCourseTasks((currentCourseTasks) => [
      ...currentCourseTasks,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setCourseTasks((currentCourseTasks) => {
      return currentCourseTasks.filter((Task) => Task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Task"
            color={Platform.OS === "android" ? "#5e0acc" : "#FFFFFF"}
            onPress={startAddTaskHandler}
          />
        </View>
        <TaskInput
          visible={modalIsVisible}
          onAddTask={addTaskHandler}
          onCancel={endAddTaskHandler}
        />
        <View style={styles.TasksContainer}>
          <FlatList
            data={courseTasks}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTaskHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  TasksContainer: {
    flex: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
