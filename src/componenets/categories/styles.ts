

import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({
    container: {
        height:52,
        maxHeight: 52, //se deixa isso solto a propria lista vai querer o espaço todo, ai colocamos um limite na altura
        // backgroundColor:"red",
    },
    content: {
        gap: 20,
        paddingHorizontal: 20,
    }
})