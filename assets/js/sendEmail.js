document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form submit theo cách mặc định
    
    // Lấy dữ liệu từ form
    let name = document.getElementById('name-field').value;
    let email = document.getElementById('email-field').value;
    let subject = document.getElementById('subject-field').value;
    let message = document.getElementById('message-field').value;
    
    // Tạo templateParams để gửi dữ liệu
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
    
    // Gửi email qua EmailJS
    emailjs.send('service_k4upttr', 'template_1aommdq', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
      }, function(error) {
        console.log('FAILED...', error);
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.sent-message').style.display = 'none';
      });
    
    // Hiện loading trong khi đợi phản hồi
    document.querySelector('.loading').style.display = 'block';
    
    // Ẩn loading sau khi có phản hồi
    setTimeout(function() {
      document.querySelector('.loading').style.display = 'none';
    }, 2000);
  });
  