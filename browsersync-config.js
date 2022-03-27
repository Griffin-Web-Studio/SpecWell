/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 | http://www.browsersync.io/docs/options/
 */

module.exports = {
    ui: {
        port: 3001,
        weinre: {
            port: 8080
        }
    },
    files: ["dist/**"],
    watchOptions: {
      ignore: '.*'
    },
    server: {
      baseDir: "dist"
    },
    proxy: false,
    port: 3000,
    middleware: false,
    serveStatic: [],
    ghostMode: {
        clicks: true,
        scroll: true,
        forms: {
            submit: true,
            inputs: true,
            toggles: true
        }
    },
    logLevel: "info",
    logPrefix: "Browsersync",
    logConnections: false,
    logFileChanges: true,
    logSnippet: true,
    rewriteRules: false,
    open: "local",
    // browser: ["edge"],
    xip: false,
    hostnameSuffix: false,
    reloadOnRestart: true,
    notify: false,
    scrollProportionally: true,
    scrollThrottle: 0,
    scrollRestoreTechnique: "window.name",
    scrollElements: [],
    scrollElementMapping: [],
    reloadDelay: 0,
    reloadDebounce: 0,
    plugins: [],
    injectChanges: true,
    startPath: null,
    minify: true,
    host: null,
    codeSync: true,
    timestamps: true,
    clientEvents: [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    socket: {
        socketIoOptions: {
            log: true
        },
        socketIoClientConfig: {
            reconnectionAttempts: 50
        },
        path: "/browser-sync/socket.io",
        clientPath: "/browser-sync",
        namespace: "/browser-sync",
        clients: {
            heartbeatTimeout: 5000
        }
    },
    tagNames: {
        less: "link",
        scss: "link",
        css: "link",
        jpg: "img",
        jpeg: "img",
        png: "img",
        svg: "img",
        gif: "img",
        js: "script"
    }
};