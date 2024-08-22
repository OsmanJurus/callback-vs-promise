// synchronous- line-by-line / top-to-bottom
/*
console.log(" I ")
console.log(" eat ")
console.log(" ice cream ")
console.log(" with a  ")
console.log(" spoon! ")
*/
// Asynchronous- depends on time/ no cares top-bottom.
/*
console.log(" I ");
console.log(" eat ");
setTimeout(() => {
  console.log(" ice cream ");
}, 4000);
console.log(" with a  ");
console.log(" spoon! ");
*/

// Callbacks: calling a function inside an other function! Also makes connection b/w functions!

/*
function one() {
  console.log("Step 1");
}

function two() {
  console.log("Step 2");
}

two();
one();
*/

/*
function one(call_two) {
  console.log("Step 1 complete. Please call step 2!");
  call_two();
}

function two() {
  console.log("Step 2");
}

one(two);
*/

// Making ice-cream functions(order and production!)

let stocks = {
  fruits: ["strewbary", "graps", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// using callback hell!;
/*
const order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected!`);

    call_production();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("Order received, Starting Production!");

    setTimeout(() => {
      console.log("fruits has been chopped!");

      setTimeout(() => {
        console.log(
          `${stocks.liquid[0]} and ${stocks.liquid[1]} has been added!`
        );
      }, 1000);
      setTimeout(() => {
        console.log("The machine has been started!");

        setTimeout(() => {
          console.log(`${stocks.holder[0]} was selected!`);

          setTimeout(() => {
            console.log(
              `${stocks.toppings[0]} and ${stocks.toppings[1]} has been added as toppings!`
            );

            setTimeout(() => {
              console.log("Serve the ice cream!");
            }, 2000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(2, production);
*/

// using promise

let isShopOpen = true;

/*
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.error("Sorry, our shop is closed!"));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected!`))
  .then(() => {
    return order(0, () => console.log("Production has started!"));
  })

  .then(() => {
    return order(2000, () => console.log("The food has been chopped!"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added!`)
    );
  })
  .then(() => {
    return order(1000, () => {
      console.log("The machine started!");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(` Ice cream was placed on the ${stocks.holder[1]}`);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[1]} was selected as toppings!`);
    });
  })

  .then(() => {
    return order(2000, () => console.log("Serve the ice cream!"));
  })

  .catch(() => {
    console.log("Customer left!");
  })

  .finally(() => {
    console.log("Day ended, Shop is closed!");
  });*/

//   Aync/Await: better way to write promises!

function time(ms) {
    
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Sorry sir, we don't have that right now!"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected!`);

    await time(0);
    console.log("Production started!");

    await time(2000);
    console.log("fruits was chopped!");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("The machine has been started!");

    await time(2000);
    console.log(`${stocks.holder[1]} placed on ice cream`);

    await time(3000);
    console.log(`${stocks.toppings[1]} was selected as toppings!`);

    await time(2000);
    console.log("Serve the ice cream!");
  } catch (e) {
    console.log("Customer Left", e);
  } finally {
    console.log("Day ended, shop closed!");
  }
}

kitchen();

// let toppings_choise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which toppings would you like!"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choise();

//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("Doing the dishes");
// console.log("Cleaning the tables!");
// console.log("Taking others orders");
