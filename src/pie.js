let last_rot = 0;
const strokeWidth = 18;
const info_circle = {
    cx : 20, cy : 20 , r : strokeWidth / 2
}

export function make_pie(dataPIE){
    const g = document.getElementById('g-pie');
    reset_group_and_rotation(g);
    const {cx,cy,r} = info_circle;

    dataPIE.forEach((obj) =>{
        const circle = 
        `<circle 
            cx="${cx}" cy="${cy}" r="${r}" 
            fill = "transparent"
            stroke = ${obj.color}
            stroke-width="${strokeWidth}"
            stroke-dasharray="${get_dasharray(obj.val)}"
            style = "
            opacity:0; 
            transform-origin:center center; 
            transform:rotate(${last_rot}deg)"
        />`;
        g.innerHTML += circle;
        last_rot += 3.6 * obj.val;
    });

    const all_circle = Array.from(g.children);
    all_circle.forEach((circle,idx)=>{
        const total_len = Math.ceil(circle.getTotalLength());
        circle.setAttribute('stroke-dashoffset', total_len);
        circle.dataset.dash = total_len;
        circle.style.animationDelay = `${idx * .12}s`;
        circle.classList.add('on');
    });
}//make_pie

/* 파이 그리기 */
function get_dasharray(val){
    const twoPieR = Math.PI * strokeWidth * 2;
    const result = `${(val / 2) * twoPieR / 100} ${twoPieR}` 
    return result;
}//get_dasharray

function reset_group_and_rotation(g){
    g.innerHTML = '';
    last_rot = 0;
}//reset_group_and_rotation