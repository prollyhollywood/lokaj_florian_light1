let x = input.lightLevel()
while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (x > 1) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
