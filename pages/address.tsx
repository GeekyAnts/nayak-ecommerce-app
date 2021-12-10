import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import FloatingLabelInput from "./components/FloatingInput";
import { EvilIcons } from "@expo/vector-icons";

export default function Address(props: any) {
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
    <Box bg="white">
      <HStack space={5} alignItems="center" mt={10} justifyContent="center">
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
              New Address
            </Text>
            {/* <Divider orientation="vertical" width="2" color="#FC2779"></Divider> */}
          </HStack>
        </Box>
        <Box bg="white" shadow="4" width="35%" height="100%" mt={8} px={4}>
          <Text fontSize="md" fontWeight="semibold" mt={4}>
            New Address
          </Text>
          <VStack space="5" mt={5}>
            <Divider />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Select Country"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue("#fff", "#1f2937")}
              borderRadius="sm"
              defaultValue={text}
              onChangeText={(txt: any) => setText(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Name"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue("#fff", "#1f2937")}
              borderRadius="sm"
              defaultValue={text}
              onChangeText={(txt: any) => setText(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Email"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue("#fff", "#1f2937")}
              borderRadius="sm"
              defaultValue={text}
              onChangeText={(txt: any) => setText(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="PhoneNumber"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue("#fff", "#1f2937")}
              borderRadius="sm"
              defaultValue={text}
              onChangeText={(txt: any) => setText(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="PostalCode"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue("#fff", "#1f2937")}
              borderRadius="sm"
              defaultValue={text}
              onChangeText={(txt: any) => setText(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Address"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue("#fff", "#1f2937")}
              borderRadius="sm"
              defaultValue={text}
              onChangeText={(txt: any) => setText(txt)}
              _text={{
                fontSize: "sm",
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
              mt={4}
              variant="unstyled"
              bgColor="#FD2578"
              onPress={() => {
                console.log("hello");
              }}
            >
              <HStack alignItems="center" space="2">
                <Text color="white" fontSize="sm" fontWeight="semibold">
                  {" "}
                  SHIP TO THIS ADDRESS
                </Text>
                <Icon as={EvilIcons} name="chevron-right" color="white" />
              </HStack>
            </Button>
          </VStack>
        </Box>
        <Box bg="white" width="30%" height="60%" shadow={3}>
          <HStack alignItems="center" justifyContent="space-between" px={4}>
            <Text color="#FFA838" fontSize="sm" fontWeight="medium">
              1 Items in your Bag
            </Text>
            <HStack alignItems="center">
              <Text color="#FD2578" fontSize="sm" fontWeight="medium">
                DETAILS
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
