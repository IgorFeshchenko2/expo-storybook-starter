/* eslint-disable no-console */
import React from "react";

import MyButton from "./MyButton";

export default {
  title: "components/MyButton",
  component: MyButton,
  argTypes: {onPress: {action: "pressed"}},
};

export const Basic = () => (
  <MyButton
    onPress={() => console.log("action")}
    text="Hello World"
    color="purple"
    textColor="white"
  />
);
