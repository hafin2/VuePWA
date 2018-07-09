<script>
  require('material-design-lite')
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  /* Måske drop google css */
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
  @import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css');
</style>

<template>
  <div>
    <!-- <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Search box</span>
      </div>
    </header> -->
 <!-- <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">CropChat</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post a picture</router-link>
      </nav>
    </div> -->
  

    <div class="page-content">
          <!-- mode="out-in" gør at appen ikke husker placeringen hvis man har scrollet ned  -->
      <!-- <transition name="router-anim" duration="200"  enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>

    <!-- <nav class="nav menu">
      <router-link class="create post" to="/post">
      <i class="fas fa-plus"></i>
    </router-link>
    </nav> -->


	<nav>
		 <ul>
        <router-link class="home" to="/">
          <i class="material-icons">
          home
          </i>

        </router-link>
        <router-link class="post" to="/post">
          <i class="material-icons">
          add
          </i>

        </router-link>
        <router-link class="search" to="/post">
          <i class="material-icons">
          search
          </i>

        </router-link>
        <router-link class="profile" to="/post">
          <i class="material-icons">
          perm_identity
          </i>

        </router-link>
		 </ul>
	</nav>



  </div>
</template>

<script>
export default {
  name: 'app'
  // methods: {
  //   hideMenu: function () {
  //     document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
  //     document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
  //   }
  // }
}
</script>
<style>
.page-anim {
  position: absolute;
  width: inherit;
}


nav {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 70px;
  background: #fff;

}

nav li {
	/* display: inline-block; */
	/* padding: 24px 10px; */
}

nav ul a {
  color: #000;
}

ul {
  -webkit-backdrop-filter: blur(10px);
}

</style>
