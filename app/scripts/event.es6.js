chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.alarms.create('check-now', {
        when: Date.now() + 1000
    });

    chrome.alarms.create('check-interval', {
        periodInMinutes: 1
    });

    chrome.alarms.onAlarm.addListener(function ({ name }) {
        console.log(name);

        let title = 'Foobar';
        let url = 'http://example.org';

        return new Notification(`Task '${title}' completed!`, {
            body: `We found your phrase.\nPlease visit: ${url}`,
            icon: 'app/images/gear-64x64.png'
        });
    });
});
