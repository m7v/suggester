import { ORM } from 'redux-orm';
import Deck from 'src/reducers/entities/Deck';
import Card from 'src/reducers/entities/Card';

// Create a Schema instance, and hook up the Post and Comment models
const orm = new ORM();
orm.register(Deck, Card);

export default orm;
