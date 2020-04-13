module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [],
    plugins: ["prettier", "@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    rules: {
        "prettier/prettier": "error",
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                prefix: ["I"]
            }
        ]
    }
};
