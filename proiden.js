function generateRandomId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000);
  return `${timestamp}-${randomNum}`;
}

console.log(generateRandomId()); // Example output: 1632417985043-724
console.log(generateRandomId()); // Example output: 1632417985045-319
console.log(generateRandomId()); // Example output: 1632417985047-891
