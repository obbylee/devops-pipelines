async function init() {
  console.log("Starting pipelines ...");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("writing ...");
      resolve();
    }, 1000);
  });

  console.log("Pipelines completed ...");
}

init();
