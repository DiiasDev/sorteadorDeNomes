class CustomAlert {
    static show(message, type = 'info') {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.className = `modal-overlay modal-${type}`;
            
            const content = document.createElement('div');
            content.className = 'modal-content';
            
            const messageEl = document.createElement('div');
            messageEl.className = 'modal-message';
            messageEl.textContent = message;
            
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            
            progressContainer.appendChild(progressBar);
            
            const button = document.createElement('button');
            button.className = 'modal-button';
            button.textContent = 'OK';
            
            const closeModal = () => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                    resolve();
                }
            };
            
            button.addEventListener('click', closeModal);
            
            content.appendChild(messageEl);
            content.appendChild(progressContainer);
            content.appendChild(button);
            overlay.appendChild(content);
            document.body.appendChild(overlay);
            
            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 10);
            
            const autoCloseTimer = setTimeout(closeModal, 3000);
            
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    clearTimeout(autoCloseTimer);
                    closeModal();
                }
            });
            
            button.addEventListener('click', () => {
                clearTimeout(autoCloseTimer);
                closeModal();
            });
        });
    }
}

const alert = new CustomAlert()