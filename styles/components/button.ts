import { StyleSheet, ViewStyle } from "react-native";
import {colors} from '@styles/variables';


type Maping = { [n: string]: ViewStyle}

export  const st_button: Maping = {
  btn: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    width: 120
  },
  content: {
    position: 'absolute',
    bottom: 0,
    right: 12,
    left: 12,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  pressed: {
    position: 'absolute',
    backgroundColor: '#0001',
    borderRadius: 70,
  }
};