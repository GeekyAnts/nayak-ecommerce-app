import React from "react";
import {
  Box,
  Button,
  Divider,
  Hidden,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons, Octicons } from "@native-base/icons";

const PAYMENT_VENDORS = [
  "UPI",
  "Gift Card",
  "GooglePay",
  "Net Banking",
  "Mobile Wallets",
  "Cash on Delivery",
  "Credit/Debit Card",
];

export default function Payment(props: any) {
  return (
    <Box bg="coolGray.100" p="5">
      <HStack
        p="4"
        space={5}
        justifyContent="center"
        flexDirection={{ xl: "row" }}
      >
        <VStack
          w={{ xl: "20%" }}
          mb={{ base: "4", xl: "0" }}
          bg="white"
          borderWidth="1"
          borderColor="coolGray.300"
        >
          {PAYMENT_VENDORS.map((item, index) => {
            return (
              <VStack alignItems="flex-start" key={index} pl="2">
                {item == "Credit/Debit Card" ? (
                  <HStack justifyContent="space-between" w="100%" pl="2">
                    <Text
                      my="3"
                      _dark={{
                        color: "coolGray.50",
                        bg: { base: "coolGray.800", md: "coolGray.900" },
                      }}
                      _light={{
                        color: "#FC2778",
                      }}
                      fontSize="md"
                      fontWeight="semibold"
                    >
                      Credit/Debit Card
                    </Text>
                    <Box bg="#FC2778" h="100%" w="1"></Box>
                  </HStack>
                ) : (
                  <HStack pl="2">
                    <Text
                      my="3"
                      _dark={{
                        fontSize: "md",
                        color: "coolGray.50",
                        bg: { base: "coolGray.800", md: "coolGray.900" },
                      }}
                      _light={{
                        fontSize: "md",
                        color: "coolGray.800",
                      }}
                    >
                      {item}
                    </Text>
                  </HStack>
                )}
                {index == PAYMENT_VENDORS.length - 1 ? null : (
                  <Divider
                    width="100%"
                    _light={{ bg: "coolGray.200" }}
                    _dark={{ bg: "coolGray.400" }}
                  />
                )}
              </VStack>
            );
          })}
        </VStack>
        <VStack
          px="4"
          mb={{ base: "4", xl: "0" }}
          w={{ xl: "35%" }}
          bg="white"
          borderWidth="1"
          borderColor="coolGray.300"
        >
          <Text
            my="3"
            _dark={{
              color: "coolGray.50",
              bg: { base: "coolGray.800", md: "coolGray.900" },
            }}
            _light={{
              color: "coolGray.800",
            }}
            fontSize="md"
            fontWeight="semibold"
          >
            Credit/Debit Card
          </Text>
          <Divider
            width="100%"
            _light={{ bg: "coolGray.400" }}
            _dark={{ bg: "coolGray.400" }}
          />
          <Input
            mt="8"
            fontSize="sm"
            borderWidth="0"
            fontWeight="semibold"
            placeholder="Card Number"
          />
          <Divider
            width="100%"
            _light={{ bg: "coolGray.400" }}
            _dark={{ bg: "coolGray.400" }}
          />
          <Text
            mt="10"
            ml="2"
            _dark={{
              color: "coolGray.50",
              bg: { base: "coolGray.800", md: "coolGray.900" },
            }}
            _light={{
              color: "coolGray.400",
            }}
            fontSize="sm"
            fontWeight="semibold"
          >
            Expiry
          </Text>
          <HStack mt="2" space="4" alignItems="center">
            <VStack w="30%">
              <HStack alignItems="center">
                <Input
                  placeholder="MM"
                  fontSize="sm"
                  fontWeight="semibold"
                  borderWidth="0"
                  w="40%"
                />
                <Text>/</Text>
                <Input
                  placeholder="YY"
                  fontWeight="semibold"
                  fontSize="sm"
                  borderWidth="0"
                  w="40%"
                />
              </HStack>
              <Divider
                width="100%"
                _light={{ bg: "coolGray.200" }}
                _dark={{ bg: "coolGray.400" }}
              />
            </VStack>
            <VStack w="15%">
              <Input
                placeholder="CVV"
                fontWeight="semibold"
                fontSize="sm"
                borderWidth="0"
              />
              <Divider
                width="100%"
                _light={{ bg: "coolGray.200" }}
                _dark={{ bg: "coolGray.400" }}
              />
            </VStack>
            <HStack space="3" alignItems="center">
              <Icon
                size="10"
                as={Octicons}
                name="credit-card"
                _light={{ color: "coolGray.500" }}
                _dark={{ color: "coolGray.500" }}
              />
              <Hidden till="xl">
                <Text
                  w="50%"
                  _dark={{
                    color: "coolGray.50",
                    bg: { base: "coolGray.800", md: "coolGray.900" },
                  }}
                  _light={{
                    color: "coolGray.500",
                  }}
                  fontSize="sm"
                >
                  Last 3 Digits at the back of the Card
                </Text>
              </Hidden>
            </HStack>
          </HStack>
          <Hidden from="xl">
            <Text
              w="50%"
              my="2"
              _dark={{
                color: "coolGray.50",
                bg: { base: "coolGray.800", md: "coolGray.900" },
              }}
              _light={{
                color: "coolGray.500",
              }}
              fontSize="sm"
            >
              Last 3 Digits at the back of the Card
            </Text>
          </Hidden>
          <Button
            py="3"
            mb="4"
            mt="auto"
            _dark={{
              bg: "primary.700",
              _pressed: { bg: "primary.500" },
            }}
            _light={{
              bg: "#FC2778",
              _pressed: { bg: "pink.600" },
              _hover: { bg: "pink.500" },
            }}
            borderRadius={4}
          >
            <HStack justifyContent="center">
              <Text fontSize="sm" fontWeight="semibold" color="coolGray.50">
                PAY ₹799 NOW
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
          w={{ xl: "26%" }}
          bg="white"
          borderWidth="1"
          borderColor="coolGray.300"
        >
          <HStack
            my="3"
            px="4"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              _dark={{
                color: "coolGray.50",
                bg: { base: "coolGray.800", md: "coolGray.900" },
              }}
              _light={{
                color: "amber.500",
              }}
              fontSize="sm"
              fontWeight="semibold"
            >
              1 Items in your Bag
            </Text>
            <HStack alignItems="center">
              <Text
                _dark={{
                  color: "coolGray.50",
                  bg: { base: "coolGray.800", md: "coolGray.900" },
                }}
                _light={{
                  color: "#FC2778",
                }}
                fontSize="xs"
                fontWeight="semibold"
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
          <HStack justifyContent="space-between" my="3" px="4">
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="sm"
              fontWeight="semibold"
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
              fontWeight="semibold"
            >
              ₹799
            </Text>
          </HStack>
          <HStack my="3" px="4" justifyContent="space-between">
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="sm"
              fontWeight="semibold"
            >
              Shipping Charge
            </Text>
            <Text
              _dark={{
                color: "coolGray.50",
                bg: { base: "coolGray.800", md: "coolGray.900" },
              }}
              _light={{
                color: "emerald.400",
              }}
              fontSize="sm"
              fontWeight="semibold"
            >
              Free
            </Text>
          </HStack>
          <HStack my="3" px="4" justifyContent="space-between">
            <Text
              _dark={{
                bg: { base: "coolGray.800", md: "coolGray.900" },

                color: "coolGray.50",
              }}
              _light={{
                color: "emerald.400",
              }}
              fontSize="sm"
              fontWeight="semibold"
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
              fontWeight="semibold"
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
              fontWeight="semibold"
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
                fontWeight="semibold"
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
            width="100%"
            _light={{ bg: "coolGray.200" }}
            _dark={{ bg: "coolGray.400" }}
          />
          <VStack
            py="2"
            px="4"
            bg="#F3F3F3"
            space="2"
            borderColor="coolGray.300"
          >
            <HStack justifyContent="space-between" alignItems="center">
              <Text
                fontSize="md"
                fontWeight="semibold"
                _dark={{
                  color: "coolGray.50",
                  bg: { base: "coolGray.800", md: "coolGray.900" },
                }}
                _light={{
                  color: "coolGray.800",
                }}
              >
                SHIPPING ADDRESS
              </Text>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                _dark={{
                  color: "coolGray.50",
                  bg: { base: "coolGray.800", md: "coolGray.900" },
                }}
                _light={{
                  color: "#FC2778",
                }}
              >
                CHANGE
              </Text>
            </HStack>
            <VStack>
              <Text
                fontSize="xs"
                _dark={{
                  color: "coolGray.50",
                  bg: { base: "coolGray.800", md: "coolGray.900" },
                }}
                _light={{
                  color: "coolGray.800",
                }}
              >
                John Doe
              </Text>
              <Text
                fontSize="xs"
                _dark={{
                  color: "coolGray.50",
                  bg: { base: "coolGray.800", md: "coolGray.900" },
                }}
                _light={{
                  color: "coolGray.800",
                }}
              >
                XYZ, Street 12, 96 Avenue
              </Text>
            </VStack>
            <Text
              _dark={{
                color: "coolGray.50",
                bg: { base: "coolGray.800", md: "coolGray.900" },
              }}
              _light={{
                color: "coolGray.800",
              }}
              fontSize="xs"
              fontWeight="semibold"
            >
              +XX-666XXXXXXX
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
}
