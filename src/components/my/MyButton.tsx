import { Button, ButtonProps } from "@mantine/core";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PropsType extends ButtonProps {
  children: React.ReactNode;
}

const MyButton: React.FC<PropsType> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      className={twMerge("bg-primary hover:bg-primary-600", className)}
    >
      {children}
    </Button>
  );
};

export default MyButton;
