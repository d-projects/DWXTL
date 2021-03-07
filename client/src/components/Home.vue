<template>
    <div>
        <navigation></navigation>
        <div class = "container">
            <div class = "top-msg">
                <h3 v-if="schools.length > 0"> Click on a school listing below to find out more about it! </h3>
                <h3 v-else> There currently are not any school listings! </h3>
            </div>

            <div class = "listings">
                <a v-for="(s, i) in schools" :key="s" v-bind:href="'/school/'+s._id">
                <div  class="card custom-card">
                    <div class="card-image-container pull-left">
                        <img class = "card-img" v-bind:src="s.imageURL">
                    </div>

                    <div class="card-content pull-left">
                        <h4 class = "card-title"> {{s.name}} </h4>
                        <p class = "card-text"> {{s.about}} </p>
                        <br>
                    </div>
                    
                </div>
                </a>

            </div>
        </div>
    </div>

</template>

<script>
import SchoolService from '@/services/SchoolService'
export default {
  name: 'Home',
  data () {
    return {
      schools: null
    }
  },
  async mounted () {
      const schoolsData = await SchoolService.getAllSchools()
      this.schools = schoolsData.data
  }
}
</script>

<style>

</style>
