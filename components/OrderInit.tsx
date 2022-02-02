import React, { useState } from "react";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  useColorModeValue,
} from "native-base";
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

export default function Checkout() {
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const [expandTotal, setExpandToatal] = useState(true);

  return (
    <Box _light={{ bg: "coolGray.100" }}>
      <HStack
        space={5}
        mt={10}
        justifyContent="center"
        flexDirection={{ lg: "row" }}
      >
        <Box
          py="4"
          px="4"
          mr="3"
          shadow="2"
          maxHeight={12}
          borderRightWidth={2}
          width={{ lg: "20%" }}
          _light={{ bg: "white" }}
          justifyContent="center"
          borderRightColor="#FD2578"
        >
          <Text
            fontSize="md"
            fontWeight="semibold"
            _light={{ color: "#FC2779" }}
          >
            Login/Register
          </Text>
        </Box>
        <VStack
          mr="3"
          px={5}
          shadow="2"
          _light={{ bg: "white" }}
          width={{ lg: "30%" }}
        >
          <Text
            _light={{ color: "#3F414D" }}
            fontWeight="semibold"
            fontSize="md"
            py="4"
          >
            Login or Register
          </Text>
          <Divider></Divider>
          <Box>
            <HStack pt={5} space={2}>
              <Icon size="6" as={Feather} name="check" color="#5CD185" />
              <Text
                _light={{ color: "#3F414D" }}
                fontSize="sm"
                fontWeight="normal"
              >
                Get Reward Points on new registration
              </Text>
            </HStack>
            <HStack pt={1} space={2}>
              <Icon size="6" as={Feather} name="check" color="#5CD185" />
              <Text _light={{ color: "#3F414D" }} _dark={{}} fontSize="sm">
                Get More Reward Points When You Share Code
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
                fontWeight="medium"
              >
                FACEBOOK
              </Text>
            </Button>

            <Button
              size="lg"
              _light={{ bg: "white" }}
              variant="outline"
              borderColor="coolGray.200"
              leftIcon={
                <Icon as={AntDesign} name="google" size="sm" color="" />
              }
            >
              <Text
                fontSize="sm"
                _light={{ color: "3F414D" }}
                fontWeight="medium"
              >
                GOOGLE
              </Text>
            </Button>
          </HStack>

          <FloatingLabelInput
            py="3"
            isRequired
            label="Enter Email-Id Or Phone Number"
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
              fontWeight="medium"
              letterSpacing={0.8}
            >
              NEXT
            </Text>
          </Button>
          <Text color="#3F414D" fontSize="sm" fontWeight="bold" pb={3}>
            Checkout as guest
          </Text>
          <Divider></Divider>
          <Text
            _light={{ color: "#3F414D" }}
            fontSize="xs"
            my={4}
            fontWeight="medium"
          >
            I do not want any more benefits from Nykaa
          </Text>
          <Button
            size="lg"
            _light={{ bg: "white" }}
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
              CONTINUE AS GUEST
            </Text>
          </Button>
        </VStack>
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
