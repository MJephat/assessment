// import React, { useEffect, useState } from 'react'
// import { MemberState } from './context/memberProvider';
// import { useToast } from '@chakra-ui/react';

// const MemberBox = () => {
//     // const [ loggedUser, setLoggedUser] =useState();
//     const {user, setMembers, members } = MemberState()


//     const fetchmembers =async () =>{
//         // console.log(member.id);
//         try{
//         const config = {
//             headers: {
//             Authorization:  `Bearer ${user.token}`,
//             },
//         };
        
//         const { data } = await axios.get("api/members/", config);
//         console.log(data);
//         setMembers(data);
//         }catch(e){
//         toast({
//             title: "Error Occured!",
//             description: "Failed to Load members",
//             status: "error",
//             duration:5000,
//             isClosable: true,
//             position: "bottom-left",
//         })

//     }
//   };
//     useEffect(() => {
//     //   setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
//       fetchmembers();
//     }, []);

// return <div>my members</div>
// }

// export default MemberBox