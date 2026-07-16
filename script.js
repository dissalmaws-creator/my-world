*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",Arial,sans-serif;
}


body{

min-height:100vh;
background:
radial-gradient(circle at 20% 20%,#263b7a,transparent 30%),
radial-gradient(circle at 80% 10%,#6425a8,transparent 35%),
linear-gradient(135deg,#020617,#080b20,#000);

color:white;
overflow-x:hidden;

}



/* moving stars */

.stars{

position:fixed;
width:100%;
height:100%;
background-image:
radial-gradient(white 1px,transparent 1px),
radial-gradient(#8ab4ff 1px,transparent 1px);

background-size:
80px 80px,
120px 120px;

animation:moveStars 25s linear infinite;

opacity:.25;

z-index:-1;

}


@keyframes moveStars{

from{
transform:translateY(0);
}

to{
transform:translateY(-200px);
}

}





/* navbar */


.navbar{

width:100%;
padding:20px 40px;

display:flex;
justify-content:space-between;
align-items:center;

background:rgba(255,255,255,.07);

backdrop-filter:blur(20px);

border-bottom:1px solid rgba(255,255,255,.15);

position:sticky;
top:0;

z-index:10;

}



.logo{

font-size:28px;
font-weight:700;

letter-spacing:2px;

}




.language-box select{

background:rgba(255,255,255,.12);

color:white;

border:none;

padding:12px;

border-radius:15px;

}



.language-box option{

color:black;

}




/* main */


main{

width:90%;

max-width:900px;

margin:auto;

text-align:center;

}





.hero{

padding-top:70px;

}




.hero h1{

font-size:45px;

line-height:1.3;

}




.subtitle{

margin:20px;

font-size:20px;

color:#cbd5ff;

}





/* counter */


.counter-box,
.wallet-card{


background:
rgba(255,255,255,.10);

backdrop-filter:blur(20px);

border-radius:30px;

padding:35px;

margin:30px auto;

border:1px solid rgba(255,255,255,.15);

box-shadow:
0 20px 60px rgba(0,0,0,.35);

}




#counter{

font-size:55px;

font-weight:bold;

margin:20px;

color:#62ffda;

}





.wallet-card p{

color:#ff5555;

font-weight:bold;

font-size:18px;

word-break:break-all;

margin:20px;

}




.wallet-card button{

padding:15px 30px;

border:none;

border-radius:30px;

background:#ffffff;

color:#111;

font-weight:bold;

cursor:pointer;

}




.network{

margin-top:20px;

color:#64ff8b;

font-size:22px;

}





/* story */


.story-card{


max-width:600px;

aspect-ratio:1/1;

margin:70px auto;


display:flex;

align-items:center;

justify-content:center;


padding:45px;


background:

linear-gradient(

145deg,

rgba(160,190,255,.25),

rgba(255,255,255,.08)

);


border-radius:40px;


border:1px solid rgba(255,255,255,.2);


box-shadow:

0 30px 80px rgba(0,0,0,.4);

}




.story-card p{

font-size:18px;

line-height:2;

}





/* crypto icons */


.crypto-icons{

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

margin:50px;


}


.crypto-icons div{

width:80px;

height:80px;

border-radius:50%;


display:flex;

justify-content:center;

align-items:center;


background:rgba(255,255,255,.1);


font-size:25px;


animation:float 4s infinite ease-in-out;


}



@keyframes float{

50%{

transform:translateY(-20px);

}

}




/* comments */


.comments{

margin:70px auto;

}




.comment-form{

display:flex;

flex-direction:column;

gap:15px;

}



input,textarea{

padding:15px;

border-radius:15px;

border:none;

font-size:16px;

}



textarea{

height:120px;

}



.comment-form button{

padding:15px;

border-radius:20px;

border:none;

background:#62ffda;

font-weight:bold;

}





footer{

text-align:center;

padding:50px;

}


footer h2{

font-size:35px;

background:linear-gradient(90deg,#62ffda,#fff);

-webkit-background-clip:text;

color:transparent;

}




/* mobile */


@media(max-width:600px){


.navbar{

padding:15px;

}


.logo{

font-size:20px;

}


.hero h1{

font-size:30px;

}


#counter{

font-size:40px;

}



.story-card{

aspect-ratio:auto;

padding:30px;

}


.story-card p{

font-size:15px;

}



}
