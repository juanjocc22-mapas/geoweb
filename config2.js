var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoianVhbmpvY2MyMi1tYXBhcyIsImEiOiJja3l5N2I5YmcwY2E0MndvMnZ5Mjhxb3NtIn0.6MqA5ubWVeWJLrAvGMEKjA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Geografía de España',
    subtitle: 'Los principales hitos geográficos de España',
    byline: 'CEIP Gloria Fuertes, 6º Primaria ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'Montaña1',
            alignment: 'left',
            hidden: false,
            title: 'Pico del Teide, Tenerife',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Teide_and_Caldera_2006.jpg',
            description: 'El Teide es un volcán situado en la isla española de Tenerife, en Canarias. Cuenta con una altitud oficial de 3715 metros sobre el nivel del mar1​2​3​ y 7500 metros sobre el lecho oceánico, siendo el pico más alto de España, el de cualquier tierra emergida del océano Atlántico y el tercer mayor volcán de la Tierra desde su base en el lecho oceánico, después del Mauna Kea y el Mauna Loa, ambos en Hawái.4​ La altitud del Teide convierte además a la isla de Tenerife en la décima isla más alta del mundo.',
            location: {
                center: [-16.64226371927617, 28.27229121760663],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'Montaña2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Mulhacén, Sierra Nevada (Granada)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Mulhacen_north_face.JPG',
            description: 'El Pico Mulhacén, con una altitud de 3479 m s. n. m., es el pico más alto de la península ibérica y el segundo de España tras el Pico del Teide, de 3718 m s. n. m. (Tenerife, Canarias). El Pico Mulhacén forma parte del parque nacional de Sierra Nevada. Está enclavado en la provincia de Granada, en el sur peninsular de España, y pertenece a Sierra Nevada, en la cordillera Penibética.',
            location: {
                center: [-3.311294957804989, 37.05333737048938],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Montaña3',
            alignment: 'left',
            hidden: false,
            title: 'Pico Aneto, Pirineos (Huesca)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Aneto_01.jpg',
            description: 'El Aneto es el pico más elevado de los Pirineos, con una altitud de 3404 metros sobre el nivel del mar. Se encuentra situado en el Parque natural Posets-Maladeta, en el municipio español de Benasque, provincia de Huesca, comunidad autónoma de Aragón.',
            location: {
                center: [0.6565303739716422, 42.63106868903969],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Montaña4',
            alignment: 'right',
            hidden: false,
            title: 'Pico Veleta, Sierra Nevada (Granada)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Veleta.JPG',
            description: 'El pico del Veleta, con una altitud de 3396 m s. n. m., es la cuarta cumbre más alta de España, por detrás del Teide (Tenerife), Mulhacén (Sierra Nevada) y Aneto (Pirineos). Está enclavado en la provincia de Granada, en Andalucía (España), y pertenece a Sierra Nevada, en la cordillera Penibética. Su coordenada UTM es 30S 467487 4101150,3​ tomando el sistema de referencia ETRS89. Su superficie se reparte entre los Parques Natural y Nacional de Sierra Nevada. Administrativamente en su cumbre confluyen los términos municipales de Dílar, Monachil, Güéjar Sierra y Capileira. Jurisdiccionalmente, sus caras noreste y oeste pertenecen al partido judicial de Granada, mientras que la sureste, al de Órgiva.',
            location: {
                center: [-3.3655631615517945, 37.05608289283166],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Montaña5',
            alignment: 'left',
            hidden: false,
            title: 'Pico Posets, Pirineos (Huesca)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Pico_Posets_from_Forqueta.jpg',
            description: 'El pico Posets o Punta de Llardana es el segundo pico más alto de los Pirineos, tras el Aneto. Tiene una altitud de 3369 metros y se encuentra en el norte de la provincia de Huesca (Aragón). Forma parte de la ruta: Pico Posets, Pico Perdiguero y Pico Aneto.',
            location: {
                center: [0.4349343948447837, 42.66006853993112],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Montaña6',
            alignment: 'right',
            hidden: false,
            title: 'Monte Perdido, Pirineos (Huesca)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Macizo_perdido.jpg',
            description: 'Monte Perdido (en aragonés As Tres Serols) es el macizo calcáreo más alto de Europa. Se encuentra situado dentro de la vertiente sur del Pirineo central, al norte de la provincia de Huesca, en el parque nacional de Ordesa y Monte Perdido, en la comunidad autónoma de Aragón (España). Su pico más elevado es el Monte Perdido con una altitud de 3355 metros sobre el nivel del mar.',
            location: {
                center: [0.03375296928497917, 42.675751712945384],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Montaña7',
            alignment: 'left',
            hidden: false,
            title: 'Pico Almanzor, Sierra de Gredos (Sistema Central, Ávila)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Almanzor_sierra_de_gredos.jpg',
            description: 'El pico Almanzor, a veces citado como Plaza del Moro Almanzor, es una montaña de la península ibérica, la cumbre más alta de la sierra de Gredos y de todo el sistema Central, con una altitud de 2591m  y una prominencia de 1690 m. Se localiza en la provincia castellano-leonesa de Ávila, España; su cumbre forma parte de la divisoria entre los municipios de Arenas de San Pedro, Hoyos del Espino y El Hornillo.',
            location: {
                center: [-5.297717978888752, 40.24623990791216],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Montaña8',
            alignment: 'right',
            hidden: false,
            title: 'Moncayo, Sistema Ibérico (Zaragoza/Soria)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Vista_Moncayo_desde_Alcala.jpg',
            description: 'El Moncayo o San Miguel es una montaña del sistema Ibérico situada entre las provincias de Zaragoza (Aragón) y Soria (Castilla y León) en España. Con sus 2314.30m de altitud, es la máxima cumbre del sistema Ibérico y uno de los picos más relevantes de la península ibérica, así como el pico más elevado tanto de la provincia zaragozana como de la soriana.',
            location: {
                center: [-1.8396607164121592, 41.78715464004988],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río1',
            alignment: 'left',
            hidden: false,
            title: 'Río Tajo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Toledo_Reflections.jpg',
            description: 'El Tajo es el río más largo de la península ibérica, a la que atraviesa en su parte central, siguiendo un rumbo este-oeste. Nace en los montes Universales, en la sierra de Albarracín y, después de recorrer 1007 km, llega al océano Atlántico en la ciudad de Lisboa. En sus primeros 816 km atraviesa España, donde discurre por cuatro comunidades autónomas (Aragón, Castilla-La Mancha, Madrid y Extremadura) y un total de seis provincias (Teruel, Guadalajara, Cuenca, Madrid, Toledo y Cáceres).',
            location: {
                center: [-4.017646484696932, 39.8625719687292],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río2',
            alignment: 'right',
            hidden: false,
            title: 'Río Ebro',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Puente_de_hierro.jpg',
            description: 'El Ebro es un río del noreste de la península ibérica, el segundo más largo tras el Tajo y el más caudaloso. Discurre enteramente por España. Entre los ríos que desembocan en el mar Mediterráneo solo es superado en longitud por el Nilo. Recorre el extremo nororiental de la península ibérica, a través del valle homónimo, situado en una depresión. Sigue una dirección noroeste-sureste desde su nacimiento en el municipio cántabro de la Hermandad de Campoo de Suso hasta el Mediterráneo, en el que desemboca formando el delta del Ebro, entre los términos municipales de Deltebre y San Jaime de Enveija, ambos en la provincia de Tarragona.',
            location: {
                center: [0.6553075480379311, 40.71772789294959],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río3',
            alignment: 'left',
            hidden: false,
            title: 'Río Duero',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Catedral_de_Zamora_Es_recorte_1.jpg',
            description: 'El Duero, con una longitud de 897km, es el río más importante del noroeste de la península ibérica. Nace en la falda sur del pico Urbión, a unos 2160 m sobre el nivel del mar, y desemboca en el océano Atlántico, en el estuario de Oporto. La parte española incluye territorios de las comunidades autónomas de Castilla y León, Galicia, Cantabria, La Rioja, Castilla-La Mancha, Extremadura y la Comunidad de Madrid, aunque algo más del 98 % de la superficie corresponde a Castilla y León.',
            location: {
                center: [-5.757017356047904, 41.495655608476326],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río4',
            alignment: 'right',
            hidden: false,
            title: 'Río Guadiana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/BA-Guadiana_internacional_04.jpg',
            description: 'El Guadiana es un río del suroeste de la península ibérica. Nace en la submeseta sur y sigue una dirección este-oeste hasta que, a la altura de la ciudad de Badajoz, toma rumbo sur, que mantiene hasta su desembocadura en el océano Atlántico, donde vierte un caudal medio de 78,8 m³/s. En su curso bajo, el río, que discurre por España y Portugal, hace de frontera entre ambos países a lo largo de numerosos tramos. Se trata del cuarto río más largo de la península ibérica.',
            location: {
                center: [-6.353444873835842, 38.915968296064406],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río5',
            alignment: 'left',
            hidden: false,
            title: 'Río Guadalquivir',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/R%C3%ADo_Guadalquivir_Cordoba.jpg',
            description: 'El río Guadalquivir (del árabe الوادي الكبير al-wādi al-kabīr, «el río grande»), antiguamente llamado río Betis, es un río de España, cuyo cauce discurre por Andalucía. Desde la antigüedad se ha situado su nacimiento en la sierra de Cazorla. Su cuenca hidrográfica abarca territorios de las provincias de Almería, Jaén, Córdoba, Sevilla, Huelva, Cádiz, Málaga, Granada, Murcia, Albacete, Ciudad Real y Badajoz. Desemboca en el océano Atlántico en un amplio estuario entre Almonte (provincia de Huelva) y Sanlúcar de Barrameda (provincia de Cádiz). Entre Sevilla y el estuario se sitúa una amplia zona húmeda, las marismas del Guadalquivir; parte de estas marismas están dentro del parque nacional de Doñana. Es el quinto río por longitud de la península ibérica. Tiene 657 km desde la sierra de Cazorla hasta Sanlúcar. En su recorrido por Andalucía de este a oeste, atraviesa ciudades como Andújar, Córdoba o Sevilla. Desde la época prerromana fue conocido como Baetis o Betis, y fue llamado por los árabes Wad al-Kibir a partir del siglo XI.',
            location: {
                center: [-6.34612673381477, 36.81485467551751],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río6',
            alignment: 'right',
            hidden: false,
            title: 'Río Júcar',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Hoz_Jucar_2011-07-10_18-03-34.jpg',
            description: 'El Júcar (en valenciano, Xúquer) es un río de la península ibérica, que discurre por el este de España. Tiene una longitud de 509 km, atraviesa las provincias de Cuenca, Albacete y Valencia, y desemboca en el mar Mediterráneo. Era conocido como Sucro por los romanos. Nace a 1700 m sobre el nivel del mar, en la vertiente meridional del cerro de San Felipe (Montes Universales), y desemboda en Cullera (Comunidad Valenciana).',
            location: {
                center: [-1.428025011827212, 39.19008758182008],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Río7',
            alignment: 'left',
            hidden: false,
            title: 'Río Miño',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Boats_in_Minho_river_%28r%C3%ADo_Mi%C3%B1o%29_in_Vila_Nova_de_Cerveira%2C_Portugal-1.jpg',
            description: 'El Miño es un río del noroeste de la península ibérica, que discurre íntegramente por la comunidad autónoma de Galicia, aunque en su tramo final forma la frontera entre España y Portugal antes de desembocar en el océano Atlántico. Tiene una longitud de 315 km y drena una amplia cuenca de 12 486 km². Es el río más largo de Galicia, y el más caudaloso tras recibir las aguas del Sil, más largo y caudaloso que el propio Miño hasta el punto de confluencia, pero pierde en el ángulo que determina cuál es principal. De ahí, el conocido proverbio popular: “El Sil lleva el agua y el Miño la fama”.',
            location: {
                center: [-8.835257936653042, 41.89245629471649],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema1',
            alignment: 'right',
            hidden: false,
            title: 'Cordilleras Béticas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Mulhacen_Winter.jpg',
            description: 'Las cordilleras Béticas, o sistema Bético, son un conjunto de sistemas montañosos que se extienden por el sur-sudeste de la península ibérica. Se extienden por más de 600 km, desde el estrecho de Gibraltar hasta el cabo de la Nao, incluso continuando por debajo del mar Mediterráneo hasta la sierra de Tramontana en Mallorca. Forman parte del Arco de Gibraltar y se subdividen en las cordilleras Prebética, Subbética y Penibética. Se trata de uno de los principales conjuntos del relieve de España. Su extremo más estrecho se encuentra en la zona del estrecho de Gibraltar y se va ensanchando hacia la zona oriental, donde se pone en contacto con el zócalo herciniano de la Meseta Central. El nombre del sistema montañoso deriva de la antigua provincia romana de la Baetica, una de las provincias de la Roma imperial en Hispania.',
            location: {
                center: [-3.2093059577144034, 37.08016368252006],
                zoom: 10,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema2',
            alignment: 'left',
            hidden: false,
            title: 'Pirineos',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Pyrenees_Mountains_view_from_satellite.jpg',
            description: 'Los Pirineos o el Pirineo es una cordillera montañosa situada al norte de la península ibérica, que hace de frontera natural entre España y Francia. Se extiende en dirección este-oeste a lo largo de 491 km aproximadamente, desde el cabo de Creus en el mar Mediterráneo hasta su unión con la cordillera Cantábrica, donde se ha establecido la falla de Pamplona como su límite convencional geológico, no existiendo interrupción geográfica entre ambas formaciones. En su parte central tiene una anchura de unos 150 km. Estas montañas albergan picos de más de 3000 metros de altitud, como el Aneto (3404 m), el Posets (3375 m), el Monte Perdido (3355 m), el Pico Maldito (3350 m), el Pico Espadas (3332 m), el Vignemale (3298 m), el Balaitus (3144m) y la Pica d,Estats (3143 m), pequeños glaciares, lagos y circos de origen glaciar, y numerosos valles y cañones.',
            location: {
                center: [0.06374960626251536, 42.7053961546128],
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema3',
            alignment: 'right',
            hidden: false,
            title: 'Cordillera Cantábrica',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Primeras_nieves_en_el_Macizo_Central_adjusted.jpg',
            description: 'La cordillera Cantábrica es una cordillera localizada en el norte de la península ibérica que discurre paralela al mar Cantábrico. Ubicada en España, tiene una longitud de unos 480 kilómetros (dirección oeste-este) y una media de 100 km de anchura (dirección norte-sur), que en algunos tramos se engruesa hasta alcanzar los 120 km y en otros puntos no supera los 65 km. Se trata de la cadena montañosa más occidental de Europa.',
            location: {
                center: [-4.823335340705146, 43.21993684674194],
                zoom: 9,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema4',
            alignment: 'left',
            hidden: false,
            title: 'Sistema Central',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Sierra_de_Gredos_von_oben.jpg',
            description: 'El sistema Central es una cordillera situada en el centro de la península ibérica que atraviesa la denominada Meseta Central. Con una orientación oeste-este en su mitad occidental, y suroeste-noreste en su mitad oriental, tiene una longitud aproximada de 600 km y se extiende desde el centro de Portugal hasta el sistema Ibérico, en el centro-noreste de España. Constituye la divisoria entre la submeseta norte y la submeseta sur, además de, administrativamente, la separación natural entre la comunidad autónoma de Castilla y León,nota al norte, y las de Castilla-La Mancha, Comunidad de Madrid y Extremadura, al sur. La mayor elevación del sistema es el pico Almanzor (2592  m sobre el nivel del mar), situado en la sierra de Gredos.',
            location: {
                center: [-4.113379819331953, 40.720526897366895],
                zoom: 9,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema5',
            alignment: 'right',
            hidden: false,
            title: 'Sistema Ibérico',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Picos_de_Urbi%C3%B3n_2.jpeg',
            description: 'El sistema Ibérico es un sistema montañoso de altitud media ubicada en el interior de la península ibérica, en España. Algunos de sus picos más altos son el Moncayo (2315 m), su cumbre de mayor altitud, el monte San Lorenzo (2271 m), el pico de Urbión (2228 m), el pico de Peñarroya (2028 m), el pico de Javalambre (2019 m) o el de Peñagolosa (1815 m). En ellos nacen ríos como el Duero, el Tajo, el Turia, el Júcar o el Cabriel. Este sistema separa la Meseta Central de la depresión del Ebro, condicionando los climas de ambas regiones y de la Serranía Celtibérica.',
            location: {
                center: [-1.6718883053975953, 41.67190949392393],
                zoom: 9,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema6',
            alignment: 'left',
            hidden: false,
            title: 'Cordilleras Costero-Catalanas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Spain%2C_Catalonia%2C_Mass%C3%ADs_del_Montgr%C3%AD.JPG',
            description: 'Las Cordilleras Costero Catalanas, también conocidas como Sistema Mediterráneo Catalán, son un sistema dual de alineaciones montañosas paralelas a la costa, la Cordillera Prelitoral y la Cordillera Litoral. Estas dos cadenas están separadas por una fosa tectónica conocida como la Depresión Prelitoral.',
            location: {
                center: [2.58481363765823, 41.69337322249301],
                zoom: 9,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema7',
            alignment: 'right',
            hidden: false,
            title: 'Montes de Toledo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Montes_de_Toledo_-_Retuerta_del_Bullaque2.jpg',
            description: 'Los montes de Toledo son una cordillera en la Submeseta Sur de la península ibérica, formada por varias sierras, que separan la cuenca del Tajo de la del Guadiana. Tienen una longitud máxima de este a oeste de unos 350 km y una anchura máxima de unos 100 km en las proximidades de Sonseca y Puertollano. Culminan en la sierra de Guadalupe, donde el pico Villuercas (provincia de Cáceres) alcanza una altura de 1603 m sobre el nivel del mar. Constituye un corredor ambiental de características similares que une La Mancha con Portugal.',
            location: {
                center: [-4.380471436892521, 39.53264448633144],
                zoom: 10,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Sistema8',
            alignment: 'left',
            hidden: false,
            title: 'Sierra Morena',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Despe%C3%B1aperros%2C_2016_%2801%29.jpg',
            description: 'Sierra Morena es una cordillera del sur de la península ibérica, que separa la Meseta Central de la depresión del Guadalquivir. Geológicamente es el borde de la meseta fracturado y levantado por el empuje de las fuerzas alpinas sobre el zócalo herciniano de la Meseta. En esta predominan las fallas. Tiene unos 400 km de longitud. Cultural, geográfica y etnológicamente se considera Sierra Morena como la frontera natural entre Andalucía y La Mancha. ',
            location: {
                center: [-3.5814240001975106, 38.39956199719343],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad1',
            alignment: 'right',
            hidden: false,
            title: 'Madrid',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Plaza_Mayor_De_Madrid_%28215862629%29_edited.jpeg',
            description: 'Madrid es un municipio y una ciudad de España, con categoría histórica de villa. Constituye la capital del Estado y de la Comunidad de Madrid. En su término municipal, el más poblado de España, viven 3 305 408 personas empadronadas, según el INE de 2021, lo que la convierte en la segunda ciudad más poblada de la Unión Europea, por detrás de París. Su área metropolitana tiene 6 779 888 habitantes, la segunda más poblada de la Unión Europea tras la de París, en otras fuentes detrás también de la Región del Ruhr.',
            location: {
                center: [-3.703454328104676, 40.41274317082081],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad2',
            alignment: 'left',
            hidden: false,
            title: 'Barcelona',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Avinguda_de_la_Reina_Maria_Cristina_Barcelona_2013_edited.jpeg',
            description: 'Barcelona es una ciudad española, capital de la comunidad autónoma de Cataluña, de la provincia homónima y de la comarca del Barcelonés. Con una población de 1 664 162 habitantes en 2020, es la segunda ciudad más poblada de España y de la península ibérica después de Madrid, y la décima de la Unión Europea. El área metropolitana de Barcelona tiene 3 339 279 (2020) y el ámbito metropolitano de Barcelona 4 895 876 habitantes (2019), siendo así la quinta ciudad de mayor población de la Unión Europea.',
            location: {
                center: [2.165081618659306, 41.382384007934576],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad3',
            alignment: 'right',
            hidden: false,
            title: 'Valencia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Ciutat_de_les_Arts_i_les_Ci%C3%A8ncies%2C_Val%C3%A8ncia%2C_Valencia%2C_Spain_-_panoramio_%283%29.jpg',
            description: 'Valencia es un municipio y una ciudad de España, capital de la provincia homónima y de la Comunidad Valenciana. Con una población de 801 545 habitantes (2020), que sube a 1 581 057 habitantes (2020) si se incluye su espacio urbano, es la tercera ciudad y área metropolitana más poblada de España, por detrás de Madrid y Barcelona.',
            location: {
                center: [-0.37213926519013896, 39.47339871742206],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad4',
            alignment: 'left',
            hidden: false,
            title: 'Bilbao',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Museo_Guggenheim_Bilbao%2C_Bilbao._%2823811575351%29.jpg',
            description: 'Bilbao (en euskera, Bilbo) es un municipio situado en el norte de España y una villa de dicho municipio, capital de la provincia y territorio histórico de Vizcaya, en la comunidad autónoma del País Vasco. La villa de Bilbao es la capital y única localidad del municipio, y con 346 843 habitantes según el padrón de 2019, es la urbe más poblada de la comunidad autónoma, siendo la cabecera del área metropolitana de Bilbao, una conurbación de más de 1 000 000 de habitantes que se extiende a lo largo de la ría de Bilbao o del Nervión.',
            location: {
                center: [-2.928456598257021, 43.26392839890009],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad5',
            alignment: 'right',
            hidden: false,
            title: 'Zaragoza',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Zaragoza_-_Bas%C3%ADlica_del_Pilar_y_r%C3%ADo_Ebro.jpg',
            description: 'Zaragoza es una ciudad y un municipio de España, capital de la provincia homónima y de la comunidad autónoma de Aragón. Perteneciente a la Comarca Central, tiene un régimen legal especial como capital de Aragón. Con una población de 681 877 habitantes (INE 2020) es la quinta ciudad más poblada del país, tras Madrid, Barcelona, Valencia y Sevilla.',
            location: {
                center: [-0.8805390282002046, 41.65483543302978],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad6',
            alignment: 'left',
            hidden: false,
            title: 'Sevilla',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Monumental_Plaza_de_Espa%C3%B1a_de_Sevilla_edited.jpg',
            description: 'Sevilla es un municipio y una ciudad de España, capital de la provincia homónima y de Andalucía. Contaba con 684 234 habitantes en 2021, por lo que es la ciudad más poblada de Andalucía, la cuarta de España después de Madrid, Barcelona y Valencia y la 32.ª de la Unión Europea. El municipio tiene una superficie de 140,8 km². El área metropolitana de Sevilla está compuesta por 46 municipios, incluye a una población de 1 548 741 habitantes (INE, 2020) y ocupa una superficie de 4905,04 km².',
            location: {
                center: [-5.989552712213883, 37.3813667315533],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad7',
            alignment: 'right',
            hidden: false,
            title: 'Córdoba',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Mezquita_de_C%C3%B3rdoba.jpg',
            description: 'Córdoba es una ciudad y municipio español en Andalucía, capital de la provincia homónima, situada en una depresión a orillas del Guadalquivir y al pie de Sierra Morena. Alberga una población de 326 039 habitantes en 2020, siendo la tercera ciudad más grande y poblada de Andalucía tras Sevilla y Málaga, y la duodécima de España. Su área metropolitana comprende ocho municipios, con una población de 360 298 habitantes en 2020, la vigésima tercera más poblada de España.',
            location: {
                center: [-4.7802567727834155, 37.879274467326674],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad8',
            alignment: 'left',
            hidden: false,
            title: 'La Coruña',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Herkulesov_toranj_-_panoramio_cropped.jpg',
            description: 'La Coruña es una ciudad y un municipio de España situado en la comunidad autónoma de Galicia, capital de la provincia homónima. Importante puerto histórico, se sitúa en la costa noroeste de la península ibérica, en las Rías Altas. El centro de la ciudad se extiende sobre una península unida a tierra firme por un estrecho istmo, por lo que presenta dos fachadas marítimas distintas: la portuaria (hacia la ría de La Coruña) y otra de mar abierto, hacia la ensenada del Orzán, y sobre la que se extienden las principales playas urbanas (Riazor y Orzán).',
            location: {
                center: [-8.409975652206658, 43.36687776887171],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad9',
            alignment: 'right',
            hidden: false,
            title: 'Toledo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Toledo_%2837737041515%29.jpg',
            description: 'Toledo es un municipio y ciudad española, capital de la provincia homónima, en la comunidad autónoma de Castilla-La Mancha. Con una población de 85 449 habitantes (INE 2021), se trata del tercer municipio más poblado de la región. El casco histórico está situado en la margen derecha del Tajo, en una colina rodeada por un pronunciado meandro. El término municipal incluye dos barrios muy separados del núcleo principal: el de Azucaica, en la orilla derecha del río, y el de Santa María de Benquerencia, situado prácticamente enfrente del anterior en la margen izquierda.',
            location: {
                center: [-4.021484238485453, 39.857286088892785],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad10',
            alignment: 'left',
            hidden: false,
            title: 'Badajoz',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Badajoz_desde_la_Torre_de_Espantaperros.jpg',
            description: 'Badajoz es un municipio y ciudad española, capital de la provincia homónima, en la comunidad autónoma de Extremadura. Con una población de 150 984 habitantes (INE 2020), es el municipio más poblado de Extremadura y el mayor centro económico y comercial de la comunidad autónoma extremeña. El río Guadiana surca la ciudad de este a oeste para después girar hacia el sur, donde hace de frontera con Portugal. En torno al 84,77 % de sus habitantes reside en el núcleo urbano; el resto está ubicado en diversas pedanías y núcleos dependientes.',
            location: {
                center: [-6.970943957926982, 38.87798531594075],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad11',
            alignment: 'right',
            hidden: false,
            title: 'Lugo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Muralla_Catedral_Lugo_%28cropped%29.jpg',
            description: 'Lugo es una ciudad y municipio de España, capital de la comarca y provincia homónimas, situada en el noroeste del país, en Galicia. De origen romano, fue fundada en el año 25 a. C. por Paulo Fabio Máximo y es la más antigua de Galicia. Construida en las cercanías de un castro, en la época romana recibió el nombre de Lucus Augusti. Numerosos restos romanos, muchos de ellos conservados en el Museo Provincial, son testimonio de sus primeros años de historia, especialmente su muralla romana, única en el mundo, que conserva todo su perímetro, y que fue declarada Patrimonio de la Humanidad en 2000. Dista de la costa 85 km, aunque su provincia tiene mar.',
            location: {
                center: [-7.558133773461441, 43.01105713690541],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad12',
            alignment: 'left',
            hidden: false,
            title: 'Cuenca',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Casas_Colgadas_de_Cuenca_%28cropped%29.jpg',
            description: 'Cuenca es una ciudad y municipio español perteneciente a la comunidad autónoma de Castilla-La Mancha, capital de la provincia homónima. Está situada algo al norte del centro geográfico de la provincia, a una altitud media de 946m y su extenso término municipal, de unos 911 km², es uno de los mayores de España. En 2020 el municipio contaba con una población empadronada de 54 621 habitantes (INE 2020).',
            location: {
                center: [-2.1311236418283874, 40.07639234445853],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad13',
            alignment: 'right',
            hidden: false,
            title: 'Albacete',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Pasaje_Lodares.jpg',
            description: 'Albacete es una ciudad y un municipio de España en la comunidad autónoma de Castilla-La Mancha, capital de la provincia homónima. Es la capital más oriental de Castilla-La Mancha, localizada al sureste de la península ibérica en medio de una vasta campiña de un alto valor natural próxima al cerro de San Blas, sobre el que se emplaza la ciudad medieval de Chinchilla de Montearagón, en la región histórica de La Mancha de Montearagón, encuadrada actualmente dentro de la comarca de Los Llanos. Es, ampliamente, la ciudad más grande y más poblada de Castilla-La Mancha, con 172 722 habitantes (INE 2021). Su área metropolitana, que asciende a 217 774 habitantes, es la mayor de Castilla-La Mancha y una de las treinta mayores aglomeraciones urbanas del país.',
            location: {
                center: [-1.8564926580048002, 38.99164789842183],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Ciudad14',
            alignment: 'left',
            hidden: false,
            title: 'Seseña',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Vistas_%288863194689%29.jpg',
            description: 'Seseña es un municipio español de la provincia de Toledo, en la comunidad autónoma de Castilla-La Mancha, limítrofe con la Comunidad de Madrid. Está compuesto por cinco núcleos de población: Seseña, Seseña Nuevo, Vallegrande, La Estación y El Quiñón. Está situada junto a los límites municipales de Valdemoro, Ciempozuelos, Aranjuez, Esquivias y Borox. Pertenece a la histórica comarca de La Sagra y se ubica a 36 kilómetros del centro de Madrid.',
            location: {
                center: [-3.6929522268967996, 40.104279890633066],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};