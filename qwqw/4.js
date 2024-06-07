function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  Appliance.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(`${this.name} is plugged in.`);
  };
  
  Appliance.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(`${this.name} is unplugged.`);
  };
  
  function Lamp(name, power, bulbType) {
    Appliance.call(this, name, power);
    this.bulbType = bulbType;
  }
  
  Lamp.prototype = Object.create(Appliance.prototype);
  Lamp.prototype.constructor = Lamp;
  
  Lamp.prototype.replaceBulb = function(newBulbType) {
    this.bulbType = newBulbType;
    console.log(`The bulb in the ${this.name} has been replaced with a ${this.bulbType} bulb.`);
  };
  
  function Computer(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
  }
  
  Computer.prototype = Object.create(Appliance.prototype);
  Computer.prototype.constructor = Computer;
  
  Computer.prototype.installSoftware = function(software) {
    console.log(`${software} has been installed on the ${this.name}.`);
  };
  
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
  