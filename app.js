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
      console.log(user.name + "'s email is " + user.email);
    });
  });

//   2.4
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name + " lives in " + user.address.city);
    });
  });

//   2.5
let countCompleted = 0;
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    todos.forEach((todo) => {
      if (todo.completed) {
        countCompleted++;
      }
    });
    console.log(countCompleted);
  });

//   2.6
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    todos.forEach((todo) => {
      if (todo.completed) {
        console.log("Title is " + todo.title + " with id: " + todo.id);
      }
    });
  });

//   2.7
let incompleteUserIds = [];
// Store Ids of incomplete Todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    todos.forEach((todo) => {
      if (!todo.completed) {
        incompleteUserIds.push(todo.userId);
      }
    });

    // loop through the array we made and if the id is an id of the user that were looping through, print the ID and user name
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        incompleteUserIds.forEach((incompleteUserId) => {
          users.forEach((user) => {
            if (user.id === incompleteUserId) {
              console.log(
                `Todo ID: ${incompleteUserId} and User Name: ${user.name}`
              );
            }
          });
        });
      });
  });

//   2.8
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    let userIdforAlbum;
    albums.forEach((album) => {
      if (album.title == "quidem molestiae enim") {
        userIdforAlbum = album.userId;
      }
    });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          if (user.id == userIdforAlbum) {
            console.log(`${user.name} owns the album quidem molestiae enim`);
          }
        });
      });
  });
