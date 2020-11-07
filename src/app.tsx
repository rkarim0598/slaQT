import { Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { MemoryRouter } from "react-router";
import AppRoutes from './routes';
import { QFontDatabase, QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);
QFontDatabase.addApplicationFont('assets/AlegreyaSans/AlegreyaSans-Black.ttf')

class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Window
          windowIcon={winIcon}
          windowTitle="Hello 👋🏽"
          minSize={minSize}
          styleSheet={styleSheet}
        >
          <View style={containerStyle}>
            <AppRoutes />
          </View>
        </Window>
      </MemoryRouter>
    );
  }
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  * {
    font-family: 'AlegreyaSans-Black';
    background-color: rgb(50, 50, 50);
    color: rgb(255, 255, 255);
  }

  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;

export default hot(App);
