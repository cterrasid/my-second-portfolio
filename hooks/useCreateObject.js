export default function useCreateObject(originalObject, objectToAdd, name) {
  const deepClone = JSON.parse(JSON.stringify(originalObject))

  deepClone.map((el, i) => {
    Object.assign(el, { [name]: objectToAdd[i] })
  })

  return deepClone
}
