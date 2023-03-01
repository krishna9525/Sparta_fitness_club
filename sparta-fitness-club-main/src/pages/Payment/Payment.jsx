import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import ReviewOrder from "../../components/Checkout/ReviewOrder";
import { useDispatch, useSelector } from "react-redux";
import { empty_cart } from "../../store/Cart/CartAction";

const Payment = () => {
  const Productarray = useSelector((store) => store.Product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlaceOrder = () => {
    navigate("/success");
  };
  return (
    <>
      <Box
        backgroundColor="#fafcfd"
        px={{ base: "20px", sm: "50px", md: "100px", lg: "200px" }}
        py="50px"
      >
        <Heading px="20px" as="h1" size="xl" fontWeight={500}>
          Checkout
        </Heading>
      </Box>
      <Box background="#f0f4f6" pb="80px">
        <ReviewOrder />
        {/***************************  Billing section ******************************** */}
        <Flex
          direction="column"
          px={{ base: "20px", sm: "50px", md: "100px", lg: "200px" }}
          gap="2px"
        >
          <Flex
            width="100%"
            align="center"
            justify="space-between"
            background="#fafcfd"
            p="20px"
            borderTopRadius="5px"
          >
            <Heading as="h5" size="md" fontWeight={600}>
              Payment Information
            </Heading>
          </Flex>
          <Box
            bg="#fff"
            // border="1px solid red"
            borderBottomRadius="5px"
            // h="300px"
          >
            <Box
              w={{ base: "90%", sm: "90%", md: "90%", lg: "60%" }}
              m="auto"
              my="20px"
            >
              {/* ***************************** BILLING FORM******************************* */}

              <Flex
                justify="space-between"
                my="20px"
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                }}
                gap={{ base: "20px", lg: "60px" }}
              >
                <Button colorScheme="blue" color="#4296cb" variant="link">
                  <Link to="/cart">Cancel</Link>
                </Button>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  borderRadius="2px"
                  py="30px"
                  px={{ base: "30px", lg: "60px" }}
                  bg="#4296cb"
                  w={{ base: "70%", lg: "50%" }}
                  m="auto"
                  onClick={handlePlaceOrder}
                >
                  PLACE ORDER
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Payment;
