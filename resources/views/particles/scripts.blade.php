<script src="js/jquery.min.js"></script>
<script src="js/dropdown.js"></script>

<script>
    var aside = document.querySelector('.aside--left');
    var list = aside.querySelectorAll('.communities-item');
    var overlay = document.querySelector('.modal-overlay');
    var modal = document.querySelector('.modal-content--1');
    var close = modal.querySelector('.btn--modal-close')

    list.forEach(function (element) {
        element.addEventListener('click', function () {
            overlay.classList.add('modal-overlay--active');
            modal.classList.add('modal-content--active');
        })
    });

    overlay.addEventListener('click', function (event) {
        overlay.classList.remove('modal-overlay--active');
        modal.classList.remove('modal-content--active');
    });

    close.addEventListener('click', function (event) {
        overlay.classList.remove('modal-overlay--active');
        modal.classList.remove('modal-content--active');
    });

    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            if (modal.classList.contains('modal-content--active')) {
                modal.classList.remove('modal-content--active');
                overlay.classList.remove('modal-overlay--active');
            }
        }
    });
</script>