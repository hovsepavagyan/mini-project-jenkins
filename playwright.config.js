// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: true,
    use: {
        headless: true,
        baseURL: 'http://127.0.0.1:3000'
    },
    reporter: [
        ['list'],
        ['junit', { outputFile: 'test-results/results.xml' }],
        ['html', { open: 'never' }]
    ],
    webServer: {
        command: 'npx http-server -p 3000 -c-1',
        port: 3000,
        reuseExistingServer: false,     // в CI всегда поднимаем свежий сервер
        timeout: 60 * 1000
    }
});