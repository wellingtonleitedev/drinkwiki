import { call, put } from 'redux-saga/effects';
import DrinksActions from '../ducks/drinks';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export default function* fetchDrinks({ category }) {
  try {
    const { data } = yield call(api.get, `filter.php?c=${category}`);
    yield put(DrinksActions.drinksSuccess(data.drinks, category));

    navigate('Drinks');
  } catch (err) {
    yield put(DrinksActions.requestFailure());
  }
}
