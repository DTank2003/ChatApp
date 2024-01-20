import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../Components/Miscellaneous/SideDrawer';
import MyChats from '../Components/Miscellaneous/MyChats';
import ChatBox from '../Components/Miscellaneous/ChatBox';

const Chatpage = () => {
    const { user } = ChatState();
    console.log('User in Chatpage:', user);
    if (user) {
  return (
        <div style={{ width: "100%" }}>
            
            {user && <SideDrawer/>}
        
            <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChats />}
                {user && <ChatBox />}
                
            </Box>
        </div>
    );
} else {
  // Render a placeholder or loading indicator
  return (
    <Box>
      Loading user information...
    </Box>
  );
}
};

export default Chatpage