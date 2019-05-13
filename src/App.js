import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { EOPNOTSUPP } from 'constants';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
        </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                  
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 23:00AM"
                    content="I like the subject"
                  
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 22:00PM"
                    content="I like the writing"
                 
                />
            </ApprovalCard>
        </div>
    );
};

export default App;