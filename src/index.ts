async function init(): Promise<void> {
  // Explicit return type for init()
  console.log("Starting pipelines ...");

  // Explicitly state the Promise resolves to void
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("writing ...");
      resolve();
    }, 1000);
  });

  console.log("Pipelines completed ...");
}

init();
