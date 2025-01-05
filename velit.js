/**
 * Generates an array of patches around an observer's position.
 * @param {number} observerX - The x-coordinate of the observer.
 * @param {number} observerY - The y-coordinate of the observer.
 * @param {number} patchSize - The size of each patch.
 * @param {number} numPatches - The number of patches to generate along each axis.
 * @returns {Array} An array of patch objects containing their coordinates.
 */
function generatePatches(observerX, observerY, patchSize, numPatches) {
    const patches = [];
    const halfPatches = Math.floor(numPatches / 2);

    for (let i = -halfPatches; i <= halfPatches; i++) {
        for (let j = -halfPatches; j <= halfPatches; j++) {
            patches.push({
                x: observerX + i * patchSize,
                y: observerY + j * patchSize
            });
        }
    }

    return patches;
}

// Example usage:
const observerX = 100;
const observerY = 100;
const patchSize = 10;
const numPatches = 5;

const patches = generatePatches(observerX, observerY, patchSize, numPatches);
console.log(patches);
