import { IZI_MESSEGES, showMessage } from '../main.js';
const loader = document.querySelector('.loader');

const KEY_API = '47345355-bb5adb35ee772e90f4db69f75';

export function getImages(qValue) {

    const params = new URLSearchParams({
        key: KEY_API,
        q: qValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    
    return fetch(`https://pixabay.com/api/?${params}`)
        .then((response) => {
            if (!response.ok) {
                showMessage(IZI_MESSEGES.error.type, IZI_MESSEGES.error.message);
                throw new Error('Failed to fetch data');
            };

            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error.message);
            loader.style.display = 'none'
            return;
        });
};