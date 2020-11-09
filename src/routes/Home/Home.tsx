import { Text, View, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import styleSheet from './styles';
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
        <View id="home-container" styleSheet={styleSheet}>
            <View id="welcome-container">
                <Text id="welcome-text">Welcome to SlaQT!</Text>
            </View>
            <View id="button-container">
                <Button
                    id={'sign-in-button'}
                    on={signIn}
                    text={'Sign In'}
                />
                <Button
                    flat={true}
                    id={'create-button'}
                    on={createAccount}
                    text={'Create Account'}
                />
            </View>
        </View>
    )
}