import './postPage.css';
import PostWrap from '../components/PostWrap/PostWrap';
import { useParams } from 'react-router-dom';

function PostPage({data, navigate}){
  let {id} = useParams();
  let postData = data.posts.filter((item)=> item.id === parseInt(id)).pop();
  const changeDate = () => {
    let date = (new Date(postData.created.split('.').join('-'))).toString();
    let [month,day,numDay] = [date.slice(4,7), date.slice(0,3), date.slice(8,10)];
    let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let year = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const dayFull = week.filter((item)=>item.indexOf(day)!==-1).pop();
    const monthFull = year.filter((item)=>item.indexOf(month)!==-1).pop();
    return [monthFull, dayFull, numDay];
  }
  let [monthFull, dayFull, numDay] = changeDate();
  return(
    <>
      <div className="banner" style={{ backgroundImage: `url(${postData.mainBg})`}}>
        <div className="max-width">
          <div className="banner-contents">
            <p className="today">{monthFull} <em>{numDay}</em> {dayFull}</p>
          </div>
        </div>
      </div>
      <div className="view">
        <div className="max-width">
          <PostWrap postData={postData} navigate={navigate}/>
        </div>
      </div>
    </>
  );
}

export default PostPage; 