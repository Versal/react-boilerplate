_ = require 'lodash'

class AppModel
  constructor: (attributes, options) ->
    @attributes = attributes || {}
    @player = options.player

  initPlayerListeners: ->
    @player.on 'attributesChanged', @onAttributesChanged.bind @

  onAttributesChanged: (attributes) ->
    @set attributes

  set: (attributes) ->
    _.extend @attributes, attributes

module.exports = AppModel
