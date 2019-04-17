import { SET_ITEMS, DELETE_ITEM } from "./actionTypes";
import api from '../api';

const setItems = (items) => ({
    type: SET_ITEMS,
    items,
});

export const fetchItems = () => {
    return dispatch => {
		api.items.fetchAll().then(res => dispatch(setItems(res)))
		    .catch(err => console.log(err));
	}
};
export const createItem = (item) => {
    return dispatch => {
		api.items.create(item).then(res => dispatch(fetchItems()))
		    .catch(err => console.log(err));
	}
};

export const deleteItem = id => {
    return dispatch => {
        api.items.delete(id).then(res => dispatch(fetchItems()))
        .catch(err => console.log(err));
    }
}