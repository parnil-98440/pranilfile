
function generateQRCode() {
    // Get input values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const sex = document.getElementById("sex").value;
    const rollno = document.getElementById("rollno").value;
    
    // Combine input data
    const data = `Name: ${name}, Age: ${age}, Sex: ${sex}, Roll No: ${rollno}`;
    
    // Clear any previous QR code
    document.getElementById("qrcode").innerHTML = "";
  
    // Generate new QR code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: data,
      width: 128,
      height: 128,
    });
  }
  