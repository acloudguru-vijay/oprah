'use strict';
const { populateConfig } = require('./lib/populate-config');
const { populateSecret } = require('./lib/populate-secret');
const { readCfOutputs } = require('./lib/read-cf-outputs');
const { runServerless } = require('./lib/run-serverless');

module.exports = {
  populateConfig,
  populateSecret,
  readCfOutputs,
  runServerless
};