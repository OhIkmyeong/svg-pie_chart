import { make_pie } from "./pie.js";

let dataPIE = [];
let INSPECT = 100;

/* 버튼 누르기 세팅 */
export function set_btnDrawPie(){
    const btn_drwawPie = document.getElementById('btn_drawPie');
    btn_drwawPie.addEventListener('click',on_click_btnDrawPie);

    const sect_ipt = document.getElementById('sect_ipt');
    sect_ipt.addEventListener('click',(e)=>{
        const target = e.target;

        //추가
        if(target.id == 'btn_add'){on_click_btnAdd();}

        if(target.classList.contains('btn_del')){
            del_article(target)
        }

    });
}//set_btnDrawPie

/* 그리기 버튼을 누르면 */
function on_click_btnDrawPie(){
    const ipt_num = document.getElementsByClassName('ipt-num');
    const ipt_color = document.getElementsByClassName('ipt-color');

    dataPIE = [];
    INSPECT = 100;
    Array.from(ipt_num).forEach((num,idx)=>{
        const obj = {val:undefined, color:undefined};
        obj.val = Number(num.value);
        obj.color = ipt_color[idx].value;
        
        INSPECT -= obj.val;
        if(INSPECT >= 0){ dataPIE.push(obj); }
    });

    make_pie(dataPIE);
}//on_click_btnDrawPie

/* 추가 버튼을 누르면 */
function on_click_btnAdd(){
    const sect_ipt = document.getElementById('sect_ipt');
    const btn_add = document.getElementById('btn_add');

    const len = String(sect_ipt.getElementsByTagName('ARTICLE').length + 1);
    const article = document.createElement('ARTICLE');
    article.innerHTML = 
    `<h6>차트 ${len.padStart(3,'0')}</h6>
    <label>
        <span>값</span>
        <input type="number" class="ipt-num" value="1"/>
    </label>
    <label>
        <span>색상</span>
        <input type="color" class="ipt-color" value="#000000"/>
    </label>
    <button class="btn_del"></button>`;

    sect_ipt.insertBefore(article,btn_add);
}//on_click_btnAdd

/* 삭제버튼 */
function del_article(target){
    const article = target.parentElement;
    const section = article.parentElement;
    section.removeChild(article);
}