var list = [{
    "id": "0",
    "caption": "秒味课堂1",
    "time": "2015-12-01",
    "desc": "JS拖拽的进一步学习,移动与拉伸JS拖拽的进一步练习"
}, {
    "id": "1",
    "caption": "秒味课堂2",
    "time": "2015-12-02",
    "desc": "JS拖拽的进一步学习,移动与拉伸JS拖拽的进一步练习"
}, {
    "id": "2",
    "caption": "秒味课堂3",
    "time": "2015-12-03",
    "desc": "JS拖拽的进一步学习,移动与拉伸JS拖拽的进一步练习"
}, {
    "id": "3",
    "caption": "秒味课堂4",
    "time": "2015-12-04",
    "desc": "JS拖拽的进一步学习,移动与拉伸JS拖拽的进一步练习"
}, {
    "id": "4",
    "caption": "秒味课堂5",
    "time": "2015-12-05",
    "desc": "JS拖拽的进一步学习,移动与拉伸JS拖拽的进一步练习"
}]


 // <li>
 //                <input  class="select-btn" type="checkbox">
 //                <div class="mail-content">
 //                    <span>秒味课堂1</span>
 //                    <span class="right">2015-12-30</span>
 //                </div>
 //                <p>JS拖拽的进一步学习,移动与拉伸JS拖拽的进一步练习</p>
 //            </li>

$(function() {

    function dataIndex() {
        var len = list.length;
        console.log(len)
        var liHtml="";
        for(i=0;i<len;i++){
            liHtml+='<li data-id="'+list[i].id+'"><input class="select-btn" type="checkbox"><div class="mail-content"><span>'
            +list[i].caption+'</span><span class="right">'+list[i].time+'</span></div><p>'+list[i].desc+'</p></li>'

        }
        $("#dataList").html(liHtml);




    }
    dataIndex();

})
