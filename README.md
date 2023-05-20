Polecenie do budowania obrazu: 
    docker build -f Dockerfile -t zad1obraz .

Polecenie uruchamiajce kontener: 
    docker run -d --name zad1 -p 3000:3000 zad1obraz

Polecenie sprawdzenia informacji wygenerowanych przez server:
    docker logs -f zad1obraz

Polecenie sprawdzenia warstw zbudowanego obrazu:
    docker inspect zadanie1obraz | jq '.[].RootFS'

Polecenie sprawdzenia dzialania servera w terminalu : 
    curl -f http://localhost:3000/

Polecenie sprawdzenia rozmiaru obrazu: 
    docker images | grep zad1obraz

Polecenie sprawdzenia obrazu na podatnosci:
    docker scout cves zad1obraz