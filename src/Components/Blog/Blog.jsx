import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time, post_date, hashtags } = blog

    return (
        <div>
            <img src={cover} alt={`Cover pictures of the title ${title}`} />

            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-1/3 rounded-md' src={author_img} alt="" />

                    <div className='ml-6'>
                        <h3 className="txt-2xl">
                            {author}
                        </h3>
                        <p>
                            {post_date}
                        </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                </div>
            </div>

            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => 
                    <span key={idx}>
                        <a href="#">#</a>
                    </span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
};
export default Blog;