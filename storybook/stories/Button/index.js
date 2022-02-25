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

export default function Button({ children, ...rest }) {
  return (
    <TouchableHighlight style={styles.container} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
}

Button.Text = Text;

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
