const listWord = ["George_magdy", "web_developer", "Programmer", "Instructor"];
let i = 0;
let j = 0;

function fun() {
    if (j < listWord.length) {
        if (i < listWord[j].length) {
            NameAuthor.innerText += listWord[j].charAt(i);
            i++; // Increment `i` first to avoid missing the next character
        } else {
            NameAuthor.innerText = ""; // Clear the text once the word is fully displayed
            j++; // Move to the next word
            i = 0; // Reset `i` for the next word
        }
    } else {
        j = 0; // Reset `j` to loop back to the first word
    }
}

setInterval(() => {
    fun();
}, 500);
