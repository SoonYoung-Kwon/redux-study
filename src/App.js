// store.getState() store 안 state get
// store.subscript(() => alert('subcript')) store 안 state 변경 감지 시 callback
// store.dispatch(addArticle({ title : 'Redux', id : 1 })) addArticle action 발생 state 변경

// mapStateToProps > Redux state를 React props와 연결
// mapDispatchToProps > Redux action을 React props와 연결

import React from 'react';
import List from './js/components/List'
import Form from './js/components/Form';

const App = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
};

export default App;