import { ThemeColors } from "./theme.types";

const text = { dark: "hsl(0, 0%, 98%)", light: "hsl(0, 0%, 10%)" };
const material000 = { dark: "hsl(0, 0%, 05%)", light: "hsl(0, 0%, 85%)" };
const material010 = { dark: "hsl(0, 0%, 12%)", light: "hsl(0, 0%, 90%)" };
const material050 = { dark: "hsl(0, 0%, 17%)", light: "hsl(0, 0%, 95%)" };
const material100 = { dark: "hsl(0, 0%, 21%)", light: "hsl(0, 0%, 98%)" };

export const colors: ThemeColors = {
  material000,
  material010,
  material050,
  material100,
  text,
};
