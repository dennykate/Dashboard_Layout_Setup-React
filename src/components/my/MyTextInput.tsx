import { TextInputProps, TextInput } from "@mantine/core";
import React from "react";

interface PropsType extends TextInputProps {}

const MyTextInput: React.FC<PropsType> = ({ ...props }) => {
  return <TextInput {...props} />;
};

export default MyTextInput;
