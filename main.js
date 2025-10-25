$(function() {
  const path = location.pathname.split("/").pop() || "index.html";
  $(".nav__link").each(function() {
    if ($(this).attr("href") === path) $(this).addClass("is-active");
  });


  const $toTop = $(".to-top");
  $(window).on("scroll", () => {
    if (window.scrollY > 400) $toTop.addClass("show");
    else $toTop.removeClass("show");
  });
  $toTop.on("click", () => $("html, body").animate({ scrollTop: 0 }, 500));

 
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const ok = this.checkValidity();
    $(".form__msg").text(ok ? "Đã gửi" : "Vui lòng nhập đủ thông tin");
    if (ok) this.reset();
  });
});
/*chatbot*/
chatToggle.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    });

    closeChat.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    // Gửi tin nhắn
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const msg = chatInput.value.trim();
        if (msg) {
            const userMsg = document.createElement('p');
            userMsg.innerHTML = `<b>Bạn:</b> ${msg}`;
            chatMessages.appendChild(userMsg);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }