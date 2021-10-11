import { StyleSheet } from "react-native";
import {dimension} from '@utils/global';

export  const st_modal = StyleSheet.create({
  cover: {
    zIndex:1,
    height: dimension.height, 
    width: '100%', 
    backgroundColor: '#0006', 
    position: 'absolute', 
    top: 0, 
    left: 0,
  },
  box: {
    minWidth: 250,
    minHeight: 150,
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#fff', 
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    width: 100 - 26,
  },
  pressed: {
    position: 'absolute',
    backgroundColor: '#fff1',
    borderRadius: 70,
  }
});