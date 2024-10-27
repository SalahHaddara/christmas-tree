var rows = parseInt(prompt("Enter the number of rows for the tree:"));
var result = "";

for (var i = 0; i < rows; i++) {
    var spaces = " ".repeat(rows - i - 1);
    var lines = "";

    if (i > 0) {
        lines = "<span class='line'>" + "|".repeat(2 * i - 1) + "</span>";
    }
    var starsWithLines = "<span class='star'>*</span>";
    if (i > 0) {
        starsWithLines += lines + "<span class='star'>*</span>";
    }
    result += spaces + starsWithLines + "<br>";
}

document.body.innerHTML = "<pre>" + result + "</pre>";

