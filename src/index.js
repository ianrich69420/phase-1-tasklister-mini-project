document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo(e.target.new_task_description.value);
    e.target.reset();
  });

  function addToDo (task) {
    let p = document.createElement("p")
    p.textContent = `${task}`
    document.querySelector("#tasks").appendChild(p)
  }
});