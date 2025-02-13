// Ziurtatu OpenWeather API gako egokia duzula
const API_KEY = "d6f733ccc0b1411787ced02b10d77145"; // Egin egiazko gakoarekin ordezkatu
const CITY = "Bilbao"; // Hiriaren izena aldatu nahi baduzu, hemen sartu

// Grafikoak marrazteko funtzioak
function drawBarChart(temp, hum, pres) {
    const ctx = document.getElementById("barChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Tenperatura (°C)", "Hezetasuna (%)", "Presioa (hPa)"],
            datasets: [{
                label: "Gaur egungo baldintzak",
                data: [temp, hum, pres],
                backgroundColor: ["red", "blue", "green"],
            }]
        }
    });
}

function drawLineChart(tempMin, tempMax) {
    const ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Minimoa", "Maximoa"],
            datasets: [{
                label: "Tenperatura",
                data: [tempMin, tempMax],
                borderColor: "orange",
                fill: false
            }]
        }
    });
}

function drawPieChart(humedad) {
    const ctx = document.getElementById("pieChart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Hezetasuna (%)", "Aire Lehorra (%)"],
            datasets: [{
                data: [humedad, 100 - humedad],
                backgroundColor: ["blue", "lightgray"]
            }]
        }
    });
}

// API-tik datuak eskuratzeko funtzio nagusia
async function getWeatherData() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`
        );
        if (!response.ok) {
            throw new Error("Ez da posible izan eguraldia eskuratzea");
        }
        const data = await response.json();
        console.log(data); // Datuak kontsolan ikusteko

        // Beharrezko datuak ateratzen ditugu
        const temperatura = data.main.temp;
        const humedad = data.main.humidity;
        const presion = data.main.pressure;
        const tempMin = data.main.temp_min;
        const tempMax = data.main.temp_max;

        // Grafikoak marraztu
        drawBarChart(temperatura, humedad, presion);
        drawLineChart(tempMin, tempMax);
        drawPieChart(humedad);

        // PDF sortzeko ekintza gehitu
        document.getElementById("downloadPdf").addEventListener("click", () => {
            generatePdf(temperatura, humedad, presion, tempMin, tempMax);
        });

    } catch (error) {
        console.error("Datuak eskuratzean errorea:", error);
    }
}

// PDF-a sortzeko funtzioa
function generatePdf(temp, hum, pres, tempMin, tempMax) {
    const { jsPDF } = window.jspdf;  // Ziurtatu jsPDF behar bezala kargatu dela

    const doc = new jsPDF();

    // Izenburua gehitu
    doc.setFontSize(22);
    doc.text("Eguraldi Txostena", 70, 30);

    // Datuak gehitu
    doc.setFontSize(14);
    doc.text(`Hiria: ${CITY}`, 20, 70);
    doc.text(`Tenperatura: ${temp}°C`, 20, 80);
    doc.text(`Hezetasuna: ${hum}%`, 20, 90);
    doc.text(`Presioa: ${pres} hPa`, 20, 100);
    doc.text(`Tenperatura Minimoa: ${tempMin}°C`, 20, 110);
    doc.text(`Tenperatura Maximoa: ${tempMax}°C`, 20, 120);

    // PDF-a deskargatu
    doc.save(`Eguraldi_Txostena_${CITY}.pdf`);
}

// Datuak eskuratzeko eta grafikoak marrazteko funtzioa deitzen dugu
getWeatherData();
