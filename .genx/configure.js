const { configDefaults } = require('@genesislcap/foundation-testing/e2e');
console.log('seed dependency test', configDefaults);

/**
 * Signature is `async (data: inquirer.Answers, utils: SeedConfigurationUtils)`
 */
module.exports = async (data, utils) => {
  data.appNameUC = data.appName.toUpperCase();
  // populate additional data fields
};
