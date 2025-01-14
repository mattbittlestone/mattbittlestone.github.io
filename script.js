// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addSectorBtn = document.getElementById('add-sector-btn');
    const dialogOverlay = document.getElementById('dialog-overlay');
    const submitBtn = document.getElementById('submit-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const sectorNameInput = document.getElementById('sector-name-input');
    const errorMessage = document.getElementById('error-message');
    const sectorList = document.getElementById('sector-list');
    const canvas = document.getElementById('canvas');

    let sectors = [];

    // Show dialog when Add Sector button is clicked
    addSectorBtn.addEventListener('click', () => {
        sectorNameInput.value = '';
        errorMessage.textContent = '';
        dialogOverlay.classList.remove('hidden');
        sectorNameInput.focus();
    });

    // Hide dialog when Cancel button is clicked
    cancelBtn.addEventListener('click', () => {
        dialogOverlay.classList.add('hidden');
    });

    // Add sector when Submit button is clicked
    submitBtn.addEventListener('click', () => {
        const sectorName = sectorNameInput.value.trim();
        if (sectorName === '') {
            errorMessage.textContent = 'Sector name cannot be empty.';
            return;
        }
        if (sectors.includes(sectorName)) {
            errorMessage.textContent = 'Sector name must be unique.';
            return;
        }

        addSector(sectorName);
        dialogOverlay.classList.add('hidden');
    });

    // Function to add a sector
    function addSector(name) {
        // Add to sectors array
        sectors.push(name);

        // Add to sector list in side panel
        const listItem = document.createElement('li');
        listItem.textContent = name;
        sectorList.appendChild(listItem);

        // Create frame on canvas
        const frame = document.createElement('div');
        frame.classList.add('frame');

        const frameTitle = document.createElement('div');
        frameTitle.classList.add('frame-title');
        frameTitle.textContent = name;

        frame.appendChild(frameTitle);
        canvas.appendChild(frame);
    }

    // Handle Enter key in input field
    sectorNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
});
