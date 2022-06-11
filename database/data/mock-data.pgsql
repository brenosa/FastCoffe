/*Produtos*/
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(1, 'Espresso', 'Extração intensa dos atributos sensoriais do café. A moagem fina unida a pressão da água traz uma bebida intensa, encorpada e saborosa.',
'espresso.webp', 'Expresso');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(2, 'Panna', 'Panna quer dizer creme em italiano. Uma deliciosa cobertura de chantilly adicionada ao espresso',
'panna.webp', 'Expresso');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(3, 'Mocha', 'Café com chocolate é uma combinação de sabores clássica. Acrescente a calda de chocolate ao Caffè Latte ou Cappuccino e desfrute de uma deliciosa bebida adocicada',
'mocha.webp', 'Expresso');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(4, 'Macchiato', 'Clássico italiano. Café espresso com espuma de leite vaporizado, o que confere mais doçura à bebida',
'macchiato.webp', 'Expresso');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(5, 'Moído & Coado Hario V60', 'Voltando às origens com o clássico coado. Neste método a moagem é feita no momento de coar o café. O Hario V60 é um método japonês que evidencia as características do café trazendo doçura, acidez e corpo em perfeita harmonia.',
'v60.png', 'Coado');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(6, 'French Press', 'Esse método de extração permite brincar com os resultados de um mesmo café, seu tempo de infusão traz uma explosão de sabor, aroma, corpo e doçura.',
'french.png', 'Coado');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(7, 'Chocolate Quente', 'Tipo Europeu','chocolate.png', 'Chocolates');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(8, 'Bolo de cenoura', 'Fatia','cenoura.png', 'Bolos');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(9, 'Brownie', 'Fatia','brownie.png', 'Bolos');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(10, 'Empada', 'Frango','empada.png', 'Salgados');
INSERT INTO product (id, "name", "description", "imageLocation", "category") VALUES 
(11, 'Croissant', '4 Queijos','croissant.png', 'Salgados');

/*Menu*/
INSERT INTO menu ("productId") VALUES(1);
INSERT INTO menu ("productId") VALUES(2);
INSERT INTO menu ("productId") VALUES(3);
INSERT INTO menu ("productId") VALUES(4);
INSERT INTO menu ("productId") VALUES(5);
INSERT INTO menu ("productId") VALUES(6);
INSERT INTO menu ("productId") VALUES(7);
INSERT INTO menu ("productId") VALUES(8);
INSERT INTO menu ("productId") VALUES(9);
INSERT INTO menu ("productId") VALUES(10);
INSERT INTO menu ("productId") VALUES(11);

/*Cost*/
INSERT INTO cost ("productId", "cost", "discount") VALUES(1, '2.5', '5');
INSERT INTO cost ("productId", "cost", "discount") VALUES(2, '3.5', '5');
INSERT INTO cost ("productId", "cost", "discount") VALUES(3, '1.5', '5');
INSERT INTO cost ("productId", "cost", "discount") VALUES(4, '6.0', '5');
INSERT INTO cost ("productId", "cost", "discount") VALUES(5, '5.5', '10');
INSERT INTO cost ("productId", "cost", "discount") VALUES(6, '5.0', '10');
INSERT INTO cost ("productId", "cost", "discount") VALUES(7, '7.5', '10');
INSERT INTO cost ("productId", "cost", "discount") VALUES(8, '10.0', '10');
INSERT INTO cost ("productId", "cost", "discount") VALUES(9, '8.5', '15');
INSERT INTO cost ("productId", "cost", "discount") VALUES(10, '7.0', '15');
INSERT INTO cost ("productId", "cost", "discount") VALUES(11, '6.5', '15');

/*Stock*/
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(1,  12, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(2,  23, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(3,  33, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(4,  26, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(5,  5, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(6,  24, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(7,  12, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(8,  7, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(9,  7, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(10, 5, '2022-05-15', '2022-06-30');
INSERT INTO stock ("productId", "qtyAvailable", "lastRestocking", "nextRestocking") VALUES(11, 4, '2022-05-15', '2022-06-30');
