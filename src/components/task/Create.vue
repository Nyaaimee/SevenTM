<template>
   <div class="bg-neutral-900 max-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <form class="bg-black space-y-6 w-100 p-10 m-10">
          <div><h2 class="text-white text-left text-2xl">Get your free account</h2></div>
           <button class="mt-4 w-full text-white py-2 rounded-md text-sm tracking-wide 
             flex flex-row items-center justify-around border border-white">
             <img :src="require('../../assets/apple.png')" alt="apple" width="25" height="25"/>
             continue with Apple
           </button>
           <button class="mt-4 w-full text-white py-2 rounded-md text-sm tracking-wide 
              flex flex-row items-center justify-around border border-white">
              <img :src="require('../../assets/go12.png')" alt="apple" width="25" height="25"/>Continue with Google
            </button>
           <p class="text-sm">_______________OR________________</p>
           <p class="text-white text-sm text-left">Work Email <span class="text-green-500">*</span></p>
          <div>
             <input class="border border-white bg-black py-1 w-full rounded-md" type="text" placeholder="">
          </div>
          <div>
              <button class="font-bold bg-white text-black py-1 text-center w-full rounded-md">Continue with Email</button>
          </div>
          <div>
             <p class="text-xs">Already have an account.<span class="text-green-500">Login</span></p>
          </div>
        </form> 
    </div>   
</template>


<script>
export default {
    name: "create-form",
    
};
</script>