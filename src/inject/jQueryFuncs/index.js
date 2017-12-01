const queueName = 'buttonQueue';
const queueHolder = $(document);
const queueButton = $('#execute-queue');

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

        console.log('From DOM: toggleModal event triggered');
        setTimeout(function () {
            next();
        }, 1000);
    });

    if (!modalShouldBeHidden) {
        queueHolder.queue(queueName, function (next) {
            const event = new Event('queued1');

            document.dispatchEvent(event);

            console.log('From DOM: queued1 event triggered');
            setTimeout(function () {
                next();
            }, 1000);
        });

        queueHolder.queue(queueName, function (next) {
            const event = new Event('queued2');

            document.dispatchEvent(event);

            console.log('From DOM: queued2 event triggered');
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
    console.log('From DOM: Button clicked!');
});
