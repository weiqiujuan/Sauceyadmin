import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css'

class PaginationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='row'>
                <div className="col-row-12">
                    <RcPagination
                        {...this.props}
                        hideOnSinglePage
                        showQuickJumper
                    />
                </div>
            </div>
        );
    }
}

export default PaginationPage;