let post = [
  { title: "Post Başlık 1", detail: "Post Detay 1" },
  { title: "Post Başlık 2", detail: "Post Detay 2" },
  { title: "Post Başlık 3", detail: "Post Detay 3" },
];

const listPosts = (posts) => {
  posts.map((post) => {
    console.log(post.title, " ", post.detail);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    post.push(newPost);
    resolve(post);
    reject("Bir hata oluştu.");
  });
  return promise1;
};

let newPost = { title: "Post Başlık 4", detail: "Post Detay 4" };

addPost(newPost);
listPosts(post);
