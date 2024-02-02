function solution(command) {
  let commands = {
    upvote: () => {
      this.upvotes++;
    },
    downvote: () => {
      this.downvotes++;
    },
    score: () => {
      let totalVotes = this.upvotes + this.downvotes;
      let totalUp = this.upvotes;
      let totalDown = this.downvotes;
      let rating = "";

      if (totalVotes > 50) {
        const greaterVal = Math.ceil(Math.max(totalUp, totalDown) * 0.25);
        totalUp += greaterVal;
        totalDown += greaterVal;
      }

      let balance = this.upvotes - this.downvotes;
      let percentage = (this.upvotes / totalVotes) * 100;

      if (balance < 0) {
        rating = "unpopular";
      } else if (totalVotes < 10) {
        rating = "new";
      } else if (percentage > 66) {
        rating = "hot";
      } else if ((balance >= 0 && this.upvotes > 100) || this.downvotes > 100) {
        rating = "controversial";
      }

      return [totalUp, totalDown, balance, rating];
    },
  };

  return commands[command]();
}

let post = {
  id: "2",
  author: "gosho",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};

solution.call(post, "upvote");
solution.call(post, "downvote");
let score = solution.call(post, "score");
console.log(score);
for (let i = 0; i < 50; i++) {
  solution.call(post, "downvote");
}
score = solution.call(post, "score");
console.log(score);
