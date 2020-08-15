class color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.select_color("color1")
            document.body.style.backgroundColor = "#186b4f";

        });
        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.select_color("color2")
            document.body.style.backgroundColor = "rgb(248, 244, 0)";

        });
        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.select_color("color3")
            document.body.style.backgroundColor = "rgb(0, 0, 0)";

        });
        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.select_color("color4")
            document.body.style.backgroundColor = "rgba(80,33,74)";
        });
    }
    select_color(color){
        if(color=="color1"){

        }

    }
}
onload = new color;