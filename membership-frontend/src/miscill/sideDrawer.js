import { Box } from '@chakra-ui/layout';
import { Button, Tooltip, Text, Menu, MenuButton, Avatar, MenuList, useToast, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Input, Spinner, MenuItem, Table, TableContainer, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, MenuDivider } from '@chakra-ui/react';
import {BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import React, { useState } from 'react'
import { MemberState } from '../context/memberProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from "@chakra-ui/react";
import skeleton from '../memberloading';
import UserListmember from '../context/memberlist';

const SideDrawer = ({fetchAgain}) => {
    // const [search, setSearch] = useState("")
    // const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [loadingMember, setLoadingMember] = useState();

    const {user, setMembers,members} =MemberState();
    const history = useHistory();
    const toast = useToast();


    const LogoutHandler= () => {
        localStorage.removeItem("userInfo");
        history.push("/");
    }


    // fetching members
      const fetchmembers = async () => {
        // console.log(member.id);
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };

          const { data } = await axios.get("api/members/", config);
          console.log(data);
          setMembers(data);
        } catch (e) {
          toast({
            title: "Error Occured!",
            description: "Failed to Load members",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
          });
        }
      };

      
      useEffect(() => {
        fetchmembers();
      }, [fetchAgain]);


  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignmembers={"center"}
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="search  members" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text display={{ base: "flex", md: "flex" }} px={4}>
              Search Member
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2xl" fontFamily="Work sans">
          Simple Formations
        </Text>

        <div>
          <Menu>
            <MenuButton p={1}>
              {/* <BellIcon fontSize="2xl" m={1} /> */}
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name={user.username} />
            </MenuButton>

            <MenuList>
              <MenuItem>Add a Member</MenuItem>
              <MenuDivider />
              <MenuItem onClick={LogoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Box>
        <Box>
          {members.map((member) => (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignContent="center"
              bg="white"
              w="100%"
              p="5px 10px 5px 10px"
              borderWidth="5px"
            >
              <Text display={{ base: "flex", md: "flex" }} px={5}>
                {member.firstname}
              </Text>
              <Text display={{ base: "flex", md: "flex" }} px={5}>
                {member.lastname}{" "}
              </Text>
              <Text display={{ base: "flex", md: "flex" }} px={5}>
                {member.id_number}
              </Text>
              <Text display={{ base: "flex", md: "flex" }} px={5}>
                {member.date_of_birth}
              </Text>
              <Text display={{ base: "flex", md: "flex" }} px={5}>
                <Avatar size="sm" cursor="pointer" name={member.firstname} />
              </Text>
              {/* {member.date_of_birth} */}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default SideDrawer