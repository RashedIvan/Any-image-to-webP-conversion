document.getElementById('imageInput').addEventListener('change', handleImage, false);

function handleImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert to WebP
        const webpDataUrl = canvas.toDataURL('image/webp');
        console.log('WebP Data URL:', webpDataUrl); // Debugging line to ensure WebP conversion is happening

        // Create download link
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.style.display = 'block';
        downloadButton.href = webpDataUrl;
        downloadButton.download = 'converted.webp';
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
