import Mutil from 'util/mm.jsx'

const mm = new Mutil();

class Product {
    //商品列表
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

//获取商品详情
    getProduct(productId) {
        return mm.request({
            type: 'post',
            url: '/manage/product/detail.do',
            data: {
                productId: productId || 0
            }

        })
    }

    //上下架的改变
    onSetProductStatus(productInfo) {
        return mm.request({
            type: 'post',
            url: '/manage/product/set_sale_status.do',
            data: productInfo

        })
    }

    //品类相关
    getCategoryList(parentCategoryId) {
        return mm.request({
            type: 'post',
            url: '/manage/category/get_category.do',
            data: {
                categoryId: parentCategoryId || 0
            }
        })
    }

    //保存商品表单验证
    checkProduct(product) {
        let result = {
            status: true,
            msg: '验证通过'
        };
        if (typeof  product.name !== 'string' || product.name.length === 0) {
            return {
                status: false,
                msg: '商品名称不能为空！'
            }
        }
        if (typeof  product.subtitle !== 'string' || product.subtitle.length === 0) {
            return {
                status: false,
                msg: '商品描述不能为空！'
            }
        }
        if (typeof  product.categoryId !== 'number' || product.categoryId < 0) {
            return {
                status: false,
                msg: '请选择商品品类！'
            }
        }
        if (typeof  product.price !== 'number' || product.price < 0) {
            return {
                status: false,
                msg: '请输入正确的商品价格！'
            }
        }
        if (typeof  product.stock !== 'number' || product.stock < 0) {
            return {
                status: false,
                msg: '请输入正确的库存数量！'
            }
        }

        return result;
    }

    //保存商品
    saveProduct(product) {
        return mm.request({
            type: 'post',
            url: '/manage/product/save.do',
            data: product

        })
    }
}

export default Product;