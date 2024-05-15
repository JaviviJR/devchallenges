module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    typeAcquisition: { "include": [ "jest" ] },
}