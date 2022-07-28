<template>
  <div class="container w-full">
    <h1>EDit Task</h1>
    <form class="bg-blue-400 rounded p-7 w-4/5 mx-auto flex">
      <div
        class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3"
      >
        <input
          type="text"
          class="w-full border rounded py-3 px-2 mt-5"
          name="name"
          v-model="task.name"
          placeholder="Name of task"
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          v-model="task.description"
          class="w-full border rounded py-3 px-2 mt-5"
          placeholder="Describe your task"
        >
        </textarea>
        <select
          name="priority"
          id=""
          class="w-full border rounded py-3 px-2 mt-5"
          v-model="task.priority"
        >
          <option value="HIGH" selected>HIGH</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
        </select>
      </div>

      <div
        class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3"
      >
        <input
          type="date"
          name="dueDate"
          id=""
          class="w-full border rounded py-3 px-2 mt-5"
          placeholder="Due Date"
          v-model="task.dueDate"
        />
        <select
          name="priority"
          id=""
          class="w-full border rounded py-3 px-2 mt-5"
          v-model="task.category"
        >
          <option value="SCHOOL" selected>SCHOOL</option>
          <option value="HOUSEHOLD">HOUSEHOLD</option>
          <option value="CAREER">CAREER</option>
        </select>
        <input
          type="text"
          class="w-full border rounded py-3 px-2 mt-5"
          name="name"
          placeholder="other info"
        />

        <button
          @click="saveTask()"
          type="button"
          class="
            rounded-full
            w-full
            mt-5
            px-2
            py-3
            outline-none
            bg-green-400
            font-bold
            text-white
            hover:bg-black
          "
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit-task",
  data() {
    return {
      task: {
        id: "",
        name: "",
        description: "",
        dueDate: "",
        priority: "",
        owner: "",
        category: "",
        createdAt: "",
        status: "",
      },
    };
  },
  methods: {
    saveTask() {
      // call validation checker
      let validation = this.validator(this.task);
      if (validation) {
        let tasks = localStorage.getItem("tasks");
        if (tasks) {
          tasks = JSON.parse(tasks);
          tasks = tasks.filter((task) => task.id !== this.task.id);
          tasks.push(this.task);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          alert("Task updated successfully");
        }
      }
    },
    validator(
      task = {
        name: "",
        description: "",
        dueDate: "",
        priority: "",
        category: "",
      }
    ) {
      // check task name
      if (task.name.length < 1) {
        alert("Task name is required");
        return false;
      }
      // check description
      if (task.description.length < 1) {
        alert("Task description is required");
        return false;
      }
      // check priority
      if (task.priority.length < 1) {
        alert("Task priority is required");
        return false;
      }
      // check category
      if (task.category.length < 1) {
        alert("Task category is required");
        return false;
      }
      // check dueDate
      if (task.dueDate.length < 1) {
        alert("Task dueDate is required");
        return false;
      }
      // success
      return true;
    },
  },
  mounted() {
    const id = this.$route.params.taskId;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.task = tasks.find((task) => task.id == id);
  }
};
</script>

<style>
</style>