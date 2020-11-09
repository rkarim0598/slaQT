import { View } from '@nodegui/react-nodegui';
import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import ChatArea from '../../components/ChatArea/ChatArea';

export default function Chat() {
    const [activeChat, setActiveChat] = useState('sd987f');

    return (
        <View id='chat-container' styleSheet={styleSheet}>
            <Sidebar />
            <ChatArea activeChat={activeChat} />
        </View>
    )
}

const styleSheet = `
    #chat-container {
        flex: 1;
        flex-direction: row;
    }
`;