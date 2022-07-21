controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
})
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . 2 2 2 . . . 2 2 . 2 2 . 
    . . 2 2 . . . . . . . 2 . 2 . . 
    . 2 2 . 2 2 2 2 2 . . . 2 2 . . 
    . 2 2 2 . . . . . 2 2 2 2 . . . 
    . 2 . . . . . . . . . 2 2 2 . . 
    . 2 2 . . . . . . . 2 2 . 2 . . 
    . 2 2 2 2 2 2 2 2 2 . . . . 2 . 
    2 . . . . . . . . . . . . . 2 . 
    2 . . . . . . . . . . . . . 2 . 
    . 2 . . . . . . . . . . . 2 2 . 
    . . 2 2 2 2 . . . . . 2 2 2 2 . 
    . . . . . . 2 2 2 2 2 . . 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
