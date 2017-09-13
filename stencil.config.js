exports.config = {
  bundles: [
    { components: ['my-modal'] },
    { components: ['my-backdrop'] }
  ],
  // collections: [
  //   { name: '@stencil/router' }
  // ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
