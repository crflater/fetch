fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users.length);
    users.forEach((user) => {
      console.log(user.name);
    });
  });
