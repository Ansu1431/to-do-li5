// Array to store tasks
let tasks = [];

const renderTasks = () => {
    const taskList = document.getElementById('tasklist');
    taskList.innerHTML=''

    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        li.textContent=task.name;
        const btn = document.createElement('button');
        btn.innerHTML='<div>delete</div>'
        btn.className='delete-button';
        btn.onclick =()=>deleteTask(index);

        li.appendChild(btn);
        taskList.appendChild(li);
      
    });
}

const addTask = () => {
    const name = document.getElementById('taskInput');
    if(name!==''){
        const task ={
            name:name.value,
            date:new Date()
        }
        tasks.push(task);
        renderTasks();
    }
}
const deleteTask = (index)=>{
    tasks.splice(index,1);
    renderTasks();
}