const styles = `
    #login-container {
        flex: 1;
        justify-content: 'space-evenly';
        align-items: 'center';
    }

    QLineEdit {
        background-color: 'transparent';
        border-style: solid;
        border-bottom-width: 1;
        border-color: rgb(80, 80, 80);
    }

    QLineEdit:hover {
        border-color: 'white';
    }

    #login-container > QPushButton {
        background-color: rgb(0, 80, 0);
        width: '50%';
        height: 70;
        border-style: solid;
    }
`;

export default styles;