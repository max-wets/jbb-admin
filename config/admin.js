module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "74444c803eaac0a9435484a04db42626"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "5c8d02f52bfd5896f99e89b57b159073"),
  },
});
