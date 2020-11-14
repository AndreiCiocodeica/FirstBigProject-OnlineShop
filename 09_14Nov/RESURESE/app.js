document.getElementById('get-text-btn').addEventListener('click', getText);
document.getElementById('get-json-btn').addEventListener('click', getJson);
document.getElementById('get-api-btn').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('data.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}


// Get from external API
function getExternal() {
  fetch('https://test-92a47.firebaseio.com/users.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

//-pt pagina admin din proiect(add sau delete produse din API)
var root = 'https://jsonplaceholder.typicode.com';
fetch(root + '/posts/1', {
  method: 'GET'
}).then(function (response) {
  return response.json();
}).then(function (jsonResp) {
  console.log(JSON.parse(JSON.stringify(jsonResp)));
});

fetch(
  root + '/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
}).then(function (response) {
  return response.json();
}).then(function (jsonResp) {
  console.log(jsonResp);
});

fetch(
  root + '/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  })
}).then(function (response) {
  return response.json();
}).then(function (jsonResp) {
  console.log(jsonResp);
});

fetch(
  root + '/posts/1', {
  method: 'DELETE'
}).then(function (response) {
  return response.json();
}).then(function (jsonResp) {
  console.log(jsonResp);
});