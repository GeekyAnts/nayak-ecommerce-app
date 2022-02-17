import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import { EvilIcons } from "@native-base/icons";
import FloatingLabelInput from "./FloatingInput";

const LINE_ITEMS = [
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

export default function Address(props: any) {
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const [expandTotal, setExpandToatal] = useState(true);

  return (
    <Box bg="coolGray.100">
      <HStack
        space="5"
        mt="10"
        justifyContent="center"
        flexDirection={{ lg: "row" }}
      >
        <Box
          py="4"
          px={{ lg: 4, md: 4, base: 4 }}
          shadow="2"
          maxHeight="12"
          borderRightWidth="2"
          width={{ lg: "20%" }}
          _light={{ bg: "white" }}
          justifyContent="center"
          borderRightColor="#FD2578"
        >
          <HStack justifyContent="space-between">
            <Text
              fontSize="md"
              fontWeight="semibold"
              _light={{ color: "#FC2779" }}
            >
              New Address
            </Text>
          </HStack>
        </Box>
        <Box
          bg="white"
          shadow="4"
          w={{ lg: "35%" }}
          height={{ lg: "100%" }}
          px={4}
          mt={{ md: 4, lg: 0, base: 4 }}
        >
          <Text
            fontSize="md"
            fontWeight="semibold"
            pt={{ md: 4, lg: 4, base: 4 }}
          >
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
              bgColor="#FD2578"
              variant="unstyled"
              // @ts-ignore
              onPress={() => {
                console.log("Ship To Address clicked");
              }}
            >
              <HStack alignItems="center" space="2">
                <Text color="white" fontSize="sm" fontWeight="semibold">
                  SHIP TO THIS ADDRESS
                </Text>
                <Icon as={EvilIcons} name="chevron-right" color="white" />
              </HStack>
            </Button>
          </VStack>
        </Box>
        <Box
          bg="white"
          w={{ lg: "26%", md: "100%" }}
          shadow={3}
          mt={{ md: 4, lg: 0, base: 4 }}
        >
          <HStack alignItems="center" justifyContent="space-between" px={4}>
            <Text color="#FFA838" fontSize="sm" fontWeight="medium">
              1 Items in your Bag
            </Text>
            <Pressable
              // @ts-ignore
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
                  color="#FD2578"
                  name={showDetails ? "chevron-up" : "chevron-down"}
                />
              </HStack>
            </Pressable>
          </HStack>
          {showDetails ? (
            <Box bg="coolGray.200" w={{ lg: "100%", md: "100%", base: "100%" }}>
              <HStack bg="white" space={1} mx={2} my={3} p={2}>
                <Image
                  source={{
                    uri: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/_/6_255.jpg",
                  }}
                  alt="Alternate Text"
                  height={20}
                  width={{ lg: "20%", md: "18%", base: "15%" }}
                />
                <VStack space={1} w={{ lg: "80%", md: "82%", base: "85%" }}>
                  <Text>Nykaa SKINRX AM/PM Duo for Acne Free Skin</Text>
                  <Text mb="1">2pcs</Text>
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
                      <Text fontSize="md">₹1199</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ) : null}
          {expandTotal ? (
            <VStack px={4} space={3} mt={2}>
              {LINE_ITEMS.map((item, index) => {
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
                      <Pressable
                        // @ts-ignore
                        onPress={() => {
                          console.log("hello");
                        }}
                      >
                        <Text fontSize="sm" fontWeight="medium" color="#fc2779">
                          {item.Amount}
                        </Text>
                      </Pressable>
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
              // @ts-ignore
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
