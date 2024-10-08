import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Cart() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", marginRight: 15 }}>
        <Ionicons name="cart-outline" size={24} color="black" />
        <View style={styles.container}>
          <Text style={styles.badge}>13</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
    marginTop: -5,
  },
  badge: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
