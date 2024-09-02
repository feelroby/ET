// SECTION 3

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const subjectList = this.nextElementSibling;
            
            // Toggle class to open/close the list
            if (subjectList.classList.contains('open')) {
                subjectList.classList.remove('open');
            } else {
                subjectList.classList.add('open');
            }
        });
    });
});


