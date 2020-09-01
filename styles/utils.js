// Pixels to rem
export const pxToRem = ({ px, rootSize = 16 }) => {
  const rootFontSize = rootSize
  const rem = px / rootFontSize

  return `${rem}rem`
}
