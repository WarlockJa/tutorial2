import { StyleSheet, View, Text, ImageBackground } from "react-native";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImage} style={styles.bgImage}>
        <View style={styles.bgText}>
          <Text style={styles.textH2}>Welcome!</Text>
          <Text style={styles.text}>to the</Text>
          <Text style={styles.textH1}>Bestest Coffee</Text>
          <Text style={styles.paragraphTitle}>Working Hours:</Text>
          <Text style={styles.paragraphText}>Mon-Fri: 9am - 7pm</Text>
          <Text style={styles.paragraphText}>Sat-Sun: 10am - 8pm</Text>
          <Text style={styles.paragraphTitle}>Address:</Text>
          <Text style={styles.paragraphText}>
            In the middle of Nowhere, next to the mailbox
          </Text>
          <Text style={styles.paragraphTitle}>Contact:</Text>
          <Text style={styles.paragraphText}>
            Do not contact us. We will find you...
          </Text>
        </View>
        {/* <Link style={styles.link} href={"/"}>
          Go Home
        </Link> */}
      </ImageBackground>
    </View>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={
    //     <IconSymbol
    //       size={310}
    //       color="#808080"
    //       name="chevron.left.forwardslash.chevron.right"
    //       style={styles.headerImage}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Explore</ThemedText>
    //   </ThemedView>
    //   <ThemedText>This app includes example code to help you get started.</ThemedText>
    //   <Collapsible title="File-based routing">
    //     <ThemedText>
    //       This app has two screens:{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
    //     </ThemedText>
    //     <ThemedText>
    //       The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
    //       sets up the tab navigator.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/router/introduction">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Android, iOS, and web support">
    //     <ThemedText>
    //       You can open this project on Android, iOS, and the web. To open the web version, press{' '}
    //       <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
    //     </ThemedText>
    //   </Collapsible>
    //   <Collapsible title="Images">
    //     <ThemedText>
    //       For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
    //       different screen densities
    //     </ThemedText>
    //     <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
    //     <ExternalLink href="https://reactnative.dev/docs/images">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Custom fonts">
    //     <ThemedText>
    //       Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
    //       <ThemedText style={{ fontFamily: 'SpaceMono' }}>
    //         custom fonts such as this one.
    //       </ThemedText>
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Light and dark mode components">
    //     <ThemedText>
    //       This template has light and dark mode support. The{' '}
    //       <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
    //       what the user's current color scheme is, and so you can adjust UI colors accordingly.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Animations">
    //     <ThemedText>
    //       This template includes an example of an animated component. The{' '}
    //       <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
    //       the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
    //       library to create a waving hand animation.
    //     </ThemedText>
    //     {Platform.select({
    //       ios: (
    //         <ThemedText>
    //           The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
    //           component provides a parallax effect for the header image.
    //         </ThemedText>
    //       ),
    //     })}
    //   </Collapsible>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  bgText: {
    padding: 4,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "94%",
  },
  textH1: {
    color: "#fb923c",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  textH2: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraphTitle: {
    color: "white",
    fontSize: 32,
    marginTop: 12,
  },
  paragraphText: {
    color: "white",
    fontSize: 20,
    paddingLeft: 12,
  },
  link: {
    color: "#7ed4fc",
    textDecorationLine: "underline",
    fontSize: 20,
    position: "absolute",
    bottom: 24,
    width: "100%",
    textAlign: "center",
  },
});
