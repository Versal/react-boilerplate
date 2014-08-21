`/** @jsx React.DOM */`
AppModel = require 'models/app_model'
LearnerModel = require 'models/learner_model'


class Gadget
  constructor: (options) ->
    @appModel = new AppModel {},
      player: options.player

    @learnerModel = new LearnerModel {},
      player: options.player

    @initPlayerInteraction options.player

  initPlayerInteraction: (player) ->
    player.on 'editableChanged', @onEditableChanged.bind @

    player.startListening()
    player.watchBodyHeight()

  onEditableChanged: (data) ->
    editable = data.editable


player = new VersalPlayerApi()
new Gadget
  player: player


