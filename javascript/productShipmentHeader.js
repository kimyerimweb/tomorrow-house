const productShipmentHeaderButton = document.querySelector(
  '.product-shipment .product-section-header .icon-button'
)

function openProductShipment() {
  this.parentNode.parentNode.classList.add('is-open')
}
productShipmentHeaderButton.addEventListener('click', openProductShipment)
