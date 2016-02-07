// package metadata file for Meteor.js
var packageName = 'jandres:ionic-sass'; // https://atmospherejs.com/driftyco/ionic
var where = ['client', 'server']; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.2.4';

Package.describe({
  name: packageName,
  version: version,
  summary: 'jandres:ionic-sass, a fork of ionic scss files',
  git: 'https://github.com/JoeyAndres/ionic.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use(['fourseven:scss@3.3.3'], where);
  api.imply(['fourseven:scss']);

  // In case the Meteor project has the `fastclick` package,
  // Load it first and cancel it (to use Ionic's one)
  api.use('urigo:cancel-fastclick@0.0.2', where);

  api.addAssets([
    "fonts/ionicons.eot",
    "fonts/ionicons.svg",
    "fonts/ionicons.ttf",
    "fonts/ionicons.woff"
  ], 'client');

  api.addFiles([
    "scss/_variables.scss",
    "scss/_action-sheet.scss",
    "scss/_animations.scss",
    "scss/_backdrop.scss",
    "scss/_badge.scss",
    "scss/_bar.scss",
    "scss/_button-bar.scss",
    "scss/_button.scss",
    "scss/_checkbox.scss",
    "scss/_form.scss",
    "scss/_grid.scss",
    "scss/_items.scss",
    "scss/_list.scss",
    "scss/_loading.scss",
    "scss/_menu.scss",
    "scss/_mixins.scss",
    "scss/_modal.scss",
    "scss/_platform.scss",
    "scss/_popover.scss",
    "scss/_popup.scss",
    "scss/_progress.scss",
    "scss/_radio.scss",
    "scss/_range.scss",
    "scss/_refresher.scss",
    "scss/_reset.scss",
    "scss/_scaffolding.scss",
    "scss/_select.scss",
    "scss/_slide-box.scss",
    "scss/_slides.scss",
    "scss/_spinner.scss",
    "scss/_tabs.scss",
    "scss/_toggle.scss",
    "scss/_transitions.scss",
    "scss/_type.scss",
    "scss/_util.scss",

    "scss/ionicons/_ionicons-font.scss",
    "scss/ionicons/_ionicons-icons.scss",
    "scss/ionicons/_ionicons-variables.scss",

    "scss/ionicons/ionicons.scss",
    "scss/ionic.scss"
  ], where, {isImport:true});
});
