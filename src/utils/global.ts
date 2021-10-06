import {
  Dimensions,
  StatusBar,
} from "react-native";

// calculate device dimentions;
let {height: screenHeight, width} = Dimensions.get("window");

export const dimensions = {
  width,
  header: 50,
  appHeight: screenHeight - (StatusBar.currentHeight ?? 0), 
  body: function() {
    return this.appHeight - this.header; 
  },
}