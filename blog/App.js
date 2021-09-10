import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ShowScreen from './src/screens/ShowScreen';

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
