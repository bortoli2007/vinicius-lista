let inventario = [
    { nome: 'Anilha 1kg', preco: 20.00, emEstoque: true },
    { nome: 'Anilha 2kg', preco: 35.00, emEstoque: false },
    { nome: 'Anilha 2.5kg', preco: 40.00, emEstoque: true },
    { nome: 'Anilha 5kg', preco: 80.00, emEstoque: true },
    { nome: 'Anilha 10kg', preco: 150.00, emEstoque: true },
    { nome: 'Anilha 15kg', preco: 200.00, emEstoque: false },
    { nome: 'Anilha 20kg', preco: 250.00, emEstoque: true },
    { nome: 'Anilha 25kg', preco: 300.00, emEstoque: false },
    { nome: 'Corda de pular', preco: 60.00, emEstoque: false },
    { nome: 'Barra olimpica', preco: 1.500, emEstoque: true },
    { nome: 'Colchonete', preco: 150.00, emEstoque: true },
    { nome: 'Piso de Borracha (m)', preco: 80.00, emEstoque: false },
    { nome: 'Corda Naval', preco: 250.00, emEstoque: true },
    { nome: 'suporte para agachamento', preco: 250.00, emEstoque: false },
    { nome: 'Bloco de Magnésio', preco: 30.00, emEstoque: true }
    ]
    
    for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
    console.log(produtosEmEstoque);