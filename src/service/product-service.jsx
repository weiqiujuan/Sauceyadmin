import Mutil from 'util/mm.jsx'

const mm = new Mutil();

class Product {
    getProductList(listParam) {
        let url = '',
            data = {};

        if (listParam.listType === 'list') {
            url = '/manage/product/list.do';
            data.pageNum = listParam.pageNum;
        } else if (listParam.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum = listParam.pageNum;
            data[listParam.searchType] = listParam.keyword;
        }
        return mm.request({
            type: 'post',
            url: url,
            data: data
        })
    }

    setProductList(productId) {
        return mm.request({
            type: 'post',
            url: '/manage/product/set_sale_status.do',
            data: {
                productId: productId || 0
            }
        })
    }

    //品类相关
    getCategoryList(parentCategoryId){
        return mm.request({
            type    : 'post',
            url     : '/manage/category/get_category.do',
            data    : {
                categoryId : parentCategoryId || 0
            }
        })
    }
}

export default Product;