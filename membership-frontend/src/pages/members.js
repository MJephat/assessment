import React from 'react'
import { MemberState } from '../context/memberProvider';
import { Box } from '@chakra-ui/layout';
import SideDrawer from '../miscill/sideDrawer';

const Members = () => {
    const {user} = MemberState();
  return (
    <div style={{width:"100%"}}>
        {user && <SideDrawer/>}
    <Box>
        {/* {user && <MemberBox/>} */}
    </Box>
    </div>
  );
}

export default Members