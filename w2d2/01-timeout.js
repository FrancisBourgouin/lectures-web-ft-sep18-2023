let name = "Irish Cobbler";

setTimeout(() => {
  console.log(name);
}, 0);

name = "Yukon Gold";

setTimeout(() => {
  console.log(name);
}, 0);

// Will those steps take 2 or 4 seconds?
// Ruby, C, C++, Python
// JS special! (Made for Browser) => (Interactivity, Events)

// Create a variable 'name' (Sync)
// Assign "Irish Cobbler" to variable name (Sync)
// Start a timer (Sync)
//  When timer is finished, console the name (Async)
// Assign "Yukon Gold" to variable name (Sync)
// Start a timer (Sync)
//   When timer is finished, console the name (Async)

// ---------------------------

// Create a variable 'name' (Sync)
// Assign "Irish Cobbler" to variable name (Sync)
// Start a timer (Sync)
// Assign "Yukon Gold" to variable name (Sync)
// Start a timer (Sync)

//  When timer is finished, console the name (Async)
//  When timer is finished, console the name (Async)

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log("🦜: Pock Pock");
  }, 2000 * i);
}
