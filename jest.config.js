module.exports = {
    testIgnorePatterns: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTest.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|ts)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnviroment: 'jsdom'
}