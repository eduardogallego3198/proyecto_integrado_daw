CREATE DATABASE IF NOT EXISTS libreria;

USE libreria;

CREATE TABLE IF NOT EXISTS clientes(
    id                INT(100) AUTO_INCREMENT NOT NULL,
    nombre            VARCHAR(100) NOT NULL,
    apellidos         VARCHAR(100) NOT NULL,
    direccion         VARCHAR(100) NOT NULL,
    dni               VARCHAR(9) NOT NULL,
    telefono          VARCHAR(20) NOT NULL,
    email             VARCHAR(100) NOT NULL,
    nombre_usuario    VARCHAR(100) NULL,
    password          VARCHAR(200) NULL,
    rol               VARCHAR(100), NULL DEFAULT 'cliente',
    token             VARCHAR(100) NULL,
    CONSTRAINT pk_clientes PRIMARY KEY (id),
    CONSTRAINT uq_email UNIQUE KEY (email)
) ENGINE=InnoDB;

INSERT INTO clientes VALUES(NULL, 'Antonio', 'Castro Martínez', 'Rosales, 25', '11111111A', '611111111', 'acastro@mail.com', 'acastro', '$2b$08$JWXQwml0zy7hFDrfGBbv/ORBzfcK/rxQd5DBAtgbMyO3KB3PzvyAa', 'cliente', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkyMDgxNzA5LCJleHAiOjE1OTIxNjgxMDl9.mTmqM-iGKSXVs3Keo2s005KQjVp8mXfwLo9nyDOJJB8');
INSERT INTO clientes VALUES(NULL, 'María', 'Sánchez Pérez', 'Perales, 12', '22222222B', '622222222', 'msanchez@mail.com', 'msanchez', '$2b$08$L.bOu6nXRahmqe9eLEI/cOurmphIaHZ1lYlAKBR/6Fx9G7vkLF7zS', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Pedro', 'López Díaz', 'Granada, 4', '33333333C', '633333333', 'plopez@mail.com', 'plopez', '$2b$08$gnVViww3/x.tomx4jUHHJ./pxZghm/QRXojxf.RX9rO0Vxop16V5u', 'cliente', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTkyMTQzODkxLCJleHAiOjE1OTIyMzAyOTF9.QXz_ZUn3CO_q5dPFPY8crxU2Keh8A0Yi-0YnkxbkcZA');
INSERT INTO clientes VALUES(NULL, 'Andrés', 'Navarro Gómez', 'Madrid, 7', '55555555E', '655555555', 'anavarro@mail.com', 'anavarro', '$2b$08$B2R2UxH79Vo4swm0vZwUNOxrczwAEdriatSUUHhL7Stj5alNEk6e2', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Cristina', 'Pérez Palacios', 'Naranjo, 39', '66666666F', '666666666', 'cperez@mail.com', 'cperez', '$2b$08$g8bR/vigN2zwfdW9th9TqOWrUk6TSe7r8rv9KcZfysJjPIpziTJjC', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Juan', 'Ruíz Puentes', 'San Pedro, 13', '77777777G', '677777777', 'jruiz@mail.com', 'jruiz', '$2b$08$L79yuId9TNfix1Gtz/Kx7ODl7hhHg0M9K7PqFGyudBO/JdDMN0xYy', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Marta', 'Alonso García', 'Sevilla, 5', '88888888H', '688888888', 'malonso@mail.com', 'malonso', '$2b$08$/TqTToflToXSwXCbB7fPn.BKXiFCv7SSBLA7ay0WaTXkmwk6fXls6', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Francisco', 'Gutiérrez Gallego', 'Manzanares, 26', '99999999I', '699999999', 'fgutierrez@mail.com', 'fgutierrez', '$2b$08$3GoZDKo2HYjmy6hnkrvOp.Xio.52srqyyvmuAOOAKOjQS1.mwHsvO', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Diana', 'Fenández Salas', 'Valencia, 59', '10101010J', '610101010', 'dfernandez@mail.com', 'dfernandez', '$2b$08$G/UGAyh2ZgG1WRWKafa4e.SL0eGl5caHwElhzI/C5GoGrT25E2EhK', 'cliente', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU5MjE2MDUyOCwiZXhwIjoxNTkyMjQ2OTI4fQ.qdUGpRPYbKJpweuVx-xwGabBkljZHXdFrn0sYj-qH78');
INSERT INTO clientes VALUES(NULL, 'Pedro', 'Alminares García', 'Cerezo, 34', '22624626G', '603431414', 'palminares@mail.com', 'palminares', '$2b$08$5i9opj4mY8BYzn6uaIsj.ujyUIOKwJGz.SUHGlRqobKQ.wrRCo8Ji', 'cliente', NULL);
INSERT INTO clientes VALUES(NULL, 'Fernando', 'García Martínez', 'Calle arenal, nº3', '56565656J', '655655655', 'fgarcia@gmail.com', 'fgarcia', '$2b$08$3Sfcet0OHe9S6/aCQselqOXyUN1g7b.Xtzyrff15ZhQRYjoF/5Eaa', 'cliente', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTU5MjE1OTYzMCwiZXhwIjoxNTkyMjQ2MDMwfQ.KPOuvxaxlVqY4UeVkrj3ND1A1SyjpIPsv3kD7TvQjx0');


CREATE TABLE IF NOT EXISTS encargados(
    id           INT(100) AUTO_INCREMENT NOT NULL,
    nombre       VARCHAR(100) NOT NULL,
    apellidos    VARCHAR(100) NOT NULL,
    CONSTRAINT pk_encargados PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO encargados VALUES (NULL, 'Mario', 'Pérez Serrano');
INSERT INTO encargados VALUES (NULL, 'Nuria', 'Fernández Sánchez');

CREATE TABLE IF NOT EXISTS libros(
    id                 INT(100) AUTO_INCREMENT NOT NULL,
    titulo             VARCHAR(100) NOT NULL,
    autor              VARCHAR(100) NOT NULL,
    editorial          VARCHAR(100) NOT NULL,
    genero             VARCHAR(100) NOT NULL,
    ano_publicacion    INT(4) NOT NULL,
    paginas            VARCHAR(100) NOT NULL,
    descripcion        TEXT NOT NULL,
    stock              INT(100) NOT NULL,
    precio             DECIMAL(4,2) NOT NULL,
    CONSTRAINT pk_libros PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO libros VALUES (NULL, 'Fahrenheit 451', 'Ray Bradbury', 'Debolsillo', 
    'Ciencia ficción', 2018, 192, 'Fahrenheit 451: la temperatura a la que el 
    papel se enciende y arde. Guy Montag es un bombero y el trabajo de un 
    bombero es quemar libros, que están prohibidos porque son causa de 
    discordia y sufrimiento.El Sabueso Mecánico del Departamento de Incendios, 
    armado con una letal inyección hipodérmica, escoltado por helicópteros, 
    está preparado para rastrear a los disidentes que aún conservan y leen 
    libros. Como 1984, de George Orwell, como Un mundo feliz, de Aldous Huxley, 
    Fahrenheit 451 describe una civilización occidental esclavizada por los 
    medios, los tranquilizantes y el conformismo.La visión de Bradbury es 
    asombrosamente profética: pantallas de televisión que ocupan paredes y 
    exhiben folletines interactivos; avenidas donde los coches corren a 150 
    kilómetros por hora persiguiendo a peatones; una población que no escucha 
    otra cosa que una insípida corriente de música y noticias transmitidas por 
    unos diminutos auriculares insertados en las orejas.«Fahrenheit 451 es el 
    más convincente de todos los infiernos conformistas.» KINGSLEY AMIS', 10, 
    9.50);
INSERT INTO libros VALUES (NULL, 'Star Wars: Maestro y aprendiz', 
    'Claudia Gray', 'Planeta Cómic', 'Ciencia ficción', 2020, 432, 'Novela por la 
    autora súper ventas Claudia Gray (Estrellas Perdidas, Linaje, Leia: 
    Princesa de Alderaan.
    Cuando el Jedi Rael Averross, otro ex alumno de Dooku, solicita su ayuda 
    con una disputa política, Jinn y Kenobi viajan a la corte real de Pijal 
    para lo que podría ser su misión final juntos. Lo que debería ser una 
    simple tarea se nubla rápidamente por el engaño y por visiones de desastres 
    violentos que se apoderan de la mente de Qui-Gon.

    A medida que crece la fe de Qui-Gon en la profecía, se pone a prueba la fe 
    de Obi-Wan en él, así como surge una amenaza que exigirá que el Maestro y el 
    aprendiz se unan como nunca antes, o se dividan para siempre. ', 10, 19.00);
INSERT INTO libros VALUES (NULL, 'Don Quijote de la Mancha', 
    'Miguel de Cervantes', 'Destino', 'Clásicos',  2015, 1040, 'La traducción 
    íntegra del Quijote al castellano actual, de la mano de Andrés Trapiello, 
    escritor y reconocido experto en Cervantes.

    “En un lugar de la Mancha, de cuyo nombre no quiero acordarme, vivía no hace 
    mucho un hidalgo de los de lanza ya olvidada, escudo antiguo, rocín flaco y 
    galgo corredor.”

    Con estas palabras, Andrés Trapiello presenta el que es, sin lugar a dudas, 
    uno de los más ambiciosos proyectos literarios de los últimos tiempos: la 
    primera traducción impresa en castellano actual delQuijote.

    El Quijote, la novela acaso más original e influyente de la literatura, es 
    también una de las menos leídas por los lectores españoles e 
    hispanohablantes, a menudo buenos y cultivados lectores, abrumados o 
    desalentados por la dificultad de un castellano, el del siglo XVII, más 
    alejado ya del nuestro de lo que se cree. Sólo pensando en ellos y en hacer 
    que el Quijote vuelva a ser esa novela“clara”  en la que no haya“nada que 
    resulte difícil”, para que, como decía el bachiller Sansón Carrasco, los 
    niños la manoseen, los mozos la lean, los hombres la entiendan y los viejos 
    la celebren, Trapiello se ha decidido a adaptarla íntegra y fielmente, sin 
    alejarse nunca del maravilloso lenguaje cervantino.

    Como dice Mario Vargas Llosa en el prólogo a esta singular edición...', 10, 
    22.75);
INSERT INTO libros VALUES (NULL, 'Odisea', 'Homero', 'Gredos', 'Clásicos', 2014, 
    472, 'Las andanzas y aventuras de Odiseo, vividas en el lapso de diez años 
    que duró su regreso al hogar tras una activa participación en la guerra de 
    Troya, conforman la apretada trama, casi novelesca, de uno de los grandes 
    monumentos de nuestro patrimonio intelectual. Probablemente compuesta a 
    fines del siglo VIII a.C., la Odisea nos adentra en un mundo real, el 
    Mediterráneo antiguo, pero repleto de peligros y poblado por seres 
    fabulosos: magas,ninfas, gigantes, monstruos. Los avatares marinos del 
    héroe en esta segunda gran epopeya griega alejan a Odiseo (Ulises desde los 
    romanos) de los escenarios de la épica, para situarlo en un ámbito 
    fantástico, más próximo al mundo maravilloso de los cuentos de misterio.', 
    10, 10.40);
INSERT INTO libros VALUES (NULL, 'SPQR: Una historia de la antigua Roma', 
    'Mary Beard', 'Booket', 'Historia', 2019, 672, 'Como culminación de 
    cincuenta años de estudio e investigación sobre la antigua Roma, Mary Beard, 
    profesora de la Universidad de Cambridge, nos ofrece una magistral visión de 
    conjunto de su historia: una historia que, nos dice, «al cabo de dos mil 
    años, sigue siendo la base de nuestra cultura y nuestra política, de cómo 
    vemos el mundo y nuestro lugar en él». Un especialista como Peter Heather, 
    profesor del King’s College, señala que Beard triunfa en la ambiciosa tarea 
    de «darnos una respuesta coherente a la cuestión de por qué Roma se 
    expandió de un modo tan espectacular». Nada más alejado, sin embargo, de 
    una síntesis académica al uso. En la mayoría de las reseñas críticas de 
    este libro aparecen asociados los calificativos de «magistral» y 
    «entretenido». Catherine Edwards, por ejemplo, nos dice que «el análisis de 
    las instituciones y de las estructuras se ve constantemente animado en estas 
    páginas por episodios apasionantes».', 10, 12.30);
INSERT INTO libros VALUES (NULL, 'Una historia de España', 
    'Arturo Pérez-Reverte', 'Alfaguara', 'Historia', 2019, 256, 'Por primera 
    vez un volumen reúne la historia de España escrita por Arturo Pérez-Reverte 
    durante más de cuatro años en su columna «Patente de corso» del XL Semanal.

    Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra 
    accidentada historia a través de los siglos. Una obra concebida por el autor 
    para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para 
    mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco 
    sobre ello y contarlo por escrito de una manera poco ortodoxa.»
    A lo largo de los 91 capítulos más el epílogo de los que consta el libro, 
    Arturo Pérez-Reverte narra los principales acontecimientos ocurridos desde 
    los orígenes de nuestra historia y hasta el final de la Transición con una 
    mirada subjetiva, construida con las dosis exactas de lecturas, experiencia 
    y sentido común. «La misma mirada con que escribo novelas y artículos —dice 
    el autor—; no la elegí yo, sino que es resultado de todas esas cosas: la 
    visión, ácida más a menudo que dulce, de quien, como dice un personaje de 
    una de mis novelas, sabe que ser lúcido en España aparejó siempre mucha 
    amargura, mucha soledad y mucha desesperanza.» Arturo Pérez-Reverte', 10, 
    17.95);
INSERT INTO libros VALUES (NULL, '101 destinos de España sorprendentes', 
    'José Paz Saz', 'Anaya Touring', 'Guías de viaje', 2018, 224, 'Ya no es necesario 
    viajar a otros países para contemplar bosques singulares, cañones 
    sobrecogedores, formaciones geológicas que quitan el aliento, cascadas de 
    ensueño, senderos sorprendentes, playas paradisíacas y enclaves 
    irrepetibles. Más allá de los destinos turísticos tradicionales, 101 
    destinos de España sorprendentes descubre un buen número de rincones 
    fascinantes, aunque poco conocidos de nuestro país. Son lugares ignorados 
    por una buena parte de los viajeros y el secreto mejor guardado de los 
    habitantes de la zona. Todos estos espacios naturales están recogidos en 
    este libro ilustrado con espectaculares fotografías y acompañado por 
    sugerentes textos que ofrecen una mirada insólita y singular de España. 
    ¿Nos acompañas?', 10, 19.85);
INSERT INTO libros VALUES (NULL, 'París', 'VV.AA.', 'GeoPlaneta', 
    'Guías de viaje', 2019, 416, '¡Bienvenidos a París! En la Ciudad de la Luz 
    los museos, los bulevares flanqueados por monumentos y los bistrós clásicos 
    se complementan con una nueva ola de galerías multimedia, tiendas de diseño 
    y start-ups tecnológicas. La capital francesa es un catálogo de emblemática 
    arquitectura, fabulosa gastronomía, compras con estilo y tesoros artísticos 
    que tiene opciones para todos los gustos y todos los públicos.', 10, 23.75);
INSERT INTO libros VALUES (NULL, 'El arte de la composición', 'Fran Nieto', 
    'Jdej Editores', 'Fotografía', 2017, 224, 'La capacidad para ver una gran 
    imagen y luego organizar sus elementos de forma eficaz es una de las 
    principales habilidades que identifica a los grandes fotógrafos. La cámara 
    proporciona un control total sobre la exposición, pero una foto nunca 
    tendrá alma ni será memorable sin una composición acertada. El conocido 
    fotógrafo Fran Nieto trata todos los temas relacionados con la composición 
    de manera exhaustiva pero amena. Aporta un nuevo enfoque sobre esta 
    disciplina que se apoya en los últimos avances sobre percepción humana y nos 
    muestra, con ejemplos muy didácticos y un lenguaje sencillo, cuáles son las 
    mejores estrategias para reforzar el mensaje de nuestra imagen 
    transmitiendo emociones. Con su ayuda la calidad de nuestro trabajo 
    mejorará drásticamente y estaremos más satisfechos con los resultados 
    obtenidos. El objetivo de esta obra es examinar, elegir y organizar los 
    elementos visuales en el visor para logra la comunicación de lo que queremos 
    representar, respetando en todo momento la personalidad y visión personal 
    del fotógrafo. Los conocimientos teóricos y prácticos se superponen para 
    sugerir soluciones a cada caso concreto al que nos enfrentemos, proponiendo 
    un abanico de posibilidades en función de la intencionalidad del autor y de 
    su estilo personal', 10, 25.55);
INSERT INTO libros VALUES (NULL, 'La luz de los artistas visuales', 
    'Richard Yot', 'Blume', 'Fotografía', 2019, 176, 'Descubra cómo utilizar la 
    luz y la iluminación en una amplia variedad de medios con esta guía para 
    artistas visuales. Propiedades fundamentales de la luz natural y la luz 
    artificial, cómo crear imágenes realistas observando a las personas y el 
    entorno, y cómo usar la luz en composición y diseño. Actualizada, con nuevas 
    fotografías y material gráfico renovado, además de 15 ejercicios prácticos. 
    Una obra con bases sólidas y reales de la mecánica de la luz para ayudar a 
    los artistas a tomar decisiones creativas con mayor libertad. Conocer las 
    reglas permite valorar mejor las cosas cuando se trata de aplicarlas o 
    romperlas. Una fuente indispensable para animadores, ilustradores digitales, 
    pintores, fotógrafos y artistas de cualquier medio.', 10, 23.65);

CREATE TABLE IF NOT EXISTS pedidos(
    id              INT(100) AUTO_INCREMENT NOT NULL,
    fecha           DATE NOT NULL,
    id_encargado    INT(100) NOT NULL,
    id_cliente      INT(100) NOT NULL,
    pagado          TINYINT(1) NOT NULL,
    total           DECIMAL(7,2) NOT NULL,
    estado          VARCHAR(100) NOT NULL,
    CONSTRAINT pk_pedidos PRIMARY KEY (id),
    CONSTRAINT fk_encargado_pedido FOREIGN KEY (id_encargado) REFERENCES encargados(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_cliente_pedido FOREIGN KEY (id_cliente) REFERENCES clientes(id) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO pedidos VALUES (NULL, '2020-04-27', 1, 3, 1, 12.30, 'Entregado');
INSERT INTO pedidos VALUES (NULL, '2020-04-30', 2, 7, 1, 33.25, 'Entregado');
INSERT INTO pedidos VALUES (NULL, '2020-05-02', 1, 1, 1, 17.95, 'Entregado');
INSERT INTO pedidos VALUES (NULL, '2020-05-05', 2, 8, 1, 19.00, 'Entregado');
INSERT INTO pedidos VALUES (NULL, '2020-05-10', 1, 5, 1, 30.25, 'Enviado');
INSERT INTO pedidos VALUES (NULL, '2020-05-16', 2, 4, 1, 25.55, 'En preparación');

CREATE TABLE IF NOT EXISTS lineas_pedidos(
    id             INT(100) AUTO_INCREMENT NOT NULL,
    id_pedido      INT(100) NOT NULL,
    id_libro       INT(100) NOT NULL,
    cantidad       INT(10) NOT NULL,
    total_linea    DECIMAL(7,2) NOT NULL,
    CONSTRAINT pk_lineas_pedidos PRIMARY KEY (id),
    CONSTRAINT fk_pedido_linea_pedido FOREIGN KEY (id_pedido) REFERENCES pedidos(id) ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_libro_linea_pedido FOREIGN KEY (id_libro) REFERENCES libros(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO lineas_pedidos VALUES (NULL, 1, 5, 1, 12.3);
INSERT INTO lineas_pedidos VALUES (NULL, 2, 1, 1, 9.50);
INSERT INTO lineas_pedidos VALUES (NULL, 2, 8, 1, 23.75);
INSERT INTO lineas_pedidos VALUES (NULL, 3, 6, 1, 17.95);
INSERT INTO lineas_pedidos VALUES (NULL, 4, 2, 1, 19.00);
INSERT INTO lineas_pedidos VALUES (NULL, 5, 4, 1, 10.40);
INSERT INTO lineas_pedidos VALUES (NULL, 5, 7, 1, 19.85);
INSERT INTO lineas_pedidos VALUES (NULL, 6, 9, 1, 25.55);

CREATE TABLE IF NOT EXISTS devoluciones(
    id            INT(100) AUTO_INCREMENT NOT NULL,
    fecha         DATE NOT NULL,
    id_cliente    INT(100) NOT NULL,
    total         DECIMAL(7,2) NOT NULL,
    estado        VARCHAR(100) NOT NULL,
    CONSTRAINT pk_devoluciones PRIMARY KEY (id),
    CONSTRAINT fk_cliente_devolucion FOREIGN KEY (id_cliente) REFERENCES clientes(id) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO devoluciones VALUES (NULL, '2020-05-11', 3, 23.75, 'Completada');
INSERT INTO devoluciones VALUES (NULL, '2020-05-15', 5, 10.40, 'En curso');

CREATE TABLE IF NOT EXISTS lineas_devoluciones(
    id               INT(100) AUTO_INCREMENT NOT NULL,
    id_devolucion    INT(100) NOT NULL,
    id_libro         INT(100) NOT NULL,
    cantidad         INT(10) NOT NULL,
    total_linea      DECIMAL(7,2) NOT NULL,
    CONSTRAINT pk_lineas_devoluciones PRIMARY KEY (id),
    CONSTRAINT fk_devolucion_linea_devolucion FOREIGN KEY (id_devolucion) REFERENCES devoluciones(id) ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_libro_linea_devolucion FOREIGN KEY (id_libro) REFERENCES libros(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO lineas_devoluciones VALUES (NULL, 1, 8, 1, 23.75);
INSERT INTO lineas_devoluciones VALUES (NULL, 2, 4, 1, 10.40);

CREATE TABLE IF NOT EXISTS pedidos_proveedores(
    id              INT(100) AUTO_INCREMENT NOT NULL,
    fecha           DATE NOT NULL,
    proveedor       VARCHAR(100) NOT NULL,
    id_encargado    INT(100) NOT NULL,
    pagado          TINYINT(1) NOT NULL,
    total           DECIMAL(7,2) NOT NULL,
    CONSTRAINT pk_pedidos_proveedores PRIMARY KEY (id),
    CONSTRAINT fk_encargados_pedidos_proveedores FOREIGN KEY (id_encargado) REFERENCES encargados(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO pedidos_proveedores VALUES (NULL, '2020-05-07', 'Proveedor 1', 1, 1, 227.50);
INSERT INTO pedidos_proveedores VALUES (NULL, '2020-05-12', 'Proveedor 2', 2, 1, 95.00);

CREATE TABLE IF NOT EXISTS lineas_pedidos_proveedores(
    id                     INT(100) AUTO_INCREMENT NOT NULL,
    id_pedido_proveedor    INT(100) NOT NULL,
    id_libro               INT(100) NOT NULL,
    cantidad               INT(10) NOT NULL,
    total_linea            DECIMAL(7,2) NOT NULL,
    CONSTRAINT pk_lineas_pedidos_proveedores PRIMARY KEY (id),
    CONSTRAINT fk_pedido_proveedor_linea_pedido_proveedor FOREIGN KEY (id_pedido_proveedor) REFERENCES pedidos_proveedores(id) ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_libro_linea_pedido_proveedor FOREIGN KEY (id_libro) REFERENCES libros(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO lineas_pedidos_proveedores VALUES (NULL, 1, 3, 10, 227.50);
INSERT INTO lineas_pedidos_proveedores VALUES (NULL, 2, 1, 10, 95.00);

CREATE TABLE IF NOT EXISTS facturas(
    id             INT(100) AUTO_INCREMENT NOT NULL,
    id_pedido      INT(100) NOT NULL,
    fecha          DATE NOT NULL,
    metodo_pago    VARCHAR(20) NOT NULL,
    CONSTRAINT pk_facturas PRIMARY KEY (id),
    CONSTRAINT fk_pedido_factura FOREIGN KEY (id_pedido) REFERENCES pedidos(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO facturas VALUES (NULL, 1, '2020-04-27', 'Tarjeta');
INSERT INTO facturas VALUES (NULL, 2, '2020-04-30', 'Transferencia');
INSERT INTO facturas VALUES (NULL, 3, '2020-05-02', 'PayPal');
INSERT INTO facturas VALUES (NULL, 4, '2020-05-05', 'Tarjeta');
INSERT INTO facturas VALUES (NULL, 5, '2020-05-10', 'Transferencia');
INSERT INTO facturas VALUES (NULL, 6, '2020-05-16', 'PayPal');

CREATE TABLE IF NOT EXISTS albaranes(
    id                       INT(100) AUTO_INCREMENT NOT NULL,
    id_pedido_proveedor      INT(100) NOT NULL,
    fecha                    DATE NOT NULL,
    metodo_pago              VARCHAR(20) NOT NULL,
    CONSTRAINT pk_albaranes PRIMARY KEY (id),
    CONSTRAINT fk_pedido_proveedor_albaran FOREIGN KEY (id_pedido_proveedor) REFERENCES pedidos_proveedores(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;

INSERT INTO albaranes VALUES (NULL, 1, '2020-05-07', 'Transferencia');
INSERT INTO albaranes VALUES (NULL, 1, '2020-05-12', 'Tarjeta');

CREATE TABLE IF NOT EXISTS consultas(
    id            INT(100) AUTO_INCREMENT NOT NULL,
    id_cliente    INT(100) NOT NULL,
    asunto        VARCHAR(100) NOT NULL,
    mensaje       TEXT NOT NULL,
    CONSTRAINT pk_facturas PRIMARY KEY (id),
    CONSTRAINT fk_cliente_consulta FOREIGN KEY (id_cliente) REFERENCES clientes(id) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS respuestas(
    id             INT(100) AUTO_INCREMENT NOT NULL,
    id_consulta    INT(100) NOT NULL,
    mensaje        TEXT NOT NULL,
    CONSTRAINT pk_facturas PRIMARY KEY (id),
    CONSTRAINT fk_consulta_respuesta FOREIGN KEY (id_consulta) REFERENCES consultas(id) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB;