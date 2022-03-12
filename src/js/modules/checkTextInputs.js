const checkTextInputs = (selector) => {
    const checkTextInputs = document.querySelectorAll(selector);

    checkTextInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;