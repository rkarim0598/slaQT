import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import { useHistory } from 'react-router';

import React from "react";

export default function Login(props: any) {
    const history = useHistory();

    
    const signIn = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => history.push('/login')
        },
        []
    )

    const createAccount = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => history.push('/login')
        },
        []
    )

    return (
        <View id="login-container">
            <View id="welcome-container">
                <Text id="welcome-text">Welcome to SlaQT!</Text>
            </View>
            <View id="button-container">
                <Button
                    style={styles.signInButton}
                    on={signIn}
                    text={'Sign In'}
                />
                <Button
                    style={styles.createButton}
                    on={createAccount}
                    text={'Create Account'}
                />
            </View>
        </View>
    )
}

const styles = {
    signInButton: `
        background-color: rgb(0, 80, 0);
    `,
    createButton: `
        background-color: rgb(0, 0, 80);
    `
}