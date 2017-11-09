import { assert } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import mtgparser from 'mtg-parser';
import { getFullCardInfo, buildDeck } from '../data.helpers';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

/* eslint-disable */
const cards = [
    {
        count: 2,
        artist: 'Jason Felix',
        cmc: 4,
        colors: [
            'Black',
        ],
        flavor: '"Soft dirt makes for light work."',
        id: '8ef3a8ee3a9951ff790b3f798db73f476ca32d2d',
        set: 'SOI',
        setName: 'Shadows over Innistrad',
        layout: 'normal',
        multiverseid: 409862,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409862&type=card',
        manaCost: '{2}{B}{B}',
        name: 'Gisa\'s Bidding',
        text: 'Create two 2/2 black Zombie creature tokens.\nMadness {2}{B} (If you discard this card, discard it into exile. When you do, cast it for its madness cost or put it into your graveyard.)',
        type: 'Sorcery',
        types: [
            'Sorcery',
        ],
        rarity: 'Uncommon',
    },
    {
        count: 4,
        artist: 'Darek Zabrocki',
        cmc: 1,
        colors: [
            'Black',
        ],
        id: '6c6e9285abab44b8bba938d4b2ef65a81b4f09bf',
        set: 'EMN',
        setName: 'Eldritch Moon',
        layout: 'normal',
        multiverseid: 414381,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414381&type=card',
        manaCost: '{B}',
        name: 'Cryptbreaker',
        text: '{1}{B}, {T}, Discard a card: Create a 2/2 black Zombie creature token.\nTap three untapped Zombies you control: You draw a card and you lose 1 life.',
        type: 'Creature — Zombie',
        types: [
            'Creature',
        ],
        rarity: 'Rare',
    },
    {
        count: 4,
        artist: 'Josh Hass',
        cmc: 1,
        colors: [
            'Black',
        ],
        id: '1c9337a6ba1d0ca54fb5f801ea7aeb681daf1654',
        set: 'AKH',
        setName: 'Amonkhet',
        layout: 'normal',
        multiverseid: 426790,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426790&type=card',
        manaCost: '{B}',
        name: 'Dread Wanderer',
        text: 'Dread Wanderer enters the battlefield tapped.\n{2}{B}: Return Dread Wanderer from your graveyard to the battlefield. Activate this ability only any time you could cast a sorcery and only if you have one or fewer cards in hand.',
        type: 'Creature — Zombie Jackal',
        types: [
            'Creature',
        ],
        rarity: 'Rare',
    },
    {
        count: 4,
        artist: 'Karla Ortiz',
        cmc: 4,
        colors: [
            'Blue',
            'Black',
        ],
        flavor: '"These fiends are slightly less tolerable than you."\n"A sentiment that warms my heart, sister."',
        id: '6c42be3baf78654ebfd952aaae7f9af9b3f68698',
        set: 'EMN',
        setName: 'Eldritch Moon',
        layout: 'normal',
        multiverseid: 414488,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414488&type=card',
        manaCost: '{2}{U}{B}',
        name: 'Gisa and Geralf',
        text: 'When Gisa and Geralf enters the battlefield, put the top four cards of your library into your graveyard.\nDuring each of your turns, you may cast a Zombie creature card from your graveyard.',
        type: 'Legendary Creature — Human Wizard',
        types: [
            'Creature',
        ],
        supertypes: [
            'Legendary',
        ],
        rarity: 'Mythic Rare',
    },
    {
        count: 4,
        artist: 'Lake Hurwitz',
        cmc: 4,
        colors: [
            'Black',
        ],
        id: 'dd9d4e1ca4dc869693ee6474c318828349f94d0e',
        set: 'EMN',
        setName: 'Eldritch Moon',
        layout: 'normal',
        multiverseid: 414387,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414387&type=card',
        manaCost: '{3}{B}',
        name: 'Haunted Dead',
        text: 'When Haunted Dead enters the battlefield, create a 1/1 white Spirit creature token with flying.\n{1}{B}, Discard two cards: Return Haunted Dead from your graveyard to the battlefield tapped.',
        type: 'Creature — Zombie',
        types: [
            'Creature',
        ],
        rarity: 'Uncommon',
    },
    {
        count: 4,
        artist: 'Kieran Yanner',
        cmc: 5,
        colors: [
            'Black',
        ],
        flavor: '"There are so many of them. It seems they\'ve just been waiting for someone to serve."',
        id: 'e374f7dc27c2f0239cc2d984185ec0120974d155',
        set: 'AKH',
        setName: 'Amonkhet',
        layout: 'normal',
        multiverseid: 426800,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426800&type=card',
        manaCost: '{3}{B}{B}',
        name: 'Liliana\'s Mastery',
        text: 'Zombies you control get +1/+1.\nWhen Liliana\'s Mastery enters the battlefield, create two 2/2 black Zombie creature tokens.',
        type: 'Enchantment',
        types: [
            'Enchantment',
        ],
        rarity: 'Rare',
    },
    {
        count: 4,
        artist: 'Grzegorz Rutkowski',
        cmc: 3,
        colors: [
            'Black',
        ],
        flavor: 'The Curse of Wandering leaves only hatred.',
        id: '29d59026393a90d5d8fa6ad25ae01ec11c3bf67b',
        set: 'AKH',
        setName: 'Amonkhet',
        layout: 'normal',
        multiverseid: 426801,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426801&type=card',
        manaCost: '{2}{B}',
        name: 'Lord of the Accursed',
        text: 'Other Zombies you control get +1/+1.\n{1}{B}, {T}: All Zombies gain menace until end of turn.',
        type: 'Creature — Zombie',
        types: [
            'Creature',
        ],
        rarity: 'Uncommon',
    },
    {
        count: 4,
        artist: 'Karl Kopinski',
        cmc: 3,
        colors: [
            'Blue',
            'Black',
        ],
        flavor: '"Ludevic\'s laboratory is a veritable wonderland. I have never felt so inspired."\n—Stitcher Geralf',
        id: '20c4c4ef59890c50426bef757852578e9922572b',
        set: 'SOI',
        setName: 'Shadows over Innistrad',
        layout: 'normal',
        multiverseid: 410014,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410014&type=card',
        manaCost: '{1}{U}{B}',
        name: 'Prized Amalgam',
        text: 'Whenever a creature enters the battlefield, if it entered from your graveyard or you cast it from your graveyard, return Prized Amalgam from your graveyard to the battlefield tapped at the beginning of the next end step.',
        type: 'Creature — Zombie',
        types: [
            'Creature',
        ],
        rarity: 'Rare',
    },
    {
        count: 2,
        artist: 'Seb McKinnon',
        cmc: 3,
        colors: [
            'Black',
        ],
        flavor: 'Forever restless. Forever growing in number.',
        id: '01ac7ad4714df46a507f40f339497020ec2f437d',
        set: 'AKH',
        setName: 'Amonkhet',
        layout: 'normal',
        multiverseid: 426817,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426817&type=card',
        manaCost: '{2}{B}',
        name: 'Wander in Death',
        text: 'Return up to two target creature cards from your graveyard to your hand.\nCycling {2} ({2}, Discard this card: Draw a card.)',
        type: 'Sorcery',
        types: [
            'Sorcery',
        ],
        rarity: 'Common',
    },
    {
        count: 2,
        artist: 'Cynthia Sheppard',
        cmc: 1,
        colors: [
            'Black',
        ],
        flavor: 'Countless ghouls surged through Thraben\'s streets, and with them came the city\'s salvation.',
        id: '997b58ca5e82dbaa764f961d53c6260718f62410',
        set: 'EMN',
        setName: 'Eldritch Moon',
        layout: 'normal',
        multiverseid: 414382,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414382&type=card',
        manaCost: '{X}{X}{B}',
        name: 'Dark Salvation',
        text: 'Target player creates X 2/2 black Zombie creature tokens, then up to one target creature gets -1/-1 until end of turn for each Zombie that player controls.',
        type: 'Sorcery',
        types: [
            'Sorcery',
        ],
        rarity: 'Rare',
    },
    {
        count: 2,
        artist: 'Jeff Simpson',
        cmc: 2,
        colors: [
            'Black',
        ],
        flavor: 'So long as death follows life, the supply lines of the Sultai will never be cut.',
        id: 'a1dfe077b0acd2d756f1b9337bb299ebf4f7be46',
        set: 'FRF',
        setName: 'Fate Reforged',
        layout: 'normal',
        multiverseid: 391847,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=391847&type=card',
        manaCost: '{1}{B}',
        name: 'Grave Strength',
        text: 'Choose target creature. Put the top three cards of your library into your graveyard, then put a +1/+1 counter on that creature for each creature card in your graveyard.',
        type: 'Sorcery',
        types: [
            'Sorcery',
        ],
        rarity: 'Uncommon',
    },
    {
        artist: 'John Avon',
        cmc: 0,
        count: 14,
        id: '08fcc42f0ea8e0a231182e104eb634140ef1b5f2',
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73973&type=card',
        name: 'Swamp',
        rarity: 'Basic Land',
        type: 'Basic Land — Swamp',
        types: [
            'Land',
        ],
    },
    {
        artist: 'John Avon',
        cmc: 0,
        count: 10,
        id: '13cd771cf188b5da42c410e8fc021a2cebd8f800',
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73951&type=card',
        name: 'Island',
        rarity: 'Basic Land',
        type: 'Basic Land — Island',
        types: [
            'Land',
        ],
    },
];

const deck = {
    id: 'deck15088528708852',
    headliner: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414381&type=card',
    name: 'Gisa and Geralf',
    cardCount: 60,
    analytics: {
        colorComposition: {
            black: 36,
            blue: 8,
        },
        cardRarity: {
            rare: 18,
            'mythic rare': 4,
            uncommon: 12,
            common: 2,
            'basic land': 24,
        },
        manaCurve: {
            '0': 24,
            '1': 10,
            '2': 2,
            '3': 10,
            '4': 10,
            '5': 4,
        },
        deckComposition: {
            creature: 24,
            enchantment: 4,
            sorcery: 8,
            land: 24,
        },
    },
    cards: {
        '6c6e9285abab44b8bba938d4b2ef65a81b4f09bf': 4,
        '1c9337a6ba1d0ca54fb5f801ea7aeb681daf1654': 4,
        '6c42be3baf78654ebfd952aaae7f9af9b3f68698': 4,
        'dd9d4e1ca4dc869693ee6474c318828349f94d0e': 4,
        'e374f7dc27c2f0239cc2d984185ec0120974d155': 4,
        '29d59026393a90d5d8fa6ad25ae01ec11c3bf67b': 4,
        '20c4c4ef59890c50426bef757852578e9922572b': 4,
        '01ac7ad4714df46a507f40f339497020ec2f437d': 2,
        '997b58ca5e82dbaa764f961d53c6260718f62410': 2,
        'a1dfe077b0acd2d756f1b9337bb299ebf4f7be46': 2,
        '8ef3a8ee3a9951ff790b3f798db73f476ca32d2d': 2,
        '08fcc42f0ea8e0a231182e104eb634140ef1b5f2': 14,
        '13cd771cf188b5da42c410e8fc021a2cebd8f800': 10,
    },
};
/* eslint-enable */

describe('DECK/BUILD', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('Get card info from Store', () => {
        it('All cards in store', () => {
            const inputDeckList =
                '4 Cryptbreaker\n' +
                '4 Dread Wanderer\n' +
                '4 Gisa and Geralf\n' +
                '4 Haunted Dead\n' +
                '4 Lord of the Accursed\n' +
                '4 Prized Amalgam\n' +
                '4 Liliana\'s Mastery\n' +
                '2 Wander in Death\n' +
                '2 Dark Salvation\n' +
                '2 Grave Strength\n' +
                '2 Gisa\'s Bidding\n' +
                '10 Island\n' +
                '14 Swamp';
            const store = mockStore({
                data: {
                    cards,
                    decks: [],
                },
            });
            const decklist = mtgparser(inputDeckList, 'mtgo');
            const cardResults = getFullCardInfo(decklist.cards, store.getState().data.cards);
            assert.deepEqual(cardResults.notFound, []);
        });

        it('Some cards missing in store', () => {
            const inputDeckList =
                '4 Cryptbreaker\n' +
                '4 Dread Wanderer\n' +
                '4 Gisa and Geralf\n' +
                '4 Haunted Dead\n' +
                '4 Lord of the Accursed\n' +
                '4 Prized Amalgam\n' +
                '4 Liliana\'s Mastery\n' +
                '4 Dark Salvation\n' +
                '4 Gisa\'s Bidding\n' +
                '10 Island\n' +
                '14 Swamp';

            const expected = [
                {
                    count: 2,
                    artist: 'Cynthia Sheppard',
                    cmc: 1,
                    colors: [ 'Black' ],
                    flavor: 'Countless ghouls surged through Thraben\'s streets, and with them came the city\'s salvation.',
                    id: '997b58ca5e82dbaa764f961d53c6260718f62410',
                    set: 'EMN',
                    setName: 'Eldritch Moon',
                    layout: 'normal',
                    multiverseid: 414382,
                    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414382&type=card',
                    manaCost: '{X}{X}{B}',
                    name: 'Dark Salvation',
                    text: 'Target player creates X 2/2 black Zombie creature tokens, then up to one target creature gets -1/-1 until end of turn for each Zombie that player controls.',
                    type: 'Sorcery',
                    types: [ 'Sorcery' ],
                    rarity: 'Rare',
                    missingCount: 2,
                },
                {
                    count: 2,
                    artist: 'Jason Felix',
                    cmc: 4,
                    colors: [
                        'Black',
                    ],
                    flavor: '"Soft dirt makes for light work."',
                    id: '8ef3a8ee3a9951ff790b3f798db73f476ca32d2d',
                    set: 'SOI',
                    setName: 'Shadows over Innistrad',
                    layout: 'normal',
                    multiverseid: 409862,
                    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409862&type=card',
                    manaCost: '{2}{B}{B}',
                    name: 'Gisa\'s Bidding',
                    text: 'Create two 2/2 black Zombie creature tokens.\nMadness {2}{B} (If you discard this card, discard it into exile. When you do, cast it for its madness cost or put it into your graveyard.)',
                    type: 'Sorcery',
                    types: [
                        'Sorcery',
                    ],
                    rarity: 'Uncommon',
                    missingCount: 2,
                },
            ];
            const store = mockStore({
                data: {
                    cards,
                    decks: [],
                },
            });
            const decklist = mtgparser(inputDeckList, 'mtgo');
            const cardResults = getFullCardInfo(decklist.cards, store.getState().data.cards);
            assert.deepEqual(cardResults.notFound, expected);
        });
    });

    it('Create deck from input deck list', () => {
        const expected = {
            id: 'deck15089519647361',
            headliner: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414381&type=card',
            name: 'Simple Deck',
            cardCount: 60,
            analytics: {
                colorComposition: { black: 36, blue: 8 },
                cardRarity: {
                    rare: 18,
                    'mythic rare': 4,
                    uncommon: 12,
                    common: 2,
                    'basic land': 24,
                },
                manaCurve: { '0': 24, '1': 10, '2': 2, '3': 10, '4': 10, '5': 4 },
                deckComposition: { creature: 24, enchantment: 4, sorcery: 8, land: 24 },
            },
            cards: [
                { '6c6e9285abab44b8bba938d4b2ef65a81b4f09bf': 4 },
                { '1c9337a6ba1d0ca54fb5f801ea7aeb681daf1654': 4 },
                { '6c42be3baf78654ebfd952aaae7f9af9b3f68698': 4 },
                { 'dd9d4e1ca4dc869693ee6474c318828349f94d0e': 4 },
                { '29d59026393a90d5d8fa6ad25ae01ec11c3bf67b': 4 },
                { '20c4c4ef59890c50426bef757852578e9922572b': 4 },
                { 'e374f7dc27c2f0239cc2d984185ec0120974d155': 4 },
                { '01ac7ad4714df46a507f40f339497020ec2f437d': 2 },
                { '997b58ca5e82dbaa764f961d53c6260718f62410': 2 },
                { 'a1dfe077b0acd2d756f1b9337bb299ebf4f7be46': 2 },
                { '8ef3a8ee3a9951ff790b3f798db73f476ca32d2d': 2 },
                { '13cd771cf188b5da42c410e8fc021a2cebd8f800': 10 },
                { '08fcc42f0ea8e0a231182e104eb634140ef1b5f2': 14 },
            ],
        };
        const inputDeckList =
            '4 Cryptbreaker\n' +
            '4 Dread Wanderer\n' +
            '4 Gisa and Geralf\n' +
            '4 Haunted Dead\n' +
            '4 Lord of the Accursed\n' +
            '4 Prized Amalgam\n' +
            '4 Liliana\'s Mastery\n' +
            '2 Wander in Death\n' +
            '2 Dark Salvation\n' +
            '2 Grave Strength\n' +
            '2 Gisa\'s Bidding\n' +
            '10 Island\n' +
            '14 Swamp';
        const store = mockStore({
            data: {
                cards,
                decks: [],
            },
        });
        const decklist = mtgparser(inputDeckList, 'mtgo');
        const cardResults = getFullCardInfo(decklist.cards, store.getState().data.cards);
        const builtDeck = buildDeck('deck15089519647361', 'Simple Deck', cardResults.found);
        assert.deepEqual(builtDeck, expected);
    });

});
