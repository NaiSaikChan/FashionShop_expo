import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

type ProductProps = {
  id: number;
  brand: String;
  title: String;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  favourite: boolean;
};

export default function Product(product: ProductProps) {
  return (
    <View style = {styles.container}>
      <Pressable>
        <ImageBackground
          source={product.image}
          style={styles.imageView}
          imageStyle={styles.imageStyle}
        >
          <Pressable>
            <View style = {styles.heartContainer}>
              <Ionicons name="heart-outline" size={18} color="#E66F2D" />
            </View>
          </Pressable>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 17,
  },
  imageView: {
    width: 200,
    height: 250,
    resizeMode: "cover",
	alignItems: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5,
  },
  heartContainer: {
    backgroundColor: "#00000015",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginRight: 12,
  },
});
