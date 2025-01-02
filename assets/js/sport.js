import { initializeGallery } from '../../assets/js/loadImages.js';

const images = {
    '25 Manna' : ['241012-25_manna-1', '241012-25_manna-2', '241012-25_manna-3', '241012-25_manna-4', '241012-25_manna-5', '241012-25_manna-6', '241012-25_manna-7', '241012-25_manna-8', '241012-25_manna-9', '241012-25_manna-10', '241012-25_manna-11', '241012-25_manna-12', '241012-25_manna-13', '241012-25_manna-14', '241012-25_manna-15', '241012-25_manna-16', '241012-25_manna-17', '241012-25_manna-18', '241012-25_manna-19', '241012-25_manna-20', '241012-25_manna-21', '241012-25_manna-22', '241012-25_manna-23', '241012-25_manna-24', '241012-25_manna-25', '241012-25_manna-26', '241012-25_manna-27', '241012-25_manna-28', '241012-25_manna-29', '241012-25_manna-30', '241012-25_manna-31', '241012-25_manna-32', '241012-25_manna-33', '241012-25_manna-34', '241012-25_manna-35', '241012-25_manna-36', '241012-25_manna-37', '241012-25_manna-38', '241012-25_manna-39', '241012-25_manna-40', '241012-25_manna-41', '241012-25_manna-42', '241012-25_manna-43', '241012-25_manna-44', '241012-25_manna-45', '241012-25_manna-46', '241012-25_manna-47', '241012-25_manna-48', '241012-25_manna-49', '241012-25_manna-50', '241012-25_manna-51', '241012-25_manna-52', '241012-25_manna-53', '241012-25_manna-54', '241012-25_manna-55', '241012-25_manna-56', '241012-25_manna-57', '241012-25_manna-58', '241012-25_manna-59', '241012-25_manna-60', '241012-25_manna-61', '241012-25_manna-62', '241012-25_manna-63', '241012-25_manna-64', '241012-25_manna-65', '241012-25_manna-66'],
    '25 Manna Medeln' : ['241013-25_manna_medeln-1', '241013-25_manna_medeln-2', '241013-25_manna_medeln-3', '241013-25_manna_medeln-4', '241013-25_manna_medeln-5', '241013-25_manna_medeln-6', '241013-25_manna_medeln-7', '241013-25_manna_medeln-8', '241013-25_manna_medeln-9', '241013-25_manna_medeln-10', '241013-25_manna_medeln-11', '241013-25_manna_medeln-12', '241013-25_manna_medeln-13', '241013-25_manna_medeln-14', '241013-25_manna_medeln-15', '241013-25_manna_medeln-16', '241013-25_manna_medeln-17', '241013-25_manna_medeln-18', '241013-25_manna_medeln-19', '241013-25_manna_medeln-20', '241013-25_manna_medeln-21', '241013-25_manna_medeln-22', '241013-25_manna_medeln-23', '241013-25_manna_medeln-24', '241013-25_manna_medeln-25', '241013-25_manna_medeln-26', '241013-25_manna_medeln-27', '241013-25_manna_medeln-28', '241013-25_manna_medeln-29', '241013-25_manna_medeln-30', '241013-25_manna_medeln-31', '241013-25_manna_medeln-32', '241013-25_manna_medeln-33', '241013-25_manna_medeln-34', '241013-25_manna_medeln-35', '241013-25_manna_medeln-36', '241013-25_manna_medeln-37', '241013-25_manna_medeln-38', '241013-25_manna_medeln-39'],
    'Helg utan Älg dag 1' : ['2411019-Helg_utan_Alg-1', '2411019-Helg_utan_Alg-2', '2411019-Helg_utan_Alg-3', '2411019-Helg_utan_Alg-4', '2411019-Helg_utan_Alg-5', '2411019-Helg_utan_Alg-6', '2411019-Helg_utan_Alg-7', '2411019-Helg_utan_Alg-8', '2411019-Helg_utan_Alg-9', '2411019-Helg_utan_Alg-10', '2411019-Helg_utan_Alg-11', '2411019-Helg_utan_Alg-12', '2411019-Helg_utan_Alg-13', '2411019-Helg_utan_Alg-14', '2411019-Helg_utan_Alg-15', '2411019-Helg_utan_Alg-16', '2411019-Helg_utan_Alg-17', '2411019-Helg_utan_Alg-18', '2411019-Helg_utan_Alg-19', '2411019-Helg_utan_Alg-20', '2411019-Helg_utan_Alg-21', '2411019-Helg_utan_Alg-22', '2411019-Helg_utan_Alg-23', '2411019-Helg_utan_Alg-24', '2411019-Helg_utan_Alg-25', '2411019-Helg_utan_Alg-26', '2411019-Helg_utan_Alg-27', '2411019-Helg_utan_Alg-28', '2411019-Helg_utan_Alg-29', '2411019-Helg_utan_Alg-30', '2411019-Helg_utan_Alg-31', '2411019-Helg_utan_Alg-32'],
    'Helg utan Älg dag 2' : ['2411020-Helg_utan_Alg-1', '2411020-Helg_utan_Alg-2', '2411020-Helg_utan_Alg-3', '2411020-Helg_utan_Alg-4', '2411020-Helg_utan_Alg-5', '2411020-Helg_utan_Alg-6', '2411020-Helg_utan_Alg-7', '2411020-Helg_utan_Alg-8', '2411020-Helg_utan_Alg-9', '2411020-Helg_utan_Alg-10', '2411020-Helg_utan_Alg-11', '2411020-Helg_utan_Alg-12', '2411020-Helg_utan_Alg-13', '2411020-Helg_utan_Alg-14', '2411020-Helg_utan_Alg-15', '2411020-Helg_utan_Alg-16', '2411020-Helg_utan_Alg-17', '2411020-Helg_utan_Alg-18', '2411020-Helg_utan_Alg-19', '2411020-Helg_utan_Alg-20', '2411020-Helg_utan_Alg-21', '2411020-Helg_utan_Alg-22', '2411020-Helg_utan_Alg-23', '2411020-Helg_utan_Alg-24', '2411020-Helg_utan_Alg-25', '2411020-Helg_utan_Alg-26', '2411020-Helg_utan_Alg-27', '2411020-Helg_utan_Alg-28', '2411020-Helg_utan_Alg-29', '2411020-Helg_utan_Alg-30', '2411020-Helg_utan_Alg-31', '2411020-Helg_utan_Alg-32', '2411020-Helg_utan_Alg-33', '2411020-Helg_utan_Alg-34', '2411020-Helg_utan_Alg-35', '2411020-Helg_utan_Alg-36', '2411020-Helg_utan_Alg-37', '2411020-Helg_utan_Alg-38', '2411020-Helg_utan_Alg-39', '2411020-Helg_utan_Alg-40', '2411020-Helg_utan_Alg-41', '2411020-Helg_utan_Alg-42', '2411020-Helg_utan_Alg-43', '2411020-Helg_utan_Alg-44', '2411020-Helg_utan_Alg-45', '2411020-Helg_utan_Alg-46', '2411020-Helg_utan_Alg-47', '2411020-Helg_utan_Alg-48', '2411020-Helg_utan_Alg-49']
    };

const filterBtnContainer = document.getElementById("filter-container");
const imageContainer = document.getElementById('image-container')

const filterBtnFunction = (span, event) => {
    let activeFilter = document.getElementById('active');
    activeFilter.removeAttribute('id');
    span.setAttribute('id', 'active')
    imageContainer.innerHTML = '';
    initializeGallery(images[event], 'media/sports'); 
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery(images[Object.keys(images)[0]], 'media/sports')

    let flag = 0
    Object.keys(images).forEach(event => {
        const span = document.createElement("span");
        span.textContent = event;
        span.classList.add('filter')
        if (flag == 0 ) {
            span.setAttribute('id', 'active')
            flag = 1
        }

        span.addEventListener("click", () => {
            filterBtnFunction(span, event)
        });
        
        filterBtnContainer.appendChild(span);
    });
});