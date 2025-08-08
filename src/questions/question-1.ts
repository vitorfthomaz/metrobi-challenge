console.log('\nQuestion 1:')

export const verifyDuplicates = (arr: unknown[]) => {
  const set = new Set()
  const duplicates: unknown[] = []

  arr.forEach((item) => {
    const isDuplicate = set.has(item)

    if (isDuplicate) {
      duplicates.push(item)
      return
    }
    set.add(item)
  })

  console.log({ duplicates })
  return duplicates
}

verifyDuplicates([1, 2, 3, 4, 5, 2, 6, 7, 3, 5])
