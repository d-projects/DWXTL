<template>
  <div>
  <navigation></navigation>
        <div class = "container">
        <div class = "school-header">
            <h1 class = "school-name"> Name of the School </h1>
        </div>

        <div class = "school-body">
            <div class = "school-image-container">
                <img class = "school-image" src="https://picsum.photos/200">
            </div>

            <div class = "school-info">
                <div class = "school-about">
                    <div class = "school-section-header">
                        <h3> ABOUT OUR SCHOOL</h3>
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet urna vitae condimentum finibus. Aliquam ante purus, malesuada feugiat lacus sed, fringilla interdum eros. Phasellus et diam vehicula, dapibus felis a, aliquam massa. Cras condimentum orci neque, eget dictum magna congue ut. Aenean consequat lacinia magna ut congue. Duis sagittis auctor ullamcorper. Morbi finibus sapien vitae hendrerit pellentesque. In laoreet consequat justo. Nullam interdum sollicitudin nibh, accumsan varius nisl. Sed sodales massa et sapien dictum fringilla. Quisque sit amet malesuada diam. Integer aliquet dignissim fermentum. Duis malesuada laoreet est, vel convallis lectus fringilla id.
                <br><br>
                    Integer laoreet, leo id rutrum sodales, arcu ipsum aliquam quam, faucibus maximus lorem velit ac urna. Suspendisse vel libero nisl. Integer scelerisque elit non nisl suscipit fermentum venenatis nec diam. Ut dignissim dui eget lorem iaculis, et dictum enim aliquet. Nam lorem metus, pharetra nec malesuada nec, accumsan ac urna. Duis et diam quis nunc aliquet venenatis ac pulvinar orci. Aliquam pulvinar arcu ipsum. Fusce pellentesque, dui sed eleifend vestibulum, orci nunc dignissim felis, sed condimentum elit ante at nibh.
                    </p>
                </div> <hr>

                <div class = "school-location">
                    <div class = "school-section-header">
                        <h3> LOCATION </h3>
                        <i class="fas fa-search-location"></i>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet urna vitae condimentum finibus. Aliquam ante purus, malesuada feugiat lacus sed, fringilla interdum eros. Phasellus et diam vehicula, dapibus felis a, aliquam massa. Cras condimentum orci neque, eget dictum magna congue ut. Aenean consequat lacinia magna ut congue. Duis sagittis auctor ullamcorper. Morbi finibus sapien vitae hendrerit pellentesque. In laoreet consequat justo. Nullam interdum sollicitudin nibh, accumsan varius nisl. Sed sodales massa et sapien dictum fringilla. Quisque sit amet malesuada diam. Integer aliquet dignissim fermentum. Duis malesuada laoreet est, vel convallis lectus fringilla id.
                <br><br>
                    Integer laoreet, leo id rutrum sodales, arcu ipsum aliquam quam, faucibus maximus lorem velit ac urna. Suspendisse vel libero nisl. Integer scelerisque elit non nisl suscipit fermentum venenatis nec diam. Ut dignissim dui eget lorem iaculis, et dictum enim aliquet. Nam lorem metus, pharetra nec malesuada nec, accumsan ac urna. Duis et diam quis nunc aliquet venenatis ac pulvinar orci. Aliquam pulvinar arcu ipsum. Fusce pellentesque, dui sed eleifend vestibulum, orci nunc dignissim felis, sed condimentum elit ante at nibh.
                    </p>
                </div> <hr>

                <div class = "school-admissions">
                    <div class = "school-section-header">
                        <h3> ADMISSIONS </h3> <i class="fas fa-certificate"></i>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet urna vitae condimentum finibus. Aliquam ante purus, malesuada feugiat lacus sed, fringilla interdum eros. Phasellus et diam vehicula, dapibus felis a, aliquam massa. Cras condimentum orci neque, eget dictum magna congue ut. Aenean consequat lacinia magna ut congue. Duis sagittis auctor ullamcorper. Morbi finibus sapien vitae hendrerit pellentesque. In laoreet consequat justo. Nullam interdum sollicitudin nibh, accumsan varius nisl. Sed sodales massa et sapien dictum fringilla. Quisque sit amet malesuada diam. Integer aliquet dignissim fermentum. Duis malesuada laoreet est, vel convallis lectus fringilla id.
                <br><br>
                    Integer laoreet, leo id rutrum sodales, arcu ipsum aliquam quam, faucibus maximus lorem velit ac urna. Suspendisse vel libero nisl. Integer scelerisque elit non nisl suscipit fermentum venenatis nec diam. Ut dignissim dui eget lorem iaculis, et dictum enim aliquet. Nam lorem metus, pharetra nec malesuada nec, accumsan ac urna. Duis et diam quis nunc aliquet venenatis ac pulvinar orci. Aliquam pulvinar arcu ipsum. Fusce pellentesque, dui sed eleifend vestibulum, orci nunc dignissim felis, sed condimentum elit ante at nibh.
                    </p>
                </div>

            </div>
        </div>
    </div>
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
