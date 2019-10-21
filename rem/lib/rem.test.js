// 废弃版本
(function (win, doc, undefined) {
    var pixclPatio = 1 / window.devicePixelRatio;
    doc.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixclPatio +
        ',minimum-scale=' + pixclPatio + ',maximum-scale=' + pixclPatio + ',user-scalable=no" />');
    var html = doc.getElementsByTagName('html')[0],
        pageWidth = html.getBoundingClientRect().width;
    html.style.fontSize = pageWidth / 16 + 'px';
}(window, document))