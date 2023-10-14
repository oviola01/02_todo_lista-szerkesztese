class MegjelenitSor {
    #adat = {}; //ez egy objektum
 
    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.index = index;
        this.#sor();

        /** eseménykezelők a kész és a törlés gombokhoz */
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.megseElem = this.sorElem.children("td").children(".megse");
        this.torolElem = this.sorElem.children("td").children(".torol");
        if(this.#adat.kesz){
            this.setHatterszin();
        };
      
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
            //this az maga a megfogott objektum
            //console.log(this); 
            this.#esemenyTrigger("kesz");
        });
        this.torolElem.on("click", () => {
            //console.log(this);
            this.#esemenyTrigger("torles");
        });
    }

    setHatterszin(){
        this.sorElem.css("background-color", "green");
    }

    #sor() {
        let txt = "";
        txt += "<tr>";
        for (const key in this.#adat) { //objektum összes kulcsán végigmegyek
            if(key!="kesz"){ //így a kesz kulcsot ki fogja hagyni, azt nem jeleníti meg
                txt += `<td>${this.#adat[key]}</td>`;
            }
          }
        txt += `<td><span class="kesz">✔️</span> <span class="megse">X</span> <span class="torol">🗑</span></td>`;
        txt += "</tr>";
        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev,{detail:this});
        window.dispatchEvent(e);
     }
}

export default MegjelenitSor;
