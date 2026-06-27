var WHATSAPP_NUMBER = '558585962496';
var cart = [];

var PRODUCTS = [{"name":"LBla- Água Perfumada Blanc 500 ml","price":"BRL 119,90","description":"Ideal para borrifar em tecidos. \nO Blanc é uma fragrância cítrica refrescante formada por um mix de chá branco combinado com a energia da flor de limão e o floral das margaridas.","image_url":"https://static.whatsapp.net/rsrc.php/yS/r/T_xj3a3ApC9.webp"},{"name":"LBla- Refil Home Spray Blanc 250 ml","price":"BRL 84,90","description":"O Blanc é uma fragrância cítrica refrescante formada por um mix de chá branco combinado com a energia da flor de limão e o floral das margaridas.","image_url":"https://media-for2-1.cdn.whatsapp.net/v/t61.24694-24/533543967_1311898573515072_728205741053641743_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEoK0esanmpz0p2qdJiKwq6AIRFjv8e1qGGwR1XVvKEZw&oe=6A4CDA08&_nc_sid=5e03e0&_nc_cat=105"},{"name":"LBla- Refil Difusor Blanc 250 ml","price":"BRL 89,90","description":"O Blanc é uma fragrância cítrica refrescante formada por um mix de chá branco combinado com a energia da flor de limão e o floral das margaridas.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534417972_933895019104217_6869097411707669514_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wG6rvwYlSMwntdbqAfU7SsTZQJY85BFDpcCAPvlwY0vfw&oe=6A4D070D&_nc_sid=5e03e0&_nc_cat=109"},{"name":"LLo- Água Perfumada L’or 500 ml","price":"BRL 119,90","description":"Ideal para borrifar em tecidos. ️L’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/616396276_935822356009713_6884533334437766565_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFPwpceeRUQFyZnyfDwg_saJjMFMNXo1lLV3GYBbKDQxw&oe=6A4D0482&_nc_sid=5e03e0&_nc_cat=108"},{"name":"LLo- Difusor L’or 250 ml","price":"BRL 89,90","description":"L’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534416784_1243880781027693_7133134117413840346_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHzOTyt4RetqM92z5DOfjt-plArsD0OmSN3XCUF39k-Tg&oe=6A4CFCD7&_nc_sid=5e03e0&_nc_cat=106"},{"name":"LLo- Home Spray L’or 250 ml","price":"BRL 84,90","description":"Ideal para borrifar no ambiente.\nL’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/375824181_1039251787081640_917111487766900129_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFMpdYYnb7KLXtErxJLLiYuaq0nypI8_Cvo6Rm6vMB4cw&oe=6A4CD9C6&_nc_sid=5e03e0&_nc_cat=105"},{"name":"LR-Refil Difusor Rose 250 ml","price":"BRL 89,90","description":"O Rose é uma fragrância mais floral, formada pelos acordes de rosas perfumadas, em harmonia com o Jasmim  branco e Gardênias. É um floral bem marcante.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/416676351_375082765108617_513736304198190748_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFCapsO8vBmfkHZl8L0cvZ6OjL1VqdssZE6O6nB6gkqzQ&oe=6A4CDA45&_nc_sid=5e03e0&_nc_cat=109"},{"name":"LR- Refil Home Spray Rose 250 ml","price":"BRL 84,90","description":"Ideal para borrifar no ambiente.\nO Rose é uma fragrância mais floral, formada pelos acordes de rosas perfumadas, em harmonia com o Jasmim  branco e Gardênias. É um floral bem marcante.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534423498_1352156913451970_3106380651979321232_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHFhZRLMYu7CGWIsM_exwayJu8yMWjdkUn38B1298-tWQ&oe=6A4CDE74&_nc_sid=5e03e0&_nc_cat=106"},{"name":"LR- Refil Sabonete Líquido Rose 250 ml","price":"BRL 84,90","description":"O Rose é uma fragrância mais floral, formada pelos acordes de rosas perfumadas, em harmonia com o Jasmim  branco e Gardênias. É um floral bem marcante.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/58411332_1335584189912838_7572997571665199104_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFKjo6cDCuNm3URnrPF7B7eMhhIgok1GZE91nz43h0t3g&oe=6A4CF654&_nc_sid=5e03e0&_nc_cat=102"},{"name":"LBle- Home Spray Bleu 240 ml","price":"BRL 129,90","description":"Ideal para borrifar no ambiente. \nO Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/559155830_823650643550978_7019009366352043975_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGzF7oAzm3OOBXtX0djOECAtwnEKZN0t1on9MgAA0SReg&oe=6A4D01C0&_nc_sid=5e03e0&_nc_cat=104"},{"name":"LBle- Sabonete Bleu 130 ml","price":"BRL 89,90","description":"O Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja","image_url":"https://pps.whatsapp.net/v/t61.24694-24/724484061_2761754377536215_2190669261860019027_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGztHF90pNS4valCAKq2V9AvUqqXaWgWN-Qu5B7gmoU0A&oe=6A4CF035&_nc_sid=5e03e0&_nc_cat=105"},{"name":"LBle- Sabonete Bleu 240 ml","price":"BRL 119,90","description":"O Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534425703_831481789887257_4092191367747151289_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFs3sx_AbgKrJpfD-MjHM8Zk_RUcrLjGsDXntzXVmZy-Q&oe=6A4CFCB4&_nc_sid=5e03e0&_nc_cat=106"},{"name":"LV-Refil Home Spray Vanille 250 ml","price":"BRL 84,90","description":"Ideal para borrifar no ambiente.\nO Vanille é uma fragrância suave formada pela combinação dos acordes de Baunilha, rosas vermelhas e flor de laranjeira para trazer a sensação de aconchego.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/672742357_27098872799815634_426401938494395508_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHUFoMVFTCfIDe1WXVl-PSFyui8pOymd1ZnsNKagdrhMQ&oe=6A4CE460&_nc_sid=5e03e0&_nc_cat=107"},{"name":"LV-Refil Difusor Vanille 250 ml","price":"BRL 89,90","description":"O Vanille é uma fragrância suave formada pela combinação dos acordes de Baunilha, rosas vermelhas e flor de laranjeira para trazer a sensação de aconchego.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/473396505_956200129820334_5755859775489598651_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wElUN1UKcLnJAWBFeGbGWZy02Ex8h0UFgF5H4CR6rJ69g&oe=6A4D06E6&_nc_sid=5e03e0&_nc_cat=108"},{"name":"LV-Refil Sabonete Líquido Vanille 250 ml","price":"BRL 84,90","description":"O Vanille é uma fragrância suave formada pela combinação dos acordes de Baunilha, rosas vermelhas e flor de laranjeira para trazer a sensação de aconchego.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/151277106_1087310875118127_2925394890121677774_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wH9l0kRwf6jULzY82eLdgziFRQzTDdXL_N94Ym8Imyj3w&oe=6A4CE551&_nc_sid=5e03e0&_nc_cat=108"},{"name":"Vela de Rosa","price":"BRL 59,90","description":"Fragrância Anis","image_url":"https://pps.whatsapp.net/v/t61.24694-24/698013623_2843350856044828_593937207056235698_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFeRmWb5GmEFkKxvoyPTDkOZTohr81uy9Zvqg-efJn7aQ&oe=6A4CD5E7&_nc_sid=5e03e0&_nc_cat=100"},{"name":"Vela Aromática Preta","price":"BRL 139,90","description":"Fragrância Bambu","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534425483_2349109058953201_2990470385767650004_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wF1bEA1sL4sKpnqiQBzyJdz1-kwDMur191BXT-DDQAwkA&oe=6A4CD7BE&_nc_sid=5e03e0&_nc_cat=103"},{"name":"Vela Aromática","price":"BRL 129,90","description":"Fragrâncias Blanc, Vanille, Rose, L’or, Lê Vert, Bleu","image_url":"https://pps.whatsapp.net/v/t61.24694-24/595232812_2789115278100143_7492145071648785787_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEH6izRXVpJxVdMZg41OXoxvw9X4U-LZTGQN2AEQc0zBQ&oe=6A4CE0B4&_nc_sid=5e03e0&_nc_cat=102"},{"name":"Bandeja ou Porta papel toalha de Acrilico","price":"BRL 109,90","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/611389708_947649424841390_6344697238810132241_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEdpr3PL5mzKOxIQO1lzgMUqdA8Qx2BxEVg-khkxROk9w&oe=6A4CD80F&_nc_sid=5e03e0&_nc_cat=102"},{"name":"Porta guardanapo de Libélula","price":"BRL 79,90","description":"4 unidades","image_url":"https://pps.whatsapp.net/v/t61.24694-24/638811859_2197862054331445_3381258213504198394_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wH3U_Jgwqwlk5SyjWFperJzPw07sXzkQj-ytW2k0kUw9g&oe=6A4CDF29&_nc_sid=5e03e0&_nc_cat=103"},{"name":"Difusor Elétrico","price":"BRL 109,90","description":"Cada essência custa R$ R$ 39,90","image_url":"https://pps.whatsapp.net/v/t61.24694-24/625665393_912162194643888_3613029271140974971_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEKLnE_xOhY5AQJgri64BtczzpJaxGzw5l7IwGA6exX-Q&oe=6A4CF40C&_nc_sid=5e03e0&_nc_cat=104"},{"name":"Bandeja oval de cerâmica","price":"BRL 149,90","description":"Tamanho - 22 x 12 cm\nCor: branca, preta e Rosa","image_url":"https://pps.whatsapp.net/v/t61.24694-24/461248412_1234066291238524_329668682088653321_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHavCbmDgSOLiQDRMWw-rz6pNoECfORwcagZfj3SZMLXg&oe=6A4D074F&_nc_sid=5e03e0&_nc_cat=110"},{"name":"Bandeja quadrada prata com fundo vidro preto","price":"BRL 179,90","description":"Tamanho- 17 x 17 cm","image_url":"https://pps.whatsapp.net/v/t61.24694-24/623412314_1465263398666938_7595641049751091683_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEUKKH3qoQ8yA8afNuCeKiMFF8evirLYk4y_w-9RHKbrQ&oe=6A4CDE7E&_nc_sid=5e03e0&_nc_cat=108"},{"name":"Bandeja retangular preto com fundo vidro preto","price":"BRL 169,90","description":"Tamanho -28x18cm","image_url":"https://pps.whatsapp.net/v/t61.24694-24/521019584_2148082682687396_4717133627830460955_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFZ3zBOu_54scd-n8cw-Kv0i8Ayk_6IiHK2kkZ9X18RaA&oe=6A4CD775&_nc_sid=5e03e0&_nc_cat=104"},{"name":"LLe- Refil Difusor Le Vert 250 ml","price":"BRL 89,90","description":"O Le Vert é uma fragrância cítrica com um maravilhoso cheiro campestre que proporciona ao ambiente um clima de conforto e frescor. Suas notas com frutas cítricas oferecem sensações imediatas de bem estar, limpeza, e de harmonia ao ambiente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/629919362_957492419945153_5527687753013700577_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEUPwWhOx02dIFlPCFR0T34KiCGhfjorI89wAxs46aoxQ&oe=6A4CD604&_nc_sid=5e03e0&_nc_cat=101"},{"name":"LLe- Refil Home Spray Le Vert 250 ml","price":"BRL 84,90","description":"Ideal para borrifar no ambiente.\nO Le Vert é uma fragrância cítrica com um maravilhoso cheiro campestre que proporciona ao ambiente um clima de conforto e frescor. Suas notas com frutas cítricas oferecem sensações imediatas de bem estar, limpeza, e de harmonia ao ambiente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/655081725_2103552607100813_3494608622850660592_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHOhPMgsd_XW8xrXZ5WqiV7tTd5Li-C0iyn7kiPe8FoEQ&oe=6A4CD591&_nc_sid=5e03e0&_nc_cat=109"},{"name":"LLe- Refil Sabonete Líquido Le Vert 250 ml","price":"BRL 84,90","description":"O Le Vert é uma fragrância cítrica com um maravilhoso cheiro campestre que proporciona ao ambiente um clima de conforto e frescor. Suas notas com frutas cítricas oferecem sensações imediatas de bem estar, limpeza, e de harmonia ao ambiente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/491875663_1021491863447736_1097974684566405601_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHqn5sG3WjTrj1fCstpB2pEdGbAH8w4AljJ43twTkoYpw&oe=6A4CF3CA&_nc_sid=5e03e0&_nc_cat=106"},{"name":"Taxa de Entrega - 20","price":"BRL 20,00","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/417264387_384876187930064_8820911194925487447_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGMpUSB9NQf_NcFaGkD_y2g-zcDnFbdV7dG9I3mLGygQg&oe=6A4CF37B&_nc_sid=5e03e0&_nc_cat=100"},{"name":"Taxa de Entrega - 15","price":"BRL 15,00","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/608185390_1200245824861138_3758212696246454151_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGzwVyf6zJRO6QTYmD4pzXAE_mPWgqiRXGr3kyQiJ0qGg&oe=6A4CF3F3&_nc_sid=5e03e0&_nc_cat=103"},{"name":"Taxa de Entrega - 10","price":"BRL 10,00","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/427560946_780325250752815_7877201149043420681_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFi-q9yFhNie9RNIy8fr43m52Dv1ymsopufvNKUVBC4kw&oe=6A4CF0DA&_nc_sid=5e03e0&_nc_cat=103"},{"name":"LR- Difusor Rose 120 ml","price":"BRL 99,90","description":"Acompanha kit com 4 varetas de fibra.\nO Rose é uma fragrância mais floral, formada pelos acordes de rosas perfumadas, em harmonia com o Jasmim  branco e Gardênias. É um floral bem marcante.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/352168652_213280114891846_4321523630858259220_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGZ1r-J3RTuy2rzDqRoOQMqNnLYtx5XM4b7xSNhqPRFiw&oe=6A4CF9E5&_nc_sid=5e03e0&_nc_cat=110"},{"name":"Bandeja oval de cerâmica","price":"BRL 169,90","description":"Tamanho -  26,5 x 14 cm\nCor: branca, preta, Rosa","image_url":"https://pps.whatsapp.net/v/t61.24694-24/675492183_890715043362704_9094208632116139688_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEw3ZEV7bi6EV2g7Ts2TXwenEcdjxpIDEmgzqOMPvajKA&oe=6A4CD623&_nc_sid=5e03e0&_nc_cat=107"},{"name":"Rosa difusora de Gesso","price":"BRL 25,00","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/307526515_836217277520455_7735274421572061813_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEjKWZCLY6BSt-Kb0x4LUqf-X30BcpaSLnBH7IVk_Uu9Q&oe=6A4CE81A&_nc_sid=5e03e0&_nc_cat=104"},{"name":"LLo- Home Spray L’or 250 ml","price":"BRL 84,90","description":"Ideal para borrifar no ambiente.\nL’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/661442552_1534716194857477_5105216941357704893_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGkpQp7F0ESCPSWJVb0hVqwSpH78Alojvnn_flO9z0Mtg&oe=6A4CED77&_nc_sid=5e03e0&_nc_cat=104"},{"name":"LLo- Difusor L’or 250 ml","price":"BRL 89,90","description":"L’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/467956308_2630756293979126_2186986818153667645_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFJbecE6XPoimS2qUvnXJaniMjAjJewK3jKGvAcG-hdIg&oe=6A4D08E1&_nc_sid=5e03e0&_nc_cat=100"},{"name":"LLo- Água Perfumada L’or 500 ml","price":"BRL 119,90","description":"Ideal para borrifar em tecidos. ️L’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/713843158_967093676099412_1654977130517314359_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFkPL6RpMVp97tKQ0HUoMfZg_671bJJ1rM8-KPRqChJwQ&oe=6A4D07B8&_nc_sid=5e03e0&_nc_cat=110"},{"name":"Home spray para Carro","price":"BRL 69,90","description":"Home spray para borrifar e renovar o cheiro do seu carro.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534427967_4326345361021601_7023381043415896959_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHmprsAdNORCt5JoQy1eHYbtbzE7iSdYvMLwkslOBKqKw&oe=6A4CE4E6&_nc_sid=5e03e0&_nc_cat=110"},{"name":"LBla- Sabonete Líquido Blanc 250 ml","price":"BRL 119,90","description":"O Blanc é uma fragrância cítrica refrescante formada por um mix de chá branco combinado com a energia da flor de limão e o floral das margaridas.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/534427929_1296284942676688_1182389061522350109_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEgffm2Sz6QkjmK2fnvcjZDbTjXJJkDwUiXo3vI8PlotQ&oe=6A4CFD55&_nc_sid=5e03e0&_nc_cat=103"},{"name":"LBla- Álcool em gel 70º 60 ml","price":"BRL 49,90","description":"Para a sua proteção diária, ideal para guardar em bolsas, ou espaços pequenos. \nHidrata e auxilia no combate de vírus e bactérias.\nO Blanc é uma fragrância cítrica refrescante formada por um mix de chá branco combinado com a energia da flor de limão e o floral das margaridas.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/675502804_4434855423509998_6006619785777526552_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHvcYSf1SFLl9p5Q_LOrQUytCm9q6DPAbW0uFoZuXnUTg&oe=6A4CF174&_nc_sid=5e03e0&_nc_cat=109"},{"name":"LBle- Home Spray Bleu 240 ml","price":"BRL 129,90","description":"Ideal para borrifar no ambiente. \nO Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/491841895_1253335226190144_5487855925550557413_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHr_mb0_SAtaDXZtLQWVmAq-06TVojRjui9-H0OWZl_bg&oe=6A4CD35C&_nc_sid=5e03e0&_nc_cat=106"},{"name":"Porta guardanapo de Libélula","price":"BRL 79,90","description":"4 unidades","image_url":"https://pps.whatsapp.net/v/t61.24694-24/644592219_1501503141377151_2653951610505859417_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFVJ6kCI_bybEFtMtkr8TYCcD39jIjTQYHyHvq4ciE4ag&oe=6A4D07F8&_nc_sid=5e03e0&_nc_cat=107"},{"name":"Vela Aromática Preta","price":"BRL 139,90","description":"Fragrância Bambu","image_url":"https://pps.whatsapp.net/v/t61.24694-24/554980956_1513284879948179_3115021454833313709_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wF_Lm-dWLH0ai7ax0nZtykHYyqiQ4ca8ZZwEdhvG56W9g&oe=6A4CFAA0&_nc_sid=5e03e0&_nc_cat=110"},{"name":"LBle- Sabonete Bleu 240 ml","price":"BRL 119,90","description":"O Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja","image_url":"https://pps.whatsapp.net/v/t61.24694-24/521460895_1419492873234741_6337681019475092438_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFKU0h4u-QkF7KY-ksyDUmdlVq5EvlnOlfc01AXUpKUJA&oe=6A4CD83B&_nc_sid=5e03e0&_nc_cat=111"},{"name":"Toalha branca de lavabo","price":"BRL 34,90","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/437162562_383618778055460_2915717054876734110_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEXVQXpntbhUuMZg5tdiWFnQhq_nw8v-xN778BoL4KZ-w&oe=6A4CE03E&_nc_sid=5e03e0&_nc_cat=107"},{"name":"LBle- Difusor Bleu 240 ml","price":"BRL 139,90","description":"Acompanha Kit com 4 varetas de fibra.\nO Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/611460195_1506867504472391_6275269842397558945_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGCghc0pUyRcxHc0CYNSkCIc3toeBvFPmMSK2_U6gqLsw&oe=6A4D00A4&_nc_sid=5e03e0&_nc_cat=100"},{"name":"Bandeja redonda dourada","price":"BRL 139,90","description":"Tamanho - diam. 17","image_url":"https://pps.whatsapp.net/v/t61.24694-24/382387849_246259078395083_5299778417166704413_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wE8kSGUdjmokEvnN3CrGRsJRnVh2BqgoGDWWRmHnCIodA&oe=6A4CFBBD&_nc_sid=5e03e0&_nc_cat=106"},{"name":"LR-Refil Difusor Rose 250 ml","price":"BRL 89,90","description":"O Rose é uma fragrância mais floral, formada pelos acordes de rosas perfumadas, em harmonia com o Jasmim  branco e Gardênias. É um floral bem marcante.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/651400337_963534776356397_6026752373391102652_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGKf-qN8s7YV5xQoSL7atNKWunzNtfvAZsPya4sW8IEYA&oe=6A4CFD77&_nc_sid=5e03e0&_nc_cat=109"},{"name":"Sais de Banho","price":"BRL 54,90","description":"Pode ser usado na banheira ou no chuveiro como um esfoliante","image_url":"https://pps.whatsapp.net/v/t61.24694-24/684358949_1653738765897627_6553136850375364126_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGademYiMLmlhbASeRD4jkvoLJSLx4-E1HUMmdI3ZwKBg&oe=6A4CD128&_nc_sid=5e03e0&_nc_cat=106"},{"name":"LBla- Difusor Blanc 120 ml","price":"BRL 99,90","description":"Acompanha kit com 4 varetas de fibra. \nO Blanc é uma fragrância cítrica refrescante formada por um mix de chá branco combinado com a energia da flor de limão e o floral das margaridas.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/546456758_774316525456716_88273023385605376_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHQbHCigij7hCZ-uxZ-87TTkpsHjjhyXZEdhfXKvOHing&oe=6A4CF98B&_nc_sid=5e03e0&_nc_cat=102"},{"name":"Gesso Perfumado","price":"BRL 84,90","description":"Gesso perfumado, acompanha frasco com 15 ml de essência","image_url":"https://pps.whatsapp.net/v/t61.24694-24/586487323_976171631422698_5496448932296686254_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHRBn0S_54mcQ1EHO-yPbDGCW2t52o5u_LTjyZB4bFasg&oe=6A4CF7B3&_nc_sid=5e03e0&_nc_cat=107"},{"name":"Bandeja ou Porta papel toalha de Acrilico","price":"BRL 109,90","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/594496005_850427984807510_7861920394939035081_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wGzJy1Y3-GndGTBjtUM5ROB6N9EuzVsWUjx1CHKPUtPjQ&oe=6A4CD727&_nc_sid=5e03e0&_nc_cat=107"},{"name":"LV-Água Perfumada Vanille 500 ml","price":"BRL 119,90","description":"Ideal para borrifar em tecidos.\n\nO Vanille é uma fragrância suave formada pela combinação dos acordes de Baunilha, rosas vermelhas e flor de laranjeira para trazer a sensação de aconchego.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/695775472_1582756546750166_3359535159718034183_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEZc-2NHGbLjIGuznqgm6UMpDQUppB2doRzQL7nQtY-sQ&oe=6A4CF2D8&_nc_sid=5e03e0&_nc_cat=105"},{"name":"LBle- Água Perfumada Bleu 50O ml","price":"BRL 119,90","description":"Ideal para borrifar em tecidos.\nO Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja","image_url":"https://pps.whatsapp.net/v/t61.24694-24/626432616_1458875896010381_6557230660482594679_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wETG7su_ygHNzZ6rQKLsjjZMwp_x2D3IxbrDsVEPW0NTg&oe=6A4CE763&_nc_sid=5e03e0&_nc_cat=110"},{"name":"LLo- Difusor L’or 250 ml","price":"BRL 139,90","description":"Acompanha kit com 4 varetas de fibra.\nL’OR É uma mistura cítrica e amadeirada bem intensa, compõe um aroma firme, marcante, vivo e envolvente.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/544436003_4229941520618621_8708741697470503589_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFZp9VbLbsm5Okr-m9gKRrKrFMH91yEiMd-Y3dqbexC6w&oe=6A4CEB95&_nc_sid=5e03e0&_nc_cat=100"},{"name":"Bandeja oval de cerâmica","price":"BRL 149,90","description":"Tamanho - 22 x 12 cm\nCor: branca, preta e Rosa","image_url":"https://pps.whatsapp.net/v/t61.24694-24/454732506_1012283070578120_8752657226112839664_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wH3TluS6POnyG-ps2-jlj53u9C6ySnEsDVwVejQhUZVgA&oe=6A4D06AE&_nc_sid=5e03e0&_nc_cat=104"},{"name":"LV-Refil Home Spray Vanille 250 ml","price":"BRL 84,90","description":"Ideal para borrifar no ambiente.\nO Vanille é uma fragrância suave formada pela combinação dos acordes de Baunilha, rosas vermelhas e flor de laranjeira para trazer a sensação de aconchego.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/418952477_1177183753289758_6466802026336506368_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wEXmO-lE_3BdafFtJbbPRg_6nSj8jOCPjXD7--eVb-znQ&oe=6A4CEB19&_nc_sid=5e03e0&_nc_cat=104"},{"name":"LBle- Home Spray Bleu 130 ml","price":"BRL 94,90","description":"Ideal para borrifar no ambiente. \nO Bleu é uma fragrância com toque fresco, levemente cítrico, aromático (sálvia) e pouco amadeirado.\nContém Ambreta, sal marinho, algas marinhas e toranja","image_url":"https://pps.whatsapp.net/v/t61.24694-24/505159196_4424296981125762_2539446477337944236_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHxFO0UpiYt00qVPnboDfdnh5RNEEj0xMVEgFmpavs0jw&oe=6A4CF9DD&_nc_sid=5e03e0&_nc_cat=105"},{"name":"Bandeja retangular preto com fundo vidro preto","price":"BRL 169,90","description":"Tamanho -28x18cm","image_url":"https://pps.whatsapp.net/v/t61.24694-24/408213221_1482560895629624_4817838840838346196_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFwHPsyN0_SHmyUAYhnkFBEsbUHS-efLL1YIm2vlkhoPA&oe=6A4D0177&_nc_sid=5e03e0&_nc_cat=100"},{"name":"Bandeja retangular MDF","price":"BRL 199,90","description":"Tamanho - 38 x 18 cm","image_url":"https://pps.whatsapp.net/v/t61.24694-24/617142570_4473655492864300_3120170151663752556_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wFCl6ddt3NUXf7P78d7xQar3oLT6CD8HSYdQZLq5gj8FQ&oe=6A4CFFE6&_nc_sid=5e03e0&_nc_cat=100"},{"name":"LV-Refil Sabonete Líquido Vanille 250 ml","price":"BRL 84,90","description":"O Vanille é uma fragrância suave formada pela combinação dos acordes de Baunilha, rosas vermelhas e flor de laranjeira para trazer a sensação de aconchego.","image_url":"https://pps.whatsapp.net/v/t61.24694-24/590765877_1822905548348481_8964014234627874223_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wF7_Svl26SJmiIbOLGRTdVj0HP5NEKGiQXYXXlh7a6DPQ&oe=6A4CDBCC&_nc_sid=5e03e0&_nc_cat=102"},{"name":"Porta joia personalizado","price":"BRL 59,90","description":"","image_url":"https://pps.whatsapp.net/v/t61.24694-24/328151155_752293739573915_1926561116355636063_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4wHr2RlE5LAqUc-OK93EsyUT7sGHVFvlRGCAipb20uYwrw&oe=6A4CEAFF&_nc_sid=5e03e0&_nc_cat=102"},{"name":"Bandeja retangular dourada com fundo espelhado","price":"BRL 179,90","description":"Tamanho- 24x12cm","image_url":"https://pps.whatsapp.net/v/t61.24694-24/328151155_752293739573915_1926561116355636063_n.jpg?ccb=11-4&oh=01_Q5Aa4wHrRi_GuXlfd9xK4fUpybPm-HVoWQkwp7v6KtbuCvkb0w&oe=6A4CEAFF&_nc_sid=5e03e0&_nc_cat=102"}];

function parsePrice(priceStr) {
    if (!priceStr) return 0;
    var cleaned = priceStr.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
}

function extractFragrance(name) {
    var lower = name.toLowerCase();
    if (lower.indexOf('blanc') !== -1) return 'Blanc';
    if (lower.indexOf("l'or") !== -1 || lower.indexOf('lor ') !== -1) return "L'or";
    if (lower.indexOf('rose') !== -1) return 'Rose';
    if (lower.indexOf('vanille') !== -1) return 'Vanille';
    if (lower.indexOf('bleu') !== -1) return 'Bleu';
    if (lower.indexOf('le vert') !== -1) return 'Le Vert';
    return null;
}

function getAccentColor(fragrance) {
    var c = { 'Blanc': '#b8a88a', "L'or": '#c9a96e', 'Rose': '#c07878', 'Vanille': '#c4a880', 'Bleu': '#7898b0', 'Le Vert': '#7aaa78' };
    return c[fragrance] || '#c9a96e';
}

function getInitials(name) {
    var words = name.split(/\s+/).filter(function(w) { return w.length > 1; });
    return words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : name.substring(0, 2).toUpperCase();
}

function addToCart(productName) {
    var existing = cart.find(function(i) { return i.name === productName; });
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name: productName, qty: 1 });
    }
    renderCart();
}

function removeFromCart(productName) {
    cart = cart.filter(function(i) { return i.name !== productName; });
    renderCart();
}

function changeQty(productName, delta) {
    var item = cart.find(function(i) { return i.name === productName; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productName);
    } else {
        renderCart();
    }
}

function buildWhatsAppMessage() {
    var lines = ['OlÃ¡! Gostaria de fazer o seguinte pedido:', ''];
    var total = 0;
    cart.forEach(function(item) {
        var product = PRODUCTS.find(function(p) { return p.name === item.name; });
        var price = product ? parsePrice(product.price) : 0;
        var subtotal = price * item.qty;
        total += subtotal;
        lines.push('- ' + item.name + ' (x' + item.qty + ')' + (price > 0 ? ' â€” ' + product.price : ''));
    });
    lines.push('');
    if (total > 0) {
        lines.push('Total estimado: R$ ' + total.toFixed(2).replace('.', ','));
    }
    return encodeURIComponent(lines.join('\n'));
}

function openWhatsApp() {
    if (cart.length === 0) return;
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + buildWhatsAppMessage(), '_blank');
}

function renderCart() {
    var panel = document.getElementById('cart-items');
    var badge = document.getElementById('cart-badge');
    var totalItems = cart.reduce(function(s, i) { return s + i.qty; }, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';

    if (cart.length === 0) {
        panel.innerHTML = '<p class="cart-empty">Seu carrinho estÃ¡ vazio</p>';
        return;
    }

    var html = '';
    cart.forEach(function(item) {
        var product = PRODUCTS.find(function(p) { return p.name === item.name; });
        var price = product ? parsePrice(product.price) : 0;
        var subtotal = price * item.qty;
        html += '<div class="cart-item">' +
            '<div class="cart-item-info">' +
            '<span class="cart-item-name">' + item.name + '</span>' +
            (price > 0 ? '<span class="cart-item-price">' + (product.price) + '</span>' : '') +
            '</div>' +
            '<div class="cart-item-controls">' +
            '<button class="cart-qty-btn" onclick="changeQty(\'' + item.name.replace(/'/g, "\\'") + '\', -1)">âˆ’</button>' +
            '<span class="cart-qty">' + item.qty + '</span>' +
            '<button class="cart-qty-btn" onclick="changeQty(\'' + item.name.replace(/'/g, "\\'") + '\', 1)">+</button>' +
            (subtotal > 0 ? '<span class="cart-item-subtotal">R$ ' + subtotal.toFixed(2).replace('.', ',') + '</span>' : '') +
            '<button class="cart-remove-btn" onclick="removeFromCart(\'' + item.name.replace(/'/g, "\\'") + '\')">âœ•</button>' +
            '</div></div>';
    });
    panel.innerHTML = html;
}

function createCartUI() {
    var fab = document.createElement('button');
    fab.className = 'cart-fab';
    fab.setAttribute('aria-label', 'Abrir carrinho');
    fab.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
        '<span class="cart-fab-badge" id="cart-badge" style="display:none">0</span>';
    document.body.appendChild(fab);

    var overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cart-overlay';
    document.body.appendChild(overlay);

    var panel = document.createElement('aside');
    panel.className = 'cart-panel';
    panel.id = 'cart-panel';
    panel.innerHTML = '<div class="cart-header">' +
        '<h2 class="cart-title">Meu Pedido</h2>' +
        '<button class="cart-close-btn" id="cart-close-btn" aria-label="Fechar carrinho">âœ•</button>' +
        '</div>' +
        '<div class="cart-items" id="cart-items"><p class="cart-empty">Seu carrinho estÃ¡ vazio</p></div>' +
        '<div class="cart-footer">' +
        '<button class="cart-send-btn" id="cart-send-btn" disabled>Enviar Pedido via WhatsApp</button>' +
        '</div>';
    document.body.appendChild(panel);

    fab.addEventListener('click', function() {
        panel.classList.add('open');
        overlay.classList.add('open');
        renderCart();
    });

    document.getElementById('cart-close-btn').addEventListener('click', function() {
        panel.classList.remove('open');
        overlay.classList.remove('open');
    });

    overlay.addEventListener('click', function() {
        panel.classList.remove('open');
        overlay.classList.remove('open');
    });

    document.getElementById('cart-send-btn').addEventListener('click', function() {
        if (cart.length > 0) openWhatsApp();
    });
}

function updateCartBtn() {
    var sendBtn = document.getElementById('cart-send-btn');
    if (sendBtn) {
        sendBtn.disabled = cart.length === 0;
    }
}

function createProductCard(product) {
    var card = document.createElement('article');
    card.className = 'product-card';
    var fragrance = extractFragrance(product.name);
    var accent = getAccentColor(fragrance);
    var desc = product.description ? product.description.replace(/\n/g, ' ').trim() : '';
    var numericPrice = parsePrice(product.price);
    var hasImage = product.image_url && product.image_url.indexOf('http') === 0;

    var fragTag = fragrance ? '<span class="product-fragrance-tag" style="border-color:' + accent + ';color:' + accent + '">' + fragrance + '</span>' : '';

    var mediaHtml;
    if (hasImage) {
        mediaHtml = '<div class="product-image-container"><img src="' + product.image_url + '" alt="" class="product-image" loading="lazy" crossorigin="anonymous" onerror="this.parentElement.classList.add(\'image-failed\')"><div class="product-image-placeholder"><span class="placeholder-letter" style="color:' + accent + '">' + getInitials(product.name) + '</span></div></div>';
    } else {
        mediaHtml = '<div class="product-image-container image-failed"><div class="product-image-placeholder"><span class="placeholder-letter" style="color:' + accent + '">' + getInitials(product.name) + '</span></div></div>';
    }

    var escapedName = product.name.replace(/'/g, "\\'");
    card.innerHTML = mediaHtml +
        '<div class="product-info">' +
        '<div class="product-tags">' + fragTag + '</div>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        (desc ? '<p class="product-description">' + desc + '</p>' : '') +
        (numericPrice > 0 ? '<p class="product-price">' + product.price + '</p>' : '') +
        '<button class="product-add-btn" onclick="addToCart(\'' + escapedName + '\')">Adicionar ao pedido</button>' +
        '</div>';
    return card;
}

function displayProducts() {
    var grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    PRODUCTS.forEach(function(p) {
        if (p.name.indexOf('Taxa de Entrega') === -1) {
            grid.appendChild(createProductCard(p));
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        }
    });
});

var header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    header.style.boxShadow = window.pageYOffset > 100 ? '0 2px 20px rgba(0,0,0,0.1)' : 'none';
});

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', function() {
    createCartUI();
    displayProducts();

    var animElements = document.querySelectorAll('.brand-content, .value-item, .benefit-item, .fragrance-note');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        animElements.forEach(function(el) { el.classList.add('visible'); });
    } else {
        animElements.forEach(function(el) { observer.observe(el); });
    }

    var heroVideo = document.querySelector('.hero-video');
    var heroSection = document.getElementById('hero');
    var rafId = 0;
    if (heroVideo && heroSection) {
        heroVideo.pause();
        var videoReady = false;
        heroVideo.addEventListener('loadedmetadata', function() { videoReady = true; });
        heroVideo.addEventListener('error', function() {
            heroVideo.style.display = 'none';
            document.querySelector('.hero-fallback').style.opacity = '1';
        });
        function updateVideo() {
            if (!videoReady || heroVideo.readyState < 1 || isNaN(heroVideo.duration)) return;
            var rect = heroSection.getBoundingClientRect();
            var scrollable = heroSection.offsetHeight - window.innerHeight;
            var progress = Math.max(0, Math.min(1, -rect.top / scrollable));
            var targetTime = progress * heroVideo.duration;
            if (Math.abs(targetTime - heroVideo.currentTime) > 1 / 24) {
                heroVideo.currentTime = targetTime;
            }
        }
        if (!prefersReducedMotion) {
            window.addEventListener('scroll', function() {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(updateVideo);
            }, { passive: true });
        } else {
            heroVideo.pause();
            heroVideo.currentTime = 0;
        }
    }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    });
});
