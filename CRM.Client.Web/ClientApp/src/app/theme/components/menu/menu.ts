import { Menu } from './menu.model';

// menu theo chiều ngang
export const horizontalMenuItems = [ 
    new Menu (2, 'Trang chủ', '/home', null, null, false, null, 0),
    new Menu (1, 'Sản phẩm mới', '/product', null, null, false, 'newProduct', 0),
    new Menu (2, 'Top bán chạy', '/product', null, null, false,'bestSeller', 0), 
    new Menu (60, 'Khuyến mại hot', '/product', null, null, false, 'hotSale', 0),   
    new Menu (70, 'Tin tức', '/news', null, null, false, null, 0),   
    new Menu (140, 'Liên hệ', '/contact', null, null, false, null, 0),
]
