// Async_Await for run washing machine.
function washing() {
    console.log("Washing started...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Washing done!");
      }, 5000);
    });
  }
  function socking() {
    console.log("Socking started...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Socking  done!");
      }, 3000);
    });
  }
  function drying() {
    console.log("Drying started...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Drying done!");
      }, 2000);
    });
  }
  
  async function runWashingMashine() {
    try {
      const result1 = await washing();
      console.log(result1);
      const result2 = await socking();
      console.log(result2);
      const result3 = await drying();
      console.log(result3);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finnaly will run anyway!");
    }
  }
  runWashingMashine();
  