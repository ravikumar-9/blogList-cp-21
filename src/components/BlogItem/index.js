// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetail} = props

  const {title, description, publishedDate} = blogDetail
  return (
    <li className="blog-item">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="horizontal-line" />
    </li>
  )
}

export default BlogItem
