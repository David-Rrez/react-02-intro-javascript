
const getImagePromise = async () => {
    try {
        const apiKey = 'VYMuqQqSBIj6uhpPJPma9HlkDjR1gSF7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        
         const {url} = data.images.original;
         const img = document.createElement('img');
         img.src = url;
         document.body.append(img);
    } catch (error) {
        
    }
    // console.log(data)
}
getImagePromise();