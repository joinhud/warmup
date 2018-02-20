module.exports = function warmup(temperature) {
  var coefficient = 1.8;
  var fahrenheitZero = 32;
  var result = null;

  if (!isNaN(temperature)) {
    result = temperature * coefficient + fahrenheitZero;
  }

  return result;
};
