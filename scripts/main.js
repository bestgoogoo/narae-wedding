// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top - 350
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
    $(".navbar-toggler").click();
});


// 클립보드 복사 함수
function copyToClipboard(account) {
    // 스크립트로 텍스트 쓰는 곳 임시 만들고 삭제되도록 구성
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = account;
    textArea.select();
    document.execCommand('copy'); // js 처리 통한 ctrl + C
    document.body.removeChild(textArea); // 임시로 만들어진 textarea 를 body 에서 삭제
}

function copy(account) {
    copyToClipboard(account);
    // alert(account)

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      // toastr.success('계좌번호 복사');
      Command: toastr["success"]("계좌번호가 복사되었습니다.")
}

