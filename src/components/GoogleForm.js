export default function GForm(params){
    return(
        <iframe
            title={params.title}
            src = {params.link}
            frameBorder= "0"
            marginHeight= "0"
            marginWidth= "0"
            className={params.classes}
        >
                Fetching the form...
        </iframe>
    );
}