import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            {
                id:1,
                name: "Ethel Price",
                gender: "female",
                company: "My company name is very long and funny because funny is fun",
                age: 22
            },
            {
                id:2,
                name: "Claudine Neal",
                gender: "female",
                company: "Sealoud",
                age: 55
            },
            {
                id:3,
                name: "Beryl Rice",
                gender: "female",
                company: "Velity",
                age: 67
            },
            {
                id:4,
                name: "Wilder Gonzales",
                gender: "male",
                company: "Geekko"
            },
            {
                id:5,
                name: "Georgina Schultz",
                gender: "female",
                company: "Suretech"
            },
            {
                id:6,
                name: "Carroll Buchanan",
                gender: "male",
                company: "Ecosys"
            },
            {
                id:7,
                name: "Valarie Atkinson",
                gender: "female",
                company: "Hopeli"
            },
            {
                id:8,
                name: "Schroeder Mathews",
                gender: "male",
                company: "Polarium"
            },
            {
                id:9,
                name: "Lynda Mendoza",
                gender: "female",
                company: "Dogspa"
            },
            {
                id:10,
                name: "Sarah Massey",
                gender: "female",
                company: "Bisba"
            },
            {
                id:11,
                name: "Robles Boyle",
                gender: "male",
                company: "Comtract"
            },
            {
                id:12,
                name: "Evans Hickman",
                gender: "male",
                company: "Parleynet"
            },
            {
                id:13,
                name: "Dawson Barber",
                gender: "male",
                company: "Dymi"
            },
            {
                id:14,
                name: "Bruce Strong",
                gender: "male",
                company: "Xyqag"
            },
            {
                id:15,
                name: "Nellie Whitfield",
                gender: "female",
                company: "Exospace"
            },
            {
                id:16,
                name: "Jackson Macias",
                gender: "male",
                company: "Aquamate"
            },
            {
                id:17,
                name: "Pena Pena",
                gender: "male",
                company: "Quarx"
            },
            {
                id:18,
                name: "Lelia Gates",
                gender: "female",
                company: "Proxsoft"
            },
            {
                id:19,
                name: "Letitia Vasquez",
                gender: "female",
                company: "Slumberia"
            },
            {
                id:20,
                name: "Trevino Moreno",
                gender: "male",
                company: "Conjurica"
            },
            {
                id:21,
                name: "Barr Page",
                gender: "male",
                company: "Apex"
            },
            {
                id:22,
                name: "Kirkland Merrill",
                gender: "male",
                company: "Utara"
            },
            {
                id:23,
                name: "Blanche Conley",
                gender: "female",
                company: "Imkan"
            },
            {
                id:24,
                name: "Atkins Dunlap",
                gender: "male",
                company: "Comveyor"
            },
            {
                id:25,
                name: "Everett Foreman",
                gender: "male",
                company: "Maineland"
            },
            {
                id:26,
                name: "Gould Randolph",
                gender: "male",
                company: "Intergeek"
            },
            {
                name: "Kelli Leon",
                gender: "female",
                company: "Verbus"
            },
            {
                id:27,
                name: "Freda Mason",
                gender: "female",
                company: "Accidency"
            },
            {
                id:28,
                name: "Tucker Maxwell",
                gender: "male",
                company: "Lumbrex"
            },
            {
                id:29,
                name: "Yvonne Parsons",
                gender: "female",
                company: "Zolar"
            },
            {
                id:30,
                name: "Woods Key",
                gender: "male",
                company: "Bedder"
            },
            {
                id:31,
                name: "Stephens Reilly",
                gender: "male",
                company: "Acusage"
            },
            {
                id:32,
                name: "Mcfarland Sparks",
                gender: "male",
                company: "Comvey"
            },
            {
                id:33,
                name: "Jocelyn Sawyer",
                gender: "female",
                company: "Fortean"
            },
            {
                id:34,
                name: "Renee Barr",
                gender: "female",
                company: "Kiggle"
            },
            {
                id:35,
                name: "Gaines Beck",
                gender: "male",
                company: "Sequitur"
            },
            {
                id:36,
                name: "Luisa Farrell",
                gender: "female",
                company: "Cinesanct"
            },
            {
                id:37,
                name: "Robyn Strickland",
                gender: "female",
                company: "Obones"
            },
            {
                id:38,
                name: "Roseann Jarvis",
                gender: "female",
                company: "Aquazure"
            },
            {
                id:39,
                name: "Johnston Park",
                gender: "male",
                company: "Netur"
            },
            {
                id:40,
                name: "Wong Craft",
                gender: "male",
                company: "Opticall"
            },
            {
                id:41,
                name: "Merritt Cole",
                gender: "male",
                company: "Techtrix"
            },
            {
                id:42,
                name: "Dale Byrd",
                gender: "female",
                company: "Kneedles"
            },
            {
                id:43,
                name: "Sara Delgado",
                gender: "female",
                company: "Netagy"
            },
            {
                id:44,
                name: "Alisha Myers",
                gender: "female",
                company: "Intradisk"
            },
            {
                id:45,
                name: "Felecia Smith",
                gender: "female",
                company: "Futurity"
            },
            {
                id:46,
                name: "Neal Harvey",
                gender: "male",
                company: "Pyramax"
            },
            {
                id:47,
                name: "Nola Miles",
                gender: "female",
                company: "Sonique"
            },
            {
                id:48,
                name: "Herring Pierce",
                gender: "male",
                company: "Geeketron"
            },
            {
                id:49,
                name: "Shelley Rodriquez",
                gender: "female",
                company: "Bostonic"
            },
            {
                id:50,
                name: "Cora Chase",
                gender: "female",
                company: "Isonus"
            },
            {
                id:51,
                name: "Mckay Santos",
                gender: "male",
                company: "Amtas"
            },
            {
                id:52,
                name: "Hilda Crane",
                gender: "female",
                company: "Jumpstack"
            },
            {
                id:53,
                name: "Jeanne Lindsay",
                gender: "female",
                company: "Genesynk"
            },
            {
                id:54,
                name: "Frye Sharpe",
                gender: "male",
                company: "Eplode"
            },
            {
                id:55,
                name: "Velma Fry",
                gender: "female",
                company: "Ronelon"
            },
            {
                id:56,
                name: "Reyna Espinoza",
                gender: "female",
                company: "Prismatic"
            },
            {
                id:57,
                name: "Spencer Sloan",
                gender: "male",
                company: "Comverges"
            },
            {
                id:58,
                name: "Graham Marsh",
                gender: "male",
                company: "Medifax"
            },
            {
                id:59,
                name: "Hale Boone",
                gender: "male",
                company: "Digial"
            },
            {
                id:60,
                name: "Wiley Hubbard",
                gender: "male",
                company: "Zensus"
            },
            {
                id:61,
                name: "Blackburn Drake",
                gender: "male",
                company: "Frenex"
            },
            {
                id:62,
                name: "Franco Hunter",
                gender: "male",
                company: "Rockabye"
            },
            {
                id:63,
                name: "Barnett Case",
                gender: "male",
                company: "Norali"
            },
            {
                id:64,
                name: "Alexander Foley",
                gender: "male",
                company: "Geekosis"
            },
            {
                id:65,
                name: "Lynette Stein",
                gender: "female",
                company: "Macronaut"
            },
            {
                id:66,
                name: "Anthony Joyner",
                gender: "male",
                company: "Senmei"
            },
            {
                id:67,
                name: "Garrett Brennan",
                gender: "male",
                company: "Bluegrain"
            },
            {
                id:68,
                name: "Betsy Horton",
                gender: "female",
                company: "Zilla"
            },
            {
                id:69,
                name: "Patton Small",
                gender: "male",
                company: "Genmex"
            },
            {
                id:70,
                name: "Lakisha Huber",
                gender: "female",
                company: "Insource"
            },
            {
                id:71,
                name: "Lindsay Avery",
                gender: "female",
                company: "Unq"
            },
            {
                id:72,
                name: "Ayers Hood",
                gender: "male",
                company: "Accuprint"
            },
            {
                id:73,
                name: "Torres Durham",
                gender: "male",
                company: "Uplinx"
            },
            {
                id:74,
                name: "Vincent Hernandez",
                gender: "male",
                company: "Talendula"
            },
            {
                id:75,
                name: "Baird Ryan",
                gender: "male",
                company: "Aquasseur"
            },
            {
                id:76,
                name: "Georgia Mercer",
                gender: "female",
                company: "Skyplex"
            },
            {
                id:77,
                name: "Francesca Elliott",
                gender: "female",
                company: "Nspire"
            },
            {
                id:78,
                name: "Lyons Peters",
                gender: "male",
                company: "Quinex"
            },
            {
                id:79,
                name: "Kristi Brewer",
                gender: "female",
                company: "Oronoko"
            },
            {
                id:80,
                name: "Tonya Bray",
                gender: "female",
                company: "Insuron"
            },
            {
                id:81,
                name: "Valenzuela Huff",
                gender: "male",
                company: "Applideck"
            },
            {
                id:82,
                name: "Tiffany Anderson",
                gender: "female",
                company: "Zanymax"
            },
            {
                id:83,
                name: "Jerri King",
                gender: "female",
                company: "Eventex"
            },
            {
                id:84,
                name: "Rocha Meadows",
                gender: "male",
                company: "Goko"
            },
            {
                id:85,
                name: "Marcy Green",
                gender: "female",
                company: "Pharmex"
            },
            {
                id:86,
                name: "Kirk Cross",
                gender: "male",
                company: "Portico"
            },
            {
                id:87,
                name: "Hattie Mullen",
                gender: "female",
                company: "Zilencio"
            },
            {
                id:88,
                name: "Deann Bridges",
                gender: "female",
                company: "Equitox"
            },
            {
                id:89,
                name: "Chaney Roach",
                gender: "male",
                company: "Qualitern"
            },
            {
                id:90,
                name: "Consuelo Dickson",
                gender: "female",
                company: "Poshome"
            },
            {
                id:91,
                name: "Billie Rowe",
                gender: "female",
                company: "Cemention"
            },
            {
                id:92,
                name: "Bean Donovan",
                gender: "male",
                company: "Mantro"
            },
            {
                id:99,
                name: "Lancaster Patel",
                gender: "male",
                company: "Krog"
            },
            {
                id:93,
                name: "Rosa Dyer",
                gender: "female",
                company: "Netility"
            },
            {
                id:94,
                name: "Christine Compton",
                gender: "female",
                company: "Bleeko"
            },
            {
                id:95,
                name: "Milagros Finch",
                gender: "female",
                company: "Handshake"
            },
            {
                id:96,
                name: "Ericka Alvarado",
                gender: "female",
                company: "Lyrichord"
            },
            {
                id:97,
                name: "Sylvia Sosa",
                gender: "female",
                company: "Circum"
            },
            {
                id:98,
                name: "Humphrey Curtis",
                gender: "male",
                company: "Corepan"
            }
        ];
        // return {users};

        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        
        return {heroes, users};
    }



}
