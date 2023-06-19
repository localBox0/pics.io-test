import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';

const CommentAPI = ({ setComments }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/comments')
            .then(response => {
                const firstSevenComments = response.data.comments.slice(0, 6);
                setComments(firstSevenComments);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
                setLoading(false);
            });
    }, [setComments]);

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress color="inherit" />
            </Box>
        );
    }

    return null;
};

export default CommentAPI;



