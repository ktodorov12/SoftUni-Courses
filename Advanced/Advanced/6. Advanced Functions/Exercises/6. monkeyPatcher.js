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

      if (totalVotes < 10) {
        rating = "new";
      } else if (balance < 0) {
        rating = "unpopular";
      } else if (percentage > 66) {
        rating = "hot";
      } else if (balance >= 0 && totalVotes > 100) {
        rating = "controversial";
      } else {
        rating = "new";
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
  upvotes: 120,
  downvotes: 30,
};

let answer = solution.call(post, "score");
console.log(answer);
