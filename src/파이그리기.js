/* 파이 그리기 */
function draw_pie(pie,per){
    // console.log(last_rot);
    const strokeWidth = Number(pie.getAttribute('stroke-width'));
    const twoPieR = Math.PI * strokeWidth * 2;
    pie.setAttribute('stroke-dasharray', 
    `${(per / 2) * twoPieR / 100} ${twoPieR}`);
    
    pie.style.transform = `rotate(${last_rot}deg)`;
    last_rot += 3.6 * per;
}//draw_pie