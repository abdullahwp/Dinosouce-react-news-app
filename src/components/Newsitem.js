import React from 'react'

const Newsitem = (props)=> {

    let {title, description, imgUrl, url, date} = props;
    return (
      <div className="new_item">
        <img src={!imgUrl?"https://images.macrumors.com/t/9uJqMj4VFJjMbPcQi5cTqaPUB18=/2500x/article-new/2021/01/Apple-Glasses-Triad-Feature.jpg":imgUrl} alt={title} />
        <div className="itemcontent">
            <h3>{title}</h3>
            <span>{new Date(date).toGMTString()}</span>
            <p>{description}</p>
            <a href={url}>Read More</a>
        </div>
      </div>
    )

}

export default Newsitem