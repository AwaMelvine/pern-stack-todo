import axios from 'axios';

export default {
    items: {
        create: item => axios.post('/api/items', item).then(res => res.data.item),
        delete: id => axios.delete(`/api/items/${id}`).then(res => res.data.item),
        fetchAll: () => axios.get('/api/items').then(res => res.data.items),
    },
};