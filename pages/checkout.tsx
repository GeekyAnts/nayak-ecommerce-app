import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  useColorModeValue,
} from "native-base";
import React, { useState } from "react";
import FloatingLabelInput from "./components/FloatingInput";
import Header from "./components/Header";

export default function Checkout() {
  const [text, setText] = useState("");
  const price = [
    {
      itemNumber: 0,
      modalVisible: false,
      text: "Sub Total",
      Amount: "₹799",
    },
    {
      itemNumber: 1,
      modalVisible: false,
      text: "Shipping Charge",
      Amount: "Free",
    },
    {
      itemNumber: 2,
      modalVisible: false,
      text: "Discount",
      Amount: "- ₹0",
    },
  ];
  return (
    <Box flexGrow={1} _light={{ bg: "coolGray.100" }} _dark={{}}>
      <Header></Header>
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
          borderRightColor="#FD2578"
          borderRightWidth={2}
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
          </HStack>
        </Box>
        <VStack
          _light={{ bg: "white" }}
          _dark={{}}
          width={{ lg: "30%" }}
          shadow="2"
          px={5}
          mr="3"
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
            <HStack pt={5} space={2}>
              <Icon size="6" as={Feather} name="check" color="#5CD185" />
              <Text
                _light={{ color: "#3F414D" }}
                _dark={{}}
                fontSize="sm"
                fontWeight="normal"
              >
                Get Reward Points on new registration
              </Text>
            </HStack>
            <HStack pt={1} space={2}>
              <Icon size="6" as={Feather} name="check" color="#5CD185" />
              <Text _light={{ color: "#3F414D" }} _dark={{}} fontSize="sm">
                Get Reward Points on new registration
              </Text>
            </HStack>
            <Text color="#7B7B7B" fontSize="sm" pt="4" fontWeight="medium">
              Continue with Social login
            </Text>
          </Box>
          <HStack pt={2} pb={5}>
            <Button
              size="lg"
              _light={{ bg: "white" }}
              _dark={{}}
              variant="outline"
              leftIcon={
                <Icon as={AntDesign} name="facebook-square" size="sm" />
              }
              mr={2}
              borderColor="coolGray.200"
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
              borderColor="coolGray.200"
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

          <FloatingLabelInput
            py="3"
            isRequired
            label="Or Enter Email-Id Or Phone Number"
            // labelColor="#FC2778"
            labelBGColor={useColorModeValue("#fff", "#1f2937")}
            borderRadius="sm"
            defaultValue={text}
            onChangeText={(txt: any) => setText(txt)}
            _text={{
              fontSize: "lg",
              fontWeight: "medium",
            }}
            _dark={{
              borderColor: "coolGray.700",
            }}
            _light={{
              borderColor: "coolGray.300",
            }}
          />
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
            borderColor="#FC2778"
            py="3"
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
              fontWeight="semibold"
              letterSpacing={0.8}
            >
              {" "}
              CONTINUE AS GUEST
            </Text>
          </Button>
        </VStack>
        <Box bg="white" width="30%" height="80%" shadow={3}>
          <HStack alignItems="center" justifyContent="space-between" px={4}>
            <Text color="#FFA838" fontSize="sm" fontWeight="medium">
              1 Items in your Bag
            </Text>
            <HStack alignItems="center">
              <Text color="#FD2578" fontSize="sm" fontWeight="medium">
                EDIT
              </Text>
              <Icon as={EvilIcons} name="chevron-down" color="#FD2578" />
            </HStack>
          </HStack>
          <HStack bg="coolGray.100" px={4} space={3} mt={3} py={3}>
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              height={20}
              width={16}
            />

            <VStack space={1}>
              <Text>L'Oreal Paris Infallible Full Wear Concealer - 312</Text>
              <Text>10ml</Text>
              <HStack space={1} alignItems="center">
                <Center bgColor="#C48F6A" p={2} rounded="sm" />
                <Text>312</Text>
              </HStack>
            </VStack>
          </HStack>
          <VStack px={4} space={3} mt={2}>
            {price.map((item, index) => {
              return (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {item.text == "Discount" ? (
                    <Text color="#4EB6AC" fontSize="md" fontWeight="medium">
                      {item.text}
                    </Text>
                  ) : (
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="coolGray.800"
                    >
                      {item.text}
                    </Text>
                  )}

                  {item.Amount == "Free" && "- ₹0" ? (
                    <Text color="#4EB6AC" fontSize="md" fontWeight="medium">
                      {item.Amount}
                    </Text>
                  ) : (
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="coolGray.800"
                    >
                      {item.Amount}
                    </Text>
                  )}
                </HStack>
              );
            })}
            <Divider />
          </VStack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            px={4}
            mt={2}
          >
            <Text color="coolGray.800" fontWeight="medium" fontSize="md">
              Grand Total
            </Text>
            <Text color="coolGray.800" fontWeight="medium" fontSize="md">
              ₹799
            </Text>
          </HStack>
          <Divider mt={1} />
        </Box>
      </HStack>
    </Box>
  );
}
