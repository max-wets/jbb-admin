const path = require('path');

module.exports = ({ env }) => ({
  connection: {    
      client: env('DATABASE_CLIENT', 'postgres'),
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'jbb'),
        user: env('DATABASE_USERNAME', 'jbbeauty'),
        password: env('DATABASE_PASSWORD', 'jbbeauty'),
        },
        debug: false,
    },
});
