import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  item: Todo;
}

const TodoItem: React.FC<Props> = ({ item }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.todo}</Text>
    </TouchableOpacity>
  );
};
export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
