const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tupple 并不语义化
const carSpecs: [number, number] = [400, 3354];

// object to model a record 更能一目了然
const carStats = {
  horspower: 400,
  weight: 3354
};
