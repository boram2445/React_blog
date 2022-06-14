import Banner from '../components/Banner/Banner';
import Main from '../components/Main/Main';

function Home({data}){
  return(
  <div>
    <Banner blogData={data.blog}/>
    <Main postData={data.posts} userData={data.users}/>
  </div>
  );
}

export default Home; 