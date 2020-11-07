import { Text, Button, useEventHandler } from '@nodegui/react-nodegui';
import React from 'react';
import { useHistory } from 'react-router';
import { QPushButtonSignals } from '@nodegui/nodegui';

export default function Home() {
    const history = useHistory();

    const btnHandler = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => history.push('/')
        },
        []
    );

    return (
        <>
            <Text>Heyo</Text>
            <Button on={btnHandler} text={'back to login'} />
        </>
    )
}