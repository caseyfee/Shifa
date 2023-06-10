const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {

  // signToken: function ({ email, patientname, _id }) {
  //   const payload = { email, patientname, _id };
  //   return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  // },
  signToken: function ({ email, firstName, lastName, _id }) {
    const payload = { email, firstName, lastName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

};
