import React from "react";
// import { ChatState } from '../context/chatProvider';
import { Box, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

const memberListItem = ({ member, handleFunction }) => {
  // const { member } = ChatState();
  return (
    <Box
    //   onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w={"100%"}
      display={"flex"}
      alignItems={"center"}
      color={"black"}
      px={3}
      py={2}
      mb={2}
      borderRadius={"lg"}
    >
      <Avatar
        mr={2}
        size="sm"
        cursor={"pointer"}
        name={member.firstname}
        src={member.pic}
      />
      <Box>
        <Text>{member.firstname}</Text>
        <Text fontSize="xs">
          {/* <b>Email :</b> */}
          {member.lastname}
          {member.id_number}
          {member.date_of_birth}
        </Text>
      </Box>
    </Box>
  );
};

export default memberListItem;
