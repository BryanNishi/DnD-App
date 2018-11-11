// Dice Roll Function
var rolls = [];

$(".diceRoll").on("click", function () {
    var multi = $("#multi").val();

    for (i = 0; i < multi; i++) {
        var num = parseInt(this.value);
        var result = Math.floor((Math.random() * num) + 1);
        $("#rolls").append("D" + this.value + "= " + result + "<br/>")
        rolls.push(result);
        const add = (a, b) => a + b
        const sum = rolls.reduce(add)
        $("#rollTotal").html(sum);
    }
})

$("#clear").on("click", function () {
    rolls = [];
    $("#rolls").html("");
    $("#rollTotal").html("");
    $('#multi option').prop('selected', function () {
        return this.defaultSelected;
    });
})