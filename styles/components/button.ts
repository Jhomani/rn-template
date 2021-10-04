import { StyleSheet } from "react-native";

export  const st_button = StyleSheet.create({
  btn: {
    height: 32,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    width: 120,
    margin: 10,
    overflow: 'hidden',
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