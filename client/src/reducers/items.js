import { SET_ITEMS, DELETE_ITEM } from '../actions/actionTypes';

export default function(state = [], action) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    switch (action.type) {
        case SET_ITEMS:
            return action.items;
    
        case DELETE_ITEM:
            const newItems = items.filter(item => item.id !== action.id);
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
    
        default:
            return state;
    }
}