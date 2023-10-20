import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";

$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);
    $(window).on("kesz",(event)=>{
        let objPeldany = event.detail;
       // console.log(objPeldany);
       // console.log("Kész esemény");
       objPeldany.setHatterszin();
       TODOLIST2[objPeldany.index].kesz=true;
       console.log(TODOLIST2);
       szuloELEM.empty();
       new Megjelenit(TODOLIST2, szuloELEM);
    })
    $(window).on("megse",(event)=>{
        let objPeldany = event.detail;
       objPeldany.resetHatterszin();
       delete TODOLIST2[objPeldany.index].kesz;
       console.log(TODOLIST2);
       szuloELEM.empty();
       new Megjelenit(TODOLIST2, szuloELEM);
    })
    $(window).on("torles",(event)=>{
        let objPeldany = event.detail;
       // console.log(objPeldany);
       // console.log("Törlés esemény");
       TODOLIST2.splice(objPeldany.index, 1);
       console.log(TODOLIST2);
       szuloELEM.empty();
       new Megjelenit(TODOLIST2, szuloELEM);
    })
});
