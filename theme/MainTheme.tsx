import { DefaultTheme } from 'react-native-paper'
import { black, pink50 } from 'react-native-paper/src/styles/colors'
import type { Theme } from 'react-native-paper/src/types'

const MainTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fcd580',
    background: black,
    text: pink50,
  },
};

export default MainTheme
