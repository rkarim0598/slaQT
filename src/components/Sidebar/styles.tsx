import styleSheet from "../../styles/styleSheet";

const styles = `
    #sidebar-container {
        display: flex;
        width: 250;
        height: '100%';
    }

    #sidebar-container QPushButton {
        border-style: solid;
        text-align: left;
        padding: 3px;
        padding-left: 10px;
    }

    #sidebar-container QPushButton:hover {
        background-color: rgb(80, 80, 80);
    }

    #sidebar-container QPushButton:pressed {
        background-color: rgb(80, 80, 80);
    }
`;

export default styles;