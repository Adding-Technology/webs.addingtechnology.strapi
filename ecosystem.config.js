module.exports = {
  apps: [
    {
      name: 'strapi_adding-cms',
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      },
    },
  ],
};