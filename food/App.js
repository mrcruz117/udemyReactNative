import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initailRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);
// note
export default createAppContainer(navigator);
