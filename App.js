/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from 'containers/Home';
import {Provider} from 'react-redux';
import store from 'configs/store';
import axiosDebugger from 'axiosConfig/AxiosDebugger';

// const App: () => React.ReactNode = () => {
//   useEffect(() => {
//     axiosDebugger();
//   }, []);

//   return (
//     <Provider store={store}>
//       <View>
//         <HomeScreen />
//       </View>
//     </Provider>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    axiosDebugger();
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}

type Style = {
  container: ViewStyle,
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
});

export default App;
