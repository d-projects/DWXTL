<template>
    <nav class="navbar navbar-expand-lg navbar-fixed custom-nav">
        <div class="container-fluid">
          <h2><a class="nav-title" href="/">School Listings Demo App</a></h2>
          <div class="d-flex">
            <h4><a v-if="page == 'Home'" href = "/create" class = "custom-btn"> Create a School</a></h4>
            <h4><a v-if="page == 'ViewSchool'" v-bind:href = "'/edit/' + $parent.school._id" class = "custom-btn"> Edit this School</a></h4>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      page: this.$parent.$options.name
    }
  }
}
</script>

<style>
</style>
