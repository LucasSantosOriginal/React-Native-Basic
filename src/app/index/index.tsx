import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Link } from "@/componenets/link";
import { Categories } from "@/componenets/categories";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.2}>
          <MaterialIcons name="add" size={30} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />
      <Link
        name="Shoes"
        url="https://www.rocketseat.com.br/"
        onDetails={() => console.log("Click!")}
      />
    </View>
  );
}
