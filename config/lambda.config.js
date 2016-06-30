const { name, description, version } = require('../package.json');

export default {
  role: 'arn:aws:iam::617211123486:role/lambda_basic_execution',
  functionName: name,
  description: `${description} (version ${version})`,
  region: 'us-east-1',
  handler: 'index.handler'
};
