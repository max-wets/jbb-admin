module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "74444c803eaac0a9435484a04db42626"),
  },
  url: "/",
});
