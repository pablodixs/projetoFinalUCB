const perfumaria = [
  {
    id: 'carmed-fini-banana',
    productName: 'Hidratante Labial Carmed Fini Bananas Incolor Efeito Gloss',
    imageUrl: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lhf7wzr5vfoda6',
    size: ' 10g',
    defaultPrice: 25.9,
    discountPrice: 24.9,
    owner: 'Carmed',
    description:
      'Protetor labial com alto poder de hidratação. Cheirinho Fini Bananas. Incolor e possui efeito gloss. Com manteiga de cacau. Não testado em animais e sem parabenos e conservantes.',
  },
  {
    id: 'actine-gel',
    productName: 'Gel de Limpeza Darrow Actine Vitamina C',
    imageUrl:
      'https://epocacosmeticos.vteximg.com.br/arquivos/ids/492675/gel-de-limpeza-darroe-actine-vitamina-c-240g.jpg?v=637904044524500000',
    size: '240g',
    defaultPrice: 74.99,
    discountPrice: 50.9,
    owner: 'Darrow',
    description:
      'O Novo Actine Gel de Limpeza, aliado a poderosa Vitamina C, proporciona a mais profunda higienização facial das peles oleosas e acneicas. Sua fórmula inovadora possui uma combinação exclusiva de ativos dermatológicos antioleosidade e antiacne [Ácido salicílico 2% + Vitamina C + P-refinyl + Lactato de mentila] que agem profundamente na limpeza da pele, reduz a oleosidade imediatamente após o uso, combate acne e cravos e minimiza poros dilatados, além de clarear visivelmente as marcas de acne.',
  },
  {
    id: 'neutrogena',
    productName:
      'Loção intensiva Corporal Hidratante Neutrogena Norwegian Formula',
    imageUrl:
      'https://epocacosmeticos.vteximg.com.br/arquivos/ids/539785/hidratante-corporal-com-fragrancia-neutrogena-norwegian-formula--2---1-.jpg?v=638139889464330000',
    size: '200ml',
    defaultPrice: 69.99,
    discountPrice: 45.49,
    owner: 'Neutrogena',
    description:
      'Loção intensiva Corporal Hidratantecom fórmula não oleosa e de rápida absorção. Com glicerina e aveia prebiótica, hidrata profundamente formando uma camada protetora que repara a barreira cutânea e reequilibra a microbiota da pele. Promove hidratação imediata e prolongada por até 48 horas, deixando a pele macia, nutrida e protegida contra o ressecamento e agressores externos.',
  },  
  {
    id: 'mach3',
    productName:
      'Aparelho De Barbear Gillette Mach3 Acqua-Grip Sensitive',
    imageUrl:
      'https://drogariaspacheco.vteximg.com.br/arquivos/ids/855005-1000-1000/690821---Aparelho-De-Barbear-Gillette-Mach3-Acqua-Grip-Sensitive---2-Cargas-1.jpg?v=637889457836700000',
    size: '1 aparelo + 2 Cargas',
    defaultPrice: 26.99,
    discountPrice: 26.99,
    owner: 'Gillette',
    description:
      'O Aparelho De Barbear Gillette Mach3 Acqua-Grip Sensitive + 2 Cargas foi desenvolvido um barbear confortável e suave em peles delicadas. Conta com 3 lâminas mais afiadas, cabeça móvel, fita lubrificante e cabo antiderrapante, promovendo movimentos precisos e um barbear perfeito.',
  },
  {
    id: 'pampers',
    productName: 'Fralda Pampers Confort Sec Bag Giga M',
    imageUrl:
      'https://drogariaspacheco.vteximg.com.br/arquivos/ids/854191-500-500/613380---fralda-pampers-confort-sec-bag-giga-m-80-unidades.jpg?v=637889144928600000',
    size: '80 unidades',
    defaultPrice: 89.95,
    discountPrice: 89.95,
    owner: 'Pampers',
    description:
      'Aa fraldas descartáveis Pampers Confort Sec Bag Giga contam com três canais de absorção, barreiras antivazamento reforçadas e revestimento respirável oferecendo conforto proteção de até 12 horas para o bebê, evitando as temidas assaduras. O tamanho M veste crianças de 6 a 10 kg.',
  },
  {
    id: 'carmed-fini',
    productName: 'Hidratante labial Carmed Fini',
    imageUrl: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lhf1vhxs91y562',
    size: '10g',
    defaultPrice: 24.99,
    discountPrice: 24.99,
    owner: 'Cimed',
    description:
      'Protetor labial com alto poder de hidratação, cheirinho Fini Beijos. Possui cor rosa e efeito gloss e com manteiga de cacau. Não testado em animais e sem parabenos e conservantes',
  },
  {
    id: 'cerave-hidratante',
    productName: 'Loção Hidratante CeraVe',
    imageUrl:
      'https://m.media-amazon.com/images/I/61vyW3Dl-7L._AC_UF1000,1000_QL80_.jpg',
    size: '473ml',
    defaultPrice: 87.99,
    discountPrice: 87.99,
    owner: 'CeraVe',
    description:
      'Desenvolvido com dermatologistas, CeraVe Loção Hidratante hidrata e ajuda a restaurar a barreira protetora da pele. Esta fórmula leve e não oleosa contém as 3 ceramidas essenciais para a pele e ácido hialurônico, promovendo hidratação o dia todo através de sua exclusiva tecnologia MVE, de liberação prolongada de ativos hidratantes.',
  },
  {
    id: 'curaprox',
    productName: 'Kit Curaprox Azul Extramacia',
    imageUrl: 'https://www.loja.curaprox.com.br/uploads/1664797740.jpeg',
    size: '6 unidades',
    defaultPrice: 245.9,
    discountPrice: 214.99,
    owner: 'Curaprox',
    description:
      'Desenvolvida para uma higiene oral totalmente atraumática. Com 5460 filamentos ativos ultrasoft possui ação seletiva sobre a placa bacteriana não provocando retração gengival em longo prazo. Os filamentos das cerdas das escovas são feitos de CUREN e mesmo molhados mantêm a sua superior firmeza original. Isto permite o uso de cerdas muito mais finas que possibilitam uma escovação profunda e com maciez. Com a sua cabeça pequena e compacta, a CURAPROX Sensitive limpa de forma mais intensa e suave. Ao escovar com a CURAPROX CS, a sua língua notará a diferença: os seus dentes ficarão mais limpos, lisos e parecerão mais brancos. Inovação com cerdas macias de extremidades arredondadas. Ultra suave e ao mesmo tempo resistente e com grande capacidade e poder de limpeza.',
  },
]

const productItem = document.getElementById('product-itens')
const price = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

perfumaria.forEach((item) => {
  const container = document.createElement('div')

  container.innerHTML = `
    <a href="/product.html?id=${item.id}" class="product">
      <img src="${item.imageUrl}" />
      <div>
        <h2>${item.productName}</h2>
        <span>${item.size}</span>
        <h1>${price.format(item.discountPrice)}</h1>
      </div>
      <button>
        <i class="ph ph-basket"></i>
        Adicionar no carrinho
      </button>
    </a>
  `

  productItem.appendChild(container)
})
