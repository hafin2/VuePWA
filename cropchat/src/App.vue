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

	<nav class="bottomNav">
    <ul>
      <li>
        <router-link class="home" to="/">
          <i class="material-icons">
          home
          </i>
        </router-link>
      </li>
      <li>
        <label for="file-upload" class="custom-file-upload">
          <i class="material-icons">
            add
          </i>
        </label>
        <input style="display: none" id="file-upload" type="file" accept="image/*">
        <!-- <router-link class="post" to="/post">
          <i class="material-icons">
          add
          </i>
        </router-link> -->
      </li>
      <li>
        <router-link class="search" to="/search">
          <i class="material-icons">
          search
          </i>
        </router-link>
      </li>
      <li>
        <router-link class="profile" to="/profile">
          <i class="material-icons">
          perm_identity
          </i>
        </router-link>
      </li>
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

body {
  background: #2d2d2d;
}

nav {
	position: fixed;
  text-align: center;
	width: 100%;
  -webkit-backdrop-filter: blur(10px) saturate(2);
  /* background-color: rgba(223, 223, 223, 0.87); */
  background-color: rgba(63, 63, 63, 0.87);

}

.bottomNav {
  bottom:0; 
  left:0;
  right:0;
  height: 70px;
}

.topNav {
  top: 0;
  height: 95px;
  z-index: 99;
}



nav li {
	display: inline-block;
  /* margin-left: 50px; */
  
}

ul {
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
}

.material-icons {
  color: #c5c5c5 !important;
}


searchBox {
  padding-left: 0px;
  display: flex;
  justify-content: center;
}

.searchTop {
  margin-top: 45px;
  margin-left: 8px;
  margin-right: 8px;
  height: 30px;
  width: 88%;
  background-color: rgba(189,189,189, 0.87);
  color: #bdbdbd;
  border: 0;
  border-radius: 5px;
  font-size: 1em;
  /* box-shadow: 0 20px 64px 0 rgba(0,0,0,.2); */
  
}



</style>
