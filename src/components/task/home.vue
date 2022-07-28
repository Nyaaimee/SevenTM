<template>
  <h1 class="font-bold text-center text-lg p-4">Task Home</h1>

  <!-- ADD TASK BUTTON AND SEARCH TASK INPUT -->
  <div class="container addTask-search flex justify-center">
    <button
      @click="this.$router.push('/add-task')"
      class="bg-green-400 rounded py-2 px-8 mr-10 text-white font-bold"
    >
      Add Task
    </button>
    <input
      class="border rounded py-2 px-8"
      type="search"
      placeholder="Search a task"
    />
  </div>

  <!-- TASK LIST -->
  <h1 class="font-bold text-center text-lg p-4 mt-5">Task List</h1>
  <div class="container">
    <div
      class="
        container
        list-header
        flex
        justify-between
        mx-auto
        border
        bg-gray-400
        text-black
      "
    >
      <span class="font-bold pl-8 py-4">Name</span>
      <span class="font-bold pr-8 py-4">Actions</span>
    </div>

    <div class="container tasks-actions">

      <!-- LIST OF TASKS -->
      <div v-for="task of tasks" :key="task?.id" class="container task-item mt-4 flex justify-between">
        <span class="w-2/3 relative -left-40">{{task?.name}}</span>
        <div class="container actions justify-self-end w-1/3">
          <span
            class="
              rounded
              bg-green-400
              font-bold
              text-white
              p-2
              mx-1
              cursor-pointer
              capitalize
              hover:bg-blue-600
            "
            @click="this.$router.push('/edit-task/' + task?.id)"
            >
            edit
            </span
          >
          <span
            class="
              rounded
              bg-yellow-400
              font-bold
              text-white
              p-2
              mx-1
              cursor-pointer
              capitalize
            "
            @click="this.$router.push('/task-details/'+ task?.id)"
            >view</span
          >
          <span
            class="
              rounded
              bg-red-400
              font-bold
              text-white
              p-2
              mx-1
              cursor-pointer
              capitalize
            "
            @click="deleteTask(task?.id)"
            >delete</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tasks-home",
  data(){
    return {
      tasks:[]
    }
  },
  methods: {
    deleteTask(id) {
      let confirm = window.confirm("Are you sure you want to delete this task?")
     if(confirm){
       let tasks = localStorage.getItem("tasks");
          tasks = JSON.parse(tasks);
          tasks = tasks.filter((task) => task.id !== id);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          alert("Task deleted successfully");
          window.location.reload();
     }else{
       alert("Task not deleted");
     }
    },
     getTasks(){
      let tasks = localStorage.getItem("tasks");
      if(tasks){
        this.tasks = JSON.parse(tasks);
        if(this.tasks.length < 1){
          alert("No tasks available. Please start by adding a new task");
        }
      }else{
        alert("No tasks available. Please start by adding a new task");
      }
    }
  },
  mounted(){
    this.getTasks();
  }
};
</script>
<style>
.capitalize {
  text-transform: capitalize;
}
</style>
