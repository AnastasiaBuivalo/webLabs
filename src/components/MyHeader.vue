<script>
    
    export default {
    name: 'MyHeader',
    components: {
    
    }
    }
</script>

<template>

     <header class = "header">
          <nav>
             <a href = "/"><img src="logo512.png" ></a>
              <div class="menu dropdown">
                  <button><a href="./courseList">Каталог</a></button>
                  <ul class = "list">
                      <li>One</li>
                      <li>Two</li>
                      <li>Three</li>
                  </ul>
              </div>
              <input class="search-input">
              <a href="./page404">О нас</a>
              <a href="./login">Профиль</a>
          </nav>
      </header>
</template>

<style>

</style>