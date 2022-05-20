import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => { // Redux store.articles 복사하여 props로 설정
    return {
        articles: state.articles
    }
}

const List = ({ articles }) => { // 복사된 aricles props를 사용
    return (
        <ul className="list-group list-group-flush">
            {articles.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))}
        </ul>
    );
};

export default connect(mapStateToProps)(List);