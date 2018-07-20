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

        $.ajax({
            url:'',
            data:articleInfo
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
            url:'',
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
    return {
        articleConent : editor.getContent(),
        articleKeyword : $("#article-keyword").val(),
        articleType : $("#article-type").val(),
        articleComment : $("#article-comment").val(),
        articlePrivate: $("#article-private").val()
    }
}