import React, {useState, useEffect} from 'react';
import CommentList from "./components/CommentList/CommentList";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentAPI from "./components/api/CommentAPI";
import './App.css';

const App = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const savedComment = localStorage.getItem('newComment');
        if (savedComment) {
            setNewComment(savedComment);
        }
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setNewComment(value);
        localStorage.setItem('newComment', value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCommentObj = {id: Date.now(), user: {username: 'New User'}, body: newComment};
        setComments(prevComments => [...prevComments, newCommentObj]);
        setNewComment('');
        localStorage.removeItem('newComment');
    };


    const handleDelete = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    };

    return (
        <div className="app-container">
            <CommentAPI setComments={setComments}/>
            <CommentList comments={comments} handleDelete={handleDelete}/>
            <CommentForm
                newComment={newComment}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default App;
