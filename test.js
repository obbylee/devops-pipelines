async function init() {
  console.log("Starting tests ...");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Writing ...");
      resolve();
    }, 1000);
  });

  console.log("Tests completed ...");
}

init();
