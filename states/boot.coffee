Boot = ->

'use strict'
Boot.prototype =
  preload: ->
    @load.image 'preloader', 'assets/preloader.gif'
    return
  create: ->
    @game.input.maxPointers = 1
    @game.state.start 'preload'
    return
module.exports = Boot
