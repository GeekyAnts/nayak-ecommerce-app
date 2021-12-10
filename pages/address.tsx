import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import FloatingLabelInput from "./components/FloatingInput";
import { EvilIcons } from "@expo/vector-icons";

export default function Address(props: any) {
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const [expandTotal, setExpandToatal] = useState(true);
  const price = [
    {
      itemNumber: 0,
      modalVisible: false,
      text: "Sub Total",
      Amount: "₹1199",
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
    {
      itemNumber: 2,
      modalVisible: false,
      text: "Use Reward Points (2000)",
      Amount: "APPLY",
    },
  ];
  return (
    <Box bg="coolGray.100" flexGrow={1}>
      <HStack space={5} mt={10} justifyContent="center">
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
        <Box bg="white" shadow="4" width="35%" height="100%" px={4}>
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
              mb={10}
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
        <Box bg="white" width="30%" height="80%" shadow={3}>
          <HStack alignItems="center" justifyContent="space-between" px={4}>
            <Text color="#FFA838" fontSize="sm" fontWeight="medium">
              1 Items in your Bag
            </Text>
            <Pressable
              onPress={() => {
                setShowDetails(!showDetails);
              }}
            >
              <HStack alignItems="center">
                <Text color="#FD2578" fontSize="sm" fontWeight="medium">
                  {showDetails ? "Edit" : "Details"}
                </Text>
                <Icon
                  as={EvilIcons}
                  name={showDetails ? "chevron-up" : "chevron-down"}
                  color="#FD2578"
                />
              </HStack>
            </Pressable>
          </HStack>
          {showDetails ? (
            <Box bg="coolGray.100">
              <HStack bg="white" mx={4} space={3} my={3} p={2}>
                <Image
                  source={{
                    uri: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/_/6_255.jpg",
                  }}
                  alt="Alternate Text"
                  height={20}
                  width={16}
                />

                <VStack space={1}>
                  <Text>Nykaa SKINRX AM/PM Duo for Acne Free Skin</Text>
                  <Text>2pcs</Text>
                  <Divider />

                  <HStack
                    space={1}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text>Qty:1</Text>
                    <HStack alignItems="center" space={1}>
                      <Text fontSize="2xs" strikeThrough>
                        ₹1598
                      </Text>
                      <Text fontSize="lg">₹1199</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ) : null}
          {expandTotal ? (
            <VStack px={4} space={3} mt={2}>
              {price.map((item, index) => {
                return (
                  <HStack
                    key={index}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {item.text == "Discount" ? (
                      <Text color="#4EB6AC" fontSize="sm" fontWeight="medium">
                        {item.text}
                      </Text>
                    ) : (
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.800"
                      >
                        {item.text}
                      </Text>
                    )}

                    {item.Amount == "Free" || item.Amount == "- ₹0" ? (
                      <Text color="#4EB6AC" fontSize="sm" fontWeight="medium">
                        {item.Amount}
                      </Text>
                    ) : item.Amount == "APPLY" ? (
                      <Text fontSize="sm" fontWeight="medium" color="#fc2779">
                        {item.Amount}
                      </Text>
                    ) : (
                      <Text
                        fontSize="sm"
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
          ) : null}

          <HStack
            alignItems="center"
            justifyContent="space-between"
            px={4}
            mt={2}
          >
            <Text color="coolGray.800" fontWeight="medium" fontSize="md">
              Grand Total
            </Text>
            <Pressable
              onPress={() => {
                setExpandToatal(!expandTotal);
              }}
            >
              <HStack alignItems="center">
                <Text color="coolGray.800" fontWeight="medium" fontSize="md">
                  ₹1199
                </Text>
                <Icon
                  as={EvilIcons}
                  name={expandTotal ? "chevron-up" : "chevron-down"}
                  color="#FD2578"
                />
              </HStack>
            </Pressable>
          </HStack>
          <Divider mt={1} />
        </Box>
      </HStack>
    </Box>
  );
}
