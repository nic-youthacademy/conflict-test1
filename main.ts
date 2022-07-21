tiles.setCurrentTilemap(tilemap`level3`)
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
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
music.baDing.play()
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
