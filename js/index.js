$(function(){
    setThemeColor();
});

/**
 * 根据主题图片设置主题颜色
 */
function setThemeColor(){
    let src = 'img/b_2.jpg';
    let colorThief = new ColorThief();
    let img = document.createElement('img');
    img.src = src;
    img.width = '1000';
    img.height = '1000';
    img.onload = function(){
        let color = colorThief.getColor(img);
        color = color.join(',');
        document.body.style.setProperty('--theme-color',  `rgb(${color})`);
        document.body.style.setProperty('--bgimg',  `url(../${src})`);
    };

}

