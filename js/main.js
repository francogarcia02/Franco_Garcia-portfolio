function downloadPDF() {
  var file = new Blob([document.getElementById('pdf').innerHTML], {type: 'application/pdf'});
  var url = window.URL.createObjectURL(file);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'pdfs/FrancoGarcia-Curriculum.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

