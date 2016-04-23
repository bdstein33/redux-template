import endpointLoader from '../../util/endpointLoader';

/**
 * Wraps mocha it() function inside of endpointLoader
 * @param  {String}  testName
 * @param  {Function} testFunction
 */
export default (testName, testFunction) => {
  it(testName, () => {
    return endpointLoader(context => {
      return testFunction(context)
        .then(() => {
          context.transaction.rollback();
        });
    });
  });
};
