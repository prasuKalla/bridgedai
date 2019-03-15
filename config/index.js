var path = require('path');
var env = process.env.NODE_ENV || 'development';

let config = {
    development: {
        port: 8000,
        env: env
    },

    production: {
        port: 8000,
        env: env
    }
};

module.exports = config[env];
