module.exports = {
    inputDir: "./public/assets/images/icons/",
    outputDir: "./public/assets/fonts",
    fontTypes: ["ttf", "woff", "woff2"],
    assetTypes: ["ts", "json", "scss"],
    fontsUrl: "/assets/fonts",
    formatOptions: {
        svg: {
            metadata: {
                Company: "Griffin Web Studio Limited",
            },
        },
        json: {
            indent: 2,
        },
        ts: {
            types: ["enum", "constant", "literalId", "literalKey"],
            enumName: "gwsIconsEnum",
            constantName: "gwsIcons",
            literalIdName: "gwsIconID",
            literalKeyName: "gwsIconKey",
        },
    },
    pathOptions: {
        ts: "./src/types/icon-types.ts",
        json: "./public/assets/fonts/icon.json",
        scss: "./src/styles/sass/base/_icons.scss",
    },
    fontHeight: 600,
    descent: 40,
    normalize: true,
    tag: "",
    prefix: "icon",
    templates: {
        sass: "./src/embed-assets/templates-icons/sass.hbs",
        css: "./src/embed-assets/templates-icons/css.hbs",
        html: "./src/embed-assets/templates-icons/html.hbs",
        scss: "./src/embed-assets/templates-icons/scss.hbs",
    },
};
