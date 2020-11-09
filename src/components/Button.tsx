import { Button as QButton } from '@nodegui/react-nodegui';
import { CursorShape } from '@nodegui/nodegui';
import React from 'react';

export default function Button(props: any) {
    return (
        <QButton
            flat={true}
            cursor={CursorShape.PointingHandCursor}
            {...props}
        />
    )
}