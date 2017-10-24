import { expect } from 'chai';
import {
    dataDeckRequestStarted,
    dataDeckRequestSuccess,
    dataDeckRequestFailed,
    dataDeckCreate,
    dataDeckUpdate,
    dataDeckDelete,
    dataDeckGetList,
    dataCardRequestSuccess,
    dataCardRequestStarted,
    dataCardRequestFailed,
    dataCardCreate,
    dataCardUpdate,
    dataCardDelete,
    dataCardGetList,
} from '../../../actions/data/data.types';
import reducers from './../data.reducer';

/* eslint-disable */
const cards = [
    {
        count: 2,
        artist: 'Jason Felix',
        cmc: 4,
        colors: [
            'Black'
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
            'Sorcery'
        ],
        rarity: 'Uncommon'
    },
    {
        count: 4,
        artist: 'Darek Zabrocki',
        cmc: 1,
        colors: [
            'Black'
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
            'Creature'
        ],
        rarity: 'Rare'
    },
    {
        count: 4,
        artist: 'Josh Hass',
        cmc: 1,
        colors: [
            'Black'
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
            'Creature'
        ],
        rarity: 'Rare'
    },
    {
        count: 4,
        artist: 'Karla Ortiz',
        cmc: 4,
        colors: [
            'Blue',
            'Black'
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
            'Creature'
        ],
        supertypes: [
            'Legendary'
        ],
        rarity: 'Mythic Rare'
    },
    {
        count: 4,
        artist: 'Lake Hurwitz',
        cmc: 4,
        colors: [
            'Black'
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
            'Creature'
        ],
        rarity: 'Uncommon'
    },
    {
        count: 4,
        artist: 'Kieran Yanner',
        cmc: 5,
        colors: [
            'Black'
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
            'Enchantment'
        ],
        rarity: 'Rare'
    },
    {
        count: 4,
        artist: 'Grzegorz Rutkowski',
        cmc: 3,
        colors: [
            'Black'
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
            'Creature'
        ],
        rarity: 'Uncommon'
    },
    {
        count: 4,
        artist: 'Karl Kopinski',
        cmc: 3,
        colors: [
            'Blue',
            'Black'
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
            'Creature'
        ],
        rarity: 'Rare'
    },
    {
        count: 2,
        artist: 'Seb McKinnon',
        cmc: 3,
        colors: [
            'Black'
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
            'Sorcery'
        ],
        rarity: 'Common'
    },
    {
        count: 2,
        artist: 'Cynthia Sheppard',
        cmc: 1,
        colors: [
            'Black'
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
            'Sorcery'
        ],
        rarity: 'Rare'
    },
    {
        count: 2,
        artist: 'Jeff Simpson',
        cmc: 2,
        colors: [
            'Black'
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
            'Sorcery'
        ],
        rarity: 'Uncommon'
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
            'Land'
        ]
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
            'Land'
        ]
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
            blue: 8
        },
        cardRarity: {
            rare: 18,
            'mythic rare': 4,
            uncommon: 12,
            common: 2,
            'basic land': 24
        },
        manaCurve: {
            '0': 24,
            '1': 10,
            '2': 2,
            '3': 10,
            '4': 10,
            '5': 4
        },
        deckComposition: {
            creature: 24,
            enchantment: 4,
            sorcery: 8,
            land: 24
        }
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
        '13cd771cf188b5da42c410e8fc021a2cebd8f800': 10
    },
};
/* eslint-enable */

describe('Reducer/Data', () => {
    let appState;

    beforeEach(() => {
        appState = {
            cards: {
                loading: false,
                error: false,
                items: [],
            },
            decks: {
                loading: false,
                error: false,
                items: [],
            },
        };
    });

    it('Deck/Request/Started ', () => {
        const expected = {
            loading: true,
            error: false,
            items: [],
        };

        const nextState = reducers(appState, dataDeckRequestStarted());

        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Request/Success ', () => {
        const expected = {
            loading: false,
            error: false,
            items: [],
        };

        const nextState = reducers(appState, dataDeckRequestSuccess());

        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Request/Failed ', () => {
        const expected = {
            loading: false,
            error: true,
            items: [],
        };

        const nextState = reducers(appState, dataDeckRequestFailed());

        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Create', () => {
        const expected = {
            loading: false,
            error: false,
            items: [deck],
        };

        const nextState = reducers(appState, dataDeckCreate(deck));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Create deck is already exist', () => {
        const expected = {
            loading: false,
            error: false,
            items: [deck],
        };

        const stateWithDeck = reducers(appState, dataDeckCreate(deck));
        const nextState = reducers(stateWithDeck, dataDeckCreate(deck));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Update', () => {
        const diff = {
            headliner: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426790&type=card',
            name: 'Dread Wanderer',
        };
        const expected = {
            loading: false,
            error: false,
            items: [{
                ...deck,
                ...diff,
            }],
        };
        const stateWithDeck = reducers(appState, dataDeckCreate(deck));
        const nextState = reducers(stateWithDeck, dataDeckUpdate(deck.id, diff));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Update deck does not exist', () => {
        const diff = {
            headliner: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426790&type=card',
            name: 'Dread Wanderer',
        };
        const expected = {
            loading: false,
            error: false,
            items: [],
        };
        const nextState = reducers(appState, dataDeckUpdate(deck.id, diff));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Delete', () => {
        const expected = {
            loading: false,
            error: false,
            items: [
                {
                    ...deck,
                    id: 'deck15088528708852'
                }
            ],
        };
        const stateWithDecks = reducers(appState, dataDeckGetList([
            {...deck, id: 'deck15088528708852'},
            {...deck, id: 'deck15088528708851'}
        ]));
        const nextState = reducers(stateWithDecks, dataDeckDelete('deck15088528708851'));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Delete deck does not exist', () => {
        const expected = {
            loading: false,
            error: false,
            items: [],
        };
        const nextState = reducers(appState, dataDeckDelete('deck15088528708851'));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Deck/Get/List', () => {
        const decks = [
            {
                ...deck,
                id: 'deck15088528708852'
            },
            {
                ...deck,
                id: 'deck15088528708851'
            }
        ];
        const expected = {
            loading: false,
            error: false,
            items: decks,
        };

        const nextState = reducers(appState, dataDeckGetList(decks));
        expect(nextState.decks).to.deep.equal(expected);
    });

    it('Card/Request/Started ', () => {
        const expected = {
            loading: true,
            error: false,
            items: [],
        };

        const nextState = reducers(appState, dataCardRequestStarted());
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Request/Success ', () => {
        const expected = {
            loading: false,
            error: false,
            items: [],
        };

        const nextState = reducers(appState, dataCardRequestSuccess());
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Request/Failed ', () => {
        const expected = {
            loading: false,
            error: true,
            items: [],
        };

        const nextState = reducers(appState, dataCardRequestFailed());
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Create', () => {
        const expected = {
            loading: false,
            error: false,
            items: [cards[0]],
        };

        const nextState = reducers(appState, dataCardCreate(cards[0]));
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Create card is already exist', () => {
        const expected = {
            loading: false,
            error: false,
            items: [
                {
                    ...cards[0],
                    count: 4
                }
            ],
        };
        appState = {
            cards: {
                loading: false,
                error: false,
                items: [{...cards[0]}],
            },
            decks: {
                loading: false,
                error: false,
                items: [],
            },
        };

        const nextState = reducers(appState, dataCardCreate(cards[0]));
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Update', () => {
        const diff = {
            imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426790&type=card',
        };
        const expected = {
            loading: false,
            error: false,
            items: [{
                ...cards[0],
                ...diff,
            }],
        };
        const stateWithCard = reducers(appState, dataCardCreate(cards[0]));
        const nextState = reducers(stateWithCard, dataCardUpdate(cards[0].id, diff));
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Update card does not exist', () => {
        const diff = {
            headliner: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426790&type=card',
            name: 'Dread Wanderer',
        };
        const expected = {
            loading: false,
            error: false,
            items: [],
        };
        const nextState = reducers(appState, dataCardUpdate(deck.id, diff));
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Delete', () => {
        const expected = {
            loading: false,
            error: false,
            items: [
                {...cards[0]},
                {...cards[1]}
            ],
        };
        appState = {
            cards: {
                loading: false,
                error: false,
                items: [
                    {...cards[0]},
                    {...cards[1]},
                    {...cards[2]},
                ],
            },
            decks: {
                loading: false,
                error: false,
                items: [],
            },
        };
        const nextState = reducers(appState, dataCardDelete(cards[2].id));
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Delete card does not exist', () => {
        const expected = {
            loading: false,
            error: false,
            items: [],
        };
        const nextState = reducers(appState, dataCardDelete('deck15088528708851'));
        expect(nextState.cards).to.deep.equal(expected);
    });

    it('Card/Get/List', () => {
        const expected = {
            loading: false,
            error: false,
            items: cards,
        };

        const nextState = reducers(appState, dataCardGetList(cards));
        expect(nextState.cards).to.deep.equal(expected);
    });
});
