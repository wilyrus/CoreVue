const registerServiceWorker = async function() {
    if ('serviceWorker' in navigator) {
        let refreshing = false;
        try {
            const reg = await navigator.serviceWorker.register('/sw.js', { scope: '../dist/' });

            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;

                if (newWorker) {
                    newWorker.addEventListener('statechange', () => {
                        switch (newWorker.state) {
                            case 'installed':
                                if (navigator.serviceWorker.controller) {
                                    let notification = document.getElementById('notification ');
                                    if (notification) {
                                        notification.className = 'show';
                                    }
                                }

                                break;
                        }
                    });
                }
            });

            navigator.serviceWorker.addEventListener('controllerchange', function() {
                if (refreshing) return;
                window.location.reload();
                refreshing = true;
            });
        } catch (e) {
            console.log('Registration failed with ' + e);
        }
    }
};

export default { registerServiceWorker };
