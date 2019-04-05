const messageDescription = document.getElementById('description')
const status = document.getElementById('complete')

$('#column1, #column2, #column3').sortable({
    connectWith: '.column',
    // helper: 'clone',
    // handle: ".portlet-header",
    // cancel: ".portlet-toggle",
    // start: function (event, ui) {
    //     ui.item.addClass("tilt");
    //     tilt_direction(ui.item);
    // },
    // update: function(event, ui) {
    //     // ui.item.removeClass("tilt");
    //     // tilt_direction(ui.item);
    //     // $("html").unbind("mousemove", ui.item.data("move_handler"));
    //     // ui.item.removeData("move_handler")
    //     if (this === )
    //     var target = event.target.id
    //     console.log(`receive at: ${target}`)
        
    // }
    receive: function(event, ui) {
        var target = event.target.id
        console.log(`receive at: ${target}`)
        var task_id = $(ui.item).attr('task-id')
        var complete = false
        switch (target) {
            case "column1": var status = 'To do'; break;
            case "column2": var status = 'Progress'; break;
            case "column3": var complete = true; var status = 'Done'; break;
        }
        $.ajax({
            url: '/tasks/' + task_id,
            method: 'PATCH',
            data: {
                complete: complete,
                status: status
            }
        }).done((res) => {
            window.location.href = '/tasks'
        })
    }
})

function tilt_direction(item) {
    var left_pos = item.position().left
    // console.log(left_pos)
    var move_handler = function(e) {
        if (e.pageX >= left_pos) {
            console.log('moved right')
            item.addClass("right");
            item.removeClass("left");
        } else {
            console.log('moved left')
            item.addClass("left");
            item.removeClass("right");
        }
        left_pos = e.pageX
    };

    $("html").bind("mousemove", move_handler);
    item.data("move_handler", move_handler);
}

$(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-header")
    .addClass("ui-widget-header ui-corner-all")
    .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

$(".portlet-toggle").click( function () {
    var icon = $(this);
    icon.toggleClass("ui-icon-minusthich ui-icon-plusthick");
    icon.closest(".portlet").find(".portlet-content").toggle();
})
