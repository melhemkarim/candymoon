import { Col } from "react-bootstrap";

export const CategoriesCard = ({ title, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="categories-imgbx">
        <img src={imgUrl} />
        <div className="categories-txtx">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}