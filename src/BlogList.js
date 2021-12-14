const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    const onDeleteClick = props.onDeleteClick

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <br />
                    <button onClick={() => onDeleteClick(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;