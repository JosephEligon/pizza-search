var $;

//From Foursquare web-app
var client_id = "ST2QYTOPYFYR2MDKLPXXEI0RMNALI2RF3EAKB0VHMFQ5PY0F"
var client_secret = "L4GECER0GABQFFCYDAEJ3O01040KXVAN0L0WE0PBLBO0TE1J"
// if(document.getElementById("inpt1").value === "" 
// || document.getElementById("inpt2").value === ""){
$(document).ready(function(){
    $("#btn1").click(function(){
        $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=" + document.getElementById("inpt1").value +
        "&query=" + document.getElementById("inpt2").value,
        function(data) {
            console.log(data);
            //Phone numbers
            var phone = data.response
            for(var i=0;i<30;i++){
            var temp3 = phone.venues[i];
            var temp4 = temp3.contact;
            temp4 = temp4.formattedPhone;
            $("#phonenums").append(temp4 +" ")
            $("#phonenums").append("<br />")
            }
            //Venue names
            var venue = data.response;
            for(var i = 0; i<30; i++){
            var temp = venue.venues[i];
            var temp2 = temp.name;
            $("#venueid").append(temp2+"");
            $("#venueid").append("<br />");
            }
        });
    });
    $("#btn2").click(function(){
        $("#phonenums").remove();
        $("#venueid").remove();
    })
});

//$("#results").append()
// Client ID
// ST2QYTOPYFYR2MDKLPXXEI0RMNALI2RF3EAKB0VHMFQ5PY0F

// Client Secret
// L4GECER0GABQFFCYDAEJ3O01040KXVAN0L0WE0PBLBO0TE1J