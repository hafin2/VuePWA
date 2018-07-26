<template>
<div class="">
<!-- <div class="actions">
          <a href="javascript:history.go(-1)">
              <i class="material-icons">
              keyboard_backspace
              </i>
          </a>
  </div> -->

  <div class="profile-container">
    <div class="profile-img">
        <img src="../../static/img/Hasse.jpg" width="65" height="65">
    </div>
    <div class="profile-info">
        <span> <h5>Hasse Finderup</h5></span>
        <span><p>1.765 followers</p></span>
    </div>
  </div>


  <div item-selector=".item" class="mdl-grid page-anim">
      <!-- <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div> -->
      <div origin-left="false" v-for="picture in this.pictures" class="item mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
        <div  class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <!-- <div class="image-card__comment mdl-card__actions">
            <span style="opacity: 0.8">{{ picture.author }}</span>
          </div> -->
        </div>
      </div>
    </div>
</div>

</template>

<style scoped>

.actions {
    margin-top: 30px;
}

.mdl-grid {
    margin-top: 65px;
  }

  .item:last-child {
    margin-bottom: 75px;
  }

  .image-card {
    position: relative;
    /* margin-bottom: 20px; */
  }
  .image-card__picture > img {
    width:100%;
    border-radius: 10px;
    /* box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.13); */
        box-shadow: 0 20px 64px 0 rgba(0,0,0,.2);
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    border-radius: 0 0 10px 10px;
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  .profile-container {
    padding-left: 35px;
    padding-top: 75px;
    display: inline-block;
  }

  .profile-img {
    display: inline-block;
  }

  .profile-img > img {
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 64px 0 rgba(0,0,0,.2);
  }

  .profile-info {
    display: inline-block;
    margin-left: 15px;
  }

  .actions {
    text-align: center;
    position: fixed;
    margin-top: 5px;
  }

  .actions > a > i {
    font-size: 30px;
    padding-left: 12px;
  }

  h5 {
    display: inline-block;
    color: #fff;
    margin-bottom: -15px;
  }

  p {
    color: #f5f5f5;  
    display: inline-block;
    position: absolute;
    font-size: 12px;
    margin-top: -5px;
    font-weight: 300;
  } 
</style>

<script>
  import data from '../data'
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      }
    },
    data () {
      return {
        'pictures': data.pictures
      }
    }
  }
</script>
