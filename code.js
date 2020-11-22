$(document).ready(function() {
        $("input[name=qty1]").change(updateTotal);
        $("input[name=qty2]").change(updateTotal);
    $("input[name=grand]").change(updateTotal);

    function updateTotal() {


        // find out how many quantity of Learning jQuery is selected
        var quantity1 = parseInt($("#quantity1").val());

        var price = 39.99;
        var total1 = quantity1*price;

        // update the quantity span with the number1
        $("#number1").text(`${total1.toFixed(2)}`);


        // find out how many quantity of jQuery Donation is selected
        var quantity2 = parseInt($("#quantity2").val());

        var price2 = 14.99;
        var total2 = quantity2*price2;

        // update the quantity span with the number2
        $("#number2").text(`${total2.toFixed(2)}`);

        // find out the Grand Total
        var grandTotal= total1+total2;

        // update the quantity span with the number3
        $("#number3").text(`${grandTotal.toFixed(2)}`);
        
    }
});