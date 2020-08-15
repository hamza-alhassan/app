class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "http://stream.famefm.com:8200/fame.mp3";
        this.audios[1] = "http://s45.myradiostream.com:18408/;stream.mp3";
        this.audios[2] = "http://icepe1.infomaniak.ch/mc-doualiya.mp3";
        this.audios[3] = "http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.audios[4] = "http://radioliveb.rtv.gov.sy:8008/RadioSouryana";
        // this.audios[5] = "";
        // this.audios[6] = "";
    
        this.names = [];
        this.names[0] = "famefm";
        this.names[1] = "Dlta fm";
        this.names[2] = "momantcarlo fm";
        this.names[3] = "RadioShabab Syria";
        this.names[4] = "Souryana Syria";
        // this.names[5] = "";
        // this.names[6] = "";
        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();