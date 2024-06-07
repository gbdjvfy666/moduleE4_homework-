class Appliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }
  
    plugIn() {
      this.isPlugged = true;
      console.log(`${this.name} is plugged in.`);
    }
  
    unplug() {
      this.isPlugged = false;
      console.log(`${this.name} is unplugged.`);
    }
  }
  
  class Lamp extends Appliance {
    constructor(name, power, bulbType) {
      super(name, power);
      this.bulbType = bulbType;
    }
  
    replaceBulb(newBulbType) {
      this.bulbType = newBulbType;
      console.log(`The bulb in the ${this.name} has been replaced with a ${this.bulbType} bulb.`);
    }
  }
  
  class Computer extends Appliance {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;
    }
  
    installSoftware(software) {
      console.log(`${software} has been installed on the ${this.name}.`);
    }
  }
  
  const deskLamp = new Lamp('Desk Lamp', 60, 'LED');
  const gamingComputer = new Computer('Gaming Computer', 500, 'Alienware');
  
  deskLamp.plugIn();
  gamingComputer.plugIn();
  
  deskLamp.replaceBulb('Halogen');
  gamingComputer.installSoftware('Steam');
  
  deskLamp.unplug();
  gamingComputer.unplug();
  
  function calculateTotalPower(appliances) {
    return appliances.reduce((total, appliance) => {
      return total + (appliance.isPlugged ? appliance.power : 0);
    }, 0);
  }
  
  const appliances = [deskLamp, gamingComputer];
  const totalPower = calculateTotalPower(appliances);
  
  console.log(`Total power consumption: ${totalPower} watts`);
  