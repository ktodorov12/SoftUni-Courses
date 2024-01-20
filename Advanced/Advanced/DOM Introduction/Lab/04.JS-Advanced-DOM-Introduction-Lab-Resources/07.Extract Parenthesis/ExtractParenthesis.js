function extract(content) {
  let target = document.getElementById(content).textContent;
  let pattern = /\(([\w ]+)\)/gm;
  let res = [];

  let matched = pattern.exec(target);
  while (matched) {
    res.push(matched[1]);

    matched = pattern.exec(target);
  }

  return res.join('; ');
}
