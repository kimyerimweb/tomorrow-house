const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const galleryCarouselMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  gutter: 4,
  edgePadding: 16,
  loop: false,
  controls: false,
  controlsContainer: '.user-gallery-controls',
  mouseDrag: true,
  arrowKeys: true,
  preventScrollOnTouch: true,
})

const galleryCarouselDesktop = tns({
  container: '.user-gallery.is-desk .slider-list',
  navContainer: '.user-gallery.is-desk .thumbnail-list',
  navAsThumbnails: true,
  gutter: 6,
  edgePadding: 75,
  loop: false,
  controls: true,
  controlsContainer: '.user-gallery-controls',
  mouseDrag: true,
  arrowKeys: true,
  preventScrollOnTouch: true,
})
