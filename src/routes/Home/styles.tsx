const styles = `
    #home-container {
        width: '100%';
        height: '100%';
        flex: 1;
        align-items: 'center';
    }

    #welcome-container {
        display: flex;
        flex: 1;
        height: '70%';
        align-items: 'center';
        justify-content: 'center';
    }

    #welcome-text {
        font-size: 24px;
        font-weight: bold;
        padding-top: 20px;
    }

    #button-container {
        display: flex;
        flex: 1;
        height: '30%';
        width: 250;
        align-items: 'center';
        justify-content: 'center';
    }

    #button-container QPushButton {
        width: '100%';
        height: 80;
    }

    #sign-in-button {
        background-color: rgb(0, 80, 0);
        border-style: solid;
        margin-bottom: 5px;
    }

    #sign-in-button:pressed {
        background-color: rgba(0, 80, 0, 0.5);
    }

    #create-button {
        background-color: rgb(0, 0, 80);
        border-style: solid;
    }

    #create-button:pressed {
        background-color: rgba(0, 0, 80, 0.5);
    }
`;

export default styles;