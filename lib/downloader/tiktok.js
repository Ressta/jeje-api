const axios=require("axios"),cheerio=require("cheerio"),clean=e=>(e=e.replace(/(<br?\s?\/>)/gi," \n")).replace(/(<([^>]+)>)/gi,"");async function shortener(e){return e}module.exports=async function(e){let t=await axios("https://lovetik.com/api/ajax/search",{method:"POST",data:new URLSearchParams(Object.entries({query:e}))});return result={},result.creator="Jeje",result.title=clean(t.data.desc),result.author=clean(t.data.author),result.nowm=await shortener((t.data.links[0].a||"").replace("https","http")),result.watermark=await shortener((t.data.links[1].a||"").replace("https","http")),result.audio=await shortener((t.data.links[2].a||"").replace("https","http")),result.thumbnail=await shortener(t.data.cover),result}.bind();