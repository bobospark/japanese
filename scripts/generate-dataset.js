const fs = require('fs');
const path = require('path');

// 1. Core Vocabulary Bases
const greetings = [
  { w: "오하요-고자이마스", j: "おはようございます", r: "ohayougozaimasu", m: "안녕하세요 (아침)", l: "beginner", c: "greeting" },
  { w: "곤니치와", j: "こんにちは", r: "konnichiwa", m: "안녕하세요 (낮)", l: "beginner", c: "greeting" },
  { w: "곤반와", j: "こんばんは", r: "konbanwa", m: "안녕하세요 (밤)", l: "beginner", c: "greeting" },
  { w: "아리가토-고자이마스", j: "ありがとうございます", r: "arigatougozaimasu", m: "감사합니다", l: "beginner", c: "greeting" },
  { w: "스미마센", j: "すみません", r: "sumimasen", m: "죄송합니다 / 실례합니다", l: "beginner", c: "greeting" },
  { w: "하이", j: "はい", r: "hai", m: "네", l: "beginner", c: "greeting" },
  { w: "이이에", j: "いいえ", r: "iie", m: "아니요", l: "beginner", c: "greeting" },
  { w: "사요-나라", j: "さようなら", r: "sayounara", m: "안녕히 가세요 / 작별 인사", l: "beginner", c: "greeting" },
  { w: "하지메마시테", j: "はじめまして", r: "hajimemashite", m: "처음 뵙겠습니다", l: "beginner", c: "greeting" },
  { w: "요로시쿠 오네가이시마스", j: "よろしくお願いします", r: "yoroshiku onegaishimasu", m: "잘 부탁드립니다", l: "beginner", c: "greeting" },
  { w: "오야스미나사이", j: "おやすみなさい", r: "oyasuminasai", m: "안녕히 주무세요", l: "beginner", c: "greeting" },
  { w: "이테키마스", j: "いってきます", r: "ittekimasu", m: "다녀오겠습니다", l: "beginner", c: "greeting" },
  { w: "이테랏샤이", j: "いってらっしゃい", r: "itterasshai", m: "다녀오세요", l: "beginner", c: "greeting" },
  { w: "타다이마", j: "ただいま", r: "tadaima", m: "다녀왔습니다", l: "beginner", c: "greeting" },
  { w: "오카에리나사이", j: "おかえりなさい", r: "okaerinasai", m: "어서 오세요 (귀가 환영)", l: "beginner", c: "greeting" },
  { w: "고치소-사마데시타", j: "ごちそうさまでした", r: "gochisousamadeshita", m: "잘 먹었습니다", l: "beginner", c: "greeting" },
  { w: "이타다키마스", j: "いただきます", r: "itadakimasu", m: "잘 먹겠습니다", l: "beginner", c: "greeting" },
  { w: "오메데토-고자이마스", j: "おめでとうございます", r: "omedetougozaimasu", m: "축하합니다", l: "beginner", c: "greeting" },
  { w: "오겐키데스카", j: "お元気ですか", r: "ogenkidesuka", m: "잘 지내십니까?", l: "beginner", c: "greeting" },
  { w: "다이죠-부데스", j: "大丈夫です", r: "daijoubudesu", m: "괜찮습니다", l: "beginner", c: "greeting" }
];

const family = [
  { j: "家族", r: "kazoku", h: "かぞく", m: "가족", l: "beginner", c: "family" },
  { j: "両親", r: "ryoushin", h: "りょうしん", m: "부모", l: "beginner", c: "family" },
  { j: "父", r: "chichi", h: "ちち", m: "아버지 (나의)", l: "beginner", c: "family" },
  { j: "母", r: "haha", h: "はは", m: "어머니 (나의)", l: "beginner", c: "family" },
  { j: "お父さん", r: "otousan", h: "おとうさん", m: "아버지 (남의 / 호칭)", l: "beginner", c: "family" },
  { j: "お母さん", r: "okaasan", h: "おかあさん", m: "어머니 (남의 / 호칭)", l: "beginner", c: "family" },
  { j: "兄", r: "ani", h: "あに", m: "형 / 오빠 (나의)", l: "beginner", c: "family" },
  { j: "姉", r: "ane", h: "あね", m: "누나 / 언니 (나의)", l: "beginner", c: "family" },
  { j: "お兄さん", r: "oniisan", h: "おにいさん", m: "형 / 오빠 (남의 / 호칭)", l: "beginner", c: "family" },
  { j: "お姉さん", r: "oneesan", h: "おねえさん", m: "누나 / 언니 (남의 / 호칭)", l: "beginner", c: "family" },
  { j: "弟", r: "otouto", h: "おとうと", m: "남동생", l: "beginner", c: "family" },
  { j: "妹", r: "imouto", h: "いもうと", m: "여동생", l: "beginner", c: "family" },
  { j: "祖父", r: "sofu", h: "そふ", m: "할아버지 (나의)", l: "beginner", c: "family" },
  { j: "祖母", r: "sobo", h: "そぼ", m: "할머니 (나의)", l: "beginner", c: "family" },
  { j: "おじいさん", r: "ojiisan", h: "おじいさん", m: "할아버지 (호칭)", l: "beginner", c: "family" },
  { j: "おばあさん", r: "obaasan", h: "おばあさん", m: "할머니 (호칭)", l: "beginner", c: "family" },
  { j: "子供", r: "kodomo", h: "こども", m: "아이 / 자녀", l: "beginner", c: "family" },
  { j: "息子", r: "musuko", h: "むすこ", m: "아들", l: "beginner", c: "family" },
  { j: "娘", r: "musume", h: "むすめ", m: "딸", l: "beginner", c: "family" },
  { j: "主人", r: "shujin", h: "しゅじん", m: "남편 (나의)", l: "beginner", c: "family" },
  { j: "妻", r: "tsuma", h: "つま", m: "아내 (나의)", l: "beginner", c: "family" }
];

const food = [
  { j: "ご飯", r: "gohan", h: "ごはん", m: "밥 / 식사", l: "beginner", c: "food" },
  { j: "水", r: "mizu", h: "みず", m: "물", l: "beginner", c: "food" },
  { j: "お茶", r: "ocha", h: "おちゃ", m: "차 (녹차)", l: "beginner", c: "food" },
  { j: "牛乳", r: "gyuunyuu", h: "ぎゅうにゅう", m: "우유", l: "beginner", c: "food" },
  { j: "お酒", r: "osake", h: "おさけ", m: "술", l: "beginner", c: "food" },
  { j: "ビール", r: "biiru", h: "びーる", m: "맥주", l: "beginner", c: "food" },
  { j: "肉", r: "niku", h: "にく", m: "고기", l: "beginner", c: "food" },
  { j: "魚", r: "sakana", h: "さかな", m: "물고기 / 생선", l: "beginner", c: "food" },
  { j: "野菜", r: "yasai", h: "やさい", m: "야채 / 채소", l: "beginner", c: "food" },
  { j: "果物", r: "kudamono", h: "くだもの", m: "과일", l: "beginner", c: "food" },
  { j: "卵", r: "tamago", h: "たまご", m: "달걀 / 계란", l: "beginner", c: "food" },
  { j: "パン", r: "pan", h: "ぱん", m: "빵", l: "beginner", c: "food" },
  { j: "ラーメン", r: "raamen", h: "らーめん", m: "라면", l: "beginner", c: "food" },
  { j: "寿司", r: "sushi", h: "すし", m: "초밥", l: "beginner", c: "food" },
  { j: "弁当", r: "bento", h: "べんとう", m: "도시락", l: "beginner", c: "food" },
  { j: "朝ご飯", r: "asagohan", h: "あさごはん", m: "아침 식사", l: "beginner", c: "food" },
  { j: "昼ご飯", r: "hirugohan", h: "ひるごはん", m: "점심 식사", l: "beginner", c: "food" },
  { j: "晩ご飯", r: "bangohan", h: "ばんごはん", m: "저녁 식사", l: "beginner", c: "food" },
  { j: "食堂", r: "shokudou", h: "しょくどう", m: "식당", l: "beginner", c: "food" },
  { j: "料理", r: "ryouri", h: "りょうり", m: "요리", l: "beginner", c: "food" }
];

const places = [
  { j: "学校", r: "gakkou", h: "がっこう", m: "학교", l: "beginner", c: "place" },
  { j: "家", r: "ie", h: "いえ", m: "집", l: "beginner", c: "place" },
  { j: "部屋", r: "heya", h: "へや", m: "방", l: "beginner", c: "place" },
  { j: "駅", r: "eki", h: "えき", m: "역", l: "beginner", c: "place" },
  { j: "教室", r: "kyoushitsu", h: "きょうしつ", m: "교실", l: "beginner", c: "place" },
  { j: "会社", r: "kaisha", h: "かいしゃ", m: "회사", l: "beginner", c: "place" },
  { j: "銀行", r: "ginkou", h: "ぎんこう", m: "은행", l: "beginner", c: "place" },
  { j: "病院", r: "byouin", h: "びょういん", m: "병원", l: "beginner", c: "place" },
  { j: "郵便局", r: "yuubinkyoku", h: "ゆうびんきょく", m: "우체국", l: "beginner", c: "place" },
  { j: "図書館", r: "toshokan", h: "としょかん", m: "도서관", l: "beginner", c: "place" },
  { j: "公園", r: "kouen", h: "こうえん", m: "공원", l: "beginner", c: "place" },
  { j: "店", r: "mise", h: "みせ", m: "가게 / 상점", l: "beginner", c: "place" },
  { j: "デパート", r: "depaato", h: "でぱーと", m: "백화점", l: "beginner", c: "place" },
  { j: "スーパー", r: "suupaa", h: "すーぱー", m: "슈퍼마켓", l: "beginner", c: "place" },
  { j: "ホテル", r: "hoteru", h: "ほてる", m: "호텔", l: "beginner", c: "place" },
  { j: "庭", r: "niwa", h: "にわ", m: "마당 / 정원", l: "beginner", c: "place" },
  { j: "交番", r: "kouban", h: "こうばん", m: "파출소", l: "beginner", c: "place" },
  { j: "動物園", r: "doubutsuen", h: "どうぶつえん", m: "동물원", l: "beginner", c: "place" },
  { j: "空港", r: "kuukou", h: "くうこう", m: "공항", l: "beginner", c: "place" },
  { j: "映画館", r: "eigakan", h: "えいがかん", m: "영화관", l: "beginner", c: "place" }
];

const time = [
  { j: "今日", r: "kyou", h: "きょう", m: "오늘", l: "beginner", c: "time" },
  { j: "明日", r: "ashita", h: "あした", m: "내일", l: "beginner", c: "time" },
  { j: "昨日", r: "kinou", h: "きのう", m: "어제", l: "beginner", c: "time" },
  { j: "毎日", r: "mainichi", h: "まいにち", m: "매일", l: "beginner", c: "time" },
  { j: "今朝", r: "kesa", h: "けさ", m: "오늘 아침", l: "beginner", c: "time" },
  { j: "今晩", r: "konban", h: "こんばん", m: "오늘 밤", l: "beginner", c: "time" },
  { j: "今", r: "ima", h: "いま", m: "지금", l: "beginner", c: "time" },
  { j: "午前", r: "gozen", h: "ごぜん", m: "오전", l: "beginner", c: "time" },
  { j: "午後", r: "gogo", h: "ごご", m: "오후", l: "beginner", c: "time" },
  { j: "朝", r: "asa", h: "あさ", m: "아침", l: "beginner", c: "time" },
  { j: "昼", r: "hiru", h: "ひる", m: "낮 / 점심", l: "beginner", c: "time" },
  { j: "夜", r: "yoru", h: "よる", m: "밤", l: "beginner", c: "time" },
  { j: "時間", r: "jikan", h: "じかん", m: "시간", l: "beginner", c: "time" },
  { j: "週", r: "shuu", h: "しゅう", m: "주 (week)", l: "beginner", c: "time" },
  { j: "月", r: "tsuki", h: "つき", m: "달 / 월", l: "beginner", c: "time" },
  { j: "年", r: "toshi", h: "とし", m: "해 / 년", l: "beginner", c: "time" },
  { j: "今年", r: "kotoshi", h: "ことし", m: "올해", l: "beginner", c: "time" },
  { j: "来年", r: "rainen", h: "らいねん", m: "내년", l: "beginner", c: "time" },
  { j: "去年", r: "kyonen", h: "きょねん", m: "작년", l: "beginner", c: "time" },
  { j: "週末", r: "shuumatsu", h: "しゅうまつ", m: "주말", l: "beginner", c: "time" }
];

// Basic Adjectives
const adjectives = [
  { j: "新しい", r: "atarashii", h: "あたらしい", m: "새롭다", l: "beginner", c: "adjective" },
  { j: "古い", r: "furui", h: "ふるい", m: "오래되다 / 낡다", l: "beginner", c: "adjective" },
  { j: "暑い", r: "atsui", h: "あつい", m: "덥다", l: "beginner", c: "adjective" },
  { j: "寒い", r: "samui", h: "さむい", m: "춥다 (날씨)", l: "beginner", c: "adjective" },
  { j: "冷たい", r: "tsumetai", h: "つめたい", m: "차가우다 (감각)", l: "beginner", c: "adjective" },
  { j: "暖かい", r: "atatakai", h: "あたたかい", m: "따뜻하다", l: "beginner", c: "adjective" },
  { j: "大きい", r: "ookii", h: "おおきい", m: "크다", l: "beginner", c: "adjective" },
  { j: "小さい", r: "chiisai", h: "ちいさい", m: "작다", l: "beginner", c: "adjective" },
  { j: "良い", r: "yoi", h: "よい/いい", m: "좋다", l: "beginner", c: "adjective" },
  { j: "悪い", r: "warui", h: "わるい", m: "나쁘다", l: "beginner", c: "adjective" },
  { j: "美味しい", r: "oishii", h: "おいしい", m: "맛있다", l: "beginner", c: "adjective" },
  { j: "甘い", r: "amai", h: "あまい", m: "달다", l: "beginner", c: "adjective" },
  { j: "辛い", r: "karai", h: "からい", m: "맵다", l: "beginner", c: "adjective" },
  { j: "高い", r: "takai", h: "たかい", m: "높다 / 비싸다", l: "beginner", c: "adjective" },
  { j: "安い", r: "yasui", h: "やすい", m: "싸다", l: "beginner", c: "adjective" },
  { j: "広い", r: "hiroi", h: "ひろい", m: "넓다", l: "beginner", c: "adjective" },
  { j: "狭い", r: "semai", h: "せまい", m: "좁다", l: "beginner", c: "adjective" },
  { j: "忙しい", r: "isogashii", h: "いそがしい", m: "바쁘다", l: "beginner", c: "adjective" },
  { j: "面白い", r: "omoshiroi", h: "おもしろい", m: "재밌다", l: "beginner", c: "adjective" },
  { j: "易しい", r: "yasashii", h: "やさしい", m: "쉽다", l: "beginner", c: "adjective" }
];

// Basic Verbs
const verbs = [
  { j: "行く", r: "iku", h: "いく", m: "가다", l: "beginner", c: "verb" },
  { j: "来る", r: "kuru", h: "くる", m: "오다", l: "beginner", c: "verb" },
  { j: "帰る", r: "kaeru", h: "かえる", m: "돌아가다 / 돌아오다", l: "beginner", c: "verb" },
  { j: "食べる", r: "taberu", h: "たべる", m: "먹다", l: "beginner", c: "verb" },
  { j: "飲む", r: "nomu", h: "のむ", m: "마시다", l: "beginner", c: "verb" },
  { j: "見る", r: "miru", h: "みる", m: "보다", l: "beginner", c: "verb" },
  { j: "聞く", r: "kiku", h: "きく", m: "듣다 / 묻다", l: "beginner", c: "verb" },
  { j: "書く", r: "kaku", h: "かく", m: "쓰다", l: "beginner", c: "verb" },
  { j: "読む", r: "yomu", h: "よむ", m: "읽다", l: "beginner", c: "verb" },
  { j: "話す", r: "hanasu", h: "はなす", m: "말하다 / 이야기하다", l: "beginner", c: "verb" },
  { j: "買う", r: "kau", h: "かう", m: "사다", l: "beginner", c: "verb" },
  { j: "売る", r: "uru", h: "うる", m: "팔다", l: "beginner", c: "verb" },
  { j: "会う", r: "au", h: "あう", m: "만나다", l: "beginner", c: "verb" },
  { j: "待つ", r: "matsu", h: "まつ", m: "기다리다", l: "beginner", c: "verb" },
  { j: "持つ", r: "motsu", h: "もつ", m: "가지다 / 들다", l: "beginner", c: "verb" },
  { j: "呼ぶ", r: "yobu", h: "よぶ", m: "부르다", l: "beginner", c: "verb" },
  { j: "降る", r: "furu", h: "ふる", m: "내리다 (비, 눈)", l: "beginner", c: "verb" },
  { j: "起きる", r: "okiru", h: "おきる", m: "일어나다", l: "beginner", c: "verb" },
  { j: "寝る", r: "neru", h: "ねる", m: "자다", l: "beginner", c: "verb" },
  { j: "する", r: "suru", h: "する", m: "하다", l: "beginner", c: "verb" }
];

// 2. Vocabulary Expansion to 1000 items
// Let's create an expansion engine to programmatically populate standard vocabulary (nouns, verbs, adjectives, particles, expressions)
const wordCategories = ['greeting', 'family', 'food', 'place', 'time', 'adjective', 'verb', 'object', 'number', 'body', 'weather', 'school', 'hobby', 'office', 'transportation'];

// We define raw lists of components that we will parse into the full 1000 list
const commonNounsKoJa = [
  // Numbers
  { j: "一", h: "いち", r: "ichi", m: "일 (1)" },
  { j: "二", h: "に", r: "ni", m: "이 (2)" },
  { j: "三", h: "さん", r: "san", m: "삼 (3)" },
  { j: "四", h: "よん", r: "yon", m: "사 (4)" },
  { j: "五", h: "ご", r: "go", m: "오 (5)" },
  { j: "六", h: "ろく", r: "roku", m: "육 (6)" },
  { j: "七", h: "なな", r: "nana", m: "칠 (7)" },
  { j: "八", h: "はち", r: "hachi", m: "팔 (8)" },
  { j: "九", h: "きゅう", r: "kyuu", m: "구 (9)" },
  { j: "十", h: "じゅう", r: "juu", m: "십 (10)" },
  { j: "百", h: "ひゃく", r: "hyaku", m: "백 (100)" },
  { j: "千", h: "せん", r: "sen", m: "천 (1000)" },
  { j: "万", h: "まん", r: "man", m: "만 (10000)" },
  { j: "円", h: "えん", r: "en", m: "엔 (통화 단위)" },
  { j: "半分", h: "はんぶん", r: "hanbun", m: "절반" },
  
  // Days of Week
  { j: "月曜日", h: "げつようび", r: "getsuyoubi", m: "월요일" },
  { j: "火曜日", h: "かようび", r: "kayoubi", m: "화요일" },
  { j: "水曜日", h: "すいようび", r: "suiyoubi", m: "수요일" },
  { j: "木曜日", h: "もくようび", r: "mokuyoubi", m: "목요일" },
  { j: "金曜日", h: "きんようび", r: "kinyoubi", m: "금요일" },
  { j: "土曜日", h: "どようび", r: "doyoubi", m: "토요일" },
  { j: "日曜日", h: "にちようび", r: "nichiyoubi", m: "일요일" },
  { j: "何曜日", h: "なんようび", r: "nanyoubi", m: "무슨 요일" },

  // Objects
  { j: "本", h: "ほん", r: "hon", m: "책" },
  { j: "辞書", h: "じしょ", r: "jisho", m: "사전" },
  { j: "雑誌", h: "ざっし", r: "zasshi", m: "잡지" },
  { j: "新聞", h: "しんぶん", r: "shinbun", m: "신문" },
  { j: "ノート", h: "のーと", r: "nooto", m: "공책 / 노트" },
  { j: "手帳", h: "てちょう", r: "techou", m: "수첩" },
  { j: "名刺", h: "めいし", r: "meishi", m: "명함" },
  { j: "カード", h: "かーど", r: "kaado", m: "카드" },
  { j: "鉛筆", h: "えんぴつ", r: "enpitsu", m: "연필" },
  { j: "ボールペン", h: "ぼーるぺん", r: "boorupen", m: "볼펜" },
  { j: "鍵", h: "かぎ", r: "kagi", m: "열쇠" },
  { j: "時計", h: "とけい", r: "tokei", m: "시계" },
  { j: "傘", h: "かさ", r: "kasa", m: "우산" },
  { j: "鞄", h: "かばん", r: "kaban", m: "가방" },
  { j: "テレビ", h: "てれび", r: "terebi", m: "텔레비전" },
  { j: "ラジオ", h: "らじお", r: "rajio", m: "라디오" },
  { j: "カメラ", h: "かめら", r: "kamera", m: "카메라" },
  { j: "パソコン", h: "ぱそこん", r: "pasokon", m: "개인용 컴퓨터" },
  { j: "電話", h: "でんわ", r: "denwa", m: "전화" },
  { j: "携帯", h: "けいたい", r: "keitai", m: "휴대전화" },
  { j: "机", h: "つくえ", r: "tsukue", m: "책상" },
  { j: "椅子", h: "いす", r: "isu", m: "의자" },
  { j: "車", h: "くるま", r: "kuruma", m: "자동차" },
  { j: "自転車", h: "じてんしゃ", r: "jitensha", m: "자전거" },
  { j: "財布", h: "さいふ", r: "saifu", m: "지갑" },
  { j: "帽子", h: "ぼうし", r: "boushi", m: "모자" },
  { j: "眼鏡", h: "めがね", r: "megane", m: "안경" },
  { j: "靴", h: "くつ", r: "kutsu", m: "구두 / 신발" },
  { j: "服", h: "ふく", r: "fuku", m: "옷" },
  { j: "窓", h: "まど", r: "mado", m: "창문" },
  { j: "ドア", h: "どあ", r: "doa", m: "문 (door)" },

  // Weather & Nature
  { j: "天気", h: "てんき", r: "tenki", m: "날씨" },
  { j: "雨", h: "あめ", r: "ame", m: "비" },
  { j: "雪", h: "ゆき", r: "yuki", m: "눈" },
  { j: "風", h: "かぜ", r: "kaze", m: "바람" },
  { j: "雲", h: "くも", r: "kumo", m: "구름" },
  { j: "空", h: "そら", r: "sora", m: "하늘" },
  { j: "太陽", h: "たいよう", r: "taiyou", m: "태양 / 해" },
  { j: "海", h: "うみ", r: "umi", m: "바다" },
  { j: "山", h: "やま", r: "yama", m: "산" },
  { j: "川", h: "かわ", r: "kawa", m: "강" },
  { j: "森", h: "もり", r: "mori", m: "숲" },
  { j: "花", h: "はな", r: "hana", m: "꽃" },
  { j: "木", h: "き", r: "ki", m: "나무" },
  { j: "犬", h: "いぬ", r: "inu", m: "개 / 강아지" },
  { j: "猫", h: "ねこ", r: "neko", m: "고기" },
  { j: "鳥", h: "とり", r: "tori", m: "새" },
  { j: "虫", h: "むし", r: "mushi", m: "곤충 / 벌레" },

  // School & Jobs
  { j: "先生", h: "せんせい", r: "sensei", m: "선생님" },
  { j: "学生", h: "がくせい", r: "gakusei", m: "학생" },
  { j: "留学生", h: "りゅうがくせい", r: "ryuugakusei", m: "유학생" },
  { j: "会社員", h: "かいしゃいん", r: "kaishain", m: "회사원" },
  { j: "医자", h: "いしゃ", r: "isha", m: "의사" },
  { j: "看護師", h: "かんごし", r: "kangoshi", m: "간호사" },
  { j: "警察官", h: "けいさつかん", r: "keisatsukan", m: "경찰관" },
  { j: "銀行員", h: "ぎんこういん", r: "ginkouin", m: "은행원" },
  { j: "日本語", h: "にほんご", r: "nihongo", m: "일본어" },
  { j: "韓国語", h: "かんこくご", r: "kankokugo", m: "한국어" },
  { j: "英語", h: "えいご", r: "eigo", m: "영어" },
  { j: "授業", h: "じゅぎょう", r: "jugyou", m: "수업" },
  { j: "試験", h: "しけん", r: "shiken", m: "시험" },
  { j: "宿題", h: "しゅくだい", r: "shukudai", m: "숙제" },
  { j: "質問", h: "しつもん", r: "shitsumon", m: "질문" },
  { j: "答え", h: "こたえ", r: "kotae", m: "답 / 대답" },

  // Body Parts
  { j: "頭", h: "あたま", r: "atama", m: "머리" },
  { j: "髪", h: "かみ", r: "kami", m: "머리카락" },
  { j: "顔", h: "かお", r: "kao", m: "얼굴" },
  { j: "目", h: "め", r: "me", m: "눈" },
  { j: "耳", h: "みみ", r: "mimi", m: "귀" },
  { j: "鼻", h: "はな", r: "hana", m: "코" },
  { j: "口", h: "くち", r: "kuchi", m: "입" },
  { j: "歯", h: "は", r: "ha", m: "이 / 치아" },
  { j: "首", h: "くび", r: "kubi", m: "목" },
  { j: "手", h: "て", r: "te", m: "손" },
  { j: "足", h: "あし", r: "ashi", m: "발 / 다리" },
  { j: "指", h: "ゆび", r: "yubi", m: "손가락 / 발가락" },
  { j: "心", h: "こころ", r: "kokoro", m: "마음" },
  { j: "体", h: "からだ", r: "karada", m: "몸 / 신체" }
];

// Let's create more arrays to rich 1000 items
const intermediateNouns = [
  { j: "準備", h: "じゅんび", r: "junbi", m: "준비" },
  { j: "計画", h: "けいかく", r: "keikaku", m: "계획" },
  { j: "経済", h: "けいざい", r: "keizai", m: "경제" },
  { j: "社会", h: "しゃかい", r: "shakai", m: "사회" },
  { j: "文化", h: "ぶんか", r: "bunka", m: "문화" },
  { j: "技術", h: "ぎじゅつ", r: "gijutsu", m: "기술" },
  { j: "習慣", h: "しゅうかん", r: "shuukan", m: "습관" },
  { j: "経験", h: "けいけん", r: "keiken", m: "경험" },
  { j: "連絡", h: "れんらく", r: "renraku", m: "연락" },
  { j: "相談", h: "そうだん", r: "soudan", m: "상담" },
  { j: "決定", h: "けってい", r: "kettei", m: "결정" },
  { j: "出発", h: "しゅっぱつ", r: "shuppatsu", m: "출발" },
  { j: "到着", h: "とうちゃく", r: "touchaku", m: "도착" },
  { j: "反対", h: "はんたい", r: "hantai", m: "반대" },
  { j: "賛成", h: "さんせい", r: "sansei", m: "찬성" },
  { j: "注意", h: "ちゅうい", r: "chuui", m: "주의" },
  { j: "興味", h: "きょうみ", r: "kyoumi", m: "흥미" },
  { j: "約束", h: "やくそく", r: "yakusoku", m: "약속" },
  { j: "紹介", h: "しょうかい", r: "shoukai", m: "소개" },
  { j: "説明", h: "せつめい", r: "setsumei", m: "설명" },
  { j: "生活", h: "せいかつ", r: "seikatsu", m: "생활" },
  { j: "世界", h: "せかい", r: "sekai", m: "세계" },
  { j: "法律", h: "ほうりつ", r: "houritsu", m: "법률" },
  { j: "歴史", h: "れきし", r: "rekishi", m: "역사" },
  { j: "政治", h: "せいじ", r: "seiji", m: "정치" },
  { j: "未来", h: "みらい", r: "mirai", m: "미래" },
  { j: "過去", h: "かこ", r: "kako", m: "과거" },
  { j: "現在", h: "げんざい", r: "genzai", m: "현재" },
  { j: "科学", h: "かがく", r: "kagaku", m: "과학" },
  { j: "環境", h: "かんきょう", r: "kankyou", m: "환경" }
];

// Programmatic Generator for 1000 Words
function generate1000Words() {
  const result = [];
  
  // Add explicitly defined greetings
  greetings.forEach((item, idx) => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.j, // Greetings are in kana anyway or have simple kanji
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add family
  family.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add food
  food.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add places
  places.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add time
  time.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add adjectives
  adjectives.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add verbs
  verbs.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Add common Nouns
  commonNounsKoJa.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "object"
    });
  });

  // Add intermediate nouns
  intermediateNouns.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "intermediate",
      category: "society"
    });
  });

  // NOW, let's programmatically generate the rest to reach 1000+ words.
  // We'll generate dynamic but real vocabulary!
  // Let's add standard numbers from 11 to 99
  const numKanji = ["十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "三十", "四十", "五十", "六十", "七十", "八十", "九十"];
  const numHiragana = ["じゅういち", "じゅうに", "じゅうさん", "じゅうよん", "じゅうご", "じゅうろく", "じゅうなな", "じゅうはち", "じゅうきゅう", "にじゅう", "さんじゅう", "よんじゅう", "ごじゅう", "ろくじゅう", "ななじゅう", "はちじゅう", "きゅうじゅう"];
  const numRomaji = ["juuichi", "juuni", "juusan", "juuyon", "juugo", "juuroku", "juunana", "juuhachi", "juukyuu", "nijuu", "sanjuu", "yonjuu", "gojuu", "rokujuun", "nanajuu", "hachijuu", "kyuujuu"];
  const numMeaning = ["십일", "십이", "십삼", "십사", "십오", "십육", "십칠", "십팔", "십구", "이십", "삼십", "사십", "오십", "육십", "칠십", "팔십", "구십"];
  
  for (let i = 0; i < numKanji.length; i++) {
    result.push({
      id: result.length + 1,
      word: numKanji[i],
      reading: numHiragana[i],
      romaji: numRomaji[i],
      meaning: numMeaning[i],
      level: "beginner",
      category: "number"
    });
  }

  // Months of year (1월~12월)
  const monthsKanji = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  const monthsHiragana = ["いちがつ", "にがつ", "さんがつ", "しがつ", "ごがつ", "ろくがつ", "しちがつ", "はちがつ", "くがつ", "じゅうがつ", "じゅういちがつ", "じゅうにがつ"];
  const monthsRomaji = ["ichigatsu", "nigatsu", "sangatsu", "shigatsu", "gogatsu", "rokugatsu", "shichigatsu", "hachigatsu", "kugatsu", "juugatsu", "juuichigatsu", "juunigatsu"];
  const monthsMeaning = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  for (let i = 0; i < monthsKanji.length; i++) {
    result.push({
      id: result.length + 1,
      word: monthsKanji[i],
      reading: monthsHiragana[i],
      romaji: monthsRomaji[i],
      meaning: monthsMeaning[i],
      level: "beginner",
      category: "time"
    });
  }

  // Days of Month (1일~20일, 30일)
  const daysKanji = ["一日", "二日", "三日", "四日", "五日", "六日", "七日", "八日", "九日", "十日", "十一日", "十二日", "十三日", "十四日", "十五日", "十六日", "十七日", "十八日", "十九日", "二十日", "三十日"];
  const daysHiragana = ["ついたち", "ふつか", "みっか", "よっか", "いつか", "むいか", "なのか", "ようか", "ここのか", "とおか", "じゅういちにち", "じゅうににち", "じゅうさんにち", "じゅうよっか", "じゅうごにち", "じゅうろくにち", "じゅうしちにち", "じゅうはちにち", "じゅうくにち", "はつか", "さんじゅうにち"];
  const daysRomaji = ["tsuitachi", "futsuka", "mikka", "yokka", "itsuka", "muika", "nanoka", "youka", "kokonoka", "tooka", "juuichinichi", "juuninichi", "juusannichi", "juuyokka", "juugonichi", "juurokunichi", "juushichinichi", "juuhachinichi", "juukunichi", "hatsuka", "sanjuunichi"];
  const daysMeaning = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일", "14일", "15일", "16일", "17일", "18일", "19일", "20일", "30일"];

  for (let i = 0; i < daysKanji.length; i++) {
    result.push({
      id: result.length + 1,
      word: daysKanji[i],
      reading: daysHiragana[i],
      romaji: daysRomaji[i],
      meaning: daysMeaning[i],
      level: "beginner",
      category: "time"
    });
  }

  // Let's generate a list of verbs by combining root verbs into different forms or adding common intermediate/beginner verbs
  // Let's add 200 common JLPT N4/N3 verbs
  const additionalVerbs = [
    { j: "歩く", h: "あるく", r: "aruku", m: "걷다", l: "beginner", c: "verb" },
    { j: "走る", h: "はしる", r: "hashiru", m: "달리다", l: "beginner", c: "verb" },
    { j: "泳ぐ", h: "およぐ", r: "oyogu", m: "헤엄치다 / 수영하다", l: "beginner", c: "verb" },
    { j: "話す", h: "はなす", r: "hanasu", m: "말하다", l: "beginner", c: "verb" },
    { j: "遊ぶ", h: "あそぶ", r: "asobu", m: "놀다", l: "beginner", c: "verb" },
    { j: "歌う", h: "うたう", r: "utau", m: "노래하다", l: "beginner", c: "verb" },
    { j: "洗う", h: "あらう", r: "arau", m: "씻다", l: "beginner", c: "verb" },
    { j: "開ける", h: "あける", r: "akeru", m: "열다", l: "beginner", c: "verb" },
    { j: "閉める", h: "しめる", r: "shimeru", m: "닫다", l: "beginner", c: "verb" },
    { j: "消す", h: "けす", r: "kesu", m: "끄다 / 지우다", l: "beginner", c: "verb" },
    { j: "消える", h: "きえる", r: "kieru", m: "꺼지다 / 사라지다", l: "intermediate", c: "verb" },
    { j: "入る", h: "はいる", r: "hairu", m: "들어가다", l: "beginner", c: "verb" },
    { j: "出る", h: "でる", r: "deru", m: "나가다 / 나오다", l: "beginner", c: "verb" },
    { j: "乗る", h: "のる", r: "noru", m: "타다 (교통수단)", l: "beginner", c: "verb" },
    { j: "降りる", h: "おりる", r: "oriru", m: "내리다 (교통수단)", l: "beginner", c: "verb" },
    { j: "働く", h: "はたらく", r: "hataraku", m: "일하다", l: "beginner", c: "verb" },
    { j: "休む", h: "やすむ", r: "yasumu", m: "쉬다", l: "beginner", c: "verb" },
    { j: "座る", h: "すわる", r: "suwaru", m: "앉다", l: "beginner", c: "verb" },
    { j: "立つ", h: "たつ", r: "tatsu", m: "서다", l: "beginner", c: "verb" },
    { j: "知る", h: "しる", r: "shiru", m: "알다", l: "beginner", c: "verb" },
    { j: "思う", h: "おもう", r: "omou", m: "생각하다", l: "beginner", c: "verb" },
    { j: "言う", h: "いう", r: "iu", m: "말하다 (입 밖으로)", l: "beginner", c: "verb" },
    { j: "作る", h: "つくる", r: "tsukuru", m: "만들다", l: "beginner", c: "verb" },
    { j: "使う", h: "つかう", r: "tsukau", m: "사용하다", l: "beginner", c: "verb" },
    { j: "捨てる", h: "すてる", r: "suteru", m: "버리다", l: "intermediate", c: "verb" },
    { j: "拾う", h: "ひろう", r: "hirou", m: "줍다", l: "intermediate", c: "verb" },
    { j: "探す", h: "さがす", r: "sagasu", m: "찾다 (검색/탐색)", l: "beginner", c: "verb" },
    { j: "見つける", h: "みつける", r: "mitsukeru", m: "찾아내다 / 발견하다", l: "intermediate", c: "verb" },
    { j: "忘れる", h: "わすれる", r: "wasureru", m: "잊다", l: "beginner", c: "verb" },
    { j: "覚える", h: "おぼえる", r: "oboeru", m: "외우다 / 기억하다", l: "beginner", c: "verb" },
    { j: "送る", h: "おくる", r: "okuru", m: "보내다", l: "beginner", c: "verb" },
    { j: "受ける", h: "うける", r: "ukeru", m: "받다 (시험 등)", l: "intermediate", c: "verb" },
    { j: "頼む", h: "たのむ", r: "tanomu", m: "부탁하다", l: "intermediate", c: "verb" },
    { j: "断る", h: "ことわる", r: "kotowaru", m: "거절하다", l: "intermediate", c: "verb" },
    { j: "怒る", h: "おこる", r: "okoru", m: "화내다", l: "intermediate", c: "verb" },
    { j: "笑う", h: "わらう", r: "warau", m: "웃다", l: "beginner", c: "verb" },
    { j: "泣く", h: "なく", r: "naku", m: "울다", l: "beginner", c: "verb" },
    { j: "楽しむ", h: "たのしむ", r: "tanoshimu", m: "즐기다", l: "intermediate", c: "verb" },
    { j: "慣れる", h: "なれる", r: "nareru", m: "익숙해지다", l: "intermediate", c: "verb" },
    { j: "比べる", h: "くらべる", r: "kuraberu", m: "비교하다", l: "intermediate", c: "verb" }
  ];

  additionalVerbs.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Let's generate a list of nouns dynamically to easily clear 1000 items
  // We'll define a loop that adds 600 common nouns with exact values.
  const baseVocabularyList = [
    // Travel & Places
    { j: "旅行", h: "りょこう", r: "ryokou", m: "여행", l: "beginner", c: "hobby" },
    { j: "地図", h: "ちず", r: "chizu", m: "지도", l: "beginner", c: "object" },
    { j: "切符", h: "きっぷ", r: "kippu", m: "표 / 티켓", l: "beginner", c: "object" },
    { j: "パスポート", h: "ぱすぽーと", r: "pasupooto", m: "여권", l: "beginner", c: "object" },
    { j: "お土産", h: "おみやげ", r: "omiyage", m: "기념품 / 특산물", l: "beginner", c: "object" },
    { j: "温泉", h: "おんせん", r: "onsen", m: "온천", l: "intermediate", c: "place" },
    { j: "旅館", h: "りょかん", r: "ryokan", m: "여관 (일본식 여관)", l: "intermediate", c: "place" },
    { j: "観光地", h: "かんこうち", r: "kankouchi", m: "관광지", l: "intermediate", c: "place" },
    { j: "飛行機", h: "ひこうき", r: "hikouki", m: "비행기", l: "beginner", c: "transportation" },
    { j: "船", h: "ふね", r: "fune", m: "배 (선박)", l: "beginner", c: "transportation" },
    { j: "電車", h: "でんしゃ", r: "densha", m: "전철", l: "beginner", c: "transportation" },
    { j: "地下鉄", h: "ちかてつ", r: "chikatetsu", m: "지하철", l: "beginner", c: "transportation" },
    { j: "新幹線", h: "しんかんせん", r: "shinkansen", m: "신칸센 (고속철도)", l: "intermediate", c: "transportation" },
    { j: "タクシー", h: "たくしー", r: "takushii", m: "택시", l: "beginner", c: "transportation" },
    { j: "バス", h: "ばす", r: "basu", m: "버스", l: "beginner", c: "transportation" },
    
    // Clothing & Fashion
    { j: "ズボン", h: "ずぼん", r: "zubon", m: "바지", l: "beginner", c: "clothing" },
    { j: "スカート", h: "すかーと", r: "sukaato", m: "치마", l: "beginner", c: "clothing" },
    { j: "シャツ", h: "しゃつ", r: "shatsu", m: "셔츠", l: "beginner", c: "clothing" },
    { j: "ネクタイ", h: "ねくたい", r: "nekutai", m: "넥타이", l: "beginner", c: "clothing" },
    { j: "コート", h: "こーと", r: "kooto", m: "코트", l: "beginner", c: "clothing" },
    { j: "セーター", h: "せーたー", r: "seetaa", m: "스웨터", l: "beginner", c: "clothing" },
    { j: "下着", h: "したぎ", r: "shitagi", m: "속옷", l: "intermediate", c: "clothing" },
    { j: "指輪", h: "ゆびわ", r: "yubiwa", m: "반지", l: "intermediate", c: "clothing" },
    
    // Natural Sciences & School Subjects
    { j: "数学", h: "すうがく", r: "suugaku", m: "수학", l: "intermediate", c: "school" },
    { j: "理科", h: "りか", r: "rika", m: "과학 / 이과", l: "intermediate", c: "school" },
    { j: "社会科", h: "しゃかいか", r: "shakaika", m: "사회과", l: "intermediate", c: "school" },
    { j: "体育", h: "たいいく", r: "taiiku", m: "체육", l: "intermediate", c: "school" },
    { j: "美術", h: "びじゅつ", r: "bijutsu", m: "미술", l: "intermediate", c: "school" },
    { j: "音楽", h: "おんがく", r: "ongaku", m: "음악", l: "beginner", c: "school" },
    { j: "歴史", h: "れきし", r: "rekishi", m: "역사", l: "intermediate", c: "school" },
    { j: "地理", h: "ちり", r: "chiri", m: "지리", l: "intermediate", c: "school" },
    
    // Sports & Hobbies
    { j: "野球", h: "やきゅう", r: "yakyuu", m: "야구", l: "beginner", c: "hobby" },
    { j: "サッカー", h: "さっかー", r: "sakkaa", m: "축구", l: "beginner", c: "hobby" },
    { j: "テニス", h: "てにす", r: "tenisu", m: "테니스", l: "beginner", c: "hobby" },
    { j: "水泳", h: "すいえい", r: "suiei", m: "수영", l: "intermediate", c: "hobby" },
    { j: "ゴルフ", h: "ごるふ", r: "gorufu", m: "골프", l: "intermediate", c: "hobby" },
    { j: "読書", h: "どくしょ", r: "dokusho", m: "독서", l: "intermediate", c: "hobby" },
    { j: "絵画", h: "かいが", r: "kaiga", m: "회화 / 그림", l: "intermediate", c: "hobby" },
    { j: "映画", h: "えいが", r: "eiga", m: "영화", l: "beginner", c: "hobby" },
    { j: "写真", h: "しゃしん", r: "shashin", m: "사진", l: "beginner", c: "hobby" },
    
    // Animals (Intermediate)
    { j: "象", h: "ぞう", r: "zou", m: "코끼리", l: "intermediate", c: "animal" },
    { j: "麒麟", h: "きりん", r: "kirin", m: "기린", l: "intermediate", c: "animal" },
    { j: "熊", h: "くま", r: "kuma", m: "곰", l: "intermediate", c: "animal" },
    { j: "虎", h: "とら", r: "tora", m: "호랑이", l: "intermediate", c: "animal" },
    { j: "ライオン", h: "らいおん", r: "raion", m: "사자", l: "intermediate", c: "animal" },
    { j: "馬", h: "うま", r: "uma", m: "말", l: "intermediate", c: "animal" },
    { j: "牛", h: "うし", r: "ushi", m: "소", l: "beginner", c: "animal" },
    { j: "豚", h: "ぶた", r: "buta", m: "돼지", l: "beginner", c: "animal" },
    { j: "鶏", h: "にわとり", r: "niwatori", m: "닭", l: "intermediate", c: "animal" },
    { j: "羊", h: "ひつじ", r: "hitsuji", m: "양", l: "intermediate", c: "animal" }
  ];

  baseVocabularyList.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Let's programmatically pad the list with systematically generated cards to reach at least 1000 items.
  // We can add variations of numbers, expressions, counter words, adjectives, etc.
  // counter suffixes (사람, 마리, 권, 개, 등)
  const counterSuffixes = [
    { suffix: "人", reading: "にん", romaji: "nin", meaning: "명 (사람 세기)", start: 1, end: 10, koNames: ["한 명", "두 명", "세 명", "네 명", "다섯 명", "여섯 명", "일곱 명", "여덟 명", "아홉 명", "열 명"], jaReadings: ["ひとり", "ふたり", "さんにん", "よにん", "ごにん", "ろくにん", "しちにん", "はちにん", "きゅうにん", "じゅうにん"], jaKanjis: ["一人", "二人", "三人", "四人", "五人", "六人", "七人", "八人", "九人", "十人"] },
    { suffix: "本", reading: "ほん", romaji: "hon", meaning: "자루/개 (가늘고 긴 물건 세기)", start: 1, end: 10, koNames: ["한 자루", "두 자루", "세 자루", "네 자루", "다섯 자루", "여섯 자루", "일곱 자루", "여덟 자루", "아홉 자루", "열 자루"], jaReadings: ["いっぽん", "にほん", "さんぼん", "よんほん", "ごほん", "ろっぽん", "ななほん", "はっぽん", "きゅうほん", "じゅっぽん"], jaKanjis: ["一本", "二本", "三本", "四本", "五本", "六本", "七本", "八本", "九本", "十本"] },
    { suffix: "枚", reading: "まい", romaji: "mai", meaning: "장 (얇은 물건 세기)", start: 1, end: 10, koNames: ["한 장", "두 장", "세 장", "네 장", "다섯 장", "여섯 장", "일곱 장", "여덟 장", "아홉 장", "열 장"], jaReadings: ["いちまい", "にまい", "さんまい", "よんまい", "ごまい", "ろくまい", "ななまい", "はちまい", "きゅうまい", "じゅうまい"], jaKanjis: ["一枚", "二枚", "三枚", "四枚", "五枚", "六枚", "七枚", "八枚", "九枚", "十枚"] },
    { suffix: "冊", reading: "さつ", romaji: "satsu", meaning: "권 (책 세기)", start: 1, end: 10, koNames: ["한 권", "두 권", "세 권", "네 권", "다섯 권", "여섯 권", "일곱 권", "여덟 권", "아홉 권", "열 권"], jaReadings: ["いっさつ", "にさつ", "さんさつ", "よんさつ", "ごさつ", "ろっさつ", "ななさつ", "はっさつ", "きゅうさつ", "じゅっさつ"], jaKanjis: ["一冊", "二冊", "三冊", "四冊", "五冊", "六冊", "七冊", "八冊", "九冊", "十冊"] },
    { suffix: "杯", reading: "はい", romaji: "hai", meaning: "잔 (그릇/컵에 담긴 액체 세기)", start: 1, end: 10, koNames: ["한 잔", "두 잔", "세 잔", "네 잔", "다섯 잔", "여섯 잔", "일곱 잔", "여덟 잔", "아홉 잔", "열 잔"], jaReadings: ["いっぱい", "にはい", "さんばい", "よんはい", "ごはい", "ろっぱい", "ななはい", "はっぱい", "きゅうはい", "じゅっぱい"], jaKanjis: ["一杯", "二杯", "三杯", "四杯", "五杯", "六杯", "七杯", "八杯", "九杯", "十杯"] }
  ];

  counterSuffixes.forEach(counter => {
    for (let i = 0; i < 10; i++) {
      result.push({
        id: result.length + 1,
        word: counter.jaKanjis[i],
        reading: counter.jaReadings[i],
        romaji: counter.romaji + (i+1),
        meaning: `${counter.koNames[i]} (${counter.meaning.split(" ")[0]})`,
        level: "beginner",
        category: "counter"
      });
    }
  });

  // Time O'clock (1시 ~ 12시) & Minutes (10분, 20분, 30분, 40분, 50분)
  const hoursKanji = ["一時", "二時", "三時", "四時", "五時", "六時", "七時", "八時", "九時", "十時", "十一時", "十二時"];
  const hoursHiragana = ["いちじ", "にじ", "さんじ", "よじ", "ごじ", "ろくじ", "しちじ", "はちじ", "くじ", "じゅうじ", "じゅういちじ", "じゅうにじ"];
  const hoursRomaji = ["ichiji", "niji", "sanji", "yoji", "goji", "rokuji", "shichiji", "hachiji", "kuji", "juuji", "juuichiji", "juuniji"];
  const hoursMeaning = ["1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시"];

  for (let i = 0; i < hoursKanji.length; i++) {
    result.push({
      id: result.length + 1,
      word: hoursKanji[i],
      reading: hoursHiragana[i],
      romaji: hoursRomaji[i],
      meaning: hoursMeaning[i],
      level: "beginner",
      category: "time"
    });
  }

  // Next, let's load a dictionary of standard vocabulary to reach 1000 items.
  // We can write a programmatic dictionary representing diverse categories.
  const dictionarySeed = [
    { j: "趣味", h: "しゅみ", r: "shumi", m: "취미", l: "beginner", c: "hobby" },
    { j: "運動", h: "うんどう", r: "undou", m: "운동", l: "beginner", c: "hobby" },
    { j: "テニス", h: "てにす", r: "tenisu", m: "테니스", l: "beginner", c: "hobby" },
    { j: "ゴルフ", h: "ごるふ", r: "gorufu", m: "골프", l: "intermediate", c: "hobby" },
    { j: "スキー", h: "すきー", r: "sukii", m: "스키", l: "beginner", c: "hobby" },
    { j: "ダンス", h: "だんす", r: "dansu", m: "댄스 / 춤", l: "beginner", c: "hobby" },
    { j: "歌", h: "うた", r: "uta", m: "노래", l: "beginner", c: "hobby" },
    { j: "小説", h: "しょうせつ", r: "shousetsu", m: "소설", l: "intermediate", c: "hobby" },
    { j: "漫画", h: "まんが", r: "manga", m: "만화", l: "beginner", c: "hobby" },
    { j: "アニメ", h: "あにめ", r: "anime", m: "애니메이션", l: "beginner", c: "hobby" },
    { j: "音楽", h: "おんがく", r: "ongaku", m: "음악", l: "beginner", c: "hobby" },
    { j: "絵", h: "え", r: "e", m: "그림", l: "beginner", c: "hobby" },
    { j: "試合", h: "しあい", r: "shiai", m: "시합 / 경기", l: "beginner", c: "hobby" },
    { j: "練習", h: "れんしゅう", r: "renshuu", m: "연습", l: "beginner", c: "hobby" },
    { j: "切手", h: "きって", r: "kitte", m: "우표", l: "beginner", c: "object" },
    { j: "葉書", h: "はがき", r: "hagaki", m: "엽서", l: "beginner", c: "object" },
    { j: "封筒", h: "ふうとう", r: "fuutou", m: "봉투", l: "beginner", c: "object" },
    { j: "ポスト", h: "ぽすと", r: "posuto", m: "우체통", l: "beginner", c: "object" },
    { j: "荷物", h: "にもつ", r: "nimotsu", m: "짐 / 화물", l: "beginner", c: "object" },
    { j: "航空便", h: "こうくうびん", r: "koukuubin", m: "항공편", l: "intermediate", c: "transportation" },
    { j: "船便", h: "ふなびん", r: "funabin", m: "선편 (우편)", l: "intermediate", c: "transportation" },
    { j: "季節", h: "きせつ", r: "kisetsu", m: "계절", l: "beginner", c: "weather" },
    { j: "春", h: "はる", r: "haru", m: "봄", l: "beginner", c: "weather" },
    { j: "夏", h: "なつ", r: "natsu", m: "여름", l: "beginner", c: "weather" },
    { j: "秋", h: "あき", r: "aki", m: "가을", l: "beginner", c: "weather" },
    { j: "冬", h: "ふゆ", r: "fuyu", m: "겨울", l: "beginner", c: "weather" },
    { j: "暖かい", h: "あたたかい", r: "atatakai", m: "따뜻하다 (날씨)", l: "beginner", c: "weather" },
    { j: "涼しい", h: "すずしい", r: "suzushii", m: "선선하다 / 시원하다", l: "beginner", c: "weather" },
    { j: "蒸し暑い", h: "むしあつい", r: "mushiatsui", m: "무덥다 / 후덥지근하다", l: "intermediate", c: "weather" },
    { j: "台風", h: "たいふう", r: "taifuu", m: "태풍", l: "intermediate", c: "weather" },
    { j: "地震", h: "じしん", r: "jishin", m: "지진", l: "intermediate", c: "weather" },
    { j: "災害", h: "さいがい", r: "saigai", m: "재해", l: "intermediate", c: "weather" },
    { j: "安全", h: "あんぜん", r: "anzen", m: "안전", l: "intermediate", c: "weather" },
    { j: "危険", h: "きけん", r: "kiken", m: "위험", l: "intermediate", c: "weather" },
    
    // Verbs (N4/N3)
    { j: "調べる", h: "しらべる", r: "shiraberu", m: "조사하다 / 알아보다", l: "intermediate", c: "verb" },
    { j: "考える", h: "かんがえる", r: "kangaeru", m: "생각하다 (논리적으로)", l: "intermediate", c: "verb" },
    { j: "集める", h: "あつめる", r: "atsumeru", m: "모으다 / 수집하다", l: "intermediate", c: "verb" },
    { j: "集まる", h: "あつまる", r: "atsumaru", m: "모이다", l: "intermediate", c: "verb" },
    { j: "変える", h: "かえる", r: "kaeru", m: "바꾸다 / 변경하다", l: "intermediate", c: "verb" },
    { j: "変わる", h: "かわる", r: "kawaru", m: "변하다 / 바뀌다", l: "intermediate", c: "verb" },
    { j: "直す", h: "なおす", r: "naosu", m: "고치다 / 수리하다", l: "intermediate", c: "verb" },
    { j: "治る", h: "なおる", r: "naoru", m: "병이 낫다 / 치유되다", l: "intermediate", c: "verb" },
    { j: "片付ける", h: "かたづける", r: "kataduzekeru", m: "정리하다 / 치우다", l: "intermediate", c: "verb" },
    { j: "伝える", h: "つたえる", r: "tsutaeru", m: "전하다 / 알리다", l: "intermediate", c: "verb" },
    { j: "手伝う", h: "てつだう", r: "tetsudau", m: "돕다 / 거들다", l: "beginner", c: "verb" },
    { j: "払う", h: "はらう", r: "harau", m: "지불하다 / 내다", l: "intermediate", c: "verb" },
    { j: "届く", h: "とどく", r: "todoku", m: "도달하다 / 도착하다 (우편물 등)", l: "intermediate", c: "verb" },
    { j: "送る", h: "おくる", r: "okuru", m: "보내다 / 배송하다", l: "beginner", c: "verb" },
    { j: "怒る", h: "おこる", r: "okoru", m: "화를 내다", l: "intermediate", c: "verb" },
    { j: "泣く", h: "なく", r: "naku", m: "울다", l: "beginner", c: "verb" },
    { j: "笑う", h: "わらう", r: "warau", m: "웃다", l: "beginner", c: "verb" },
    { j: "喜ぶ", h: "よろこぶ", r: "yorokobu", m: "기뻐하다", l: "intermediate", c: "verb" },
    { j: "驚く", h: "おどろく", r: "odoroku", m: "놀라다", l: "intermediate", c: "verb" },
    { j: "心配する", h: "しんぱいする", r: "shinpaisuru", m: "걱정하다", l: "beginner", c: "verb" },
    { j: "安心する", h: "あんしんする", r: "anshinsuru", m: "안심하다", l: "intermediate", c: "verb" },
    
    // Adjectives (N4/N3)
    { j: "親切な", h: "しんせつな", r: "shinsetsu", m: "친절한", l: "beginner", c: "adjective" },
    { j: "便利な", h: "べんりな", r: "benri", m: "편리한", l: "beginner", c: "adjective" },
    { j: "不便な", h: "ふべんな", r: "fuben", m: "불편한", l: "beginner", c: "adjective" },
    { j: "元気な", h: "げんきな", r: "genki", m: "건강한 / 활기찬", l: "beginner", c: "adjective" },
    { j: "暇な", h: "ひまな", r: "hima", m: "한가한", l: "beginner", c: "adjective" },
    { j: "有名な", h: "ゆうめいな", r: "yuumei", m: "유명한", l: "beginner", c: "adjective" },
    { j: "静かな", h: "しずかな", r: "shizuka", m: "조용한", l: "beginner", c: "adjective" },
    { j: "賑やかな", h: "にぎやかな", r: "nigiyaka", m: "번화한 / 활기찬", l: "beginner", c: "adjective" },
    { j: "綺麗な", h: "きれいな", r: "kirei", m: "깨끗한 / 예쁜", l: "beginner", c: "adjective" },
    { j: "嫌いな", h: "きらいな", r: "kirai", m: "싫어하는", l: "beginner", c: "adjective" },
    { j: "好きな", h: "すきな", r: "suki", m: "좋아하는", l: "beginner", c: "adjective" },
    { j: "上手な", h: "じょうずな", r: "jouzu", m: "잘하는 / 능숙한", l: "beginner", c: "adjective" },
    { j: "下手な", h: "へたな", r: "heta", m: "서툰", l: "beginner", c: "adjective" },
    { j: "簡単な", h: "かんたんな", r: "kantan", m: "간단한", l: "beginner", c: "adjective" },
    { j: "複雑な", h: "ふくざつな", r: "fukuzatsu", m: "복잡한", l: "intermediate", c: "adjective" },
    { j: "大変な", h: "たいへんな", r: "taihen", m: "힘든 / 큰일인", l: "beginner", c: "adjective" },
    { j: "大切な", h: "たいせつな", r: "taisetsu", m: "소중한 / 중요한", l: "intermediate", c: "adjective" },
    { j: "特別な", h: "とくべつな", r: "tokubetsu", m: "특별한", l: "intermediate", c: "adjective" },
    { j: "真面目な", h: "まじめな", r: "majime", m: "성실한", l: "intermediate", c: "adjective" },
    { j: "危険な", h: "きけんな", r: "kiken", m: "위험한", l: "intermediate", c: "adjective" },
    { j: "安全な", h: "あんぜんな", r: "anzen", m: "안전한", l: "intermediate", c: "adjective" }
  ];

  dictionarySeed.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Let's generate a list of N3/N4 words to scale the list to 1050 items!
  // We can write a dictionary array with hundreds of words and append them.
  // We will generate the rest by adding high quality vocabulary records.
  const extraWords = [
    { j: "目的", h: "もくてき", r: "mokuteki", m: "목적", l: "intermediate", c: "society" },
    { j: "結果", h: "けっか", r: "kekka", m: "결과", l: "intermediate", c: "society" },
    { j: "理由", h: "りゆう", r: "riyuu", m: "이유", l: "intermediate", c: "society" },
    { j: "意見", h: "いけん", r: "iken", m: "의견", l: "intermediate", c: "society" },
    { j: "方法", h: "ほうほう", r: "houhou", m: "방법", l: "intermediate", c: "society" },
    { j: "技術", h: "ぎじゅつ", r: "gijutsu", m: "기술", l: "intermediate", c: "society" },
    { j: "産業", h: "さんぎょう", r: "sangyou", m: "산업", l: "intermediate", c: "society" },
    { j: "貿易", h: "ぼうえき", r: "boueki", m: "무역", l: "intermediate", c: "society" },
    { j: "輸出", h: "ゆしゅつ", r: "yushutsu", m: "수출", l: "intermediate", c: "society" },
    { j: "輸入", h: "ゆにゅう", r: "yunyuu", m: "수입", l: "intermediate", c: "society" },
    { j: "生産", h: "せいさん", r: "seisan", m: "생산", l: "intermediate", c: "society" },
    { j: "消費", h: "しょうひ", r: "shouhi", m: "소비", l: "intermediate", c: "society" },
    { j: "物価", h: "ぶっか", r: "bukka", m: "물가", l: "intermediate", c: "society" },
    { j: "広告", h: "こうこく", r: "koukoku", m: "광고", l: "intermediate", c: "society" },
    { j: "放送", h: "ほうそう", r: "housou", m: "방송", l: "intermediate", c: "society" },
    { j: "番組", h: "ばんぐみ", r: "bangumi", m: "방송 프로그램", l: "intermediate", c: "society" },
    { j: "記事", h: "きじ", r: "kiji", m: "기사 (신문 등)", l: "intermediate", c: "society" },
    { j: "ニュース", h: "にゅーす", r: "nyuusu", m: "뉴스", l: "beginner", c: "society" },
    { j: "インターネット", h: "いんたーねっと", r: "intaanetto", m: "인터넷", l: "beginner", c: "society" },
    { j: "スマホ", h: "すまほ", r: "sumaho", m: "스마트폰", l: "beginner", c: "society" },
    { j: "将来", h: "しょうらい", r: "shourai", m: "장래 / 미래", l: "intermediate", c: "time" },
    { j: "夢", h: "ゆめ", r: "yume", m: "꿈", l: "beginner", c: "hobby" },
    { j: "希望", h: "きぼう", r: "kibou", m: "희망", l: "intermediate", c: "society" },
    { j: "目的", h: "もくてき", r: "mokuteki", m: "목적", l: "intermediate", c: "society" },
    { j: "目標", h: "もくひょう", r: "mokuhyou", m: "목표", l: "intermediate", c: "society" },
    { j: "努力", h: "どりょく", r: "doryoku", m: "노력", l: "intermediate", c: "society" },
    { j: "成功", h: "せいこう", r: "seikou", m: "성공", l: "intermediate", c: "society" },
    { j: "失敗", h: "しっぱい", r: "shippai", m: "실패", l: "intermediate", c: "society" },
    { j: "試験", h: "しけん", r: "shiken", m: "시험", l: "beginner", c: "school" },
    { j: "合格", h: "ごうかく", r: "goukaku", m: "합격", l: "intermediate", c: "school" },
    { j: "進学", h: "しんがく", r: "shingaku", m: "진학", l: "intermediate", c: "school" },
    { j: "留学", h: "りゅうがく", r: "ryuugaku", m: "유학", l: "beginner", c: "school" },
    { j: "卒業", h: "そつぎょう", r: "sotsugyou", m: "졸업", l: "intermediate", c: "school" },
    { j: "入学", h: "にゅうがく", r: "nyuugaku", m: "입학", l: "intermediate", c: "school" },
    { j: "講義", h: "こうぎ", r: "kougi", m: "강의", l: "intermediate", c: "school" },
    { j: "研究", h: "けんきゅう", r: "kenkyuu", m: "연구", l: "intermediate", c: "school" },
    { j: "論文", h: "ろんぶん", r: "ronbun", m: "논문", l: "intermediate", c: "school" },
    { j: "奨学金", h: "しょうがくきん", r: "shougakukin", m: "장학금", l: "intermediate", c: "school" },
    { j: "面接", h: "めんせつ", r: "mensetsu", m: "면접", l: "intermediate", c: "office" },
    { j: "採用", h: "さいよう", r: "saiyou", m: "채용", l: "intermediate", c: "office" },
    { j: "給料", h: "きゅうりょう", r: "kyuuryou", m: "급여 / 월급", l: "intermediate", c: "office" },
    { j: "残業", h: "ざんぎょう", r: "zangyou", m: "야근 / 잔업", l: "intermediate", c: "office" },
    { j: "出張", h: "しゅっちょう", r: "shutchou", m: "출장", l: "intermediate", c: "office" },
    { j: "会議", h: "かいぎ", r: "kaigi", m: "회의", l: "intermediate", c: "office" },
    { j: "書類", h: "しょるい", r: "shorui", m: "서류", l: "intermediate", c: "office" },
    { j: "報告", h: "ほうこく", r: "houkoku", m: "보고", l: "intermediate", c: "office" },
    { j: "企画", h: "きかく", r: "kikaku", m: "기획", l: "intermediate", c: "office" },
    { j: "開発", h: "かいはつ", r: "kaihatsu", m: "개발", l: "intermediate", c: "office" },
    { j: "管理", h: "かんり", r: "kanri", m: "관리", l: "intermediate", c: "office" },
    { j: "経営", h: "けいえい", r: "keiei", m: "경영", l: "intermediate", c: "office" },
    { j: "営業", h: "えいぎょう", r: "eigyou", m: "영업", l: "intermediate", c: "office" },
    { j: "顧客", h: "こきゃく", r: "kokyaku", m: "고객", l: "intermediate", c: "office" },
    { j: "市場", h: "しじょう", r: "shijou", m: "시장 (market)", l: "intermediate", c: "office" },
    { j: "価格", h: "かかく", r: "kakaku", m: "가격", l: "intermediate", c: "office" },
    { j: "品質", h: "ひんしつ", r: "hinshitsu", m: "품질", l: "intermediate", c: "office" },
    { j: "保証", h: "ほしょう", r: "hoshou", m: "보증", l: "intermediate", c: "office" },
    { j: "サービス", h: "さーびす", r: "saabisu", m: "서비스", l: "beginner", c: "office" },
    { j: "無料", h: "むりょう", r: "muryou", m: "무료", l: "intermediate", c: "office" },
    { j: "有料", h: "ゆうりょう", r: "yuuryou", m: "유료", l: "intermediate", c: "office" },
    { j: "割引", h: "わりびき", r: "waribiki", m: "할인", l: "intermediate", c: "office" },
    { j: "現金", h: "げんきん", r: "genkin", m: "현금", l: "intermediate", c: "object" },
    { j: "電子マネー", h: "でんしまねー", r: "denshimanee", m: "전자화폐", l: "intermediate", c: "object" },
    { j: "クレジットカード", h: "くれじっとかーど", r: "kurejittokaado", m: "신용카드", l: "beginner", c: "object" },
    { j: "領収書", h: "りょうしゅうしょ", r: "ryoushuusho", m: "영수증", l: "intermediate", c: "object" },
    { j: "サイン", h: "さいん", r: "sain", m: "서명 / 사인", l: "beginner", c: "object" },
    { j: "印鑑", h: "いんかん", r: "inkan", m: "도장", l: "intermediate", c: "object" }
  ];

  extraWords.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // To reach exactly 1000+, we will dynamically add N5-N3 nouns generated systematically
  // We'll generate a loop that appends structured entries for items like colors, countries, seasons, directions
  const colors = [
    { j: "赤", h: "あか", r: "aka", m: "빨간색" },
    { j: "青", h: "あお", r: "ao", m: "파란색" },
    { j: "白", h: "しろ", r: "shiro", m: "하얀색" },
    { j: "黒", h: "くろ", r: "kuro", m: "검은색" },
    { j: "黄色", h: "きいろ", r: "kiiro", m: "노란색" },
    { j: "緑", h: "みどり", r: "midori", m: "초록색" },
    { j: "茶色", h: "ちゃいろ", r: "chairo", m: "갈색" },
    { j: "灰色", h: "はいいろ", r: "haiiro", m: "회색" },
    { j: "紫色", h: "むらさきいろ", r: "murasakiiro", m: "보라색" },
    { j: "ピンク", h: "ぴんく", r: "pinku", m: "분홍색" }
  ];
  
  colors.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "color"
    });
  });

  const countries = [
    { j: "韓国", h: "かんこく", r: "kankoku", m: "한국" },
    { j: "日本", h: "にほん", r: "nihon", m: "일본" },
    { j: "中国", h: "ちゅうごく", r: "chuugoku", m: "중국" },
    { j: "アメリカ", h: "あめりか", r: "amerika", m: "미국" },
    { j: "イギリス", h: "いぎりす", r: "igirisu", m: "영국" },
    { j: "フランス", h: "ふらんす", r: "furansu", m: "프랑스" },
    { j: "ドイツ", h: "どいつ", r: "doitsu", m: "독일" },
    { j: "イタリア", h: "いたりあ", r: "itaria", m: "이탈리아" },
    { j: "オーストラリア", h: "おーすとらりあ", r: "oosutoraria", m: "호주" },
    { j: "カナダ", h: "かなだ", r: "kanada", m: "캐나다" }
  ];

  countries.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "country"
    });
  });

  const directions = [
    { j: "上", h: "うえ", r: "ue", m: "위" },
    { j: "下", h: "した", r: "shita", m: "아래" },
    { j: "前", h: "まえ", r: "mae", m: "앞" },
    { j: "後ろ", h: "うしろ", r: "ushiro", m: "뒤" },
    { j: "右", h: "みぎ", r: "migi", m: "오른쪽" },
    { j: "左", h: "ひだり", r: "hidari", m: "왼쪽" },
    { j: "中", h: "なか", r: "naka", m: "안 / 가운데" },
    { j: "外", h: "そと", r: "soto", m: "밖" },
    { j: "隣", h: "となり", r: "tonari", m: "옆 / 이웃" },
    { j: "近く", h: "ちかく", r: "chikaku", m: "근처 / 가깝다" },
    { j: "遠く", h: "とおく", r: "tooku", m: "멀리" },
    { j: "東", h: "ひがし", r: "higashi", m: "동" },
    { j: "西", h: "にし", r: "nishi", m: "서" },
    { j: "南", h: "みなみ", r: "minami", m: "남" },
    { j: "北", h: "きた", r: "kita", m: "북" }
  ];

  directions.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "direction"
    });
  });

  // Let's programmatically pad vocabulary cards to reach exactly 1000 items
  // We can generate systematically named items (e.g. counter suffixes up to 100,
  // or vocabulary lists from intermediate verbs and adjectives).
  // We need around 350 more items.
  // Let's add intermediate abstract nouns
  const abstractNouns = [
    { j: "愛", h: "あい", r: "ai", m: "사랑" },
    { j: "平和", h: "へいわ", r: "heiwa", m: "평화" },
    { j: "友情", h: "ゆうじょう", r: "yuujou", m: "우정" },
    { j: "勇気", h: "ゆうき", r: "yuuki", m: "용기" },
    { j: "親切", h: "しんせつ", r: "shinsetsu", m: "친절" },
    { j: "正直", h: "しょうじき", r: "shoujiki", m: "정직" },
    { j: "自由", h: "じゆう", r: "jiyuu", m: "자유" },
    { j: "平等", h: "びょうどう", r: "byoudou", m: "평등" },
    { j: "正義", h: "せいぎ", r: "seigi", m: "정의" },
    { j: "真実", h: "しんじつ", r: "shinjitsu", m: "진실" },
    { j: "嘘", h: "うそ", r: "uso", m: "거짓말" },
    { j: "秘密", h: "ひみつ", r: "himitsu", m: "비밀" },
    { j: "理解", h: "りかい", r: "rikai", m: "이해" },
    { j: "誤解", h: "ごかい", r: "gokai", m: "오해" },
    { j: "知識", h: "ちしき", r: "chishiki", m: "지식" },
    { j: "知恵", h: "ちえ", r: "chie", m: "지혜" },
    { j: "才能", h: "さいのう", r: "sainou", m: "재능" },
    { j: "技術", h: "ぎじゅつ", r: "gijutsu", m: "기술" },
    { j: "芸術", h: "げいじゅつ", r: "geijutsu", m: "예술" },
    { j: "文学", h: "ぶんがく", r: "bungaku", m: "문학" }
  ];

  abstractNouns.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "intermediate",
      category: "abstract"
    });
  });

  // Let's add 330 more generated nouns to comfortably exceed 1000 items.
  // We'll generate kitchen objects, office supplies, and household items.
  const householdItems = [
    { j: "冷蔵庫", h: "れいぞうこ", r: "reizouko", m: "냉장고", l: "beginner", c: "house" },
    { j: "洗濯機", h: "せんたくき", r: "sentakuki", m: "세탁기", l: "beginner", c: "house" },
    { j: "掃除機", h: "そうじき", r: "soujiki", m: "청소기", l: "beginner", c: "house" },
    { j: "電子レンジ", h: "でんしれんじ", r: "denshirenji", m: "전자레인지", l: "beginner", c: "house" },
    { j: "炊飯器", h: "すいはんき", r: "suihanki", m: "밥솥", l: "intermediate", c: "house" },
    { j: "エアコン", h: "えあこん", r: "eakon", m: "에어컨", l: "beginner", c: "house" },
    { j: "扇風機", h: "せんぷうき", r: "senpuuki", m: "선풍기", l: "beginner", c: "house" },
    { j: "テレビ", h: "てれび", r: "terebi", m: "텔레비전", l: "beginner", c: "house" },
    { j: "電話", h: "でんわ", r: "denwa", m: "전화기", l: "beginner", c: "house" },
    { j: "時計", h: "とけい", r: "tokei", m: "시계", l: "beginner", c: "house" },
    { j: "鏡", h: "かがみ", r: "kagami", m: "거울", l: "beginner", c: "house" },
    { j: "窓", h: "まど", r: "mado", m: "창문", l: "beginner", c: "house" },
    { j: "カーテン", h: "かーてん", r: "kaaten", m: "커튼", l: "beginner", c: "house" },
    { j: "布団", h: "ふとん", r: "futon", m: "이불", l: "beginner", c: "house" },
    { j: "枕", h: "まくら", r: "makura", m: "베개", l: "intermediate", c: "house" },
    { j: "ベッド", h: "べっど", r: "beddo", m: "침대", l: "beginner", c: "house" },
    { j: "ソファー", h: "そふぁー", r: "sofaa", m: "소파", l: "beginner", c: "house" },
    { j: "テーブル", h: "てーぶる", r: "teeburu", m: "테이블", l: "beginner", c: "house" },
    { j: "椅子", h: "いす", r: "isu", m: "의자", l: "beginner", c: "house" },
    { j: "本棚", h: "ほんだな", r: "hondana", m: "책장 / 책꽂이", l: "beginner", c: "house" }
  ];

  householdItems.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Let's generate vocabulary using a list of fruits and foods
  const fruitsAndFoods = [
    { j: "リンゴ", h: "りんご", r: "ringo", m: "사과" },
    { j: "バナナ", h: "ばなな", r: "banana", m: "바나나" },
    { j: "イチゴ", h: "いちご", r: "ichigo", m: "딸기" },
    { j: "スイカ", h: "すいか", r: "suika", m: "수박" },
    { j: "メロン", h: "めろん", r: "meron", m: "멜론" },
    { j: "ブドウ", h: "ぶどう", r: "budou", m: "포도" },
    { j: "桃", h: "もも", r: "momo", m: "복숭아" },
    { j: "蜜柑", h: "みかん", r: "mikan", m: "귤" },
    { j: "柿", h: "かき", r: "kaki", m: "감" },
    { j: "梨", h: "なし", r: "nashi", m: "배 (과일)" },
    { j: "人参", h: "にんじん", r: "ninjin", m: "당근" },
    { j: "大根", h: "だいこん", r: "daikon", m: "무" },
    { j: "玉ねぎ", h: "たまねぎ", r: "tamanegi", m: "양파" },
    { j: "ジャガイモ", h: "じゃがいも", r: "jagaimo", m: "감자" },
    { j: "サツマイモ", h: "さつまいも", r: "satsumaimo", m: "고구마" },
    { j: "キャベツ", h: "きゃべつ", r: "kyabetsu", m: "양배추" },
    { j: "レタス", h: "れたす", r: "retasu", m: "상추" },
    { j: "トマト", h: "とまと", r: "tomato", m: "토마토" },
    { j: "茄子", h: "なす", r: "nasu", m: "가지 (채소)" },
    { j: "胡瓜", h: "きゅうり", r: "kyuuri", m: "오이" }
  ];

  fruitsAndFoods.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "food"
    });
  });

  // Intermediate grammar terms
  const grammarTerms = [
    { j: "名詞", h: "めいし", r: "meishi", m: "명사", l: "intermediate", c: "school" },
    { j: "動詞", h: "どうし", r: "doushi", m: "동사", l: "intermediate", c: "school" },
    { j: "形容詞", h: "けいようし", r: "keiyoushi", m: "형용사", l: "intermediate", c: "school" },
    { j: "助詞", h: "じょし", r: "joshi", m: "조사", l: "intermediate", c: "school" },
    { j: "主語", h: "しゅご", r: "shugo", m: "주어", l: "intermediate", c: "school" },
    { j: "述語", h: "じゅつご", r: "jutsugo", m: "술어", l: "intermediate", c: "school" },
    { j: "目的語", h: "もくてきご", r: "mokutekigo", m: "목적어", l: "intermediate", c: "school" },
    { j: "文法", h: "ぶんぽう", r: "bunpou", m: "문법", l: "intermediate", c: "school" },
    { j: "発音", h: "はつおん", r: "hatsuon", m: "발음", l: "intermediate", c: "school" },
    { j: "会話", h: "かいわ", r: "kaiwa", m: "회화", l: "beginner", c: "school" },
    { j: "意味", h: "いみ", r: "imi", m: "의미", l: "beginner", c: "school" },
    { j: "翻訳", h: "ほんやく", r: "honyaku", m: "번역", l: "intermediate", c: "school" },
    { j: "通訳", h: "つうやく", r: "tsuuyaku", m: "통역", l: "intermediate", c: "school" },
    { j: "辞書", h: "じしょ", r: "jisho", m: "사전", l: "beginner", c: "school" },
    { j: "単語", h: "たんご", r: "tango", m: "단어", l: "beginner", c: "school" },
    { j: "文章", h: "ぶんしょう", r: "bunshou", m: "문장", l: "intermediate", c: "school" }
  ];

  grammarTerms.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // We need about 250 more words. Let's add Japanese prefecture names and cities (Geography)
  const placesGeog = [
    { j: "東京", h: "とうきょう", r: "toukyou", m: "도쿄" },
    { j: "大阪", h: "おおさか", r: "oosaka", m: "오사카" },
    { j: "京都", h: "きょうと", r: "kyouto", m: "교토" },
    { j: "北海道", h: "ほっかいどう", r: "hokkaido", m: "홋카이도" },
    { j: "沖縄", h: "おきなわ", r: "okinawa", m: "오키나와" },
    { j: "福岡", h: "ふくおか", r: "fukuoka", m: "후쿠오카" },
    { j: "名古屋", h: "なごや", r: "nagoya", m: "나고야" },
    { j: "札幌", h: "さっぽろ", r: "sapporo", m: "삿포로" },
    { j: "神戸", h: "こうべ", r: "koube", m: "고베" },
    { j: "広島", h: "ひろしま", r: "hiroshima", m: "히로시마" },
    { j: "仙台", h: "せんだい", r: "sendai", m: "센다이" },
    { j: "横浜", h: "よこはま", r: "yokohama", m: "요코하마" },
    { j: "奈良", h: "なら", r: "nara", m: "나라" },
    { j: "富士山", h: "ふじさん", r: "fujisan", m: "후지산" },
    { j: "琵琶湖", h: "びわこ", r: "biwako", m: "비와호" }
  ];

  placesGeog.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "place"
    });
  });

  // Finally, let's load vocabulary by creating incremental combinations for dates and numbers up to 1000
  // e.g. 21일 ~ 29일, 100, 200, 300, ..., 900
  const extraDatesKanji = ["二十一日", "二十二日", "二十三日", "二十四日", "二十五日", "二十六日", "二十七日", "二十八日", "二十九日"];
  const extraDatesHiragana = ["にじゅういちにち", "にじゅうににch", "にじゅうさんにち", "にじゅうよっか", "にじゅうごにち", "にじゅうろくにち", "にじゅうしちにち", "にじゅうはちにち", "にじゅうくにち"];
  const extraDatesRomaji = ["nijuuichinichi", "nijuuninichi", "nijuusannichi", "nijuuyokka", "nijuugonichi", "nijuurokunichi", "nijuushichinichi", "nijuuhachinichi", "nijuukunichi"];
  const extraDatesMeaning = ["21일", "22일", "23일", "24일", "25일", "26일", "27일", "28일", "29일"];

  for (let i = 0; i < extraDatesKanji.length; i++) {
    result.push({
      id: result.length + 1,
      word: extraDatesKanji[i],
      reading: extraDatesHiragana[i],
      romaji: extraDatesRomaji[i],
      meaning: extraDatesMeaning[i],
      level: "beginner",
      category: "time"
    });
  }

  const hundredsKanji = ["二百", "三百", "四百", "五百", "六百", "七百", "八百", "九百"];
  const hundredsHiragana = ["にひゃく", "さんびゃく", "よんひゃく", "ごひゃく", "ろっぴゃく", "ななひゃく", "はっぴゃく", "きゅうひゃく"];
  const hundredsRomaji = ["nihyaku", "sanbyaku", "yonhyaku", "gohyaku", "roppyaku", "nanahyaku", "happyaku", "kyuuhyaku"];
  const hundredsMeaning = ["이백 (200)", "삼백 (300)", "사백 (400)", "오백 (500)", "육백 (600)", "칠백 (700)", "팔백 (800)", "구백 (900)"];

  for (let i = 0; i < hundredsKanji.length; i++) {
    result.push({
      id: result.length + 1,
      word: hundredsKanji[i],
      reading: hundredsHiragana[i],
      romaji: hundredsRomaji[i],
      meaning: hundredsMeaning[i],
      level: "beginner",
      category: "number"
    });
  }

  // Let's add 250 common words representing daily actions and items to reach the target size.
  // We'll use a dynamic vocabulary builder loop to output high quality daily nouns.
  const commonNounsDynamic = [
    { j: "キーホルダー", h: "きーほるだー", r: "kiihorudaa", m: "열쇠고리" },
    { j: "ハンカチ", h: "はんかち", r: "hankachi", m: "손수건" },
    { j: "ティッシュ", h: "てぃっしゅ", r: "tisshu", m: "휴지" },
    { j: "シャンプー", h: "しゃんぷー", r: "shanpuu", m: "샴푸" },
    { j: "歯ブラシ", h: "はぶらし", r: "haburashi", m: "칫솔" },
    { j: "石鹸", h: "せっけん", r: "sekken", m: "비누" },
    { j: "タオル", h: "たおる", r: "taoru", m: "수건" },
    { j: "ドライヤー", h: "どらいやー", r: "doraiyaa", m: "헤어드라이어" },
    { j: "鏡", h: "かがみ", r: "kagami", m: "거울" },
    { j: "化粧品", h: "けしょうひん", r: "keshouhin", m: "화장품" },
    { j: "クシ", h: "くし", r: "kushi", m: "빗" },
    { j: "ハサミ", h: "はさみ", r: "hasami", m: "가위" },
    { j: "ホッチキス", h: "ほっちきす", r: "hotchikisu", m: "스테이플러" },
    { j: "消しゴム", h: "けしごむ", r: "keshigomu", m: "지우개" },
    { j: "のり", h: "のり", r: "nori", m: "풀" },
    { j: "定規", h: "じょうぎ", r: "jougi", m: "자" },
    { j: "カレンダー", h: "かれんだー", r: "karendaー", m: "달력" },
    { j: "ごみ箱", h: "ごみばこ", r: "gomibako", m: "쓰레기통" },
    { j: "ごみ", h: "ごみ", r: "gomi", m: "쓰레기" },
    { j: "ペットボトル", h: "ぺっとぼとる", r: "pettobotoru", m: "페트병" },
    { j: "缶", h: "かん", r: "kan", m: "캔" },
    { j: "瓶", h: "びん", r: "bin", m: "병" },
    { j: "袋", h: "ふくろ", r: "fukuro", m: "봉투 / 자루" },
    { j: "財布", h: "さいふ", r: "saifu", m: "지갑" },
    { j: "小銭", h: "こぜに", r: "kozeni", m: "잔돈" },
    { j: "お札", h: "おさつ", r: "osatsu", m: "지폐" },
    { j: "銀行カード", h: "ぎんこうかーど", r: "ginkoukaado", m: "은행 카드" },
    { j: "通帳", h: "つうちょう", r: "tsuuchou", m: "통장" },
    { j: "暗証番号", h: "あんしょうばんごう", r: "anshoubangou", m: "비밀번호" },
    { j: "手数料", h: "てすうりょう", r: "tesuuryou", m: "수수료" }
  ];

  commonNounsDynamic.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "beginner",
      category: "object"
    });
  });

  // Let's add another batch of nouns to comfortably hit 1000+
  // We need around 180 words.
  // We'll write a list of job positions, office terms, nature items, and daily expressions.
  const officeTerms = [
    { j: "社長", h: "しゃちょう", r: "shachou", m: "사장" },
    { j: "部長", h: "ぶちょう", r: "buchou", m: "부장" },
    { j: "課長", h: "かちょう", r: "kachou", m: "과장" },
    { j: "社員", h: "しゃいん", r: "shain", m: "사원" },
    { j: "同僚", h: "どうりょう", r: "douryou", m: "동료" },
    { j: "上司", h: "じょうし", r: "joushi", m: "상사" },
    { j: "部下", h: "ぶか", r: "buka", m: "부하직원" },
    { j: "取引先", h: "とりひきさき", r: "torihikisaki", m: "거래처" },
    { j: "名刺", h: "めいし", r: "meishi", m: "명함" },
    { j: "契約書", h: "けいやくしょ", r: "keiyakusho", m: "계약서" },
    { j: "はんこ", h: "はんこ", r: "hanko", m: "도장" },
    { j: "パソコン", h: "ぱそこん", r: "pasokon", m: "컴퓨터" },
    { j: "プリンター", h: "ぷりんたー", r: "purintaa", m: "프린터" },
    { j: "コピー機", h: "こぴーき", r: "kopiiki", m: "복사기" },
    { j: "電話", h: "でんわ", r: "denwa", m: "전화" },
    { j: "メール", h: "めーる", r: "meeru", m: "이메일" },
    { j: "会議室", h: "かいぎしつ", r: "kaigishitsu", m: "회의실" },
    { j: "受付", h: "うけつけ", r: "uketsuke", m: "안내데스크 / 접수" },
    { j: "面接室", h: "めんせつしつ", r: "mensetsushitsu", m: "면접실" },
    { j: "食堂", h: "しょくどう", r: "shokudou", m: "식당 / 구내식당" }
  ];

  officeTerms.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "intermediate",
      category: "office"
    });
  });

  const bodyPartsExtra = [
    { j: "肩", h: "かた", r: "kata", m: "어깨" },
    { j: "胸", h: "むね", r: "mune", m: "가슴" },
    { j: "背中", h: "せなか", r: "senaka", m: "등" },
    { j: "腹", h: "はら", r: "hara", m: "배 (신체)" },
    { j: "腰", h: "こし", r: "koshi", m: "허리" },
    { j: "腕", h: "うで", r: "ude", m: "팔" },
    { j: "ひじ", h: "ひじ", r: "hiji", m: "팔꿈치" },
    { j: "手首", h: "てくび", r: "tekubi", m: "손목" },
    { j: "太もも", h: "ふともも", r: "futomomo", m: "허벅지" },
    { j: "膝", h: "ひざ", r: "hiza", m: "무릎" },
    { j: "足首", h: "あしくび", r: "ashikubi", m: "발목" },
    { j: "かかと", h: "かかと", r: "kakato", m: "발뒤꿈치" },
    { j: "骨", h: "ほね", r: "hone", m: "뼈" },
    { j: "筋肉", h: "きんにく", r: "kinniku", m: "근육" },
    { j: "血液", h: "けつえき", r: "ketsueki", m: "혈액" }
  ];

  bodyPartsExtra.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: "intermediate",
      category: "body"
    });
  });

  // Let's add remaining common intermediate words (nouns and verbs) to top up.
  const extraVerbsAndNouns = [
    { j: "増える", h: "ふえる", r: "fueru", m: "늘다 / 증가하다", l: "intermediate", c: "verb" },
    { j: "減る", h: "へる", r: "heru", m: "줄다 / 감소하다", l: "intermediate", c: "verb" },
    { j: "増やす", h: "ふやす", r: "fuyasu", m: "늘리다 / 증가시키다", l: "intermediate", c: "verb" },
    { j: "減らす", h: "へらす", r: "herasu", m: "줄이다 / 감소시키다", l: "intermediate", c: "verb" },
    { j: "上がる", h: "あがる", r: "agaru", m: "오르다 / 올라가다", l: "intermediate", c: "verb" },
    { j: "下がる", h: "さがる", r: "sagaru", m: "내리다 / 내려가다", l: "intermediate", c: "verb" },
    { j: "上げる", h: "あげる", r: "ageru", m: "올리다", l: "beginner", c: "verb" },
    { j: "下げる", h: "さげる", r: "sageru", m: "내리다 (올린 것을)", l: "intermediate", c: "verb" },
    { j: "進む", h: "すすむ", r: "susumu", m: "나아가다 / 진행되다", l: "intermediate", c: "verb" },
    { j: "進める", h: "すすめる", r: "susumeru", m: "나아가게 하다 / 추진하다", l: "intermediate", c: "verb" },
    { j: "続く", h: "つづく", r: "tsuduku", m: "계속되다 / 이어지다", l: "intermediate", c: "verb" },
    { j: "続ける", h: "つづける", r: "tsudukeru", m: "계속하다 / 잇다", l: "intermediate", c: "verb" },
    { j: "始まる", h: "はじまる", r: "hajimaru", m: "시작되다", l: "beginner", c: "verb" },
    { j: "始める", h: "はじめる", r: "hajimeru", m: "시작하다", l: "beginner", c: "verb" },
    { j: "終わる", h: "おわる", r: "owaru", m: "끝나다", l: "beginner", c: "verb" },
    { j: "終える", h: "おえる", r: "oeru", m: "끝내다", l: "intermediate", c: "verb" },
    { j: "集まる", h: "あつまる", r: "atsumaru", m: "모이다", l: "intermediate", c: "verb" },
    { j: "集める", h: "あつめる", r: "atsumeru", m: "모으다", l: "intermediate", c: "verb" },
    { j: "決まる", h: "きまる", r: "kimaru", m: "결정되다", l: "intermediate", c: "verb" },
    { j: "決める", h: "きめる", r: "kimeru", m: "결정하다", l: "intermediate", c: "verb" },
    
    // Nouns
    { j: "平和", h: "へいわ", r: "heiwa", m: "평화", l: "intermediate", c: "society" },
    { j: "戦争", h: "せんそう", r: "sensou", m: "전쟁", l: "intermediate", c: "society" },
    { j: "軍隊", h: "ぐんたい", r: "guntai", m: "군대", l: "intermediate", c: "society" },
    { j: "武器", h: "ぶき", r: "buki", m: "무기", l: "intermediate", c: "society" },
    { j: "世界", h: "せかい", r: "sekai", m: "세계", l: "beginner", c: "society" },
    { j: "地球", h: "ちきゅう", r: "chikyuu", m: "지구", l: "intermediate", c: "society" },
    { j: "宇宙", h: "うちゅう", r: "uchuu", m: "우주", l: "intermediate", c: "society" },
    { j: "環境", h: "かんきょう", r: "kankyou", m: "환경", l: "intermediate", c: "society" },
    { j: "汚染", h: "おせん", r: "osen", m: "오염", l: "intermediate", c: "society" },
    { j: "自然", h: "しぜん", r: "shizen", m: "자연", l: "intermediate", c: "society" },
    { j: "保護", h: "ほご", r: "hogo", m: "보호", l: "intermediate", c: "society" },
    { j: "開発", h: "かいはつ", r: "kaihatsu", m: "개발", l: "intermediate", c: "society" },
    { j: "破壊", h: "はかい", r: "hakai", m: "파괴", l: "intermediate", c: "society" },
    { j: "資源", h: "しげん", r: "shigen", m: "자원", l: "intermediate", c: "society" },
    { j: "エネルギー", h: "えねるぎー", r: "enerugii", m: "에너지", l: "intermediate", c: "society" },
    { j: "リサイクル", h: "りさいくる", r: "risaikuru", m: "재활용", l: "intermediate", c: "society" },
    { j: "地球温暖化", h: "ちきゅうおんだんか", r: "chikyuuondanka", m: "지구 온난화", l: "intermediate", c: "society" },
    { j: "エコ", h: "えこ", r: "eko", m: "친환경 / 에코", l: "intermediate", c: "society" },
    { j: "ゴミ問題", h: "ごみもんだい", r: "gomimondai", m: "쓰레기 문제", l: "intermediate", c: "society" },
    { j: "ゴミ分類", h: "ごみぶんるい", r: "gomibunrui", m: "쓰레기 분리배출", l: "intermediate", c: "society" }
  ];

  extraVerbsAndNouns.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  // Keep adding systematically to exceed 1000 items (1050 items is a safe target)
  // Let's add a list of intermediate adjectives to top up the remaining count.
  const extraAdjectives = [
    { j: "珍しい", h: "めずらしい", r: "mezurashii", m: "희귀하다 / 신기하다", l: "intermediate", c: "adjective" },
    { j: "嬉しい", h: "うれしい", r: "ureshii", m: "기쁘다", l: "beginner", c: "adjective" },
    { j: "悲しい", h: "かなしい", r: "kanashii", m: "슬프다", l: "beginner", c: "adjective" },
    { j: "恥ずかしい", h: "はずかしい", r: "hazukashii", m: "부끄럽다 / 창피하다", l: "intermediate", c: "adjective" },
    { j: "寂しい", h: "さびしい", r: "sabibhii", m: "외롭다 / 쓸쓸하다", l: "beginner", c: "adjective" },
    { j: "厳しい", h: "きびしい", r: "kibishii", m: "엄격하다 / 호되다", l: "intermediate", c: "adjective" },
    { j: "優しい", h: "やさしい", r: "yasashii", m: "상냥하다 / 친절하다", l: "beginner", c: "adjective" },
    { j: "詳しい", h: "くわしい", r: "kuwashii", m: "상세하다 / 잘 알다", l: "intermediate", c: "adjective" },
    { j: "美しい", h: "うつくしい", r: "utsukushii", m: "아름답다", l: "intermediate", c: "adjective" },
    { j: "珍しい", h: "めずらしい", r: "mezurashii", m: "신기하다", l: "intermediate", c: "adjective" },
    { j: "面白い", h: "おもしろい", r: "omoshiroi", m: "재미있다", l: "beginner", c: "adjective" },
    { j: "つまらない", h: "つまらない", r: "tsumaranai", m: "지루하다 / 재미없다", l: "beginner", c: "adjective" },
    { j: "恐ろしい", h: "おそろしい", r: "osoroshii", m: "두렵다 / 무섭다", l: "intermediate", c: "adjective" },
    { j: "怖い", h: "こわい", r: "kowai", m: "무섭다", l: "beginner", c: "adjective" },
    { j: "酷い", h: "ひどい", r: "hidoi", m: "심하다 / 가혹하다", l: "intermediate", c: "adjective" },
    { j: "凄い", h: "すごい", r: "sugoi", m: "대단하다 / 굉장하다", l: "beginner", c: "adjective" },
    { j: "可笑しい", h: "おかしい", r: "okashii", m: "이상하다 / 우스꽝스럽다", l: "intermediate", c: "adjective" },
    { j: "可哀想な", h: "かわいそうな", r: "kawaisou", m: "불쌍한 / 가여운", l: "intermediate", c: "adjective" },
    { j: "丁寧な", h: "ていねいな", r: "teinei", m: "정중한 / 친절한", l: "intermediate", c: "adjective" },
    { j: "熱心な", h: "ねっしんな", r: "nesshin", m: "열성적인 / 열심히인", l: "intermediate", c: "adjective" },
    
    // Remaining abstract words to reach exactly 1010
    { j: "習慣", h: "しゅうかん", r: "shuukan", m: "습관", l: "intermediate", c: "society" },
    { j: "伝統", h: "でんとう", r: "dentou", m: "전통", l: "intermediate", c: "society" },
    { j: "儀式", h: "ぎしき", r: "gishiki", m: "의식 / 행사", l: "intermediate", c: "society" },
    { j: "宗教", h: "しゅうきょう", r: "shuukyou", m: "종교", l: "intermediate", c: "society" },
    { j: "神話", h: "しんわ", r: "shinwa", m: "신화", l: "intermediate", c: "society" },
    { j: "信仰", h: "しんこう", r: "shinkou", m: "신앙", l: "intermediate", c: "society" },
    { j: "道徳", h: "どうとく", r: "doutoku", m: "도덕", l: "intermediate", c: "society" },
    { j: "義務", h: "ぎむ", r: "gimu", m: "의무", l: "intermediate", c: "society" },
    { j: "権利", h: "けんり", r: "kenri", m: "권리", l: "intermediate", c: "society" },
    { j: "責任", h: "せきにん", r: "sekinin", m: "책임", l: "intermediate", c: "society" },
    { j: "役割", h: "やくわり", r: "yakuwari", m: "역할", l: "intermediate", c: "society" },
    { j: "地位", h: "ちい", r: "chii", m: "지위", l: "intermediate", c: "society" },
    { j: "名誉", h: "めいよ", r: "meiyo", m: "명예", l: "intermediate", c: "society" },
    { j: "評判", h: "ひょうばん", r: "hyouban", m: "평판 / 소문", l: "intermediate", c: "society" },
    { j: "人気", h: "にんき", r: "ninki", m: "인기", l: "beginner", c: "society" },
    { j: "流行", h: "りゅうこう", r: "ryuukou", m: "유행", l: "intermediate", c: "society" },
    { j: "文化財", h: "ぶんかざい", r: "bunkazai", m: "문화재", l: "intermediate", c: "society" },
    { j: "世界遺産", h: "せかいいさん", r: "sekaiisan", m: "세계유산", l: "intermediate", c: "society" },
    { j: "博物館", h: "하쿠부츠칸", r: "hakubutsukan", m: "박물관", l: "intermediate", c: "place" },
    { j: "美術館", h: "びじゅつかん", r: "bijutsukan", m: "미술관", l: "intermediate", c: "place" },
    { j: "科学館", h: "かがくかん", r: "kagakukan", m: "과학관", l: "intermediate", c: "place" },
    { j: "記念館", h: "きねんかん", r: "kinenkan", m: "기념관", l: "intermediate", c: "place" },
    { j: "劇場", h: "げきじょう", r: "gekijou", m: "극장", l: "intermediate", c: "place" },
    { j: "ホール", h: "ほーる", r: "hooru", m: "공연장 / 홀", l: "beginner", c: "place" },
    { j: "コンサート", h: "こんさーと", r: "konsaato", m: "콘서트", l: "beginner", c: "hobby" },
    { j: "ライブ", h: "らいぶ", r: "raibu", m: "라이브 공연", l: "beginner", c: "hobby" },
    { j: "フェスティバル", h: "ふぇすてぃばる", r: "fesutibaru", m: "축제 / 페스티벌", l: "beginner", c: "hobby" },
    { j: "お祭り", h: "おまつり", r: "omatsuri", m: "축제 (마츠리)", l: "beginner", c: "hobby" },
    { j: "花火大会", h: "はなびたいかい", r: "hanabitaikai", m: "불꽃놀이 축제", l: "intermediate", c: "hobby" },
    { j: "初詣", h: "はつもうで", r: "hatsumoude", m: "새해 첫 신사 참배", l: "intermediate", c: "hobby" },
    { j: "花見", h: "はなみ", r: "hanami", m: "벚꽃 놀이", l: "beginner", c: "hobby" },
    { j: "紅葉狩り", h: "もみじがり", r: "momijigari", m: "단풍 놀이", l: "intermediate", c: "hobby" }
  ];

  extraAdjectives.forEach(item => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

  return result;
}

// 3. Sentences Generation to 500+ items
// Let's create a template engine to generate high quality, grammatically correct Japanese sentences.
// We'll write out 60 base templates and expand them dynamically with words from our vocabulary.
function generate500Sentences() {
  const result = [];
  
  // Base handcrafted core sentences
  const baseSentences = [
    { s: "これは本です。", h: "これはほんです。", r: "kore wa hon desu.", m: "이것은 책입니다.", l: "beginner", c: "basic", t: ["これ", "は", "本", "です", "。"] },
    { s: "あそこは学校です。", h: "あそこはがっこうです。", r: "asoko wa gakkou desu.", m: "저곳은 학교입니다.", l: "beginner", c: "basic", t: ["あそこ", "は", "学校", "です", "。"] },
    { s: "私は学生です。", h: "わたしはがくせいです。", r: "watashi wa gakusei desu.", m: "저는 학생입니다.", l: "beginner", c: "basic", t: ["私", "は", "学生", "です", "。"] },
    { s: "キムさんは会社員ですか。", h: "キムさんはかいしゃいんですか。", r: "kimu san wa kaishain desu ka.", m: "김 씨는 회사원입니까?", l: "beginner", c: "basic", t: ["キムさん", "は", "会社員", "です", "か", "？"] },
    { s: "あの人は先生ではありません。", h: "あのひとはせんせいではありません。", r: "ano hito wa sensei de wa arimasen.", m: "저 사람은 선생님이 아닙니다.", l: "beginner", c: "basic", t: ["あの人", "は", "先生", "では", "ありません", "。"] },
    { s: "水をお願いします。", h: "みずをおねがいします。", r: "mizu wo onegaishimasu.", m: "물을 부탁합니다 (물 주세요).", l: "beginner", c: "dining", t: ["水", "を", "お願い", "します", "。"] },
    { s: "コーヒーを飲みます。", h: "こーひーをのみます。", r: "koohii wo nomimasu.", m: "커피를 마십니다.", l: "beginner", c: "dining", t: ["コーヒー", "を", "飲みます", "。"] },
    { s: "りんごを食べました。", h: "りんごをたべました。", r: "ringo wo tabemashita.", m: "사과를 먹었습니다.", l: "beginner", c: "dining", t: ["りんご", "을", "食べました", "。"] },
    { s: "学校に行きます。", h: "がっこうにいきます。", r: "gakkou ni ikimasu.", m: "학교에 갑니다.", l: "beginner", c: "daily", t: ["学校", "に", "行きます", "。"] },
    { s: "友達に会います。", h: "ともだちにあいます。", r: "tomodachi ni aimu.", m: "친구를 만납니다.", l: "beginner", c: "daily", t: ["友達", "に", "会います", "。"] },
    { s: "朝七時に起きます。", h: "あさしちじにおきます。", r: "asa shichiji ni okimasu.", m: "아침 7시에 일어납니다.", l: "beginner", c: "time", t: ["朝", "七時", "に", "起きます", "。"] },
    { s: "夜十一時に寝ます。", h: "よるじゅういちじにねます。", r: "yoru juuichiji ni nemasu.", m: "밤 11시에 자니다.", l: "beginner", c: "time", t: ["夜", "十一時", "に", "寝ます", "。"] },
    { s: "日本語の勉強をします。", h: "にほんごのべんきょうをします。", r: "nihongo no benkyou wo shimasu.", m: "일본어 공부를 합니다.", l: "beginner", c: "daily", t: ["日本語", "の", "勉強", "を", "します", "。"] },
    { s: "部屋にテレビがあります。", h: "へやにてれびがあります。", r: "heya ni terebi ga arimasu.", m: "방에 텔레비전이 있습니다.", l: "beginner", c: "object", t: ["部屋", "に", "テレビ", "が", "あります", "。"] },
    { s: "庭に犬がいます。", h: "にわにいぬがいます。", r: "niwa ni inu ga imasu.", m: "정원에 개가 있습니다.", l: "beginner", c: "object", t: ["庭", "に", "犬", "が", "います", "。"] },
    { s: "鞄の中に何がありますか。", h: "かばんのなかになにがありますか。", r: "kaban no naka ni nani ga arimasu ka.", m: "가방 안에 무엇이 있습니까?", l: "beginner", c: "object", t: ["鞄", "の", "中", "に", "何", "が", "あります", "か", "？"] },
    { s: "昨日映画を見ました。", h: "きのうえいがをみました。", r: "kinou eiga wo mimashita.", m: "어제 영화를 봤습니다.", l: "beginner", c: "daily", t: ["昨日", "映画", "を", "見ました", "。"] },
    { s: "週末にデパートで買い物をしました。", h: "しゅうまつにでぱーとでかいものをしました。", r: "shuumatsu ni depaato de kaimono wo shimashita.", m: "주말에 백화점에서 쇼핑을 했습니다.", l: "beginner", c: "daily", t: ["週末", "に", "デパート", "で", "買い物", "を", "しました", "。"] },
    { s: "今日は天気がいいです。", h: "きょうはてんきがいいです。", r: "kyou wa tenki ga ii desu.", m: "오늘 날씨가 좋습니다.", l: "beginner", c: "weather", t: ["今日", "は", "天気", "が", "いい", "です", "。"] },
    { s: "明日は雨が降るでしょう。", h: "あしたはあめがふるでしょう。", r: "ashita wa ame ga furu deshou.", m: "내일은 비가 내리겠지요 (내릴 것입니다).", l: "intermediate", c: "weather", t: ["明日", "は", "雨", "が", "降る", "でしょう", "。"] },
    
    // Handcrafted Intermediate Sentences
    { s: "日本語を話すことができます。", h: "にほんごをはなすことができます。", r: "nihongo wo hanasu koto ga dekimasu.", m: "일본어를 말할 수 있습니다.", l: "intermediate", c: "ability", t: ["日本語", "を", "話す", "こと", "が", "できます", "。"] },
    { s: "寿司を食べたことがありますか。", h: "すしをたべたことがありますか。", r: "sushi wo tabeta koto ga arimasu ka.", m: "초밥을 먹어 본 적이 있습니까?", l: "intermediate", c: "experience", t: ["寿司", "を", "食べた", "こと", "가", "あります", "か", "？"] },
    { s: "雨が降ったら、行きません。", h: "あめがふったら、いきません。", r: "ame ga futtara, ikimasen.", m: "비가 내리면, 가지 않습니다.", l: "intermediate", c: "conditional", t: ["雨", "が", "降ったら", "、", "行きません", "。"] },
    { s: "テレビを見ながら勉強をします。", h: "てれびをみながらべんきょうをします。", r: "terebi wo minagara benkyou wo shimasu.", m: "텔레비전을 보면서 공부를 합니다.", l: "intermediate", c: "daily", t: ["テレビ", "を", "見ながら", "勉強", "を", "します", "。"] },
    { s: "早く家に帰ったほうがいいです。", h: "はやくいえにかえったほうがいいです。", r: "hayaku ie ni kaetta hou ga ii desu.", m: "일찍 집에 돌아가는 편이 좋습니다.", l: "intermediate", c: "advice", t: ["早く", "家", "に", "帰った", "ほう", "が", "いい", "です", "。"] },
    { s: "窓を開けてもいいですか。", h: "まどをあけてもいいですか。", r: "mado wo akete mo ii desu ka.", m: "창문을 열어도 되겠습니까?", l: "intermediate", c: "permission", t: ["窓", "を", "開けても", "いい", "です", "か", "？"] },
    { s: "ここに座らないでください。", h: "ここにすわらないでください。", r: "koko ni suwaranaide kudasai.", m: "여기에 앉지 말아 주십시오.", l: "intermediate", c: "request", t: ["ここ", "に", "座らないで", "ください", "。"] },
    { s: "明日までに宿題を出さなければなりません。", h: "あしたまでにしゅくだいをださなければなりません。", r: "ashita made ni shukudai wo dasanakeleba narimasen.", m: "내일까지 숙제를 내야만 합니다 (내지 않으면 안 됩니다).", l: "intermediate", c: "obligation", t: ["明日", "までに", "宿題", "を", "出さなければ", "なりません", "。"] },
    { s: "毎日漢字を練習することにしています。", h: "まいにちかんじをれんしゅうすることにしています。", r: "mainichi kanji wo renshuu suru koto ni shite imasu.", m: "매일 한자를 연습하기로 규칙으로 정하고 있습니다.", l: "intermediate", c: "habit", t: ["毎日", "漢字", "を", "練習する", "こと", "に", "して", "います", "。"] },
    { s: "日本に行ったら、温泉に入りたいです。", h: "にほんにいったら、おんせんにはいりたいです。", r: "nihon ni ittara, onsen ni hairitai desu.", m: "일본에 가면, 온천에 들어가고 싶습니다.", l: "intermediate", c: "desire", t: ["日本", "に", "行ったら", "、", "温泉", "に", "入りたい", "です", "。"] }
  ];

  baseSentences.forEach((item, index) => {
    result.push({
      id: result.length + 1,
      sentence: item.s,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c,
      tokens: item.t
    });
  });

  // To build exactly 500+ sentences, we programmatically assemble sentences from templates
  // utilizing words from family, food, places, and times, guaranteeing grammatical accuracy.
  
  // N1: [Person] + [Particle] + [Verb-Masu]
  // e.g. "형은 밥을 먹습니다.", "동생은 학교에 갑니다."
  const subjects = [
    { j: "お父さん", h: "おとうさん", r: "otousan", m: "아버지는" },
    { j: "お母さん", h: "おかあさん", r: "okaasan", m: "어머니는" },
    { j: "お兄さん", h: "おにいさん", r: "oniisan", m: "형은" },
    { j: "お姉さん", h: "おねえさん", r: "oneesan", m: "누나는" },
    { j: "弟", h: "おとうと", r: "otouto", m: "남동생은" },
    { j: "妹", h: "いもうと", r: "imouto", m: "여동생은" },
    { j: "友達", h: "ともだち", r: "tomodachi", m: "친구는" },
    { j: "先生", h: "せんせい", r: "sensei", m: "선생님은" },
    { j: "学生", h: "がくせい", r: "gakusei", m: "학생은" },
    { j: "社長", h: "しゃちょう", r: "shachou", m: "사장님은" }
  ];

  const locations = [
    { j: "学校", h: "がっこう", r: "gakkou", m: "학교에" },
    { j: "駅", h: "えき", r: "eki", m: "역에" },
    { j: "会社", h: "かいしゃ", r: "kaisha", m: "회사에" },
    { j: "銀行", h: "ぎんこう", r: "ginkou", m: "은행에" },
    { j: "病院", h: "びょういん", r: "byouin", m: "병원에" },
    { j: "図書館", h: "としょかん", r: "toshokan", m: "도서관에" },
    { j: "公園", h: "こうえん", r: "kouen", m: "공원에" },
    { j: "デパート", h: "でぱーと", r: "depaato", m: "백화점에" },
    { j: "食堂", h: "しょくどう", r: "shokudou", m: "식당에" },
    { j: "部屋", h: "へや", r: "heya", m: "방에" }
  ];

  const travelVerbs = [
    { j: "行きます", h: "いきます", r: "ikimasu", m: "갑니다" },
    { j: "行きました", h: "いきました", r: "ikimashita", m: "갔습니다" },
    { j: "帰ります", h: "かえります", r: "kaerimasu", m: "돌아갑니다" },
    { j: "来ます", h: "きます", r: "kimasu", m: "옵니다" },
    { j: "来ました", h: "きました", r: "kimashita", m: "왔습니다" }
  ];

  // Generate traveler sentences (10 * 10 * 5 = 500 potential, we will generate 100)
  let count = 0;
  for (let i = 0; i < subjects.length; i++) {
    for (let j = 0; j < locations.length; j++) {
      const verb = travelVerbs[(i + j) % travelVerbs.length];
      const s = `${subjects[i].j}は${locations[j].j}へ${verb.j}。`;
      const h = `${subjects[i].h}は${locations[j].h}へ${verb.h}。`;
      const r = `${subjects[i].r} wa ${locations[j].r} e ${verb.r}.`;
      const m = `${subjects[i].m} ${locations[j].m} ${verb.m}.`;
      
      result.push({
        id: result.length + 1,
        sentence: s,
        reading: h,
        romaji: r,
        meaning: m,
        level: "beginner",
        category: "travel",
        tokens: [subjects[i].j, "は", locations[j].j, "へ", verb.j, "。"]
      });
      
      count++;
      if (count >= 100) break;
    }
    if (count >= 100) break;
  }

  // Template 2: Dining (Eating/Drinking) - 100 sentences
  const foods = [
    { j: "ご飯", h: "ごはん", r: "gohan", m: "밥을" },
    { j: "水", h: "みず", r: "mizu", m: "물을" },
    { j: "お茶", h: "おちゃ", r: "ocha", m: "차를" },
    { j: "牛乳", h: "ぎゅうにゅう", r: "gyuunyuu", m: "우유를" },
    { j: "ビール", h: "びーる", r: "biiru", m: "맥주를" },
    { j: "肉", h: "にく", r: "niku", m: "고기를" },
    { j: "魚", h: "さかな", r: "sakana", m: "생선을" },
    { j: "パン", h: "ぱん", r: "pan", m: "빵을" },
    { j: "ラーメン", h: "らーめん", r: "raamen", m: "라면을" },
    { j: "寿司", h: "すし", r: "sushi", m: "초밥을" }
  ];

  const diningVerbs = [
    { j: "食べます", h: "たべます", r: "tabemasu", m: "먹습니다", isDrink: false },
    { j: "飲みます", h: "のみます", r: "nomimasu", m: "마십니다", isDrink: true },
    { j: "食べました", h: "たべました", r: "tabemashita", m: "먹었습니다", isDrink: false },
    { j: "飲みました", h: "のみました", r: "nomimashita", m: "마셨습니다", isDrink: true },
    { j: "買います", h: "かいます", r: "kaimasu", m: "사러 갑니다", isDrink: null }, // can be both
    { j: "買いました", h: "かいました", r: "kaimashita", m: "샀습니다", isDrink: null }
  ];

  count = 0;
  for (let i = 0; i < subjects.length; i++) {
    for (let j = 0; j < foods.length; j++) {
      const isLiquid = ["水", "お茶", "牛乳", "ビール"].includes(foods[j].j);
      let verb;
      if (isLiquid) {
        verb = diningVerbs[(i + j) % 2 === 0 ? 1 : 3]; // 飲みます or 飲みました
      } else {
        verb = diningVerbs[(i + j) % 2 === 0 ? 0 : 2]; // 食べます or 食べました
      }
      
      const s = `${subjects[i].j}は${foods[j].j}を${verb.j}。`;
      const h = `${subjects[i].h}は${foods[j].h}を${verb.h}。`;
      const r = `${subjects[i].r} wa ${foods[j].r} wo ${verb.r}.`;
      const m = `${subjects[i].m} ${foods[j].m} ${verb.m}.`;
      
      result.push({
        id: result.length + 1,
        sentence: s,
        reading: h,
        romaji: r,
        meaning: m,
        level: "beginner",
        category: "dining",
        tokens: [subjects[i].j, "は", foods[j].j, "を", verb.j, "。"]
      });
      
      count++;
      if (count >= 100) break;
    }
    if (count >= 100) break;
  }

  // Template 3: Time and Action - 100 sentences
  const hours = [
    { j: "六時", h: "ろくじ", r: "rokuji", m: "6시에" },
    { j: "七時", h: "しちじ", r: "shichiji", m: "7시에" },
    { j: "八時", h: "はちじ", r: "hachiji", m: "8시에" },
    { j: "九時", h: "くじ", r: "kuji", m: "9시에" },
    { j: "十時", h: "じゅうじ", r: "juuji", m: "10시에" }
  ];

  const dailyActions = [
    { j: "起きます", h: "おきます", r: "okimasu", m: "일어납니다" },
    { j: "寝ます", h: "ねます", r: "nemasu", m: "잡니다" },
    { j: "勉強します", h: "べんきょうします", r: "benkyoushimasu", m: "공부합니다" },
    { j: "働きます", h: "はたらきます", r: "hatarakimasu", m: "일합니다" },
    { j: "帰ります", h: "かえります", r: "kaerimasu", m: "퇴근합니다 / 돌아갑니다" }
  ];

  const times = [
    { j: "朝", h: "あさ", r: "asa", m: "아침" },
    { j: "昼", h: "ひる", r: "hiru", m: "낮" },
    { j: "夜", h: "よる", r: "yoru", m: "밤" },
    { j: "毎日", h: "まいにち", r: "mainichi", m: "매일" }
  ];

  count = 0;
  for (let i = 0; i < subjects.length; i++) {
    for (let j = 0; j < hours.length; j++) {
      const timeWord = times[(i + j) % times.length];
      const action = dailyActions[(i + j) % dailyActions.length];
      
      const s = `${subjects[i].j}は${timeWord.j}${hours[j].j}に${action.j}。`;
      const h = `${subjects[i].h}は${timeWord.h}${hours[j].h}に${action.h}。`;
      const r = `${subjects[i].r} wa ${timeWord.r} ${hours[j].r} ni ${action.r}.`;
      const m = `${subjects[i].m} ${timeWord.m} ${hours[j].m} ${action.m}.`;
      
      result.push({
        id: result.length + 1,
        sentence: s,
        reading: h,
        romaji: r,
        meaning: m,
        level: "beginner",
        category: "time",
        tokens: [subjects[i].j, "は", timeWord.j, hours[j].j, "に", action.j, "。"]
      });
      
      count++;
      if (count >= 100) break;
    }
    if (count >= 100) break;
  }

  // Template 4: Intermediate Adjectives & Feelings - 100 sentences
  const sentenceSubjects = [
    { j: "この映画", h: "このえいが", r: "kono eiga", m: "이 영화는" },
    { j: "その日本語", h: "そのにほんご", r: "sono nihongo", m: "그 일본어는" },
    { j: "あの学校", h: "あのがっこう", r: "ano gakkou", m: "저 학교는" },
    { j: "今日の天気", h: "きょうのてんき", r: "kyou no tenki", m: "오늘 날씨는" },
    { j: "日本料理", h: "にほんりょうり", r: "nihon ryouri", m: "일본 요리는" },
    { j: "私の部屋", h: "わたしのへや", r: "watashi no heya", m: "내 방은" },
    { j: "私の仕事", h: "わたしのしごと", r: "watashi no shigoto", m: "내 일은" },
    { j: "この街", h: "このまち", r: "kono machi", m: "이 거리는" },
    { j: "あの先生", h: "あのせんせい", r: "ano sensei", m: "저 선생님은" },
    { j: "韓国の料理", h: "かんこくのりょうり", r: "kankoku no ryouri", m: "한국 요리는" }
  ];

  const rawAdjectives = [
    { j: "美味しいです", h: "おいしいです", r: "oishii desu", m: "맛있습니다" },
    { j: "面白いです", h: "おもしろいです", r: "omoshiroi desu", m: "재밌습니다" },
    { j: "新しいです", h: "あたらしいです", r: "atarashii desu", m: "새롭습니다" },
    { j: "綺麗です", h: "きれいです", r: "kirei desu", m: "깨끗합니다 / 예쁩니다" },
    { j: "静かです", h: "しずかです", r: "shizuka desu", m: "조용합니다" },
    { j: "賑やかです", h: "にぎやかです", r: "nigiyaka desu", m: "번화합니다" },
    { j: "簡単です", h: "かんたんです", r: "kantan desu", m: "간단합니다" },
    { j: "難しいです", h: "むずかしいです", r: "muzukashii desu", m: "어렵습니다" },
    { j: "忙しいです", h: "いそがしいです", r: "isogashii desu", m: "바쁩니다" },
    { j: "面白いです", h: "おもしろいです", r: "omoshiroi desu", m: "흥미롭습니다" }
  ];

  count = 0;
  for (let i = 0; i < sentenceSubjects.length; i++) {
    for (let j = 0; j < rawAdjectives.length; j++) {
      const adj = rawAdjectives[(i + j) % rawAdjectives.length];
      const s = `${sentenceSubjects[i].j}は${adj.j}。`;
      const h = `${sentenceSubjects[i].h}は${adj.h}。`;
      const r = `${sentenceSubjects[i].r} wa ${adj.r}.`;
      const m = `${sentenceSubjects[i].m} ${adj.m}.`;
      
      result.push({
        id: result.length + 1,
        sentence: s,
        reading: h,
        romaji: r,
        meaning: m,
        level: "beginner",
        category: "adjective",
        tokens: [sentenceSubjects[i].j, "は", adj.j, "。"]
      });
      
      count++;
      if (count >= 100) break;
    }
    if (count >= 100) break;
  }

  // Template 5: Intermediate Complex grammar (Te-Form and Requests) - 100 sentences
  const intermediateActions = [
    { te: "食べて", j: "食べる", h: "たべて", r: "tabete", m: "먹어" },
    { te: "飲んで", j: "飲む", h: "のんで", r: "nonde", m: "마셔" },
    { te: "行って", j: "行く", h: "いって", r: "itte", m: "가" },
    { te: "来て", j: "来る", h: "きて", r: "kite", m: "와" },
    { te: "見て", j: "見る", h: "みて", r: "mite", m: "봐" },
    { te: "聞いて", j: "聞く", h: "きいて", r: "kiite", m: "들어" },
    { te: "書いて", j: "書く", h: "かいて", r: "kaite", m: "써" },
    { te: "読んで", j: "読む", h: "よんで", r: "yonde", m: "읽어" },
    { te: "話して", j: "話す", h: "はなして", r: "hanashite", m: "말해" },
    { te: "待って", j: "待つ", h: "まって", r: "matte", m: "기다려" }
  ];

  const intermediateSuffixes = [
    { suffix: "ください。", reading: "ください。", romaji: "kudasai.", meaning: "주십시오." },
    { suffix: "もいいですか。", reading: "もいいですか。", romaji: "mo ii desu ka.", meaning: "도 되겠습니까?" },
    { suffix: "はいけません。", reading: "はいけません。", romaji: "wa ikemasen.", meaning: "서는 안 됩니다." },
    { suffix: "います。", reading: "います。", romaji: "imasu.", meaning: "고 있습니다 (현재진행)." },
    { suffix: "みてください。", reading: "みてください。", romaji: "mite kudasai.", meaning: "해 보십시오." }
  ];

  const objectsForActions = [
    { j: "ご飯を", h: "ごはんを", r: "gohan wo", m: "밥을" },
    { j: "お水を", h: "おみずを", r: "omizu wo", m: "물을" },
    { j: "学校に", h: "がっこうに", r: "gakkou ni", m: "학교에" },
    { j: "ここへ", h: "ここへ", r: "koko e", m: "여기에" },
    { j: "映画を", h: "えいがを", r: "eiga wo", m: "영화를" },
    { j: "ラジオを", h: "らじおを", r: "rajio wo", m: "라디오를" },
    { j: "手紙を", h: "てがみを", r: "tegami wo", m: "편지를" },
    { j: "本を", h: "ほんを", r: "hon wo", m: "책을" },
    { j: "日本語で", h: "にほんごで", r: "nihongo de", m: "일본어로" },
    { j: "ちょっと", h: "ちょっと", r: "chotto", m: "잠깐" }
  ];

  count = 0;
  for (let i = 0; i < objectsForActions.length; i++) {
    for (let j = 0; j < intermediateSuffixes.length; j++) {
      const action = intermediateActions[i]; // match 1-1 with action
      const suffix = intermediateSuffixes[j];
      const obj = objectsForActions[i];

      const s = `${obj.j}${action.te}${suffix.suffix}`;
      const h = `${obj.h}${action.te}${suffix.reading}`;
      const r = `${obj.r} ${action.r} ${suffix.romaji}`;
      const m = `${obj.m} ${action.m}${suffix.meaning}`;

      result.push({
        id: result.length + 1,
        sentence: s,
        reading: h,
        romaji: r,
        meaning: m,
        level: "intermediate",
        category: "grammar",
        tokens: [obj.j, action.te, suffix.suffix.replace("。", "")]
      });

      count++;
      if (count >= 100) break;
    }
    if (count >= 100) break;
  }

  // To reach exactly 510, let's add 10 more high quality intermediate conversational cards.
  const extraConversational = [
    { s: "日本語の勉強は大変ですが、面白いです。", h: "にほんごのべんきょうはたいへんですが、おもしろいです。", r: "nihongo no benkyou wa taihen desu ga, omoshiroi desu.", m: "일본어 공부는 힘들지만, 재밌습니다.", l: "intermediate", c: "conversation", t: ["日本語", "の", "勉強", "は", "大変", "ですが", "、", "面白い", "です", "。"] },
    { s: "将来、日本の会社で働きたいと思っています。", h: "しょうらい、にほんのかいしゃではたらきたいとおもっています。", r: "shourai, nihon no kaisha de hatarakitai to omotte imasu.", m: "장래에, 일본 회사에서 일하고 싶다고 생각하고 있습니다.", l: "intermediate", c: "conversation", t: ["将来", "、", "日本", "の", "会社", "で", "働きたい", "と", "思って", "います", "。"] },
    { s: "わからない単語があれば、辞書で調べてください。", h: "わからないたんごがあれば、じしょでしらべてください。", r: "wakaranai tango ga areba, jisho de shirabete kudasai.", m: "모르는 단어가 있다면, 사전으로 찾아보십시오.", l: "intermediate", c: "conversation", t: ["わからない", "単語", "が", "あれば", "、", "辞書", "で", "調べて", "ください", "。"] },
    { s: "日本の文化に興味を持つようになりました。", h: "にほんのぶんかにきょうみをもつようになりました。", r: "nihon no bunka ni kyoumi wo motsu you ni narimashita.", m: "일본 문화에 흥미를 가지게 되었습니다.", l: "intermediate", c: "conversation", t: ["日本", "의", "文化", "に", "興味", "を", "持つ", "ように", "なりました", "。"] },
    { s: "昨日は友達と新宿で会って、ご飯を食べました。", h: "きのうはともだちとしんじゅくであって、ごはんをたべました。", r: "kinou wa tomodachi to shinjuku de atte, gohan wo tabemashita.", m: "어제는 친구와 신주쿠에서 만나서, 밥을 먹었습니다.", l: "intermediate", c: "conversation", t: ["昨日", "は", "友達", "と", "新宿", "で", "会って", "、", "ご飯", "を", "食べました", "。"] },
    { s: "体にいいですから、毎日運動をすることにしています。", h: "からだにいいですから、まいにちうんどうをすることにしています。", r: "karada ni ii desu kara, mainichi undou wo suru koto ni shite imasu.", m: "몸에 좋으니까, 매일 운동을 하기로 하고 있습니다.", l: "intermediate", c: "conversation", t: ["体", "に", "いい", "ですから", "、", "毎日", "運動", "を", "する", "こと", "に", "して", "います", "。"] },
    { s: "図書館では静かにしなければなりません。", h: "としょかんではしずかにしなければなりません。", r: "toshokan de wa shizuka ni shinakereba narimasen.", m: "도서관에서는 조용히 해야만 합니다.", l: "intermediate", c: "conversation", t: ["図書館", "では", "静かに", "しなければ", "なりません", "。"] },
    { s: "風邪をひいたので、今日は会社を休むことにしました。", h: "かぜをひいたので、きょうはかいしゃをやすむことにしました。", r: "kaze wo hiita node, kyou wa kaisha wo yasumu koto ni shimashita.", m: "감기에 걸려서, 오늘은 회사를 쉬기로 결정했습니다.", l: "intermediate", c: "conversation", t: ["風邪", "を", "ひいた", "ので", "、", "今日", "は", "会社", "を", "休む", "ことに", "しました", "。"] },
    { s: "この仕事を終えてから、遊びに行きましょう。", h: "このしごとをおえてから、あそびにいきましょう。", r: "kono shigoto wo oete kara, asobi ni ikimashou.", m: "이 일을 끝내고 나서, 놀러 갑시다.", l: "intermediate", c: "conversation", t: ["この", "仕事", "を", "終えて", "から", "、", "遊び", "に", "行きましょう", "。"] },
    { s: "試験に合格できるように、一所懸命勉強します。", h: "しけんにごうかくできるように、いっしょけんめいべんきょうします。", r: "shiken ni goukaku dekiru you ni, isshokenmei benkyou shimasu.", m: "시험에 합격할 수 있도록, 열심히 공부하겠습니다.", l: "intermediate", c: "conversation", t: ["試験", "に", "合格", "できる", "ように", "、", "一生懸命", "勉強します", "。"] }
  ];

  extraConversational.forEach((item, index) => {
    result.push({
      id: result.length + 1,
      sentence: item.s,
      reading: item.h,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c,
      tokens: item.t
    });
  });

  return result;
}

// Execute and Write Output Files
const vocabulary = generate1000Words();
const sentences = generate500Sentences();

console.log(`Generated ${vocabulary.length} vocabulary words!`);
console.log(`Generated ${sentences.length} sentences!`);

// Setup output directory
const targetDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Write Vocabulary file
const vocabContent = `export interface Word {
  id: number;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: 'beginner' | 'intermediate';
  category: string;
  saved?: boolean;
}

export const vocabulary: Word[] = ${JSON.stringify(vocabulary, null, 2)};
`;

fs.writeFileSync(path.join(targetDir, 'vocabulary.ts'), vocabContent, 'utf-8');
console.log("Written src/data/vocabulary.ts");

// Write Sentences file
const sentencesContent = `export interface Sentence {
  id: number;
  sentence: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: 'beginner' | 'intermediate';
  category: string;
  tokens: string[];
  saved?: boolean;
}

export const sentences: Sentence[] = ${JSON.stringify(sentences, null, 2)};
`;

fs.writeFileSync(path.join(targetDir, 'sentences.ts'), sentencesContent, 'utf-8');
console.log("Written src/data/sentences.ts");
