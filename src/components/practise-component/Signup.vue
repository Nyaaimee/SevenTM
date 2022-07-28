<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
      bg-neutral-900
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />

        <h4 class="mx-auto h-12 w-auto text-white">Seven task manager</h4>
      </div>
      <form class="space-y-6 w-100 p-10 m-10 bg-black" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="">
            <h2 class="my-4 text-left text-3xl text-white ">
             Log in to scale
            </h2>
            <div>
          <label for="email" class="block text-left mb-1 text-white">Email</label>
          <input type="text"  placeholder="enter email" class="bg-black border border-white text-sm text-white px-4 py-2 outline-none rounded-md w-full" />
        </div>

        <div class="my-2">
          <label for="email" class="text-left block mb-1 text-white">Password</label>
          <input type="text"  placeholder="Your password" class="bg-black border border-white text-sm text-white px-4 py-2 outline-none rounded-md w-full" />
        </div>

      </div>
            <div class="text-left text-green-500">
              <span class="text-xs">Forgot Password?</span></div>
        </div>
        <button class="mt-4 w-full text-black py-2 rounded-md text-sm tracking-wide bg-white font-bold">Login</button>
        <div>
          <p class="text-sm">_______________OR________________</p>
        </div>
        <button class="mt-4 w-full text-white py-2 rounded-md text-sm tracking-wide 
        flex flex-row items-center justify-around border border-white">
           <img :src="require('../../assets/apple.png')" alt="apple" width="25" height="25"/>
           continue with Apple
           </button>
        <button class="mt-4 w-full text-white py-2 rounded-md text-sm tracking-wide 
        flex flex-row items-center justify-around border border-white">
          <img :src="require('../../assets/go12.png')" alt="apple" width="25" height="25"/>Continue with Google</button>
          <div class="text-xs">
          <p>Scale uses cookies for analytics personalized content and add. By using scale's services you agree
            to this use of cookies.<span class="text-white">Learn more</span>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Sign_up",
  computed: {},
  methods: {
    async signIn() {
      let username = this.username;
      let email = this.email;
      let password = this.password;
      let firstName = this.firstName;
      let lastName = this.lastName;
      console.log(username, email, password, firstName, lastName);
    
    const serverEndpoint = "https://kingscorp.xyz/api/v1/app/appRegister";
    const payload = {
      username:username,
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName
    };
    const response =  await axios.post(serverEndpoint,payload);
    localStorage.setItem("user", JSON.stringify(response.data.data))
    
    this.$router.push('/home')
    
    }
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  },
};
</script>

<style>
.form{
  background: #333;
}
</style>