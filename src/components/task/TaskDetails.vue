<template>
   <div class="container w-full">
    <h1>Task Details</h1>
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
          readonly
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          readonly
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
          readonly
        />
        <select
          name="priority"
          id=""
          class="w-full border rounded py-3 px-2 mt-5"
          v-model="task.category"
        >
          <option value="SCHOOL">SCHOOL</option>
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
          @click="this.$router.push('/home')"
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
          Go back
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
name:"task-details",
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
  mounted() {
    const id = this.$route.params.id;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.task = tasks.find((task) => task.id == id);
  }
}
</script>

<style>
</style>