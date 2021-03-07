<template>
  <div id = 'top'>
  <navigation></navigation>
    <div class = "top-msg">
      <h3> {{topMsg}} </h3>
    </div>

    <div class = "submit-msg">
      <h4 v-if="status == 'SUCCESS'"> {{successMsg}} </h4>
    </div>

    <div class = "err-msg">
      <h4 v-if="status == 'FAILED'"> {{mainError}} </h4>
    </div>

    <form id="form" class="listing-form" v-on:submit="onSubmit" enctype="multipart/form-data">
      <div class="form-group">
        <label for="image-input">Image (gif, jpeg, jpg, png): </label>
        <input v-on:change="imageUpload" type="file" class="form-control" id="image-input" name="image" accept=".gif, .jpeg, .jpg, .png" size = "4194304">
        <h6 v-if="errors.image"> {{errors.image}} </h6>
      </div>

      <div class="form-group">
          <label for="name-input">Name:</label>
          <input v-model="data.name" type="text" class="form-control" id="name-input" name="name" placeholder="Name of the school..." required>
          <h6 v-if="errors.name"> {{errors.name}}  </h6>
      </div>

      <div class="form-group">
          <label for="about-input">About:</label>
          <textarea v-model="data.about" rows="5" class="form-control" id="about-input" name="about" placeholder="A description of the school..." required></textarea>
          <h6 v-if="errors.about"> {{errors.about}}  </h6>
      </div>

      <div class="form-group">
          <label for="location-input">Location:</label>
          <textarea v-model="data.location" rows="5" class="form-control" id="location-input" name="location" placeholder="The location of the school..." required></textarea>
          <h6 v-if="errors.location"> {{errors.location}}  </h6>
      </div>

      <div class="form-group">
          <label for="admission-input">Admission:</label>
          <textarea v-model="data.admission" rows="5" class="form-control" id="admission-input" name="admission" placeholder="Admission info..." required></textarea>
          <h6 v-if="errors.admission"> {{errors.admission}}  </h6>
      </div>

      <button type="submit" class="btn text-light"> {{submitBtn}} </button>
    </form>

  </div>

</template>

<script>
import SchoolService from '@/services/SchoolService'
export default {
  name: 'CreateSchool',
  data () {
    return {
      status: 'GATHER',
      errors: {},
      mainError: 'There was an error in your submission',
      data: {},
      topMsg: '',
      submitBtn: '',
      usage: '' // create or edit
    }
  },
  async mounted () {
    if (this.$route.params.id) { // configure for edit page
      const schoolData = await SchoolService.getSchool(this.$route.params.id)
      if (!schoolData.data.valid) this.$router.push('/')
      this.data = schoolData.data.school
      this.topMsg = "Edit this school's details below"
      this.submitBtn = "Update"
      this.successMsg = 'Your school listing was updated!'
      this.usage = 'EDIT'
    
    } else { // configure for create page
      this.topMsg = "Enter a new school's details below"
      this.submitBtn = "Submit"
      this.successMsg = 'Your school listing was created!'
      this.usage = 'CREATE'
    }
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault();

      this.errors = {}, this.status = 'FAILED';
      if (this.noErrors()) {
        let res;
        if (this.usage == 'CREATE') res = await SchoolService.createSchool(this.data)
        else res = await SchoolService.updateSchool(this.$route.params.id, this.data)

        if (!res.data.success) {
          this.mainError = res.data.message;
        } else {
          this.status = 'SUCCESS';
          if (this.usage == 'CREATE') {
            for (const [key, value] of Object.entries(this.data)) {
              this.data[key] = '';
            }
          }
        }
      }
      document.documentElement.scrollTop = 0;
    },
     // will keep this here for scalability (e.g. to check for more errors in future)
     // currently empty checks are done in the HTML
    noErrors() {
      return true;
    },

    imageUpload(event) {
      this.data.image = event.target.files[0];
    },

  }
}
</script>

<style>

</style>
