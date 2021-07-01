export default function yeras() {
    let allButtons = Array.from(document.getElementById('years').children);
    allButtons = allButtons.filter((b) => (b.getAttribute('type') === 'button'));
    const exhibitions = Array.from(document.getElementById('exhibition-items').children);
    const allButton = document.getElementById('all');
    const yearButtons = allButtons.filter((item) => (item !== allButton));
    yearButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.add('font-medium');
            button.classList.remove('font-light');
            allButton.classList.remove('font-medium');
            allButton.classList.add('font-light');
            yearButtons.forEach((item) => {
                if (item !== button) {
                    item.classList.remove('font-medium');
                    item.classList.add('font-light');
                }
            })
            const target = button.getAttribute('data-target');
            exhibitions.forEach((exhibition) => {
                if (exhibition.getAttribute('data-year') === target) {
                    exhibition.classList.remove('hidden');
                } else {
                    exhibition.classList.add('hidden');
                }
            });
        });
    });
    allButton.addEventListener('click', (e) => {
        e.preventDefault();
        allButton.classList.add('font-medium');
        allButton.classList.remove('font-light');
        yearButtons.forEach((item) => {
            item.classList.remove('font-medium');
            item.classList.add('font-light');
        });
        exhibitions.forEach((exhibition) => {
            exhibition.classList.remove('hidden');
        });
    });
}
