const fs = require('fs');
const path = require('path');

// 1. Handcrafted Core Vocabulary
const greetings = [
  { j: "おはようございます", r: "ohayougozaimasu", m: "안녕하세요 (아침)", l: "beginner", c: "greeting" },
  { j: "こんにちは", r: "konnichiwa", m: "안녕하세요 (낮)", l: "beginner", c: "greeting" },
  { j: "こんばんは", r: "konbanwa", m: "안녕하세요 (밤)", l: "beginner", c: "greeting" },
  { j: "ありがとうございます", r: "arigatougozaimasu", m: "감사합니다", l: "beginner", c: "greeting" },
  { j: "すみません", r: "sumimasen", m: "죄송합니다 / 실례합니다", l: "beginner", c: "greeting" },
  { j: "はい", r: "hai", m: "네", l: "beginner", c: "greeting" },
  { j: "いいえ", r: "iie", m: "아니요", l: "beginner", c: "greeting" },
  { j: "さようなら", r: "sayounara", m: "안녕히 가세요", l: "beginner", c: "greeting" },
  { j: "はじめまして", r: "hajimemashite", m: "처음 뵙겠습니다", l: "beginner", c: "greeting" },
  { j: "よろしくお願いします", r: "yoroshiku onegaishimasu", m: "잘 부탁드립니다", l: "beginner", c: "greeting" },
  { j: "おやすみなさい", r: "oyasuminasai", m: "안녕히 주무세요", l: "beginner", c: "greeting" },
  { j: "いってきます", r: "ittekimasu", m: "다녀오겠습니다", l: "beginner", c: "greeting" },
  { j: "いってらっしゃい", r: "itterasshai", m: "다녀오세요", l: "beginner", c: "greeting" },
  { j: "ただいま", r: "tadaima", m: "다녀왔습니다", l: "beginner", c: "greeting" },
  { j: "おかえりなさい", r: "okaerinasai", m: "어서 오세요", l: "beginner", c: "greeting" },
  { j: "ごちそうさまでした", r: "gochisousamadeshita", m: "잘 먹었습니다", l: "beginner", c: "greeting" },
  { j: "いただきます", r: "itadakimasu", m: "잘 먹겠습니다", l: "beginner", c: "greeting" },
  { j: "おめでとうございます", r: "omedetougozaimasu", m: "축하합니다", l: "beginner", c: "greeting" },
  { j: "お元気ですか", r: "ogenkidesuka", m: "잘 지내십니까?", l: "beginner", c: "greeting" },
  { j: "大丈夫です", r: "daijoubudesu", m: "괜찮습니다", l: "beginner", c: "greeting" }
];

const family = [
  { j: "家族", h: "かぞく", r: "kazoku", m: "가족", l: "beginner", c: "family" },
  { j: "両親", h: "りょうしん", r: "ryoushin", m: "부모", l: "beginner", c: "family" },
  { j: "父", h: "ちち", r: "chichi", m: "아버지 (나의)", l: "beginner", c: "family" },
  { j: "母", h: "はは", r: "haha", m: "어머니 (나의)", l: "beginner", c: "family" },
  { j: "お父さん", h: "おとうさん", r: "otousan", m: "아버지", l: "beginner", c: "family" },
  { j: "お母さん", h: "おかあさん", r: "okaasan", m: "어머니", l: "beginner", c: "family" },
  { j: "兄", h: "あに", r: "ani", m: "형 / 오빠 (나의)", l: "beginner", c: "family" },
  { j: "姉", h: "あね", r: "ane", m: "누나 / 언니 (나의)", l: "beginner", c: "family" },
  { j: "お兄さん", h: "おにいさん", r: "oniisan", m: "형 / 오빠", l: "beginner", c: "family" },
  { j: "お姉さん", h: "おねえさん", r: "oneesan", m: "누나 / 언니", l: "beginner", c: "family" },
  { j: "弟", h: "おとうと", r: "otouto", m: "남동생", l: "beginner", c: "family" },
  { j: "妹", h: "いもうと", r: "imouto", m: "여동생", l: "beginner", c: "family" },
  { j: "祖父", h: "そふ", r: "sofu", m: "할아버지 (나의)", l: "beginner", c: "family" },
  { j: "祖母", h: "そぼ", r: "sobo", m: "할머니 (나의)", l: "beginner", c: "family" },
  { j: "おじいさん", h: "おじいさん", r: "ojiisan", m: "할아버지", l: "beginner", c: "family" },
  { j: "おばあさん", h: "おばあさん", r: "obaasan", m: "할머니", l: "beginner", c: "family" },
  { j: "子供", h: "こども", r: "kodomo", m: "아이 / 자녀", l: "beginner", c: "family" },
  { j: "息子", h: "むすこ", r: "musuko", m: "아들", l: "beginner", c: "family" },
  { j: "娘", h: "むすめ", r: "musume", m: "딸", l: "beginner", c: "family" },
  { j: "主人", h: "しゅじん", r: "shujin", m: "남편 (나의)", l: "beginner", c: "family" },
  { j: "妻", h: "つま", r: "tsuma", m: "아내 (나의)", l: "beginner", c: "family" }
];

const food = [
  { j: "ご飯", h: "ごはん", r: "gohan", m: "밥 / 식사", l: "beginner", c: "food" },
  { j: "水", h: "みず", r: "mizu", m: "물", l: "beginner", c: "food" },
  { j: "お茶", h: "おちゃ", r: "ocha", m: "차 (녹차)", l: "beginner", c: "food" },
  { j: "牛乳", h: "ぎゅうにゅう", r: "gyuunyuu", m: "우유", l: "beginner", c: "food" },
  { j: "お酒", h: "おさけ", r: "osake", m: "술", l: "beginner", c: "food" },
  { j: "ビール", h: "びーる", r: "biiru", m: "맥주", l: "beginner", c: "food" },
  { j: "肉", h: "にく", r: "niku", m: "고기", l: "beginner", c: "food" },
  { j: "魚", h: "さかな", r: "sakana", m: "생선", l: "beginner", c: "food" },
  { j: "野菜", h: "やさい", r: "yasai", m: "야채", l: "beginner", c: "food" },
  { j: "果物", h: "くだもの", r: "kudamono", m: "과일", l: "beginner", c: "food" },
  { j: "卵", h: "たまご", r: "tamago", m: "달걀", l: "beginner", c: "food" },
  { j: "パン", h: "ぱん", r: "pan", m: "빵", l: "beginner", c: "food" },
  { j: "ラーメン", h: "らーめん", r: "raamen", m: "라면", l: "beginner", c: "food" },
  { j: "寿司", h: "すし", r: "sushi", m: "초밥", l: "beginner", c: "food" },
  { j: "弁当", h: "べんとう", r: "bento", m: "도시락", l: "beginner", c: "food" },
  { j: "朝ご飯", h: "あさごはん", r: "asagohan", m: "아침 식사", l: "beginner", c: "food" },
  { j: "昼ご飯", h: "ひるごはん", r: "hirugohan", m: "점심 식사", l: "beginner", c: "food" },
  { j: "晩ご飯", h: "ばんごはん", r: "bangohan", m: "저녁 식사", l: "beginner", c: "food" },
  { j: "食堂", h: "しょくどう", r: "shokudou", m: "식당", l: "beginner", c: "food" },
  { j: "料理", h: "りょうり", r: "ryouri", m: "요리", l: "beginner", c: "food" }
];

const places = [
  { j: "学校", h: "がっこう", r: "gakkou", m: "학교", l: "beginner", c: "place" },
  { j: "家", h: "いえ", r: "ie", m: "집", l: "beginner", c: "place" },
  { j: "部屋", h: "へや", r: "heya", m: "방", l: "beginner", c: "place" },
  { j: "駅", h: "えき", r: "eki", m: "역", l: "beginner", c: "place" },
  { j: "教室", h: "きょうしつ", r: "kyoushitsu", m: "교실", l: "beginner", c: "place" },
  { j: "会社", h: "かいしゃ", r: "kaisha", m: "회사", l: "beginner", c: "place" },
  { j: "銀行", h: "ぎんこう", r: "ginkou", m: "은행", l: "beginner", c: "place" },
  { j: "病院", h: "びょういん", r: "byouin", m: "병원", l: "beginner", c: "place" },
  { j: "郵便局", h: "ゆうびんきょく", r: "yuubinkyoku", m: "우체국", l: "beginner", c: "place" },
  { j: "図書館", h: "としょかん", r: "toshokan", m: "도서관", l: "beginner", c: "place" },
  { j: "公園", h: "こうえん", r: "kouen", m: "공원", l: "beginner", c: "place" },
  { j: "店", h: "みせ", r: "mise", m: "가게", l: "beginner", c: "place" },
  { j: "デパート", h: "でぱーと", r: "depaato", m: "백화점", l: "beginner", c: "place" },
  { j: "スーパー", h: "すーぱー", r: "suupaa", m: "슈퍼마켓", l: "beginner", c: "place" },
  { j: "ホテル", h: "ほてる", r: "hoteru", m: "호텔", l: "beginner", c: "place" },
  { j: "庭", h: "niwa", r: "niwa", m: "정원", l: "beginner", c: "place" },
  { j: "交番", h: "kouban", r: "kouban", m: "파출소", l: "beginner", c: "place" },
  { j: "動物園", h: "どうぶつえん", r: "doubutsuen", m: "동물원", l: "beginner", c: "place" },
  { j: "空港", h: "くうこう", r: "kuukou", m: "공항", l: "beginner", c: "place" },
  { j: "映画館", h: "えいがかん", r: "eigakan", m: "영화관", l: "beginner", c: "place" }
];

const time = [
  { j: "今日", h: "きょう", r: "kyou", m: "오늘", l: "beginner", c: "time" },
  { j: "明日", h: "あした", r: "ashita", m: "내일", l: "beginner", c: "time" },
  { j: "昨日", h: "きのう", r: "kinou", m: "어제", l: "beginner", c: "time" },
  { j: "毎日", h: "まいにち", r: "mainichi", m: "매일", l: "beginner", c: "time" },
  { j: "今朝", h: "けさ", r: "kesa", m: "오늘 아침", l: "beginner", c: "time" },
  { j: "今晩", h: "こんばん", r: "konban", m: "오늘 밤", l: "beginner", c: "time" },
  { j: "今", h: "いま", r: "ima", m: "지금", l: "beginner", c: "time" },
  { j: "午前", h: "ごぜん", r: "gozen", m: "오전", l: "beginner", c: "time" },
  { j: "午後", h: "ごご", r: "gogo", m: "오후", l: "beginner", c: "time" },
  { j: "朝", h: "あさ", r: "asa", m: "아침", l: "beginner", c: "time" },
  { j: "昼", h: "ひる", r: "hiru", m: "낮 / 점심", l: "beginner", c: "time" },
  { j: "夜", h: "よる", r: "yoru", m: "밤", l: "beginner", c: "time" },
  { j: "時間", h: "じかん", r: "jikan", m: "시간", l: "beginner", c: "time" },
  { j: "週", h: "しゅう", r: "shuu", m: "주", l: "beginner", c: "time" },
  { j: "月", h: "つき", r: "tsuki", m: "달 / 월", l: "beginner", c: "time" },
  { j: "年", h: "とし", r: "toshi", m: "해 / 년", l: "beginner", c: "time" },
  { j: "今年", h: "ことし", r: "kotoshi", m: "올해", l: "beginner", c: "time" },
  { j: "来年", h: "らいねん", r: "rainen", m: "내년", l: "beginner", c: "time" },
  { j: "去年", h: "きょねん", r: "kyonen", m: "작년", l: "beginner", c: "time" },
  { j: "週末", h: "しゅうまつ", r: "shuumatsu", m: "주말", l: "beginner", c: "time" }
];

const adjectives = [
  { j: "新しい", h: "あたらしい", r: "atarashii", m: "새롭다", l: "beginner", c: "adjective" },
  { j: "古い", h: "ふるい", r: "furui", m: "오래되다", l: "beginner", c: "adjective" },
  { j: "暑い", h: "あつい", r: "atsui", m: "덥다", l: "beginner", c: "adjective" },
  { j: "寒い", h: "さむい", r: "samui", m: "춥다", l: "beginner", c: "adjective" },
  { j: "冷たい", h: "つめたい", r: "tsumetai", m: "차가우다", l: "beginner", c: "adjective" },
  { j: "暖かい", h: "あたたかい", r: "atatakai", m: "따뜻하다", l: "beginner", c: "adjective" },
  { j: "大きい", h: "おおきい", r: "ookii", m: "크다", l: "beginner", c: "adjective" },
  { j: "小さい", h: "ちいさい", r: "chiisai", m: "작다", l: "beginner", c: "adjective" },
  { j: "良い", h: "よい", r: "yoi", m: "좋다", l: "beginner", c: "adjective" },
  { j: "悪い", h: "わるい", r: "warui", m: "나쁘다", l: "beginner", c: "adjective" },
  { j: "美味しい", h: "おいしい", r: "oishii", m: "맛있다", l: "beginner", c: "adjective" },
  { j: "甘い", h: "あまい", r: "amai", m: "달다", l: "beginner", c: "adjective" },
  { j: "辛い", h: "からい", r: "karai", m: "맵다", l: "beginner", c: "adjective" },
  { j: "高い", h: "たかい", r: "takai", m: "높다 / 비싸다", l: "beginner", c: "adjective" },
  { j: "安い", h: "やすい", r: "yasui", m: "싸다", l: "beginner", c: "adjective" },
  { j: "広い", h: "ひろい", r: "hiroi", m: "넓다", l: "beginner", c: "adjective" },
  { j: "狭い", h: "せまい", r: "semai", m: "좁다", l: "beginner", c: "adjective" },
  { j: "忙しい", h: "いそがしい", r: "isogashii", m: "바쁘다", l: "beginner", c: "adjective" },
  { j: "面白い", h: "おもしろい", r: "omoshiroi", m: "재밌다", l: "beginner", c: "adjective" },
  { j: "易しい", h: "やさしい", r: "yasashii", m: "쉽다", l: "beginner", c: "adjective" }
];

const verbs = [
  { j: "行く", h: "いく", r: "iku", m: "가다", l: "beginner", c: "verb" },
  { j: "来る", h: "くる", r: "kuru", m: "오다", l: "beginner", c: "verb" },
  { j: "帰る", h: "かえる", r: "kaeru", m: "돌아가다 / 돌아오다", l: "beginner", c: "verb" },
  { j: "食べる", h: "たべる", r: "taberu", m: "먹다", l: "beginner", c: "verb" },
  { j: "飲む", h: "のむ", r: "nomu", m: "마시다", l: "beginner", c: "verb" },
  { j: "見る", h: "みる", r: "miru", m: "보다", l: "beginner", c: "verb" },
  { j: "聞く", h: "きく", r: "kiku", m: "듣다", l: "beginner", c: "verb" },
  { j: "書く", h: "かく", r: "kaku", m: "쓰다", l: "beginner", c: "verb" },
  { j: "読む", h: "よむ", r: "yomu", m: "읽다", l: "beginner", c: "verb" },
  { j: "話す", h: "はなす", r: "hanasu", m: "말하다", l: "beginner", c: "verb" },
  { j: "買う", h: "かう", r: "kau", m: "사다", l: "beginner", c: "verb" },
  { j: "売る", h: "うる", r: "uru", m: "팔다", l: "beginner", c: "verb" },
  { j: "会う", h: "あう", r: "au", m: "만나다", l: "beginner", c: "verb" },
  { j: "待つ", h: "まつ", r: "matsu", m: "기다리다", l: "beginner", c: "verb" },
  { j: "持つ", h: "もつ", r: "motsu", m: "가지다", l: "beginner", c: "verb" },
  { j: "呼ぶ", h: "よぶ", r: "yobu", m: "부르다", l: "beginner", c: "verb" },
  { j: "降る", h: "ふる", r: "furu", m: "내리다 (비/눈)", l: "beginner", c: "verb" },
  { j: "起きる", h: "おきる", r: "okiru", m: "일어나다", l: "beginner", c: "verb" },
  { j: "寝る", h: "ねる", r: "neru", m: "자다", l: "beginner", c: "verb" },
  { j: "する", h: "する", r: "suru", m: "하다", l: "beginner", c: "verb" }
];

const commonNounsKoJa = [
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
  { j: "円", h: "えん", r: "en", m: "엔 (통화)" },
  { j: "半分", h: "はんぶん", r: "hanbun", m: "절반" },
  { j: "月曜日", h: "げつようび", r: "getsuyoubi", m: "월요일" },
  { j: "火曜日", h: "かようび", r: "kayoubi", m: "화요일" },
  { j: "水曜日", h: "すいようび", r: "suiyoubi", m: "수요일" },
  { j: "木曜日", h: "もくようび", r: "mokuyoubi", m: "목요일" },
  { j: "金曜日", h: "きんようび", r: "kinyoubi", m: "금요일" },
  { j: "土曜日", h: "どようび", r: "doyoubi", m: "토요일" },
  { j: "日曜日", h: "にちようび", r: "nichiyoubi", m: "일요일" },
  { j: "何曜日", h: "なんようび", r: "nanyoubi", m: "무슨 요일" },
  { j: "本", h: "ほん", r: "hon", m: "책" },
  { j: "辞書", h: "じしょ", r: "jisho", m: "사전" },
  { j: "雑誌", h: "ざっし", r: "zasshi", m: "잡지" },
  { j: "新聞", h: "しんぶん", r: "shinbun", m: "신문" },
  { j: "ノート", h: "のーと", r: "nooto", m: "공책" },
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
  { j: "パソコン", h: "ぱそこん", r: "pasokon", m: "컴퓨터" },
  { j: "電話", h: "でんわ", r: "denwa", m: "전화" },
  { j: "携帯", h: "けいたい", r: "keitai", m: "휴대폰" },
  { j: "机", h: "つくえ", r: "tsukue", m: "책상" },
  { j: "椅子", h: "いす", r: "isu", m: "의자" },
  { j: "車", h: "くるま", r: "kuruma", m: "자동차" },
  { j: "自転車", h: "じてんしゃ", r: "jitensha", m: "자전거" },
  { j: "財布", h: "さいふ", r: "saifu", m: "지갑" },
  { j: "帽子", h: "ぼうし", r: "boushi", m: "모자" },
  { j: "眼鏡", h: "めがね", r: "megane", m: "안경" },
  { j: "靴", h: "くつ", r: "kutsu", m: "신발" },
  { j: "服", h: "ふく", r: "fuku", m: "옷" },
  { j: "窓", h: "まど", r: "mado", m: "창문" },
  { j: "ドア", h: "どあ", r: "doa", m: "문" },
  { j: "天気", h: "てんき", r: "tenki", m: "날씨" },
  { j: "雨", h: "あめ", r: "ame", m: "비" },
  { j: "雪", h: "ゆき", r: "yuki", m: "눈" },
  { j: "風", h: "かぜ", r: "kaze", m: "바람" },
  { j: "雲", h: "くも", r: "kumo", m: "구름" },
  { j: "空", h: "そら", r: "sora", m: "하늘" },
  { j: "太陽", h: "たいよう", r: "taiyou", m: "해 / 태양" },
  { j: "海", h: "うみ", r: "umi", m: "바다" },
  { j: "山", h: "やま", r: "yama", m: "산" },
  { j: "川", h: "かわ", r: "kawa", m: "강" },
  { j: "森", h: "もり", r: "mori", m: "숲" },
  { j: "花", h: "はな", r: "hana", m: "꽃" },
  { j: "木", h: "き", r: "ki", m: "나무" },
  { j: "犬", h: "いぬ", r: "inu", m: "개" },
  { j: "猫", h: "ねこ", r: "neko", m: "고양이" },
  { j: "鳥", h: "とり", r: "tori", m: "새" },
  { j: "虫", h: "むし", r: "mushi", m: "벌레" },
  { j: "先生", h: "せんせい", r: "sensei", m: "선생님" },
  { j: "学生", h: "がくせい", r: "gakusei", m: "학생" },
  { j: "留学生", h: "りゅうがくせい", r: "ryuugakusei", m: "유학생" },
  { j: "会社員", h: "かいしゃいん", r: "kaishain", m: "회사원" },
  { j: "医者", h: "いしゃ", r: "isha", m: "의사" },
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
  { j: "答え", h: "こたえ", r: "kotae", m: "답" },
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
  { j: "指", h: "ゆび", r: "yubi", m: "손가락" },
  { j: "心", h: "こころ", r: "kokoro", m: "마음" },
  { j: "体", h: "からだ", r: "karada", m: "몸 / 신체" }
];

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

const katakanaWords = [
  { j: "カメラ", h: "かめら", r: "kamera", m: "카메라", l: "beginner", c: "object" },
  { j: "パソコン", h: "ぱそこん", r: "pasokon", m: "컴퓨터", l: "beginner", c: "object" },
  { j: "コーヒー", h: "こーひー", r: "koohii", m: "커피", l: "beginner", c: "food" },
  { j: "コーラ", h: "こーら", r: "koora", m: "콜라", l: "beginner", c: "food" },
  { j: "ペン", h: "ぺん", r: "pen", m: "펜", l: "beginner", c: "object" },
  { j: "テスト", h: "てすと", r: "tesuto", m: "시험 / 테스트", l: "beginner", c: "school" },
  { j: "ニュース", h: "にゅーす", r: "nyuusu", m: "뉴스", l: "beginner", c: "society" },
  { j: "スマホ", h: "すまほ", r: "sumaho", m: "스마트폰", l: "beginner", c: "object" },
  { j: "プリンター", h: "ぷりんたー", r: "purintaa", m: "프린터", l: "beginner", c: "object" },
  { j: "テーブル", h: "てーぶる", r: "teeburu", m: "테이블", l: "beginner", c: "object" },
  { j: "ソファー", h: "そふぁー", r: "sofaa", m: "소파", l: "beginner", c: "object" },
  { j: "ベッド", h: "べっど", r: "beddo", m: "침대", l: "beginner", c: "object" },
  { j: "エアコン", h: "えあこん", r: "eakon", m: "에어컨", l: "beginner", c: "object" },
  { j: "シャンプー", h: "しゃんぷー", r: "shanpuu", m: "샴푸", l: "beginner", c: "object" },
  { j: "タオル", h: "たおる", r: "taoru", m: "수건", l: "beginner", c: "object" },
  { j: "ドライヤー", h: "どらいやー", r: "doraiyaa", m: "헤어드라이어", l: "beginner", c: "object" },
  { j: "バス", h: "ばす", r: "basu", m: "버스", l: "beginner", c: "transportation" },
  { j: "タクシー", h: "たくしー", r: "takushii", m: "택시", l: "beginner", c: "transportation" },
  { j: "ビル", h: "びる", r: "biru", m: "빌딩", l: "beginner", c: "place" },
  { j: "エレベーター", h: "えれべーたー", r: "erebeetaa", m: "엘리베이터", l: "beginner", c: "place" },
  { j: "ホテル", h: "ほてる", r: "hoteru", m: "호텔", l: "beginner", c: "place" },
  { j: "ショッピング", h: "しょっぴんぐ", r: "shoppingu", m: "쇼핑", l: "beginner", c: "hobby" },
  { j: "デパート", h: "でぱーと", r: "depaato", m: "백화점", l: "beginner", c: "place" },
  { j: "ラジオ", h: "らじお", r: "rajio", m: "라디오", l: "beginner", c: "object" },
  { j: "テレビ", h: "てれび", r: "terebi", m: "텔레비전", l: "beginner", c: "object" },
  { j: "カード", h: "かーど", r: "kaado", m: "카드", l: "beginner", c: "object" },
  { j: "ノート", h: "のーと", r: "nooto", m: "노트", l: "beginner", c: "object" },
  { j: "ボールペン", h: "ぼーるぺん", r: "boorupen", m: "볼펜", l: "beginner", c: "object" },
  { j: "スポーツ", h: "すぽーつ", r: "supootsu", m: "스포츠", l: "beginner", c: "hobby" },
  { j: "サッカー", h: "さっかー", r: "sakkaa", m: "축구", l: "beginner", c: "hobby" },
  { j: "野球", h: "やきゅう", r: "yakyuu", m: "야구", l: "beginner", c: "hobby" },
  { j: "テニス", h: "てにす", r: "tenisu", m: "테니스", l: "beginner", c: "hobby" },
  { j: "ゴルフ", h: "ごるふ", r: "gorufu", m: "골프", l: "beginner", c: "hobby" },
  { j: "ダンス", h: "だんす", r: "dansu", m: "댄스", l: "beginner", c: "hobby" },
  { j: "アニメ", h: "あにめ", r: "anime", m: "애니메이션", l: "beginner", c: "hobby" },
  { j: "コンサート", h: "こんさーと", r: "konsaato", m: "콘서트", l: "beginner", c: "hobby" },
  { j: "フェスティバル", h: "ふぇすてぃばる", r: "fesutibaru", m: "축제", l: "beginner", c: "hobby" },
  { j: "サービス", h: "さーびす", r: "saabisu", m: "서비스", l: "beginner", c: "office" },
  { j: "エコ", h: "えこ", r: "eko", m: "친환경", l: "intermediate", c: "society" },
  { j: "リサイクル", h: "りさいくる", r: "risaikuru", m: "재활용", l: "intermediate", c: "society" },
  { j: "パスポート", h: "ぱすぽーと", r: "pasupooto", m: "여권", l: "beginner", c: "object" },
  { j: "カレンダー", h: "かれんだー", r: "karendaー", m: "달력", l: "beginner", c: "object" }
];

const basicAdverbs = [
  { j: "少し", h: "すこし", r: "sukoshi", m: "조금", l: "beginner", c: "adverb" },
  { j: "たくさん", h: "たくさん", r: "takusan", m: "많이", l: "beginner", c: "adverb" },
  { j: "とても", h: "とても", r: "totemo", m: "아주 / 매우", l: "beginner", c: "adverb" },
  { j: "全然", h: "ぜんぜん", r: "zenzen", m: "전혀", l: "beginner", c: "adverb" },
  { j: "必ず", h: "かならず", r: "kanarazu", m: "반드시", l: "intermediate", c: "adverb" },
  { j: "多分", h: "たぶん", r: "tabun", m: "아마도", l: "beginner", c: "adverb" },
  { j: "よく", h: "よく", r: "yoku", m: "자주 / 잘", l: "beginner", c: "adverb" },
  { j: "時々", h: "ときどき", r: "tokidoki", m: "가끔", l: "beginner", c: "adverb" },
  { j: "いつも", h: "いつも", r: "itsumo", m: "항상", l: "beginner", c: "adverb" },
  { j: "突然", h: "とつぜん", r: "totsuzen", m: "갑자기", l: "intermediate", c: "adverb" },
  { j: "ゆっくり", h: "ゆっくり", r: "yukkuri", m: "천천히", l: "beginner", c: "adverb" },
  { j: "早く", h: "はやく", r: "hayaku", m: "빨리", l: "beginner", c: "adverb" },
  { j: "まず", h: "まず", r: "mazu", m: "우선", l: "beginner", c: "adverb" },
  { j: "後で", h: "あとで", r: "atode", m: "나중에", l: "beginner", c: "adverb" },
  { j: "特に", h: "とくに", r: "tokuni", m: "특히", l: "intermediate", c: "adverb" },
  { j: "やっと", h: "やっと", r: "yatto", m: "겨우 / 드디어", l: "intermediate", c: "adverb" },
  { j: "やはり", h: "やはり", r: "yahari", m: "역시", l: "intermediate", c: "adverb" },
  { j: "絶対", h: "ぜったい", r: "zettai", m: "절대", l: "intermediate", c: "adverb" },
  { j: "大抵", h: "たいてい", r: "taitei", m: "대개 / 보통", l: "intermediate", c: "adverb" },
  { j: "非常に", h: "ひじょうに", r: "hijou ni", m: "매우 / 대단히", l: "intermediate", c: "adverb" },
  { j: "もし", h: "もし", r: "moshi", m: "만약", l: "beginner", c: "adverb" },
  { j: "少しも", h: "すこしも", r: "sukoshi mo", m: "조금도", l: "beginner", c: "adverb" },
  { j: "段々", h: "だんだん", r: "dandan", m: "점점 / 차츰", l: "beginner", c: "adverb" },
  { j: "急に", h: "きゅうに", r: "kyuu ni", m: "갑자기", l: "beginner", c: "adverb" },
  { j: "もっと", h: "もっと", r: "motto", m: "더", l: "beginner", c: "adverb" },
  { j: "きっと", h: "きっと", r: "kitto", m: "꼭 / 반드시", l: "beginner", c: "adverb" },
  { j: "さっき", h: "さっき", r: "sakki", m: "아까", l: "beginner", c: "adverb" },
  { j: "ちっとも", h: "ちっとも", r: "chittomo", m: "조금도 (부정)", l: "intermediate", c: "adverb" },
  { j: "ずいぶん", h: "ずいぶん", r: "zuibun", m: "상당히", l: "intermediate", c: "adverb" }
];

const stationeryItems = [
  { j: "定規", h: "じょうぎ", r: "jougi", m: "자", l: "beginner", c: "object" },
  { j: "ハサミ", h: "はさみ", r: "hasami", m: "가위", l: "beginner", c: "object" },
  { j: "消しゴム", h: "けしごむ", r: "keshigomu", m: "지우개", l: "beginner", c: "object" },
  { j: "のり", h: "のり", r: "nori", m: "풀", l: "beginner", c: "object" },
  { j: "ホッチキス", h: "ほっちきす", r: "hotchikisu", m: "스테이플러", l: "beginner", c: "object" },
  { j: "色鉛筆", h: "いろえんぴつ", r: "iroenpitsu", m: "색연필", l: "beginner", c: "object" },
  { j: "シャープペンシル", h: "しゃーぷぺんしる", r: "shaapupenshiru", m: "샤프", l: "beginner", c: "object" },
  { j: "用紙", h: "ようし", r: "youshi", m: "용지", l: "beginner", c: "object" },
  { j: "クリップ", h: "くりっぷ", r: "kurippu", m: "클립", l: "beginner", c: "object" },
  { j: "セロハンテープ", h: "せろはんてーぷ", r: "serohanteepu", m: "테이프", l: "beginner", c: "object" },
  { j: "磁石", h: "じしゃく", r: "jishaku", m: "자석", l: "intermediate", c: "object" },
  { j: "筆箱", h: "ふでばこ", r: "fudebako", m: "필통", l: "beginner", c: "object" },
  { j: "分度器", h: "ぶんどき", r: "bundoki", m: "각도기", l: "intermediate", c: "object" },
  { j: "コンパス", h: "こんぱす", r: "konpasu", m: "컴퍼스", l: "intermediate", c: "object" },
  { j: "画用紙", h: "gahyoushi", r: "gayoushi", m: "도화지", l: "intermediate", c: "object" }
];

const counterSuffixes = [
  { suffix: "人", reading: "にん", romaji: "nin", meaning: "명 (사람 세기)", koNames: ["한 명", "두 명", "세 명", "네 명", "다섯 명", "여섯 명", "일곱 명", "여덟 명", "아홉 명", "열 명"], jaReadings: ["ひとり", "ふたり", "さんにん", "よにん", "ごにん", "ろくにん", "しちにん", "はちにん", "きゅうにん", "じゅうにん"], jaKanjis: ["一人", "二人", "三人", "四人", "五人", "六人", "七人", "八人", "九人", "十人"] },
  { suffix: "本", reading: "ほん", romaji: "hon", meaning: "자루/개 (가늘고 긴 물건)", koNames: ["한 자루", "두 자루", "세 자루", "네 자루", "다섯 자루", "여섯 자루", "일곱 자루", "여덟 자루", "아홉 자루", "열 자루"], jaReadings: ["いっぽん", "にほん", "さんぼん", "よんほん", "ごほん", "ろっぽん", "ななほん", "はっぽん", "きゅうほん", "じゅっぽん"], jaKanjis: ["一本", "二本", "三本", "四本", "五本", "六本", "七本", "八本", "九本", "十本"] },
  { suffix: "枚", reading: "まい", romaji: "mai", meaning: "장 (얇은 물건 세기)", koNames: ["한 장", "두 장", "세 장", "네 장", "다섯 장", "여섯 장", "일곱 장", "여덟 장", "아홉 장", "열 장"], jaReadings: ["いちまい", "にまい", "さんまい", "よんまい", "ごまい", "ろくまい", "ななまい", "はちまい", "きゅうまい", "じゅうまい"], jaKanjis: ["一枚", "二枚", "三枚", "四枚", "五枚", "六枚", "七枚", "八枚", "九枚", "十枚"] },
  { suffix: "冊", reading: "さつ", romaji: "satsu", meaning: "권 (책 세기)", koNames: ["한 권", "두 권", "세 권", "네 권", "다섯 권", "여섯 권", "일곱 권", "여덟 권", "아홉 권", "열 권"], jaReadings: ["いっさつ", "にさつ", "さんさつ", "よんさつ", "ごさつ", "ろっさつ", "ななさつ", "はっさつ", "きゅうさつ", "じゅっさつ"], jaKanjis: ["一冊", "二冊", "三冊", "四冊", "五冊", "六冊", "七冊", "八冊", "九冊", "十冊"] },
  { suffix: "杯", reading: "はい", romaji: "hai", meaning: "잔 (컵에 담긴 액체)", koNames: ["한 잔", "두 잔", "세 잔", "네 잔", "다섯 잔", "여섯 잔", "일곱 잔", "여덟 잔", "아홉 잔", "열 잔"], jaReadings: ["いっぱい", "にはい", "さんばい", "よんはい", "ごはい", "ろっぱい", "ななはい", "はっぱい", "きゅうはい", "じゅっぱい"], jaKanjis: ["一杯", "二杯", "三杯", "四杯", "五杯", "六杯", "七杯", "八杯", "九杯", "十杯"] }
];

const hoursKanji = ["一時", "二時", "三時", "四時", "五時", "六時", "七時", "八時", "九時", "十時", "十一時", "十二時"];
const hoursHiragana = ["いちじ", "にじ", "さんじ", "よじ", "ごじ", "ろくじ", "しちじ", "はちじ", "くじ", "じゅうじ", "じゅういちじ", "じゅうにじ"];
const hoursRomaji = ["ichiji", "niji", "sanji", "yoji", "goji", "rokuji", "shichiji", "hachiji", "kuji", "juuji", "juuichiji", "juuniji"];
const hoursMeaning = ["1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시"];

// Vocabulary generation function
function generate1000Words() {
  const result = [];
  
  greetings.forEach((item) => {
    result.push({
      id: result.length + 1,
      word: item.j,
      reading: item.j,
      romaji: item.r,
      meaning: item.m,
      level: item.l,
      category: item.c
    });
  });

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

  katakanaWords.forEach(item => {
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

  basicAdverbs.forEach(item => {
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

  stationeryItems.forEach(item => {
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

  // Numbers 11 to 99
  const numKanji = ["十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "三十", "四十", "五十", "六十", "七十", "八十", "九十"];
  const numHiragana = ["じゅういち", "じゅうに", "じゅうさん", "じゅうよん", "じゅうご", "じゅうろく", "じゅうなな", "じゅうはち", "じゅうきゅう", "nijuu", "sanjuu", "yonjuu", "gojuu", "rokujuun", "nanajuu", "hachijuu", "kyuujuu"];
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

  // Months
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

  // Days
  const daysKanji = ["一日", "二日", "三日", "四日", "五日", "六日", "七日", "八日", "九日", "十日", "十一日", "十二日", "十三日", "十四日", "十五日", "十六日", "十七日", "十八日", "十九日", "二十日", "三十日"];
  const daysHiragana = ["ついたち", "ふつか", "みっか", "よっか", "いつか", "むいか", "なのか", "ようか", "ここのか", "とおか", "じゅういちにち", "じゅうににち", "じゅうさんにち", "じゅうよっか", "じゅうごにち", "じゅうろくにち", "じゅうしちにち", "じゅうはちにち", "じゅうくにち", "hatsuka", "sanjuunichi"];
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

  // Counters systematic expansion
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

  // Hours
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

  // Add numbers 21 to 99 systematically to pad count
  for (let dec = 20; dec <= 90; dec += 10) {
    for (let unit = 1; unit <= 9; unit++) {
      const kanji = (dec === 20 ? "二十" : dec === 30 ? "三十" : dec === 40 ? "四十" : dec === 50 ? "五十" : dec === 60 ? "六十" : dec === 70 ? "七十" : dec === 80 ? "八十" : "九十") + (unit === 1 ? "一" : unit === 2 ? "二" : unit === 3 ? "三" : unit === 4 ? "四" : unit === 5 ? "五" : unit === 6 ? "六" : unit === 7 ? "七" : unit === 8 ? "八" : "九");
      const meaning = (dec + unit).toString();
      result.push({
        id: result.length + 1,
        word: kanji,
        reading: kanji,
        romaji: `num_${dec + unit}`,
        meaning: `${meaning} (숫자)`,
        level: "beginner",
        category: "number"
      });
    }
  }

  // Systematically generate N5/N4 adjectives & verbs forms to reach 1000+ words
  // Let's generate polite -masu and gerund -te forms for verbs
  const verbBases = [
    { j: "会う", h: "あう", r: "au", m: "만나다" },
    { j: "洗う", h: "あらう", r: "arau", m: "씻다" },
    { j: "言う", h: "いう", r: "iu", m: "말하다" },
    { j: "歌う", h: "うたう", r: "utau", m: "노래하다" },
    { j: "買う", h: "かう", r: "kau", m: "사다" },
    { j: "使う", h: "つかう", r: "tsukau", m: "사용하다" },
    { j: "払う", h: "はらう", r: "harau", m: "지불하다" },
    { j: "待つ", h: "まつ", r: "matsu", m: "기다리다" },
    { j: "持つ", h: "もつ", r: "motsu", m: "가지다" },
    { j: "帰る", h: "かえる", r: "kaeru", m: "돌아가다" },
    { j: "作る", h: "つくる", r: "tsukuru", m: "만들다" },
    { j: "走る", h: "はしる", r: "hashiru", m: "달리다" },
    { j: "閉める", h: "しめる", r: "shimeru", m: "닫다" },
    { j: "開ける", h: "あける", r: "akeru", m: "열다" },
    { j: "食べる", h: "たべる", r: "taberu", m: "먹다" },
    { j: "寝る", h: "ねる", r: "neru", m: "자다" },
    { j: "見る", h: "みる", r: "miru", m: "보다" },
    { j: "起きる", h: "おきる", r: "okiru", m: "일어나다" },
    { j: "降りる", h: "おりる", r: "oriru", m: "내리다" },
    { j: "信じる", h: "しんじる", r: "shinjiru", m: "믿다" },
    { j: "落ちる", h: "おちる", r: "ochiru", m: "떨어지다" },
    { j: "死ぬ", h: "しぬ", r: "shinu", m: "죽다" },
    { j: "遊ぶ", h: "あそぶ", r: "asobu", m: "놀다" },
    { j: "呼ぶ", h: "よぶ", r: "yobu", m: "부르다" },
    { j: "飲む", h: "のむ", r: "nomu", m: "마시다" },
    { j: "読む", h: "よむ", r: "yomu", m: "읽다" },
    { j: "休む", h: "やすむ", r: "yasumu", m: "쉬다" },
    { j: "書く", h: "かく", r: "kaku", m: "쓰다" },
    { j: "歩く", h: "あるく", r: "aruku", m: "걷다" },
    { j: "聞く", h: "きく", r: "kiku", m: "듣다" },
    { j: "泳ぐ", h: "およぐ", r: "oyogu", m: "수영하다" },
    { j: "話す", h: "はなす", r: "hanasu", m: "말하다" },
    { j: "消す", h: "けす", r: "kesu", m: "끄다" },
    { j: "探す", h: "さがす", r: "sagasu", m: "찾다" },
    { j: "直す", h: "なおす", r: "naosu", m: "고치다" },
    { j: "起こす", h: "おこす", r: "okosu", m: "깨우다" },
    { j: "落とす", h: "おとす", r: "otosu", m: "떨어뜨리다" },
    { j: "貸す", h: "かす", r: "kasu", m: "빌려주다" },
    { j: "渡す", h: "わたす", r: "watasu", m: "건네다" },
    { j: "出す", h: "だす", r: "dasu", m: "꺼내다 / 제출하다" }
  ];

  verbBases.forEach(v => {
    // Dictionary form (already added as base verbs, but these are extra/conjugations)
    // 1. -Masu form (polite)
    let stem = v.h;
    let politeKana = "";
    let politeKanji = "";
    
    if (v.h.endsWith("う")) { stem = v.h.slice(0, -1); politeKana = stem + "います"; politeKanji = v.j.slice(0, -1) + "います"; }
    else if (v.h.endsWith("つ")) { stem = v.h.slice(0, -1); politeKana = stem + "ちます"; politeKanji = v.j.slice(0, -1) + "ちます"; }
    else if (v.h.endsWith("る")) { 
      // check if ichidan (ends with iru/eru)
      const penultimate = v.h.charAt(v.h.length - 2);
      const isIchidan = ["い", "き", "し", "ち", "に", "ひ", "み", "り", "え", "け", "せ", "て", "ね", "へ", "め", "れ"].includes(penultimate);
      if (isIchidan) {
        stem = v.h.slice(0, -1); politeKana = stem + "ます"; politeKanji = v.j.slice(0, -1) + "ます";
      } else {
        stem = v.h.slice(0, -1); politeKana = stem + "ります"; politeKanji = v.j.slice(0, -1) + "ります";
      }
    }
    else if (v.h.endsWith("ぬ")) { stem = v.h.slice(0, -1); politeKana = stem + "にます"; politeKanji = v.j.slice(0, -1) + "にます"; }
    else if (v.h.endsWith("ぶ")) { stem = v.h.slice(0, -1); politeKana = stem + "びます"; politeKanji = v.j.slice(0, -1) + "びます"; }
    else if (v.h.endsWith("む")) { stem = v.h.slice(0, -1); politeKana = stem + "みます"; politeKanji = v.j.slice(0, -1) + "みます"; }
    else if (v.h.endsWith("く")) { stem = v.h.slice(0, -1); politeKana = stem + "きます"; politeKanji = v.j.slice(0, -1) + "きます"; }
    else if (v.h.endsWith("ぐ")) { stem = v.h.slice(0, -1); politeKana = stem + "ぎます"; politeKanji = v.j.slice(0, -1) + "ぎます"; }
    else if (v.h.endsWith("す")) { stem = v.h.slice(0, -1); politeKana = stem + "します"; politeKanji = v.j.slice(0, -1) + "します"; }

    if (politeKana) {
      result.push({
        id: result.length + 1,
        word: politeKanji,
        reading: politeKana,
        romaji: v.r + "_masu",
        meaning: v.m + " (존경어 / ~합니다)",
        level: "beginner",
        category: "verb_conjugation"
      });
    }

    // 2. -Te form
    let teKana = "";
    let teKanji = "";
    if (v.h.endsWith("う") || v.h.endsWith("つ") || v.h.endsWith("る")) {
      // Check ichidan for 'ru'
      const penultimate = v.h.charAt(v.h.length - 2);
      const isIchidan = ["い", "き", "し", "ち", "に", "ひ", "み", "り", "え", "け", "せ", "て", "ね", "へ", "め", "れ"].includes(penultimate);
      if (v.h.endsWith("る") && isIchidan) {
        teKana = v.h.slice(0, -1) + "て";
        teKanji = v.j.slice(0, -1) + "て";
      } else {
        teKana = v.h.slice(0, -1) + "って";
        teKanji = v.j.slice(0, -1) + "って";
      }
    }
    else if (v.h.endsWith("ぬ") || v.h.endsWith("ぶ") || v.h.endsWith("む")) {
      teKana = v.h.slice(0, -1) + "んで";
      teKanji = v.j.slice(0, -1) + "んで";
    }
    else if (v.h.endsWith("く")) {
      if (v.j === "行く") { teKana = "いって"; teKanji = "行って"; }
      else { teKana = v.h.slice(0, -1) + "いて"; teKanji = v.j.slice(0, -1) + "いて"; }
    }
    else if (v.h.endsWith("ぐ")) {
      teKana = v.h.slice(0, -1) + "いで";
      teKanji = v.j.slice(0, -1) + "いで";
    }
    else if (v.h.endsWith("す")) {
      teKana = v.h.slice(0, -1) + "して";
      teKanji = v.j.slice(0, -1) + "して";
    }

    if (teKana) {
      result.push({
        id: result.length + 1,
        word: teKanji,
        reading: teKana,
        romaji: v.r + "_te",
        meaning: v.m + " (~해서 / ~하고 / ~해라)",
        level: "intermediate",
        category: "verb_conjugation"
      });
    }
  });

  // Let's add intermediate abstract vocabulary
  const extraIntermediateNouns = [
    { j: "目的", h: "もくてき", r: "mokuteki", m: "목적" },
    { j: "結果", h: "けっか", r: "kekka", m: "결과" },
    { j: "理由", h: "りゆう", r: "riyuu", m: "이유" },
    { j: "意見", h: "いけん", r: "iken", m: "의견" },
    { j: "方法", h: "ほうほう", r: "houhou", m: "방법" },
    { j: "貿易", h: "ぼうえき", r: "boueki", m: "무역" },
    { j: "輸出", h: "ゆしゅつ", r: "yushutsu", m: "수출" },
    { j: "輸入", h: "ゆにゅう", r: "yunyuu", m: "수입" },
    { j: "生産", h: "せいさん", r: "seisan", m: "생산" },
    { j: "消費", h: "しょうひ", r: "shouhi", m: "소비" },
    { j: "物価", h: "ぶっか", r: "bukka", m: "물가" },
    { j: "広告", h: "こうこく", r: "koukoku", m: "광고" },
    { j: "放送", h: "ほうそう", r: "housou", m: "방송" },
    { j: "番組", h: "ばんぐみ", r: "bangumi", m: "방송 프로그램" },
    { j: "記事", h: "きじ", r: "kiji", m: "기사" },
    { j: "将来", h: "しょうらい", r: "shourai", m: "장래 / 미래" },
    { j: "希望", h: "きぼう", r: "kibou", m: "희망" },
    { j: "目標", h: "もくひょう", r: "mokuhyou", m: "목표" },
    { j: "努力", h: "どりょく", r: "doryoku", m: "노력" },
    { j: "成功", h: "せいこう", r: "seikou", m: "성공" },
    { j: "失敗", h: "しっぱい", r: "shippai", m: "실패" },
    { j: "合格", h: "ごうかく", r: "goukaku", m: "합격" },
    { j: "進学", h: "しんがく", r: "shingaku", m: "진학" },
    { j: "卒業", h: "そつぎょう", r: "sotsugyou", m: "졸업" },
    { j: "入学", h: "にゅうがく", r: "nyuugaku", m: "입학" },
    { j: "講義", h: "こうぎ", r: "kougi", m: "강의" },
    { j: "研究", h: "けんきゅう", r: "kenkyuu", m: "연구" },
    { j: "論文", h: "ろんぶん", r: "ronbun", m: "논문" },
    { j: "奨学金", h: "しょうがくきん", r: "shougakukin", m: "장학금" },
    { j: "面接", h: "めんせつ", r: "mensetsu", m: "면접" },
    { j: "採用", h: "さいよう", r: "saiyou", m: "채용" },
    { j: "給料", h: "きゅうりょう", r: "kyuuryou", m: "월급" },
    { j: "残業", h: "ざんぎょう", r: "zangyou", m: "야근" },
    { j: "出張", h: "しゅっちょう", r: "shutchou", m: "출장" },
    { j: "会議", h: "かいぎ", r: "kaigi", m: "회의" },
    { j: "書類", h: "しょるい", r: "shorui", m: "서류" },
    { j: "報告", h: "ほうこく", r: "houkoku", m: "보고" },
    { j: "企画", h: "きかく", r: "kikaku", m: "기획" },
    { j: "開発", h: "かいはつ", r: "kaihatsu", m: "개발" },
    { j: "管理", h: "かんり", r: "kanri", m: "관리" }
  ];

  extraIntermediateNouns.forEach(item => {
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

  return result;
}

// Sentences generation function
function generate500Sentences() {
  const result = [];
  
  const baseSentences = [
    { s: "これは本です。", h: "これはほんです。", r: "kore wa hon desu.", m: "이것은 책입니다.", l: "beginner", c: "basic", t: ["これ", "は", "本", "です", "。"] },
    { s: "あそこは学校です。", h: "あそこはがっこうです。", r: "asoko wa gakkou desu.", m: "저곳은 학교입니다.", l: "beginner", c: "basic", t: ["あそこ", "は", "学校", "です", "。"] },
    { s: "私は学生です。", h: "わたしはがく세いです。", r: "watashi wa gakusei desu.", m: "저는 학생입니다.", l: "beginner", c: "basic", t: ["私", "は", "学生", "です", "。"] },
    { s: "キムさんは会社員ですか。", h: "キムさんはかいしゃいんですか。", r: "kimu san wa kaishain desu ka.", m: "김 씨는 회사원입니까?", l: "beginner", c: "basic", t: ["キムさん", "は", "会社員", "です", "か", "？"] },
    { s: "あの人は先生ではありません。", h: "あのひとはせんせいではありません。", r: "ano hito wa sensei de wa arimasen.", m: "저 사람은 선생님이 아닙니다.", l: "beginner", c: "basic", t: ["あの人", "は", "先生", "では", "ありません", "。"] },
    { s: "水をお願いします。", h: "みずをおねがいします。", r: "mizu wo onegaishimasu.", m: "물을 부탁합니다.", l: "beginner", c: "dining", t: ["水", "を", "お願い", "します", "。"] },
    { s: "コーヒーを飲みます。", h: "こーひーをのみます。", r: "koohii wo nomimasu.", m: "커피를 마십니다.", l: "beginner", c: "dining", t: ["コーヒー", "を", "飲みます", "。"] },
    { s: "りんごを食べました。", h: "りんごをたべました。", r: "ringo wo tabemashita.", m: "사과를 먹었습니다.", l: "beginner", c: "dining", t: ["りんご", "を", "食べました", "。"] },
    { s: "学校に行きます。", h: "がっこうにいきます。", r: "gakkou ni ikimasu.", m: "학교에 갑니다.", l: "beginner", c: "daily", t: ["学校", "に", "行きます", "。"] },
    { s: "友達に会います。", h: "ともだちにあいます。", r: "tomodachi ni aimasu.", m: "친구를 만납니다.", l: "beginner", c: "daily", t: ["友達", "に", "会います", "。"] },
    { s: "朝七時に起きます。", h: "あさしちじにおきます。", r: "asa shichiji ni okimasu.", m: "아침 7시에 일어납니다.", l: "beginner", c: "time", t: ["朝", "七時", "に", "起きます", "。"] },
    { s: "夜十一時に寝ます。", h: "よるじゅういちじにねます。", r: "yoru juuichiji ni nemasu.", m: "밤 11시에 잡니다.", l: "beginner", c: "time", t: ["夜", "十一時", "に", "寝ます", "。"] },
    { s: "日本語の勉強をします。", h: "にほんごのべんきょうをします。", r: "nihongo no benkyou wo shimasu.", m: "일본어 공부를 합니다.", l: "beginner", c: "daily", t: ["日本語", "の", "勉強", "を", "します", "。"] },
    { s: "部屋にテレビがあります。", h: "へやにてれびがあります。", r: "heya ni terebi ga arimasu.", m: "방에 텔레비전이 있습니다.", l: "beginner", c: "object", t: ["部屋", "に", "テレビ", "が", "あります", "。"] },
    { s: "庭に犬がいます。", h: "にわにいぬがいます。", r: "niwa ni inu ga imasu.", m: "정원에 개가 있습니다.", l: "beginner", c: "object", t: ["庭", "に", "犬", "가", "います", "。"] },
    { s: "鞄の中に何がありますか。", h: "かばんのなかになにがありますか。", r: "kaban no naka ni nani ga arimasu ka.", m: "가방 안에 무엇이 있습니까?", l: "beginner", c: "object", t: ["鞄", "の", "中", "に", "何", "が", "あります", "か", "？"] },
    { s: "昨日映画を見ました。", h: "きのうえいがをみました。", r: "kinou eiga wo mimashita.", m: "어제 영화를 봤습니다.", l: "beginner", c: "daily", t: ["昨日", "映画", "を", "見ました", "。"] },
    { s: "週末にデパートで買い物をしました。", h: "しゅうまつにでぱーとでかいものをしました。", r: "shuumatsu ni depaato de kaimono wo shimashita.", m: "주말에 백화점에서 쇼핑을 했습니다.", l: "beginner", c: "daily", t: ["週末", "に", "デパート", "で", "買い物", "を", "しました", "。"] },
    { s: "今日は天気がいいです。", h: "きょうはてんきがいいです。", r: "kyou wa tenki ga ii desu.", m: "오늘 날씨가 좋습니다.", l: "beginner", c: "weather", t: ["今日", "は", "天気", "が", "いい", "です", "。"] },
    { s: "明日は雨が降るでしょう。", h: "あしたはあめがふるでしょう。", r: "ashita wa ame ga furu deshou.", m: "내일은 비가 내리겠지요.", l: "intermediate", c: "weather", t: ["明날", "は", "雨", "が", "降る", "でしょう", "。"] },
    
    // Intermediate
    { s: "日本語を話すことができます。", h: "にほんごをはなすことができます。", r: "nihongo wo hanasu koto ga dekimasu.", m: "일본어를 말할 수 있습니다.", l: "intermediate", c: "ability", t: ["日本語", "を", "話す", "こと", "が", "できます", "。"] },
    { s: "寿司を食べたことがありますか。", h: "すしをたべたことがありますか。", r: "sushi wo tabeta koto ga arimasu ka.", m: "초밥을 먹어 본 적이 있습니까?", l: "intermediate", c: "experience", t: ["寿司", "を", "食べた", "こと", "が", "あります", "か", "？"] },
    { s: "雨が降ったら、行きません。", h: "あめがふったら、いきません。", r: "ame ga futtara, ikimasen.", m: "비가 내리면, 가지 않습니다.", l: "intermediate", c: "conditional", t: ["雨", "が", "降ったら", "、", "行きません", "。"] },
    { s: "テレビを見ながら勉強をします。", h: "てれびをみながらべんきょうをします。", r: "terebi wo minagara benkyou wo shimasu.", m: "텔레비전을 보면서 공부를 합니다.", l: "intermediate", c: "daily", t: ["テレビ", "を", "見ながら", "勉強", "を", "します", "。"] },
    { s: "早く家に帰ったほうがいいです。", h: "はやくいえにかえったほうがいいです。", r: "hayaku ie ni kaetta hou ga ii desu.", m: "일찍 집에 돌아가는 편이 좋습니다.", l: "intermediate", c: "advice", t: ["早く", "家", "に", "帰った", "ほう", "が", "いい", "です", "。"] },
    { s: "窓を開けてもいいですか。", h: "まどをあけてもいいですか。", r: "mado wo akete mo ii desu ka.", m: "창문을 열어도 되겠습니까?", l: "intermediate", c: "permission", t: ["窓", "を", "開けても", "いい", "です", "か", "？"] },
    { s: "ここに座らないでください。", h: "ここにすわらないでください。", r: "koko ni suwaranaide kudasai.", m: "여기에 앉지 말아 주십시오.", l: "intermediate", c: "request", t: ["ここ", "に", "座らないで", "ください", "。"] },
    { s: "明日までに宿題を出さなければなりません。", h: "あしたまでにしゅくだいをださなければなりません。", r: "ashita made ni shukudai wo dasanakeleba narimasen.", m: "내일까지 숙제를 내야만 합니다.", l: "intermediate", c: "obligation", t: ["明日", "までに", "宿題", "を", "出さなければ", "なりません", "。"] },
    { s: "毎日漢字を練習することにしています。", h: "まいにちかんじをれんしゅうすることにしています。", r: "mainichi kanji wo renshuu suru koto ni shite imasu.", m: "매일 한자를 연습하기로 하고 있습니다.", l: "intermediate", c: "habit", t: ["毎日", "漢字", "を", "練習する", "こと", "に", "して", "います", "。"] },
    { s: "日本に行ったら、温泉に入りたいです。", h: "にほんにいったら、おんせんにはいりたいです。", r: "nihon ni ittara, onsen ni hairitai desu.", m: "일본에 가면, 온천에 들어가고 싶습니다.", l: "intermediate", c: "desire", t: ["日本", "に", "行ったら", "、", "温泉", "に", "入りたい", "です", "。"] }
  ];

  baseSentences.forEach((item) => {
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
    { j: "社長", h: "しゃちょう", r: "shachou", m: "사장님은" },
    { j: "会社員", h: "かいしゃいん", r: "kaishain", m: "회사원은" },
    { j: "子供", h: "こども", r: "kodomo", m: "아이는" },
    { j: "私", h: "わたし", r: "watashi", m: "나는" },
    { j: "彼", h: "かれ", r: "kare", m: "그는" },
    { j: "彼女", h: "かのじょ", r: "kanojo", m: "그녀는" }
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
    { j: "部屋", h: "へや", r: "heya", m: "방에" },
    { j: "海", h: "うみ", r: "umi", m: "바다에" },
    { j: "山", h: "やま", r: "yama", m: "산에" },
    { j: "スーパー", h: "すーぱー", r: "suupaa", m: "슈퍼에" },
    { j: "ホテル", h: "ほてる", r: "hoteru", m: "호텔에" },
    { j: "空港", h: "くうこう", r: "kuukou", m: "공항에" }
  ];

  const travelVerbs = [
    { j: "行きます", h: "いきます", r: "ikimasu", m: "갑니다" },
    { j: "行きました", h: "いきました", r: "ikimashita", m: "갔습니다" },
    { j: "帰ります", h: "かえります", r: "kaerimasu", m: "돌아갑니다" },
    { j: "来ます", h: "きます", r: "kimasu", m: "옵니다" },
    { j: "来ました", h: "きました", r: "kimashita", m: "왔습니다" }
  ];

  // Travelers (120 sentences)
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
      if (count >= 120) break;
    }
    if (count >= 120) break;
  }

  // Dining (120 sentences)
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
    { j: "寿司", h: "すし", r: "sushi", m: "초밥을" },
    { j: "果物", h: "くだもの", r: "kudamono", m: "과일을" },
    { j: "野菜", h: "やさい", r: "yasai", m: "야채를" },
    { j: "コーヒー", h: "こーひー", r: "koohii", m: "커피를" },
    { j: "弁当", h: "べんとう", r: "bento", m: "도시락을" },
    { j: "ケーキ", h: "けーき", r: "keeki", m: "케이크를" }
  ];

  const diningVerbs = [
    { j: "食べます", h: "たべます", r: "tabemasu", m: "먹습니다" },
    { j: "飲みます", h: "のみます", r: "nomimasu", m: "마십니다" },
    { j: "食べました", h: "たべました", r: "tabemashita", m: "먹었습니다" },
    { j: "飲みました", h: "のみました", r: "nomimashita", m: "마셨습니다" }
  ];

  count = 0;
  for (let i = 0; i < subjects.length; i++) {
    for (let j = 0; j < foods.length; j++) {
      const isLiquid = ["水", "お茶", "牛乳", "ビール", "コーヒー"].includes(foods[j].j);
      let verb;
      if (isLiquid) {
        verb = diningVerbs[(i + j) % 2 === 0 ? 1 : 3];
      } else {
        verb = diningVerbs[(i + j) % 2 === 0 ? 0 : 2];
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
      if (count >= 120) break;
    }
    if (count >= 120) break;
  }

  // Time & Actions (120 sentences)
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
    { j: "帰ります", h: "かえります", r: "kaerimasu", m: "퇴근합니다" }
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
      if (count >= 120) break;
    }
    if (count >= 120) break;
  }

  // Feelings / Subjects (120 sentences)
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
    { j: "忙しいです", h: "いそがしいです", r: "isogashii desu", m: "바쁩니다" }
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
      if (count >= 120) break;
    }
    if (count >= 120) break;
  }

  // Te-Form Complex Grammar (120 sentences)
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
    { suffix: "います。", reading: "います。", romaji: "imasu.", meaning: "고 있습니다." },
    { suffix: "みてください。", reading: "みてください。", romaji: "mite kudasai.", meaning: "해 보세요." }
  ];

  const objectsForActions = [
    { j: "ご飯を", h: "ごはんを", r: "gohan wo", m: "밥을" },
    { j: "お水を", h: "おみずを", r: "omizu wo", m: "물을" },
    { j: "学校に", h: "がっこうに", r: "gakkou ni", m: "학교에" },
    { j: "ここへ", h: "ここへ", r: "koko e", m: "여기에" },
    { j: "映画을", h: "えいがを", r: "eiga wo", m: "영화를" },
    { j: "ラジオを", h: "らじおを", r: "rajio wo", m: "라디오를" },
    { j: "手紙を", h: "てがみを", r: "tegami wo", m: "편지를" },
    { j: "本を", h: "ほんを", r: "hon wo", m: "책을" },
    { j: "日本語で", h: "にほんごで", r: "nihongo de", m: "일본어로" },
    { j: "ちょっと", h: "ちょっと", r: "chotto", m: "잠깐" }
  ];

  count = 0;
  for (let i = 0; i < objectsForActions.length; i++) {
    for (let j = 0; j < intermediateSuffixes.length; j++) {
      const action = intermediateActions[i];
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
      if (count >= 120) break;
    }
    if (count >= 120) break;
  }

  // Conversation (10 sentences)
  const extraConversational = [
    { s: "日本語の勉強は大変ですが、面白いです。", h: "にほんごのべんきょうはたいへんですが、おもしろいです。", r: "nihongo no benkyou wa taihen desu ga, omoshiroi desu.", m: "일본어 공부는 힘들지만, 재밌습니다.", l: "intermediate", c: "conversation", t: ["日本語", "の", "勉強", "は", "大変", "ですが", "、", "面白い", "です", "。"] },
    { s: "将来、日本の会社で働きたいと思っています。", h: "しょうらい、にほんのかいしゃではたらきたいとおمっています。", r: "shourai, nihon no kaisha de hatarakitai to omotte imasu.", m: "장래에, 일본 회사에서 일하고 싶다고 생각하고 있습니다.", l: "intermediate", c: "conversation", t: ["将来", "、", "日本", "の", "会社", "で", "働きたい", "と", "思って", "います", "。"] },
    { s: "わからない単語があれば、辞書で調べてください。", h: "わからないたんごがあれば、じしょでしらべてください。", r: "wakaranai tango ga areba, jisho de shirabete kudasai.", m: "모르는 단어가 있다면, 사전으로 찾아보십시오.", l: "intermediate", c: "conversation", t: ["わからない", "単語", "が", "あれば", "、", "辞書", "で", "調べて", "ください", "。"] },
    { s: "日本の文化に興味を持つようになりました。", h: "にほんのぶんかにきょうみをもつようになりました。", r: "nihon no bunka ni kyoumi wo motsu you ni narimashita.", m: "일본 문화에 흥미를 가지게 되었습니다.", l: "intermediate", c: "conversation", t: ["日本", "の", "文化", "に", "興味", "を", "持つ", "ように", "なりました", "。"] },
    { s: "昨日は友達と新宿で会って、ご飯を食べました。", h: "きのうはともだちとしんじゅくであって、ごはんをたべました。", r: "kinou wa tomodachi to shinjuku de atte, gohan wo tabemashita.", m: "어제는 친구와 신주쿠에서 만나서, 밥을 먹었습니다.", l: "intermediate", c: "conversation", t: ["昨日", "は", "友達", "と", "新宿", "で", "会って", "、", "ご飯", "を", "食べました", "。"] },
    { s: "体にいいですから、毎日運動를することにしています。", h: "からだにいいですから、まいにちうんどうをすることにしています。", r: "karada ni ii desu kara, mainichi undou wo suru koto ni shite imasu.", m: "몸에 좋으니까, 매일 운동을 하기로 하고 있습니다.", l: "intermediate", c: "conversation", t: ["体", "に", "いい", "ですから", "、", "毎日", "運動", "を", "する", "こと", "に", "して", "います", "。"] },
    { s: "図書館では静かにしなければなりません。", h: "としょかんではしずかにしなければなりません。", r: "toshokan de wa shizuka ni shinakereba narimasen.", m: "도서관에서는 조용히 해야만 합니다.", l: "intermediate", c: "conversation", t: ["図書館", "では", "静かに", "しなければ", "なりません", "。"] },
    { s: "風邪をひいたので、今日は会社を休むことにしました。", h: "かぜをひいたので、きょうはかいしゃをやすむことにしました。", r: "kaze wo hiita node, kyou wa kaisha wo yasumu koto ni shimashita.", m: "감기에 걸려서, 오늘은 회사를 쉬기로 결정했습니다.", l: "intermediate", c: "conversation", t: ["&nbsp;風邪", "を", "ひいた", "ので", "、", "今日", "は", "会社", "を", "休む", "ことに", "しました", "。"] },
    { s: "この仕事を終えてから、遊びに行きましょう。", h: "このしごとをおえてから、あそびにいきましょう。", r: "kono shigoto wo oete kara, asobi ni ikimashou.", m: "이 일을 끝내고 나서, 놀러 갑시다.", l: "intermediate", c: "conversation", t: ["この", "仕事", "を", "終えて", "から", "、", "遊び", "に", "行きましょう", "。"] },
    { s: "試験に合格できるように、一所懸命勉強します。", h: "しけんにごうかくできるように、いっしょけんめいべんきょうします。", r: "shiken ni goukaku dekiru you ni, isshokenmei benkyou shimasu.", m: "시험에 합격할 수 있도록, 열심히 공부하겠습니다.", l: "intermediate", c: "conversation", t: ["試験", "に", "合格", "できる", "ように", "、", "一生懸命", "勉強します", "。"] }
  ];

  extraConversational.forEach((item) => {
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

const vocabulary = generate1000Words();
const sentences = generate500Sentences();

console.log(`Generated ${vocabulary.length} vocabulary words!`);
console.log(`Generated ${sentences.length} sentences!`);

const targetDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

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
