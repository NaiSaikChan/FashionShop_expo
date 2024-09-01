import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

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
  onCall: (id: number) => void;
};

export default function Product(product: ProductProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => product.onCall(product.id)}>
        <ImageBackground
          source={product.image}
          style={styles.imageView}
          imageStyle={styles.imageStyle}
        >
          <Pressable>
            <View style={styles.heartContainer}>
              <Ionicons name="heart-outline" size={18} color="#E66F2D" />
            </View>
          </Pressable>
        </ImageBackground>
      </Pressable>

      <View style={styles.brandContainer}>
        <Text style={styles.brand}> {product.brand} </Text>
        <Ionicons
          name="star"
          size={12}
          color="orange"
          style={{ paddingTop: 1 }}
        />
        <Text style={styles.star}> {product.star} </Text>
        <Text style={styles.quantity}> ({product.quantity}) </Text>
      </View>
      <Text style={styles.title}>
        {product.title.length > 25
          ? product.title.substring(0, 25) + "..."
          : product.title}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}> ${product.price.toFixed(2)} </Text>
        <Text style={styles.discount}> ${product.discount.toFixed(2)} </Text>
      </View>
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
    alignItems: "flex-end",
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
  brandContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  brand: {
    color: "gray",
    fontWeight: "600",
    marginRight: 7,
  },
  star: {
    marginHorizontal: 2,
    fontSize: 13,
  },
  quantity: {
    color: "gray",
    fontSize: 13,
  },
  title: {
    marginVertical: 7,
    fontSize: 15,
    fontWeight: "500",
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    marginRight: 7,
    color: "#007618",
    fontSize: 15,
    fontWeight: "500",
  },
  discount: {
    color: "gray",
    textDecorationLine: "line-through",
  },
});
