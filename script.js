const api_key = 'AIzaSyCLE5uq_NP8-fDT4QGwKIrfc6ad4136Rhc';


// let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Thor%20&key=${api_key}`;

let container = document.querySelector('.container')

let append = (data)=>{
    container.innerHTML = null;

    console.log(data);

    // {id:{videoId},snippet:{thumbnails,title}}
    
    data.forEach((ele)=>{

        let videoId = ele.id.videoId;
        let title = ele.snippet.title

        

        let div = document.createElement('div');
        div.setAttribute("class","video");
        div.onclick=()=>{
            saveVideo(ele);
        }

        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.style.border = "none";
        iframe.style.borderRadius = "10px";

        let h3 = document.createElement('h3');
        h3.innerText = title;
        h3.style.fontFamily = "sans-serif";
        h3.style.fontSize = "15px"

        div.append(iframe,h3)
        container.append(div);
    })
}

let saveVideo =(data)=>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href="video.html";
}

let search = async () =>{

    try {
        let query = document.getElementById('query').value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}%20&key=${api_key}`;
    
        console.log(query);
        
        let res = await fetch(url);
    
        let data = await res.json();
    
        append(data.items)
        
    } catch (error) {
        console.log(error);   
        
    }

    // return data.items;

    // console.log(data);   

}



/* <iframe width="560" height="315" src="https://www.youtube.com/embed/t5_LZd7c0xg?si=QXoDLIkbOY-NRxyk" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay;
 clipboard-write; encrypted-media; 
 gyroscope; picture-in-picture; web-share" 
 allowfullscreen>

 </iframe>

 */

// etag
// : 
// "s8OriEiSJjbLFuJm9n0sdVF1Yvo"
// id
// : 
// {kind: 'youtube#video', videoId: 'XvyaChJy1YU'}
// kind
// : 
// "youtube#searchResult"
// snippet
// : 
//          channelId
//          : 
//          "UCt6YDKnJjEUvoDWISjIHELA"
//          channelTitle
//          : 
//          "Sandaru R Edits"
//          description
//          : 
//          "thor #godofthunder #runekingthor #thorloveandthunder #thorragnarok #loki #marvel #avengers #mcu Follow TikTok- ..."
//          liveBroadcastContent
//          : 
//          "none"
//          publishTime
//          : 
//          "2022-08-20T04:57:59Z"
//          publishedAt
//          : 
//          "2022-08-20T04:57:59Z"
//          thumbnails
//          : 
//          default
//          : 
//          {url: 'https://i.ytimg.com/vi/XvyaChJy1YU/default.jpg', width: 120, height: 90}
//          high
//          : 
//          {url: 'https://i.ytimg.com/vi/XvyaChJy1YU/hqdefault.jpg', width: 480, height: 360}
//          medium
//          : 
//          {url: 'https://i.ytimg.com/vi/XvyaChJy1YU/mqdefault.jpg', width: 320, height: 180}
//          [[Prototype]]
//          : 
//          Object
//          title
//          : 
//          "THOR 😢 Just GOD Things #Marvel #Shorts"
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object
// 1
// : 
// {kind: 'youtube#searchResult', etag: 'IEzybKN