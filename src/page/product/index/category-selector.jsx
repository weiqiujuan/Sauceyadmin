import React from 'react';
import Mutil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'
import './category-selector.scss'

const mm = new Mutil();
const product = new Product();


class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryList: [],
            firstCategoryId: 0,
            secondCategoryList: [],
            secondCategoryId: 0
        }
    }

    componentDidMount() {
        this.loadFirstCategory();
    }

    //props变化的时候触发，商品编辑的时候信息回填
    componentWillReceiveProps(nextProps) {
        let categoryIdChange = this.props.categoryId !== nextProps.categoryId;
        let parentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;
        //数据没有发生变化的时候，直接不做处理
        if (!categoryIdChange && !parentCategoryIdChange) {
            return;
        }
        //只有一级品类
        if (nextProps.parentCategoryId === 0) {
            this.setState({
                firstCategoryId: nextProps.categoryId,
                secondCategoryId: 0
            })
        }
        //两级品类均有
        else {
            this.setState({
                firstCategoryId: nextProps.parentCategoryId,
                secondCategoryId: nextProps.categoryId
            }, () => {
                parentCategoryIdChange && this.loadSecondCategory();
            })
        }
    }

    //加载一级分类
    loadFirstCategory() {
        product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList: res
            })
        }, err => {
            mm.errorTips(err)
        })
    }

    //加载二级分类
    loadSecondCategory() {
        product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList: res
            })
        }, err => {
            mm.errorTips(err)
        })
    }

    //一级品类
    onFirstCategoryChange(e) {
        if (this.props.readOnly) {
            return;
        }
        let newValue = e.target.value || 0;
        this.setState({
            firstCategoryId: newValue,
            secondCategoryId: 0,
            secondCategoryList: []
        }, () => {
            //更新二级品类
            this.loadSecondCategory();
            this.onPropsCategoryChange();
        })
    }

    //二级品类
    onSecondCategoryChange(e) {
        if (this.props.readOnly) {
            return;
        }
        let newValue = e.target.value || 0;
        this.setState({
            secondCategoryId: newValue
        }, () => {
            this.onPropsCategoryChange();
        })
    }

    //传给父组件选中的结果
    onPropsCategoryChange() {
        //如果props中有回调函数
        let categoryChangeable = typeof this.props.onCategoryChange === 'function';
        // 如果是有二级品类
        if (this.state.secondCategoryId) {
            categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId);
        }
        // 如果只有一级品类
        else {
            categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId, 0);
        }
    }

    render() {
        return (
            <div className="col-md-10">
                <select className="form-control cate-select"
                        value={this.state.firstCategoryId}
                        onChange={e => {
                            this.onFirstCategoryChange(e)
                        }}
                        readOnly={this.props.readOnly}>
                    <option value="">请选择一级分类</option>
                    {
                        this.state.firstCategoryList.map(
                            (category, index) => <option value={category.id} key={index}>{category.name}</option>
                        )
                    }
                </select>
                {
                    this.state.secondCategoryList.length ?
                        <select className="form-control cate-select"
                                value={this.state.secondCategoryId}
                                onChange={e => {
                                    this.onSecondCategoryChange(e)
                                }}
                                readOnly={this.props.readOnly}
                        >
                            <option value="">请选择二级分类</option>
                            {
                                this.state.secondCategoryList.map(
                                    (category, index) =>
                                        <option value={category.id} key={index}>{category.name}
                                        </option>
                                )
                            }
                        </select> : null
                }
            </div>
        )
    }
}

export default CategorySelector;