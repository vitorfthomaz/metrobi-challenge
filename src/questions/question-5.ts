const SAFE_EGG = 'the egg is safe'
const BROKE_EGG = 'the egg broke'

const throwEgg = (building: string[], floor: number) => {
  return building[floor]
}

export const findFloor = (floors = 100) => {
  const targetFloor = Math.random() * (floors - 1) + 1
  const intervals = 14
  let eggs = 2
  let atempts = 0

  const building = [...Array(floors)].map((_, index) => {
    if (index < targetFloor) return SAFE_EGG
    return BROKE_EGG
  })

  while (eggs > 0) {
    for (let j = 1; j < 7; j++) {
      const currentFloor = j * intervals - j + 1
      const floorStartInterval = (j - 1) * intervals - (j - 1) + 1

      const result = throwEgg(building, currentFloor)
      atempts++
      if (result === SAFE_EGG) continue
      eggs--

      for (let i = floorStartInterval; i < currentFloor; i++) {
        const result = throwEgg(building, i)
        atempts++
        if (result === BROKE_EGG) {
          eggs--
          break
        }
      }
    }
  }

  return atempts
}

findFloor()