document.getElementById('downloadResume').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'JaishreeSaraswat_Resume5-31.pdf'; // Replace with the path to your resume file
    link.download = 'Jaishree_Saraswat_Resume.pdf'; // The name of the file after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});