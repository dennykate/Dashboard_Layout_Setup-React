import { FileInput, FileInputProps } from "@mantine/core";

interface PropsType extends FileInputProps {}

const MyFileInput: React.FC<PropsType> = ({ ...props }) => {
  return <FileInput {...props} />;
};
export default MyFileInput;
