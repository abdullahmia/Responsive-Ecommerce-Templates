var cart_item_count = 0;
function increse_cart(value_id) {
    cart_item_count += 1;
    document.getElementById(value_id).innerHTML = cart_item_count;
};


function decrese_cart(value_id) {
    if (cart_item_count == 0) {
        cart_item_count = 0;
    } else {
        cart_item_count -= 1;    
    }
    document.getElementById(value_id).innerHTML = cart_item_count;
};
