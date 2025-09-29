import { useState } from "react";
import Search from "./Search";
import TaskActions from "./TaskAction"
import TaskList from "./TaskList"

function Task() {
  const defaultTask = {
    "id" :  crypto.randomUUID(),
    "title" : "Integration API",
    "description" : "	Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    "tags" : ['Web','Python','API'],
    "priority" : "High",
    "isfev" : false
  };
  const [task , setTask] = useState([defaultTask])
  return (
    <>
      <section class="mb-20" id="tasks">
        <div class="container mx-auto">
          <Search />
          <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions />
            <TaskList task={task}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Task;
