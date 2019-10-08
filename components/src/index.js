import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// components
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (

    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          avatar={faker.image.avatar()}
          timeAgo="Today at 4:00pm"
          content="Oi."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          avatar={faker.image.avatar()}
          timeAgo="Today at 6:30pm"
          content="Oi."
        />
      </ApprovalCard>  
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 1:00am"
          content="Oi."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));