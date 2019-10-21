// 移动端REM屏幕适配
(function (win, doc, undefined) {

    //初始化
    win.init = function () {
        setViewport();
        setHtmlFontSize();
        win.onresize = function () {
            setHtmlFontSize();
            win.location.reload();
        }
    }

    // 视窗比例设置
    function setViewport() {
        var pixclPatio = 1 / window.devicePixelRatio,
            metaHtml = '<meta name="viewport" content="width=device-width,initial-scale=' + pixclPatio +
            ',minimum-scale=' + pixclPatio + ',maximum-scale=' + pixclPatio + ',user-scalable=no" />';
        doc.write(metaHtml);
    }

    // 根字体大小动态设置
    function setHtmlFontSize(fontSize) {
        fontSize = fontSize || 16;
        var html = doc.getElementsByTagName('html')[0],
            pageWidth = html.getBoundingClientRect().width;
        html.style.fontSize = pageWidth / fontSize + 'px';
    }

}(window, document))