const baseURL = `http://localhost:4000/api/compliment/`

document.getElementById("complimentButton").onclick = function () {
    axios.get(baseURL)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortune-button").onclick = function () {
    axios.get(`${baseURL}fortune`)
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
  }