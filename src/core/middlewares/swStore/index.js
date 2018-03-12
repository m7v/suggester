export const sendMessageToSW = function(msg) {
    return new Promise((resolve, reject) => {
        // Create a Message Channel
        const msgChan = new MessageChannel();

        // Handler for recieving message reply from service worker
        msgChan.port1.onmessage = function(event) {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };

        if (navigator.serviceWorker.controller) {
            // Send message to service worker along with port for reply
            navigator.serviceWorker.controller.postMessage(msg, [ msgChan.port2 ]);
        }
    });
};

export const swStore = (store) => next => action => {
    if ('serviceWorker' in navigator) {
        const state = store.getState();
        sendMessageToSW(JSON.stringify(state));
    }

    return next(action);
};
