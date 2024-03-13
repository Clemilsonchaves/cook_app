import { theme } from "@/theme"
import { StyleSheet } from "react-native" 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12
  },

  tittle: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    lineHeight: 44,
    marginTop: 42,
  }

})