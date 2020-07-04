module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
};
