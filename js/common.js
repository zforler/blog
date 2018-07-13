
/**
 * 根据主题图片设置主题颜色
 */
function setThemeColor(){
    // let src = 'img/bg_3.jpg';
    let colorThief = new ColorThief();
    // let img = document.createElement('img');
    let img = document.querySelector('.top-img');
    img.src = img.src;
    // img.width = 300;
    // img.height = 300;
    img.onload = function(){
        let color = colorThief.getColor(img);
        color = color.join(',');
        let colors = colorThief.getPalette(img,10,255);
        console.log(colors);
        colors.forEach((item,index)=>{
            document.body.style.setProperty(`--theme-color-${index+1}`,  `rgb(${item.join(',')})`);
            document.body.style.setProperty(`--theme-color-${index+1}-50`,  `rgba(${item.join(',')},0.5)`);
        });
        let rcolor = [255-colors[0][0],255-colors[0][1],255-colors[0][2]];
        document.body.style.setProperty('--theme-color-1-30',  `rgba(${colors[0].join(',')},0.3)`);
        document.body.style.setProperty('--theme-rcolor-1',  `rgb(${rcolor.join(',')})`);
        document.body.style.setProperty('--bgimg',  `url(../${src})`);
    };

}