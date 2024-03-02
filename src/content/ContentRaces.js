// Panorama Charity Fun Run 2023
import panoramaCharityFunRun2023_1 from '../assets/images/Panorama Charity Fun Run 2023 - 1.jpg';
import panoramaCharityFunRun2023_2 from '../assets/images/Panorama Charity Fun Run 2023 - 2.jpg';

// Ioannina Lake Run 2022
import ioanninaLakeRun2022_1 from '../assets/images/Ioannina Lake Run 2022 - 1.jpg';
import ioanninaLakeRun2022_2 from '../assets/images/Ioannina Lake Run 2022 - 2.jpg';
import ioanninaLakeRun2022_3 from '../assets/images/Ioannina Lake Run 2022 - 3.jpg';
import ioanninaLakeRun2022_4 from '../assets/images/Ioannina Lake Run 2022 - 4.png';
import ioanninaLakeRun2022_5 from '../assets/images/Ioannina Lake Run 2022 - 5.jpg';

// Run Greece Kastoria 2022
import runGreeceKastoria2022_1 from '../assets/images/Run Greece Kastoria 2022 - 1.jpg'
import runGreeceKastoria2022_2 from '../assets/images/Run Greece Kastoria 2022 - 2.jpg'
import runGreeceKastoria2022_3 from '../assets/images/Run Greece Kastoria 2022 - 3.jpg'
import runGreeceKastoria2022_4 from '../assets/images/Run Greece Kastoria 2022 - 4.webp'
import runGreeceKastoria2022_5 from '../assets/images/Run Greece Kastoria 2022 - 5.jpeg'

// Ioannina Lake Run 2021
import ioanninaLakeRun2021_1 from '../assets/images/Ioannina Lake Run 2021 - 1.jpg'
import ioanninaLakeRun2021_2 from '../assets/images/Ioannina Lake Run 2021 - 2.jpg'

// 12th Mnimes Ligniti (PPC) 2020
import mnimesLigniti2020_1 from '../assets/images/Mnimes Ligniti 2020 - 1.jpg';
import mnimesLigniti2020_2 from '../assets/images/Mnimes Ligniti 2020 - 2.jpg';

// 7th Solidarity Road 2022
import solidarityRoadRace2022_1 from '../assets/images/Solidarity Road Race 2022 - 1.jpg';

// 13th Mnimes Ligniti (PPC) 2022
import mnimesLigniti2022_1 from '../assets/images/Mnimes Ligniti 2022 - 1.jpg';
import mnimesLigniti2022_2 from '../assets/images/Mnimes Ligniti 2022 - 2.jpg';
import mnimesLigniti2022_3 from '../assets/images/Mnimes Ligniti 2022 - 3.jpg';

// 5th Neapoli Road Run 2019
import neapoliRoadRun2019_1 from '../assets/images/Neapoli Road Run 2019 - 1.jpg';
import neapoliRoadRun2019_2 from '../assets/images/Neapoli Road Run 2019 - 2.jpg';

// 11th Mnimes Ligniti (PPC) 2019
import mnimesLigniti2019_1 from '../assets/images/Mnimes Ligniti 2019 - 1.jpeg';
import mnimesLigniti2019_2 from '../assets/images/Mnimes Ligniti 2019 - 2.jpg';

// YES to life, NO to drugs 2018
import yesToLifeNoToDrugs2018_1 from '../assets/images/Yes to life, no to drugs 2018 - 1.jpeg';
import yesToLifeNoToDrugs2018_2 from '../assets/images/Yes to life, no to drugs 2018 - 2.jpeg';

// 19t Apollodorus Road Race
import apollodorusRoadRace2019_1 from '../assets/images/Apollodorus Road Race 2019 - 1.jpg';


const roadRaces = [
    {
        id:'7th-panorama-2023',
        name: '7th Panorama Charity Fun Run',
        location: 'Thessaloniki',
        date: new Date(2023, 4, 7),
        rankGeneral: 1,
        rankAgeGroup: 1,
        distance:'10km',
        record: '00:41:34',
        link: 'https://www.spotarace.gr/el/panorama-charity-fun-run/7050/results/',
        image: panoramaCharityFunRun2023_1,
        highlight: true
    },

    {
        id:'ioannina-lake-run-2022',
        name: 'Ioannina Lake Run 2022',
        location: 'Ioannina',
        date: new Date(2022, 8, 18),
        rankGeneral: 3,
        rankAgeGroup: 1,
        distance:'10km',
        record: '00:43:27',
        link: 'https://www.ioanninalakerun.gr/en/results/4-agonas-dromou-10km',
        image: ioanninaLakeRun2022_5,
        highlight: true
    },

    {
        id:'run-greece-kastoria-2022',
        name: 'Run Greece 2022',
        location: 'Kastoria',
        date: new Date(2022, 4, 15),
        rankGeneral: 1,
        rankAgeGroup: 1,
        distance:'10km',
        record: '00:43:49',
        link: 'https://www.run-greece.gr/index.php/el/33-registration/kastoria',
        image: runGreeceKastoria2022_1,
        highlight: true
    },

    {
        id:'ioannina-lake-run-2021',
        name: 'Ioannina Lake Run 2021',
        location: 'Ioannina',
        date: new Date(2021, 8, 18),
        rankGeneral: 3,
        rankAgeGroup: 1,
        distance:'10km',
        record: '00:44:04',
        link: 'https://www.myrace.gr/race/3415/results.html',
        image: ioanninaLakeRun2021_1,
        highlight: true
    },

    {
        id:'12-mnimes-ligniti-2021',
        name:'12th Pan-Hellenic PPC Road Race',
        location: 'Ptolemaida',
        date: new Date(2020, 8, 8),
        rankGeneral: 1,
        rankAgeGroup: 1,
        distance:'5km',
        record: '00:20:57',
        link: 'http://www.runningnews.gr/item.php?id=49560',
        image: mnimesLigniti2020_1,
        highlight: true
    },

    {
        id:'7-solidarity-road-2022',
        name:'7th Solidarity Road Race',
        location: 'Katerini',
        date: new Date(2022, 3, 17),
        rankGeneral: 2,
        rankAgeGroup: 1,
        distance:'5km',
        record: '00:21:57',
        link: 'https://www.spotarace.gr/el/dromos-alleleggues-en-agkharalampous-katerines/6223/results/',
        image: solidarityRoadRace2022_1,
        highlight: false
    },

    {
        id:'13-mnimes-ligniti-2022',
        name:'13th Pan-Hellenic PPC Road Race',
        location: 'Ptolemaida',
        date: new Date(2022, 8, 8),
        rankGeneral: 1,
        rankAgeGroup: 1,
        distance:'10km',
        record: '00:45:09',
        link: 'http://www.runningnews.gr/item.php?id=53585',
        image: mnimesLigniti2022_1,
        highlight: true
    },

    {
        id:'5-neapoli-road-run',
        name:'5th Neapoli Road Run',
        location: 'Neapoli',
        date: new Date(2019, 5, 30),
        rankGeneral: 3,
        rankAgeGroup: 1,
        distance:'5km',
        record: '00:23:43',
        link: 'https://www.sportevent.gr/index.php/results/item/16250-5os-agonas-neapolis-kozanis-apotelesmata',
        image: neapoliRoadRun2019_1,
        highlight: false
    },

    {
        id:'11-mnimes-ligniti-2019',
        name:'11th Pan-Hellenic PPC Road Race',
        location: 'Ptolemaida',
        date: new Date(2019, 8, 8),
        rankGeneral: 3,
        rankAgeGroup: 1,
        distance:'5km',
        record: '00:00:00',
        link: 'https://www.smfsports.gr/lignitis2019/',
        image: mnimesLigniti2019_1,
        highlight: false
    },

    {
        id:'yes-to-life-no-to-drugs-2018',  
        name:'\"YES to life, NO to drugs\" Road Race',
        location: 'Kozani',
        date: new Date(2018, 4, 13),
        rankGeneral: 2,
        rankAgeGroup: 1,
        distance:'10km',
        record: '00:00:00',
        link: 'http://www.mikrovalto.gr/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82/%CE%B5%CE%BA%CE%B4%CE%B7%CE%BB%CF%8E%CF%83%CE%B5%CE%B9%CF%82/2018-05-14-02-17-40',
        image: yesToLifeNoToDrugs2018_2,
        highlight: false
    },

    {
        id:'19-apollodorus-road-race-2019',
        name:'19th Apollodorus Road Race',
        location: 'Kozani',
        date: new Date(2018, 8, 15),
        rankGeneral: 1,
        rankAgeGroup: 1,
        distance:'5km',
        record: '00:00:00',
        link: null,
        image: apollodorusRoadRace2019_1,
        highlight: false
    },
];

export default roadRaces;