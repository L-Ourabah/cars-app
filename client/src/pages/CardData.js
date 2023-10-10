// CardData.js
import ferrari from '../images/laferrari.jpg'
import diablo from '../images/diabloSv.jpg'
import mclaren from '../images/mclaren720.jpg'
import koni from '../images/koenigsegg.png'
import viper from '../images/viper.jpg'

import Vviper from '../video/dodge viper gts.mkv'


const CardData = [
    {
        id: 1,
        type: "legendaire",
        name: "La Ferrari",
        brand: "Ferrari",
        year: "2013",
        img: ferrari,
        logo:'https://seeklogo.com/images/F/ferrari-logo-7935CF173C-seeklogo.com.png',
        info:
            "La Ferrari est une voiture de sport emblématique de la marque italienne Ferrari, connue pour sa puissance, son design et son prestige.",
        setDetails: [
            { label: "Vitesse Max", cost: "350 km/h" },
            { label: "0 à 100", cost: "3.1 sec" },
            { label: "Poids", cost: "1780 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "499" },
            { label: "Puissance", cost: "963 CV" },
            { label: "Prix", cost: "1.250.000 €" },
        ],
        classement: "1er",
        description:
            "La LaFerrari est propulsée par un moteur V12 de 6,3 L de cylindrée, développant 800 ch et dotée d'un système électrique de récupération de l'énergie cinétique inspiré de la Formule 1, baptisé « Hy-Kers », qui lui octroie un supplément de puissance de 163 ch portant la puissance totale à 963 ch (949 bhp , 81 CV).",
        video: "lien_video_ferrari",
    },
    {
        id: 2,
        type: "legendaire",
        name: "Diablo SV",
        brand: "Lamborghini",
        year: "1995",
        img: diablo,
        logo:"https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Lamborghini-Logo.svg/1792px-Lamborghini-Logo.svg.png",
        info:
            "La Lamborghini Diablo SV est une voiture de sport emblématique de la marque italienne Lamborghini, connue pour sa puissance, son design et son prestige.",
        setDetails: [
            { label: "Vitesse Max", cost: "330 km/h" },
            { label: "0 à 100", cost: "3.9 sec" },
            { label: "Poids", cost: "1550 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "346" },
            { label: "Puissance", cost: "510 CV" },
            { label: "Prix", cost: "500 000 €" },
        ],
        classement: "2e",
        description:
            "La Lamborghini Diablo SV est un chef-d'œuvre de la puissance brute et du design italien. Elle est équipée d'un moteur V12 atmosphérique de 5,7 litres, offrant une expérience de conduite exceptionnelle.",
        video: "https://www.youtube.com/watch?v=8z-hqBjJYMc",
    },
    {
        id: 3,
        type: "Voiture de luxe",
        name: "DB11",
        brand: "Aston Martin",
        year: "2016",
        img: "https://cdn.pixabay.com/photo/2016/12/03/10/36/aston-martin-1879519_640.jpg",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId-I0X1mepYfe2qtbDLmXZZBnYkNaQEvVuQ&usqp=CAU",
        info:
            "L'Aston Martin DB11 est une voiture de luxe britannique, célèbre pour son élégance et son moteur V12 puissant.",
        setDetails: [
            { label: "Vitesse Max", cost: "322 km/h" },
            { label: "0 à 100", cost: "3.9 sec" },
            { label: "Poids", cost: "1770 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "1 000" },
            { label: "Puissance", cost: "600 CV" },
            { label: "Prix", cost: "230 000 €" },
        ],
        classement: "8e",
        description:
            "L'Aston Martin DB11 incarne le luxe britannique avec son design élégant et son moteur V12 bi-turbo de 5,2 litres. Elle offre une combinaison parfaite de performance et de raffinement.",
        video: "https://www.youtube.com/watch?v=FzmKf_amn8I",
    },
    {
        id: 4,
        type: "hypercar",
        name: "Veyron",
        brand: "Bugatti",
        year: "2005",
        img: "https://www.challenges.fr/assets/img/2012/02/23/cover-r4x3w1200-579978ea577e4-bugatti-veyron-grand-sport-vitesse-geneve-2012.jpg",
        logo:"https://pngimg.com/uploads/bugatti_logo/bugatti_logo_PNG14.png",
        info:
            "La Bugatti Veyron est une hypercar légendaire, connue pour sa vitesse de pointe incroyable et son design révolutionnaire.",
        setDetails: [
            { label: "Vitesse Max", cost: "431 km/h" },
            { label: "0 à 100", cost: "2.5 sec" },
            { label: "Poids", cost: "1888 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "450" },
            { label: "Puissance", cost: "1 001 CV" },
            { label: "Prix", cost: "1.500.000 €" },
        ],
        classement: "3e",
        description:
            "La Bugatti Veyron a été la première voiture de production à dépasser la barre des 400 km/h. Son moteur W16 quadri-turbo de 8,0 litres la propulse à des vitesses incroyables.",
        video: "https://www.youtube.com/watch?v=PkkV1vLHUvQ",
    },
    {
        id: 5,
        type: "Voiture de luxe",
        name: "Db 5",
        brand: "Aston Martin",       
        year: "1963",
        img: "https://cdn.pixabay.com/photo/2023/06/16/13/51/db5-8068060_1280.jpg",
        logo:"https://cdn.icon-icons.com/icons2/2402/PNG/512/aston_martin_logo_icon_145844.png",
        info:
            "Aston Martin est une marque de voitures de luxe britannique, connue pour son élégance, son confort et son caractère distinctif.",
        setDetails: [
            { label: "Vitesse Max", cost: "290 km/h" },
            { label: "0 à 100", cost: "6.1 sec" },
            { label: "Poids", cost: "1490 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "300" },
            { label: "Puissance", cost: "1 000 CV" },
            { label: "Prix", cost: "800.000 €" },
        ],
        classement: "4e",
        description:
            "Les voitures Aston Martin sont réputées pour leur mariage élégant entre la performance et le luxe. La combinaison d'un moteur puissant et d'un design intemporel en fait des voitures de prestige.",
        video: "https://www.youtube.com/watch?v=2cEK8buhJvA",
    },
    {
        id: 6,
        type: "Voiture de film",
        name: "KITT",
        brand: "Knight Industries",
        year: "1982",
        img: "https://swifthalf.com/wp-content/uploads/2023/04/KITT-Knight-Rider.jpg",
        logo:"https://logos-world.net/wp-content/uploads/2021/04/Pontiac-Logo.png",
        info:
            "KITT (Knight Industries Two Thousand) est une voiture de film emblématique de la série télévisée K2000, connue pour son intelligence artificielle avancée et ses gadgets futuristes.",
        setDetails: [
            { label: "Vitesse Max", cost: "400 km/h" },
            { label: "0 à 100", cost: "3.2 sec" },
            { label: "Poids", cost: "1600 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "1" },
            { label: "Puissance", cost: "Incalculable" },
            { label: "Prix", cost: "Non disponible" },
        ],
        classement: "N/A",
        description:
            "KITT est l'une des voitures les plus emblématiques de la télévision, célèbre pour son intelligence artificielle avancée, sa capacité à parler et ses gadgets futuristes qui ont aidé Michael Knight à lutter contre le crime.",
        video:"https://www.youtube.com/watch?v=ILXQPmHxsZw",
    },
    {
        id: 7,
        type: "hypercar",
        name: "Jesko",
        brand: "Koenigsegg",
        year: "2022",
        img: koni,
        logo:"https://static.wixstatic.com/media/f2bf43_179328483f634f938a5a638b192b6005~mv2.png",
        info:
            "La Koenigsegg Jesko est une hypercar suédoise de pointe, connue pour sa puissance extrême, sa technologie avancée et son design aérodynamique.",
        setDetails: [
            { label: "Vitesse Max", cost: "480 km/h" },
            { label: "0 à 100", cost: "2.5 sec" },
            { label: "Poids", cost: "1570 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "125" },
            { label: "Puissance", cost: "1 600 CV" },
            { label: "Prix", cost: "2.800.000 €" },
        ],
        classement: "5e",
        description:
            "La Koenigsegg Jesko est l'une des hypercars les plus puissantes au monde. Avec son moteur V8 biturbo de 5,0 litres, elle offre une expérience de conduite exceptionnelle sur route et sur piste.",
        video: "https://www.youtube.com/watch?v=uTd5f_Tj89M",
    },
    {
        id: 8,
        type: "Voiture de luxe",
        name: "Phantom",
        brand: "Rolls-Royce",
        year: "2022",
        img: "chemin_vers_votre_image_rollsroyce.jpg",
        logo:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4a0.png",
        info:
            "La Rolls-Royce Phantom est l'épitome du luxe automobile britannique, connue pour son raffinement, son confort inégalé et son attention aux détails.",
        setDetails: [
            { label: "Vitesse Max", cost: "250 km/h" },
            { label: "0 à 100", cost: "5.1 sec" },
            { label: "Poids", cost: "2745 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "50" },
            { label: "Puissance", cost: "" },
            { label: "Prix", cost: "550.000 €" },
        ],
        classement: "6e",
        description:
            "La Rolls-Royce Phantom est le summum du luxe automobile. Chaque détail est conçu avec une précision exceptionnelle, offrant un confort inégalé pour les passagers.",
        video: "lien_video_rollsroyce",
    },
    {
        id: 9,
        type: "muscle Car",
        name: "Charger",
        brand: "Dodge",
        year: "1969",
        img: "chemin_vers_votre_image_dodge.jpg",
        logo:"https://seeklogo.com/images/D/Dodge-logo-7A42A6FFCF-seeklogo.com.png",
        info:
            "La Dodge Charger de 1969 est une muscle car classique américaine, connue pour sa puissance brute et son design agressif.",
        setDetails: [
            { label: "Vitesse Max", cost: "210 km/h" },
            { label: "0 à 100", cost: "6.5 sec" },
            { label: "Poids", cost: "1785 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "300" },
            { label: "Puissance", cost: "500 000" },
            { label: "Prix", cost: "100.000 €" },
        ],
        classement: "7e",
        description:
            "La Dodge Charger de 1969 est un symbole des muscle cars américaines. Avec son moteur V8 puissant, elle incarne la puissance brute et l'essence de l'Amérique muscle car.",
        video: "lien_video_dodge",
    },
    {
        id: 10,
        type: "supercar",
        name: "720S",
        brand: "McLaren",
        year: "2017",
        img: mclaren,
        logo:"https://pngimg.com/d/Mclaren_PNG49.png",
        info:
            "La McLaren 720S est une supercar britannique de pointe, connue pour ses performances exceptionnelles sur piste et sur route.",
        setDetails: [
            { label: "Vitesse Max", cost: "341 km/h" },
            { label: "0 à 100", cost: "2.9 sec" },
            { label: "Poids", cost: "1283 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "800" },
            { label: "Vue", cost: "300 000" },
            { label: "Prix", cost: "270.000 €" },
        ],
        classement: "8e",
        description:
            "La McLaren 720S est une supercar impressionnante qui offre des performances de niveau compétition. Son design aérodynamique et son moteur V8 turbocompressé en font un choix exceptionnel pour les passionnés de conduite.",
        video: "lien_video_mclaren",
    },
    {
        id: 11,
        type: "Sportive",
        name: "911 GT3",
        brand: "Porsche",
        year: "2021",
        img: "https://carfans.fr/wp-content/uploads/2023/09/Porsche_911GT3R_rennsport_1.jpg",
        logo:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
        info:
            "La Porsche 911 GT3 est une sportive allemande emblématique, connue pour ses performances sur piste et son moteur flat-six puissant.",
        setDetails: [
            { label: "Vitesse Max", cost: "320 km/h" },
            { label: "0 à 100", cost: "3.4 sec" },
            { label: "Poids", cost: "1435 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "600" },
            { label: "Puissance", cost: "200 000" },
            { label: "Prix", cost: "175.000 €" },
        ],
        classement: "19e",
        description:
            "La Porsche 911 GT3 est une voiture de sport légendaire de Porsche, conçue pour les performances pures sur piste. Son moteur flat-six atmosphérique de 4,0 litres en fait une voiture de course homologuée pour la route.",
        video: "lien_video_porsche1",
    },
    {
        id: 12,
        type: "Sportive",
        name: "Cayman",
        brand: "Porsche",
        year: "2022",
        img: "https://www.autoscout24.fr/cms-content-assets/4jF1aYBN0LcfADhD2BhIeu-41242322bd047debce870fba3a792c87-AS24-porsche_banner-1100.jpeg",
        logo:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
        info:
            "La Porsche Cayman est une sportive allemande équilibrée, connue pour sa maniabilité et son design intemporel.",
        setDetails: [
            { label: "Vitesse Max", cost: "295 km/h" },
            { label: "0 à 100", cost: "4.2 sec" },
            { label: "Poids", cost: "1430 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "500" },
            { label: "Puissance", cost: "180 000" },
            { label: "Prix", cost: "95.000 €" },
        ],
        classement: "18e",
        description:
            "La Porsche Cayman est une sportive équilibrée qui offre un mélange de performances et de maniabilité. Son design intemporel en fait un choix populaire parmi les amateurs de Porsche.",
        video: "lien_video_porsche2",
    },
    {
        id: 13,
        type: "Sportive",
        name: "Panamera",
        brand: "Porsche",
        logo:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
        year: "2021",
        img: "https://static.lpnt.fr/images/2020/08/27/20663069lpw-20663104-article-jpg_7305858_1250x625.jpg",
        info:
            "La Porsche Panamera est une berline sportive allemande, connue pour son luxe et ses performances impressionnantes.",
        setDetails: [
            { label: "Vitesse Max", cost: "310 km/h" },
            { label: "0 à 100", cost: "3.5 sec" },
            { label: "Poids", cost: "2010 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "400" },
            { label: "Puissance", cost: "150 000" },
            { label: "Prix", cost: "120.000 €" },
        ],
        classement: "11e",
        description:
            "La Porsche Panamera offre des performances impressionnantes pour une berline de luxe. Elle allie confort et sportivité avec un moteur puissant et un design élégant.",
        video: "lien_video_porsche3",
    },
    {
        id: 14,
        type: "suv",
        name: "Macan",
        brand: "Porsche",
        year: "2022",
        img: "https://www.automobile-club.org/content/image/crop/848/524/original/PORSCHE_MACAN_S.jpg",
        logo:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
        info:
            "Le Porsche Macan est un SUV sportif allemand, connu pour sa polyvalence et ses performances sur route.",
        setDetails: [
            { label: "Vitesse Max", cost: "254 km/h" },
            { label: "0 à 100", cost: "6.2 sec" },
            { label: "Poids", cost: "1875 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "700" },
            { label: "Puissance", cost: "220 000" },
            { label: "Prix", cost: "75.000 €" },
        ],
        classement: "13e",
        description:
            "Le Porsche Macan est un SUV sportif polyvalent qui offre des performances solides sur route. Son design sportif en fait un choix populaire parmi les conducteurs exigeants.",
        video: "lien_video_porsche4",
    },
    {
        id: 15,
        type: "Sportive",
        name: "Taycan",
        brand: "Porsche",
        year: "2021",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-porsche-taycan-mmp-1-1629842296.jpg?crop=0.915xw:1.00xh;0.0433xw,0&resize=640:*",
        logo:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",

        info:
            "Le Porsche Taycan est une voiture électrique sportive allemande, connue pour ses performances électriques et son design moderne.",
        setDetails: [
            { label: "Vitesse Max", cost: "260 km/h" },
            { label: "0 à 100", cost: "3.2 sec" },
            { label: "Poids", cost: "2210 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "300" },
            { label: "Puissance", cost: "100 000" },
            { label: "Prix", cost: "140.000 €" },
        ],
        classement: "12e",
        description:
            "Le Porsche Taycan est la première voiture électrique de Porsche, offrant des performances impressionnantes grâce à ses moteurs électriques. Son design moderne et ses caractéristiques technologiques en font une voiture électrique de choix.",
        video: "lien_video_porsche5",
    },
    {
        id: 16,
        type: "muscle Car",
        name: "Viper GTS",
        brand: "Dodge",
        year: "1996",
        img: viper,
        logo:"https://seeklogo.com/images/D/Dodge-logo-7A42A6FFCF-seeklogo.com.png",
        info:
            "La Dodge Viper GTS est une muscle car emblématique de la marque américaine Dodge, connue pour sa puissance brute et son design audacieux.",
        setDetails: [
            { label: "Vitesse Max", cost: "285 km/h" },
            { label: "0 à 100", cost: "4.0 sec" },
            { label: "Poids", cost: "1495 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "3 000" },
            { label: "Puissance", cost: "450 CV" },
            { label: "Prix", cost: "60 000 €" },
        ],
        classement: "10e",
        description:
            "La Dodge Viper GTS est une icône des muscle cars américaines. Elle est dotée d'un moteur V10 de 8,0 litres qui offre une puissance impressionnante et un son distinctif. Sa carrosserie agressive en fait l'une des voitures les plus reconnaissables sur la route.",
        video: Vviper,
    },
    {
        id: 17,
        type: "Voiture de film",
        name: "DeLorean DMC-12",
        brand: "DeLorean Motor Company (DMC)",
        year: "1985",
        img: "https://static.hitek.fr/img/actualite/i_illustration-delorean-retour-vers-futru.jpg", // Image de référence
        logo: "https://logos-marques.com/wp-content/uploads/2021/02/DMC-Emblema.png", // Logo fictif
        info: "La DeLorean DMC-12, modifiée par le Docteur Emmett Brown, est une voiture emblématique du film 'Retour vers le futur'.",
        setDetails: [
            { label: "Vitesse Max", cost: "141,6 km/h" },
            { label: "0 à 100", cost: "0.5 sec" },
            { label: "poids", cost: "1495 kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "1 (la voiture modifiée)" },
            { label: "Puissance", cost: "1,21 gigawatts (GW)" },
            { label: "Prix", cost: "Coût inestimable" },
        ],
        classement: "N/A (elle est unique)",
        description: "La DeLorean DMC-12 modifiée pour le voyage dans le temps est l'une des voitures les plus célèbres du cinéma. Elle est capable de voyager dans le temps une fois que le condensateur de flux est alimenté par 1,21 gigawatts d'énergie.",
        video: "https://www.youtube.com/watch?v=mu6mt8PptGo",
    },
    {
        id: 18,
        type: "Voiture de luxe",
        name: "Classe S",
        brand: "Mercedes-Benz",
        year: "2023",
        img: "https://example.com/mercedes-s-class-image.jpg",
        logo: "https://example.com/mercedes-logo.png",
        info: "Mercedes-Benz est synonyme de luxe, de confort et d'innovation technologique.",
        setDetails: [
            { label: "Vitesse Max", cost: "250 km/h" },
            { label: "0 à 100", cost: "4.8 sec" },
            { label: "Poids", cost: "1 975 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "1 000" },
            { label: "Puissance", cost: "450 CV" },
            { label: "Prix", cost: "150 000 €" },
        ],
        classement: "3e",
        description: "La Mercedes-Benz Classe S incarne l'élégance et le luxe automobile, avec une technologie de pointe et un confort exceptionnel.",
        video: "lien_video_mercedessclass",
    },
    {
        id: 28,
        type: "Berline sportive",
        name: "M5",
        brand: "BMW",
        year: "2023",
        img: "https://cdn.motor1.com/images/mgl/MkJjKY/s1/next-gen-bmw-m5-rendering.jpg",
        logo: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c46e.png",
        info: "BMW est une marque allemande reconnue pour ses performances sportives et sa qualité de fabrication.",
        setDetails: [
            { label: "Vitesse Max", cost: "305 km/h" },
            { label: "0 à 100", cost: "3.2 sec" },
            { label: "Poids", cost: "1 950 Kg" },
        ],
        cardInfo: [
            { label: "Exemplaire", cost: "800" },
            { label: "Puissance", cost: "625 CV" },
            { label: "Prix", cost: "120 000 €" },
        ],
        classement: "25e",
        description: "La BMW M5 est une berline sportive qui offre une combinaison parfaite entre performance et confort, avec un design élégant.",
        video: "https://www.youtube.com/watch?v=rNg7CVb4-JI",
    },
    
    
    
];

export default CardData;
