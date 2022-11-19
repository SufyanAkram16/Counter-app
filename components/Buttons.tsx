import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
interface buttonProps {
  buttonTitle: string;
  onclickHandler: () => void;
}

const Buttons = (props: buttonProps) => {
  return (
    <div>
      <Button onClick={props.onclickHandler} colorScheme="blue">
        {props.buttonTitle}
      </Button>
    </div>
  );
};

export default Buttons;
