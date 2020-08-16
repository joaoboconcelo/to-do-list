import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import TaskList from "./src/components/TaskList";

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);
export default function App() {
  const [task, setTask] = useState([
    { key: 1, task: "Continuar vídeo - 29:30" },
    { key: 2, task: "Estudar React Native" },
    { key: 3, task: "Dormir" },
    { key: 4, task: "Jogar" },
    { key: 5, task: "Ir pra aula" },
  ]);
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />
      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView>
          <Text>1 2 3</Text>
        </SafeAreaView>
      </Modal>
      <AnimatedBtn
        style={styles.fab}
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={35} color="white" />
      </AnimatedBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 22,
    textAlign: "center",
    color: "#FFF",
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
