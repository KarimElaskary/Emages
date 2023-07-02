function ImageShow({ image }){

    const downloadFullSize = () => {
        window.open(image.urls.full)
    }

    return(
        <div>
            <img src={image.urls.small} alt={image.alt_description} onClick={downloadFullSize}/>
        </div>
    )
}

export default ImageShow