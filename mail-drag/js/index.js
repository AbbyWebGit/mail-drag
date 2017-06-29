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




$(function() {

    function dataIndex() {
        var len = list.length;
        // console.log(len)
        var liHtml = "";
        for (i = 0; i < len; i++) {
            liHtml += '<li data-id="' + list[i].id + '"><input class="select-btn" type="checkbox"><div class="mail-content"><span>' + list[i].caption + '</span><span class="right">' + list[i].time + '</span></div><p>' + list[i].desc + '</p></li>'

        }
        $("#dataList").html(liHtml);

    }

    dataIndex();

    //全选按钮
    var len = $("#dataList li").length;
    $("#all-select").on('click', function() {


        if ($(this).prop("checked") == true) {
            for (i = 0; i < len; i++) {
                $("#dataList li").eq(i).find("input").prop("checked", true);
            }
        } else {
            for (i = 0; i < len; i++) {
                $("#dataList li").eq(i).find("input").prop("checked", false);
            }
        }

    });
    //单选计数判断全选部分
    var n = 0;
    $("#dataList li input").on('change', function() {

        if ($(this).prop("checked") == true) {
            n++;
        } else {
            n--;
        };
        console.log(n);
        if (n == len) {
            console.log(len);
            $("#all-select").prop("checked", true);
        } else {
            $("#all-select").prop("checked", false);
        };
    });
    

    $("#delete").on('click', function() {
        for (i = 0; i < len; i++) {
            var checkedId = $("#dataList li").eq(i).find("input").prop("checked");
            if (checkedId == true) {
                list.splice(i, 1);
                //var deleteId = $("#dataList li").eq(i).attr("data-id");             
                // for (j = 0; j < len;j++) {
                //     console.log(list[2].id)
                //     if (list[j].id == deleteId) {
                //     };

                // }

            };
        }
        dataIndex();

    });
})
