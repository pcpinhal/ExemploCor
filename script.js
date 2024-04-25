//USANDO JQUERY
function pref(x)
{
    var h3 = $('h3');
    var par1 = $('.paragrafo1');
    var par2 = $('.paragrafo2');
    var article = $('article');
    var body = $('body');

    if(x == '1')
    {
        h3.css("color","blue");
    }
    if(x == '2')
    {
        par1.css("color","red");
    }
    if(x == '3')
    {
        par2.css("color","green");
    }
    if(x == '4')
    {
        article.css("background-color","black");
    }
}

//USANDO JAVASCRIPT
function preferencia(x)
{
    par2 = document.getElementsByClassName("paragrafo2");
    article = document.getElementsByTagName("article");
    h3 = document.getElementsByTagName("h3");
    if(x == '1')
    {
        document.getElementById('paragrafo1').style.color = "yellow";
    }
    if(x == '2')
    {        
        // par2[0].style.backgroundColor = "red"; // posição Zero
        for (i = 0; i < par2.length; i++) {  //todos os elementos par2
            par2[i].style.backgroundColor = "red";
        }        
    }
    if(x == '3')
    {                
        //article[0].style.backgroundColor = "green"; // para 1 tag
        for (i = 0; i < article.length; i++) {  //para todas tags
            article[i].style.backgroundColor = "green";
        }
    }
    if(x == '4')
    {                
        h3[0].style.color = "blue";
        h3[1].style.color = "blue";
    }    
}