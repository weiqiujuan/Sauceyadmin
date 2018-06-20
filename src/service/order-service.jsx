import Mutil from 'util/mm.jsx'

const mm = new Mutil();

class Order {
    //商品列表
    getOrderList(listParam) {
        let url = '',
            data = {};

        if (listParam.listType === 'list') {
            url = '/manage/order/list.do';
            data.pageNum = listParam.pageNum;
        } else if (listParam.listType === 'search') {
            url = '/manage/order/search.do';
            data.pageNum = listParam.pageNum;
            data.orderNo = listParam.orderNo;
        }
        return mm.request({
            type: 'post',
            url: url,
            data: data
        })
    }

    //获取商品详情
    getOrderDetail(orderNumber) {
        return mm.request({
            type: 'post',
            url: '/manage/order/detail.do',
            data: {
                orderNo: orderNumber
            }

        })
    }


}

export default Order;