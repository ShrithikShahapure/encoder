const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const convertButton = document.getElementById('convert-button');
const downloadButton = document.getElementById('download-button');

// Drag and drop functionality
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(event) {
    const files = event.dataTransfer.files;
    handleFiles(files);
}

// File input functionality
fileInput.addEventListener('change', handleFileInput, false);

function handleFileInput(event) {
    const files = event.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    // Handle file processing
    // This is where you can display file info in the pop-out boxes or any other processing

    // Show the convert button
    convertButton.style.display = 'block';
}

// Convert button functionality
convertButton.addEventListener('click', handleConvert, false);

function handleConvert() {
    // Simulate API call and processing
    setTimeout(() => {
        // Show download button
        downloadButton.style.display = 'block';
    }, 2000); // Simulating a 2-second process time
}

// Download button functionality
downloadButton.addEventListener('click', handleDownload, false);

function handleDownload() {
    // Simulate download or redirect to the API endpoint
    alert('Download initiated'); // Replace this with actual download logic
}
