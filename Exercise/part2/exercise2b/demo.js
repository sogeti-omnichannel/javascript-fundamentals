$(document).ready(function(){
    var counter = 0;

    $("#save").click(function(){
        var newitem = $("#templates .item").clone();

        newitem.attr('data-id', counter++);

        newitem.find(".name").text($("#name").val());
        newitem.find(".description").text($("#description").val());
        newitem.find(".grade").text($("#grade").val());

        $("#output").append(newitem);

        $("#name").val('');
        $("#description").val('');
        $("#grade").val('');

        $(".delete").click(function(){
            $(this).parent().remove();
        });
    });
    $("#reset").click(function(){
        $(".item").remove();
    });
});