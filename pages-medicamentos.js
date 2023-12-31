const medicamentos = [
  {
    id: 'naridrin-adulto',
    productName: 'Naridrin Adulto',
    imageUrl:
      'https://io.convertiez.com.br/m/drogal/shop/products/images/4060385/medium/naridrin-adulto-15ml_63383.png',
    size: '15ml',
    defaultPrice: 24.87,
    discountPrice: 19.85,
    owner: 'EMS',
    description:
      'Naridrin® é indicado como vasoconstritor destinado ao tratamento da congestão nasal de origem alérgica ou inflamatória, nas rinites e rinofaringites. Também indicado para o tratamento auxiliar da congestão nasal provocada por gripes e resfriados.',
  },
  {
    id: 'dorflex-36',
    productName: 'Dorflex',
    imageUrl:
      'https://paguemenos.vtexassets.com/arquivos/ids/354546-1200-auto?v=637807995947470000&width=1200&height=auto&aspect=true',
    size: '36 comprimidos',
    defaultPrice: 25.1,
    discountPrice: 19.99,
    owner: 'Sanofi',
    description:
      'Dorflex é um relaxante muscular, analgésico e antitérmico. É indicado para o alívio de dores associadas a contraturas musculares (incluindo dor de cabeça tensional) e quadros de febre.',
  },
  {
    id: 'allegra-120',
    productName: 'Allegra 120mg',
    imageUrl:
      'https://paguemenos.vtexassets.com/arquivos/ids/327781/788b62739eee5de476adac92c58ad8ce_allegra-allegra-120mg-com-10-comprimidos_lett_2.jpg?v=637692894477470000',
    size: '10 comprimidos',
    defaultPrice: 82.24,
    discountPrice: 69.9,
    owner: 'Sanofi',
    description:
      'Allegra é o antialérgico nº1 do mercado trazendo alívio rápido da alergia e não dá sono, indicado para os sintomas da Rinite Alérgica e urticária, tem rápida ação para nariz entupido, coriza, espirro e coceiras nos olhos, nariz, garganta e pele - com eficácia e segurança.',
  },
  {
    id: 'tylenol-bebe',
    productName: 'Tylenol Bebê Líquido',
    imageUrl:
      'https://paguemenos.vtexassets.com/arquivos/ids/668754-1200-auto?v=638100722216200000&width=1200&height=auto&aspect=true',
    size: '15ml',
    defaultPrice: 56.84,
    discountPrice: 37.95,
    owner: 'Johnson & Johnson',
    description:
      'O Paracetamol, ingrediente-base de TYLENOL, é a única substância recomendada por pediatras para bebês com menos de 3 meses de idade*, podendo ser usado desde o nascimento. O TYLENOL Bebê reduz a febre e alivia as dores comuns da infância, como o nascimento dos dentes, cólicas e algumas reações pós-vacina. A inconfundível embalagem vem com seringa dosadora, tornando a administração do remédio mais segura e ágil.',
  },
  {
    id: 'vick-vaporub',
    productName: 'Vick VapoRub Pomada Descongestionante',
    imageUrl:
      'https://www.drogariaminasbrasil.com.br/media/product/d84/vick-vaporub-unguento-c-50-g-272.jpg',
    size: '30g',
    defaultPrice: 36.67,
    discountPrice: 31.95,
    owner: 'Vick',
    description:
      'Vick Vaporub é destinado ao alívio da tosse e do mal-estar muscular que acompanham gripes e resfriados, além da congestão nasal.',
  },
  {
    id: 'lisador-dip',
    productName: 'Lisador Dip 1g',
    imageUrl:
      'https://paguemenos.vtexassets.com/arquivos/ids/658975-1200-auto?v=638035131105700000&width=1200&height=auto&aspect=true',
    size: '20 comprimidos',
    defaultPrice: 42.4,
    discountPrice: 27.9,
    owner: 'Sanofi',
    description:
      'Lisador é um medicamento indicado para o tratamento de dores; como cólicas, dor de cabeça, musculares, articulares, pós-operatórias e dores em geral. Sua ação tem início a partir de 20 a 30 minutos e seu efeito analgésico perdura de 4 a 6 horas após a administração.',
  },
  {
    id: 'neosaldina',
    productName: 'Neosaldina',
    imageUrl:
      'https://drogariaspacheco.vteximg.com.br/arquivos/ids/850110-1000-1000/129810---neosaldina-takeda-4-drageas-1.jpg?v=637883434290430000',
    size: '4 drágeas',
    defaultPrice: 9.15,
    discountPrice: 7.99,
    owner: 'Hypera Farma',
    description:
      'A Neosaldina é um medicamento com atividade analgésica e antiespasmódica, indicado para o tratamento de diversos tipos de dor de cabeça, incluindo enxaquecas ou para o tratamento de cólicas.',
  },
  {
    id: 'naridrin-12h',
    productName: 'Naridrin 12 Horas',
    imageUrl:
      'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/16/45162_atensina-0-10mg-caixa-com-30-comprimidos-p2001144_l1_637572093914761008.jpg',
    size: 'Solução nasal - 15ml',
    defaultPrice: 27.58,
    discountPrice: 21.55,
    owner: 'EMS',
    description:
      'Naridrin® é indicado como vasoconstritor destinado ao tratamento da congestão nasal de origem alérgica ou inflamatória, nas rinites e rinofaringites.',
  },
  {
    id: 'cloridrato-sildenafila',
    productName: 'Cloridrato de sildenafila 50mg',
    imageUrl:
      'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/16/45162_atensina-0-10mg-caixa-com-30-comprimidos-p2001144_l1_637572093914761008.jpg',
    size: '4 comprimidos',
    defaultPrice: 57.58,
    discountPrice: 9.9,
    owner: 'Neoquímica',
    description:
      'CITRATO DE SILDENAFILA 50MG É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM MÉDICO OU UM FARMACÊUTICO. LEIA A BULA. MEDICAMENTOS PODEM CAUSAR EFEITOS INDESEJADOS. EVITE A AUTOMEDICAÇÃO: INFORME-SE COM O FARMACÊUTICO.',
  },
  {
    id: 'buscopan-composto',
    productName: 'Buscopan Composto',
    imageUrl:
      'https://drogariasp.vteximg.com.br/arquivos/ids/876910-1000-1000/2810---buscopan-composto-20-drageas-1.jpg?v=638165815212070000',
    size: '20 comprimidos',
    defaultPrice: 21.56,
    discountPrice: 18.99,
    owner: 'Sanofi',
    description:
      'Buscopan Composto é indicado para o tratamento dos sintomas de cólicas intestinais, estomacais, urinárias, das vias biliares, dos órgãos sexuais femininos e menstruais.',
  },
  {
    id: 'maxalgina',
    productName: 'Maxalgina Gotas',
    imageUrl:
      'https://io.convertiez.com.br/m/farmaponte/shop/products/images/18328/medium/maxalgina-solucao-oral-500mgml-caixa-com-1-frasco-gotejador-com-20ml-de-solucao-de-uso-oral_13509.png',
    size: '20ml',
    defaultPrice: 7.59,
    discountPrice: 4.99,
    owner: 'Natulab',
    description:
      'Maxalgina é indicado como analgésico (para dor) e antitérmico (para febre).',
  },
  {
    id: 'floratil',
    productName: 'Floratil 200mg',
    imageUrl:
      'https://drogariaspacheco.vteximg.com.br/arquivos/ids/958960-1000-1000/67636---floratil-200mg-merck-6-envelopes-1.jpg?v=637975873801300000',
    size: '6 envelopes',
    defaultPrice: 57.69,
    discountPrice: 43.99,
    owner: 'Merk',
    description:
      'Floratil está indicado como auxiliar no tratamento de diarreias de diferentes causas e na restauração da flora intestinal.',
  },
]

const productItem = document.getElementById('product-itens')
const price = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

medicamentos.forEach((item) => {
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
