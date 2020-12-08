x = input.light_level()
while True:
    print("Light Level:" + input.light_level())
    if x > 1:
        light.set_all(light.rgb(255,0,0))
    else:
        light.clear()