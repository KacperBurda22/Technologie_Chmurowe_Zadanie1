const http = require('http');
const moment = require('moment-timezone');
const author = 'Kacper Burda';
const port = 3000;

// Funkcja zwracająca informację z adresem IP klienta i datą w jego strefie czasowej
function getInfo(req) {
  const ip = req.socket.remoteAddress; // Pobranie adresu IP klienta
  const zone = moment.tz.guess(); // Poranie strefy czasowej na podstawie adresu IP
  const datetime = moment().tz(zone).format('DD MMM YYYY HH:mm:ss Z'); // Data i godzina na podstawie strefy czasowej

  const html = `
    <html>
      <head>
        <title>Zadanie 1</title>
      </head>
      <body>
        <h2>Adres IP: ${ip}</h2>
        <h3>Data i godzina: ${datetime}</h3>
      </body>
    </html>
  `;

  return html;
}

// Tworzenie serwera HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); // Ustawienie nagłówka odpowiedzi HTTP
  res.end(getInfo(req)); // Wyświetlenie informacji o dacie, godzinie i adresie IP
});

// Uruchamianie serwera na ustalonym porcie
server.listen(port, () => {
  console.log(`Server started: ${new Date()}`);
  console.log(`Created by: ${author}`);
  console.log(`Server is listening on the port: ${port}`);
});