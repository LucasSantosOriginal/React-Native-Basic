import { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Categories } from "@/componenets/categories";
import { Input } from "@/componenets/input";
import { Button } from "@/componenets/button";

export default function Add() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    console.log({ name, url });
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
      <Categories />
      <View style={styles.form}>
        <Input placeholder="Name" onChangeText={setName} autoCorrect={true} />
        <Input placeholder="Link" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Add" onPress={handleAdd} />
      </View>
      {/* <Text style={styles.title}>{name}</Text> */}
    </View>
  );
}
