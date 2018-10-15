$(function(){
    let ue = UE.getEditor('editor');
    ue.addListener( 'ready', function( editor ) {
        articleSend(ue);
        articleSave(ue);
    } );


});


/**
 * 文章发表
 */
function articleSend(editor){
    $('#article-send').click(function(){
        let articleInfo = getArticleInfo(editor);
        return;
        $.ajax({
            url:'http://localhost/article',
            type:"POST",
            data: articleInfo
        }).done((data)=>{
            console.log(data)
        })
    });
}

/**
 * 文章保存
 */
function articleSave(){
    $('#article-save').click(function(){
        console.log('save')
        let articleInfo = getArticleInfo(editor);
        articleInfo.status = 1;

        $.ajax({
            url:'localhost/article',
            type:"POST",
            headers:{
                "content-type":"application/json charset=utf-8",
            },
            data:articleInfo
        }).done((data)=>{
            console.log(data)
        })
    });
}

/**
 * 获取文章信息
 */
function getArticleInfo(editor){
    let content = editor.getContent();
    console.log(content);
    content = '<p><img src="http://localhost/picture/1.jpg" title="bdf207ecbad045f9ba58e7861cec121d.jpg" alt="2832d7cc6376436ece898a37816b741c - 副本.jpg"/><img src="http://localhost/picture/bdf207ecbad045f9444861cec121d.jpg" title="bdf207ecbad045f9ba58e7861cec121d.jpg" alt="2832d7cc6376436ece898a37816b741c - 副本.jpg"/>' +
        '<img src="http://localhost/picture/2.jpg" title="bdf207ecbad045f9ba58e7861cec121d.jpg" alt="2832d7cc6376436ece898a37816b741c - 副本.jpg"/></p>'
    console.log(content)
    // let reg = /<img src="http.*\/(.*?)" title=.*?\/>/g;
    reg = /<img src=".*?picture\/(.*?)".*?\/>/g;
        let res = reg.exec(content);

    let img = [];
    console.log(res[1])
    res = reg.exec(content);
    console.log(res[1])
    console.log(img);
    while( res = reg.exec(content)){
        console.log(res[1]);
    }



    return {
        content : editor.getContent(),
        keyword : $("#article-keyword").val(),
        type : $("#article-type").val(),
        reviewswitch : $("#article-comment").val(),
        img:[1,23,1],
        articlePrivate: $("#article-private").val()
    }
}