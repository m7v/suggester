import orm from './models/models';

const entities = {
    'Card': {
        'items': [
            'f040ce595f7d5d0862556b03c2c6ccfe1cfddd52',
            '40eccea11759abce48ca5a9147dfb9e76bc8986a',
            '0dba176481e562be189bfca73d216af8f73a8ab0',
            '6ae76d919aa5c76921e07cc8b9750ba38715ab5a',
            'cc536edc1ba5bf99687f241d60780e49146a2911',
            '797dc0aa1b56d74b6526b1b9ebe9dff1f9dcdef7',
            'dddea3d006c222a06a641ab239505a15bf3b94ea',
            'e5b16be307498f8337a881d616185b8d072da72d',
            '04f53b3b7bd4ad390f1e3d1492dab515b6247d6c',
            'efb290d62e44ee17b418fd07aeeb0fba2164963e',
            'a82db8e40a2a087ced4354e2453337ab8db5568f',
            '1c281a1d130a2b9902cd513760f0c1c01d2e7206',
            'debe9afa4fe15a04dff402d93a2f7c9c9ab0995f',
            '8fb9ca0311da69e67cca3c34e4839e95f295551b',
            'afa8d447717f92c4a987734086a44aad230387b8',
            '71efb19388e3a3198a8d5fb34cfa051b9e1f3685',
            '34e45f6f737222534771d55b09337a0aa2e4b89b',
            '1a684fdadcd2583efaa010b5aa0ee899566db200',
            'e8f49c90421a01ba6fe4767c8ef3d3f967a5abb1',
            'ae6035733abff81326472265e29e432b68a67683',
            '863294493474298908b19d49f375c58b391428c0',
            '7b35a1ba9c515954b0dbe241c298cfba61f020ae',
            'f8bc8c0816669e3c5b6e8ad5e9b58ed7360ecd11',
            'b92118bd2d893c7424b435e22316a6b3c891fb6f',
            '556a174bedd873544f950ca0bde6c0787f4014d3',
            'dab4c76005629e5ec84f5df58fb900c4cedb0fe5',
            '7c529f2eb5dbc6f339048df6f941c97c50a58fe8',
            'a59598a58f5a4b30e5509efefea6d018c96ab481',
            '639e06af359af83f77404dacaeebec1b30126660',
            'e9b91cdd04778111fda1a5603f9d1dea0f14233d',
            '1421a1f6e4261343c365936bb174b87be74ff50f',
            'e5a85451def764645578a9628ba060814fc88794',
            'b63fe067e09bac2d5a896212923c0ecc8e693320',
            'a7d9152a92a0cc4a1cefc4fb7f2d29697145978c',
            'c992e917ac0924627bebf7178a5cea0c6f9f3e22',
            '13c27e11a2dbe57f20cf7e7db17345285ed97d78',
        ],
        'itemsById': {
            '04f53b3b7bd4ad390f1e3d1492dab515b6247d6c': {
                'artist': 'David Gaillet',
                'cmc': 5,
                'colorIdentity': ['U'],
                'colors': ['Blue'],
                'count': 1,
                'foreignNames': [{
                    'language': 'Chinese Simplified',
                    'name': '冰瀑龙侯',
                }, {
                    'language': 'Chinese Traditional',
                    'name': '冰瀑龍侯',
                }, {
                    'language': 'French',
                    'name': 'Régente chuteglace',
                }, {
                    'language': 'German',
                    'name': 'Eisfall-Regentin',
                }, {
                    'language': 'Italian',
                    'name': 'Reggente dal Soffio di Ghiaccio',
                }, {
                    'language': 'Japanese',
                    'name': '氷瀑の執政',
                }, {
                    'language': 'Korean',
                    'name': '무너지는 빙하의 섭정',
                }, {
                    'language': 'Portuguese (Brazil)',
                    'name': 'Regente da Cascata de Gelo',
                }, {
                    'language': 'Russian',
                    'name': 'Регент Губительного Льда',
                }, {
                    'language': 'Spanish',
                    'name': 'Regente catarata helada',
                }],
                'id': '04f53b3b7bd4ad390f1e3d1492dab515b6247d6c',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Khans of Tarkir Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}{U}{U}',
                'name': 'Icefall Regent',
                'number': '179',
                'power': '4',
                'printings': ['pPRE', 'DTK', 'E01'],
                'rarity': 'Special',
                'releaseDate': '2015-03-21',
                'rulings': [{
                    'date': '2015-02-25',
                    'text': 'Icefall Regent\'s triggered ability can target any creature controlled by an opponent, including one that is already tapped. In that case, the creature stays tapped and won\'t untap during its controller\'s untap step.',
                }, {
                    'date': '2015-02-25',
                    'text': 'If another player gains control of Icefall Regent, the creature will no longer be affected by the ability stopping it from untapping, even if you later regain control of Icefall Regent.',
                }, {
                    'date': '2015-02-25',
                    'text': 'The ability stopping the creature from untapping will continue to apply to it even if the creature changes controllers.',
                }, {
                    'date': '2015-02-25',
                    'text': 'Icefall Regent\'s last ability affects all spells cast by your opponents that target it, including Aura spells and spells with multiple targets. It doesn\'t affect abilities.',
                }],
                'set': 'pPRE',
                'setName': 'Prerelease Events',
                'source': 'Dragons of Tarkir Ojutai Prerelease participation bonus',
                'subtypes': ['Dragon'],
                'text': 'Flying\nWhen Icefall Regent enters the battlefield, tap target creature an opponent controls. That creature doesn\'t untap during its controller\'s untap step for as long as you control Icefall Regent.\nSpells your opponents cast that target Icefall Regent cost {2} more to cast.',
                'toughness': '3',
                'type': 'Creature — Dragon',
                'types': ['Creature'],
            },
            '0dba176481e562be189bfca73d216af8f73a8ab0': {
                'artist': 'Adam Paquette',
                'cmc': 7,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 1,
                'foreignNames': [{
                    'language': 'Chinese Simplified',
                    'name': '夺命龙侯',
                }, {
                    'language': 'Chinese Traditional',
                    'name': '奪命龍侯',
                }, {
                    'language': 'French',
                    'name': 'Régente portemort',
                }, {
                    'language': 'German',
                    'name': 'Todesbringer-Regentin',
                }, {
                    'language': 'Italian',
                    'name': 'Reggente Latrice di Morte',
                }, {
                    'language': 'Japanese',
                    'name': '死致の執政',
                }, {
                    'language': 'Korean',
                    'name': '죽음을 부르는 섭정',
                }, {
                    'language': 'Portuguese (Brazil)',
                    'name': 'Regente da Morte Iminente',
                }, {
                    'language': 'Russian',
                    'name': 'Регент Надвигающейся Смерти',
                }, {
                    'language': 'Spanish',
                    'name': 'Regente rugido mortal',
                }],
                'id': '0dba176481e562be189bfca73d216af8f73a8ab0',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Khans of Tarkir Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{5}{B}{B}',
                'name': 'Deathbringer Regent',
                'number': '168',
                'power': '5',
                'printings': ['pPRE', 'pLPA', 'DTK', 'E01'],
                'rarity': 'Special',
                'releaseDate': '2015-03-21',
                'rulings': [{
                    'date': '2015-02-25',
                    'text': 'If you cast a creature spell that enters the battlefield as a copy of Deathbringer Regent, the enters-the-battlefield ability will trigger (assuming the "five or more other creatures" requirement is also met).',
                }, {
                    'date': '2015-02-25',
                    'text': 'Deathbringer Regent\'s last ability destroys all creatures except Deathbringer Regent, including the five other creatures required for the ability to have an effect.',
                }],
                'set': 'pPRE',
                'setName': 'Prerelease Events',
                'source': 'Dragons of Tarkir Silumgar Prerelease participation bonus',
                'subtypes': ['Dragon'],
                'text': 'Flying\nWhen Deathbringer Regent enters the battlefield, if you cast it from your hand and there are five or more other creatures on the battlefield, destroy all other creatures.',
                'toughness': '6',
                'type': 'Creature — Dragon',
                'types': ['Creature'],
            },
            '13c27e11a2dbe57f20cf7e7db17345285ed97d78': {
                'artist': 'Nils Hamm',
                'count': 1,
                'flavor': 'There is no height above Grixis that is free from the stench of death.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187442&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 187442,
                    'name': '格利极全景',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188687&type=card',
                    'language': 'French',
                    'multiverseid': 188687,
                    'name': 'Panorama de Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187691&type=card',
                    'language': 'German',
                    'multiverseid': 187691,
                    'name': 'Panorama von Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188438&type=card',
                    'language': 'Italian',
                    'multiverseid': 188438,
                    'name': 'Panorama di Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187193&type=card',
                    'language': 'Japanese',
                    'multiverseid': 187193,
                    'name': 'グリクシスの全景',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188189&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 188189,
                    'name': 'Panorama de Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188936&type=card',
                    'language': 'Russian',
                    'multiverseid': 188936,
                    'name': 'Панорама Гриксиса',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187940&type=card',
                    'language': 'Spanish',
                    'multiverseid': 187940,
                    'name': 'Panorama de Grixis',
                }],
                'id': '13c27e11a2dbe57f20cf7e7db17345285ed97d78',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179433&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 179433,
                'name': 'Grixis Panorama',
                'number': '224',
                'originalText': '{T}: Add {1} to your mana pool.\n{1}, {T}, Sacrifice Grixis Panorama: Search your library for a basic Island, Swamp, or Mountain card and put it into play tapped. Then shuffle your library.',
                'originalType': 'Land',
                'printings': ['ALA', 'C13', 'E01'],
                'rarity': 'Common',
                'set': 'ALA',
                'setName': 'Shards of Alara',
                'text': '{T}: Add {C} to your mana pool.\n{1}, {T}, Sacrifice Grixis Panorama: Search your library for a basic Island, Swamp, or Mountain card and put it onto the battlefield tapped. Then shuffle your library.',
                'type': 'Land',
                'types': ['Land'],
            },
            '1421a1f6e4261343c365936bb174b87be74ff50f': {
                'artist': 'Mark Poole',
                'colorIdentity': ['U'],
                'count': 5,
                'id': '1421a1f6e4261343c365936bb174b87be74ff50f',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=292&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Battle for Zendikar Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Ice Age Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Invasion Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Kaladesh Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Kamigawa Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Khans of Tarkir Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Lorwyn-Shadowmoor Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Masques Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirage Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Odyssey Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Onslaught Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Return to Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Scars of Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Shadows over Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Tempest Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Theros Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Time Spiral Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Un-Sets',
                    'legality': 'Legal',
                }, {
                    'format': 'Urza Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }, {
                    'format': 'Zendikar Block',
                    'legality': 'Legal',
                }],
                'multiverseid': 292,
                'name': 'Island',
                'originalText': 'Tap to add {U} to your mana pool.',
                'originalType': 'Land',
                'printings': ['LEA', 'LEB', '2ED', 'CED', 'CEI', '3ED', '4ED', 'ICE', 'RQS', 'pARL', 'MIR', 'ITP', '5ED', 'POR', 'TMP', 'pJGP', 'PO2', 'UGL', 'pALP', 'USG', '6ED', 'PTK', 'pGRU', 'S99', 'MMQ', 'BRB', 'pELP', 'S00', 'BTD', 'INV', '7ED', 'ODY', 'ONS', '8ED', 'MRD', 'CHK', 'UNH', '9ED', 'RAV', 'CST', 'TSP', '10E', 'MED', 'LRW', 'SHM', 'ALA', 'DD2', 'M10', 'HOP', 'ME3', 'ZEN', 'H09', 'DDE', 'ROE', 'DPA', 'ARC', 'M11', 'DDF', 'SOM', 'MBS', 'NPH', 'CMD', 'M12', 'DDH', 'ISD', 'DDI', 'AVR', 'PC2', 'M13', 'DDJ', 'RTR', 'M14', 'THS', 'C13', 'DDM', 'M15', 'DDN', 'KTK', 'C14', 'DD3_JVC', 'FRF', 'DDO', 'DTK', 'TPR', 'ORI', 'BFZ', 'C15', 'DDQ', 'SOI', 'KLD', 'C16', 'PCA', 'DDS', 'AKH', 'CMA', 'E01', 'HOU'],
                'rarity': 'Basic Land',
                'set': 'LEA',
                'setName': 'Limited Edition Alpha',
                'subtypes': ['Island'],
                'supertypes': ['Basic'],
                'type': 'Basic Land — Island',
                'types': ['Land'],
                'variations': [293],
            },
            '1a684fdadcd2583efaa010b5aa0ee899566db200': {
                'artist': 'Dan Scott',
                'cmc': 1,
                'colorIdentity': ['R'],
                'colors': ['Red'],
                'count': 1,
                'flavor': 'In the Skyfang Mountains, one misstep can mean the end of an entire clan.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=377240&type=card',
                    'language': 'French',
                    'multiverseid': 377240,
                    'name': 'Décès soudain',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376884&type=card',
                    'language': 'German',
                    'multiverseid': 376884,
                    'name': 'Plötzliches Ableben',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=377596&type=card',
                    'language': 'Italian',
                    'multiverseid': 377596,
                    'name': 'Dipartita Improvvisa',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=377952&type=card',
                    'language': 'Japanese',
                    'multiverseid': 377952,
                    'name': '唐突なる死',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=378308&type=card',
                    'language': 'Spanish',
                    'multiverseid': 378308,
                    'name': 'Muerte repentina',
                }],
                'id': '1a684fdadcd2583efaa010b5aa0ee899566db200',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376528&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{X}{R}',
                'multiverseid': 376528,
                'name': 'Sudden Demise',
                'number': '124',
                'originalText': 'Choose a color. Sudden Demise deals X damage to each creature of the chosen color.',
                'originalType': 'Sorcery',
                'printings': ['C13', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2013-10-17',
                    'text': 'You choose the value for X as you cast Sudden Demise. You don\'t choose the color until it resolves.',
                }, {
                    'date': '2013-10-17',
                    'text': 'Sudden Demise will deal damage to a multicolored creature if one of its colors is the chosen color.',
                }],
                'set': 'C13',
                'setName': 'Commander 2013 Edition',
                'text': 'Choose a color. Sudden Demise deals X damage to each creature of the chosen color.',
                'type': 'Sorcery',
                'types': ['Sorcery'],
            },
            '1c281a1d130a2b9902cd513760f0c1c01d2e7206': {
                'artist': 'Slawomir Maniak',
                'cmc': 6,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 1,
                'flavor': '"He is judge, jury, and executioner because he killed them all."\n—Bishop Cawle of Elgaud',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=294704&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 294704,
                    'name': '索命恶魔',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295192&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 295192,
                    'name': '索命惡魔',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295680&type=card',
                    'language': 'French',
                    'multiverseid': 295680,
                    'name': 'Moissonneur d\'âmes',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=340627&type=card',
                    'language': 'German',
                    'multiverseid': 340627,
                    'name': 'Ernter der Seelen',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=296412&type=card',
                    'language': 'Italian',
                    'multiverseid': 296412,
                    'name': 'Mietitore di Anime',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=294403&type=card',
                    'language': 'Japanese',
                    'multiverseid': 294403,
                    'name': '魂の収穫者',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=294948&type=card',
                    'language': 'Korean',
                    'multiverseid': 294948,
                    'name': '영혼 수확자',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295436&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 295436,
                    'name': 'Ceifador de Almas',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295924&type=card',
                    'language': 'Russian',
                    'multiverseid': 295924,
                    'name': 'Пожинатель Душ',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=296168&type=card',
                    'language': 'Spanish',
                    'multiverseid': 296168,
                    'name': 'Cosechador de almas',
                }],
                'id': '1c281a1d130a2b9902cd513760f0c1c01d2e7206',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=240199&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{4}{B}{B}',
                'multiverseid': 240199,
                'name': 'Harvester of Souls',
                'number': '107',
                'originalText': 'Deathtouch\nWhenever another nontoken creature dies, you may draw a card.',
                'originalType': 'Creature — Demon',
                'power': '5',
                'printings': ['AVR', 'DDQ', 'CN2', 'E01'],
                'rarity': 'Rare',
                'set': 'AVR',
                'setName': 'Avacyn Restored',
                'subtypes': ['Demon'],
                'text': 'Deathtouch\nWhenever another nontoken creature dies, you may draw a card.',
                'toughness': '5',
                'type': 'Creature — Demon',
                'types': ['Creature'],
            },
            '34e45f6f737222534771d55b09337a0aa2e4b89b': {
                'artist': 'Karl Kopinski',
                'cmc': 5,
                'colorIdentity': ['U', 'B', 'R'],
                'colors': ['Blue', 'Black', 'Red'],
                'count': 1,
                'flavor': 'Nicol Bolas doesn\'t distinguish between servants and victims.',
                'foreignNames': [{
                    'language': 'Chinese Simplified',
                    'name': '屈从波拉斯',
                }, {
                    'language': 'French',
                    'name': 'Esclave de Bolas',
                }, {
                    'language': 'German',
                    'name': 'Bolas\' Sklave',
                }, {
                    'language': 'Italian',
                    'name': 'Schiavo di Bolas',
                }, {
                    'language': 'Japanese',
                    'name': 'ボーラスの奴隷',
                }, {
                    'language': 'Portuguese (Brazil)',
                    'name': 'Escravo de Nicol Bolas',
                }, {
                    'language': 'Russian',
                    'name': 'Рабыня Боласа',
                }, {
                    'language': 'Spanish',
                    'name': 'Esclavo de Nicol Bolas',
                }],
                'id': '34e45f6f737222534771d55b09337a0aa2e4b89b',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}{U/R}{B}',
                'name': 'Slave of Bolas',
                'number': '27',
                'printings': ['pWPN', 'ARB', 'DDH', 'E01'],
                'rarity': 'Special',
                'releaseDate': '2009',
                'rulings': [{
                    'date': '2009-05-01',
                    'text': 'You may target a creature you already control.',
                }, {
                    'date': '2009-05-01',
                    'text': 'If you don\'t control the targeted creature when the "at end of turn" ability resolves, it won\'t be sacrificed. If it\'s still on the battlefield but under another player\'s control, the ability won\'t try to have you sacrifice it again at the end of the turn after that.',
                }],
                'set': 'pWPN',
                'setName': 'Wizards Play Network',
                'source': 'WPN Prize',
                'text': 'Gain control of target creature. Untap that creature. It gains haste until end of turn. Sacrifice it at the beginning of the next end step.',
                'type': 'Sorcery',
                'types': ['Sorcery'],
            },
            '40eccea11759abce48ca5a9147dfb9e76bc8986a': {
                'artist': 'Karl Kopinski',
                'cmc': 7,
                'colorIdentity': ['U', 'B', 'R'],
                'colors': ['Blue', 'Black', 'Red'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192767&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 192767,
                    'name': '嗜血暴君',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192477&type=card',
                    'language': 'French',
                    'multiverseid': 192477,
                    'name': 'Tyran de sang',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=193202&type=card',
                    'language': 'German',
                    'multiverseid': 193202,
                    'name': 'Bluttyrann',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192622&type=card',
                    'language': 'Italian',
                    'multiverseid': 192622,
                    'name': 'Tiranno Sanguinario',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=193057&type=card',
                    'language': 'Japanese',
                    'multiverseid': 193057,
                    'name': '血の暴君',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=193347&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 193347,
                    'name': 'Tirano do Sangue',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192912&type=card',
                    'language': 'Russian',
                    'multiverseid': 192912,
                    'name': 'Кровавый Тиран',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192332&type=card',
                    'language': 'Spanish',
                    'multiverseid': 192332,
                    'name': 'Tirano sangriento',
                }],
                'id': '40eccea11759abce48ca5a9147dfb9e76bc8986a',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180267&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{4}{U}{B}{R}',
                'multiverseid': 180267,
                'name': 'Blood Tyrant',
                'number': '99',
                'originalText': 'Flying, trample\nAt the beginning of your upkeep, each player loses 1 life. Put a +1/+1 counter on Blood Tyrant for each 1 life lost this way.\nWhenever a player loses the game, put five +1/+1 counters on Blood Tyrant.',
                'originalType': 'Creature — Vampire',
                'power': '5',
                'printings': ['CON', 'C16', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2009-02-01',
                    'text': 'Blood Tyrant\'s second ability causes each player to lose 1 life, including you. Blood Tyrant will count each player\'s life loss, including yours, when determining how many +1/+1 counters it gets.',
                }, {
                    'date': '2009-02-01',
                    'text': 'Blood Tyrant\'s third ability will trigger no matter how a player loses the game: due to a state-based action (as a result of having a life total of 0 or less, trying to draw a card from an empty library, or having ten poison counters), a spell or ability that says that player loses the game, a concession, or a game loss awarded by a judge.',
                }, {
                    'date': '2009-02-01',
                    'text': 'In a multiplayer game using the limited range of influence option (such as a Grand Melee game), if a spell or ability says that you win the game, it instead causes all of your opponents within your range of influence to lose the game. This is another way by which Blood Tyrant\'s third ability can trigger.',
                }],
                'set': 'CON',
                'setName': 'Conflux',
                'subtypes': ['Vampire'],
                'text': 'Flying, trample\nAt the beginning of your upkeep, each player loses 1 life. Put a +1/+1 counter on Blood Tyrant for each 1 life lost this way.\nWhenever a player loses the game, put five +1/+1 counters on Blood Tyrant.',
                'toughness': '5',
                'type': 'Creature — Vampire',
                'types': ['Creature'],
            },
            '556a174bedd873544f950ca0bde6c0787f4014d3': {
                'artist': 'Mike Dringenberg',
                'cmc': 2,
                'colorIdentity': ['U', 'B'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=161755&type=card',
                    'language': 'French',
                    'multiverseid': 161755,
                    'name': 'Talisman de dominance',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73499&type=card',
                    'language': 'German',
                    'multiverseid': 73499,
                    'name': 'Talisman der Dominanz',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=160224&type=card',
                    'language': 'Italian',
                    'multiverseid': 160224,
                    'name': 'Talismano del Dominio',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73852&type=card',
                    'language': 'Japanese',
                    'multiverseid': 73852,
                    'name': '威圧のタリスマン',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=162449&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 162449,
                    'name': 'Talismã da Dominação',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=162133&type=card',
                    'language': 'Spanish',
                    'multiverseid': 162133,
                    'name': 'Talismán de la dominancia',
                }],
                'id': '556a174bedd873544f950ca0bde6c0787f4014d3',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39598&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{2}',
                'multiverseid': 39598,
                'name': 'Talisman of Dominance',
                'number': '253',
                'originalText': '{T}: Add {1} to your mana pool.\n{T}: Add {U} or {B} to your mana pool. Talisman of Dominance deals 1 damage to you.',
                'originalType': 'Artifact',
                'printings': ['MRD', 'E01'],
                'rarity': 'Uncommon',
                'set': 'MRD',
                'setName': 'Mirrodin',
                'text': '{T}: Add {C} to your mana pool.\n{T}: Add {U} or {B} to your mana pool. Talisman of Dominance deals 1 damage to you.',
                'type': 'Artifact',
                'types': ['Artifact'],
            },
            '639e06af359af83f77404dacaeebec1b30126660': {
                'artist': 'Douglas Shuler',
                'colorIdentity': ['R'],
                'count': 3,
                'id': '639e06af359af83f77404dacaeebec1b30126660',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=290&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Battle for Zendikar Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Ice Age Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Invasion Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Kaladesh Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Kamigawa Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Khans of Tarkir Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Lorwyn-Shadowmoor Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Masques Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirage Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Odyssey Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Onslaught Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Return to Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Scars of Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Shadows over Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Tempest Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Theros Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Time Spiral Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Un-Sets',
                    'legality': 'Legal',
                }, {
                    'format': 'Urza Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }, {
                    'format': 'Zendikar Block',
                    'legality': 'Legal',
                }],
                'multiverseid': 290,
                'name': 'Mountain',
                'originalText': 'Tap to add {R} to your mana pool.',
                'originalType': 'Land',
                'printings': ['LEA', 'LEB', '2ED', 'CED', 'CEI', 'ARN', '3ED', '4ED', 'ICE', 'RQS', 'pARL', 'MIR', 'ITP', '5ED', 'POR', 'TMP', 'pJGP', 'PO2', 'UGL', 'pALP', 'USG', 'ATH', '6ED', 'PTK', 'pGRU', 'S99', 'MMQ', 'BRB', 'pELP', 'S00', 'BTD', 'INV', '7ED', 'ODY', 'DKM', 'ONS', '8ED', 'MRD', 'CHK', 'UNH', '9ED', 'RAV', 'CST', 'TSP', '10E', 'MED', 'LRW', 'EVG', 'SHM', 'ALA', 'DD2', 'M10', 'HOP', 'ME3', 'ZEN', 'H09', 'DDE', 'ROE', 'DPA', 'ARC', 'M11', 'SOM', 'PD2', 'MBS', 'DDG', 'NPH', 'CMD', 'M12', 'DDH', 'ISD', 'DDI', 'AVR', 'PC2', 'M13', 'DDJ', 'RTR', 'DDK', 'M14', 'DDL', 'THS', 'C13', 'M15', 'DDN', 'KTK', 'C14', 'DD3_EVG', 'DD3_JVC', 'FRF', 'DTK', 'TPR', 'ORI', 'DDP', 'BFZ', 'C15', 'SOI', 'KLD', 'C16', 'PCA', 'DDS', 'AKH', 'CMA', 'E01', 'HOU'],
                'rarity': 'Basic Land',
                'set': 'LEA',
                'setName': 'Limited Edition Alpha',
                'subtypes': ['Mountain'],
                'supertypes': ['Basic'],
                'type': 'Basic Land — Mountain',
                'types': ['Land'],
                'variations': [291],
            },
            '6ae76d919aa5c76921e07cc8b9750ba38715ab5a': {
                'artist': 'Justin Sweet',
                'cmc': 6,
                'colorIdentity': ['U'],
                'colors': ['Blue'],
                'count': 1,
                'flavor': '"Even if the sphinxes do know the location of every relic, getting one to talk is harder than just searching yourself."\n—Sachir, Akoum Expeditionary House',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204686&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 204686,
                    'name': '爪尔岛史芬斯',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204417&type=card',
                    'language': 'French',
                    'multiverseid': 204417,
                    'name': 'Sphinx de l\'île de Jwar',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204148&type=card',
                    'language': 'German',
                    'multiverseid': 204148,
                    'name': 'Sphinx der Jwar-Insel',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203072&type=card',
                    'language': 'Italian',
                    'multiverseid': 203072,
                    'name': 'Sfinge dell\'Isola Jwar',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203879&type=card',
                    'language': 'Japanese',
                    'multiverseid': 203879,
                    'name': 'ジュワー島のスフィンクス',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203610&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 203610,
                    'name': 'Esfinge da Ilha de Jwar',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203341&type=card',
                    'language': 'Russian',
                    'multiverseid': 203341,
                    'name': 'Сфинкс с Острова Джвар',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=202803&type=card',
                    'language': 'Spanish',
                    'multiverseid': 202803,
                    'name': 'Esfinge de la isla Jwar',
                }],
                'id': '6ae76d919aa5c76921e07cc8b9750ba38715ab5a',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=185709&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }, {
                    'format': 'Zendikar Block',
                    'legality': 'Legal',
                }],
                'manaCost': '{4}{U}{U}',
                'multiverseid': 185709,
                'name': 'Sphinx of Jwar Isle',
                'number': '68',
                'originalText': 'Flying, shroud\nYou may look at the top card of your library. (You may do this at any time.)',
                'originalType': 'Creature — Sphinx',
                'power': '5',
                'printings': ['ZEN', 'C14', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2009-10-01',
                    'text': 'Essentially, Sphinx of Jwar Isle lets you play with the top card of your library revealed only to you. Knowing what that card is becomes part of the information you have access to, just like you can look at the cards in your hand. You may look at the top card of your library whenever you want, even if you don\'t have priority. This action doesn\'t use the stack.',
                }, {
                    'date': '2009-10-01',
                    'text': 'If the top card of your library changes during the process of casting a spell or activating an ability, you can\'t look at the new top card until the process of casting the spell or activating the ability ends (all targets are chosen, all costs are paid, and so on).',
                }],
                'set': 'ZEN',
                'setName': 'Zendikar',
                'subtypes': ['Sphinx'],
                'text': 'Flying\nShroud (This creature can\'t be the target of spells or abilities.)\nYou may look at the top card of your library. (You may do this at any time.)',
                'toughness': '5',
                'type': 'Creature — Sphinx',
                'types': ['Creature'],
            },
            '71efb19388e3a3198a8d5fb34cfa051b9e1f3685': {
                'artist': 'Dallas Williams',
                'cmc': 5,
                'colorIdentity': ['U', 'B'],
                'colors': ['Blue', 'Black'],
                'count': 1,
                'flavor': 'If you want to wreak havoc above, sometimes it\'s best to look below.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382474&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 382474,
                    'name': '黯域掘力',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382684&type=card',
                    'language': 'Japanese',
                    'multiverseid': 382684,
                    'name': '闇からの摘出',
                }],
                'id': '71efb19388e3a3198a8d5fb34cfa051b9e1f3685',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382264&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}{U}{B}',
                'multiverseid': 382264,
                'name': 'Extract from Darkness',
                'number': '45',
                'originalText': 'Each player puts the top two cards of his or her library into his or her graveyard. Then put a creature card from a graveyard onto the battlefield under your control.',
                'originalType': 'Sorcery',
                'printings': ['CNS', 'EMA', 'E01'],
                'rarity': 'Uncommon',
                'rulings': [{
                    'date': '2016-06-08',
                    'text': 'Extract from Darkness doesn\'t target a creature card. You choose which card you\'re putting onto the battlefield as it resolves. You can choose any creature card in a graveyard at that time, including one just put into a graveyard by Extract from Darkness. If there are no creature cards in graveyards at that time, Extract from Darkness simply finishes resolving.',
                }],
                'set': 'CNS',
                'setName': 'Magic: The Gathering—Conspiracy',
                'text': 'Each player puts the top two cards of his or her library into his or her graveyard. Then put a creature card from a graveyard onto the battlefield under your control.',
                'type': 'Sorcery',
                'types': ['Sorcery'],
            },
            '797dc0aa1b56d74b6526b1b9ebe9dff1f9dcdef7': {
                'artist': 'Volkan Baga',
                'cmc': 5,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 1,
                'flavor': '"Why would I kill you all? Who then would be left to worship me?"',
                'foreignNames': [{
                    'language': 'Chinese Simplified',
                    'name': '堕落翼邪鬼',
                }, {
                    'language': 'Chinese Traditional',
                    'name': '墮落翼邪鬼',
                }, {
                    'language': 'French',
                    'name': 'Archifielleux de la dépravation',
                }, {
                    'language': 'German',
                    'name': 'Erzdämon der Verderbtheit',
                }, {
                    'language': 'Italian',
                    'name': 'Supremo Demone della Depravazione',
                }, {
                    'language': 'Japanese',
                    'name': '悪行の大悪鬼',
                }, {
                    'language': 'Korean',
                    'name': '타락의 대마귀',
                }, {
                    'language': 'Portuguese (Brazil)',
                    'name': 'Arquidemônio da Depravação',
                }, {
                    'language': 'Russian',
                    'name': 'Архидемон Порочности',
                }, {
                    'language': 'Spanish',
                    'name': 'Archidemonio de la depravación',
                }],
                'id': '797dc0aa1b56d74b6526b1b9ebe9dff1f9dcdef7',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Khans of Tarkir Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}{B}{B}',
                'name': 'Archfiend of Depravity',
                'number': '109',
                'power': '5',
                'printings': ['pMEI', 'pPRE', 'FRF', 'E01'],
                'rarity': 'Special',
                'rulings': [{
                    'date': '2014-11-24',
                    'text': 'The opponent chooses which creatures to spare, if any, as the ability resolves. This choice doesn\'t target the creatures.',
                }, {
                    'date': '2014-11-24',
                    'text': 'The opponent may choose to spare one or no creatures. If the player doesn\'t choose any creatures, he or she will sacrifice all creatures he or she controls.',
                }],
                'set': 'pMEI',
                'setName': 'Media Inserts',
                'source': 'Intro Pack Promo (Fate Reforged)',
                'subtypes': ['Demon'],
                'text': 'Flying\nAt the beginning of each opponent\'s end step, that player chooses up to two creatures he or she controls, then sacrifices the rest.',
                'toughness': '4',
                'type': 'Creature — Demon',
                'types': ['Creature'],
            },
            '7b35a1ba9c515954b0dbe241c298cfba61f020ae': {
                'artist': 'Christopher Rush',
                'cmc': 1,
                'colorIdentity': ['R'],
                'colors': ['Red'],
                'count': 2,
                'id': '7b35a1ba9c515954b0dbe241c298cfba61f020ae',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=209&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{R}',
                'multiverseid': 209,
                'name': 'Lightning Bolt',
                'originalText': 'Lightning Bolt does 3 damage to one target.',
                'originalType': 'Instant',
                'printings': ['LEA', 'LEB', '2ED', 'CED', 'CEI', '3ED', '4ED', 'pJGP', 'ATH', 'BTD', 'pMPR', 'MED', 'M10', 'M11', 'PD2', 'MM2', 'E01'],
                'rarity': 'Common',
                'set': 'LEA',
                'setName': 'Limited Edition Alpha',
                'text': 'Lightning Bolt deals 3 damage to target creature or player.',
                'type': 'Instant',
                'types': ['Instant'],
            },
            '7c529f2eb5dbc6f339048df6f941c97c50a58fe8': {
                'artist': 'Dave Kendall',
                'colorIdentity': ['U', 'B', 'R'],
                'count': 4,
                'flavor': '"They say the ruins of Sedraxis were once a shining capital in Vithia. Now it is a blight, a place to be avoided by the living."\n—Olcot, Rider of Joffik',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187440&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 187440,
                    'name': '崩毁古陵寝',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188685&type=card',
                    'language': 'French',
                    'multiverseid': 188685,
                    'name': 'Nécropole croulante',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187689&type=card',
                    'language': 'German',
                    'multiverseid': 187689,
                    'name': 'Zerfallende Nekropolis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188436&type=card',
                    'language': 'Italian',
                    'multiverseid': 188436,
                    'name': 'Necropoli in Sfacelo',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187191&type=card',
                    'language': 'Japanese',
                    'multiverseid': 187191,
                    'name': '崩れゆく死滅都市',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188187&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 188187,
                    'name': 'Necrópole Despedaçada',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188934&type=card',
                    'language': 'Russian',
                    'multiverseid': 188934,
                    'name': 'Разрушенный Некрополь',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187938&type=card',
                    'language': 'Spanish',
                    'multiverseid': 187938,
                    'name': 'Necrópolis desmoronándose',
                }],
                'id': '7c529f2eb5dbc6f339048df6f941c97c50a58fe8',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=175112&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 175112,
                'name': 'Crumbling Necropolis',
                'number': '222',
                'originalText': 'Crumbling Necropolis comes into play tapped.\n{T}: Add {U}, {B}, or {R} to your mana pool.',
                'originalType': 'Land',
                'printings': ['ALA', 'DDH', 'C13', 'C16', 'MM3', 'E01'],
                'rarity': 'Uncommon',
                'set': 'ALA',
                'setName': 'Shards of Alara',
                'text': 'Crumbling Necropolis enters the battlefield tapped.\n{T}: Add {U}, {B}, or {R} to your mana pool.',
                'type': 'Land',
                'types': ['Land'],
            },
            '863294493474298908b19d49f375c58b391428c0': {
                'artist': 'Carl Critchlow',
                'cmc': 2,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 2,
                'foreignNames': [{
                    'language': 'Chinese Simplified',
                    'name': '送终刀锋',
                }, {
                    'language': 'Chinese Traditional',
                    'name': '送終刀鋒',
                }, {
                    'language': 'French',
                    'name': 'Lame du destin',
                }, {
                    'language': 'German',
                    'name': 'Klinge des Schicksals',
                }, {
                    'language': 'Italian',
                    'name': 'Lama del Fato',
                }, {
                    'language': 'Japanese',
                    'name': '破滅の刃',
                }, {
                    'language': 'Korean',
                    'name': '파멸의 칼날',
                }, {
                    'language': 'Portuguese (Brazil)',
                    'name': 'Lâmina da Destruição',
                }, {
                    'language': 'Russian',
                    'name': 'Клинок Судьбы',
                }, {
                    'language': 'Spanish',
                    'name': 'Cuchilla fatal',
                }],
                'id': '863294493474298908b19d49f375c58b391428c0',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{1}{B}',
                'name': 'Doom Blade',
                'number': '51',
                'printings': ['pMPR', 'M10', 'M11', 'CMD', 'M12', 'M14', 'DDR', 'E01'],
                'rarity': 'Special',
                'releaseDate': '2011',
                'set': 'pMPR',
                'setName': 'Magic Player Rewards',
                'source': 'Magic Player Rewards program reward',
                'text': 'Destroy target nonblack creature.',
                'type': 'Instant',
                'types': ['Instant'],
            },
            '8fb9ca0311da69e67cca3c34e4839e95f295551b': {
                'artist': 'Nils Hamm',
                'cmc': 2,
                'colorIdentity': ['U', 'B'],
                'colors': ['Blue', 'Black'],
                'count': 1,
                'flavor': 'Its beak rends flesh and bone, exposing the tender marrow of dream.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=287700&type=card',
                    'language': 'French',
                    'multiverseid': 287700,
                    'name': 'Sinistre strix',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=287856&type=card',
                    'language': 'German',
                    'multiverseid': 287856,
                    'name': 'Unheilskauz',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=288168&type=card',
                    'language': 'Italian',
                    'multiverseid': 288168,
                    'name': 'Strige Funesto',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=288324&type=card',
                    'language': 'Japanese',
                    'multiverseid': 288324,
                    'name': '悪意の大梟',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=288012&type=card',
                    'language': 'Spanish',
                    'multiverseid': 288012,
                    'name': 'Strix maléfico',
                }],
                'id': '8fb9ca0311da69e67cca3c34e4839e95f295551b',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=265156&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{U}{B}',
                'multiverseid': 265156,
                'name': 'Baleful Strix',
                'number': '82',
                'originalText': 'Flying, deathtouch\nWhen Baleful Strix enters the battlefield, draw a card.',
                'originalType': 'Artifact Creature — Bird',
                'power': '1',
                'printings': ['PC2', 'C13', 'VMA', 'EMA', 'C16', 'PCA', 'E01'],
                'rarity': 'Uncommon',
                'set': 'PC2',
                'setName': 'Planechase 2012 Edition',
                'subtypes': ['Bird'],
                'text': 'Flying, deathtouch\nWhen Baleful Strix enters the battlefield, draw a card.',
                'toughness': '1',
                'type': 'Artifact Creature — Bird',
                'types': ['Artifact', 'Creature'],
            },
            'a59598a58f5a4b30e5509efefea6d018c96ab481': {
                'artist': 'Florian de Gesincourt',
                'colorIdentity': ['U', 'R'],
                'count': 2,
                'flavor': 'With the fate of Innistrad uncertain, some seek solace in remote areas.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410375&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 410375,
                    'name': '高地湖泊',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410705&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 410705,
                    'name': '高地湖泊',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=411365&type=card',
                    'language': 'French',
                    'multiverseid': 411365,
                    'name': 'Lac des hautes terres',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=411035&type=card',
                    'language': 'German',
                    'multiverseid': 411035,
                    'name': 'Hochlandsee',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=411695&type=card',
                    'language': 'Italian',
                    'multiverseid': 411695,
                    'name': 'Lago dell\'Altopiano',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=412025&type=card',
                    'language': 'Japanese',
                    'multiverseid': 412025,
                    'name': '高地の湖',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=412355&type=card',
                    'language': 'Korean',
                    'multiverseid': 412355,
                    'name': '산악 호수',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=412685&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 412685,
                    'name': 'Lago Montanhês',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413015&type=card',
                    'language': 'Russian',
                    'multiverseid': 413015,
                    'name': 'Горное Озеро',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413345&type=card',
                    'language': 'Spanish',
                    'multiverseid': 413345,
                    'name': 'Lago de las tierras altas',
                }],
                'id': 'a59598a58f5a4b30e5509efefea6d018c96ab481',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410045&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shadows over Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 410045,
                'name': 'Highland Lake',
                'number': '277',
                'originalText': 'Highland Lake enters the battlefield tapped.\n{T}: Add {U} or {R} to your mana pool.',
                'originalType': 'Land',
                'printings': ['SOI', 'AKH'],
                'rarity': 'Uncommon',
                'set': 'SOI',
                'setName': 'Shadows over Innistrad',
                'text': 'Highland Lake enters the battlefield tapped.\n{T}: Add {U} or {R} to your mana pool.',
                'type': 'Land',
                'types': ['Land'],
            },
            'a7d9152a92a0cc4a1cefc4fb7f2d29697145978c': {
                'artist': 'Cliff Childs',
                'colorIdentity': ['B', 'R'],
                'count': 1,
                'flavor': 'A mudflow swallowed the lowlands years ago. All that remains are a bottomless mire and an endless rain of ash.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407864&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 407864,
                    'name': '煤烬瘠地',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408050&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 408050,
                    'name': '煤燼瘠地',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408422&type=card',
                    'language': 'French',
                    'multiverseid': 408422,
                    'name': 'Landes de cendres',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408236&type=card',
                    'language': 'German',
                    'multiverseid': 408236,
                    'name': 'Zunder-Öde',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408608&type=card',
                    'language': 'Italian',
                    'multiverseid': 408608,
                    'name': 'Distese di Cenere',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408794&type=card',
                    'language': 'Japanese',
                    'multiverseid': 408794,
                    'name': '燃え殻の痩せ地',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408980&type=card',
                    'language': 'Korean',
                    'multiverseid': 408980,
                    'name': '잿더미 황무지',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409166&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 409166,
                    'name': 'Desolação de Cinzas',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409352&type=card',
                    'language': 'Russian',
                    'multiverseid': 409352,
                    'name': 'Пепельные Пустоши',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409538&type=card',
                    'language': 'Spanish',
                    'multiverseid': 409538,
                    'name': 'Yermos de ceniza',
                }],
                'id': 'a7d9152a92a0cc4a1cefc4fb7f2d29697145978c',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407678&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Battle for Zendikar Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 407678,
                'name': 'Cinder Barrens',
                'number': '168',
                'originalText': 'Cinder Barrens enters the battlefield tapped.\n{T}: Add {B} or {R} to your mana pool.',
                'originalType': 'Land',
                'printings': ['OGW', 'AKH', 'HOU'],
                'rarity': 'Uncommon',
                'set': 'OGW',
                'setName': 'Oath of the Gatewatch',
                'text': 'Cinder Barrens enters the battlefield tapped.\n{T}: Add {B} or {R} to your mana pool.',
                'type': 'Land',
                'types': ['Land'],
            },
            'a82db8e40a2a087ced4354e2453337ab8db5568f': {
                'artist': 'Yeong-Hao Han',
                'cmc': 4,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 2,
                'flavor': 'They are the first to greet dissenters on their journey into exile.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429204&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 429204,
                    'name': '食骨鸟',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429473&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 429473,
                    'name': '食骨鳥',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427590&type=card',
                    'language': 'French',
                    'multiverseid': 427590,
                    'name': 'Glaneur d\'os',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427052&type=card',
                    'language': 'German',
                    'multiverseid': 427052,
                    'name': 'Knochenpicker',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427859&type=card',
                    'language': 'Italian',
                    'multiverseid': 427859,
                    'name': 'Spolpaossa',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428128&type=card',
                    'language': 'Japanese',
                    'multiverseid': 428128,
                    'name': 'ホネツツキ',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428397&type=card',
                    'language': 'Korean',
                    'multiverseid': 428397,
                    'name': '뼈 청소부',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428666&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 428666,
                    'name': 'Pega-ossos',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428935&type=card',
                    'language': 'Russian',
                    'multiverseid': 428935,
                    'name': 'Трупоед',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427321&type=card',
                    'language': 'Spanish',
                    'multiverseid': 427321,
                    'name': 'Buscadespojos',
                }],
                'id': 'a82db8e40a2a087ced4354e2453337ab8db5568f',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426783&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}{B}',
                'multiverseid': 426783,
                'name': 'Bone Picker',
                'number': '81',
                'originalText': 'Bone Picker costs {3} less to cast if a creature died this turn.\nFlying, deathtouch',
                'originalType': 'Creature — Bird',
                'power': '3',
                'printings': ['AKH'],
                'rarity': 'Uncommon',
                'rulings': [{
                    'date': '2017-04-18',
                    'text': 'The creature that died doesn\'t have to still be in its owner\'s graveyard as you cast Bone Picker for the first ability to apply.',
                }, {
                    'date': '2017-04-18',
                    'text': 'Creature tokens that die are put into your graveyard as normal (and cease to exist soon after). If one died this turn, Bone Picker\'s first ability applies.',
                }, {
                    'date': '2017-04-18',
                    'text': 'In a multiplayer game, a player may lose the game at the same time that his or her creatures die. If so, Bone Picker\'s first ability applies.',
                }],
                'set': 'AKH',
                'setName': 'Amonkhet',
                'subtypes': ['Bird'],
                'text': 'Bone Picker costs {3} less to cast if a creature died this turn.\nFlying, deathtouch',
                'toughness': '2',
                'type': 'Creature — Bird',
                'types': ['Creature'],
            },
            'ae6035733abff81326472265e29e432b68a67683': {
                'artist': 'Pete Venters',
                'cmc': 3,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 2,
                'flavor': '"My plan\'s elegance leads my enemies to believe it is spite that fuels me."\n—Volrath',
                'id': 'ae6035733abff81326472265e29e432b68a67683',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=4681&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Invasion Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Tempest Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{1}{B}{B}',
                'multiverseid': 4681,
                'name': 'Reckless Spite',
                'originalText': 'Destroy two target nonblack creatures. Lose 5 life.',
                'originalType': 'Instant',
                'printings': ['TMP', 'INV', 'C13', 'CNS', 'E01'],
                'rarity': 'Uncommon',
                'set': 'TMP',
                'setName': 'Tempest',
                'text': 'Destroy two target nonblack creatures. You lose 5 life.',
                'type': 'Instant',
                'types': ['Instant'],
            },
            'afa8d447717f92c4a987734086a44aad230387b8': {
                'artist': 'Ralph Horsley',
                'cmc': 7,
                'colorIdentity': ['U', 'B', 'R'],
                'colors': ['Blue', 'Black', 'Red'],
                'count': 1,
                'flavor': 'There is always a greater power.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187382&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 187382,
                    'name': '残酷通牒',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188627&type=card',
                    'language': 'French',
                    'multiverseid': 188627,
                    'name': 'Ultimatum cruel',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187631&type=card',
                    'language': 'German',
                    'multiverseid': 187631,
                    'name': 'Grausames Ultimatum',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188378&type=card',
                    'language': 'Italian',
                    'multiverseid': 188378,
                    'name': 'Ultimatum Crudele',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187133&type=card',
                    'language': 'Japanese',
                    'multiverseid': 187133,
                    'name': '残酷な根本原理',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188129&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 188129,
                    'name': 'Ultimato Cruel',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188876&type=card',
                    'language': 'Russian',
                    'multiverseid': 188876,
                    'name': 'Жестокий Ультиматум',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187880&type=card',
                    'language': 'Spanish',
                    'multiverseid': 187880,
                    'name': 'Ultimátum cruel',
                }],
                'id': 'afa8d447717f92c4a987734086a44aad230387b8',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=175079&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{U}{U}{B}{B}{B}{R}{R}',
                'multiverseid': 175079,
                'name': 'Cruel Ultimatum',
                'number': '164',
                'originalText': 'Target opponent sacrifices a creature, discards three cards, then loses 5 life. You return a creature card from your graveyard to your hand, draw three cards, then gain 5 life.',
                'originalType': 'Sorcery',
                'printings': ['ALA', 'DDH', 'V13', 'C13', 'MM3', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2017-03-14',
                    'text': 'Cruel Ultimatum\'s only target is an opponent. You don\'t choose which creature card in your graveyard you\'ll return to your hand until Cruel Ultimatum resolves.',
                }, {
                    'date': '2017-03-14',
                    'text': 'All of the actions for Cruel Ultimatum are performed sequentially, in the order listed. Earlier actions may affect how you perform later actions. For example, if the opponent sacrifices a creature that he or she controls but you own, it will end up in your graveyard. When Cruel Ultimatum lets you return a creature card from your graveyard to your hand, you can choose that one.',
                }, {
                    'date': '2017-03-14',
                    'text': 'If, as Cruel Ultimatum begins to resolve, your opponent\'s life total is 5 or less and you have two or fewer cards in your library, the game will result in a draw. Your opponent\'s life total will drop to 0 or less, but Cruel Ultimatum must finish resolving completely before state-based actions are performed. You\'ll then be forced to draw three cards and fail to draw one. When state-based actions are finally performed, you and your opponent will both lose the game at the same time, which means the game is a draw.',
                }],
                'set': 'ALA',
                'setName': 'Shards of Alara',
                'text': 'Target opponent sacrifices a creature, discards three cards, then loses 5 life. You return a creature card from your graveyard to your hand, draw three cards, then gain 5 life.',
                'type': 'Sorcery',
                'types': ['Sorcery'],
            },
            'b63fe067e09bac2d5a896212923c0ecc8e693320': {
                'artist': 'Dave Kendall',
                'colorIdentity': ['U', 'B'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=201024&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 201024,
                    'name': '水没墓穴',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199530&type=card',
                    'language': 'French',
                    'multiverseid': 199530,
                    'name': 'Catacombes noyées',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199779&type=card',
                    'language': 'German',
                    'multiverseid': 199779,
                    'name': 'Versunkene Katakomben',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200526&type=card',
                    'language': 'Italian',
                    'multiverseid': 200526,
                    'name': 'Catacombe Allagate',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200028&type=card',
                    'language': 'Japanese',
                    'multiverseid': 200028,
                    'name': '水没した地下墓地',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199281&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 199281,
                    'name': 'Catacumba Submersa',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200277&type=card',
                    'language': 'Russian',
                    'multiverseid': 200277,
                    'name': 'Затопленная Катакомба',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200775&type=card',
                    'language': 'Spanish',
                    'multiverseid': 200775,
                    'name': 'Catacumba inundada',
                }],
                'id': 'b63fe067e09bac2d5a896212923c0ecc8e693320',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191067&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 191067,
                'name': 'Drowned Catacomb',
                'number': '224',
                'originalText': 'Drowned Catacomb enters the battlefield tapped unless you control an Island or a Swamp.\n{T}: Add {U} or {B} to your mana pool.',
                'originalType': 'Land',
                'printings': ['M10', 'M11', 'M12', 'M13', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2009-10-01',
                    'text': 'This checks for lands you control with the land type Island or Swamp, not for lands named Island or Swamp. The lands it checks for don\'t have to be basic lands. For example, if you control Blood Crypt (a nonbasic land with the land types Swamp and Mountain), Drowned Catacomb will enter the battlefield untapped.',
                }, {
                    'date': '2009-10-01',
                    'text': 'As this is entering the battlefield, it checks for lands that are already on the battlefield. It won\'t see lands that are entering the battlefield at the same time (due to Warp World, for example).',
                }],
                'set': 'M10',
                'setName': 'Magic 2010',
                'text': 'Drowned Catacomb enters the battlefield tapped unless you control an Island or a Swamp.\n{T}: Add {U} or {B} to your mana pool.',
                'type': 'Land',
                'types': ['Land'],
            },
            'b92118bd2d893c7424b435e22316a6b3c891fb6f': {
                'artist': 'Mike Dringenberg',
                'cmc': 2,
                'colorIdentity': ['B', 'R'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=161757&type=card',
                    'language': 'French',
                    'multiverseid': 161757,
                    'name': 'Talisman d\'indulgence',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73501&type=card',
                    'language': 'German',
                    'multiverseid': 73501,
                    'name': 'Talisman der Genusssucht',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=160226&type=card',
                    'language': 'Italian',
                    'multiverseid': 160226,
                    'name': 'Talismano dell\'Indulgenza',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73854&type=card',
                    'language': 'Japanese',
                    'multiverseid': 73854,
                    'name': '耽溺のタリスマン',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=162451&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 162451,
                    'name': 'Talismã da Indulgência',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=162135&type=card',
                    'language': 'Spanish',
                    'multiverseid': 162135,
                    'name': 'Talismán de la indulgencia',
                }],
                'id': 'b92118bd2d893c7424b435e22316a6b3c891fb6f',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39599&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{2}',
                'multiverseid': 39599,
                'name': 'Talisman of Indulgence',
                'number': '255',
                'originalText': '{T}: Add {1} to your mana pool.\n{T}: Add {B} or {R} to your mana pool. Talisman of Indulgence deals 1 damage to you.',
                'originalType': 'Artifact',
                'printings': ['MRD', 'E01'],
                'rarity': 'Uncommon',
                'set': 'MRD',
                'setName': 'Mirrodin',
                'text': '{T}: Add {C} to your mana pool.\n{T}: Add {B} or {R} to your mana pool. Talisman of Indulgence deals 1 damage to you.',
                'type': 'Artifact',
                'types': ['Artifact'],
            },
            'c992e917ac0924627bebf7178a5cea0c6f9f3e22': {
                'artist': 'Jon Foster',
                'colorIdentity': ['B', 'R'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=201023&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 201023,
                    'name': '龙颅山峰',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199529&type=card',
                    'language': 'French',
                    'multiverseid': 199529,
                    'name': 'Sommet du Crânedragon',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199778&type=card',
                    'language': 'German',
                    'multiverseid': 199778,
                    'name': 'Drachenschädel-Pass',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200525&type=card',
                    'language': 'Italian',
                    'multiverseid': 200525,
                    'name': 'Vetta del Teschio di Drago',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200027&type=card',
                    'language': 'Japanese',
                    'multiverseid': 200027,
                    'name': '竜髑髏の山頂',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=199280&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 199280,
                    'name': 'Pico da Caveira de Dragão',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200276&type=card',
                    'language': 'Russian',
                    'multiverseid': 200276,
                    'name': 'Пик Драконьего Черепа',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=200774&type=card',
                    'language': 'Spanish',
                    'multiverseid': 200774,
                    'name': 'Cumbre Cráneo de Dragón',
                }],
                'id': 'c992e917ac0924627bebf7178a5cea0c6f9f3e22',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191091&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 191091,
                'name': 'Dragonskull Summit',
                'number': '223',
                'originalText': 'Dragonskull Summit enters the battlefield tapped unless you control a Swamp or a Mountain.\n{T}: Add {B} or {R} to your mana pool.',
                'originalType': 'Land',
                'printings': ['M10', 'M11', 'M12', 'M13', 'C16', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2009-10-01',
                    'text': 'This checks for lands you control with the land type Swamp or Mountain, not for lands named Swamp or Mountain. The lands it checks for don\'t have to be basic lands. For example, if you control Stomping Ground (a nonbasic land with the land types Mountain and Forest), Dragonskull Summit will enter the battlefield untapped.',
                }, {
                    'date': '2009-10-01',
                    'text': 'As this is entering the battlefield, it checks for lands that are already on the battlefield. It won\'t see lands that are entering the battlefield at the same time (due to Warp World, for example).',
                }],
                'set': 'M10',
                'setName': 'Magic 2010',
                'text': 'Dragonskull Summit enters the battlefield tapped unless you control a Swamp or a Mountain.\n{T}: Add {B} or {R} to your mana pool.',
                'type': 'Land',
                'types': ['Land'],
            },
            'cc536edc1ba5bf99687f241d60780e49146a2911': {
                'artist': 'UDON',
                'count': 2,
                'flavor': 'Awarded in celebration of the second birthday of Magic Online',
                'hand': 0,
                'id': 'cc536edc1ba5bf99687f241d60780e49146a2911',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=182280&type=card',
                'layout': 'vanguard',
                'life': -6,
                'multiverseid': 182280,
                'name': 'Flametongue Kavu Avatar',
                'number': '14',
                'originalText': 'Whenever a nontoken creature enters the battlefield under your control, that creature deals X damage to target creature, where X is a number chosen at random from 0 to 4.',
                'originalType': 'Vanguard',
                'printings': ['VAN'],
                'rarity': 'Special',
                'set': 'VAN',
                'setName': 'Vanguard',
                'text': 'Whenever a nontoken creature enters the battlefield under your control, that creature deals X damage to target creature, where X is a number chosen at random from 0 to 4.',
                'type': 'Vanguard',
                'types': ['Vanguard'],
            },
            'dab4c76005629e5ec84f5df58fb900c4cedb0fe5': {
                'artist': 'Steve Argyle',
                'cmc': 4,
                'colorIdentity': ['U', 'B'],
                'colors': ['Blue', 'Black'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=365776&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 365776,
                    'name': '掳魂勒赎',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366011&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 366011,
                    'name': '擄魂勒贖',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366576&type=card',
                    'language': 'French',
                    'multiverseid': 366576,
                    'name': 'Rançon de l\'âme',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366742&type=card',
                    'language': 'German',
                    'multiverseid': 366742,
                    'name': 'Seelenfreikauf',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367027&type=card',
                    'language': 'Italian',
                    'multiverseid': 367027,
                    'name': 'Estorsione all\'Anima',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368337&type=card',
                    'language': 'Japanese',
                    'multiverseid': 368337,
                    'name': '魂の代償',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367449&type=card',
                    'language': 'Korean',
                    'multiverseid': 367449,
                    'name': '영혼의 몸값',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367632&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 367632,
                    'name': 'Resgate de Alma',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367806&type=card',
                    'language': 'Russian',
                    'multiverseid': 367806,
                    'name': 'Выкуп Души',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368089&type=card',
                    'language': 'Spanish',
                    'multiverseid': 368089,
                    'name': 'Chantaje del alma',
                }],
                'id': 'dab4c76005629e5ec84f5df58fb900c4cedb0fe5',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366351&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Return to Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{2}{U}{B}',
                'multiverseid': 366351,
                'name': 'Soul Ransom',
                'number': '198',
                'originalText': 'Enchant creature\nYou control enchanted creature.\nDiscard two cards: Soul Ransom\'s controller sacrifices it, then draws two cards. Only any opponent may activate this ability.',
                'originalType': 'Enchantment — Aura',
                'printings': ['GTC', 'MM3', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2017-03-14',
                    'text': 'In most cases, you\'ll enchant a creature controlled by an opponent, which will cause you to gain control of that creature. Any of your opponents can activate the last ability of Soul Ransom by discarding two cards. When that ability resolves, you\'ll sacrifice Soul Ransom and draw two cards.',
                }, {
                    'date': '2017-03-14',
                    'text': 'You\'ll draw two cards even if you can\'t sacrifice Soul Ransom, perhaps because it left the battlefield in response to Soul Ransom\'s ability.',
                }],
                'set': 'GTC',
                'setName': 'Gatecrash',
                'subtypes': ['Aura'],
                'text': 'Enchant creature\nYou control enchanted creature.\nDiscard two cards: Soul Ransom\'s controller sacrifices it, then draws two cards. Only any opponent may activate this ability.',
                'type': 'Enchantment — Aura',
                'types': ['Enchantment'],
                'watermark': 'Dimir',
            },
            'dddea3d006c222a06a641ab239505a15bf3b94ea': {
                'artist': 'Jeff Easley',
                'cmc': 2,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 2,
                'flavor': 'Nightscape masters don\'t stop at raising the spirit of a fallen battlemage. They raise the flesh along with it.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=185194&type=card',
                    'language': 'French',
                    'multiverseid': 185194,
                    'name': 'Familier nyctasophe',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=183122&type=card',
                    'language': 'German',
                    'multiverseid': 183122,
                    'name': 'Vertrauter des Nachtpfads',
                }],
                'id': 'dddea3d006c222a06a641ab239505a15bf3b94ea',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=25693&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Invasion Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{1}{B}',
                'multiverseid': 25693,
                'name': 'Nightscape Familiar',
                'number': '48',
                'originalText': 'Blue spells and red spells you play cost {1} less to play.\n{1}{B}: Regenerate Nightscape Familiar.',
                'originalType': 'Creature — Zombie',
                'power': '1',
                'printings': ['PLS', 'DDH', 'C13', 'VMA', 'E01'],
                'rarity': 'Common',
                'rulings': [{
                    'date': '2004-10-04',
                    'text': 'If a spell is both blue and red, you pay {1} less, not {2} less.',
                }, {
                    'date': '2004-10-04',
                    'text': 'The generic X cost is still considered generic even if there is a requirement that a specific color be used for it. For example, "only black mana can be spent this way". This distinction is important for effects which reduce the generic portion of a spell\'s cost.',
                }, {
                    'date': '2004-10-04',
                    'text': 'This can lower the cost to zero, but not below zero.',
                }, {
                    'date': '2004-10-04',
                    'text': 'The effect is cumulative.',
                }, {
                    'date': '2004-10-04',
                    'text': 'The lower cost is not optional like with some other cost reducers.',
                }, {
                    'date': '2004-10-04',
                    'text': 'Can never affect the colored part of the cost.',
                }, {
                    'date': '2004-10-04',
                    'text': 'If this card is sacrificed to pay part of a spell\'s cost, the cost reduction still applies.',
                }],
                'set': 'PLS',
                'setName': 'Planeshift',
                'subtypes': ['Zombie'],
                'text': 'Blue spells and red spells you cast cost {1} less to cast.\n{1}{B}: Regenerate Nightscape Familiar.',
                'toughness': '1',
                'type': 'Creature — Zombie',
                'types': ['Creature'],
            },
            'debe9afa4fe15a04dff402d93a2f7c9c9ab0995f': {
                'artist': 'rk post',
                'cmc': 7,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389959&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 389959,
                    'name': '厄亡者督军',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=390633&type=card',
                    'language': 'French',
                    'multiverseid': 390633,
                    'name': 'Brigadier des damnés',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=390296&type=card',
                    'language': 'German',
                    'multiverseid': 390296,
                    'name': 'Aufseher der Verdammten',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=390970&type=card',
                    'language': 'Italian',
                    'multiverseid': 390970,
                    'name': 'Sorvegliante dei Dannati',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=391307&type=card',
                    'language': 'Japanese',
                    'multiverseid': 391307,
                    'name': '忌むべき者の監視者',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=391644&type=card',
                    'language': 'Spanish',
                    'multiverseid': 391644,
                    'name': 'Caporal de los condenados',
                }],
                'id': 'debe9afa4fe15a04dff402d93a2f7c9c9ab0995f',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389622&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{5}{B}{B}',
                'multiverseid': 389622,
                'name': 'Overseer of the Damned',
                'number': '28',
                'originalText': 'Flying\nWhen Overseer of the Damned enters the battlefield, you may destroy target creature.\nWhenever a nontoken creature an opponent controls dies, put a 2/2 black Zombie creature token onto the battlefield tapped.',
                'originalType': 'Creature — Demon',
                'power': '5',
                'printings': ['C14', 'E01'],
                'rarity': 'Rare',
                'set': 'C14',
                'setName': 'Commander 2014',
                'subtypes': ['Demon'],
                'text': 'Flying\nWhen Overseer of the Damned enters the battlefield, you may destroy target creature.\nWhenever a nontoken creature an opponent controls dies, create a tapped 2/2 black Zombie creature token.',
                'toughness': '5',
                'type': 'Creature — Demon',
                'types': ['Creature'],
            },
            'e5a85451def764645578a9628ba060814fc88794': {
                'artist': 'Cliff Childs',
                'colorIdentity': ['U', 'B'],
                'count': 1,
                'flavor': '"Long after the land has given up the last of its secrets, there will still be mysteries in the depths of the sea."\n—Kiora',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407874&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 407874,
                    'name': '水下聚骨场',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408060&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 408060,
                    'name': '水下聚骨場',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408432&type=card',
                    'language': 'French',
                    'multiverseid': 408432,
                    'name': 'Ossuaire submergé',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408246&type=card',
                    'language': 'German',
                    'multiverseid': 408246,
                    'name': 'Überschwemmter Knochenacker',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408618&type=card',
                    'language': 'Italian',
                    'multiverseid': 408618,
                    'name': 'Ossario Sommerso',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408804&type=card',
                    'language': 'Japanese',
                    'multiverseid': 408804,
                    'name': '水没した骨塚',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408990&type=card',
                    'language': 'Korean',
                    'multiverseid': 408990,
                    'name': '물에 잠긴 납골지',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409176&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 409176,
                    'name': 'Ossário Submerso',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409362&type=card',
                    'language': 'Russian',
                    'multiverseid': 409362,
                    'name': 'Затопленное Кладбище',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409548&type=card',
                    'language': 'Spanish',
                    'multiverseid': 409548,
                    'name': 'Osario sumergido',
                }],
                'id': 'e5a85451def764645578a9628ba060814fc88794',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407688&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Battle for Zendikar Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Kaladesh Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'multiverseid': 407688,
                'name': 'Submerged Boneyard',
                'number': '178',
                'originalText': 'Submerged Boneyard enters the battlefield tapped.\n{T}: Add {U} or {B} to your mana pool.',
                'originalType': 'Land',
                'printings': ['OGW', 'AER', 'AKH'],
                'rarity': 'Uncommon',
                'set': 'OGW',
                'setName': 'Oath of the Gatewatch',
                'text': 'Submerged Boneyard enters the battlefield tapped.\n{T}: Add {U} or {B} to your mana pool.',
                'type': 'Land',
                'types': ['Land'],
            },
            'e5b16be307498f8337a881d616185b8d072da72d': {
                'artist': 'Steve Prescott',
                'cmc': 5,
                'colorIdentity': ['U'],
                'colors': ['Blue'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373866&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 373866,
                    'name': '先知史芬斯',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=374115&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 374115,
                    'name': '先知史芬斯',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=374613&type=card',
                    'language': 'French',
                    'multiverseid': 374613,
                    'name': 'Sphinx des auspices',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=374364&type=card',
                    'language': 'German',
                    'multiverseid': 374364,
                    'name': 'Prophezeiende Sphinx',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=374862&type=card',
                    'language': 'Italian',
                    'multiverseid': 374862,
                    'name': 'Sfinge Profetica',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=375111&type=card',
                    'language': 'Japanese',
                    'multiverseid': 375111,
                    'name': '予知するスフィンクス',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=375360&type=card',
                    'language': 'Korean',
                    'multiverseid': 375360,
                    'name': '선견지명 스핑크스',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=375609&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 375609,
                    'name': 'Esfinge Prognóstica',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=375858&type=card',
                    'language': 'Russian',
                    'multiverseid': 375858,
                    'name': 'Сфинкс-Провидец',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376107&type=card',
                    'language': 'Spanish',
                    'multiverseid': 376107,
                    'name': 'Esfinge adivina',
                }],
                'id': 'e5b16be307498f8337a881d616185b8d072da72d',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373617&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Theros Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}{U}{U}',
                'multiverseid': 373617,
                'name': 'Prognostic Sphinx',
                'number': '60',
                'originalText': 'Flying\nDiscard a card: Prognostic Sphinx gains hexproof until end of turn. Tap it.\nWhenever Prognostic Sphinx attacks, scry 3. (Look at the top three cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.)',
                'originalType': 'Creature — Sphinx',
                'power': '3',
                'printings': ['THS', 'CPK', 'E01'],
                'rarity': 'Rare',
                'rulings': [{
                    'date': '2013-09-15',
                    'text': 'You can activate Prognostic Sphinx\'s ability even if it\'s already tapped.',
                }, {
                    'date': '2013-09-15',
                    'text': 'When you scry, you may put all the cards you look at back on top of your library, you may put all of those cards on the bottom of your library, or you may put some of those cards on top and the rest of them on the bottom.',
                }, {
                    'date': '2013-09-15',
                    'text': 'You choose how to order cards returned to your library after scrying no matter where you put them.',
                }, {
                    'date': '2013-09-15',
                    'text': 'You perform the actions stated on a card in sequence. For some spells and abilities, that means you\'ll scry last. For others, that means you\'ll scry and then perform other actions.',
                }, {
                    'date': '2013-09-15',
                    'text': 'Scry appears on some spells and abilities with one or more targets. If all of the spell or ability\'s targets are illegal when it tries to resolve, it will be countered and none of its effects will happen. You won\'t scry.',
                }],
                'set': 'THS',
                'setName': 'Theros',
                'subtypes': ['Sphinx'],
                'text': 'Flying\nDiscard a card: Prognostic Sphinx gains hexproof until end of turn. Tap it.\nWhenever Prognostic Sphinx attacks, scry 3. (Look at the top three cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.)',
                'toughness': '5',
                'type': 'Creature — Sphinx',
                'types': ['Creature'],
            },
            'e8f49c90421a01ba6fe4767c8ef3d3f967a5abb1': {
                'artist': 'Wayne Reynolds',
                'cmc': 2,
                'colorIdentity': ['B', 'R'],
                'colors': ['Black', 'Red'],
                'count': 1,
                'flavor': 'In Rakdos-controlled neighborhoods, everyone is part of the show.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=357263&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 357263,
                    'name': '恐惧钻心',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=355619&type=card',
                    'language': 'Chinese Traditional',
                    'multiverseid': 355619,
                    'name': '恐懼鑽心',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=356167&type=card',
                    'language': 'French',
                    'multiverseid': 356167,
                    'name': 'Vrille d\'effroi',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=355893&type=card',
                    'language': 'German',
                    'multiverseid': 355893,
                    'name': 'Grauenvolles Aufbohren',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=356441&type=card',
                    'language': 'Italian',
                    'multiverseid': 356441,
                    'name': 'Foro del Terrore',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=356715&type=card',
                    'language': 'Japanese',
                    'multiverseid': 356715,
                    'name': '戦慄掘り',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=357537&type=card',
                    'language': 'Korean',
                    'multiverseid': 357537,
                    'name': '꿰뚫어 죽이기',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=356989&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 356989,
                    'name': 'Perfuração Letal',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=355345&type=card',
                    'language': 'Russian',
                    'multiverseid': 355345,
                    'name': 'Ужасающее Высверливание',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=365615&type=card',
                    'language': 'Spanish',
                    'multiverseid': 365615,
                    'name': 'Taladro pavoroso',
                }],
                'id': 'e8f49c90421a01ba6fe4767c8ef3d3f967a5abb1',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=270354&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Return to Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{B}{R}',
                'multiverseid': 270354,
                'name': 'Dreadbore',
                'number': '157',
                'originalText': 'Destroy target creature or planeswalker.',
                'originalType': 'Sorcery',
                'printings': ['RTR', 'E01'],
                'rarity': 'Rare',
                'set': 'RTR',
                'setName': 'Return to Ravnica',
                'text': 'Destroy target creature or planeswalker.',
                'type': 'Sorcery',
                'types': ['Sorcery'],
                'watermark': 'Rakdos',
            },
            'e9b91cdd04778111fda1a5603f9d1dea0f14233d': {
                'artist': 'Dan Frazier',
                'colorIdentity': ['B'],
                'count': 7,
                'id': 'e9b91cdd04778111fda1a5603f9d1dea0f14233d',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=277&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Amonkhet Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Battle for Zendikar Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Ice Age Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Invasion Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Kaladesh Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Kamigawa Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Khans of Tarkir Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Lorwyn-Shadowmoor Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Masques Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirage Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Odyssey Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Onslaught Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Return to Ravnica Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Scars of Mirrodin Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Shadows over Innistrad Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Standard',
                    'legality': 'Legal',
                }, {
                    'format': 'Tempest Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Theros Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Time Spiral Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Un-Sets',
                    'legality': 'Legal',
                }, {
                    'format': 'Urza Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }, {
                    'format': 'Zendikar Block',
                    'legality': 'Legal',
                }],
                'multiverseid': 277,
                'name': 'Swamp',
                'originalText': 'Tap to add {B} to your mana pool.',
                'originalType': 'Land',
                'printings': ['LEA', 'LEB', '2ED', 'CED', 'CEI', '3ED', '4ED', 'ICE', 'RQS', 'pARL', 'MIR', 'ITP', '5ED', 'POR', 'TMP', 'pJGP', 'PO2', 'UGL', 'pALP', 'USG', 'ATH', '6ED', 'PTK', 'pGRU', 'S99', 'MMQ', 'BRB', 'pELP', 'S00', 'BTD', 'INV', '7ED', 'ODY', 'DKM', 'ONS', '8ED', 'MRD', 'CHK', 'UNH', '9ED', 'RAV', 'CST', 'TSP', '10E', 'MED', 'LRW', 'SHM', 'ALA', 'DDC', 'M10', 'HOP', 'ME3', 'ZEN', 'DDD', 'H09', 'DDE', 'ROE', 'DPA', 'ARC', 'M11', 'SOM', 'MBS', 'NPH', 'CMD', 'M12', 'DDH', 'ISD', 'PD3', 'AVR', 'PC2', 'M13', 'DDJ', 'RTR', 'DDK', 'M14', 'THS', 'C13', 'DDM', 'MD1', 'M15', 'DDN', 'KTK', 'C14', 'DD3_DVD', 'DD3_GVL', 'FRF', 'DTK', 'TPR', 'ORI', 'DDP', 'BFZ', 'C15', 'DDQ', 'SOI', 'DDR', 'KLD', 'C16', 'PCA', 'AKH', 'CMA', 'E01', 'HOU'],
                'rarity': 'Basic Land',
                'set': 'LEA',
                'setName': 'Limited Edition Alpha',
                'subtypes': ['Swamp'],
                'supertypes': ['Basic'],
                'type': 'Basic Land — Swamp',
                'types': ['Land'],
                'variations': [278],
            },
            'efb290d62e44ee17b418fd07aeeb0fba2164963e': {
                'artist': 'Karl Kopinski',
                'cmc': 3,
                'colorIdentity': ['B'],
                'colors': ['Black'],
                'count': 2,
                'foreignNames': [{
                    'language': 'Chinese Simplified',
                    'name': '夜盗吸血鬼',
                }, {
                    'language': 'Chinese Traditional',
                    'name': '夜盜吸血鬼',
                }, {
                    'language': 'French',
                    'name': 'Faucon de nuit vampire',
                }, {
                    'language': 'German',
                    'name': 'Vampir-Nachtschwärmer',
                }, {
                    'language': 'Italian',
                    'name': 'Vampiro Falco Notturno',
                }, {
                    'language': 'Japanese',
                    'name': '吸血鬼の夜鷲',
                }, {
                    'language': 'Korean',
                    'name': '흡혈귀 밤도둑',
                }, {
                    'language': 'Portuguese (Brazil)',
                    'name': 'Vampiro Falcão-da-Noite',
                }, {
                    'language': 'Russian',
                    'name': 'Вампир-Полуночник',
                }, {
                    'language': 'Spanish',
                    'name': 'Halcón nocturno vampiro',
                }],
                'id': 'efb290d62e44ee17b418fd07aeeb0fba2164963e',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }, {
                    'format': 'Zendikar Block',
                    'legality': 'Legal',
                }],
                'manaCost': '{1}{B}{B}',
                'name': 'Vampire Nighthawk',
                'number': '33',
                'power': '2',
                'printings': ['pWPN', 'ZEN', 'CMD', 'M13', 'DDK', 'C13', 'DDP', 'MM3', 'E01'],
                'rarity': 'Special',
                'releaseDate': '2009',
                'set': 'pWPN',
                'setName': 'Wizards Play Network',
                'source': 'WPN Prize',
                'subtypes': ['Vampire', 'Shaman'],
                'text': 'Flying, deathtouch, lifelink',
                'toughness': '3',
                'type': 'Creature — Vampire Shaman',
                'types': ['Creature'],
            },
            'f040ce595f7d5d0862556b03c2c6ccfe1cfddd52': {
                'artist': 'D. Alexander Gregory',
                'cmc': 8,
                'colorIdentity': ['U', 'B', 'R'],
                'colors': ['Blue', 'Black', 'Red'],
                'count': 1,
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192788&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 192788,
                    'name': '鹏洛客尼可波拉斯',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192498&type=card',
                    'language': 'French',
                    'multiverseid': 192498,
                    'name': 'Nicol Bolas, planeswalker',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=193223&type=card',
                    'language': 'German',
                    'multiverseid': 193223,
                    'name': 'Planeswalker Nicol Bolas',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192643&type=card',
                    'language': 'Italian',
                    'multiverseid': 192643,
                    'name': 'Nicol Bolas, Planeswalker',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=193078&type=card',
                    'language': 'Japanese',
                    'multiverseid': 193078,
                    'name': 'プレインズウォーカー、ニコル・ボーラス',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=193368&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 193368,
                    'name': 'Nicol Bolas, Planeswalker',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192933&type=card',
                    'language': 'Russian',
                    'multiverseid': 192933,
                    'name': 'Никол Болас, Planeswalker',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=192353&type=card',
                    'language': 'Spanish',
                    'multiverseid': 192353,
                    'name': 'Nicol Bolas, planeswalker',
                }],
                'id': 'f040ce595f7d5d0862556b03c2c6ccfe1cfddd52',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179441&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'loyalty': 5,
                'manaCost': '{4}{U}{B}{B}{R}',
                'multiverseid': 179441,
                'name': 'Nicol Bolas, Planeswalker',
                'number': '120',
                'originalText': '+3: Destroy target noncreature permanent.\n-2: Gain control of target creature.\n-9: Nicol Bolas, Planeswalker deals 7 damage to target player. That player discards seven cards, then sacrifices seven permanents.',
                'originalType': 'Planeswalker — Bolas',
                'printings': ['CON', 'DDH', 'M13', 'E01'],
                'rarity': 'Mythic Rare',
                'rulings': [{
                    'date': '2009-02-01',
                    'text': 'The control-change effect has no duration. It will last until the game ends or the affected creature leaves the battlefield. It may be superseded by a later control-change effect.',
                }, {
                    'date': '2012-07-01',
                    'text': 'If the damage from Nicol Bolas\'s third ability is prevented or redirected, the rest of the effect will still happen. Specifically, the number of cards discarded and permanents sacrificed isn\'t tied to the amount of damage dealt.',
                }, {
                    'date': '2012-07-01',
                    'text': 'For the third ability, if the player is an illegal target when the ability tries to resolve, the ability is countered and none of its effects will happen. No damage will be dealt, no cards will be discarded, and no permanents will be sacrificed.',
                }],
                'set': 'CON',
                'setName': 'Conflux',
                'subtypes': ['Bolas'],
                'text': '+3: Destroy target noncreature permanent.\n−2: Gain control of target creature.\n−9: Nicol Bolas, Planeswalker deals 7 damage to target player. That player discards seven cards, then sacrifices seven permanents.',
                'type': 'Planeswalker — Bolas',
                'types': ['Planeswalker'],
            },
            'f8bc8c0816669e3c5b6e8ad5e9b58ed7360ecd11': {
                'artist': 'Nils Hamm',
                'cmc': 3,
                'colorIdentity': ['U', 'B', 'R'],
                'count': 2,
                'flavor': 'Like most features of Grixis, the obelisks that remain from the time of Alara now exist only for dark exploitation.',
                'foreignNames': [{
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187432&type=card',
                    'language': 'Chinese Simplified',
                    'multiverseid': 187432,
                    'name': '格利极碑',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188677&type=card',
                    'language': 'French',
                    'multiverseid': 188677,
                    'name': 'Obélisque de Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187681&type=card',
                    'language': 'German',
                    'multiverseid': 187681,
                    'name': 'Obelisk von Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188428&type=card',
                    'language': 'Italian',
                    'multiverseid': 188428,
                    'name': 'Obelisco di Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187183&type=card',
                    'language': 'Japanese',
                    'multiverseid': 187183,
                    'name': 'グリクシスのオベリスク',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188179&type=card',
                    'language': 'Portuguese (Brazil)',
                    'multiverseid': 188179,
                    'name': 'Obelisco de Grixis',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188926&type=card',
                    'language': 'Russian',
                    'multiverseid': 188926,
                    'name': 'Обелиск Гриксиса',
                }, {
                    'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=187930&type=card',
                    'language': 'Spanish',
                    'multiverseid': 187930,
                    'name': 'Obelisco de Grixis',
                }],
                'id': 'f8bc8c0816669e3c5b6e8ad5e9b58ed7360ecd11',
                'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=174887&type=card',
                'layout': 'normal',
                'legalities': [{
                    'format': 'Commander',
                    'legality': 'Legal',
                }, {
                    'format': 'Legacy',
                    'legality': 'Legal',
                }, {
                    'format': 'Modern',
                    'legality': 'Legal',
                }, {
                    'format': 'Shards of Alara Block',
                    'legality': 'Legal',
                }, {
                    'format': 'Vintage',
                    'legality': 'Legal',
                }],
                'manaCost': '{3}',
                'multiverseid': 174887,
                'name': 'Obelisk of Grixis',
                'number': '214',
                'originalText': '{T}: Add {U}, {B}, or {R} to your mana pool.',
                'originalType': 'Artifact',
                'printings': ['ALA', 'DDH', 'C13', 'E01'],
                'rarity': 'Common',
                'set': 'ALA',
                'setName': 'Shards of Alara',
                'text': '{T}: Add {U}, {B}, or {R} to your mana pool.',
                'type': 'Artifact',
                'types': ['Artifact'],
            },
        },
    },
    'Deck': {
        'items': ['deck1'],
        'itemsById': {
            'deck1': {
                'analytics': {
                    'deckComposition': {
                        'planeswalker': 1,
                        'creature': 15,
                        'instant': 5,
                        'sorcery': 10,
                        'enchantment': 2,
                        'artifact': 4,
                        'land': 25,
                    },
                    'manaCurve': [0, 4, 6, 5, 0, 6, 8],
                    'colorComposition': {
                        'white': 21,
                        'red': 11,
                        'green': 20
                    },
                },
                'cardCount': 60,
                'id': 'deck1',
                'headliner': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417424&type=card',
                'name': 'Nicol Bolas',
            },
        },
    },
    'DeckCardList': {
        'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        'itemsById': [{
            'fromDeckId': 'deck1',
            'id': 0,
            'toCardId': 'f040ce595f7d5d0862556b03c2c6ccfe1cfddd52',
        }, {
            'fromDeckId': 'deck1',
            'id': 1,
            'toCardId': '40eccea11759abce48ca5a9147dfb9e76bc8986a',
        }, {
            'fromDeckId': 'deck1',
            'id': 2,
            'toCardId': '0dba176481e562be189bfca73d216af8f73a8ab0',
        }, {
            'fromDeckId': 'deck1',
            'id': 3,
            'toCardId': '6ae76d919aa5c76921e07cc8b9750ba38715ab5a',
        }, {
            'fromDeckId': 'deck1',
            'id': 4,
            'toCardId': 'cc536edc1ba5bf99687f241d60780e49146a2911',
        }, {
            'fromDeckId': 'deck1',
            'id': 5,
            'toCardId': '797dc0aa1b56d74b6526b1b9ebe9dff1f9dcdef7',
        }, {
            'fromDeckId': 'deck1',
            'id': 6,
            'toCardId': 'dddea3d006c222a06a641ab239505a15bf3b94ea',
        }, {
            'fromDeckId': 'deck1',
            'id': 7,
            'toCardId': 'e5b16be307498f8337a881d616185b8d072da72d',
        }, {
            'fromDeckId': 'deck1',
            'id': 8,
            'toCardId': '04f53b3b7bd4ad390f1e3d1492dab515b6247d6c',
        }, {
            'fromDeckId': 'deck1',
            'id': 9,
            'toCardId': 'efb290d62e44ee17b418fd07aeeb0fba2164963e',
        }, {
            'fromDeckId': 'deck1',
            'id': 10,
            'toCardId': 'a82db8e40a2a087ced4354e2453337ab8db5568f',
        }, {
            'fromDeckId': 'deck1',
            'id': 11,
            'toCardId': '1c281a1d130a2b9902cd513760f0c1c01d2e7206',
        }, {
            'fromDeckId': 'deck1',
            'id': 12,
            'toCardId': 'debe9afa4fe15a04dff402d93a2f7c9c9ab0995f',
        }, {
            'fromDeckId': 'deck1',
            'id': 13,
            'toCardId': '8fb9ca0311da69e67cca3c34e4839e95f295551b',
        }, {
            'fromDeckId': 'deck1',
            'id': 14,
            'toCardId': 'afa8d447717f92c4a987734086a44aad230387b8',
        }, {
            'fromDeckId': 'deck1',
            'id': 15,
            'toCardId': '71efb19388e3a3198a8d5fb34cfa051b9e1f3685',
        }, {
            'fromDeckId': 'deck1',
            'id': 16,
            'toCardId': '34e45f6f737222534771d55b09337a0aa2e4b89b',
        }, {
            'fromDeckId': 'deck1',
            'id': 17,
            'toCardId': '1a684fdadcd2583efaa010b5aa0ee899566db200',
        }, {
            'fromDeckId': 'deck1',
            'id': 18,
            'toCardId': 'e8f49c90421a01ba6fe4767c8ef3d3f967a5abb1',
        }, {
            'fromDeckId': 'deck1',
            'id': 19,
            'toCardId': 'ae6035733abff81326472265e29e432b68a67683',
        }, {
            'fromDeckId': 'deck1',
            'id': 20,
            'toCardId': '863294493474298908b19d49f375c58b391428c0',
        }, {
            'fromDeckId': 'deck1',
            'id': 21,
            'toCardId': '7b35a1ba9c515954b0dbe241c298cfba61f020ae',
        }, {
            'fromDeckId': 'deck1',
            'id': 22,
            'toCardId': 'f8bc8c0816669e3c5b6e8ad5e9b58ed7360ecd11',
        }, {
            'fromDeckId': 'deck1',
            'id': 23,
            'toCardId': 'b92118bd2d893c7424b435e22316a6b3c891fb6f',
        }, {
            'fromDeckId': 'deck1',
            'id': 24,
            'toCardId': '556a174bedd873544f950ca0bde6c0787f4014d3',
        }, {
            'fromDeckId': 'deck1',
            'id': 25,
            'toCardId': 'dab4c76005629e5ec84f5df58fb900c4cedb0fe5',
        }, {
            'fromDeckId': 'deck1',
            'id': 26,
            'toCardId': '7c529f2eb5dbc6f339048df6f941c97c50a58fe8',
        }, {
            'fromDeckId': 'deck1',
            'id': 27,
            'toCardId': 'a59598a58f5a4b30e5509efefea6d018c96ab481',
        }, {
            'fromDeckId': 'deck1',
            'id': 28,
            'toCardId': '639e06af359af83f77404dacaeebec1b30126660',
        }, {
            'fromDeckId': 'deck1',
            'id': 29,
            'toCardId': 'e9b91cdd04778111fda1a5603f9d1dea0f14233d',
        }, {
            'fromDeckId': 'deck1',
            'id': 30,
            'toCardId': '1421a1f6e4261343c365936bb174b87be74ff50f',
        }, {
            'fromDeckId': 'deck1',
            'id': 31,
            'toCardId': 'e5a85451def764645578a9628ba060814fc88794',
        }, {
            'fromDeckId': 'deck1',
            'id': 32,
            'toCardId': 'b63fe067e09bac2d5a896212923c0ecc8e693320',
        }, {
            'fromDeckId': 'deck1',
            'id': 33,
            'toCardId': 'a7d9152a92a0cc4a1cefc4fb7f2d29697145978c',
        }, {
            'fromDeckId': 'deck1',
            'id': 34,
            'toCardId': 'c992e917ac0924627bebf7178a5cea0c6f9f3e22',
        }, {
            'fromDeckId': 'deck1',
            'id': 35,
            'toCardId': '13c27e11a2dbe57f20cf7e7db17345285ed97d78',
        }],
        'meta': {
            'maxId': 35,
        },
    },
};

function bootstrapState() {
    const initialState = orm.getDefaultState();
    const session = orm.withMutations(initialState);
    const {
        Deck,
        Card
    } = session;
    const decks = {};
    const cards = {};

    entities.Card.items.map(cardId => {
        cards[cardId] = Card.create(entities.Card.itemsById[cardId]);
    });

    entities.Deck.items.map(deckId => {
        decks[deckId] = Deck.create(entities.Deck.itemsById[deckId]);
    });

    entities.DeckCardList.items.map(cardId => {
        const cardInDeck = entities.DeckCardList.itemsById[cardId];
        decks[cardInDeck.fromDeckId].cardList.add(cards[cardInDeck.toCardId]);
    });

    // const philosophy = Genre.create({name: 'Philosophy'});
    // const fiction = Genre.create({name: 'Fiction'});
    // const nonFiction = Genre.create({name: 'Non-Fiction'});
    //
    // const publisher1 = Publisher.create({name: 'Awesome Publishing'});
    // const publisher2 = Publisher.create({name: 'Good Publishing'});
    // const publisher3 = Publisher.create({name: 'Mediocre Publishing'});
    //
    // const author1 = Author.create({name: 'John Doe'});
    // const author2 = Author.create({name: 'Jane Doe'});
    // const author3 = Author.create({name: 'Mary Doe'});
    //
    // const book1 = Book.create({
    //     name: 'Great Business Book!',
    //     publisher: publisher1,
    // });
    //
    // book1.authors.add(author1);
    // book1.genres.add(business, nonFiction);
    //
    // const book2 = Book.create({
    //     name: 'Pretty Good Philosophy Book',
    //     publisher: publisher2,
    // });
    // book2.authors.add(author2);
    // book2.genres.add(philosophy, nonFiction);
    //
    // const book3 = Book.create({
    //     name: 'Not That Good of a Book',
    //     publisher: publisher3,
    // });
    // book3.authors.add(author3);
    // book3.genres.add(fiction);
    return initialState;
}

export default bootstrapState();
