export const getGifs= async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TfaExu84r3N0WB35npJKVPiixnep1WJB&q=${ category }&limit=10`
    const resp = await fetch( url )
    const {data} = await resp.json()
    const gifs = data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs
  }