// src/config.js

// This is the correct way to access env variables in React
const config = {
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com',
    timeout: Number(process.env.REACT_APP_API_TIMEOUT) || 5000,
    endpoints: {
      posts: '/posts',
      users: '/users',
      comments: '/comments',
    },
  },
  app: {
    environment: process.env.REACT_APP_ENVIRONMENT || 'development',
    version: process.env.REACT_APP_VERSION || '1.0.0',
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
  },
  features: {
    enableDebug: process.env.REACT_APP_ENABLE_DEBUG === 'true',
    enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  },
};

// Debug helper - only in development
if (process.env.NODE_ENV === 'development') {
  console.log('🔧 App Configuration:', {
    apiUrl: config.api.baseUrl,
    environment: config.app.environment,
    features: config.features,
  });
}

export default config;