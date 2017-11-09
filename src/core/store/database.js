import orm from '../../core/reducers/entities/index';

export function getDefaultState() {
    return orm.getEmptyState();
}
