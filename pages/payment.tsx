import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Payment(props: any) {
  const reasonList = [
    "Credit/Debit Card",
    "UPI",
    "GooglePay",
    "Net Banking",
    "Mobile Wallets",
    "Cash on Delivery",
    "Gift Card",
  ];
  return (
    <Box w="100%" bg="gray.100" p="4">
      <Text fontSize="sm" fontWeight="bold" ml="8">
        CHOOSE PAYMENT METHOD
      </Text>
      <HStack w="100%" space="4" p="4">
        <VStack
          w="20%"
          borderWidth="1"
          borderColor="coolGray.300"
          bg="white"
          h="95%"
        >
          {reasonList.map((item, index) => {
            return (
              <VStack alignItems="flex-start" key={index} pl="2">
                {item == "Credit/Debit Card" ? (
                  <HStack justifyContent="space-between" w="100%" pl="2">
                    <Text
                      my={{ base: "3.5", md: 3 }}
                      _dark={{
                        bg: { base: "coolGray.800", md: "coolGray.900" },

                        color: "coolGray.50",
                      }}
                      _light={{
                        color: "#FC2778",
                      }}
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Credit/Debit Card
                    </Text>
                    <Box bg="#FC2778" h="100%" w="1"></Box>
                  </HStack>
                ) : (
                  <HStack pl="2">
                    <Text
                      my={{ base: "3.5", md: 3 }}
                      _dark={{
                        bg: { base: "coolGray.800", md: "coolGray.900" },
                        fontSize: "sm",
                        color: "coolGray.50",
                      }}
                      _light={{
                        fontSize: "sm",
                        color: "coolGray.800",
                      }}
                    >
                      {item}
                    </Text>
                  </HStack>
                )}
                {index == reasonList.length - 1 ? null : (
                  <Divider
                    _light={{ bg: "coolGray.200" }}
                    _dark={{ bg: "coolGray.400" }}
                    width="100%"
                  />
                )}
              </VStack>
            );
          })}
        </VStack>
        <VStack
          borderWidth="1"
          borderColor="coolGray.300"
          h="80%"
          w="35%"
          bg="white"
          px="4"
        >
          <Text
            my={{ base: "3.5", md: 3 }}
            _dark={{
              bg: { base: "coolGray.800", md: "coolGray.900" },

              color: "coolGray.50",
            }}
            _light={{
              color: "coolGray.800",
            }}
            fontSize="sm"
            fontWeight="bold"
          >
            Credit/Debit Card
          </Text>
          <Divider
            _light={{ bg: "coolGray.400" }}
            _dark={{ bg: "coolGray.400" }}
            width="100%"
          />
          <Input
            placeholder="Card Number"
            fontSize="sm"
            borderWidth="0"
            mt="8"
          />
          <Divider
            _light={{ bg: "coolGray.400" }}
            _dark={{ bg: "coolGray.400" }}
            width="100%"
          />
          <Text
            mt={{ base: "3.5", md: 4 }}
            ml="2"
            _dark={{
              bg: { base: "coolGray.800", md: "coolGray.900" },

              color: "coolGray.50",
            }}
            _light={{
              color: "coolGray.400",
            }}
            fontSize="sm"
            fontWeight="bold"
          >
            Expiry
          </Text>
          <HStack space="4">
            <VStack w="30%">
              <HStack alignItems="center">
                <Input placeholder="MM" fontSize="sm" borderWidth="0" w="40%" />
                <Text>/</Text>
                <Input placeholder="YY" fontSize="sm" borderWidth="0" w="40%" />
              </HStack>
              <Divider
                _light={{ bg: "coolGray.200" }}
                _dark={{ bg: "coolGray.400" }}
                width="100%"
              />
            </VStack>
            <VStack w="15%">
              <Input placeholder="CVV" fontSize="sm" borderWidth="0" />
              <Divider
                _light={{ bg: "coolGray.200" }}
                _dark={{ bg: "coolGray.400" }}
                width="100%"
              />
            </VStack>

            <Text>Last 3 Digits at the back of the Card</Text>
          </HStack>
          <Button
            mt="8"
            w="100%"
            py="3"
            _dark={{
              bg: "primary.700",
              _pressed: { bg: "primary.500" },
            }}
            _light={{
              bg: "#FC2778",
              _pressed: { bg: "primary.700" },
            }}
            borderRadius={4}
          >
            <HStack justifyContent="center">
              <Text fontSize="md" fontWeight="medium" color="coolGray.50">
                PAY RS 799 NOW
              </Text>
              <Icon
                ml="2"
                as={MaterialIcons}
                name="keyboard-arrow-right"
                size="6"
                _light={{ color: "coolGray.50" }}
                _dark={{ color: "coolGray.500" }}
              />
            </HStack>
          </Button>
        </VStack>
        <VStack
          borderWidth="1"
          borderColor="coolGray.300"
          h="100%"
          w="30%"
          bg="white"
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            my={{ base: "3.5", md: 3 }}
            px="4"
          >
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "amber.500",
              }}
              fontSize="sm"
              fontWeight="bold"
            >
              1 Items in your Bag
            </Text>
            <HStack alignItems="center">
              <Text
                _dark={{
                  bg: { base: "coolGray.800", md: "coolGray.900" },

                  color: "coolGray.50",
                }}
                _light={{
                  color: "#FC2778",
                }}
                fontSize="sm"
                fontWeight="bold"
              >
                DETAILS
              </Text>
              <Icon
                ml="2"
                as={MaterialIcons}
                name="keyboard-arrow-down"
                size="6"
                _light={{ color: "#FC2778" }}
                _dark={{ color: "coolGray.500" }}
              />
            </HStack>
          </HStack>
          <Divider
            _light={{ bg: "coolGray.200" }}
            _dark={{ bg: "coolGray.400" }}
            width="100%"
          />
          <HStack
            justifyContent="space-between"
            my={{ base: "2.5", md: 3 }}
            px="4"
          >
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="sm"
              fontWeight="regular"
            >
              Sub Total
            </Text>
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="sm"
              fontWeight="regular"
            >
              ₹799
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            my={{ base: "2.5", md: 3 }}
            px="4"
          >
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="sm"
              fontWeight="regular"
            >
              Shipping Charge
            </Text>
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "emerald.400",
              }}
              fontSize="sm"
              fontWeight="regular"
            >
              Free
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            my={{ base: "2.5", md: 3 }}
            px="4"
          >
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "emerald.400",
              }}
              fontSize="sm"
              fontWeight="regular"
            >
              Discount
            </Text>
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "emerald.400",
              }}
              fontSize="sm"
              fontWeight="regular"
            >
              - ₹0
            </Text>
          </HStack>

          <Divider
            _light={{ bg: "coolGray.200" }}
            _dark={{ bg: "coolGray.400" }}
            width="92%"
            mx="4"
          />
          <HStack
            justifyContent="space-between"
            alignItems="center"
            my={{ base: "3.5", md: 3 }}
            px="4"
          >
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="sm"
              fontWeight="bold"
            >
              Grand Total
            </Text>
            <HStack alignItems="center">
              <Text
                _dark={{
                  bg: { base: "coolGray.800", md: "coolGray.900" },

                  color: "coolGray.50",
                }}
                _light={{
                  color: "coolGray.800",
                }}
                fontSize="sm"
                fontWeight="bold"
              >
                ₹799
              </Text>
              <Icon
                ml="2"
                as={MaterialIcons}
                name="keyboard-arrow-up"
                size="6"
                _light={{ color: "#FC2778" }}
                _dark={{ color: "coolGray.500" }}
              />
            </HStack>
          </HStack>
          <Divider
            _light={{ bg: "coolGray.200" }}
            _dark={{ bg: "coolGray.400" }}
            width="100%"
          />
          <HStack
            justifyContent="space-between"
            mt={{ base: "3.5", md: 6 }}
            bg="coolGray.200"
            p="4"
            space="4"
            // mt="6"
            borderColor="coolGray.300"
          >
            <VStack space="2">
              <Text
                _dark={{
                  bg: { base: "coolGray.800", md: "coolGray.900" },

                  color: "coolGray.50",
                }}
                _light={{
                  color: "coolGray.800",
                }}
                fontSize="md"
                fontWeight="bold"
              >
                SHIPPING ADDRESS
              </Text>
              <VStack>
                <Text
                  _dark={{
                    bg: { base: "coolGray.800", md: "coolGray.900" },

                    color: "coolGray.50",
                  }}
                  _light={{
                    color: "coolGray.800",
                  }}
                  fontSize="xs"
                >
                  Rohit kumar
                </Text>
                <Text
                  _dark={{
                    bg: { base: "coolGray.800", md: "coolGray.900" },

                    color: "coolGray.50",
                  }}
                  _light={{
                    color: "coolGray.800",
                  }}
                  fontSize="xs"
                >
                  Similique a dicta fu, Bangalore - 560102, , India
                </Text>
              </VStack>
              <Text
                _dark={{
                  bg: { base: "coolGray.800", md: "coolGray.900" },

                  color: "coolGray.50",
                }}
                _light={{
                  color: "coolGray.800",
                }}
                fontSize="xs"
                fontWeight="bold"
              >
                +91-9988776655
              </Text>
            </VStack>
            <VStack>
              <Text
                _dark={{
                  bg: { base: "coolGray.800", md: "coolGray.900" },

                  color: "coolGray.50",
                }}
                _light={{
                  color: "#FC2778",
                }}
                fontSize="xs"
                fontWeight="bold"
              >
                CHANGE
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
