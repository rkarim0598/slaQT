import { View, Text } from '@nodegui/react-nodegui';
import React from 'react';

import Button from '../Button';

import styleSheet from './styles';

const chats = {
    channels: [
        {
            id: 'sd987f',
            name: 'go-cubs'
        },
        {
            id: 'sdf89s873',
            name: 'science-fiction'
        },
        {
            id: '897sdf',
            name: 'test-channel'
        }
    ],
    directs: [
        {
            id: 'somebody1',
            name: 'Uno Numero'
        },
        {
            id: 'somebody2',
            name: 'Paul Atreides'
        },
        {
            id: 'somebody3',
            name: 'Horza Gobuchul'
        }
    ]
}

export default function Sidebar() {

    return (
        <View id='sidebar-container' styleSheet={styleSheet}>
            <Text>CHANNELS</Text>
            {chats.channels.map(channel =>
                <Button
                    key={channel.id}
                    text={`#${channel.name}`}
                />
            )}
            <Text>DIRECTS</Text>
            {chats.directs.map(direct =>
                <Button
                    key={direct.id}
                    text={direct.name}
                />
            )}
        </View>
    )
}