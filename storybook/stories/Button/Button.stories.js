import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";

import Button from ".";
import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Button onPress={action("clicked-text")}>
      {text("Button text", "Hello Button")}
    </Button>
  ))
  .add("with Button.Text", () => (
    <Button onPress={action("clicked-text")}>
      <Button.Text style={{ color: "red" }}>
        {text("Button text", "Hello Button")}
      </Button.Text>
    </Button>
  ));
