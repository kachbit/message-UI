// UI colors:
// accent 7f7f7f
// frontground 121415
// foreground 1c1e1f
class message {
    constructor(title, text, mods={size:1,css:"",accent:"#7f7f7f",innerHTML:"",container:document.body}) {
        this.title = title;
        this.text = text;
        this.mods = mods;
        this.container = mods.container ? mods.container :  document.body;
        this.accent = mods.accent ? mods.accent : "#7f7f7f";
        this.innerHTML = mods.innerHTML ? mods.innerHTML : "";
        this.css = mods.css ? mods.css : "";
        this.size = mods.size ? mods.size : 1;
        this.create();
    }
    getElement() {
        return this.messageBox;
    }
    create() {
        this.messageBox = document.createElement("div");
        this.messageBox.classList.add("preclass");
        this.messageBox.id = "box193022";
        this.messageBox.classList.add("message-"+this.size);
        this.messageBox.classList.add("message-"+this.accent);
        this.messageBox.innerHTML += `<div class='message-title'>`+this.title+"</div><hr>";
        this.messageBox.querySelector("hr").classList.add("hrpreclass");
        this.messageBox.innerHTML += `<div>`+this.text+this.innerHTML+"</div>";
        this.messageBox.style = style;
        this.outer = document.createElement("div");
        this.outer.classList.add("outer21");
        var style = document.createElement('style');
        this.outer.appendChild(this.messageBox);
        this.container.appendChild(this.outer);
        this.messageBox.delete = () => {
            if(window.loaded) {
                this.messageBox.className='zclass';
                setTimeout(() => {
                    this.outer.remove();
                    this.messageBox.remove();
                }, 1000);
            }


        }
        this.outer.onclick = (e) => {
            console.log(e.target)
            if(e.target.className == "message-title" || e.target == this.outer) {
                console.log(e.target.innerText);
                this.messageBox.delete();
            }
        }
        style.innerHTML = `
        .outer21 {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 1234;
            background: transparent;
        }
        .message-title {
            
            color:white;
            font-size:30px;
            user-select:none;
            
        }
        .zclass {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 99999;
            background: #121415;
            color: #999999;
            border-radius: 20px;
            border-color: ${this.accent};
            width:500px;
            height:200px;
            padding: 20px;
            scale(1);
            font-family: arial;
            visibility: visible !important;
            text-align: center;
            transform-origin: 0% 0%;
            opacity: 1;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            transform:scale(0.01);
            transition: all 1s ease;
        }
        .preclass {
            border-radius:0px;
            width:10px;
            transform:scale(0.05);
            color:transparent;
            transition: transform 2s ease, color 2s ease, border-radius 2s ease,width 2s ease;
            ${this.css}
        }
        .hrpreclass {
            width:1px;
            transition:width 3s ease;
        }
        .hrclass {
            width:100%;
            border-color: ${this.accent};
            transition:width 3s ease;
        }
        .message1 { 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: scale(${this.size}) translate(-50%, -50%);
            z-index: 99999;
            background: #121415e0;
            backdrop-filter:blur(10px);
            color: #999999;
            border-radius: 20px;
            border-color: ${this.accent};
            width:500px;
            height:200px;
            padding: 20px;
            font-family: arial;
            visibility: visible !important;
            opacity: 1;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;            transition: transform 2s ease, color 2s ease, border-radius 2s ease,width 2s ease;
            text-align: center;
            transform-origin: 0% 0%;
            font-size:20px;
            ${this.css}
        }
        `;
        window.loaded = false;
        this.container.appendChild(style);
        setTimeout(() => {
            this.messageBox.classList =  "message1";
            this.messageBox.querySelector("hr").classList = ("hrclass");
            setTimeout(() => {
                this.messageBox.querySelector(".message-title").setAttribute("onclick", "this.parentNode.delete()")
                window.loaded = true;
            }, 3000);
        }, 50);
  
    }
    close() {
        this.messageBox.delete();
    }
}