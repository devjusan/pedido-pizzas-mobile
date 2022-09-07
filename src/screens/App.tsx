import {
  useFonts,
  DMSerifDisplay_400Regular,
} from "@expo-google-fonts/dm-serif-display";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { Text } from "react-native";
useFonts;
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Text>a test</Text>;
}
