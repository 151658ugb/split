function splitText() {
    const inputText = document.getElementById('inputText').value;
    const delimiter = document.getElementById('delimiter').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (inputText && delimiter) {
        const splitArray = inputText.split(delimiter);
        splitArray.forEach(item => {
            const span = document.createElement('span');
            span.textContent = item;
            outputDiv.appendChild(span);
        });
    } else {
        outputDiv.innerHTML = 'Please enter both text and delimiter.';
    }
}