class player{
    constructor(){
        var heightMain = document.getElementById("player")
        heightMain.style.height = screen.height + "px";
        if(screen.width<500){
            heightMain.style.width = screen.width + "px";

        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-550 + "px";

    }
}
onload = new player(); 

// calas buttons

class audio_player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        
        this.isPlayed;

        this.play_pause_button.addEventListener("click", ()=>{
            this.play_pause();

        });
        

        this.names_radio =[];
         this.names_radio[0]="fame fm";
          this.names_radio[1]="Dlta fm";
           this.names_radio[2]="momantcarlo fm";
            this.names_radio[3]="RadioShabab Syria";
              this.names_radio[4]="Souryana Syria";
              // this.names_radio[]="";
               // this.names_radio[]="";
                // this.names_radio[]="";
                 // this.names_radio[]="";
                  // this.names_radio[]="";
                   // this.names_radio[]="";
                    // this.names_radio[]="";
                     // this.names_radio[]="";
                      // this.names_radio[]="";
                       // this.names_radio[]="";
                        // this.names_radio[]="";
                         // this.names_radio[]="";
                          // this.names_radio[]="";
                           // this.names_radio[]="";
                            // this.names_radio[]="";
                             // this.names_radio[]="";
                              // this.names_radio[]="";
                               // this.names_radio[]="";
                                // this.names_radio[]="";
                                 // this.names_radio[]="";
                                  // this.names_radio[]="";
                                   // this.names_radio[]="";
                                    // this.names_radio[]="";
                                     // this.names_radio[]="";
                                      // this.names_radio[]="";
                                       // this.names_radio[]="";
                                        // this.names_radio[]="";
                                         // this.names_radio[]="";
                                          // this.names_radio[]="";
                                           // this.names_radio[]="";
                                            // this.names_radio[]="";
                                             // this.names_radio[]="";
                                              // this.names_radio[]="";
                                               // this.names_radio[]="";
                                                // this.names_radio[]="";
                                                 // this.names_radio[]="";
                                                  // this.names_radio[]="";
                                                   // this.names_radio[]="";
                                                    // this.names_radio[]="";
                                                     // this.names_radio[]="";
                                                      // this.names_radio[]="";
                                                       // this.names_radio[]="";
                                                        // this.names_radio[]="";
                                                         // this.names_radio[]="";
                                                          // this.names_radio[]="";
                                                           // this.names_radio[]="";
 
        this.source_radio =[];
        this.source_radio[0]= "http://stream.famefm.com:8200/fame.mp3";
        this.source_radio[1]= "http://s45.myradiostream.com:18408/;stream.mp3";
        this.source_radio[2]= "http://icepe1.infomaniak.ch/mc-doualiya.mp3";
        this.source_radio[3]= "http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.source_radio[4]= "http://radioliveb.rtv.gov.sy:8008/RadioSouryana";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= ""; 
        // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= ""; 
        // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
        // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= ""; 
        // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        // this.source_radio[]= "";
         // this.source_radio[]= "";
        
        
        
        this.server = 0;
        this.setResorsurce();

        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.source_radio.length-1){
                ++this.server;
                this.isPlayed = false;
            }else{
                this.server=0;
            }
            localStorage.setItem("SAVE_POSITTION", this.server);
            this.setResorsurce();
           
        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isPlayed = false;
                
            }else{
                this.server=this.source_radio.length-1;
            }
            localStorage.setItem("SAVE_POSITTION", this.server);
            this.setResorsurce();
        });
        

    }
    setResorsurce(){
        if(localStorage.getItem("SAVE_POSITTION")!=null){
            this.server= localStorage.getItem("SAVE_POSITTION");
        }
        this.audio_file.src =  this.source_radio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause()
    }

    
    play_pause(){
        if(this.isPlayed == false){
            this.play_pause_button.src = "../img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;

        }else{
            this.play_pause_button.src = "../img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }

    }
}
onload = new audio_player();