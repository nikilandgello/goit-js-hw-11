import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createMarkup(arr) {
    return arr.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => {
        return `<li class = 'list-item'>
            <a class='gallery-link' href='${largeImageURL}'>
                <img
                    class = 'gallery-image'
                    src = '${webformatURL}'
                    alt =  '${tags}'>
            </a>
            <ul class = 'description-list'>
                <li class = 'description-item'>
                    <h3>Likes</h3>
                    <p>${likes}</p>
                </li>
                <li class = 'description-item'>
                    <h3>Views</h3>
                    <p>${views}</p>
                </li>
                <li class = 'description-item'>
                    <h3>Comments</h3>
                    <p>${comments}</p>
                </li>
                <li class = 'description-item'>
                    <h3>Downloads</h3>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>`
        }).join('')
};

export function renderGallery(data, tagToInsert) {
    tagToInsert.innerHTML = createMarkup(data);

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    lightbox.refresh();
};