"use strict";

enter = function enter(val) {
  document.getElementById("InputBox").value += val;
};

ans = function ans() {
  var x = document.getElementById("InputBox").value;
  if (x === "") alert("Please enter some value");else {
    try {
      if (x.includes("%", x.length - 1) && x.length > 1) {
        x = x.slice(0, -1);
        var a = eval(x);
        a = a / 100;
        document.getElementById("InputBox").value = a;
        return;
      }

      var y = eval(x);
      document.getElementById("InputBox").value = y;
    } catch (error) {
      alert("Your expression is wrong");
    }
  }
};

backs = function backs() {
  document.getElementById("InputBox").value = document.getElementById("InputBox").value.slice(0, -1);
};

cls = function cls() {
  document.getElementById("InputBox").value = " ";
};
//# sourceMappingURL=index.dev.js.map
