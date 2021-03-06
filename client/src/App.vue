<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.custom-nav {
    background-color: #FFFFFF;
    height: 6em;
}

.nav-title {
    color: #5196CB;
    margin-left: 2em;
}

.nav-title:hover, a:hover {
    text-decoration: none;
    color: #5196CB;
}

.custom-btn {
    text-decoration: none;
    background-color: #FF6663;
    color: white;
    margin-right: 2em;
    border-radius: 0.5em;
    padding: 0.25em 0.75em;
}

.top-msg {
    padding: 2em 0;
    text-align: center;
    font-weight: 1em;
    color: #052470;
}
body {
  background-color: #F7F8FC;
}

.listings {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.custom-card {
    text-decoration: none;
    width: 38em;
    background: #fff;
    display: inline-block;
    border-radius: 1em;
}

.custom-card:hover {
    opacity: 70%;
}

.card-image-container {
    float: left;
    background: #000;
    border-radius: 1em;
}

.card-img {
    width: 15em;
    height: 15em;
    border-radius: 1em 0 0 1em;
}

.card-content {
    color: black;
    margin: 1em 0 0 2em;
    float: left;
    width: 18em;
    overflow: hidden;
}

.card-title {
    color: #052470;
}

.card-text {
    font-size: 90%;

    /* CSS for displaying a max of 2 lines */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.listing-form {
    margin: auto;
    width: 50%;
    margin-bottom: 5em;
}

.form-group {
    padding: 0 0 1em 0;
}

.form-group label {
    margin-bottom: 0.25em;
}

.listing-form button {
    background-color: #59ABE1;
    color: white;
}

button:hover, .custom-btn:hover {
    opacity: 90%;
    color: white;
}

.school-header {
    margin: 2em 0;
}

.school-body {
    display: flex;
    flex-wrap: wrap;
}

.school-image {
    flex: 1;
    margin: 2em 2em 0 0;
    border-radius: 1em;
    width: 20em;
    height: 20em;
}

.school-info {
    flex: 3;
    margin-left: 2em;
}

.school-info div {
    padding: 1em 0;
}

.school-section-header h3, i {
    display: inline;
}

.school-section-header i {
    margin-left: 0.25em;
    font-size: 1.75em;
}

hr {
  border-top: 2px solid lightgrey;
}

</style>
