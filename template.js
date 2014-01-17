/*
 * grunt-init-appmaker-component
 *
 */

'use strict';

// Basic template description.
exports.description = 'Create a Mozilla Appmaker component';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('licenses'),
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      "mocha": "~1.14.0",
      "karma-script-launcher": "*",
      "karma-chrome-launcher": "~0.1.0",
      "karma-firefox-launcher": "~0.1.0",
      "karma-html2js-preprocessor": "~0.1.0",
      "karma-jasmine": "~0.1.3",
      "karma-requirejs": "~0.1.0",
      "karma-coffee-preprocessor": "~0.1.0",
      "karma-phantomjs-launcher": "~0.1.0",
      "karma": "~0.10.4",
      "karma-mocha": "~0.1.0",
      "chai": "~1.8.1",
      "karma-ie-launcher": "*",
      "karma-safari-launcher": "*",
      "karma-crbot-reporter": "*",
      "karma-browserstack-launcher": "0.0.4",
      "karma-ios-launcher": "0.0.3",
      "open": "0.0.4",
      "grunt": "~0.4.2",
      "grunt-karma": "~0.6.2",
      "grunt-contrib-connect": "~0.5.0",
      "grunt-open": "~0.2.2",
      "grunt-contrib-watch": "~0.5.3"
      "grunt-contrib-jshint": "~0.6.3",
      "grunt-contrib-csslint": "~0.1.2",
      "grunt-lint-inline": "~0.3.2"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
