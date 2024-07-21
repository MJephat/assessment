import { Box } from '@chakra-ui/layout';
import { Button, Tooltip, Text, Menu, MenuButton, Avatar, MenuItem, MenuList } from '@chakra-ui/react';
import {BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'
import { MemberState } from '../context/memberProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SideDrawer = () => {
    // const [search, setSearch] = useState("")
    // const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingMember, setLoadingMember] = useState();

    const {user} =MemberState();
    const history = useHistory();

    const LogoutHandler= () => {
        localStorage.removeItem("userInfo");
        history.push("/");
    }


  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="search  members" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i class="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
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
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton  as={Button}
            rightIcon={<ChevronDownIcon />}>
                <Avatar size='sm' cursor='pointer' name={user.username}/>
            </MenuButton>

            <MenuList>
                <MenuItem onClick={LogoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
}

export default SideDrawer