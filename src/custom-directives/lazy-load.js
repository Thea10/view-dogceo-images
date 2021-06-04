export default {
  inserted: (element) => {
    function loadImage() {
      const imageItem = element.firstElementChild;
      imageItem.addEventListener("load", () => {
        setTimeout(() => {
          element.classList.add("loaded");
        }, 50);
      });

      imageItem.addEventListener("error", () => {
        imageItem.src = imageItem.dataset.errimage;
        return;
      });
      imageItem.src = imageItem.dataset.url;
    }

    function handleIntersect(imageEntries, observer) {
      imageEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(element);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0",
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(element);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
