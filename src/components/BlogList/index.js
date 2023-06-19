// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="blog-list-container">
      <BlogItem blogDetail={blogDetails} />
    </ul>
  )
}

export default BlogList
