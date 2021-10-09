import {
  Dimensions,
  StatusBar,
} from "react-native";

// calculate device dimentions;
let {height, width} = Dimensions.get("window");
export const dimension = {
  width,
  header: 50,
  height: height - (StatusBar.currentHeight ?? 0), 
  body: function() {
    return this.height - this.header; 
  },
}