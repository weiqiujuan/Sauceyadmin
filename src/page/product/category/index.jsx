import React from 'react';
import {Link} from 'react-router-dom'
import Mutil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/table-list.jsx';

const mm = new Mutil();
const product = new Product();

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            parentCategoryId: this.props.match.params.categoryId || 0
        }
    }

    componentDidMount() {
        this.loadCategoryList();
    }

    componentDidUpdate(prevProps) {
        let oldPath = prevProps.location.pathname;
        let newPath = this.props.location.pathname;
        let newId = this.props.match.params.categoryId || 0;

        if (oldPath !== newPath) {
            this.setState({
                parentCategoryId: newId
            }, () => {
                this.loadCategoryList();
            })
        }
    }

    loadCategoryList() {
        product.getCategoryList(this.state.parentCategoryId).then(res => {
            this.setState({
                list: res
            });
        }, err => {
            this.setState({
                list: []
            });
            mm.errorTips(err)
        });
    }

    onUpdateName(categoryId, categoryName) {
        let newName = window.prompt('请输入新的品类名称', categoryName);
        if (newName) {
            product.updateCategoryName({
                categoryId: categoryId,
                categoryName: newName
            }).then(res => {
                mm.successTips(res);
                this.loadCategoryList();
            }, err => {
                mm.errorTips(err);
            })
        }
    }

    render() {
        let listbody = this.state.list.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                        <a href="" className='opear'
                           onClick={() => {
                               this.onUpdateName(category.id, category.name);
                           }}>修改名称</a>
                        {
                            category.parentId === 0
                                ? <Link to={`/product-category/index/${category.id}`}>查看子品类</Link>
                                : null
                        }
                    </td>
                </tr>
            )
        });
        return (
            <div id="page-wrapper">
                <PageTitle title='品类列表'>
                    <div className="page-header-right">
                        <Link to="/product-category/add" className="btn btn-primary">
                            <i className="fa fa-plus"></i>
                            <span>添加品类</span>
                        </Link>
                    </div>
                </PageTitle>
                <div className='row'>
                    <div className="col-md-12">
                        <p>父品类ID:{this.state.categoryId}</p>
                    </div>
                </div>
                <TableList tableHeads={['品类ID', '品类名称', '操作']}>
                    {listbody}
                </TableList>

            </div>
        );
    }
}

export default CategoryList;