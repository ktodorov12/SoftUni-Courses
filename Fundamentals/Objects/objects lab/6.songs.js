function songs(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  input.shift();
  let listType = input.pop();

  let list = input.map((song) => {
    let [type, name, time] = song.split("_");
    return new Song(type, name, time);
  });

  if (listType === "all") {
    list.forEach((song) => console.log(song.name));
  } else {
    let fav = list.filter((i) => i.typeList === listType);
    fav.forEach((song) => console.log(song.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favurite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
