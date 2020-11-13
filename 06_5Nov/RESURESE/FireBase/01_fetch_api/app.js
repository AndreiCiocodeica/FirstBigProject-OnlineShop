// document.getElementById('get').addEventListener('click', getUsers);

// // Get from external API
// function getUsers() {
//   fetch('https://fir-basics-c32e5.firebaseio.com/users1.json')
//     .then(function(res){
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//       console.log(err);
//     });
// }

// document.getElementById('put').addEventListener('click', putUser);

// // Get from external API
// function putUser() {
//   fetch('https://fir-basics-c32e5.firebaseio.com/users/5.json',{
//     method:'PUT',
//     body: JSON.stringify({
//       user:'test_put',
//       avatar_url: 'test_put'
//     })
//   })
//     .then(function(res){
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function(err){
//       console.log(err);
//     });
// }

// document.getElementById('delete').addEventListener('click', delUser);

// // delete from external API
// function delUser() {
//   fetch('https://fir-basics-c32e5.firebaseio.com/users/4.json',{
//     method:'DELETE'
//   })
//     .then(function(res){
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function(err){
//       console.log(err);
//     });
// }

// async await
document.getElementById('get').addEventListener('click', getUsers);

// Get from external API
async function getUsers() {
  const res = await fetch('https://fir-basics-c32e5.firebaseio.com/users1.json');
  const data = await res.json();

  console.log(data);
  let output = '';
  data.forEach(function (user) {
    output += `<li>${user.login}</li>`;
  });
  document.getElementById('output').innerHTML = output;
}

document.getElementById('post').addEventListener('click', postUser);

// Get from external API
async function postUser() {
  const res = await fetch('https://fir-basics-c32e5.firebaseio.com/users.json', {
    method: 'POST',
    body: JSON.stringify({
      user: 'salut andrei3',
      avatar_url: 'salut andrei3'
    })
  });
  console.log("salut");
  const data = await res.json();
  console.log(data);
}

document.getElementById('put').addEventListener('click', putUser);

// Get from external API
async function putUser() {
  const res = await fetch('https://fir-basics-c32e5.firebaseio.com/users/6.json', {
    method: 'PUT',
    body: JSON.stringify({
      user: 'salut romania2',
      avatar_url: 'salut romania2'
    })
  });
  console.log("salut");
  const data = await res.json();
  console.log(data);
}

document.getElementById('delete').addEventListener('click', delUser);

// delete from external API
function delUser() {
  fetch('https://fir-basics-c32e5.firebaseio.com/users/7.json', {
    method: 'DELETE'
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}