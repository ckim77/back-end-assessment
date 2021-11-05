const baseURL = `http://localhost:4000/api/compliment`

//buttons
const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortune-button");
const checkTasksButton = document.getElementById('check-tasks-button');
const oneTaskButton = document.getElementById('one-task-button');
const getTasksButton = document.getElementById("get-tasks-button");
const image = document.getElementById("image");

//input

complimentButton.onclick = function () {
    axios.get(baseURL)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  fortuneButton.onclick = function () {
    axios.get(`${baseURL}/fortune`)
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
  }

getTasksButton.addEventListener('click', () => {
    axios
        .get(`${baseURL}/tasks`)
        .then(res => alert(res.data));
});


oneTaskButton.addEventListener('click', () => {
    axios
        .get(`${baseURL}/onetask`)
        .then(res => alert(res.data));
});


image.addEventListener('mouseover', () => {
    axios
        .get(`${baseURL}/image`)
        .then(res => alert(res.data));
})
