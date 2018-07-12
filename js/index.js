$(function(){
    hljs.initHighlightingOnLoad();
    setThemeColor();
});

/**
 * 根据主题图片设置主题颜色
 */
function setThemeColor(){
    let src = 'img/bg_9.jpg';
    let colorThief = new ColorThief();
    let img = document.createElement('img');
    img.src = src;
    img.width = 300;
    img.height = 300;
    img.onload = function(){
        let color = colorThief.getColor(img);
        color = color.join(',');
        let colors = colorThief.getPalette(img,10,255);
        console.log(colors);
        colors.forEach((item,index)=>{
            document.body.style.setProperty(`--theme-color-${index+1}`,  `rgb(${item.join(',')})`);
        });
        document.body.style.setProperty('--bgimg',  `url(../${src})`);
    };

}

