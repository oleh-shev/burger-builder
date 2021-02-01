import axios from "../../axios-orders";
import * as actions from "../actions/index";
import {put} from "redux-saga/effects";

export function* initIngredientsSaga() {
    const response = yield axios.get('/ingredients.json');
    try {
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed());
    }
}