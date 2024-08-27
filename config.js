const dotenv = require('dotenv');
const variables = dotenv.config();
if(variables.error){
    throw variables.error;
}
const { parsed: envs} = variables;
module.exports = envs;