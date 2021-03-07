<template>
  <div>
  <navigation></navigation>
        <div class = "container">
        <div class = "school-header">
            <h1 class = "school-name"> {{school.name}} </h1>
        </div>

        <div class = "school-body">
            <div class = "school-image-container">
                <img class = "school-image" v-bind:src="school.imageURL">
            </div>

            <div class = "school-info">
                <div class = "school-about">
                    <div class = "school-section-header">
                        <h3> ABOUT OUR SCHOOL</h3>
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <p> {{school.about}}</p>
                </div> <hr>

                <div class = "school-location">
                    <div class = "school-section-header">
                        <h3> LOCATION </h3>
                        <i class="fas fa-search-location"></i>
                    </div>
                    <p> {{school.location}} </p>
                </div> <hr>

                <div class = "school-admissions">
                    <div class = "school-section-header">
                        <h3> ADMISSIONS </h3> <i class="fas fa-certificate"></i>
                    </div>
                    <p> {{school.admission}} </p>
                </div>

            </div>
        </div>
    </div>
  </div>

</template>

<script>
import SchoolService from '@/services/SchoolService'
export default {
  name: 'ViewSchool',
  data () {
    return {
      success: false,
      errors: {
        image: '',
        name: '',
        about: '',
        location: '',
        admission: ''
      },
      school: {}
    }
  },
  async mounted () {
      const schoolData = await SchoolService.getSchool(this.$route.params.id)
      if (!schoolData.data.valid) this.$router.push('/')
      this.school = schoolData.data.school
  }
}
</script>

<style>

</style>
