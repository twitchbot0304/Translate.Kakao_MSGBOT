/**
 * translate.kakao_MSGBOT create by Twitchbot at 2020.10.27.
 * last edit at 2020.10.27.
 * Copyright (C) Twitchbot
 * all rights reserved.
 */


importClass(org.jsoup.Jsoup);

//made by 트위치봇, api by changmun

var allsee = "\u200b".repeat(500);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {


if (msg.indexOf("/번역::") == 0) {


 var baseURL = "https://api.winsub.kr/kakao/?key=(winsub에서 발급받은 본인의 api키를 넣으세요 괄호는 제거하시구요.)";

 var trg = "&target=";

 var trg2 = msg.split("::")[1];

 var ipt = "&input=";

 var ipt2 = msg.split("::")[2];

 var fullURL = baseURL+trg+trg2+ipt+ipt2;

   var res1 = Jsoup.connect(fullURL).ignoreContentType(true).get().text();

 

       var res = JSON.parse(res1).result.output;

       replier.reply("카카오번역기 번역결과:\n"+res);

    }

    

    if(msg=="/번역"){

      replier.reply("번역지원어는\n전체보기로 확인"+allsee+"\nkr (한국어)\nen (영어)\njp (일본어)\ncn (중국어)\nnl(네덜란드어)\nde (독일어)\nru (러시아어)\nms (말레이시아어)\nbn (벵골어)\nvi (베트남어)\nes (스페인어)\nar (아랍어)\nit (이탈리아어)\nid (인도네시아어)\nth (태국어)\ntr (터키어)\npt (포르투칼어)\nfr (프랑스어)\nhi (힌디어)");

    }

}




/*

::사용법::

/번역 - 사용가능 도착어 리스트를 봅니다.

/번역::kr::hi - hi를 한국어로 번역합니다.

출발어는 자동인식되므로 도착어만 명령어로설정해주시면 됩니다.

*/
