import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 60,
    borderRadius: 5,
    padding: 16,
    justifyContent: "center",
  },
  text: { color: "white" },
});

export default function Button({ onPress, children, textStyle }) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
