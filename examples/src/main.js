export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-textcomplete');

    aurelia.start().then(a => a.setRoot('src/app'));
}