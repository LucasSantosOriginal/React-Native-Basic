import{StyleSheet} from "react-native"
import {colors} from "@/styles/colors" // @/styles foi configurado em tsconfigo no codigo paths



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:62,
    },
  
    title: {
      color: colors.green[900],
      fontSize: 22,
    },

    header: {
      paddingHorizontal:24,
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginBottom:32,
    },
    logo: {
      height:32,
      width:38,

    },

  })