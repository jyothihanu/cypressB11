module.exports = 
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "./",
    "types": ["@shelex/cypress-allure-plugin"],
    "noEmit": true
},
  
  e2e: {

    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      
      // implement node event listeners here
    },
  },
};

const allureWriter = require('@shelex/cypress-allure-plugin/writer');