Preload = ->
  @asset = null
  @ready = false
  return

'use strict'
Preload.prototype =
  preload: ->
    @asset = @add.sprite(@width / 2, @height / 2, 'preloader')
    @asset.anchor.setTo 0.5, 0.5
    @load.onLoadComplete.addOnce @onLoadComplete, this
    @load.setPreloadSprite @asset
    @load.image 'yeoman', 'assets/yeoman-logo.png'
    return
  create: ->
    @asset.cropEnabled = false
    return
  update: ->
    if ! !@ready
      @game.state.start 'menu'
    return
  onLoadComplete: ->
    @ready = true
    return
module.exports = Preload
