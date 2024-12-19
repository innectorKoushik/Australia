document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);
    formData.append('signature', document.getElementById('signature').files[0]);

    try {
        const response = await fetch('http://127.0.0.1:8000/upload/', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('links').innerHTML = `
                <h3>Download your photo</h3>
                <a href="${data.download_your_photo}" target="_blank">Download Photo</a><br><br>
                <h3>Download your signature</h3>
                <a href="${data.download_your_signature}" target="_blank">Download Signature</a>
            `;
        } else {
            document.getElementById('links').innerText = 'Error: ' + data.detail;
        }
    } catch (error) {
        document.getElementById('links').innerText = 'Error: ' + error.message;
    }
});
