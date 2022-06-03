(function($){
    $(document).ready (function() {
        $("#changerightpane").click(function() {
            if($(".admincontactsrightcontainertagsetter").css("display") == "block"){
                $(".admincontactsrightcontainertagsetter").css("display", "none");
                $(".admincontactsrightcontainer").css("display","block");
                $("#changerightpane").html("Tag Selector");
            }
            else {
                $(".admincontactsrightcontainertagsetter").css("display", "block");
                $(".admincontactsrightcontainer").css("display","none");
                $("#changerightpane").html("Voter Data");
            }
        });
    });
    $((function(){
        $("h4.myaccordian").click(function() {
            if ($(this).next("div.form-type-checkboxes").find("div.form-checkboxes").css("display") === "block") {
                $(this).next().find(".form-checkboxes").toggle();
            }
            else {
                $("h4.myaccordian").next().find(".form-checkboxes").css("display", "none");
                $(this).next().find(".form-checkboxes").toggle();
            }
        });
    }));
    $((function(){
        $("h4.myaccordian + div.form-type-checkboxes input").click(function() {
            var var2 = $(this).attr("value");
            if ($(this).prop("checked")) {
                var var1 = $(this).parents("div").eq(2).prev().html();
                var var3 = $(this).next().html();
                numrows = $(".sttable tbody > tr").length;
                var nextrow = "even";
                if (numrows % 2 === 0) {
                    nextrow = "odd";
                }
                var markup = "<tr class=" + nextrow + "><td>" + var2 + "</td><td>" + var1 + "</td><td>" + var3 + "</td></tr>";
                $(".sttable tbody").append(markup);
            }
            else {
                $(".sttable").find("td").each(function() {
                    if ( $(this).html() === var2) {
                        $(this).parent("tr").remove();
                        var nextnewrow = "odd";
                        $(".sttable").find("tr").each(function() {
                            $(this).attr("class", nextnewrow);
                            if (nextnewrow === "even") {
                                nextnewrow = "odd";
                            }
                            else {
                                nextnewrow = "even";
                            }
                        });
                        return false;
                    }
                });
            }
        });

    }));
    $((function(){
        $("#submittagsselectform").click(function() {
            $("#changerightpane").html("Tag Setter");
            $("#admincontacts-tagselectorform input.form-submit").trigger("mousedown");

        });
    }));
})(jQuery);