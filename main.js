


const openReadMore = () => {
const moreText = document.querySelector('.js-about-me-more')


if (moreText.style.display == "none") {
    moreText.style.display = "block";
  } else {
    moreText.style.display = "none";
  }
}


const readMore = document.querySelector('.js-read-more');
readMore.addEventListener('click', openReadMore);