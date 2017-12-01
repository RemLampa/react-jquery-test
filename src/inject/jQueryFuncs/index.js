const queueName = 'buttonQueue';
const queueHolder = $(document);
const queueButton = $('#execute-queue');

const consoleStyle = 'color: green';

let modalShouldBeHidden = true;

queueButton.click(function (event) {
    event.preventDefault();

    modalShouldBeHidden = !modalShouldBeHidden;

    queueHolder.queue(queueName, function (next) {
        queueButton.prop('disabled', true);
        next();
    });

    queueHolder.queue(queueName, function (next) {
        const event = new Event('toggleModal');

        document.dispatchEvent(event);

        console.log('%c From DOM: toggleModal event triggered', consoleStyle);
        setTimeout(function () {
            next();
        }, 1000);
    });

    if (!modalShouldBeHidden) {
        queueHolder.queue(queueName, function (next) {
            const event = new Event('queued1');

            document.dispatchEvent(event);

            console.log('%c From DOM: queued1 event triggered', consoleStyle);
            setTimeout(function () {
                next();
            }, 1000);
        });

        queueHolder.queue(queueName, function (next) {
            const event = new Event('queued2');

            document.dispatchEvent(event);

            console.log('%c From DOM: queued2 event triggered', consoleStyle);
            setTimeout(function () {
                next();
            }, 1000);
        });
    }

    queueHolder.queue(queueName, function (next) {
        queueButton.prop('disabled', false);
        next();
    });

    queueHolder.dequeue(queueName);
});

document.addEventListener('toggleModal', function () {
    console.log('%c From DOM: Button clicked!', consoleStyle);
});
