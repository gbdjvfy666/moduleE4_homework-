function hasOwnProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
  }
  const exampleObj = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
  };
  
  console.log(hasOwnProperty(exampleObj, 'age')); 
  console.log(hasOwnProperty(exampleObj, 'country')); 
  