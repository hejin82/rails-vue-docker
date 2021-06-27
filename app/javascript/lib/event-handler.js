const EventHandler = {
    trigger(element, event, args) {
        if (typeof event !== 'string' || !element) {
            return null;
        }

        const bubbles = true;
        const defaultPrevented = false;
        let evt = null;

        evt = new CustomEvent(event, {
            bubbles,
            cancelable: true,
        });

        // merge custom information in our event
        if (typeof args !== 'undefined') {
            Object.keys(args).forEach((key) => {
                Object.defineProperty(evt, key, {
                    get() {
                        return args[key];
                    },
                });
            });
        }

        if (defaultPrevented) {
            evt.preventDefault();
        }

        element.dispatchEvent(evt);

        return evt;
    },
};

export default EventHandler;
