'use strict';

const wrappedEval = (expr, api) => ((api) => {
  'use strict';

  try {
    return eval(expr); // or Function
  } catch (e) {
    throw new Error(e);
  }
})(api);

module.exports = wrappedEval;
