// Begin Hire_me
function showRegistrationForm() {
  // Hiển thị form đăng ký khi nút "Hire Me" được click
  document.getElementById("registration-form").style.display = "block";
}

function submitRegistration() {
  // Xử lý đăng ký ở đây (có thể gửi dữ liệu đăng ký qua Ajax, hoặc thực hiện các bước khác)
  alert("Đăng ký thành công!");
}
//   End Hire_me

// Iframe
const iFrameBox = document.getElementById('iframe');
  const loginBox = document.querySelector(".login-box");
  const openIframeButton = document.getElementById('openIframeButton');
  const closeIframeButton = document.getElementById('closeIframeButton');

  const showIframe = () => {
    iFrameBox.style.display = "block";
    loginBox.style.display = "block";
  };

  const closeIframe = () => {
    iFrameBox.style.display = "none";
    loginBox.style.display = "none";
  };

  openIframeButton.addEventListener("click", showIframe);
  closeIframeButton.addEventListener("click", closeIframe);


  
  button.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template);
    const togglePasswordIcons = document.querySelectorAll(".show_2");

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});


  