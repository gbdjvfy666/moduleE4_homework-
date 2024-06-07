function logOwnProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  

  const exampleObj = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
  };
  
  logOwnProperties(exampleObj);
