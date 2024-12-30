// Assuming model.component.resolve is a function that handles scale resolution
const resolve = model.component.resolve;

// Example usage
const xScale = resolve('x'); // Resolve the x channel scale
const yScale = resolve('y'); // Resolve the y channel scale

// Check if both scales can be merged
if (xScale.canMergeWith(yScale)) {
  console.log('The x and y scales can be merged.');
} else {
  console.log('The x and y scales cannot be merged.');
}
