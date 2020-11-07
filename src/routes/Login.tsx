import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import { useHistory } from 'react-router';

import React from "react";

export default function Login(props: any) {
    const history = useHistory();

    const btnHandler = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => history.push('/home')
        },
        []
    );
    return (
        <>
            <Text style={'font-family: AlegreyaSans-Black'} id="welcome-text">Welcome to NodeGui 🐕</Text>
            <Text id="step-1">1. Play around</Text>
            <Text id="step-2">2. Debug</Text>
            <Button on={btnHandler} text={'go to home'} />
        </>
    )
}