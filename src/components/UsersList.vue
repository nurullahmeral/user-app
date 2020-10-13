<template>
  <div class="flex-container">
    <div style="flex-grow: 1"></div>
    <div style="flex-grow: 8" >
      <div class="row">
        <button style="float: right" @click="save">Kaydet</button><br><br><br>
      </div>
      <!-- <div class="row">
        <select v-model="email" @change='onChange1($event)'>
            <option :selected='item == "Email"' v-for="item in change">{{item}}</option>
        </select>
        <select v-model="isim" @change='onChange2($event)'>
            <option :selected='item == "İsim"' v-for="item in change">{{item}}</option>
        </select>
        <select v-model="soyisim" @change='onChange3($event)'>
            <option :selected='item == "Soyisim"' v-for="item in change">{{item}}</option>
        </select>
        <select v-model="birthDay" @change='onChange4($event)'>
            <option :selected='item == "Doğum Tarihi"' v-for="item in change">{{item}}</option>
        </select>

      </div> -->

      <div class="row">
        <table id="customers">
          <thead>
            <tr>
              <th>
                <select v-model="email" @change='onChange1($event)'>
                  <option :selected='item == "Email"' v-for="item in change">{{item}}</option>
                </select>
               </th>
              <th>
                <select v-model="isim" @change='onChange2($event)'>
                  <option :selected='item == "İsim"' v-for="item in change">{{item}}</option>
               </select>
              </th>
              <th>
                <select v-model="soyisim" @change='onChange3($event)'>
                  <option :selected='item == "Soyisim"' v-for="item in change">{{item}}</option>
                </select>
              </th>
              <th>
                 <select v-model="birthDay" @change='onChange4($event)'>
                  <option :selected='item == "Doğum Tarihi"' v-for="item in change">{{item}}</option>
              </select>
              </th>
            </tr>
            <tr>
              <th>{{degisken1}}</th>
              <th>{{degisken2}}</th>
              <th>{{degisken3}}</th>
              <th>{{degisken4}}</th>
            </tr>

          </thead>
          <tbody>
            <tr v-for="(item, index) in getUserCreateList">

              <td v-if="tdDegisken1== 1">{{item.email}}</td>
              <td v-if="tdDegisken1== 2">{{item.firstName}}</td>
              <td v-if="tdDegisken1== 3">{{item.lastName}}</td>
              <td v-if="tdDegisken1== 4">{{item.date}}</td>
              <td v-if="tdDegisken2== 1">{{item.email}}</td>
              <td v-if="tdDegisken2== 2">{{item.firstName}}</td>
              <td v-if="tdDegisken2== 3">{{item.lastName}}</td>
              <td v-if="tdDegisken2== 4">{{item.date}}</td>
              <td v-if="tdDegisken3== 1">{{item.email}}</td>
              <td v-if="tdDegisken3== 2">{{item.firstName}}</td>
              <td v-if="tdDegisken3== 3">{{item.lastName}}</td>
              <td v-if="tdDegisken3== 4">{{item.date}}</td>
              <td v-if="tdDegisken4== 1">{{item.email}}</td>
              <td v-if="tdDegisken4== 2">{{item.firstName}}</td>
              <td v-if="tdDegisken4== 3">{{item.lastName}}</td>
              <td v-if="tdDegisken4== 4">{{item.date}}</td>

            </tr>

          </tbody>

        </table>
      </div>
      <hr>
      <br>
      <div class="row">

        <button style="float: left" @click="back">Geri</button>
      </div>


    </div>
    <div style="flex-grow: 1"></div>
  </div>

</template>
<script>
import {userMixin} from "../userMixin"
import {mapGetters} from "vuex";
export default {
  mixins : [userMixin],
  data(){
    return {

      change : ["Email","Ad","Soyad","Doğum Tarihi"],
      email : "Email",
      isim : "Ad",
      soyisim : "Soyad",
      birthDay : "Doğum Tarihi",
      degisken1 :"Email",
      degisken2 :"Ad",
      degisken3 :"Soyad",
      degisken4 :"Doğum Tarihi",
      tdDegisken1 :1,
      tdDegisken2 :2,
      tdDegisken3 :3,
      tdDegisken4 :4,

    }
  },
  methods : {
    onChange1(event) {
        if(event.target.value =="Email"){

          this.degisken1 = "Email";
          this.tdDegisken1 = 1;
        }
        else if(event.target.value =="Ad"){
          this.degisken1 = "Ad";
          this.tdDegisken1 = 2;


        }
        else if(event.target.value =="Soyad"){
          this.degisken1 = "Soyad";
          this.tdDegisken1 = 3;

        }
        else{
          this.degisken1 = "Doğum Tarihi";
          this.tdDegisken1 = 4;
        }

    },
    onChange2(event) {
         if(event.target.value =="Email"){

          this.degisken2 = "Email";
          this.tdDegisken2 = 1;
        }
        else if(event.target.value =="Ad"){
          this.degisken2 = "Ad";
          this.tdDegisken2 = 2;


        }
        else if(event.target.value =="Soyad"){
          this.degisken2 = "Soyad";
          this.tdDegisken2 = 3;

        }
        else{
          this.degisken2 = "Doğum Tarihi";
          this.tdDegisken2 = 4;
        }
    },
    onChange3(event) {
         if(event.target.value =="Email"){

          this.degisken3 = "Email";
          this.tdDegisken3 = 1;
        }
        else if(event.target.value =="Ad"){
          this.degisken3 = "Ad";
          this.tdDegisken3 = 2;


        }
        else if(event.target.value =="Soyad"){
          this.degisken3 = "Soyad";
          this.tdDegisken3 = 3;

        }
        else{
          this.degisken3 = "Doğum Tarihi";
          this.tdDegisken3 = 4;
        }
    },
    onChange4(event) {
         if(event.target.value =="Email"){

          this.degisken4 = "Email";
          this.tdDegisken4 = 1;
        }
        else if(event.target.value =="Ad"){
          this.degisken4 = "Ad";
          this.tdDegisken4 = 2;


        }
        else if(event.target.value =="Soyad"){
          this.degisken4 = "Soyad";
          this.tdDegisken4 = 3;

        }
        else{
          this.degisken4 = "Doğum Tarihi";
          this.tdDegisken4 = 4;
        }
    },

    back(){
     this.backChangeValue;
    },
    save(){
      this.ValidatesEmail;


    }
  },
  computed : {
    ...mapGetters({
        getUserCreateList :"getUserCreateList",
        // diğer get leri tanımlayabiliriz
    }),

  }
}
</script>
<style scoped>
  #customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even){background-color: #f2f2f2;}

  #customers tr:hover {background-color: #ddd;}

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
  input[type=text], select {
    width: 90%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }


</style>
