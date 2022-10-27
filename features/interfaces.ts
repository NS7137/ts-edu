const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear:${this.year}\nisBroken:${this.broken}`;
  }
};

// Long Type Annotations
const printVehicle1 = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle1(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// Fixing long annotations with interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle2(oldCivic);

// 实现接口方法的对象或类 都是接口的对象
interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
