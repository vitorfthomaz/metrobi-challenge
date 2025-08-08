console.log('\nQuestion 7')

interface Carrot {
  weight: number;
  price: number;
}

export const getMaxValue = (carrotTypes: Carrot[], maxCapacity: number) => {
  let currentCapacity = 0

  const efficientCarrots = carrotTypes
    .map((type) => ({ ...type, pricePerWeight: (type.price / type.weight).toFixed() }))
    .sort((a, b) => {
      if (a.pricePerWeight < b.pricePerWeight) return 1
      if (a.pricePerWeight > b.pricePerWeight) return -1
      return 0
    })

  const valuableCarrots = efficientCarrots.map((carrot) => {
    if (currentCapacity === maxCapacity) return {
      ...carrot, quantity: 0
    }
    const freeCapacity = maxCapacity - currentCapacity
    const quantity = Math.floor(freeCapacity / carrot.weight)
    currentCapacity += quantity * carrot.weight

    return { ...carrot, quantity }
  })

  const bagPrice = valuableCarrots.reduce((acc, carrot) => acc + carrot.price * carrot.quantity, 0)
  console.log('The provided bag price is ' + bagPrice)
  return bagPrice
}

getMaxValue([
  { price: 0, weight: 10 },
  { price: 2, weight: 0.15 },
  { price: 30, weight: 3 }
], 10.15)
