var Backbone = require('backbone');
var QualityDefinitionModel = require('./QualityDefinitionModel');

module.exports = Backbone.Collection.extend({
  model: QualityDefinitionModel,
  url: window.Sonarr.ApiRoot + '/qualitydefinition'
});
