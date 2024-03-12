const slider = document.getElementById('slider');
const result = document.getElementById('result');

function calculateSavings() {
    const capacity = slider.value;
    let savings;
    let solarModules;

    if (capacity === '1') {
        savings = 850;
        solarModules = 2;
    } else if (capacity === '2') {
        savings = 1400;
        solarModules = 3;
    } else {
        savings = 1750;
        solarModules = 3;
    }

    const savingsPerYear = savings * 0.4;

    result.textContent = `Jährliche Ersparnis: ${savingsPerYear}€ bei ${capacity} kW Mikrowechselrichter`;
    localStorage.setItem('savingsPerYear', savingsPerYear);
    localStorage.setItem('capacity', capacity);
}

slider.addEventListener('input', calculateSavings);
calculateSavings();

const savedSavingsPerYear = localStorage.getItem('savingsPerYear');
const savedCapacity = localStorage.getItem('capacity');

if (savedSavingsPerYear && savedCapacity) {
    result.textContent = `Zuletzt gespeicherte Ersparnis: ${savedSavingsPerYear}€ bei ${savedCapacity} kW Mikrowechselrichter`;
}