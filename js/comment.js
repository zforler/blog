class Comment{

    constructor(params={}){
        this.target  = params.target;
        this._operateEvent();
    }

    /**
     * 加载文章评论数据
     * @private
     */
    _loadComments(){
        fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        }).then(response => response.json()) // parses response to JSON
    }

    /**
     * 创建评论列表
     * @param json
     * @private
     */
    _createElement(json){

    }

    _operateEvent(){
        document.querySelector('#comment-con').onclick = function(e){
            let dataset = e.target.dataset,
                type = dataset.type,
                clickElement = e.target,
            target = dataset.target,
            textarea = dataset.textarea;

            let targetElementObj = selector(target);
            console.log(e)
            //展开评论按钮
            if('review' === type){
                // $('#'+target).addClass('ar-commont-com-show');
                targetElementObj.className = 'ar-commont-com-show';
                clickElement.innerText = '收起';
                // selector(target).style.display = 'flex';
                dataset['type'] = 'sq';
            //收起评论按钮
            }else if('sq' === type){
                // $('#'+target).removeClass('ar-commont-com-show');
                targetElementObj.className = 'ar-commont-com';
                clickElement.innerText = '评论';
                dataset['type'] = 'review';
            //回复按钮
            }else if('hf' === type){
                targetElementObj.style.display = 'flex';
                selector(textarea).focus();
                let reviewId = dataset.reviewid;
                console.log(reviewId);
            //我也说一句
            }else if('wysyj' === type){
                targetElementObj.style.display = 'flex';
                selector(textarea).focus();
                let commentId = dataset.commentid;
                console.log(commentId);
            //发表
            }else if('fb' === type){

            }
        }
    }

    /**
     * 发表评论
     * @private
     */
    _sendComment(){

    }

    /**
     * 回复评论
     * @private
     */
    _sendReview(){

    }
}
