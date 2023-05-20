# STAGE_1: Budowanie obrazu
FROM node:18-alpine as build

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie plików zależności
COPY package*.json ./

# Instalacja zależności
RUN npm ci --production

# Skopiowanie plików aplikacji
COPY server.js ./

# STAGE_2: Obraz docelowy
FROM node:18-alpine

# Utworzenie użytkownika niestandardowego
RUN addgroup -S app && adduser -S app -G app

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie plików z etapu budowania
COPY --from=build /app ./

# Deklaracja portu aplikacji w kontenerze
EXPOSE 3000

# Zmiana właściciela plików
RUN chown -R app:app /app

# Zmiana użytkownika
USER app

# Deklaracja sposobu uruchomienia
CMD ["node", "server.js"]
