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
    // overflow: 'hidden',
    borderRadius: 18,
  },
  header: {
    height: 30, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});