import bgVideo from 'assets/red_vid_1739874526.mp4';

function VideoComponent() {
    return (
        <>
            <video
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={bgVideo} type="video/mp4" />
                Твой браузер не поддерживает видео тег.
            </video>
            <div className="overlay"></div>
        </>
    );
}

export default VideoComponent;
