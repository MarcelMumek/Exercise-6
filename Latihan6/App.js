import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Registration from './components/page/Registration'
import List from './components/page/List'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState('Registration')

  const changePage = (pageName) => {
    setPage(pageName)
  }

  if(page == 'Registration')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Registration registerButtonHandler={() => changePage('Result')}/>
      </View>
    )
  else if(page == 'Result')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <List/>
      </View>
    )
};

export default App;