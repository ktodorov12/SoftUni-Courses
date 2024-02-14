function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      let result = [`Post: ${this.title}`, `Content: ${this.content}`];

      return result.join("\n");
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = Number(likes);
      this.dislikes = Number(dislikes);
      this.comments = [];
    }

    addComment(newComment) {
      this.comments.push(newComment);
    }

    toString() {
      let result = [super.toString(), `Rating: ${this.likes - this.dislikes}`];

      if (this.comments.length > 0) {
        result.push("Comments:");
        this.comments.forEach((comm) => {
          result.push(` * ${comm}`);
        });
      }

      return result.join("\n");
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = Number(views);
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      let result = [super.toString(), `Views: ${this.views}`];
      return result.join("\n");
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solution();

// let post = new classes.Post("Post", "Content");
// console.log(post.toString());
// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 60, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());

// let scm = new classes.BlogPost("Post", "Content", 20);
// scm.view();
// console.log(scm.view().view().toString());
