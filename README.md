## Comments App. Test Task for Pics.io
The test task, including the design and functionality, was implemented according to the technical requirements provided by Pics.io company.

![CommentApp](https://github.com/localBox0/pics.io-test/assets/87381764/9bcb209d-8a64-41a3-ad34-e31a230ce31e)


### Description:

This ReactJS application allows users to interact with a comment system. Users can view a list of comments, add new comments, and delete existing comments. The application also integrates with a comment API to fetch and display comments from an external source.

### Technologies used:

- ReactJS
- Axios
- Material-UI

### Key Features:

- Comment List: Users can view a list of comments fetched from the comment API. Each comment includes the username and comment body.
- Comment Form: Users can enter a new comment in the comment form. The entered comment is stored in the local state and can be submitted.
- Comment Submission: When the comment form is submitted, a new comment object is created with a unique ID, a default username, and the entered comment body. The new comment is added to the existing comments list.
- Comment Deletion: Users can delete comments by clicking the close icon next to each comment. The corresponding comment is removed from the comments list.
