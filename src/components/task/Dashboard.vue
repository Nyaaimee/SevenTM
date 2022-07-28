<template>
<div class="nav-bar">
  <div class="logo">SevenTM</div>
    <ul class="nav-item">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Contact</a></li>
      <li><a href=""> <span class="bg-orange-600 text-white rounded-full w-8 h-8 align-middle material-symbols-outlined">notifications</span></a></li>
    </ul>
 </div>
 <div class="col2">
   <div class="small-menu">
         <span class="material-symbols-outlined">menu</span>       
     </div>
        <div class="infin">
          <select name="" id="">
            <option value="Infin group s.r.o flex flex-row justify-around">Infin group s.r.o</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
       </div>
      <div class="flex">
        <div class="row1">
          <p class="font-bold">Orders</p>
      </div>
      <div class="flex search-bar">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search">
      </div>
      </div>
      <div class="filter flex">
          <span class="material-symbols-outlined">filter_alt</span>
          <button>Filter</button>
      </div>
      <div class="od flex">
         <span class="material-symbols-outlined">date_range</span>
         <option value="od 1.7 do 14.7">od 1.7 do 14.7</option>
      </div>
      <div class="btn">
          <button>+ Add</button>
      </div>
 </div>
    
     
  <div class="container">
    <div class="sidebar-small">
      <div class="small">
         <span class="material-symbols-outlined">backpack</span>
       Orders
       
     </div>
     <div  class="small">
       <span class="material-symbols-outlined">apartment</span>
        Companies
       
     </div>
     <div  class="small">
       <span class="material-symbols-outlined">group</span>
        Groups
       
     </div>
     <div  class="small">
      <span class="material-symbols-outlined">person</span>
        Users
        
     </div>
     <div  class="small">
      <span class="material-symbols-outlined">adjust</span>
       Credits
        
     </div>
     <div  class="small">
      <span class="material-symbols-outlined">draft</span>
       Documents
        
     </div> 
     </div>
    
     <div class="sidebar-large">
        <table>
          <th>Delivery date</th>
          <th>Date and time</th>
          <th>Price</th>
          <th>Status</th>
        </table>
      </div> 
    </div>     
</template>


<script>
export default {
  name: "dashboard-form",
}
</script>

<style>
.container{
  display: flex;
  flex-direction: row;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.logo{
  font-family: 'Rubik Moonrocks', cursive;
  font-size: 2rem;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
ul:hover{
  color: rgb(48,25,52);
}
h1{
    font-family: 'Rubik Moonrocks', cursive;
}
.nav-bar{
  margin-bottom: 2rem;
}
.nav-bar,
.nav-item{
  display: flex;
  justify-content: space-between;
}
.nav-item li{
  padding: 5px 10px;
}
.col2{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.row1{
  display: flex;
}
.container{
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2rem;
}
.sidebar-small .small{
  width: 100%;
  height: 60px;
  text-align: left;
}
.sidebar-small .small span{
  margin-top: 1rem;
  margin-right: 1rem;
}
.sidebar-large th{
  width: 250px;
  border-bottom: 1px solid rgb(190, 187, 187);
  padding: 10px;
  color: rgb(180, 175, 175);
}
.filter,
.od,
.infin{
  background-color: rgb(174, 180, 174);
  border-radius: 15px;
  /* width: 20px; */
}
.btn{
  width: 80px;
  height: 30px;
  background-color: orangered;
  border-radius: 15px;
  color: white;
}
.btn:hover{
  cursor: pointer;
}
</style>


