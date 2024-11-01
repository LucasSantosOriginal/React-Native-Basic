import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Category } from "@/componenets/catergory";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.2}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category
        name={categories[0].name} //dentro de categories está pegando la de categories.ts
        icon={categories[0].icon}
        isSelected={true}
      />
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Video" icon="movie" isSelected={false} />
    </View>
  );
}

// cntrl + space pra procurar itens em icon dentro de Category

//index/index.tsx

// Category name="Projetos" icon="code" />
//       <Category name="Site" icon="language" />
//       <Category name="Video" icon="movie" />

// +
//category/index.tsx

// export function Category(props) {
//   return (
//     <Pressable style={styles.container}>
//       <MaterialIcons name="code" size={16} color={colors.gray[400]} />
//       <Text style={styles.name}>{props.name}</Text>
//     </Pressable>
//   );
// }
