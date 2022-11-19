import { useState } from "react";
import {
  Flex,
  Heading,
  Center,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Buttons from "../components/Buttons";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const [num, setNum] = useState<number>(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry, Zero Limit reached");
      setNum(0);
    }
  };
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background={formBackground}
          p={12}
          rounded={16}
        >
          <Heading mb={6}>Counter App</Heading>
          <Center mb={6} fontSize="5xl">
            {num}
          </Center>
          <Flex
            minWidth="max-content"
            alignItems="center"
            gap="16"
            mx={10}
            mb={10}
          >
            <Buttons onclickHandler={incNum} buttonTitle="+1" />
            <Buttons onclickHandler={decNum} buttonTitle="-1" />
          </Flex>
          <Flex minWidth="max-content" alignItems="center" mx={8}>
            <Buttons
              onclickHandler={toggleColorMode}
              buttonTitle="Change Color Mode"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
