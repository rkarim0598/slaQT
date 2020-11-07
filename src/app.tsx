import React from "react";
import { Window, hot, View } from "@nodegui/react-nodegui";
import { QFontDatabase, QIcon } from "@nodegui/nodegui";
import { MemoryRouter } from "react-router";

import AppRoutes from './routes';
import styleSheet from './styles/styleSheet';
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
  background-color: rgb(40, 40, 40);
`;

export default hot(App);
