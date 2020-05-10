<template>
    <div class="contact">
            <v-container class="bottom">
                  <h1>Contact</h1>
                    <div class="text">
                      最後までご覧いただきありがとうございました。もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
                    </div>
                    <v-form ref="form" class="form" v-model="contactFormValidation.valid" lazy-validation>
                    <v-text-field
                            v-model="contactForm.name"
                            :rules="contactFormValidation.nameRules"
                            label="名前"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="contactForm.email"
                            :rules="contactFormValidation.emailRules"
                            label="メールアドレス"
                            required
                    ></v-text-field>
                    <v-textarea
                            v-model="contactForm.contents"
                            :rules="contactFormValidation.contentsRules"
                            label="内容"
                            required
                    ></v-textarea>
                    <v-btn
                            :loading="contactForm.loading"
                            :disabled="!contactFormValidation.valid"
                            @click="sendMail()"
                            block
                            large
                            color="info"
                            class="mt-4 font-weight-bold"
                    >送信
                    </v-btn>
        <v-snackbar
                v-model="snackBar.show"
                :color="snackBar.color"
                :timeout="3000"
                top
                class="font-weight-bold"
        >
            {{snackBar.message}}
        </v-snackbar>
                </v-form>
            </v-container>
    </div>
</template>

<script>
  import { functions } from '@/plugins/firebase'

  export default {
    data: () => ({
      contactForm: {
        name: '',
        contents: '',
        email: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
    methods: {
      sendMail: function () {
        if (this.$refs.form.validate()) {
          this.contactForm.loading = true
          const mailer = functions.httpsCallable('sendMail')

          mailer(this.contactForm)
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました。'
              )
            })
            .catch(err => {
              this.showSnackBar(
                'error',
                '送信に失敗しました。時間をおいて再度お試しください。'
              )
              console.log(err)
            })
            .finally(() => {
              this.contactForm.loading = false
            })
        }
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: 'Bradley Hand',sans-serif;
    font-size: 80px;
    text-align: center;
  }
  .text {
    text-align: center;
    width: 600px;
    margin: 0 auto;
    line-height: 40px;
  }
  .form {
    margin: 0 auto;
    width: 600px;
  }
  .bottom {
    margin-bottom: 50px;
  }
</style>