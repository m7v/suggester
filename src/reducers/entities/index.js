import { ORM } from 'redux-orm';
import Deck from './Deck';
import Card from './Card';
import CardSet from './CardSet';

// Create a Schema instance, and hook up the Post and Comment models
const orm = new ORM();
orm.register(Deck, Card, CardSet);

export default orm;
