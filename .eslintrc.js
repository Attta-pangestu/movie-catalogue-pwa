module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true,
        "jest" : true, 
        "browser" : true,
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "browser": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
