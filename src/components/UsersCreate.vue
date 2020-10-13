<template>
  <div class="flex-container">
    <div style="flex-grow: 1"></div>
    <div style="flex-grow: 8">
      <div class="card">
         <div class="row">
          <label >Ayraç seç</label>
          <select :value="oldBrases" @change='changeBrases(oldBrases,$event)'>
            <option :selected='item == "( )"' v-for="item in brases">{{item}}</option>
          </select>
        </div>
        <br><br>
        <div class="textarea-wrapper">
          <textarea id="copyValue" rows="15" cols="100" class="form-control" v-model="copyValue"></textarea>
        </div>
        <div class="row">
          <button @click="createList">İleri</button>
        </div>
        <br><br>

      </div>


      </div>
    <div style="flex-grow: 1"></div>

  </div>

</template>
<script>
import {mapGetters} from "vuex";
import {userMixin} from "../userMixin"
export default {
  props : ["value"],
  mixins : [userMixin],
  data(){
    return {

      brases : [",","|",";","( )"],



    }
  },
  methods : {
    changeBrases(oldBrases,event) {
      this.eventState = event;
      this.selectedBrases = event.target.value;
      this.$store.commit("resetList",[]);
      this.userList = [];
      this.usersList = [];
      this.copyValue2 =""
      this.oldBrases = oldBrases;
      this.listeCevir
      this.oldBrases =  event.target.value;
      this.baslangicState = 1;

    },

    createList(){
      if(this.baslangicState == 1){
        this.createState = true;
        this.changeBrases(this.oldBrases, this.eventState);
      }else{
        this.$alert("İçerik girin ve ayraç seçin !!!")
      }







    },
    listedenCevir(){

      this.copyValue.join("");
      this.copyValue = [];
    }

  },
  computed : {
    ...mapGetters({
        getUserCreateList :"getUserCreateList",

        // diğer get leri tanımlayabiliriz
    })

  },created() {


  }


}
</script>
<style scoped>

  textarea {
    background: url(http://i.imgur.com/2cOaJ.png);
    background-attachment: local;
    background-repeat: no-repeat;
    padding-left: 35px;
    padding-top: 10px;
    border-color: #ccc;
    font-size: 13px;
    line-height: 16px;
  }

  .textarea-wrapper {
    display: inline-block;
    background-image: linear-gradient(#F1F1F1 50%, #F9F9F9 50%);
    background-size: 100% 32px;
    background-position: left 10px;
  }
  input[type=text], select {
  width: 15%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }
  button{
    float: right;
  }
  .card{
    position : relative;
    width: 80%;
    margin : 20px auto;
    background-color : #FFF;
    -webkit-box-shadow: 10px 10px 93px 0px;
    text-align: center;
  }

</style>
