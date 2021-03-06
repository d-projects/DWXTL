<template>
    <div>
        <navigation></navigation>
        <div class = "container">
            <div class = "top-msg">
                <h3> Click on a school listing below to find out more about it! </h3>
            </div>

            <div class = "listings">

                <div class="card custom-card">
                    <a href = "/">
                    <div class="card-image-container pull-left">
                        <img class = "card-img" src="https://picsum.photos/200">
                    </div>

                    <div class="card-content pull-left">
                        <h4 class = "card-title"> Title is a Title </h4>

                        <p class = "card-text"> lore ipsum blah blah blah blah blah blah jo jo uuuuuuuuuuuuuuf jkjkjkjkjk kkk klkl klkl kkkkkk k </p>
                        <br>
                    </div>
                    </a>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'Home'
    }
  }
}
</script>

<style>

</style>
