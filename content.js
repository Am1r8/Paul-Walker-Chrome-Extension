let paul_img = [
    "https://m.media-amazon.com/images/M/MV5BMjIwODc0OTk2Nl5BMl5BanBnXkFtZTcwOTQ5MDA0Mg@@._V1_UY1200_CR82,0,630,1200_AL_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/91/PaulWalkerEdit-1.jpg",
    "https://static.onecms.io/wp-content/uploads/sites/20/2021/06/25/paul-walker.jpg",
    "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwOTEwMjE3NzQy/paul-walker-21044993-1-402.jpg",
    "https://cdn.motor1.com/images/mgl/QyprZ/s1/daughter-of-paul-walker-suing-porsche-over-his-death.jpg",
    "https://www.gannett-cdn.com/presto/2018/11/30/USAT/90b536b7-dd4c-42a3-bf31-7d25dc636165-PAUL_WALKER.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/kL29MFiN7kf3VN3Rbi18s38HXMY/186x52:2258x2124/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/08/705/n/1922398/1c0039b55e8df427cd8537.59120730_/i/Paul-Walker.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_03/1529608/paul-walker-wal-mart-today-main-200117.jpg",
    "https://img.cinemablend.com/filter:scale/quill/7/3/9/6/6/7/7396672b4a183f9d5c33f305d4fa2f630138d165.jpg?mw=600",
    "https://img.cinemablend.com/filter:scale/quill/a/0/3/d/1/9/a03d19e10adb594264d309cbda8d97660e1da748.jpg?mw=600",
    "https://media1.popsugar-assets.com/files/thumbor/L4PizNt5_zpnE3mTiwQzCvVzmWA/1053x0:3000x1947/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2021/06/25/762/n/1922283/712a49fc60d60fa81a6051.90994882_/i/how-is-paul-walker-honored-in-f9-fast-saga.jpg",
    "https://images.indianexpress.com/2020/09/paul-walker-1200.jpg",
    "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F692b0da05b627c3353f66cd054e9d14a.png",
    "https://i.ndtvimg.com/mt/movies/2013-12/paul-walker2.jpg",
    "https://akns-images.eonline.com/eol_images/Entire_Site/2017811/rs_600x600-170911151000-600-paul-walker-ff-2.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "https://assets.vogue.com/photos/5b5a2d9e92e9350c5ae165bf/4:3/w_936,h_702,c_limit/00-promo-paul-walker-documentary.jpg",
    "https://www.wonderwall.com/wp-content/uploads/sites/2/2019/09/1061934-paul-walker.jpg?h=800",
    "https://static.wikia.nocookie.net/die-hard-scenario/images/7/7f/DHS-_Paul_Walker.jpg/revision/latest?cb=20150606195121",
    "https://cdn.digg.com/images/91fbc6d415a24c9cb25d57f55045f5fb_6658d61addd4431baf082464af80d7f0_header.jpeg",
    "https://us.hola.com/images/0266-119065645e58-1820ba67dba3-1000/horizontal-480/vin-diesel-and-paul-walker-in-39-the-fast-and-the-furious-39-.jpg"
]



const imgs =  document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++){
    const randomImgs = Math.floor(Math.random() * paul_img.length)
    imgs[i].src = paul_img[randomImgs]
}

const alinks =  document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")
for (let i = 0; i < alinks.length; i++){
    alinks[i].innerText = "Paul Walker"
}



const video_tittle =  document.getElementsByTagName("yt-formatted-string")
for (let i = 0; i < video_tittle.length; i++){
    video_tittle[i].innerText = "Paul Walker"
}

const span =  document.getElementsByTagName("span")
for (let i = 0; i < span.length; i++){
    span[i].innerText = "Paul Walker"
}

const h1 =  document.getElementsByTagName("h1")
for (let i = 0; i < h1.length; i++){
    h1[i].innerText = "Paul Walker"
}
const h2 =  document.getElementsByTagName("h2")
for (let i = 0; i < h2.length; i++){
    h2[i].innerText = "Paul Walker"
}
const h3 =  document.getElementsByTagName("h3")
for (let i = 0; i < h3.length; i++){
    h3[i].innerText = "Paul Walker"
}
const p =  document.getElementsByTagName("p")
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Paul Walker"
}