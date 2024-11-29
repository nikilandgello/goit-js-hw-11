import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const inputSearch = document.querySelector('[name="search"]');
const gallery = document.querySelector('.gallery');
const spanLoader = document.createElement('span');


form.addEventListener('input', savetoLocalStorage);
form.addEventListener('submit', searchImages);

//localStorage
const localKey = 'input-name-image';
const localData = JSON.parse(localStorage.getItem(localKey));

const formData = {
    search: '',
};

if (localData) {
    inputSearch.value = localData.search;
    formData.search = localData.search;
};

function savetoLocalStorage(e) {
    formData.search = e.target.value.trim();

    localStorage.setItem(localKey, JSON.stringify(formData));
};

//get images
function searchImages(e) {
    e.preventDefault();
    loader();

    const input = e.target.elements.search;

    if (!input.value.trim()) {
        showMessage(IZI_MESSEGES.info.type, IZI_MESSEGES.info.message);
        gallery.innerHTML = '';
        return;
    } 
    
    getImages(input.value.trim())
        .then((data) => {
            if (!data.hits.length) {
                showMessage(IZI_MESSEGES.warning.type, IZI_MESSEGES.warning.message);
                gallery.innerHTML = '';
                return;
            }

            showMessage(IZI_MESSEGES.success.type, IZI_MESSEGES.success.message);
            
            renderGallery(data.hits, gallery)
            return;
        })
        .finally(() => {
            localStorage.removeItem(localKey);
            formData.search = '';

            form.reset();
            return;
        });
    
    return;
};

//loader
function loader() {
    spanLoader.classList.add('loader');
    gallery.append(spanLoader);
}

// iziToast message
const IZI_MESSEGES = {
    success: {
        type: 'success',
        message: 'Request completed successfully'
    },
    info: {
        type: 'info',
        message: 'The field must be filled',
    },
    warning: {
        type: 'warning',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    },
    error: {
        type: 'error',
        message: 'Something went wrong. Please try again later!',
    },
};

function showMessage(type, message) {
    const bgColor = {
        success: 'rgb(0, 255, 128, 0.7)',
        info: 'rgb(76, 153, 255, 0.7)',
        warning: 'rgb(255, 193, 7, 0.7)',
        error: 'rgb(255, 76, 76, 0.7)',
    };

    iziToast.show({
        message,
        messageColor: 'white',
        position: "topRight",
        backgroundColor: bgColor[type],
    });
};

export { IZI_MESSEGES, showMessage };