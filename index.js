function downloadFile() {
    const fileUrl = './IMG/files/CV.pdf';
    const fileName = 'CV Лукьянов Илья frontend-разработчик.pdf';
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}