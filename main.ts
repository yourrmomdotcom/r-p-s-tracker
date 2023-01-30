function update_score () {
    OLED.clear()
    OLED.writeStringNewLine("PLAYER A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER B:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Tie:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + PA)
    OLED.newLine()
}
let PA = 0
OLED.init(128, 64)
PA = 0
let PB = 0
let Ties = 0
let Rounds = 0
OLED.writeStringNewLine("lets play a game!")
basic.pause(2000)
update_score()
