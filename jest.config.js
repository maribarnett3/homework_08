module.exports = {
    moduleFileExtensions: [
        "js"
    ],
    testMatch: [
        "**/test/**/*.test.(js)"
    ],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.{js}", "!**/node_modules/**"]
};