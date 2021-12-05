/*
In feed section, there will be posts, identified by the string 'feed_post_(postId)'.
Inside a post there is a section for comments, where comments are appended.
A comment is identified by the string 'feed_post_comment_(commentId)'.
Comments have a pointer to tell which post they belong to.
Inside comments there is a section for replies, where they are appended.
Replies do not have identification, but class. The replies.json file have a pointer
to identify the comment they are pointing to.
*/

var comments =  [
                    {
                        feed_id: 0,
                        comment_id: 0,
                        usr: "jose",
                        date: "5/12/2021",
                        text: "Nice trip bro",
                        likes: 0
                    },
                    {
                        feed_id: 0,
                        comment_id: 1,
                        usr: "hasbulla",
                        date: "5/12/2021",
                        text: "Da menschen vodka!",
                        likes: 0
                    }
                ];
var feed =      [
                    {
                        id: 0,
                        src: "https://services.meteored.com/img/article/en-saturno-llueven-diamantes-263801-1_1280.jpg",
                        usr: "pepe",
                        descr: "D vacas por saturno",
                        date: "4/12/2021",
                        likes: 20,
                        comments: 2
                    },
                    {
                        id: 1,
                        src: "http://www.pixelstalk.net/wp-content/uploads/2016/10/Download-Images-Disney-Computer-HD.jpg",
                        usr: "jose",
                        descr: "Nice lil' mouse, dont ya think?",
                        date: "5/12/2021",
                        likes: 10,
                        comments: 0
                    },
                    {
                        id: 2,
                        src: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUZGRgaHBgcGBwaGBgaGhgYGBgaGhgYGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA
                        8QHhISHzQrISs0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDU0NDQ0NDQxNP/AABEIALEBHAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGBwj/xABAEAABA
                        wIDBAYIBAUEAgMAAAABAAIRAyEEEjEFQVFhInGBkaGxBhMyQlLB0fAUFXLhM4KSssIHYqLxI/IWNNL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAnEQADAAEEAgIBBAMAAAAAAAAAAQIRAxIhMRNB
                        BFFhFCIycQVCkf/aAAwDAQACEQMRAD8A92GIgYmm0VPql46s9DKE3MQ3NT7qSXqUk61QJJme+ml3sT7mpeoqTZzkRc1BexOvaEu5iorEcijmLvVo7mqkqqom5BimiBhV2ORmt4J1ROkUYxEUtaqVKduCdMR
                        oIx7UdjBuWO4kHVM4apuv3qioRyaTlTPGquNErWwxN2/9ptwu0syqSeSaLFn0CW6g+KebVBjmmVC1JDmqMqPlEe0J4KtKs03GUxrv70dwu0CWIFTEBurTCbY5rjDXAwrmh1Jsgx9iVN4dorFhTRY1vASoLU
                        cgFgxXZRJsAjspSiGkW3QdB2ewjNlkjghVMEW/dk23aDoiFmbZ29ToMz1n5BoBq5x4MbqT5b1NXSfJTZL4nsu1gGvksnbPpThsNLXvl49xgzP7dze0heF9I/8AUGtUBZRHqWHgZqOHN3u9Q7yvDVHuNzPah
                        Wr9F5+Ml/L/AIj3m1P9S6rpFCk1g+J5zu64ENHivNYr0sxr5DsS+DuaQwf8QFjupmJhQ1g3yl3NlNsz0i9Su5xlziTxJJPeqZ+ZUOy7u4mbqYPA9xQA6P1x6td6tGXLF+kkTcLmkEB+GT8KC1Tr4mP4sKto
                        xK2GSNWgvRvpyk62F4LLSuHyaY1vs86+mlnsW3WwyRqUU02Xwn0ZjmoTmrQfSQX0lebEciUkK7KxCK+mhOYqTZOpCfiDwTFLETuSQcQjMrFVVEqkNVw2b3lBwzWiXBw5giFQ4gBc7HNIynvVFRNyM0mNizp
                        R6WXcVhOY4GQ4dlk3h38SZ52TKhXJsPZIslnuynSSdNFfDYibJst3pheTLp2gvIBduPkmAxgdunsTDsO0mSEninMbc68tUyYuMh2MY0WAHFdUDj7JhK4bECRDLH4tOoFaOErtcY9W5vEkiOzijuwdtyI/gS
                        TLr8eHWE1Sohu63AlO4ikIkHsQGvEQdR49a5Wn0c4a7JLwbRHVAVXWVXg8kJ7wxpe9+VrRLidAOtDcFS2ZHpZ6QNwlMOy5qj5FNpsLaud/tEjrmOY+ObS2hVr1DVqvLnbuA4NaNAOpbXphtb8TiXvaTkADW
                        SIOVouY5kuPasNjB7RggQGjjO+ylVt8HqRozpQqpciopSZN+MeSIygS45WufGgDZjhPDtW7s/YpeMzwWj4fePX8Pn1LZw2FazosAa3SwievjqUrtIlSdPK4R5insKoRmc5jBwzBzuoxYeKg7JY03zOHM3ny
                        j6L0FdhkjUfTRJYihb6IqmyVQkKscxgGVgHGBfvhR+JCWqh7bG/ggloTZFcn6rXLlyYgcuXLlxxEKparLklRNLDQc4FatCVn18LyWyQhuavO1vjbeZZaNRo83VoJV9NelqYcFJ1sDwI71nVNcGmdWX2YD6a
                        G5i1KuFcNyVfTVZsZpMQdTQ3MTzmIbmKs2K5EXtQXsT76aC6mqzYjgRLCrsqEI5YoLFRWTclc51BIPJHZtJ4EG48UuWKAYTKhXI4Me88lH4p51PbvSuclcEyoXaFc93xlXoYpzT7RQQ1WLDwTKgbTUG1Ofg
                        hOxd9ZSTWTojtwruBRygNMbpYrivIf6g7VMNoNO4PcOJJhg7Ic7uO5erGFIXyba1Y16z3g+04xr7AOVsD9ICFPg1/ChOnT6Qqxoa2TqIM75k2Eb7RHMLc2dsmCKlQdL3GnRnPm7nu3Kux9nZnNe4WaegDoX
                        DV5HgO08F6XJoOtZNXW28I0qXq1liTmwFRrQB3JmrT8/Dclaz4SRW461gVqtv2oDoRa75SznrVPRmpclX02nUJX8EzgUw5ypmTZFwfosOVpXg2+llT4Wf8AL6o1P0pq8Gdzv/0skfNwv3IX9JqPo9quXlaf
                        pO7e1p6iR9UdnpMN7D2GfMKq+bov2B/F1V6PRriV57/5PT3tcOwH5rnektHi7+n90lfNlfx5F/T37RvlyoXrDb6RUT7xHWD8pXfndI6PHisep8u64SYy0a+jZcUCo0LK/NmH3u+3mrDHtOjge1ZKd08tFFo
                        0hl7Y0MJaq2dYK44tDdigmlstMUvRH4YHiPFBfheauaw3EqDV5qitoptYs7CuQH4d3BPGoVX1pVZ1GK4M1zFQsWsagOolDcxh3Kk6ojgyXMQnMWu7Ds5oTsLwKtOqibgzQ1TlTjsK5Ddh3cFVWhHAFjoRRU
                        KqaZUhifchWi2qsGHiqtCK1FUK5KOe8NNzofJfKsHSJcxrbuflH6Wi7ndgjtI4r62Du4rwmxMBlD3kQ6cg4ZWTMcJcI/lCXVtTOWafj5acr20bOFoABoiBu7E5TYEDNDmt5HxJ+iM+QvFq3VHqTClYQnjTG
                        iw3SXFbeJElZ+JpHctug8cGfWWTOqiUs6VoPbCVqLbJjYsXFUzIjgqQmFPVNeitegrgvNqTaqHGVVY1SlWlWzJHCG3BHVShOeoJQyUZgV0Q96g1XcfJQqFXmSVUXOLePfd3q3453E96XIVS1UUIm7Zos2lU
                        Gjz5+audr1fj8G/RZjDZTmTeKX6F8lfZpt2zV+Kexv0RBtt/LuWSolHwz9C+Svs2W7cfwb3H6qfzx3Bvc76rFlRmR8M/QPK/s3fzx3wt7nfVT+dO4M8fqsDMuzo+CfoXy19nofzl3ws7z9V35474W95Xnsy
                        4FMtGfoD1a+z0Y24fgH9Ss3bnFnc4Lyxeozo+GfoXys9i3bLN+YdYHyK4bVon/wBT8l401F3rUVoo7ys9oMXROjh4ojajNz294XiRVPFEbiDxR8X5O8n4PbPIaC4mwvPUsEb4AAJc6OEgk+JSeBqkzJtGnH
                        7urYfE5xbmO0uiPPuXnfNqk9p6Hw5TToYwtLPWc73WiPFOVwr4enkZzMuPbe6SxGKDTcrDCdPg2t4IrNAElYmOxSLtXajWtkleOxu2CZLW2vcmNF6WhDaMmtaRo4jHOSxxhWI7aFQiZHUPnw1RulYk2Nx+/
                        Ba3LRlmpo2G4gq3rFn4epdOKeWNhHs8hUgSUNjN6ILKNSPNBAFBsqAqQEjQ+SC5SwKCqopAbLZEKBMSrEFQ5yrOCVMo7WBCq5t/oiZ+IlC9ceA7lRIk2S8QB5IQnSdNFD6hOqtViBxi6dCNkB0a2UGopabX
                        CCQnSEbCh6iVQqocm2ithCqFyjOq5kUhchKdQA3Kq+rrCG/kqlE7JcvVS9DJVC9cDIU1FU1EIuUZ0cAyMtJ5Kc6Va/cpzJkgZNWljQxkFkhxdJm4iEfAVAXNjQknvDh33WQw5mkbxcdWjvl4pmm/I6mOIYO
                        +F4/yZe9pnv8Axtr0Zc99M9hWdaF53H4cuMLeI3JWuwLLoVtZXUnKPL4nZzBBcC4jjp3LO2phaLxax5ea9Rim8lkV6Adq0doXqQ8rKMNzjg8p+VgGcxj7sj1Gh3RHcAtwYJnwjuXeqAVG37JqF6MzCYKP31
                        Tv4dMtYDoi+qSM41GC6LKH2KWBI0CaCItJt0INRmCEu0bJLwJ5oasRNwqtEm6OANlUJ4g/fUjFkT8kF5lMkI2c0jtQ3MG5Q8KRRN53J0TbAll1JcBu0+SfLGgCI7kGpSBJIseP14J0hGxUk8CqZky6R7R+9
                        6DAveB1ffBUSFZDXHUKHskEjiuHUpcJEIoRgWgQSQeCo8EblBd3/RCEi/BMDJYvVS9QShkrgEuKoSuJVCETjiV0rmsJ0UPbBhcA6VOZRlQzZE4bwr4e2dJg9RsfAlbGDwud7cwI9WQZ/SZAPkvONevUvx7R
                        TaGGTlbJPEATPOQsPzJfDX9Hqf47U4cv+zccblDIlXBm/alqjwF48pnqULYxwasStWumdoV1jvqXXqaOVJi1ewzqiSxOIgEhWL0HJKs3ki+BjAUjDXl19T9Fp+savO1mPjK10DxUU31AImeZF0BcHtAyxJU
                        00J9eYA4KWOXYIph8yt6y0IQaSiUqcoYGyS2TouiLozWAHW6ioy06DW5jzRUgdAyY3nXT75KjKczwvHPcrMgycwtff8wpY9usO4a96dSK6K06QiTr92V30j1DedLdqk4kAkAAdiXc8nUyfvcmSRNsK3KNTP
                        UFV9X4eWtyli0zOkceCkPH39E6FZ1UTfegimdZEadvYrufP39wqZoPh/2mAUg/c9imBvuq1LX3H7hDuVwC1UB2uvFLPZBgpiFB7wimBoWe5Usivp2kdyAKZJsERSsSpcxFNFwkRcaob2EELgETCoTeZ00XP
                        P32KjGOcYa0kmYABJ7gicXcSd6E5504cbpg4V+YMyPznRuU5j1NiVs4P0PrOEveymT7plzu0Cw70juZ7Y0xVdI862Eei4AkHdovbVPR7DMYBkzOA6TnF0uO8wDA7EjR2PQzBzmOge615g9cgmOohL5E1kp4
                        aQ9g6makw8WjvFj5JDG1YWp6pjW5aYht7Xse0rC2m1eRsxqtHtxedNP8GZjaiy3m6erlJ1AFulYRkqssTr4kN1XUMa1yWr4bM6e4JmnhBGifCJtjlN4KIWckgcG07iDyMKRRqCwe6OxBo5cntKeHA1MojBI
                        EAI9Wm0AXMRrHlySznsBPSNuA6M990+DMmMbuAVabhc5tOF+rrStWu3fJ8FLHjgY6whgbI2943d6XcS7iVAdy75MKCTGseA8EcAycwPAjKd+4qXDn2BCY286opfusEUgNkEdQ69UN9Tn17h3KpcgtdKYBbM
                        Ne5S9+8IbjCrm3JkIyc9xwOvUjVAAb3B5pZouQefWCoa+WxzRAFNuf3vQHPM24937J7AbNq1fZbDfiNm9+/sXosJ6P02Dpuzu7mjqH1RSyLVJHk8hdZoJPL7siDZ1U8B1mV6XGhlIS4ho3c44Aa6rzmO2wT
                        ZnRHG2Y/QI8LsTc30UqbOc27ntHbHmlTlafaBSr6xJkkk8SShVHyg6DtftjbsTzPglalVu6UIuTOzdnvrvDGC51J0aN7ieCV1gKnPB2Bw1Sq/JTYXOO4cBvJNgF7/Z2AdhqTQ1rQ6AajiRLnG5E/CNBu370
                        XZ+Go4VmRpzO994EFx4nkNw/dHfimPBAd3rPbq8LDwaoUx7WQVXaIDQ8uykktiZvyIOmimlWaRM38x1rG2g0CWn2SQP0n3T1XjtQsJiTlE6yWu/U0xPkrrQW3DJ+Z7uDexnSYTvCyWOVvxUiOII+fyS9JyV
                        aLlYHWsqCVKkLPxVdrxBs6NOPMLQxDZFv+15/aVDMPagiSxw3HfbeOI39YBS3oqufaGjXcP8AD7E8Q6JSD3IFTGOa4sqDK4f0uHxNO8FWDp0KG3BR1nlDVHDohYrYSsCMp181eolzyd2A9WrSoL1yY49I+o
                        SL7/NLhhzJ/DYEmS50AHhMxwU4mm1sRmg77W3GQEr1pzjJHZQi+iTdFpsAtqiPwTxoM3V8wo9S8NzEWmOc33a7tUyuX0zsMqXdQUB0zvVcj9zHaxodeCrUa5urSPvRNlHEufePkodU5fVUgn781bJZMkI6S
                        B1WwCeKEyfsJ9mHJ3Jmns9x3wmSEdmW+m46JrDbHqVfYFhqTYdi2GYNjAC+OtxAE8pU1NsMYOiHOtIytt/UbdyP7V2xM0+kBw/oy50Z3ZYEGILjwjcFNL0dpsP/AJKoy7hIZPWSfLvWbjPSes4EMhnPV3YT
                        bwWDUqFxkkucdSTJPWSg7ldHYp9s+iP2nh2Nj1rABua5pgcA1qw9oelLBam0uPxOsOwanwXks6gk8EHqNnKEMYrHPqOzPdJ8uQGgSznnmpqNjU/ev0QS87gkyNgsSqEHiquehmsuydgbweFfUe1jGy5xgD6
                        8BzX0vZOyaeFZkBzPMZ3AXJ4Dg3WyW9Dtj+ppeseP/JUE82M3N6zqewbltvqAaCFF1urC6NMRtW59iNWqz4e1wCya9jMR1cFq4jFAAyD1LHq4phmARy1C3aU8coy6tZfDA4+qABaWuseU2++tZNWs5lRono
                        vn+qPoE9VIcLXG8cOKy8SLFvvMIc08Rv8ACU+ME85NKlVkxz85CMw3WRQq9No4if8AktNhR7OTw2NNcs/G0r8k410qMQ2QhtO3HmdoYFr25XDqI1aeI+Y3rzdalUpOy6jUcxuIXua1OVlY3DAiHCRqI1bPw
                        n5KdRkrp6m14fRg0cYDrYpxmNO+6XxOz4EjpN4jUcnDcfBJupOGhWdzg1TSayjWGIHFT6/mFktc/gr+udw8UBsn1gPYRdvZAGl90AXVnOLhuDfhLotP7+KyaD3uIa9jTc2DSDYEtuCYJg79BuCPmZlfaGgg
                        QQHX75zdsLBWnj2MqyN0yDOXscDuAiI01RcM3pZukCAYcMsg6mxEdsHXvzMI+mBABaI0M3vlgCZn903+IY4dFxa61srgeqDrbj+y5Q1yDPA46uQJLp4Sbbpg/NIO2xT9kvYHXidAeU2m6BiGVC2G3jNAmb5
                        jrPSaBO68kCRvwsRsjEvc1zyDNgJmJubXABJMxzsjM57YG2bezMUys98tHR3wQCOJg62TlQUWToNNb674N/vmsjAYU0GOcHmNXOBtb2iIG6wibm++ExTpjEOD8xcBBDNAYnOHQdTbhpvRdUn28CqU11yauB
                        qMdBgkHfaLeSYqVRIDSBrFpn99Vm0AbZXNjSAREGeGl0LEGC/I6S2CTAgOF+N7AwI/fnq3janhHbJby0OV2OPSBDjvB17C7ySNDaLnOcIuJtYGZggjWUPC4lz2y4gEGzfZlxEkyTobGSUUPc6TlEgHondMg
                        SDZxM6HcN8qfP8Asdx6F6jKbj/D6QmLWn/cJHHTjHURfhqYjMwE74nW1k67ZzoEENcQCSYjowIhu+Dwv2whDZrgDneOiTIiQdzQ4dcW61Xc8YTO2/gWfRoQOhA4hxt2z1KpwVMnoi28ZrRw6vFEZgm5rODg
                        0AOFzL4MkyYzGLgH95fgniXOc3LA0nRx0NrGY647EU2vYML6M7aWDBAcxxqEWIiIbBiw1iI6oWXWpuAFosDBEWdca7og9q3aGGLX52P0zSCHNIIv0SLGCQN2q2GbKeWnO4U2kXdlhx0PRb709m9XVNJLsTb
                        k8dS2LiHtzspOe0RJaCYOuXiSN8TC9X6HejNPJ6+uzM7McjHTDQwxJbvMg68FuYPaLGMbTZmytsCTJN7lx3mVNfbQa/K5vRNg6U+26WDk4l5Y5iscB7rj1WWXX2wwWc1wHGQfknaldkTMg3FrLJruYTqCtG
                        loyl0R1dZt9kVqrXiWPnzHZ9EhVbNwh4nDwczDBQPxBcDueNRxV+iPfJFRxBzN1Go4pTG1pyvFoMEcj+/mmG1Mw/3aFK4mnZwGhBjrFx4pcjYB4dw9bbQCO8mPJbAcvPYB8vJ4nwaAPMlbmayZCPsP61XZV
                        lJF6Kx1kRQrmpWvRkEjtG8dSaDwpeN4XYOyedqUyOk3mORHAhKPw7XezY/CT/aT5HxXo62Ha+85T4HsSGJ2a65EHq+hUqnJWbaMKrTy2IIPMQknm63S97ejJjeDcdxQ7fAz+hn0UthZap73Beyf5PIpXaPs
                        O/V/iuXLy2bF0Wpfwh+sfJFxOnapXJ32IZ+G9/8AS/8AyWzU/hM/QPILlyQ5mHU/+uP0/wCbV3o17Pd/cFy5PXQV2PbM+TfNyzcN7Fb+b+9y5cgu2c+gOI9vsd/cxbbPbd+tv9jVy5C+hUdgPZ/lP+CrT+f
                        +K5clXQ5j7N/jfzu/vath2j/5v8ly5U9iLoe9Gvb7/NbG2f4ZXLlaAejyLvaVtrfwj+pq5ctul2ZdToYw3sN7fkksR7S5ctCIPss5ZlT+IFK5c+gyBPtuUv07T5LlyQYyNm+2Op39wW+NFy5MhX2CRm6Lly
                        4BI+aYGhXLkQAjqiO0XLlwTJ2j7TP5lnjf1rlyix10f//Z`,
                        usr: "hashbulla",
                        descr: "de panafrescos",
                        date: "23/10/2020",
                        likes: 4524,
                        comments: 0
                    },
                    {
                        id: 3,
                        src: "https://ih1.redbubble.net/image.557168243.2784/flat,1000x1000,075,f.jpg",
                        usr: "el pibe",
                        descr: "finisterre",
                        date: "12/03/2004",
                        likes: 245,
                        comments: 0
                    }

                ];

var top = 3;
var bottom = 1;

//------------------[Dropdown Function]------------------

function myFunction(){
    // Show dropdown
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    // Checks if dropdown is clicked
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        for (let i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

//------------------[Cookie´s Functions]------------------
function createCookie(expdays){
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();
    var user = document.getElementById("SignUp_form").elements["username"].value;
    var pwd = document.getElementById("SignUp_form").elements["pwd"].value;
    var name = document.getElementById("SignUp_form").elements["name"].value;
    var lastn = document.getElementById("SignUp_form").elements["lname"].value;
    var email = document.getElementById("SignUp_form").elements["email"].value;
    var date = document.getElementById("SignUp_form").elements['date'].value;
    var img = document.getElementById("SignUp_form").elements['im_per'].value;
    var interes = document.getElementById("SignUp_form").elements["interes"].value;
    
    if (checkEmail(email)){
        alert("Ya existe una cuenta asociada a dicho correo cree otro usuario de nuevo con diferente cuenta de correo");
        return;
    }

    document.cookie = "usuario=" + user + ";" + expires + ";path=/";
    document.cookie = "pwd=" + pwd + ";" + expires + ";path=/";
    document.cookie = "name=" + name + ";" + expires + ";path=/";
    document.cookie = "lastname=" + lastn + ";" + expires + ";path=/";
    document.cookie = "email=" + email + ";" + expires + ";path=/";
    document.cookie = "date=" + date + ";" + expires + ";path=/";
    if(img != ""){
        document.cookie = "imagen=" + img + ";" + expires + ";path=/";
        document.getElementById("UserImProfile").src = img;
    }
    
    document.cookie = "interes=" + interes + ";" + expires + ";path=/";

    if(user!="" && pwd!="" && name!="" && lastn!="" && email!="" && date!=""){
        window.location.href = "#"
    }
}

function getCookie(cname){
    // Returns a specific cookie passed as paramete
    let name = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let cake = decodeCookie.split(";");
    for(let i = 0; i < cake.length; i++){
        let x = cake[i];
        while(x.charAt(0)==' '){
            x = x.substring(1);
        }
        if(x.indexOf(name)==0){
            return x.substring(name.length,x.length);
        }
    }
    return "";
}

function checkEmail(email){

    if(email == getCookie("email")){
        return true;
    }
}

function checkCookie() {
    var cookie = document.cookie;
    if(cookie.length <= 92){
        return;
    }
    else{
        document.getElementById("LogIn").style.display = "none";
        document.getElementById("SignUp").style.display = "none";
        document.getElementById("UserImProfile").style.display = "inline";
        document.getElementById("UserImProfile").style.visibility = "visible";

        document.getElementById("NameUser").style.display = "inline";
        document.getElementById("NameUser").style.visibility = "visible";
        document.getElementById("NameUser").innerText = getCookie("usuario");

        document.getElementById("user_div").style.width = "372.75px";
        
        document.getElementById("dropdown").style.display = "inline";
        document.getElementById("dropdown").style.visibility = "visible";

        document.getElementById("menu_margin").style.margin ="auto auto auto 11%";

        if(getCookie("imagen")!= ""){
            document.getElementById("UserImProfile").src = getCookie("imagen");
        }        
    }
}

function setTextUser(){
    var user = getCookie("usuario");
    var nombre = getCookie("name");
    var last_n = getCookie("lastname");
    var email = getCookie("email");
    var interes = getCookie("interes");
    var img = getCookie("imagen");
    document.getElementById("usern").innerText = user;
    document.getElementById("name").innerText = nombre;
    document.getElementById("last_name").innerText = last_n;
    document.getElementById("email").innerText = email;  
    document.getElementById("Interes").innerText = interes; 
    if(img!=""){
        document.getElementById("img").src = img;
    }
}

function changeData(expdays){
    const time = new Date();
    time.setTime(time.getTime() + (expdays * 24*60*60*1000));
    let expires = "expires=" + time.toUTCString();

    var user = document.getElementById("Change_form").elements["username"].value;
    if(user != ""){
        document.cookie = "usuario=" + user + ";" + expires + ";path=/";
    }
    
    var interes = document.getElementById("Change_form").elements["interes"].value;
    document.cookie = "interes=" + interes + ";" + expires + ";path=/";

    var img = document.getElementById("Change_form").elements["im_per"].value;
    if(img != ""){
        document.cookie = "imagen=" + img + ";" + expires + ";path=/";
    }
    

    window.location.href = "#";
}

function post_comment(id) {
    var comment = {
                    feed_id: id,
                    comment_id: get_comment_id(),
                    usr: "nolose",
                    date: "nolase",
                    text: $(`comment_text_box_${feed_id}`).value,
                    likes: 0
                  };
    $(`#feed_comment_section_${id}`).append(convert_to_html(comment, 'c'));
}

function get_comment_id() {
    // Generates a random id for a comment. Cannot obtain it from comments.json
    // because new comments cannot be stored there, so info won't be updated.
    return Math.floor(Math.random()*10 + 5);
}

function read_file(path) {
    var result = null;
    var scriptUrl = path;
    $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data;
        } 
     });
     return result;
}

function browse_older(){
    if(bottom > 0) { load_feed(bottom - 1); }
    if(bottom >= 3){ bottom -= 3; } else { bottom = 0; }
}

function browse_new(){
    top += 3;
    load_feed(top);
}

function load_feed(top_i, bottom_i){
    // Create a HTML entry for each feed post
    for(let i = Math.min(loaded_experiences + how_many, feed.length); i > feed.length - 3 - loaded_experiences; i--){
        $('#feed_experiences').prepend(convert_to_html(feed[i], 'f'));
        // Find the comments of the ith post and append them
        for(let j = 0; j < comments.length; j++){
            if(comments[j].feed_id == feed[i].id){
                $(`#feed_comment_section_${feed[i].id}`).append(convert_to_html(comments[j], 'c'));
            }
        }
    }
    // Update index to load next experiences when clicking 'browse_more' button
    loaded_experiences += how_many;
}

function convert_to_html(json_info, type){
    /* Transforms into HTML the information of the json provided.
       Current supported types: "f" for feed post; "c" for comment.*/
    if(type === 'f'){
        return `<br>
                <div class="feed_item" id="feed_post_${json_info.id}">\
                    <div class="feed_top">\
                        <div class="feed_user_info">
                            <img class="feed_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">\
                            <p class="text_font">${json_info.usr}</p>\
                        </div>
                        <div class="feed_date">
                            <p class="text_font_date">Posted on ${json_info.date}</p>\
                        </div>
                    </div>\
                    <div class="feed_body">\
                        <img class="feed_img" src="${json_info.src}" alt="image post"}>\
                        <p class="text_font">${json_info.descr}</p>\
                    </div>\
                    <div class="feed_bottom">\
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">\
                            <p class="text_font">${json_info.likes} likes</p>\
                        </div>
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">\
                            <p class="text_font">see ${json_info.comments} comments</p>\
                        </div>
                    </div>\
                    <br>
                    <div class="feed_user_comment" >\
                    
                        <div class="comment_section">
                            <img class="comment_icon_button" src="https://img.icons8.com/material-outlined/64/000000/comments--v1.png" alt="comments icon">\
                        </div>
                        <div class="comment_body">\
                            <img class="comment_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">\
                            <p class="comment_user_text_font">PepaPig</p>\

                            <input id="comment_text_box_${json_info.id}" class="comment_text_box" "type="text" placeholder="Write something" required>
                            <button id="feed_comment_button_${json_info.id}" onload="post_comment(${json_info.id});">Comment</button>
                        </div>\
                    </div>
                    <br>
                    <div class="feed_comment_section" id="feed_comment_section_${json_info.id}"></div>\
                </div>
                <br>`;
    }
    else if(type === 'c'){
        return `<div class="feed_post_comment" id="feed_post_comment_${json_info.comment_id}">\
                    <div class="comment_section">
                        <img class="comment_icon_button" src="https://img.icons8.com/material-rounded/64/000000/comments--v1.png" alt="comments icon">\
                        <p class="text_font_date">Commented on ${json_info.date}</p>\
                    </div>
                    <div class="comment_body">\
                        <img class="comment_user_img" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" alt="Profile image of ${json_info.usr}">\
                        <p class="comment_user_text_font">${json_info.usr}</p>\
                        <div class="comment_text_box">
                            <p class="text_font">${json_info.text}</p>\
                        </div>
                    </div>\
                    <div class="comment_bottom">
                        <div class="icon_and_text">
                            <img class="icon_button" src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like icon">\
                            <p class="text_font">${json_info.likes} likes</p>\
                        </div>
                    </div>
                </div>
                <br>`;
    }
    else{
        return '<div class="feed_error"><p>Error loading post or comment.</p></div>';
    }
}


function hoverInst(element){
    element.setAttribute("src","images/icon/instagram_icon2.png");
}

function unhoverInst(element){
    element.setAttribute("src","images/icon/instagram_icon.png");
}

function hoverTwi(element){
    element.setAttribute("src","images/icon/twitter_icon2.png");
}

function unhoverTwi(element){
    element.setAttribute("src","images/icon/twitter_icon.png");
}

function hoverF(element){
    element.setAttribute("src","images/icon/question_icon2.png");
}

function unhoverF(element){
    element.setAttribute("src","images/icon/question_icon.png");
}

function hoverC(element){
    element.setAttribute("src","images/icon/copyright_icon2.png");
}

function unhoverC(element){
    element.setAttribute("src","images/icon/copyright_icon.png");
}