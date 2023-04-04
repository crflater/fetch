// 1.1
fetch("https://api.github.com/users/crflater")
  .then((response) => response.json())
  .then((crflater) => {
    console.log(crflater.public_repos);
  });

// 1.2
fetch("https://api.github.com/users/crflater")
  .then((response) => response.json())
  .then((crflater) => {
    console.log(crflater.followers);
  });

// 1.3
fetch("https://api.github.com/users/crflater/followers")
  .then((response) => response.json())
  .then((crflater) => {
    crflater.forEach((follower) => {
      console.log(follower.id);
    });
  });

//   2.1
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((comments) => {
    console.log(comments.length);
  });

//   2.2
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos.length);
  });

//   2.3
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name + ", " + user.email);
    });
  });
