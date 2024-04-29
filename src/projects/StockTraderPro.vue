<template>
  <div>
    <oneColumnTemplate
      :projectTitle="projectTitle"
      :author="author"
      :pictures="pictures"
      :video="video"
      class="resized-image resized-video"
    >
      <template v-slot:description>
        <p>
          Welcome to StockTraderPro, an open-source iOS app designed by Aaryan
          Kapoor. This platform is crafted specifically for investors and
          traders who wish to keep a strong eye on their stock portfolios
          directly from their iOS devices. With StockTraderPro, you can
          seamlessly track the stocks on your watchlist, monitor the number of
          shares you own in each, and view your portfolio's overall value in
          real-time, all within the convenience of your iOS device.
        </p>
      </template>
      <template v-slot:story>
        <p>
          Ever since I was 16, I've had a deep fascination with investing. The
          idea of putting my money to work in such a way that it could generate
          more money was incredibly appealing. As I delved deeper into the world
          of finance, I discovered cryptocurrencies - a new, digital frontier
          for investment. I was captivated.
        </p>
        <p>
          However, I quickly realized that trading and investing, especially in
          the volatile world of cryptocurrencies, required not just capital, but
          also knowledge and experience. I wanted to create a tool that would
          not only allow me to paper trade (watchlist) but also help me learn
          and grow as an investor.
        </p>
        <p>
          This is where the idea for StockTraderPro was born. It's still in its
          early stages, but I'm excited about its potential. It's more than just
          an app; it's a platform for learning, trading, and growing. I can't
          wait to see where this journey takes me.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          Getting Started git clone
          https://github.com/AaryanKapoor22/StockTraderPro.git cd StockTraderPro
          Usage Once you have StockTraderPro installed on your iOS device, you
          can begin adding stocks to your watchlist, updating your stock
          ownership, and tracking your portfolio's value with ease.
        </p>
      </template>
      <template v-slot:links>
        <a href="https://github.com/AaryanKapoor22/StockTraderPro"
          >StockTraderPro GitHub</a
        >
        <p>
          License StockTraderPro is open-source and is licensed under the MIT
          License. For more information, please see the LICENSE file. Happy
          Trading!
        </p>
      </template>
    </oneColumnTemplate>
  </div>
</template>

<script>
import oneColumnTemplate from "../components/templates/oneColumnTemplate.vue";
//import sampleImage from "../projects/project_images/ProjectSampleImage.jpeg";
import sampleImage from "../projects/project_images/stocktraderpro1.jpeg";
import sampleImage1 from "../projects/project_images/stocktraderpro2.jpeg";
import sampleImage2 from "../projects/project_images/stocktraderpro3.jpeg";
import sampleVideo from "../projects/project_videos/stocktraderpro.mp4";

export default {
  name: "OneColumnSampleProject",
  components: {
    oneColumnTemplate,
  },
  data() {
    return {
      projectTitle: "StockTraderPro",
      author: "Aaryan Kapoor",
      pictures: [sampleImage, sampleImage1, sampleImage2],
      video: sampleVideo, //get rid of the quotes when putting in your video variable
    };
  },
  info: {
    title: "StockTraderPro",
    author: "Aaryan Kapoor",
    tags: ["SwiftUI", "Swift", "Xcode", "IOS", "iPhone"],
  },
};
</script>

<style scoped>
a {
  color: white;
}
.resized-image {
  width: 200px;
  height: auto;
}

.resized-video {
  width: 100%;
  height: auto;
}

h1,
h2,
h3 {
  color: white;
}

h3 {
  padding-bottom: 5vh;
}

p {
  padding-bottom: 10vh;
  text-align: left;
}

h1 {
  padding-bottom: 2vh;
}
</style>
