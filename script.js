document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const message = `https://Hamza-ET.github.io/ET_Tutorial_webApp/`;

    fetch('https://api.telegram.org/bot<7173102809:AAFTsggdavbeS1xF3KM1PqHs1Xegvb0rDns>/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '-1002236654606',
            text: message,
            parse_mode: 'Markdown'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Note sent successfully!');
        } else {
            alert('Failed to send note.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the note.');
    });
});
