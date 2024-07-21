import {
    Box,
    Center,
    Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { MemberState } from "../context/memberProvider";


const AddMember = () => {

    const {user, firstname, setFirstname, lastname,setLastname,date_of_birth,setDate_of_birth,id_number,setId_number } = MemberState();

    const [loading, setLoading] = useState(false);
    const toast = useToast();


    const submitHandler = async () => {
        setLoading(true);
        if (!firstname || !lastname || !id_number || !date_of_birth) {
        toast({
            title: "Please fill all the fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
        });
        setLoading(false);
        return;
        }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/members/",
        { firstname, lastname, id_number, date_of_birth },
        config
      );
      toast({
        title: "Registration successiful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setLoading(false);
    //     history.push("/");
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

   useEffect(() => {
     submitHandler();
   }, []);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Center>
          <Text fontSize="3xl" fontFamily="Work sans" color="black">
            SF New Membership
          </Text>
        </Center>
      </Box>

      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <VStack spacing="5px" color="black">
          <FormControl id="first-name" isRequired>
            <FormLabel>firstname</FormLabel>
            <Input
              placeholder="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel>lastname</FormLabel>
            <Input
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </FormControl>
          <FormControl id="idnumber" isRequired>
            <FormLabel>id_number</FormLabel>
            <Input
              placeholder="ID Number"
              onChange={(e) => setId_number(e.target.value)}
            />
          </FormControl>
          <FormControl id="date-of-birth" isRequired>
            <FormLabel>date_of_birth</FormLabel>
            <Input
              placeholder="D.O.B"
              onChange={(e) => setDate_of_birth(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            isLoading={loading}
          >
            Add Member
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default AddMember;
