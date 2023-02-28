function car_info(manufecturer, model) {
    var Option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Option[_i - 2] = arguments[_i];
    }
    var car = {
        manufecturer: manufecturer,
        model: model
    };
    Option.forEach(function (option) {
        var key = Object.keys(option)[0];
        var value = option[key];
        car[key] = value;
    });
    return car;
}
var car1 = car_info("audi", "E350", { color: "black" }, { tyre: true });
console.log(car1);
