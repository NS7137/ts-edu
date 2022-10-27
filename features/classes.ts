class Vehicle {
  // color: string;

  // 可以直接在形参中定义fields
  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

// const vehicle = new Vehicle();
// vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(car.color);
  }
}

const car = new Car(4, 'orenge');
car.startDrivingProcess();
