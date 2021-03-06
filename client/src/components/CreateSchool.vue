<template>
  <div>
  <navigation></navigation>
    <div class = "top-msg">
      <h3> Enter a school's details below </h3>
    </div>

    <div class = "submit-msg">
      <h4 v-if="success"> Your school listing was posted! </h4>
    </div>

    <form class = "listing-form">
      <div class="form-group">
        <label for="image-input">Image (gif, jpeg, jpg, png): </label>
        <input type="file" class="form-control" id="image-input" name="image" accept=".gif, .jpeg, .jpg, .png">
        <h6 v-if="errors.image"> Your school listing was posted! </h6>
      </div>

      <div class="form-group">
          <label for="name-input">Name:</label>
          <input type="text" class="form-control" id="name-input" name="name" placeholder="Name of the school...">
          <h6 v-if="errors.name"> Your school listing was posted! </h6>
      </div>

      <div class="form-group">
          <label for="about-input">About:</label>
          <textarea rows="5" class="form-control" id="about-input" name="about" placeholder="A description of the school..."></textarea>
          <h6 v-if="errors.about"> Your school listing was posted! </h6>
      </div>

      <div class="form-group">
          <label for="location-input">Location:</label>
          <textarea rows="5" class="form-control" id="location-input" name="location" placeholder="The location of the school..."></textarea>
          <h6 v-if="errors.location"> Your school listing was posted! </h6>
      </div>

      <div class="form-group">
          <label for="admission-input">Admission:</label>
          <textarea rows="5" class="form-control" id="admission-input" name="admission" placeholder="Admission info..."></textarea>
          <h6 v-if="errors.admission"> Your school listing was posted! </h6>
      </div>

      <button type="submit" class="btn text-light">Submit</button>
    </form>

  </div>

</template>

<script>
export default {
  name: 'CreateSchool',
  data () {
    return {
      success: false,
      errors: {
        image: '',
        name: '',
        about: '',
        location: '',
        admission: ''
      }
    }
  }
}
</script>

<style>

</style>
