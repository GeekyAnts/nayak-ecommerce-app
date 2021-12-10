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
} from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
export default function Header(props: any) {
  const { colorMode } = useColorMode();
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
      <VStack>
        <Box
          px="6"
          pt="3"
          pb="3"
          borderBottomWidth="1"
          _dark={{ bg: "coolGray.900", borderColor: "coolGray.800" }}
          _light={{
            bg: { base: "primary.100", md: "white" },
            borderColor: "coolGray.200",
          }}
        >
          <VStack
            alignSelf="center"
            width="100%"
            maxW={props.menuButton ? null : "1016px"}
          >
            <Image
              h="10"
              w="56"
              alt="NativeBase Startup+"
              resizeMode="contain"
              source={require("./nykaa.png")}
            />
            <HStack alignItems="center" justifyContent="space-between">
              <HStack space="4" alignItems="center">
                {props.menuButton && (
                  <IconButton
                    variant="ghost"
                    colorScheme="light"
                    onPress={props.toggleSidebar}
                    icon={
                      <Icon
                        size="6"
                        name="menu-sharp"
                        as={Ionicons}
                        _light={{ color: "coolGray.800" }}
                        _dark={{ color: "coolGray.50" }}
                      />
                    }
                  />
                )}

                {/* {colorMode == "light" ? (
                  <Image
                    h="10"
                    w="56"
                    alt="NativeBase Startup+"
                    resizeMode="contain"
                    source={require("./nykaa.png")}
                  />
                ) : (
                  <Image
                    h="10"
                    w="56"
                    alt="NativeBase Startup+"
                    resizeMode="contain"
                    source={require("./nykaa.png")}
                  />
                )} */}
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </>
  );
}
