<template>
  <div>
    <div class="mdl-grid page-anim">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="picture in this.pictures" class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <span style="opacity: 0.8">{{ picture.author }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>



<style scoped>
  .mdl-grid {
    /* margin-bottom: 55px; */
    margin-top: 30px;
  }

  .image-card:last-child {
    margin-bottom: 75px;
  }

  .image-card {
    position: relative;
    margin-bottom: 20px;
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
