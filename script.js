$(document).ready(function() {
    // Smooth scroll for navigation links
    $('a.nav-link[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Handle project modal
    $('#projectModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const title = button.data('title');
        const description = button.data('description');

        const modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#modal-description').text(description);
    });

    // Handle form submission and success message
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Harap isi semua kolom.');
            return;
        }

        // Tampilkan pesan sukses
        const successMessage = $('#success-message');
        successMessage.text('Terima kasih! Pesan Anda telah terkirim.');
        successMessage.removeClass('d-none').hide().fadeIn(1000);

        // Reset form
        this.reset();

        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(function() {
            successMessage.fadeOut();
        }, 5000);

        // Di sini Anda bisa menambahkan kode untuk mengirim data ke server (misalnya dengan AJAX)
    });
});