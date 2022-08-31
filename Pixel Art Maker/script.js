$(function(){
    $(function(){

        let mouseDown;

        function downloadImage(){
            html2canvas(document.querySelector("#board")).then(canvas => {
               a = document.createElement('a'); 
               document.body.appendChild(a); 
               a.download = "your_picture.png"; 
               a.href =  canvas.toDataURL();
               a.click();
           });	 
        }

        $("#download").on('click',function(){
            downloadImage()
        })

        let lastColor;

        for (let i = 0; i != 1520; i++){
            $("#board").append('<div draggable=false class="block"></div>')
        }

        $('#clear').on('click',function(){
            $("#board").html('')
            for (let i = 0; i != 1520; i++){
                $("#board").append('<div draggable=false class="block"></div>')
            }
            $(".block").on('click',function(){
                let color=document.getElementById('colorName').value;
                if (lastColor != color){
                    $("#lastColors").prepend('<div data-thing="hi" style="background: '+color+';" id="'+color+'" class="colorPal"></div>') 
                }
                lastColor=color;
                $(".colorPal").on('click',function(){
                    let colorName = this.id;
                    document.getElementById('colorName').value=colorName;
                })
                $(this).css('background', color); $(this).css('border', '1px solid'+color)
            })
            $(".block").on('mouseover',function(){
                if (mouseDown===true){
                    let color=document.getElementById('colorName').value;
                    if (lastColor != color){
                        $("#lastColors").prepend('<div data-thing="hi" style="background: '+color+';" id="'+color+'" class="colorPal"></div>') 
                    }
                    lastColor=color;
                    $(".colorPal").on('click',function(){
                        let colorName = this.id;
                        document.getElementById('colorName').value=colorName;
                    })
                    $(this).css('background', color); $(this).css('border', '1px solid'+color)
                }
            })
        })

        $("#erase").on('click',function(){
            document.getElementById('colorName').value='#ececec';
        })

        document.body.onmousedown = function() { 
            mouseDown=true;
        }
          document.body.onmouseup = function() {
            mouseDown=false;
        }

        $(".block").on('click',function(){
            let color=document.getElementById('colorName').value;
            if (lastColor != color){
                $("#lastColors").prepend('<div data-thing="hi" style="background: '+color+';" id="'+color+'" class="colorPal"></div>') 
            }
            lastColor=color;
            $(".colorPal").on('click',function(){
                let colorName = this.id;
                document.getElementById('colorName').value=colorName;
            })
            $(this).css('background', color); $(this).css('border', '1px solid'+color)
        })

        $(".block").on('mouseover',function(){
            if (mouseDown===true){
                let color=document.getElementById('colorName').value;
                if (lastColor != color){
                    $("#lastColors").prepend('<div data-thing="hi" style="background: '+color+';" id="'+color+'" class="colorPal"></div>') 
                }
                lastColor=color;
                $(".colorPal").on('click',function(){
                    let colorName = this.id;
                    document.getElementById('colorName').value=colorName;
                })
                $(this).css('background', color); $(this).css('border', '1px solid'+color)
            }
        })

    })
})