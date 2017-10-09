import orm from '../reducers/entities/index';

export function getDefaultState() {
    return orm.getEmptyState();
}
