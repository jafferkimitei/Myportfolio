export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.js",
                ".eslintrc.cjs"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2],               // Use 2 spaces for indentation
        "linebreak-style": ["error", "unix"], // Use Unix line endings
        "quotes": ["error", "single"],        // Use single quotes
        "semi": ["error", "always"],          // Require semicolons at the end of statements
        "react/jsx-uses-react": "off",        // Remove unnecessary React warnings
        "react/react-in-jsx-scope": "off",
        'react/prop-types': 'off', 
    }
}
