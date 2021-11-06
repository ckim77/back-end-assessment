
const baseURL = `http://localhost:4000/api`

//buttons
const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortune-button");
const oneTaskButton = document.getElementById('one-task-button');
const getTasksButton = document.getElementById("get-tasks-button");
const addTaskButton = document.getElementById('add-task-button');
const taskInput = document.getElementById("task-name");

//input

complimentButton.onclick = function () {
    axios.get(`${baseURL}/compliment`)
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

addTaskButton.addEventListener("click", () => {
  let body = taskInput.value;
  axios
      .post(`${baseURL}/addtasks`, {data:body})
      .then(res => {alert("Task added!")})
      taskInput.value = "";
    });





