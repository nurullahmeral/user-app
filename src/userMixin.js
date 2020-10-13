import {mapGetters} from "vuex";
import axios from "axios";
export const userMixin = {

  data(){
      return {
        usersList : ["Monitör","Klavye","Hard disk","Şişe"],
        satirBosMu : true,
        satirSayisi : 0,
        copyValue : "nrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \nnrllhmrl@gmail.com Nurullah Meral 1996-05-28 \n",
        copyValue2 : "",
        copyChange : [],
        selectedBrases : "( )",
        oldBrases : " ",
        userList : [],
        userxList : [],
        userSplitList : [],
        createState : false,
        emails : [],
        greenList : [],
        blackList : [],
        emailState : 1,
        baslangicState : 0
        // eventState : event,

      }
  },
  methots : {

  },

  computed : {
    ...mapGetters({
      getUserCopyList : "getUserCopyList"
      // diğer get leri tanımlayabiliriz
    }),
    backChangeValue(){

      this.copyValue = this.getCopyValueStr;
      console.log(this.getCopyValueStr);
      this.$store.commit("resetCreateList",[]);
      this.$router.push("/")
    },

    listeCevir (){

      this.usersList = this.copyValue.split('\n');
      this.usersList.forEach(element => {
        if(this.oldBrases == "( )"){
          this.userList.push(element.split(" "));
        }else{
          this.userList.push(element.split(this.oldBrases));
        }




      });

      this.satirSayisi = this.usersList.length; // satır sayısı alınır
      this.userList.forEach((element,index) => {


        this.userSplitList = [];
        let toplamX = 0;
        element.forEach((element,index) => { // Boş satırlar tesbit edilir
              toplamX += element.length;


              if (element.length>0) {
                this.userSplitList.push(element); // Ayraçlrı kullabilmek içn boşluklar silindi
              }



              if (toplamX==0) {
                this.satirBosMu = false;
              }else{
                this.satirBosMu = true;
              }
              //   // Boşlukları silnmiş iç içe array


        });


        if (this.satirBosMu ==true && this.createState ==true) { // Boş satırların eklenmesi engellendi

          if(this.satirSayisi<10000){ // 10000 den küçükse listeye eklenmesi engellenir
            this.$store.commit("addUserCreateList",element);
          }

          if(this.getUserCreateList.length > 0){
            if(this.satirSayisi<10000){ // 10000 den fazlaysa diğer sayfaya geçlmesi engellenir
              this.$router.push("/users")
            }else
            {
              this.$alert("10000'den fazla satır olamaz !!!");

            }

          }else{
            this.$alert("Yapıştırma alanı boş bırakılamaz!!!");

          }

        }
        // if (this.satirBosMu ==false && this.createState ==true) {
        //   alert("Yapıştırma alanı boş bırakılamaz!!!")
        // }


        this.$store.commit("addUserCopyList",this.userSplitList);
      });



      this.getUserCopyList.forEach(element => {
        element.forEach(element => {

          let toplam = 0;
          element.forEach(element => {
            toplam++;
            if(toplam<5){ // en fazla satırda 4 olmasını sağlar
              if(this.selectedBrases == "( )"){
                this.copyValue2 += element+" ";
              }else{
                this.copyValue2 += element+this.selectedBrases;
              }

            }


          });

        });
        this.copyValue2 += "\n"
      });
      this.copyValue = this.copyValue2;

      this.$store.commit("copyValueChanges",this.copyValue);

    },
    ValidatesEmail(){

      this.getUserCreateList.forEach(element => {
        this.emails.push(element.email)
      });


      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      for (var i = 0; i < this.emails.length; i++) {

          if( this.emails[i] === "" || !regex.test(this.emails[i].replace(/\s/g, ""))){
              this.blackList.push(this.emails[i] );
          }
          else{
            this.greenList.push(this.emails[i] );
          }
      }
      this.emailState = this.greenList.length/(this.blackList.length+this.greenList.length);
      if(this.emailState==1){
        let uri = "https://jsonplaceholder.typicode.com/posts";
        axios.post(uri, this.greenList).then(response => {
          this.$alert("Kayıt yapıldı");
          this.$store.commit("resetCreateList",[]);


        });

      }else if(this.emailState<0.5){
        this.$alert("Yüklenen email adreslerinin yarısından fazlasında hata bulunmaktadır.Düzenleme yapıp yeniden yükleme yapabilirsiniz");

      }else
      {
        this.$confirm("Yüklenen email adreslerinin "+this.blackList.length+" tanesinde hata bulunmaktadır.Hatalı olanları yüklemeden devam etmek istiyor musunuz?").then(() => {
          let uri = "https://jsonplaceholder.typicode.com/posts";
          axios.post(uri, this.greenList).then(response => {
            this.$alert("Kayıt yapıldı");
            this.$store.commit("resetCreateList",[]);
            // this.$router.push({ name: "fee" });

          });


        });

      }



    }






  }
}
