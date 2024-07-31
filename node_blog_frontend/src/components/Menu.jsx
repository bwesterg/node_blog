import React from 'react'

const Menu = () => {

  const posts = [
    {
      id: 1,
      title: "something number 1",
      desc: "kjkdfjkldjfkljlksj",
      img: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg"
    },
    {
      id: 2,
      title: "This is a long testing title for a blog post about a very important subject.",
      desc: "kjkdfjkldjfkljlksj asdfkja;sdlkfj a I am really borded and this is some text to help flesh out the flexbox which is set to 2 for content and also 1 for the picure up above.",
      img: "https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg"
    },
    {
      id: 3,
      title: "something number 3",
      desc: "kjkdfjkldjfkljlksj",
      img: "https://cdn.britannica.com/72/11472-050-B9734C89/Bear-Hat-Mountain-Hidden-Lake-Montana-Glacier.jpg"
    },
    {
      id: 4,
      title: "something number 4",
      desc: "kjkdfjkldjfkljlksj",
      img: "https://photopxl.com/pxl-content/uploads/2019/06/1.-Title-Image-22Western-Mountain-Landscape-Photography22.jpg"
    },
    {
      id: 5,
      title: "something number 5",
      desc: "kjkdfjkldjfkljlksj",
      img: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?cs=srgb&dl=pexels-eberhardgross-1670187.jpg&fm=jpg"
    },
    {
      id: 6,
      title: "something number 6",
      desc: "kjkdfjkldjfkljlksj",
      img: "https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/06/matterhorn-BLOG-mountains.png"
    },
  ]; 

  return (
    <div className="menu">
      <h2>Other posts you may like</h2>
      {posts.map((post)=>(
        <div className="post" key={post.id}>
          <img src={post.img} alt={`Image for post ${post.title}`}/>
          <h3>{post.title}</h3>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
