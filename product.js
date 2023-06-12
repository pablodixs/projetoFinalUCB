const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

const pagina = data.find((item) => item.id === id)

if (pagina) {
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  document.getElementById('product-name').textContent = pagina.productName
  document.getElementById('size').textContent = pagina.size
  document.getElementById('owner').textContent = pagina.owner
  document.getElementById('description').textContent = pagina.description
  document.getElementById('product-image').setAttribute('src', pagina.imageUrl)
  document.getElementById('default-price').textContent = `de ${price.format(
    pagina.defaultPrice
  )}`
  document.getElementById('final-price').textContent = `${price.format(
    pagina.discountPrice
  )}`
} else {
  document.getElementById('product-name').textContent = 'Página não encontrada'
  document.getElementById('description').textContent =
    'Desculpe, a página solicitada não foi encontrada.'
}