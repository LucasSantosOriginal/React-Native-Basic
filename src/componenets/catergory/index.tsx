import { Text, Pressable, PressableProps } from "react-native"; //pressable nao tem feedback visual

//NO REACT NATIVE TEM A POSSIBILIDADE DE REAPROVEITAR TIPAGENS COMO PressableProps

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

//tipagem com typesccript para o props

type Props = PressableProps & {
  //props é  igual a tudo que um PressableProps tem e as proproriadades abaixo curstomizadas

  name: string; //string = texto
  isSelected: Boolean;
  icon: keyof typeof MaterialIcons.glyphMap; // keyof typeof = extrair a tipagem baseado nas chaves
};

//CATERGORY
export function Category({ name, icon, isSelected, ...rest }: Props) {
  //...rest está pegando todo restante das propriedades de PressableProps
  // o ":" em props é pra dizer que é o tipo Props

  const color = isSelected ? colors.green[300] : colors.gray[400];
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}

// ":" é else em const color = isSelected ? colors.green[300] :
