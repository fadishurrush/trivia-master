import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SIZES = {
    screenWidth: windowWidth , 
    screenHeight: windowHeight , 
}

export default SIZES