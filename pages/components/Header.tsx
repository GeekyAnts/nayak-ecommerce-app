import React from "react";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  VStack,
  Image,
  useColorMode,
  Input,
  Tabs,
  Pressable,
  Text,
  Center,
} from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Logo from "./Logo";
import Payment from "../payment";
import Checkout from "../checkout";
import Address from "../address";
export default function Header(props: any) {
  const { colorMode } = useColorMode();
  const [tabName, setTabName] = React.useState("LOGIN");
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Box
        safeAreaTop
        _light={{ bg: "primary.900" }}
        _dark={{ bg: "coolGray.900" }}
      />

      <Box
        //px="6"
        h="100%"
        flexGrow={1}
        _dark={{ bg: "coolGray.900", borderColor: "coolGray.800" }}
        shadow={4}
        _light={{
          bg: "coolGray.100",
          borderColor: "coolGray.200",
        }}
      >
        <VStack>
          <HStack
            pl={20}
            space={40}
            _light={{
              bg: "white",
              borderColor: "coolGray.200",
            }}
          >
            <Center>
              <Logo />
            </Center>

            <HStack
              justifyContent="space-between"
              pt={2}
              px={{ base: 8, md: 10 }}
            >
              <Pressable
                p="2"
                pr={10}
                pb={4}
                onPress={() => {
                  setTabName("LOGIN");
                }}
                borderBottomWidth={"3px"}
                px={{ base: 0, md: 0 }}
                _light={{
                  borderBottomColor:
                    tabName == "LOGIN" ? "#fd2578" : "coolGray.50",
                }}
                _dark={{
                  borderBottomColor:
                    tabName == "LOGIN" ? "primary.700" : "customGray",
                }}
              >
                <VStack>
                  <Text
                    fontWeight="medium"
                    _light={{
                      color: tabName == "LOGIN" ? "#fd2578" : "coolGray.900",
                    }}
                    _dark={{
                      color:
                        tabName == "LOGIN" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    1-LOGIN
                  </Text>
                  <Text
                    fontSize="sm"
                    _light={{
                      color:
                        tabName == "ADDRESS" ? "coolGray.500" : "coolGray.400",
                    }}
                    _dark={{
                      color:
                        tabName == "ADDRESS" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    Gala@gmail.com
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                p="2"
                pr={4}
                pb={4}
                onPress={() => {
                  setTabName("ADDRESS");
                }}
                borderBottomWidth={"3px"}
                _light={{
                  borderBottomColor:
                    tabName == "ADDRESS" ? "#fd2578" : "coolGray.50",
                }}
                _dark={{
                  borderBottomColor:
                    tabName == "ADDRESS" ? "primary.700" : "customGray",
                }}
              >
                <VStack>
                  <Text
                    fontWeight="medium"
                    _light={{
                      color: tabName == "ADDRESS" ? "#fd2578" : "coolGray.900",
                    }}
                    _dark={{
                      color:
                        tabName == "ADDRESS" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    2-ADDRESS
                  </Text>
                  <Text
                    fontSize="sm"
                    _light={{
                      color:
                        tabName == "ADDRESS" ? "coolGray.500" : "coolGray.400",
                    }}
                    _dark={{
                      color:
                        tabName == "ADDRESS" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    Gala Devji Chawk, Bazar Peth,
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                p="2"
                pb={4}
                pr={4}
                onPress={() => {
                  setTabName("PAYMENT");
                }}
                borderBottomWidth={"3px"}
                _light={{
                  borderBottomColor:
                    tabName == "PAYMENT" ? "#fd2578" : "coolGray.50",
                }}
                _dark={{
                  borderBottomColor:
                    tabName == "PAYMENT" ? "primary.700" : "customGray",
                }}
              >
                <Text
                  fontWeight="medium"
                  _light={{
                    color: tabName == "PAYMENT" ? "#fd2578" : "coolGray.900",
                  }}
                  _dark={{
                    color:
                      tabName == "PAYMENT" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  3-PAYMENT
                </Text>
              </Pressable>
            </HStack>
          </HStack>
          {tabName == "LOGIN" ? <Checkout /> : null}
          {tabName == "ADDRESS" ? <Address /> : null}
          {tabName == "PAYMENT" ? <Payment /> : null}
        </VStack>
      </Box>
    </>
  );
}
