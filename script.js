function createDummyFile() {
    var fileSize = document.getElementById('fileSizeInput').value;
    var fileSizeUnit = document.getElementById('fileSizeUnit').value;

    if (fileSizeUnit === 'kilobytes') {
        fileSize *= 1024;
    } else if (fileSizeUnit === 'megabytes') {
        fileSize *= 1024 * 1024;
    } else if (fileSizeUnit === 'gigabytes') {
        fileSize *= 1024 * 1024 * 1024;
    }

    var dummyData = new Uint8Array(fileSize);

    var blob = new Blob([dummyData]);

    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dummy.txt';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}