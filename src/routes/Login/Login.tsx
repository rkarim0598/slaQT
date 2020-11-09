import { Text, useEventHandler, View, LineEdit } from '@nodegui/react-nodegui';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { QPushButtonSignals } from '@nodegui/nodegui';
import Button from '../../components/Button';
import styleSheet from './styles';

export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const onSubmit = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => {
                console.log(username, password, 'hey');
                history.push('/chat');
            }
        },
        [username, password]
    );

    return (
        <View
            id={'login-container'}
            styleSheet={styleSheet}
        >
            <Text>Login</Text>
            <View>
                <LineEdit
                    placeholderText={'Username'}
                    on={{ textChanged: (text) => setUsername(text) }}
                />
                <LineEdit
                    placeholderText={'Password'}
                    on={{ textChanged: (text) => setPassword(text) }}
                />
            </View>
            <Button
                id={'sign-in-button'}
                enabled={username.length > 0 && password.length > 0}
                on={onSubmit}
                text={'Sign In'}
            />
        </View>
    )
}