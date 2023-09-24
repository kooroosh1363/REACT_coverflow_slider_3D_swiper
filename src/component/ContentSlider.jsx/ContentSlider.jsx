import './Content.css';



export const ContentSlider = (props) => {
    const {title, description, image, alt} = props
    return (
        <div className="card_post">
            <div className="card">
                <img src={image} alt={alt} className="img-fluid" />
                <div className="body_card">
                    <h6 className="title_card">{title}</h6>
                    <div className="text_card">{description}</div>

                    <div className="group_btn">
                        <a href="/" className="custom_btn">Add to Card</a>
                        <a href="/" className="custom_btn">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}