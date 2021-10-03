import {
  Dimensions,
  StatusBar,
} from "react-native";

// calculate device dimentions;
let {height: screenHeight} = Dimensions.get("window");

export const dimensions = {
  header: 50,
  appHeight: screenHeight - (StatusBar.currentHeight ?? 0), 
  body: function() {
    return this.appHeight - this.header; 
  },
}