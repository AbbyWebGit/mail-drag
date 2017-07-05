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
        for (var i = 0; i < len; i++) {
            liHtml += '<li data-id="' + list[i].id + '"><input class="select-btn" type="checkbox"><div class="mail-content"><span>' + list[i].caption + '</span><span class="right">' + list[i].time + '</span></div><p>' + list[i].desc + '</p></li>'

        }
        $("#dataList").html(liHtml);

    }

    dataIndex();

    //全选按钮
    var n = 0;
    $("#all-select").on('click', function() {
        var len = $("#dataList li").length;

        if ($(this).prop("checked") == true) {
            for (var i = 0; i < len; i++) {
                $("#dataList li").eq(i).find("input").prop("checked", true);
            }
            n = len;
        } else {
            for (var i = 0; i < len; i++) {
                $("#dataList li").eq(i).find("input").prop("checked", false);
            }
            n = 0;
        }
        // console.log(n);
    });
    //单选计数判断全选部分

    $("#dataList ").on('change', 'li input', function() {
        var len = $("#dataList li").length;
        console.log(n);
        if ($(this).prop("checked") == true) {
            n++;
        } else {
            n--;
        };
        // console.log(n);
        if (n == len) {
            //console.log(len);
            $("#all-select").prop("checked", true);
        } else {
            $("#all-select").prop("checked", false);
        };
        //阻止冒泡事件
        $("#dataList li input").mousedown(function(e) {
            // e.stopPropagation();

        })
    });

    //删除按钮 数组方案
    $("#delete").on('click', function() {
        var len = $("#dataList li").length;
        var newArry = [];
        for (var i = 0; i < len; i++) {
            var checkedId = $("#dataList li").eq(i).find("input").prop("checked");
            if (checkedId == false) {
                newArry.push(list[i]);
            };

        }
        list = newArry;


        dataIndex();

    });






    //删除按钮  通过id找数组里面的值方案
    // $("#delete").on('click', function() {
    //     var len = $("#dataList li").length;
    //     var newArry = [];
    //     for (var i = 0; i < len; i++) {
    //         var checkedId = $("#dataList li").eq(i).find("input").prop("checked");
    //         if (checkedId == true) {
    //             var deleteId = $("#dataList li").eq(i).attr("data-id");
    //             for (var j = 0; j < list.length; j++) {
    //                 //console.log(list[2].id)
    //                 if (list[j].id == deleteId) {
    //                     list.splice(j, 1);
    //                 };

    //             }

    //         };

    //     }

    //     dataIndex();

    // });



    $("#dataList").on("mousedown", "li", function(e) {
        var X = e.clientX + 10;
        //console.log(e.clientX);
        // console.log(X);
        var Y = e.clientY + 10;
        if ($(this).find("input").prop("checked") == false) {
            return;
        };
        $("#mes").css({
            "display": "block",
            "position": "absolute",
            "left": X,
            "top": Y
        });

        $(document).mousemove(function(e) {
            var moveX = e.clientX + 10;
            var moveY = e.clientY + 10;

            $("#mes").css({

                "left": moveX,
                "top": moveY
            });
            //取消默认选中行为
            e.preventDefault();

        });
        $(document).mouseup(function(e) {
            $("#mes").css({
                "display": "none",

            });

        })



    })

})
