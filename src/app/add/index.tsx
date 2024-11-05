import { useState } from "react";

import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Categories } from "@/componenets/categories";
import { Input } from "@/componenets/input";
import { Button } from "@/componenets/button";
import { linkStorage } from "@/storage/link-storage";
// IMPORTS

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Category", "Select the Category");
      }
      if (!name.trim()) {
        return Alert.alert("Name", "add a name");
      }
      if (!url.trim()) {
        return Alert.alert("email", "add your email!");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(), //log data, hora em forma de string ao apertar em "add"
        name,
        url,
        category,
      });

      // const data = await linkStorage.get();
      // console.log(data);

      //console.log({ category, name, url }); // agora utilizado no await acima
    } catch (error) {
      Alert.alert("Error", "could not save");
      console.log(error);
    }
  }

  // function textChange(value: string) {
  //   setName(value);
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>New</Text>
      </View>

      <Text style={styles.label}>Select one category</Text>
      <Categories onChange={setCategory} selected={category} />
      <View style={styles.form}>
        <Input placeholder="Name" onChangeText={setName} autoCorrect={true} />
        <Input
          placeholder="Email"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      {/* <Text style={styles.title}>{name}</Text> */}
    </View>
  );
}
