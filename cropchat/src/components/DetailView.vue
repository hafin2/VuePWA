<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.pictures[$route.params.id].url" />
      </div>
      <div class="info">
        <!-- <span>{{ this.pictures[$route.params.id].info }}</span> -->
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span> <h3> {{ this.pictures[$route.params.id].comment }}</h3></span>
      </div>
      <div class="description">
        <span>{{ this.pictures[$route.params.id].description }}</span>
      </div>
      
      <div class="actions">
        <!-- <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link> -->
      </div>

    </div>
  </div>
</template>
<script>
import data from '../data'
export default {
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
    border-radius: 10px;
    /* box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.13); */
        box-shadow: 0 20px 64px 0 rgba(0,0,0,.2);
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 0px;
    color: #555;
  }
  .comment h3 {
    margin: 0px 0px 15px 0px;
  }
  .actions {
    text-align: center;
  }
  .description {
    font-size: 13px;
    opacity: 0.8;
  }
</style>