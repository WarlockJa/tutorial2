import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import {
  Text,
  Appearance,
  StyleSheet,
  ColorSchemeName,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList,
  View,
  Image,
} from "react-native";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  // reading user preferred theme
  const colorScheme = Appearance.getColorScheme();
  // getting theme colors
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  // generating styles for the theme
  const styles = createStyles(theme, colorScheme);

  // selecting container type based on the platform application runs on
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separatorComp = <View style={styles.separator} />;
  // const headerComp = <Text>Top of Menu</Text>;
  const footerComp = <Text style={styles.footerComp}>End of Menu</Text>;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => separatorComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        // ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No Items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image
              style={styles.menuImage}
              source={MENU_IMAGES.find((img) => img.id === item.imageId)?.image}
            />
          </View>
        )}
      ></FlatList>
    </Container>
  );
}

function createStyles(
  theme: typeof Colors.light,
  colorScheme: ColorSchemeName
) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    footerComp: {
      textAlign: "center",
      color: theme.text,
    },
    row: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    },
  });
}
