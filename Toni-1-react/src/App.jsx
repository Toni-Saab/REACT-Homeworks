import ImageComponent from 'components/ImageComponent';
import VideoComponent from 'components/VideoComponent';
import ParagraphsComponent from 'components/ParagraphsComponent';
import ListsComponent from 'components/ListsComponent';

function App() {
    return (
        <div className="App">
            <VideoComponent />
            <div className="content">
                <h1>БУ, ИСПУГАЛСЯ?</h1>
                <ImageComponent />
                    <ParagraphsComponent />
                <ListsComponent />
            </div>
        </div>
    );
}

export default App;
