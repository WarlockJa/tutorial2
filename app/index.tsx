import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
        <Link href={"/contact"} style={styles.link} asChild>
          <Pressable style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
        <Link href={"/menu"} style={styles.link} asChild>
          <Pressable style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    marginHorizontal: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  buttonStyle: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    justifyContent: "center",
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
