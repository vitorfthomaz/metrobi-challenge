
const waitFor = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time * 1000)).catch((err) => console.error(err))
}

export const printer = (arr: unknown[]) => {
  console.log('\nQuestion 2')
  arr.forEach(async (item, index) => {
    await waitFor(2 ** index)
    const now = new Date()
    console.log(`${now.toLocaleString()} -> ${item}`)
  })
}

printer(['a', 'b', 'c', 'd', 'e'])
