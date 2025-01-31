// (C) 2022 GoodData Corporation
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["react-hooks", "prettier"],
    extends: ["plugin:react/recommended", "plugin:import/errors", "plugin:import/typescript", "plugin:@typescript-eslint/recommended"],
    settings: {
        react: {
            version: "detect",
        },
    },
    parserOptions: { tsconfigRootDir: __dirname },
    rules: {
        "react/prop-types": "off",
        "@typescript-eslint/no-non-null-assertion": 0,
    },
};
