$(function(){
    setThemeColor();
});

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
        console.log(color);
        document.body.style.setProperty('--theme-color',  `rgb(${color})`);
        document.body.style.setProperty('--bgimg',  `url(../${src})`);
    };

}

