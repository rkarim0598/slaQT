import { View, Text } from '@nodegui/react-nodegui';
import React from 'react';

import styleSheet from './styles';

const defaultChat = [
    {
        id: '89sd7f',
        senderId: 'sleif798',
        content: 'Hey now'
    },
    {
        id: 'as8f7',
        senderId: 'sldkjf89234',
        content: 'You\'re a rockstar'
    },
    {
        id: 'ksla238497',
        senderId: '23iou4',
        content: 'Here\'s an example of longer text for displaying in the area let\'s see how it goes'
    }
]

interface ChatAreaInterface {
    activeChat: string
}

export default function ChatArea(props: ChatAreaInterface) {
    return (
        <View
            id='chat-area-container'
            styleSheet={styleSheet}
        >
            <View
                id='message-container'
            >
                <View id='top-container'>
                    <Text id="sender">sender id</Text>
                    <Text id='timestamp'>timestamp</Text>
                </View>
                <Text>blah blha content stuff here yeah yeah here we go</Text>
            </View>
        </View>
    )
}