import './posts.css';
import Post from './post';

function Posts(){
  return(
    <ul className="posts">
      <Post img={'assets/post-img6.jpg'} author={'Chilli'} date={'2022.05.25'} category={['Life','style']} title={'Lorem, ipsum dolor sit amet consectetur adipisicing elit'} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem estfacilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate solutacorrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventoreillum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsumdolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilisdolor quas odio cum incidunt repudiandae vel."}/>
      <Post img={'assets/post-img5.jpg'} author={'Chilli'} date={'2022.05.25'} category={['Life','style']}/>
      <Post img={'assets/post-img4.jpg'} author={'Chilli'} date={'2022.05.25'} category={['Life','style']}/>
      <Post img={'assets/post-img3.jpg'} author={'Chilli'} date={'2022.05.25'} category={['Life','style']}/>
      <Post img={'assets/post-img2.jpg'} author={'Chilli'} date={'2022.05.25'} category={['Life','style']}/>
      <Post img={'assets/post-img1.jpg'} author={'Chilli'} date={'2022.05.25'} category={['Life','style']}/>
    </ul>
  );
}

export default Posts;