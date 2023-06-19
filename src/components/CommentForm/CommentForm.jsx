import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {styled} from '@mui/material/styles';

const CommentTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});

const CommentForm = ({newComment, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="center" maxWidth={720} margin="0 auto" paddingBottom="50px">
                <CommentTextField
                    label="Type here..."
                    variant="outlined"
                    value={newComment}
                    onChange={handleChange}
                    fullWidth
                    multiline
                />
                <Button type="submit" variant="contained" color="primary" style={{marginLeft: '8px'}}>
                    Send
                </Button>
            </Box>
        </form>
    );
};

export default CommentForm;


