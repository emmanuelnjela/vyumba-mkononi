/**
 * Change the images at a given position
 * @param {array} images 
 * @param {string} pos 
 * @returns 
 */
export function imageChanger(images, pos) {
  return (_, index) => {
    let nextImage = images[index + 1];
    let prevImage = index > 0 ? images[index - 1] : images[images.length - 1];
    if (!nextImage) nextImage = images[0];
    if (nextImage === images.length) nextImage = images[0];
    if (pos === "right") {
      return nextImage;
    }
    return prevImage;
  };
}
