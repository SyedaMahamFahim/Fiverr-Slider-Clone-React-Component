import './App.css';
import {AllMultiSelection, Header,SortRelevance,CourseSlider} from './container/index'
function App() {
  return (
    <>
    <div className="container">
        <div className="row">
        <Header/>
        <AllMultiSelection/>
         <SortRelevance/>
         <CourseSlider secTitle={"Continue Learning"}/>
         <CourseSlider secTitle={"Selected for you"}/>
        </div>
      </div>
    </>
  );
}

export default App;
