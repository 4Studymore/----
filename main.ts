input.onPinPressed(TouchPin.P0, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Target)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.changeTempoBy(20)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
basic.showString("welcome ")
