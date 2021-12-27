import React from "react";
import { Box, HStack, VStack, Pressable, Text, Image } from "native-base";
import OrderInit from "../components/OrderInit";
import OrderAddress from "../components/OrderAddress";
import OrderPayment from "../components/OrderPayment";

export default function OrderCheckoutFlow(props: any) {
  const [tabName, setTabName] = React.useState("Login");
  return (
    <Box
      flex="1"
      shadow="4"
      flexGrow="1"
      _light={{
        bg: "coolGray.100",
        borderColor: "coolGray.200",
      }}
      _dark={{
        bg: "coolGray.900",
        borderColor: "coolGray.800",
      }}
    >
      <VStack>
        <HStack
          flexWrap="wrap"
          pt={{ base: 4 }}
          alignItems={{ lg: "center" }}
          pl={{ base: 4, md: 10, lg: 20 }}
          space={{ base: 40, md: 40, lg: 40 }}
          _light={{
            bg: "white",
            borderColor: "coolGray.200",
          }}
        >
          <Image
            size="md"
            alt="logo"
            alignSelf="center"
            resizeMode="contain"
            source={{ uri: "/logo.png" }}
          />
          <HStack
            pt={2}
            flexWrap="wrap"
            justifyContent="space-between"
            px={{ base: 4, md: 4, lg: 10 }}
            w={{ base: "60%", md: "60%", lg: "40%" }}
          >
            <Pressable
              p="2"
              px="0"
              pb="4"
              pr="10"
              // @ts-ignore
              onPress={() => {
                setTabName("Login");
              }}
              borderBottomWidth="3px"
              _light={{
                borderBottomColor:
                  tabName == "Login" ? "#fd2578" : "coolGray.50",
              }}
              _dark={{
                borderBottomColor:
                  tabName == "Login" ? "primary.700" : "customGray",
              }}
            >
              <VStack>
                <Text
                  fontWeight="medium"
                  _light={{
                    color: tabName == "Login" ? "#fd2578" : "coolGray.900",
                  }}
                  _dark={{
                    color: tabName == "Login" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  1 - Login
                </Text>
                <Text
                  fontSize="sm"
                  _light={{
                    color:
                      tabName == "Address" ? "coolGray.500" : "coolGray.400",
                  }}
                  _dark={{
                    color:
                      tabName == "Address" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  xyz@example.com
                </Text>
              </VStack>
            </Pressable>
            <Pressable
              p="2"
              pr="4"
              pb="4"
              // @ts-ignore
              onPress={() => {
                setTabName("Address");
              }}
              borderBottomWidth="3px"
              _light={{
                borderBottomColor:
                  tabName == "Address" ? "#fd2578" : "coolGray.50",
              }}
              _dark={{
                borderBottomColor:
                  tabName == "Address" ? "primary.700" : "customGray",
              }}
            >
              <VStack>
                <Text
                  fontWeight="medium"
                  _light={{
                    color: tabName == "Address" ? "#fd2578" : "coolGray.900",
                  }}
                  _dark={{
                    color:
                      tabName == "Address" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  2 - Address
                </Text>
                <Text
                  fontSize="sm"
                  _light={{
                    color:
                      tabName == "Address" ? "coolGray.500" : "coolGray.400",
                  }}
                  _dark={{
                    color:
                      tabName == "Address" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  XYZ, Street 12, 96 Avenue
                </Text>
              </VStack>
            </Pressable>
            <Pressable
              p="2"
              pb="4"
              pr="4"
              // @ts-ignore
              onPress={() => {
                setTabName("Payment");
              }}
              borderBottomWidth="3px"
              _light={{
                borderBottomColor:
                  tabName == "Payment" ? "#fd2578" : "coolGray.50",
              }}
              _dark={{
                borderBottomColor:
                  tabName == "Payment" ? "primary.700" : "customGray",
              }}
            >
              <Text
                fontWeight="medium"
                _light={{
                  color: tabName == "Payment" ? "#fd2578" : "coolGray.900",
                }}
                _dark={{
                  color: tabName == "Payment" ? "coolGray.50" : "coolGray.400",
                }}
              >
                3 - Payment
              </Text>
            </Pressable>
          </HStack>
        </HStack>
        {tabName == "Login" ? <OrderInit /> : null}
        {tabName == "Address" ? <OrderAddress /> : null}
        {tabName == "Payment" ? <OrderPayment /> : null}
      </VStack>
    </Box>
  );
}
