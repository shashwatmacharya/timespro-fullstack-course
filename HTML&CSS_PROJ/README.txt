The following project is a static website, consisting of 4 webpages, with them all being responsive. 
The website is about a car reccomendation website. 
The first page is an introduction to the website.
The next 3 pages are of simililar format which display the Sedans, Hatchbacks & Suvs reccomended by the people running the website.
The site is created using HTML, CSS & Bootstrap.
Code:
Index page:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shashwat's picks</title>
    <link href="https://fonts.googleapis.com/css2?family=Explora&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Explora&family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@200&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header id="container">

        <div id="nav">
            <a href="./index.html">Home</a>
            <a href="./sedans.html">Sedans</a>
            <a href="./hatchbacks.html">Hatchbacks</a>
            <a href="./suvs.html">SUVs</a>
        </div>
        <h1>
            Shashwat's picks for the modern Petrolhead
        </h1>
    </header>

    <div class="content">
        <p id="introheading">
            An Introduction
        </p>

        <p id="introcontent">
            The modern day car selection can be very confusing to the new age car enthusiast.
            <br>
            <br>
            In times like these, the value of expert opinion can save one from years of shoddy ride quality,
            sub-standard amenities, poor mileage & can rescue one from spending thousands on service, repairs and
            insurance.
            <br>
            <br>
            <b>That's where we come in</b>
        </p>
    </div>
    <div class="information">
        <div>
            <img src="./images/swift dzire front cover.jpg" class="swift-img">
        </div>
        <div class="table-content">
            With the help of our team of experts (consisting of ex-car salesmen & factory floor quality engineers from
            many different companies), we provide to you our carefully curated selection of the best <a
                href="./sedans.html" target="_blank">Sedans</a>, <a href="./hatchbacks.html"
                target="_blank">Hatchbacks</a> & <a href="./suvs.html" target="_blank">SUVs</a> available in the market
            today.
        </div>

    </div>
    <footer class="social-footer">
        <div class="social-links">
            Visit Us: <br>
            <a href="#">Instagram</a><br>
            <a href="#">Facebook</a><br>
            <a href="#">Twitter</a>
        </div>
        <div class="newsletter-button">
            Our Newsletter informs you of the hottest pick-ups of the automotive world <br>
            <button type="button" class="btn btn-primary">Subscribe to our Newsletter</button>
        </div>
    </footer>
</body>

</html>

Sedans page:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sedans</title>
    <link href="https://fonts.googleapis.com/css2?family=Explora&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Explora&family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@200&display=swap" rel="stylesheet"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header id="container">

        <div id="nav">
            <a href="./index.html">Home</a>
            <a href="./sedans.html">Sedans</a>
            <a href="./hatchbacks.html">Hatchbacks</a>
            <a href="./suvs.html">SUVs</a>
        </div>
        <h1>
            Shashwat's picks for the modern Petrolhead
        </h1>
    </header>
    <div class="sedan_container">
        Sedans we recommend:
    </div>

    <div class="car-row-1">
        <div>
            <img src="./images/Sedan_Audi-A4.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Audi A4 2022<br>
                Power: 1998 CC 187.74 BHP <br>
                Price: ₹ 43.85 - 51.85 Lakh* 
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
        <div>
            <img src="./images/Sedan_audiA6.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Audi A6 2019 <br>
                Power: 1984 cc 241.3 bhp <br>
                price: ₹ 61.60 - 66.26 Lakh* 
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
        <div>
            <img src="./images/Sedan_honda_City.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Honda City 4th Generation <br>
                Power: 1497 CC 117.6 BHP <br>
                price: ₹ 9.50 - 10.00 Lakh* 
                </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
    </div>
    <div class="car-row-2">
        <div>
            <img src="./images/Sedan_Hyundai-Verna.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Hyundai Verna <br>
                Power: 998 CC 113.18 BHP <br>
                price: ₹ 9.64 - 15.72 Lakh* 
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
        <div>
            <img src="./images/Sedan_MSdzire.webp" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Maruti Suzuki Dzire VXi<br>
                Power: 1197 CC 76.43 BHP <br>
                price: ₹ 6.24 - 9.18 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
        <div>
            <img src="./images/Sedan_MS_CIAZ.jpeg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Maruti Suzuki Ciaz <br>
                Power: 1462 CC 103.25 BHP <br>
                price: ₹ 8.99 - 11.98 Lakh* 
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
    </div>
    <div class="car-row-3">
        <div>
            <img src="./images/Sedan_skoda_octavia.jpeg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Skoda Octavia <br>
                Power: 1984 CC 187.74 BHP <br>
                price: ₹ 27.35 - 30.45 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
        <div>
            <img src="./images/Sedan_skoda_superb.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Skoda Superb <br>
                Power: 1984 CC 187.74 BHP <br>
                price: ₹ 34.19 - 37.29 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
        <div>
            <img src="./images/Sedan_volkswagen-virtus.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Volkswagen Virtus <br>
                Power: 999 CC 113.98 BHP <br>
                price: ₹ 11.32 - 18.42 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit the official website</button>
        </div>
    </div>
    <footer class="social-footer">
        <div class="social-links">
            Visit Us: <br>
            <a href="#">Instagram</a><br>
            <a href="#">Facebook</a><br>
            <a href="#">Twitter</a>
        </div>
        <div class="newsletter-button">
            Our Newsletter informs you of the hottest, new pick-ups of the automotive world <br>
            <button type="button" class="btn btn-primary">Subscribe to our Newsletter</button>
        </div>
    </footer>
</body>

</html>

Hatchbacks page:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hatchbacks</title>
    <link href="https://fonts.googleapis.com/css2?family=Explora&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Explora&family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@200&display=swap" rel="stylesheet"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header id="container">

        <div id="nav">
            <a href="./index.html">Home</a>
            <a href="./sedans.html">Sedans</a>
            <a href="./hatchbacks.html">Hatchbacks</a>
            <a href="./suvs.html">SUVs</a>
        </div>
        <h1>
            Shashwat's picks for the modern Petrolhead
        </h1>
    </header>
    <div class="sedan_container">
        Hatchbacks we recommend:
    </div>

    <div class="car-row-1">
        <div>
            <img src="./images/Hatch_baleno.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Maruti Baleno <br>
                Power: 1197 CC 76.43 BHP<br>
                price: ₹ 6.49 - 9.71 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/Hatch_i20Asta.jpeg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Hyundai i20 Asta <br>
                Power: 998 cc 81.86 BHP <br>
                price: ₹ 10.84 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/Hatch_kwid.jpeg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Renault KWID<br>
                Power: 799 CC 53.26 BHP <br>
                price: ₹ 4.70 - 5.99 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
    </div>
    <div class="car-row-2">
        <div>
            <img src="./images/Hatch_Nios.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Hyundai Grand i10 Nios <br>
                Power: 1198 CC 68.05 BHP <br>
                price: ₹ 5.68 - 8.46 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/Hatch_Renault-Clio-V6.jpg" alt="cliov6" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Renault Clio V6 <br>
                Power: 255 BHP<br>
                price: ₹ 62,70,510.82
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/Hatch_swift.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Maruti Swift <br>
                Power: 1197 CC 76.43 BHP <br>
                price: ₹ 5.92 - 8.85 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
    </div>
    <div class="car-row-3">
        <div>
            <img src="./images/Hatch_Tata-Altroz.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: 2020 Tata Altroz XZ <br>
                Power: 1199 cc 84.88 BHP <br>
                price: ₹ 6.50 Lakh
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/Hatch_Tata-Nano.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: 2011 Tata Nano Lx <br>
                Power: 624 CC 35 BHP <br>
                price: ₹75,000 
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/Hatch_Tata-Tiago.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Tata Tiago <br>
                Power: 1199 CC 72.0 BHP <br>
                price: ₹ 5.45 - 7.90 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
    </div>
    <footer class="social-footer">
        <div class="social-links">
            Visit Us: 
            <a href="#">Instagram</a> <br>
            <a href="#">Facebook</a> <br>
            <a href="#">Twitter</a>
        </div>
        <div class="newsletter-button">
            Our Newsletter informs you of the hottest pick-ups of the automotive world <br>
            <button type="button" class="btn btn-primary">Subscribe to our Newsletter</button>
        </div>
    </footer>
</body>

</html>

SUVs page:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUVs</title>
    <link href="https://fonts.googleapis.com/css2?family=Explora&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Explora&family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header id="container">

        <div id="nav">
            <a href="./index.html">Home</a>
            <a href="./sedans.html">Sedans</a>
            <a href="./hatchbacks.html">Hatchbacks</a>
            <a href="./suvs.html">SUVs</a>
        </div>
        <h1>
            Shashwat's picks for the modern Petrolhead
        </h1>
    </header>
    <div class="sedan_container">
        SUVs we recommend:
    </div>

    <div class="car-row-1">
        <div>
            <img src="./images/SUV_audi-q5.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Audi Q5 <br>
                Power: 1984 CC 245.59 BHP <br>
                price: ₹ 61.51 - 67.31 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/SUV_harrier.jpeg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Tata Harrier <br>
                Power: 1956 CC 167.67 BHP <br>
                price: ₹ 14.80 - 22.35 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/SUV_innova.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Toyota Innova Crysta <br>
                Power: 2694 CC <br>
                price: ₹ 18.09 Lakh
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
    </div>
    <div class="car-row-2">
        <div>
            <img src="./images/SUV_Mahindra-Scorpio-Classic.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Mahindra Scorpio Classic <br>
                Power: 2184 CC 130.07 BHP <br>
                price: ₹ 11.99 - 15.49 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/SUV_Mahindra-XUV700.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Mahindra XUV700 <br>
                Power: 1999 CC 152.87 BHP <br>
                price: ₹ 11.99 - 15.49 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/SUV_mg-hector.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: MG Hector <br>
                Power: 1451 CC 167.76 BHP <br>
                price: ₹ 14.73 - 21.73 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
    </div>
    <div class="car-row-3">
        <div>
            <img src="./images/SUV_seltos.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Kia Seltos <br>
                Power: 1353 CC 138.08 BHP <br>
                price: ₹ 10.69 - 19.15 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/SUV_Tata_Safari.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Tata Safari <br>
                Power: 1956 CC 167.67 BHP <br>
                price: ₹ 15.45 - 23.76 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
        <div>
            <img src="./images/SUV_Toyota_Fortuner.jpg" height="200px" width="100px" class="car-images">
            <p class="underpic_text">
                Model: Toyota Fortuner <br>
                Power: 2694 CC 201.15 BHP<br>
                price: ₹ 32.59 - 50.34 Lakh*
            </p>
            <button type="button" class="btn btn-secondary" href="#">Visit The official website</button>
        </div>
    </div>
    <footer class="social-footer">
        <div class="social-links">
            Visit Us: 
            <a href="#">Instagram</a> <br>
            <a href="#">Facebook</a> <br>
            <a href="#">Twitter</a>
        </div>
        <div class="newsletter-button">
            Our Newsletter informs you of the hottest pick-ups of the automotive world <br>
            <button type="button" class="btn btn-primary">Subscribe to our Newsletter</button>
        </div>
    </footer>
</body>

</html>