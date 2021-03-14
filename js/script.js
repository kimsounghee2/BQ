       //"문서가 준비가 완료되면 함수구문(function) 내부의 어떤 실행문을 실행해주어라"라는 이벤트를 발생시킴
        //f(x) = x + 1;
        //function(x){x + 1}  ....  {}의 의미는 일반 수학의 함수에서 "="를 의미
        //$의 의미는 이곳부터는 jQuery문서에 대한 내용이 들어올 것이다라는 정의가 됨
        $(document).ready(function(){
            //사용자가 특정 대상물을 클릭했을 때 이벤트를 발생
            $(".top_btn").click(function(){
                $("html, body").animate({scrollTop:$("#header").offset().top}, 1000);
                //HTML 문서를 감싸는 최상위 공간 <html>태그와 실 브라우저 화면상을 구성하는 최상위 공간 <body>에 애니메이션 기능을 부여하겠다는 선언. 현재 스크롤 바의 위치를 브라우저 상단으로부터 지정한 장소의 상단에 맞춰주겠다는 선언(애니메이션 작동 시간 1000 millie Second = 1초)
                return false;  //<a>가 포함된  공간일 경우 href의 속성이 우선적으로 작동되는데, 이 우선 작동을 멈추게 만들어주는 구문
            });

            $(".story_btn").click(function(){
                $("html, body").animate({scrollTop:$("#story").offset().top}, 1000);
                return false;
            });
            $(".special_btn").click(function(){
                $("html, body").animate({scrollTop:$("#special").offset().top}, 1000);
                return false;
            });
            $(".dishes_btn").click(function(){
                $("html, body").animate({scrollTop:$("#dishes").offset().top}, 1000);
                return false;
            });
            $(".service_btn").click(function(){
                $("html, body").animate({scrollTop:$("#service").offset().top}, 1000);
                return false;
            });
            $(".offer_btn").click(function(){
                $("html, body").animate({scrollTop:$("#offer").offset().top}, 1000);
                return false;
            });
        });