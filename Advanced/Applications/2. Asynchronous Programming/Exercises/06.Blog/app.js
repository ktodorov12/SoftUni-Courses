attachEvents();
function attachEvents() {
  const postUrl = "http://localhost:3030/jsonstore/blog/posts";
  const commentUrl = "http://localhost:3030/jsonstore/blog/comments";
  const loadBtn = document.getElementById("btnLoadPosts");
  const viewPostBtn = document.getElementById("btnViewPost");

  loadBtn.addEventListener("click", () => loadPosts(postUrl, commentUrl));
  viewPostBtn.addEventListener("click", () => viewPostInfo(commentUrl));
}

async function loadPosts(postUrl, commentUrl) {
  const response = await fetch(postUrl);
  const postData = await response.json();

  const createdOptions = await Promise.all(
    Object.values(postData).map(async (postData) => {
      return createOptions(postData);
    })
  );

  const postRef = document.getElementById("posts");
  postRef.replaceChildren(...createdOptions);
}

async function viewPostInfo(commentUrl) {
  const selectedPostVal = document.getElementById("posts").value;
  const selectedPostUrl = `http://localhost:3030/jsonstore/blog/posts/${selectedPostVal}`;

  const postDetailsResponse = await fetch(selectedPostUrl);
  const postDetailsData = await postDetailsResponse.json();
  const { title, body } = postDetailsData;

  // Fetch comments for the selected post
  const commentsResponse = await fetch(commentUrl);
  const commentsData = await commentsResponse.json();
  const relatedComments = Object.values(commentsData).filter((c) => {
    return c.postId == selectedPostVal;
  });

  const comments = await Promise.all(
    relatedComments.map(async (comment) => {
      return createComment(comment);
    })
  );

  document.getElementById("post-title").textContent = title;
  document.getElementById("post-body").textContent = body;

  const ul = document.getElementById("post-comments");
  ul.replaceChildren(...comments);
}

function createOptions(postData) {
  const option = document.createElement("option");
  option.value = postData.id;
  option.textContent = postData.title;
  option.dataset.body = postData.body;
  return option;
}

function createComment(comment) {
  const li = document.createElement("li");
  li.id = comment.id;
  li.textContent = comment.text;
  return li;
}
