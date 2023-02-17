const rectangle = (width, height) => {
    const area = width * height;
    const perimeter = 2 * (width + height);
    return { area, perimeter };
  };
  
  const square = (side) => {
    const area = side * side;
    const perimeter = 4 * side;
    return { area, perimeter };
  };
  
  module.exports = { rectangle, square };