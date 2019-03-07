//rem布局
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                // 这里的数字 取决于设计稿的宽度
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);

//获取地址栏参数
function GetURL(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

//设置cooke
function setCookie(name, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
};

//获取cookie
function getCookie(name) {
    var reg = RegExp(name + '=([^;]+)');
    var arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
};

//删除cookie
function delCookie(name) {
    setCookie(name, null, -1);
};
//用于flex定位下的input，失去焦点布局被顶上去
$("input,select").blur(function () {
    setTimeout(() => {
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
    }, 100);
});
