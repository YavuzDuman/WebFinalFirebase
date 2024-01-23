<template>
  <q-page>
    <q-component class="sing-up">
      <div class="q-pa-md">
        <div class="text-center q-mb-md q-mb-lg-md">
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-left.svg" class="q-ml-md" /> 
          <h5 class="text-h5 q-mt-md" style="display: inline-block; max-width: 100%;">Üye Ol</h5>
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-right.svg" class="q-ml-md" />
        </div>
      </div>

      <div class="container" style="margin-left: 30px;margin-bottom: -100px;">
        <q-card flat bordered class="my-card">
          <q-input v-model="ad" label="Ad" class="ad-box"/>
          <q-input v-model="soyad" label="Soyad" class="soyad-box"/>
          <q-input v-model="email" label="E-posta" class="mail-box"/>
          <q-input v-model="telefon" label="Cep Telefonu" class="mail-box"/>
          <q-input v-model="password1" label="Şifre" type="password" placeholder="*********" class="sifre-box"/>
          <q-input v-model="password2" label="Şifre Tekrar" type="password" dense placeholder="*********" class="sifre-box"/>
          <q-checkbox v-model="val" label="Kullanım Koşulları ve Gizlilik Politikası'nı okudum, kabul ediyorum." class="check-box"/>
          <q-checkbox v-model="val" label="KVKK Aydınlatma Metnini Okudum, Kabul Ediyorum." class="check-box"/>
          <q-btn @click="signup" label="Kaydet" color="red-14" class="btn-box"/>
        </q-card>

        <q-card class="image-card">
          <q-img src="https://cdn.bkmkitap.com/Data/EditorFiles/bkmkitap/uye-kayit-mobil-uygulamamizi-indirin.jpg" width="650px" />
        </q-card>
      </div>
    </q-component>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { usekayitStore } from 'src/stores/kayitStore';

const val = ref(false);
const cepno = ref('');
const ad = ref('');
const soyad = ref('');
const email = ref('');
const telefon = ref('');
const password1 = ref('');
const password2 = ref('');

const kayitStore = usekayitStore();

const signup = async () => {
  try {
    const payload = {
      cepno: cepno.value,
      ad: ad.value,
      soyad: soyad.value,
      email: email.value,
      telefon: telefon.value,
      password1: password1.value,
    };

    console.log('Signup form values:', payload);

    await kayitStore.signup(payload);
    console.log("Veri Firestore'a eklendi:", payload);
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata:', error);
  }
};
</script>

<style scoped lang="scss">

.q-ml-md {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 15px;
}

.text-h5 { 
  font-size: 2.75rem; /* Adjust the font size as needed */
  font-family: "hinted-subset-AvenirNextLTPro-Demi";
  margin-top: 50px;
  margin-left: 10px;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1042px; /* Set a max-width if you want */
  margin: -150px auto 0 auto; /* Center it */

}

.my-card{
  height: 650px;
  width: 400px;
  box-shadow: inset;
  
  margin-left: 100px;
  margin-top: 50px;
}

.ad-box{
  margin: 10px;
  width: 360px;
}
.soyad-box{
  margin: 10px;
  width: 360px;
}
.mail-box{
  margin: 10px;
  width: 360px;
}
.sifre-box{
  margin: 10px;
  width: 360px;
}
.check-box{
  margin: 10px;
}

.btn-box{
  margin-left: 150px;
  margin-top: 10px;
}

.image-card{
  height: 340px;
  width: 500px;
  margin-inline-start: 600px;
  margin-top: -600px;
  margin-bottom: 10px;
  border-radius: 10%;
}

.sing-up{
  background-color: #E6E6E6;
 
  
}

</style>
