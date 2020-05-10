<template>
<div class="work">
  <h1>Works</h1>
  <div class="text">
    試行錯誤を繰り返しながら創り上げた作品達…
  </div>
  <v-container class="bottom">
    <v-row>
      <v-dialog v-model="dialog3">
        <template v-slot:activator="{ on }">
            <v-hover v-slot:default="{ hover }">
              <v-col cols="4">
                <v-card
                    v-on="on"
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="ramenImg"
                    >
                    </v-img>
                    <v-card-text class="text--primary">
                      <div>ラーメン記録投稿サイト</div>
                      <div class="when">2020 / 04</div>
                    </v-card-text>
                </v-card>
              </v-col>
            </v-hover>
        </template>

        <div class="dai">
            <v-card>
              <div class="dai1">
                  <v-card-title>ラーメン記録投稿サイト</v-card-title>
                    <v-divider/>
                      <v-card-text>
                        【概要】
                        <div>
                          ラーメンを食べた記録を投稿するサイト。ラーメンを食べたらそれを記録しておきたい、と思い作成。
                          ラーメン屋を登録する際に、営業時間登録のところで動的フォームを使用。
                          ログイン機能はSpring Securityを使用。新規登録の際は
                          本人確認をさせようと思い、メール認証を実装。
                          投稿に対していいねボタン、お気に入り登録、コメント機能も実装。記事画面のデザインにもこだわり、
                          インスタグラムのような形にした（いびつだが…）。
                        </div>
                      </v-card-text>
                    <v-divider/>
                    <v-card-text>
                      【使用言語など】
                      <div>Java, SpringBoot, Spring Security, HTML, CSS, JavaScript, JQuery, BootStrap, Heroku</div>
                    </v-card-text>
              </div>
            </v-card>
            <div>
              <v-img :src="ramenImg" width="900" height="500" />
            </div>
        </div>
      </v-dialog>


    <v-dialog v-model="dialog2">
      <template v-slot:activator="{ on }">
        <v-hover v-slot:default="{ hover }">
          <v-col cols="4">  
            <v-card
                v-on="on"
                :elevation="hover ? 16 : 2"
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="ramenSPAImg"
                >
                </v-img>
                <v-card-text class="text--primary">
                  <div>ラーメン屋検索サイト</div>
                  <div class="when">2020 / 02</div>
                </v-card-text>
            </v-card>
          </v-col>
        </v-hover>
      </template>
        <div class="dai">
          <v-card>
            <div class="dai1">
              <v-card-title>ラーメン屋検索サイト</v-card-title>
                <v-divider></v-divider>
                  <v-card-text>
                    【概要】
                    <div>
                      ラーメン屋を検索するサイト。SPAなサイトを作成しようと思い立ったはいいものの、Vue.jsを触ったことがなかったので、Udemyにて講座を受講。
                      JavaScriptを復習しながらVue.jsを習得。非同期通信（ajax）で、食べログAPIからラーメン屋情報を取得した。ログイン機能はGoogleログイン認証を利用。
                      こんな簡単にログイン機能が実装できるのかと感動。
                    </div>
                  </v-card-text>
                  <v-divider/>
              <v-card-text>
                【使用言語など】
                <div>Vue.js, firebase</div>
              </v-card-text>
            </div>
          </v-card>
          <div>
              <v-img :src="ramenSPAImg" width="900" height="500" />
          </div>
        </div>
      </v-dialog>


  <v-dialog v-model="dialog1">
      <template v-slot:activator="{ on }">
        <v-hover v-slot:default="{ hover }">
          <v-col cols="4">
            <v-card
              v-on="on"
              :elevation="hover ? 16 : 2"
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="travelImg"
              >
              </v-img>
              <v-card-text class="text--primary">
                <div>旅行記録投稿サイト</div>
                <div class="when">2020 / 01</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-hover>
      </template>
        <div class="dai">
          <v-card>
            <div class="dai1">
              <v-card-title>旅行記録投稿サイト</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  【概要】
                  <div>
                    旅行記録を投稿するサイト。旅行によく行くのでその記録を残しておきたいと思い作成。
                    ログイン機能にはSpring Securityを利用。新規登録やログインをする際には
                    非同期通信にてバリデーションチェックを行い、ユーザーが登録しやすいようにした。
                    またSpringのMailSenderを使い、管理者にメールを送れるようにした。
                  </div>
                </v-card-text>
                <v-divider/>
                <v-card-text>
                【使用言語など】
                <div>Java, SpringBoot, Spring Security, HTML, CSS, JavaScript, JQuery, BootStrap, Heroku</div>
              </v-card-text>
            </div>
          </v-card>
            <div>
              <v-img :src="travelImg" width="900" height="500" />
            </div>
        </div>
      </v-dialog>

    </v-row>
  </v-container>
</div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    // Carousel,
    // Slide
  },

  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      travelImg: "/travel.png",
      travelImg2: "/travelImg2.png",
      travelImg3: "/travelImg3.png",
      travelImg4: "/travelImg4.png",
      ramenSPAImg: "/ramenSPA.png",
      ramenImg: "ramen.png"
    }
  },
};
</script>

<style scoped>
  .when {
    text-align: right;
  }
  .dai {
    display: flex;
  }
  .dai1 {
    width: 500px;
  }
  h1 {
    font-family: 'Bradley Hand',sans-serif;
    font-size: 80px;
    text-align: center;
    margin-top: 200px;
  }
  .text {
    text-align: center;
    margin-bottom: 20px;
  }
  .work {
    margin-bottom: 200px;
    background-image: url("/back.jpeg");
    background-size: cover;
  }
  .bottom {
    margin-bottom: 200px;
  }
</style>