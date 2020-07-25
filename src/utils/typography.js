import Typography from "typography"
import theme from "typography-theme-irving"

theme.headerFontFamily = ["merriweather", "serif"]
theme.googleFonts = []
// theme.googleFonts = [
//   { name: "Merriweather", styles: [700] },
//   { name: "Satisfy", styles: [400] },
//   { name: "Courier New", styles: [700] },
// ]
const typography = new Typography(theme)
export const { scale, rhythm, options } = typography
export default typography
