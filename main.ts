while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() >= 8) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() <= 5) {
        light.setAll(light.rgb(255, 165, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
