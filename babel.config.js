module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ["module:react-native-dotenv", {
            "moduleName": "@env",
            "path": ".env",
            "blacklist": null,
            "whitelist": null,
            "safe": false,
            "allowUndefined": true
        }],
        [ "module-resolver", { "root": ["./src/"] } ]
    ],
    env: {
        "production": {
            "plugins": ["transform-remove-console"]
        }
    }
};
