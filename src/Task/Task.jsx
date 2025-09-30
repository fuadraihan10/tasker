import { useState } from "react";
import Search from "./Search";
import TaskActions from "./TaskAction"
import TaskList from "./TaskList"
import AddTaskMordal from "./addTaskMordal"

function Task() {
  const defaultTask = {
    "id" :  crypto.randomUUID(),
    "title" : "Integration API",
    "description" : "	Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    "tags" : ['Web','Python','API'],
    "priority" : "High",
    "isFev" : true
  };
  const [tasks , setTasks] = useState([defaultTask])
  const [showAddMordal , setshowAddMordal] = useState(false)
  const [taskToUpdate , setTaskToUpdate] = useState(null)

  function handleAddTask(task){
    setTasks([...tasks , task])
    setshowAddMordal(false)
  }

  function handleEditTask(task){
    let editdTask = [...tasks]
      tasks.forEach((previusTask, index)=>{
        if(task.id === previusTask.id){
          editdTask[index] = task
        }})

    setshowAddMordal(false);
    setTasks(editdTask)
    setTaskToUpdate(null)
  }

  function onDelete(task){
    let editdTask = []
      tasks.forEach((previusTask)=>{
        if(task.id === previusTask.id){
          console.log()
        }else{
          editdTask.push(previusTask)
        }})
        
    setTasks(editdTask)
  }

  function onClose(){
    setshowAddMordal(false)
    setTaskToUpdate(null)
  }

  function onFev(taskId){
    const index = tasks.findIndex(task => task.id === taskId)
    const newTasks =[...tasks]
    newTasks[index].isFev = !newTasks[index].isFev
    setTasks(newTasks)
    console.log(tasks[index].isFev)
  }

 
  return (
    <>
      <section class="mb-20" id="tasks">
      {showAddMordal && <AddTaskMordal onClose={onClose} onSave={handleAddTask} onEdit={handleEditTask} taskToUpdate={taskToUpdate}/>}
        <div class="container mx-auto">
          <Search />
          <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions handleAllDeleteTask={() =>{setTasks([])}} handleAddTask={() => {setshowAddMordal(true)}}/>
            <TaskList tasks={tasks} onFev={onFev} onDelete={onDelete} onEdit={(task) => {setTaskToUpdate(task);setshowAddMordal(true)}}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Task;
