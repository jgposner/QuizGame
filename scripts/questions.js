var q11s = [
['What is the first book of the Bible?','Genesis','Exodus','Leviticus','Matthew'],
['What is the book before Exodus?','Genesis','Numbers','Deuteronomy','Leviticus'],
["What is the book before Leviticus?","Exodus","Genesis","Deuteronomy","Numbers"],
["What is the book before Numbers?","Leviticus","Exodus","Genesis","Deuteronomy"],
["What is the book before Deuteronomy?","Numbers","Leviticus","Exodus","Joshua"],
["What is the book before Joshua?","Deuteronomy","Numbers","Leviticus","Judges"],
["What is the book before Judges?","Joshua","Deuteronomy","Numbers","Ruth"],
["What is the book before Ruth?","Judges","Joshua","Deuteronomy","1 Samuel"],
["What is the book before 1 Samuel?","Ruth","Judges","Joshua","2 Samuel"],
["What is the book before 2 Samuel?","1 Samuel","Ruth","Judges","1 Kings"],
["What is the book before 1 Kings?","2 Samuel","1 Samuel","Ruth","2 Kings"],
["What is the book before 2 Kings?","1 Kings","2 Samuel","1 Samuel","1 Chronicles"],
["What is the book before 1 Chronicles?","2 Kings","1 Kings","2 Samuel","2 Chronicles"],
["What is the book before 2 Chronicles?","1 Chronicles","2 Kings","1 Kings","Ezra"],
["What is the book before Ezra?","2 Chronicles","1 Chronicles","2 Kings","Nehemiah"],
["What is the book before Nehemiah?","Ezra","2 Chronicles","1 Chronicles","Esther"],
["What is the book before Esther?","Nehemiah","Ezra","2 Chronicles","Job"],
["What is the book before Job?","Esther","Nehemiah","Ezra","Psalms"],
["What is the book before Psalms?","Job","Esther","Nehemiah","Proverbs"],
["What is the book before Proverbs?","Psalms","Job","Esther","Ecclesiastes"],
["What is the book before Ecclesiastes?","Proverbs","Psalms","Job","Song of Solomon"],
["What is the book before Song of Solomon?","Ecclesiastes","Proverbs","Psalms","Isaiah"],
["What is the book before Isaiah?","Song of Solomon","Ecclesiastes","Proverbs","Jeremiah"],
["What is the book before Jeremiah?","Isaiah","Song of Solomon","Ecclesiastes","Lamentations"],
["What is the book before Lamentations?","Jeremiah","Isaiah","Song of Solomon","Ezekiel"],
["What is the book before Ezekiel?","Lamentations","Jeremiah","Isaiah","Daniel"],
["What is the book before Daniel?","Ezekiel","Lamentations","Jeremiah","Hosea"],
["What is the book before Hosea?","Daniel","Ezekiel","Lamentations","Joel"],
["What is the book before Joel?","Hosea","Daniel","Ezekiel","Amos"],
["What is the book before Amos?","Joel","Hosea","Daniel","Obadiah"],
["What is the book before Obadiah?","Amos","Joel","Hosea","Jonah"],
["What is the book before Jonah?","Obadiah","Amos","Joel","Micah"],
["What is the book before Micah?","Jonah","Obadiah","Amos","Nahum"],
["What is the book before Nahum?","Micah","Jonah","Obadiah","Habakkuk"],
["What is the book before Habakkuk?","Nahum","Micah","Jonah","Zephaniah"],
["What is the book before Zephaniah?","Habakkuk","Nahum","Micah","Haggai"],
["What is the book before Haggai?","Zephaniah","Habakkuk","Nahum","Zechariah"],
["What is the book before Zechariah?","Haggai","Zephaniah","Habakkuk","Malachi"],
["What is the book before Malachi?","Zechariah","Haggai","Zephaniah","Matthew"],
["What is the book before Matthew?","Malachi","Zechariah","Haggai","Mark"],
["What is the book before Mark?","Matthew","Malachi","Zechariah","Luke"],
["What is the book before Luke?","Mark","Matthew","Malachi","John"],
["What is the book before John?","Luke","Mark","Matthew","Acts"],
["What is the book before Acts?","John","Luke","Mark","Romans"],
["What is the book before Romans?","Acts","John","Luke","1 Corinthians"],
["What is the book before 1 Corinthians?","Romans","Acts","John","2 Corinthians"],
["What is the book before 2 Corinthians?","1 Corinthians","Romans","Acts","Galatians"],
["What is the book before Galatians?","2 Corinthians","1 Corinthians","Romans","Ephesians"],
["What is the book before Ephesians?","Galatians","2 Corinthians","1 Corinthians","Philippians"],
["What is the book before Philippians?","Ephesians","Galatians","2 Corinthians","Colossians"],
["What is the book before Colossians?","Philippians","Ephesians","Galatians","1 Thessalonians"],
["What is the book before 1 Thessalonians?","Colossians","Philippians","Ephesians","2 Thessalonians"],
["What is the book before 2 Thessalonians?","1 Thessalonians","Colossians","Philippians","1 Timothy"],
["What is the book before 1 Timothy?","2 Thessalonians","1 Thessalonians","Colossians","2 Timothy"],
["What is the book before 2 Timothy?","1 Timothy","2 Thessalonians","1 Thessalonians","Titus"],
["What is the book before Titus?","2 Timothy","1 Timothy","2 Thessalonians","Philemon"],
["What is the book before Philemon?","Titus","2 Timothy","1 Timothy","Hebrews"],
["What is the book before Hebrews?","Philemon","Titus","2 Timothy","James"],
["What is the book before James?","Hebrews","Philemon","Titus","1 Peter"],
["What is the book before 1 Peter?","James","Hebrews","Philemon","2 Peter"],
["What is the book before 2 Peter?","1 Peter","James","Hebrews","1 John"],
["What is the book before 1 John?","2 Peter","1 Peter","James","2 John"],
["What is the book before 2 John?","1 John","2 Peter","1 Peter","3 John"],
["What is the book before 3 John?","2 John","1 John","2 Peter","Jude"],
["What is the book before Jude?","3 John","2 John","1 John","Revelation"],
["What is the book before Revelation?","Jude","3 John","2 John","James"],
["What is the first book of the new testament?","Matthew","Malachi","Genesis","Luke"],
["What is the last book of the old testament?","Malachi","Haggai","Micah","Habakkuk"],
["What is the book after Genesis?","Exodus","Leviticus","Numbers","Deuteronomy"],
["What is the book after Exodus?","Leviticus","Numbers","Deuteronomy","Genesis"],
["What is the book after Leviticus?","Numbers","Deuteronomy","Joshua","Exodus"],
["What is the book after Numbers?","Deuteronomy","Joshua","Judges","Leviticus"],
["What is the book after Deuteronomy?","Joshua","Judges","Ruth","Numbers"],
["What is the book after Joshua?","Judges","Ruth","1 Samuel","Deuteronomy"],
["What is the book after Judges?","Ruth","1 Samuel","2 Samuel","Joshua"],
["What is the book after Ruth?","1 Samuel","2 Samuel","1 Kings","Judges"],
["What is the book after 1 Samuel?","2 Samuel","1 Kings","2 Kings","Ruth"],
["What is the book after 2 Samuel?","1 Kings","2 Kings","1 Chronicles","1 Samuel"],
["What is the book after 1 Kings?","2 Kings","1 Chronicles","2 Chronicles","2 Samuel"],
["What is the book after 2 Kings?","1 Chronicles","2 Chronicles","Ezra","1 Kings"],
["What is the book after 1 Chronicles?","2 Chronicles","Ezra","Nehemiah","2 Kings"],
["What is the book after 2 Chronicles?","Ezra","Nehemiah","Esther","1 Chronicles"],
["What is the book after Ezra?","Nehemiah","Esther","Job","2 Chronicles"],
["What is the book after Nehemiah?","Esther","Job","Psalms","Ezra"],
["What is the book after Esther?","Job","Psalms","Proverbs","Nehemiah"],
["What is the book after Job?","Psalms","Proverbs","Ecclesiastes","Esther"],
["What is the book after Psalms?","Proverbs","Ecclesiastes","Song of Solomon","Job"],
["What is the book after Proverbs?","Ecclesiastes","Song of Solomon","Isaiah","Psalms"],
["What is the book after Ecclesiastes?","Song of Solomon","Isaiah","Jeremiah","Proverbs"],
["What is the book after Song of Solomon?","Isaiah","Jeremiah","Lamentations","Ecclesiastes"],
["What is the book after Isaiah?","Jeremiah","Lamentations","Ezekiel","Song of Solomon"],
["What is the book after Jeremiah?","Lamentations","Ezekiel","Daniel","Isaiah"],
["What is the book after Lamentations?","Ezekiel","Daniel","Hosea","Jeremiah"],
["What is the book after Ezekiel?","Daniel","Hosea","Joel","Lamentations"],
["What is the book after Daniel?","Hosea","Joel","Amos","Ezekiel"],
["What is the book after Hosea?","Joel","Amos","Obadiah","Daniel"],
["What is the book after Joel?","Amos","Obadiah","Jonah","Hosea"],
["What is the book after Amos?","Obadiah","Jonah","Micah","Joel"],
["What is the book after Obadiah?","Jonah","Micah","Nahum","Amos"],
["What is the book after Jonah?","Micah","Nahum","Habakkuk","Obadiah"],
["What is the book after Micah?","Nahum","Habakkuk","Zephaniah","Jonah"],
["What is the book after Nahum?","Habakkuk","Zephaniah","Haggai","Micah"],
["What is the book after Habakkuk?","Zephaniah","Haggai","Zechariah","Nahum"],
["What is the book after Zephaniah?","Haggai","Zechariah","Malachi","Habakkuk"],
["What is the book after Haggai?","Zechariah","Malachi","Matthew","Zephaniah"],
["What is the book after Zechariah?","Malachi","Matthew","Mark","Haggai"],
["What is the book after Malachi?","Matthew","Mark","Luke","Zechariah"],
["What is the book after Matthew?","Mark","Luke","John","Malachi"],
["What is the book after Mark?","Luke","John","Acts","Matthew"],
["What is the book after Luke?","John","Acts","Romans","Mark"],
["What is the book after John?","Acts","Romans","1 Corinthians","Luke"],
["What is the book after Acts?","Romans","1 Corinthians","2 Corinthians","John"],
["What is the book after Romans?","1 Corinthians","2 Corinthians","Galatians","Acts"],
["What is the book after 1 Corinthians?","2 Corinthians","Galatians","Ephesians","Romans"],
["What is the book after 2 Corinthians?","Galatians","Ephesians","Philippians","1 Corinthians"],
["What is the book after Galatians?","Ephesians","Philippians","Colossians","2 Corinthians"],
["What is the book after Ephesians?","Philippians","Colossians","1 Thessalonians","Galatians"],
["What is the book after Philippians?","Colossians","1 Thessalonians","2 Thessalonians","Ephesians"],
["What is the book after Colossians?","1 Thessalonians","2 Thessalonians","1 Timothy","Philippians"],
["What is the book after 1 Thessalonians?","2 Thessalonians","1 Timothy","2 Timothy","Colossians"],
["What is the book after 2 Thessalonians?","1 Timothy","2 Timothy","Titus","1 Thessalonians"],
["What is the book after 1 Timothy?","2 Timothy","Titus","Philemon","2 Thessalonians"],
["What is the book after 2 Timothy?","Titus","Philemon","Hebrews","1 Timothy"],
["What is the book after Titus?","Philemon","Hebrews","James","2 Timothy"],
["What is the book after Philemon?","Hebrews","James","1 Peter","Titus"],
["What is the book after Hebrews?","James","1 Peter","2 Peter","Philemon"],
["What is the book after James?","1 Peter","2 Peter","1 John","Hebrews"],
["What is the book after 1 Peter?","2 Peter","1 John","2 John","James"],
["What is the book after 2 Peter?","1 John","2 John","3 John","1 Peter"],
["What is the book after 1 John?","2 John","3 John","Jude","2 Peter"],
["What is the book after 2 John?","3 John","Jude","Revelation","1 John"],
["What is the book after 3 John?","Jude","Revelation","2 John","James"],
["What is the book after Jude?","Revelation","Jude","3 John","James"],
["What is the last book of the Bible?","Revelation","Jude","James","3 John"]
];


var q25s = [
  ["Dios, en el principio, creó los cielos y la tierra.","Génesis 1:1","Romanos 5:8","Romanos 8:28","Josué 1:8"],
  ["Confía en el Señor de todo corazón, y no en tu propia inteligencia.-- Reconócelo en todos tus caminos, y él allanará tus sendas.","Proverbios 3:5-6","Romanos 10:9","Romanos 8:38-39","Josué 1:9"],
  ["Porque tanto amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna.","Juan 3:16","1 Corintios 15:3-4","2 Corintios 12:9","Salmos 46:10"],
  ["Yo soy el camino, la verdad y la vida —le contestó Jesús—. Nadie llega al Padre sino por mí.","Juan 14:6","Juan 3:17","Efesios 4:32","Salmos 119:11 "],
  ["Ustedes no han sufrido ninguna tentación que no sea común al género humano. Pero Dios es fiel, y no permitirá que ustedes sean tentados más allá de lo que puedan aguantar. Más bien, cuando llegue la tentación, él les dará también una salida a fin de que puedan resistir.","1 Corintios 10:13","Juan 10:10","Filipenses 4:6","Salmos 119:105"],
  ["Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor —, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza","Jeremías 29:11","Juan 10:28","Filipenses 4:8","Isaías 9:6"],
  ["Por tanto, vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo, – enseñándoles a obedecer todo lo que les he mandado a ustedes. Y les aseguro que estaré con ustedes siempre, hasta el fin del mundo.","Mateo 28:19-20","Juan 10:29","Filipenses 4:19","Isaías 40:28"],
  ["Porque la paga del pecado es muerte, mientras que la dádiva de Dios es vida eterna en Cristo Jesús, nuestro Señor.","Romanos 6:23","1 Timoteo 5:1-2","Colosenses 3:23","Isaías 40:30-31"],
  ["Por lo tanto, hermanos, tomando en cuenta la misericordia de Dios, les ruego que cada uno de ustedes, en adoración espiritual, ofrezca su cuerpo como sacrificio vivo, santo y agradable a Dios. – No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente. Así podrán comprobar cuál es la voluntad de Dios, buena, agradable y perfecta.","Romanos 12:1-2","Mateo 18:15","Hebreos 12:1-2","Mateo 22:37-39"],
  ["22 En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, – humildad y dominio propio. No hay ley que condene estas cosas.","Gálatas 5:22-23","Génesis 1:1","Santiago 1:22","Juan 1:12"],
  ["Todo lo puedo en Cristo que me fortalece.","Filipenses 4:13","Proverbios 3:5-6","Romanos 5:8","Romanos 3:23"],
  ["Si confesamos nuestros pecados, Dios, que es fiel y justo, nos los perdonará y nos limpiará de toda maldad. ","1 Juan 1:9","Juan 3:16","Romanos 10:9","Romanos 8:28"],
  [" Recita siempre el libro de la ley y medita en él de día y de noche; cumple con cuidado todo lo que en él está escrito. Así prosperarás y tendrás éxito","Josué 1:8","Juan 14:6","1 Corintios 15:3-4","Romanos 8:38-39"],
  ["Ya te lo he ordenado: ¡Sé fuerte y valiente! ¡No tengas miedo ni te desanimes! Porque el Señor tu Dios te acompañará dondequiera que vayas.»","Josué 1:9","1 Corintios 10:13","Juan 3:17","2 Corintios 12:9"],
  ["Quédense quietos, reconozcan que yo soy Dios. ¡Yo seré exaltado entre las naciones! ¡Yo seré enaltecido en la tierra!","Salmos 46:10","Jeremías 29:11","Juan 10:10","Efesios 4:32"],
  ["En mi corazón atesoro tus dichos para no pecar contra ti.","Salmos 119:11 ","Mateo 28:19-20","Juan 10:28","Filipenses 4:6"],
  ["Tu palabra es una lámpara a mis pies; es una luz en mi sendero.","Salmos 119:105","Romanos 6:23","Juan 10:29","Filipenses 4:8"],
  ["Porque nos ha nacido un niño, se nos ha concedido un hijo; la soberanía reposará sobre sus hombros, y se le darán estos nombres: Consejero admirable, Dios fuerte, Padre eterno, Príncipe de paz.","Isaías 9:6","Romanos 12:1-2","1 Timoteo 5:1-2","Filipenses 4:19"],
  ["¿Acaso no lo sabes? ¿Acaso no te has enterado? El Señor es el Dios eterno, creador de los confines de la tierra. No se cansa ni se fatiga, y su inteligencia es insondable.","Isaías 40:28","Gálatas 5:22-23","Mateo 18:15","Colosenses 3:23"],
  ["30 Aun los jóvenes se cansan, se fatigan, y los muchachos tropiezan y caen; – pero los que confían en el renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.","Isaías 40:30-31","Filipenses 4:13","Génesis 1:1","Hebreos 12:1-2"],
  ["“Ama al Señor tu Dios con todo tu corazón, con todo tu ser y con toda tu mente” —le respondió Jesús—. -- Éste es el primero y el más importante de los mandamientos. – El segundo se parece a éste: “Ama a tu prójimo como a ti mismo.”","Mateo 22:37-39","1 Juan 1:9","Proverbios 3:5-6","Santiago 1:22"],
  ["Mas a cuantos lo recibieron, a los que creen en su nombre, les dio el derecho de ser hijos de Dios.","Juan 1:12","Josué 1:8","Juan 3:16","Romanos 5:8"],
  ["pues todos han pecado y están privados de la gloria de Dios,","Romanos 3:23","Josué 1:9","Juan 14:6","Romanos 10:9"],
  ["Ahora bien, sabemos que Dios dispone todas las cosas para el bien de quienes lo aman, los que han sido llamados de acuerdo con su propósito.","Romanos 8:28","Salmos 46:10","1 Corintios 10:13","1 Corintios 15:3-4"],
  ["Pues estoy convencido de que ni la muerte ni la vida, ni los ángeles ni los demonios, ni lo presente ni lo por venir, ni los poderes, – ni lo alto ni lo profundo, ni cosa alguna en toda la creación, podrá apartarnos del amor que Dios nos ha manifestado en Cristo Jesús nuestro Señor.","Romanos 8:38-39","Salmos 119:11 ","Jeremías 29:11","Juan 3:17"],
  ["a otros, fe por medio del mismo Espíritu; a otros, y por ese mismo Espíritu, dones para sanar enfermo","2 Corintios 12:9","Salmos 119:105","Mateo 28:19-20","Juan 10:10"],
  ["Más bien, sean bondadosos y compasivos unos con otros, y perdónense mutuamente, así como Dios los perdonó a ustedes en Cristo.","Efesios 4:32","Isaías 9:6","Romanos 6:23","Juan 10:28"],
  ["No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios y denle gracias.","Filipenses 4:6","Isaías 40:28","Romanos 12:1-2","Juan 10:29"],
  ["Por último, hermanos, consideren bien todo lo verdadero, todo lo respetable, todo lo justo, todo lo puro, todo lo amable, todo lo digno de admiración, en fin, todo lo que sea excelente o merezca elogio.","Filipenses 4:8","Isaías 40:30-31","Gálatas 5:22-23","1 Timoteo 5:1-2"],
  ["Así que mi Dios les proveerá de todo lo que necesiten, conforme a las gloriosas riquezas que tiene en Cristo Jesús.","Filipenses 4:19","Mateo 22:37-39","Filipenses 4:13","Mateo 18:15"],
  ["Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo,","Colosenses 3:23","Juan 1:12","1 Juan 1:9","Génesis 1:1"],
  ["Por tanto, también nosotros, que estamos rodeados de una multitud tan grande de testigos, despojémonos del lastre que nos estorba, en especial del pecado que nos asedia, y corramos con perseverancia la carrera que tenemos por delante. – Fijemos la mirada en Jesús, el iniciador y perfeccionador de nuestra fe, quien por el gozo que le esperaba, soportó la cruz, menospreciando la vergüenza que ella significaba, y ahora está sentado a la derecha del trono de Dios.","Hebreos 12:1-2","Romanos 3:23","Josué 1:8","Proverbios 3:5-6"],
  ["No se contenten sólo con escuchar la palabra, pues así se engañan ustedes mismos. Llévenla a la práctica.","Santiago 1:22","Romanos 8:28","Josué 1:9","Juan 3:16"],
  ["Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros. ","Romanos 5:8","Romanos 8:38-39","Salmos 46:10","Juan 14:6"],
  ["que si confiesas con tu boca que Jesús es el Señor, y crees en tu corazón que Dios lo levantó de entre los muertos, serás salvo.","Romanos 10:9","2 Corintios 12:9","Salmos 119:11 ","1 Corintios 10:13"],
  ["Porque ante todo les transmití a ustedes lo que yo mismo recibí: que Cristo murió por nuestros pecados según las Escrituras, – que fue sepultado, que resucitó al tercer día según las Escrituras","1 Corintios 15:3-4","Efesios 4:32","Salmos 119:105","Jeremías 29:11"],
  ["Dios no envió a su Hijo al mundo para condenar al mundo, sino para salvarlo por medio de él.","Juan 3:17","Filipenses 4:6","Isaías 9:6","Mateo 28:19-20"],
  ["El ladrón no viene más que a robar, matar y destruir; yo he venido para que tengan vida, y la tengan en abundancia.","Juan 10:10","Filipenses 4:8","Isaías 40:28","Romanos 6:23"],
  ["Yo les doy vida eterna, y nunca perecerán, ni nadie podrá arrebatármelas de la mano.","Juan 10:28","Filipenses 4:19","Isaías 40:30-31","Romanos 12:1-2"],
  ["Mi Padre, que me las ha dado, es más grande que todos; y de la mano del Padre nadie las puede arrebatar.","Juan 10:29","Colosenses 3:23","Mateo 22:37-39","Gálatas 5:22-23"],
  ["No reprendas con dureza al anciano, sino aconséjalo como si fuera tu padre. Trata a los jóvenes como a hermanos; – a las ancianas, como a madres; a las jóvenes, como a hermanas, con toda pureza.","1 Timoteo 5:1-2","Hebreos 12:1-2","Juan 1:12","Filipenses 4:13"],
  ["Si tu hermano peca contra ti, ve a solas con él y hazle ver su falta. Si te hace caso, has ganado a tu hermano. -- Pero si no, lleva contigo a uno o dos más, para que “todo asunto se resuelva mediante el testimonio de dos o tres testigos”. – Si se niega a hacerles caso a ellos, díselo a la iglesia; y si incluso a la iglesia no le hace caso, trátalo como si fuera un incrédulo o un renegado.","Mateo 18:15","Santiago 1:22","Romanos 3:23","1 Juan 1:9"]
];
