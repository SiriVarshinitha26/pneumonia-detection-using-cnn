document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputData = document.getElementById('inputData').value;

    const response = await fetch('/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
    });

    const result = await response.json();
    alert(result.message);
});