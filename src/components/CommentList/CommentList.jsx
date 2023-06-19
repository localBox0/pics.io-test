import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';

const CommentList = ({comments, handleDelete}) => {
    return (
        <div>
            {comments.map(comment => (
                <Box
                    key={comment.id}
                    display="flex"
                    alignItems="flex-start"
                    p={2}
                    bgcolor="#FFE5CC"
                    borderRadius={3}
                    maxWidth={720}
                    margin="25px auto 25px auto"
                >
                    <Avatar style={{backgroundColor: 'orange'}}>
                        {comment.user?.username.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box ml={2}>
                        <Typography variant="h6" component="span" style={{fontWeight: 'bold'}}>
                            {comment.user?.username.toUpperCase()}
                        </Typography>
                        <Typography variant="body1" component="p" style={{marginTop: '10px'}}>
                            {comment.body}
                        </Typography>
                    </Box>
                    <Box ml="auto">
                        <CloseIcon onClick={() => handleDelete(comment.id)} style={{cursor: 'pointer'}}/>
                    </Box>
                </Box>
            ))}
        </div>
    );
};

export default CommentList;
