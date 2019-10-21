// 移动端REM屏幕适配
(function (win, doc, undefined) {

    // 构造模型
    var ItemModule = function (fsize) {
        this.fsize = fsize || 16;
        // 视窗比例设置
        this.setViewport = function () {
            var pixclPatio = 1 / window.devicePixelRatio,
                metaHtml = '<meta name="viewport" content="width=device-width,initial-scale=' +
                pixclPatio +
                ',minimum-scale=' + pixclPatio + ',maximum-scale=' + pixclPatio +
                ',user-scalable=no" />';
            doc.write(metaHtml);
        }
        // 根字体大小动态设置
        this.setHtmlFontSize = function () {
            var html = doc.getElementsByTagName('html')[0],
                pageWidth = html.getBoundingClientRect().width;
            html.style.fontSize = pageWidth / this.fsize + 'px';
        }
    }

    //初始化
    ItemModule.prototype.init = function () {
        var _self = this;
        _self.setViewport();
        _self.setHtmlFontSize();
        win.onresize = function () {
            _self.setHtmlFontSize();
            win.location.reload();
        }
    }
    
    win.ItemModule = ItemModule;

}(window, document))