import {ViewStyle} from "react-native";

type Maping = { [n: string]: ViewStyle}

export  const st_button: Maping = {
  btn: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
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
  pressed: {
    position: 'absolute',
    borderRadius: 70,
  }
}