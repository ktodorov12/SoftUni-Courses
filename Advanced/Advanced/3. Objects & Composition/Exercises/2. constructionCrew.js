function constructionCrew(worker) {
  if (worker.dizziness) {
    worker.levelOfHydrated = 0.1 * worker.weight * worker.levelOfHydrated;
    worker.dizziness = false;
  }
  return worker;
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
