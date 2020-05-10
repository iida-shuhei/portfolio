<template>
  <div>
    <h1>Profile</h1>
    <div class="text">
      私の人生を振り返ってましょう。
    </div>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
    <span slot="opposite">1992〜</span>
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-account-clock-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">誕生</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              埼玉県春日部市にて1992年5月に誕生。<br>
              将来の夢は正義のヒーローになることだった。
            </v-col>
              <v-img :src="baby" height="300"></v-img>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
    <span slot="opposite">2002〜</span>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">学生時代</h2>
          <v-icon
            dark
            size="42"
          >mdi-account-box</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              テニスの王子様の影響でテニスを始める。<br>
              中学時代は部長をやり、高校時代はスクールへ。 <br>
              大学時代はほぼ毎日サークル仲間とテニス。
            </v-col>
            <v-img :src="tennis" height="300"></v-img>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
    <span slot="opposite">2011〜</span>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-account-search
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">専攻</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              大学では英語教育を専攻。<br>
              仲間と共に英語教育を熱心に指導してくださるゼミに入り<br>
              模擬授業や授業見学を通して英語教育を学んだ。
            </v-col>
            <v-img :src="english" height="300"></v-img>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
    <span slot="opposite">2015〜</span>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">社会人時代 教師編</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-tie
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              大学を卒業してすぐ高校の英語教員となる。
              部活は経験したことがないバレーボール部。<br>
              ルールやボールの打ち方などを本やYoutubeで学び、生徒と部活で汗を流す。<br>
              教員１、２年目は副担任、３年目にて３学年の担任へ。
              卒業生を送り出す。
            </v-col>
            <v-img :src="teacher" height="300"></v-img>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
    <span slot="opposite">2018〜</span>
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-airport
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">ワーキングホリデー時代</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              教員を辞め、オーストラリアへ。単純に海外で働きたかったから。<br>
              半年ほど運送業と飲食店でバイト生活、カジノ生活を送り、<br>
              お金もある程度貯まったところでテニス留学へ。この留学がいちばん濃かった…
            </v-col>
            <v-img :src="australia" height="300"></v-img>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
    <span slot="opposite">2019〜</span>
      <v-card>
        <v-card-title class="yellow lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">社会人時代 エンジニア編</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-tie
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              現在。未経験からエンジニアへ。場所を問わず働けるスタイルに憧れを抱く。<br>
              サイトを作成しながら勉強中。<br>
              言語…Java, JavaScript, HTML, CSS, SQL<br>
              フレームワーク、ライブラリ…SpringBoot, Vue.js<br>
              ツール…Git, Firebase<br>
              OS…Mac, Linux<br>
            </v-col>
            <v-img :src="engineer" height="300"></v-img>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

  </v-timeline>
</div>
</template>

<script>
export default {
  data() {
    return {
      baby: "/baby.jpg",
      tennis:"/tennis.jpeg",
      english: "/english.jpg",
      teacher: "/teacher.png",
      australia: "/australia.jpg",
      engineer:"/engineer.jpg"
    }
  }
}
</script>

<style scoped>
  h1 {
    font-family: 'Bradley Hand',sans-serif;
    font-size: 80px;
    text-align: center;
    margin-top: 50px;
  }
  .text {
    text-align: center;
    margin-bottom: 50px;
  }
</style>