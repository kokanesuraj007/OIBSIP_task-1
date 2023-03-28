enter = (val) => {
    document.getElementById("InputBox").value += val;
};

ans = () => {
    let x = document.getElementById("InputBox").value;

    if (x === "") alert("Please enter some value");
    else {
        try {
            if (x.includes("%", x.length - 1) && x.length > 1) {
                x = x.slice(0, -1);
                let a = eval(x);
                a = a / 100;
                document.getElementById("InputBox").value = a;
                return;
            }
            let y = eval(x);
            document.getElementById("InputBox").value = y;
        } catch (error) {
            alert("Your expression is wrong");

        }
    }

};


backs = () => {
    document.getElementById("InputBox").value = document
        .getElementById("InputBox")
        .value.slice(0, -1);
}

cls = () => {
    document.getElementById("InputBox").value = " ";
}