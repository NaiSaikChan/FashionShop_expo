import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import { useScrollToTop } from "@react-navigation/native";

import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import Category from "@/components/shop/Category";
import Product from "@/components/shop/Product";
import { categories, products } from "@/data";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  const [select, setSelect] = useState("Men");
  const [data, setData] = useState(products);
  const scrollRef = useRef<ScrollView>(null);
  useScrollToTop(scrollRef);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const onSelectHandler = (name : string) => {
    setSelect(name);
  };

  const onPressToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const goToDetail = (id: number) => {
    router.navigate('/detail');
  };

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <SafeAreaView style={{ minHeight: height, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <StatusBar style="dark"/>
        <Pressable onPress = {onPressToTop}>
          <Image
            style={styles.image}
            source={require("@/assets/images/shop/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>

        <Pressable onPress={() => router.navigate('/cart')}>
          <Cart />
        </Pressable>
      </View>
      <ScrollView>
      <Image
        style={styles.banner}
        source={require("@/assets/images/shop/banner6.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View style={{ marginTop: 20 }}>
        <Title title="Shop By Category" action="See All" />
        <View style={styles.flashStyle}>
          <FlashList
            data={categories}
            extraData={select}
            horizontal
            renderItem={({ item }) => <Category select={select} {...item} onSelect={onSelectHandler}/>}
            estimatedItemSize={80}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Title title="Recommended for You" action="See All" />
        <View style={styles.flashStyle}>
          <FlashList
            data={data[select as keyof typeof data]}
            // extraData={select}
            horizontal
            renderItem={({ item }) => <Product {...item} onCall={goToDetail}/>}
            estimatedItemSize={80}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Title title="Popular Lists for you" action="See All" />
        <View style={styles.flashStyle}>
          <FlashList
            data={data[select as keyof typeof data]}
            // extraData={select}
            horizontal
            renderItem={({ item }) => <Product {...item} onCall={goToDetail}/>}
            estimatedItemSize={80}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 25,
    marginLeft: 15,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
  flashStyle: {
    marginTop: 20,
    width: Dimensions.get("screen").width,
    marginHorizontal: 10,
  },
});
