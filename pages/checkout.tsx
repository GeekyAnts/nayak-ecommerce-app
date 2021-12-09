import { AntDesign, Feather } from "@expo/vector-icons";
import { Box, Button, Divider, HStack, Icon, Text, VStack } from "native-base";
import React from "react";

export default function Checkout() {
  return (
    <Box flexGrow={1} _light={{ bg: "coolGray.100" }} _dark={{}}>
      <HStack>
        <Box
          py="4"
          px="4"
          _light={{ bg: "white" }}
          _dark={{}}
          width={{ lg: "20%" }}
          mr="3"
          shadow="2"
          maxHeight={12}
          justifyContent="center"
        >
          <HStack justifyContent="space-between">
            {" "}
            <Text
              _light={{ color: "#FC2779" }}
              _dark={{}}
              fontWeight="semibold"
              fontSize="md"
            >
              Login/Register
            </Text>
            {/* <Divider orientation="vertical" width="2" color="#FC2779"></Divider> */}
          </HStack>
        </Box>
        <VStack
          _light={{ bg: "white" }}
          _dark={{}}
          width={{ lg: "30%" }}
          shadow="2"
          px={5}
        >
          <Text
            _light={{ color: "#3F414D" }}
            _dark={{}}
            fontWeight="semibold"
            fontSize="md"
            py="4"
            // px="4"
          >
            Login or Register
          </Text>
          <Divider></Divider>
          <Box>
            <HStack pt={5}>
              <Icon size="6" as={Feather} name="check" color="#5CD185" />
              <Text _light={{ color: "#3F414D" }} _dark={{}} fontSize="sm">
                Get Reward Points on new registration
              </Text>
            </HStack>
            <HStack pt={1}>
              <Icon size="6" as={Feather} name="check" color="#5CD185" />
              <Text _light={{ color: "#3F414D" }} _dark={{}} fontSize="sm">
                Get Reward Points on new registration
              </Text>
            </HStack>
            <Text color="#7B7B7B" fontSize="sm" pt="4" fontWeight="medium">
              Continue with Social login
            </Text>
          </Box>
          <HStack pt={2}>
            <Button
              size="lg"
              _light={{ bg: "white" }}
              _dark={{}}
              variant="outline"
              leftIcon={
                <Icon as={AntDesign} name="facebook-square" size="sm" />
              }
              mr={2}
            >
              <Text
                fontSize="sm"
                _light={{ color: "3F414D" }}
                _dark={{}}
                fontWeight="medium"
              >
                {" "}
                FACEBOOK
              </Text>
            </Button>

            <Button
              size="lg"
              _light={{ bg: "white" }}
              _dark={{}}
              variant="outline"
              leftIcon={
                <Icon as={AntDesign} name="google" size="sm" color="" />
              }
            >
              <Text
                fontSize="sm"
                _light={{ color: "3F414D" }}
                _dark={{}}
                fontWeight="medium"
              >
                {" "}
                GOOGLE
              </Text>
            </Button>
          </HStack>
          <Button
            size="lg"
            _light={{ bg: "#FC2778" }}
            _dark={{}}
            variant="outline"
            endIcon={
              <Icon as={AntDesign} name="right" size="xs" color="white" />
            }
            mt={4}
            mb={8}
          >
            <Text
              fontSize="sm"
              _light={{ color: "white" }}
              _dark={{}}
              fontWeight="medium"
              letterSpacing={0.8}
            >
              {" "}
              NEXT
            </Text>
          </Button>
          <Text color="#3F414D" fontSize="sm" fontWeight="bold" pb={3}>
            Checkout as guest
          </Text>
          <Divider></Divider>
          <Text
            _light={{ color: "#3F414D" }}
            _dark={{}}
            fontSize="xs"
            my={4}
            fontWeight="medium"
          >
            I do not want any more benefits from Nykaa
          </Text>
          <Button
            size="lg"
            _light={{ bg: "white" }}
            _dark={{}}
            variant="outline"
            endIcon={
              <Icon as={AntDesign} name="right" size="xs" color="#FC2778" />
            }
            mt={4}
            mb={8}
          >
            <Text
              fontSize="sm"
              _light={{ color: "#FC2778" }}
              _dark={{}}
              fontWeight="medium"
              letterSpacing={0.8}
            >
              {" "}
              CONTINUE AS GUEST
            </Text>
          </Button>
        </VStack>
        <Box></Box>
        <Box></Box>
      </HStack>
    </Box>
  );
}
