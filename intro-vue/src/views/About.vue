<template>
<div id='about' class='about'>
    <router-view></router-view>
    <Header />
      <h1 class='about-h1'>About your friendly Travel Bug Developers</h1>
      <main class='about-main'>
        <section class='about-us-1'>
          <div class='about-div-1'>
            <h2 class='about-h2'>Thomas Clukies</h2>
            <img src='https://i.pinimg.com/originals/6d/b4/2b/6db42b2e91911a1c9549fdc2f0c710be.gif' class='about-img'>
            <p class='about-p'>Thomas thomas ThOmAs</p>
          </div>
          <div class='about-div-2'>
            <h2 class='about-h2'>R.J. Kirkhope</h2>
            <img src='https://media1.tenor.com/images/e33213fd8faef93769b36b86ef2b58b6/tenor.gif?itemid=5294604' class='about-img'>
            <p class='about-p'>R.J. r.j. R.j.</p>
          </div>
        </section>
        <section class='about-us-2'>
          <div class='about-div-3'>
            <h2 class='about-h2'>Ryan McCrory</h2>
            <img src='http://digitalspyuk.cdnds.net/16/34/480x360/gallery-1471962283-giphy-5.gif' class='about-img'>
            <p class='about-p'>Ryan ryan RyAn</p>
          </div>
          <div class='about-div-4'>
            <h2 class='about-h2'>Natalie Todd</h2>
            <img src='https://78.media.tumblr.com/tumblr_lw1xg8uCIv1qd8t4mo1_500.gif' class='about-img'>
            <p class='about-p'>Natalie natalie NaTaLiE</p>
          </div>        
        </section>
      </main>
    <Footer />
    

    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
  .about{
    background: no-repeat;
    background-size: 100vw 100vh;
    background-image: url('http://goldwallpapers.com/uploads/posts/beautiful-sunrise-wallpaper/beautiful_sunrise_wallpaper_008.jpg');
  }

    .about-h1{
      color: white;
    }
    
  .about-main{
    display:grid;
    flex-flow: row wrap;
  }

  .about-us-1{
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;

  }
  .about-us-2{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .about-div-1{
    margin-left: 20px;
  }

  .about-div-2{
    margin-left: -20px;
  }

  .about-div-3{
    margin-left: 20px;
  }

  .about-div-4{
    margin-left: -20px;
  }
  .about-h2{
    color: red;
  }

  .about-img{
    height: 20vh;
    width: 20vw;
  }

  .about-p{
    color: white;
  }
</style>
