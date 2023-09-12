function gramophone(band, album, song) {
  let duration = (album.length * band.length) * song.length / 2;
  let spin = Math.ceil(duration / 2.5)
  console.log(`The plate was rotated ${spin} times.`);

}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
