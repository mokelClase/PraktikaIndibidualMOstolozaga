Klima Proiektua

Hau proiektu bat da, non hiri baten eguraldia erakusten duen aplikazio bat garatzen dugun. OpenWeather APIa erabiltzen du, eta Chart.js eta jsPDF liburutegiak erabiltzen dira grafikoak eta PDFak sortzeko.
Instalazioa

Proiektua martxan jartzeko, lehenik eta behin, beharrezkoa da Chart.js eta jsPDF liburutegiak zure HTMLn sartzea. Horretarako, jarraitu urrats hauek:

    Lehenik eta behin, clonatu edo deskargatu proiektua zure makina lokalera.

git clone <proiektuaren-git-repository-URL>

Behin deskargatuta, HTML fitxategian Chart.js eta jsPDF liburutegiak sartzeko, jarraitu kode hau:

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

Proiektuan zure API Key-a sartu behar duzu OpenWeather APIa erabiltzeko. Hona hemen horretarako pausoak:

    Igo OpenWeather eta erregistratu.
    API Key-a lortu eta proiektuan API_KEY aldagaiaren balio gisa gehitu.

HTML fitxategian eta JavaScript fitxategian egon daitezkeen grafoak eta PDFa erakusteko beharrezkoa da Canvas elementuak egotea:

    <canvas id="barChart" width="400" height="200"></canvas>
    <canvas id="lineChart" width="400" height="200"></canvas>
    <canvas id="pieChart" width="400" height="200"></canvas>
    <button id="downloadPdf">PDF-a jaitsi</button>

Erabilera

Proiektua erabilteko, jarraitu urrats hauek:

    Proiektua zure nabigatzailean ireki.
    Hiri bat hautatu edo kodean dagoen CITY aldagaia aldatu, eta aplikazioa automatikoki eguraldiaren datuak lortuko ditu.
    Grafoak erakutsiko dira eta PDF bat sortzeko aukera izango duzu. Hori egiteko, "PDF-a jaitsi" botoia klikatu.

Kodearen azalpena

Kodeak hurrengo funtzionalitateak ditu:

    Eguraldia lortzea: OpenWeather APIa erabiltzen du eguraldiaren datuak lortzeko.
    Grafikoak sortzea: Chart.js liburutegia erabiltzen du hiru grafiko mota sortzeko:
        Barra grafikoa: Tenperatura, hezetasuna eta presioa erakusten ditu.
        Lerro grafikoa: Tenperatura minimo eta maximoa erakusten ditu.
        Pizza grafikoa: Hezetasuna eta airea lehorra erakusten ditu.
    PDF-a sortzea: jsPDF liburutegia erabiltzen du eguraldiaren informazioa PDF batean jasotzeko.

Egilea

    Izena: Mikel Ostolozaga
    Proiektua: Eguraldi Aplikazioa
    Data: 2025