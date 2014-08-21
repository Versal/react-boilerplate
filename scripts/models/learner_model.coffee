_ = require 'lodash'

class LearnerModel
  constructor: (attributes, options) ->
    @attributes = attributes || {}
    @player = options.player

  initPlayerListeners: ->
    @player.on 'learnerStateChanged', @onLearnerStateChanged.bind @

  onLearnerStateChanged: (attributes) ->
    @set attributes

  set: (attributes) ->
    _.extend @attributes, attributes

module.exports = LearnerModel
