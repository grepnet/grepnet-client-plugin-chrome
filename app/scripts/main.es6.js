class Grepnet {
    constructor() {
        let data = { greeting: 'hello' };

        chrome.runtime.sendMessage(data, (response) => {
            console.log(response);
        });
    }
}

window.addEventListener('load', () => {
    let $btn = document.querySelector('.btn');

    $btn.addEventListener('click', function () {
        new Grepnet();
    });
});
