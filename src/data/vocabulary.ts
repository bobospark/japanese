export interface Word {
  id: number;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: 'beginner' | 'intermediate';
  category: string;
  saved?: boolean;
}

export const vocabulary: Word[] = [
  {
    "id": 1,
    "word": "おはようございます",
    "reading": "おはようございます",
    "romaji": "ohayougozaimasu",
    "meaning": "안녕하세요 (아침)",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 2,
    "word": "こんにちは",
    "reading": "こんにちは",
    "romaji": "konnichiwa",
    "meaning": "안녕하세요 (낮)",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 3,
    "word": "こんばんは",
    "reading": "こんばんは",
    "romaji": "konbanwa",
    "meaning": "안녕하세요 (밤)",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 4,
    "word": "ありがとうございます",
    "reading": "ありがとうございます",
    "romaji": "arigatougozaimasu",
    "meaning": "감사합니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 5,
    "word": "すみません",
    "reading": "すみません",
    "romaji": "sumimasen",
    "meaning": "죄송합니다 / 실례합니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 6,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaning": "네",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 7,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaning": "아니요",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 8,
    "word": "さようなら",
    "reading": "さようなら",
    "romaji": "sayounara",
    "meaning": "안녕히 가세요",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 9,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaning": "처음 뵙겠습니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 10,
    "word": "よろしくお願いします",
    "reading": "よろしくお願いします",
    "romaji": "yoroshiku onegaishimasu",
    "meaning": "잘 부탁드립니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 11,
    "word": "おやすみなさい",
    "reading": "おやすみなさい",
    "romaji": "oyasuminasai",
    "meaning": "안녕히 주무세요",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 12,
    "word": "いってきます",
    "reading": "いってきます",
    "romaji": "ittekimasu",
    "meaning": "다녀오겠습니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 13,
    "word": "いってらっしゃい",
    "reading": "いってらっしゃい",
    "romaji": "itterasshai",
    "meaning": "다녀오세요",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 14,
    "word": "ただいま",
    "reading": "ただいま",
    "romaji": "tadaima",
    "meaning": "다녀왔습니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 15,
    "word": "おかえりなさい",
    "reading": "おかえりなさい",
    "romaji": "okaerinasai",
    "meaning": "어서 오세요",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 16,
    "word": "ごちそうさまでした",
    "reading": "ごちそうさまでした",
    "romaji": "gochisousamadeshita",
    "meaning": "잘 먹었습니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 17,
    "word": "いただきます",
    "reading": "いただきます",
    "romaji": "itadakimasu",
    "meaning": "잘 먹겠습니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 18,
    "word": "おめでとうございます",
    "reading": "おめでとうございます",
    "romaji": "omedetougozaimasu",
    "meaning": "축하합니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 19,
    "word": "お元気ですか",
    "reading": "お元気ですか",
    "romaji": "ogenkidesuka",
    "meaning": "잘 지내십니까?",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 20,
    "word": "大丈夫です",
    "reading": "大丈夫です",
    "romaji": "daijoubudesu",
    "meaning": "괜찮습니다",
    "level": "beginner",
    "category": "greeting"
  },
  {
    "id": 21,
    "word": "家族",
    "reading": "かぞく",
    "romaji": "kazoku",
    "meaning": "가족",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 22,
    "word": "両親",
    "reading": "りょうしん",
    "romaji": "ryoushin",
    "meaning": "부모",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 23,
    "word": "父",
    "reading": "ちち",
    "romaji": "chichi",
    "meaning": "아버지 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 24,
    "word": "母",
    "reading": "はは",
    "romaji": "haha",
    "meaning": "어머니 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 25,
    "word": "お父さん",
    "reading": "おとうさん",
    "romaji": "otousan",
    "meaning": "아버지",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 26,
    "word": "お母さん",
    "reading": "おかあさん",
    "romaji": "okaasan",
    "meaning": "어머니",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 27,
    "word": "兄",
    "reading": "あに",
    "romaji": "ani",
    "meaning": "형 / 오빠 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 28,
    "word": "姉",
    "reading": "あね",
    "romaji": "ane",
    "meaning": "누나 / 언니 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 29,
    "word": "お兄さん",
    "reading": "おにいさん",
    "romaji": "oniisan",
    "meaning": "형 / 오빠",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 30,
    "word": "お姉さん",
    "reading": "おねえさん",
    "romaji": "oneesan",
    "meaning": "누나 / 언니",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 31,
    "word": "弟",
    "reading": "おとうと",
    "romaji": "otouto",
    "meaning": "남동생",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 32,
    "word": "妹",
    "reading": "いもうと",
    "romaji": "imouto",
    "meaning": "여동생",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 33,
    "word": "祖父",
    "reading": "そふ",
    "romaji": "sofu",
    "meaning": "할아버지 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 34,
    "word": "祖母",
    "reading": "そぼ",
    "romaji": "sobo",
    "meaning": "할머니 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 35,
    "word": "おじいさん",
    "reading": "おじいさん",
    "romaji": "ojiisan",
    "meaning": "할아버지",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 36,
    "word": "おばあさん",
    "reading": "おばあさん",
    "romaji": "obaasan",
    "meaning": "할머니",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 37,
    "word": "子供",
    "reading": "こども",
    "romaji": "kodomo",
    "meaning": "아이 / 자녀",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 38,
    "word": "息子",
    "reading": "むすこ",
    "romaji": "musuko",
    "meaning": "아들",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 39,
    "word": "娘",
    "reading": "むすめ",
    "romaji": "musume",
    "meaning": "딸",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 40,
    "word": "主人",
    "reading": "しゅじん",
    "romaji": "shujin",
    "meaning": "남편 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 41,
    "word": "妻",
    "reading": "つま",
    "romaji": "tsuma",
    "meaning": "아내 (나의)",
    "level": "beginner",
    "category": "family"
  },
  {
    "id": 42,
    "word": "ご飯",
    "reading": "ごはん",
    "romaji": "gohan",
    "meaning": "밥 / 식사",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 43,
    "word": "水",
    "reading": "みず",
    "romaji": "mizu",
    "meaning": "물",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 44,
    "word": "お茶",
    "reading": "おちゃ",
    "romaji": "ocha",
    "meaning": "차 (녹차)",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 45,
    "word": "牛乳",
    "reading": "ぎゅうにゅう",
    "romaji": "gyuunyuu",
    "meaning": "우유",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 46,
    "word": "お酒",
    "reading": "おさけ",
    "romaji": "osake",
    "meaning": "술",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 47,
    "word": "ビール",
    "reading": "びーる",
    "romaji": "biiru",
    "meaning": "맥주",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 48,
    "word": "肉",
    "reading": "にく",
    "romaji": "niku",
    "meaning": "고기",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 49,
    "word": "魚",
    "reading": "さかな",
    "romaji": "sakana",
    "meaning": "생선",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 50,
    "word": "野菜",
    "reading": "やさい",
    "romaji": "yasai",
    "meaning": "야채",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 51,
    "word": "果物",
    "reading": "くだもの",
    "romaji": "kudamono",
    "meaning": "과일",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 52,
    "word": "卵",
    "reading": "たまご",
    "romaji": "tamago",
    "meaning": "달걀",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 53,
    "word": "パン",
    "reading": "ぱん",
    "romaji": "pan",
    "meaning": "빵",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 54,
    "word": "ラーメン",
    "reading": "らーめん",
    "romaji": "raamen",
    "meaning": "라면",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 55,
    "word": "寿司",
    "reading": "すし",
    "romaji": "sushi",
    "meaning": "초밥",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 56,
    "word": "弁当",
    "reading": "べんとう",
    "romaji": "bento",
    "meaning": "도시락",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 57,
    "word": "朝ご飯",
    "reading": "あさごはん",
    "romaji": "asagohan",
    "meaning": "아침 식사",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 58,
    "word": "昼ご飯",
    "reading": "ひるごはん",
    "romaji": "hirugohan",
    "meaning": "점심 식사",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 59,
    "word": "晩ご飯",
    "reading": "ばんごはん",
    "romaji": "bangohan",
    "meaning": "저녁 식사",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 60,
    "word": "食堂",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaning": "식당",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 61,
    "word": "料理",
    "reading": "りょうり",
    "romaji": "ryouri",
    "meaning": "요리",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 62,
    "word": "学校",
    "reading": "がっこう",
    "romaji": "gakkou",
    "meaning": "학교",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 63,
    "word": "家",
    "reading": "いえ",
    "romaji": "ie",
    "meaning": "집",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 64,
    "word": "部屋",
    "reading": "へや",
    "romaji": "heya",
    "meaning": "방",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 65,
    "word": "駅",
    "reading": "えき",
    "romaji": "eki",
    "meaning": "역",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 66,
    "word": "教室",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaning": "교실",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 67,
    "word": "会社",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaning": "회사",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 68,
    "word": "銀行",
    "reading": "ぎんこう",
    "romaji": "ginkou",
    "meaning": "은행",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 69,
    "word": "病院",
    "reading": "びょういん",
    "romaji": "byouin",
    "meaning": "병원",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 70,
    "word": "郵便局",
    "reading": "ゆうびんきょく",
    "romaji": "yuubinkyoku",
    "meaning": "우체국",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 71,
    "word": "図書館",
    "reading": "としょかん",
    "romaji": "toshokan",
    "meaning": "도서관",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 72,
    "word": "公園",
    "reading": "こうえん",
    "romaji": "kouen",
    "meaning": "공원",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 73,
    "word": "店",
    "reading": "みせ",
    "romaji": "mise",
    "meaning": "가게",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 74,
    "word": "デパート",
    "reading": "でぱーと",
    "romaji": "depaato",
    "meaning": "백화점",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 75,
    "word": "スーパー",
    "reading": "すーぱー",
    "romaji": "suupaa",
    "meaning": "슈퍼마켓",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 76,
    "word": "ホテル",
    "reading": "ほてる",
    "romaji": "hoteru",
    "meaning": "호텔",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 77,
    "word": "庭",
    "reading": "にわ",
    "romaji": "niwa",
    "meaning": "정원",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 78,
    "word": "交番",
    "reading": "こうばん",
    "romaji": "kouban",
    "meaning": "파출소",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 79,
    "word": "動物園",
    "reading": "どうぶつえん",
    "romaji": "doubutsuen",
    "meaning": "동물원",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 80,
    "word": "空港",
    "reading": "くうこう",
    "romaji": "kuukou",
    "meaning": "공항",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 81,
    "word": "映画館",
    "reading": "えいがかん",
    "romaji": "eigakan",
    "meaning": "영화관",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 82,
    "word": "今日",
    "reading": "きょう",
    "romaji": "kyou",
    "meaning": "오늘",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 83,
    "word": "明日",
    "reading": "あした",
    "romaji": "ashita",
    "meaning": "내일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 84,
    "word": "昨日",
    "reading": "きのう",
    "romaji": "kinou",
    "meaning": "어제",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 85,
    "word": "毎日",
    "reading": "まいにち",
    "romaji": "mainichi",
    "meaning": "매일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 86,
    "word": "今朝",
    "reading": "けさ",
    "romaji": "kesa",
    "meaning": "오늘 아침",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 87,
    "word": "今晩",
    "reading": "こんばん",
    "romaji": "konban",
    "meaning": "오늘 밤",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 88,
    "word": "今",
    "reading": "いま",
    "romaji": "ima",
    "meaning": "지금",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 89,
    "word": "午前",
    "reading": "ごぜん",
    "romaji": "gozen",
    "meaning": "오전",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 90,
    "word": "午後",
    "reading": "ごご",
    "romaji": "gogo",
    "meaning": "오후",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 91,
    "word": "朝",
    "reading": "あさ",
    "romaji": "asa",
    "meaning": "아침",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 92,
    "word": "昼",
    "reading": "ひる",
    "romaji": "hiru",
    "meaning": "낮 / 점심",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 93,
    "word": "夜",
    "reading": "よる",
    "romaji": "yoru",
    "meaning": "밤",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 94,
    "word": "時間",
    "reading": "じかん",
    "romaji": "jikan",
    "meaning": "시간",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 95,
    "word": "週",
    "reading": "しゅう",
    "romaji": "shuu",
    "meaning": "주",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 96,
    "word": "月",
    "reading": "つき",
    "romaji": "tsuki",
    "meaning": "달 / 월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 97,
    "word": "年",
    "reading": "とし",
    "romaji": "toshi",
    "meaning": "해 / 년",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 98,
    "word": "今年",
    "reading": "ことし",
    "romaji": "kotoshi",
    "meaning": "올해",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 99,
    "word": "来年",
    "reading": "らいねん",
    "romaji": "rainen",
    "meaning": "내년",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 100,
    "word": "去年",
    "reading": "きょねん",
    "romaji": "kyonen",
    "meaning": "작년",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 101,
    "word": "週末",
    "reading": "しゅうまつ",
    "romaji": "shuumatsu",
    "meaning": "주말",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 102,
    "word": "新しい",
    "reading": "あたらしい",
    "romaji": "atarashii",
    "meaning": "새롭다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 103,
    "word": "古い",
    "reading": "ふるい",
    "romaji": "furui",
    "meaning": "오래되다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 104,
    "word": "暑い",
    "reading": "あつい",
    "romaji": "atsui",
    "meaning": "덥다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 105,
    "word": "寒い",
    "reading": "さむい",
    "romaji": "samui",
    "meaning": "춥다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 106,
    "word": "冷たい",
    "reading": "つめたい",
    "romaji": "tsumetai",
    "meaning": "차가우다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 107,
    "word": "暖かい",
    "reading": "あたたかい",
    "romaji": "atatakai",
    "meaning": "따뜻하다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 108,
    "word": "大きい",
    "reading": "おおきい",
    "romaji": "ookii",
    "meaning": "크다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 109,
    "word": "小さい",
    "reading": "ちいさい",
    "romaji": "chiisai",
    "meaning": "작다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 110,
    "word": "良い",
    "reading": "よい",
    "romaji": "yoi",
    "meaning": "좋다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 111,
    "word": "悪い",
    "reading": "わるい",
    "romaji": "warui",
    "meaning": "나쁘다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 112,
    "word": "美味しい",
    "reading": "おいしい",
    "romaji": "oishii",
    "meaning": "맛있다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 113,
    "word": "甘い",
    "reading": "あまい",
    "romaji": "amai",
    "meaning": "달다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 114,
    "word": "辛い",
    "reading": "からい",
    "romaji": "karai",
    "meaning": "맵다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 115,
    "word": "高い",
    "reading": "たかい",
    "romaji": "takai",
    "meaning": "높다 / 비싸다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 116,
    "word": "安い",
    "reading": "やすい",
    "romaji": "yasui",
    "meaning": "싸다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 117,
    "word": "広い",
    "reading": "ひろい",
    "romaji": "hiroi",
    "meaning": "넓다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 118,
    "word": "狭い",
    "reading": "せまい",
    "romaji": "semai",
    "meaning": "좁다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 119,
    "word": "忙しい",
    "reading": "いそがしい",
    "romaji": "isogashii",
    "meaning": "바쁘다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 120,
    "word": "面白い",
    "reading": "おもしろい",
    "romaji": "omoshiroi",
    "meaning": "재밌다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 121,
    "word": "易しい",
    "reading": "やさしい",
    "romaji": "yasashii",
    "meaning": "쉽다",
    "level": "beginner",
    "category": "adjective"
  },
  {
    "id": 122,
    "word": "行く",
    "reading": "いく",
    "romaji": "iku",
    "meaning": "가다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 123,
    "word": "来る",
    "reading": "くる",
    "romaji": "kuru",
    "meaning": "오다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 124,
    "word": "帰る",
    "reading": "かえる",
    "romaji": "kaeru",
    "meaning": "돌아가다 / 돌아오다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 125,
    "word": "食べる",
    "reading": "たべる",
    "romaji": "taberu",
    "meaning": "먹다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 126,
    "word": "飲む",
    "reading": "のむ",
    "romaji": "nomu",
    "meaning": "마시다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 127,
    "word": "見る",
    "reading": "みる",
    "romaji": "miru",
    "meaning": "보다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 128,
    "word": "聞く",
    "reading": "きく",
    "romaji": "kiku",
    "meaning": "듣다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 129,
    "word": "書く",
    "reading": "かく",
    "romaji": "kaku",
    "meaning": "쓰다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 130,
    "word": "読む",
    "reading": "よむ",
    "romaji": "yomu",
    "meaning": "읽다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 131,
    "word": "話す",
    "reading": "はなす",
    "romaji": "hanasu",
    "meaning": "말하다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 132,
    "word": "買う",
    "reading": "かう",
    "romaji": "kau",
    "meaning": "사다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 133,
    "word": "売る",
    "reading": "うる",
    "romaji": "uru",
    "meaning": "팔다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 134,
    "word": "会う",
    "reading": "あう",
    "romaji": "au",
    "meaning": "만나다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 135,
    "word": "待つ",
    "reading": "まつ",
    "romaji": "matsu",
    "meaning": "기다리다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 136,
    "word": "持つ",
    "reading": "もつ",
    "romaji": "motsu",
    "meaning": "가지다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 137,
    "word": "呼ぶ",
    "reading": "よぶ",
    "romaji": "yobu",
    "meaning": "부르다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 138,
    "word": "降る",
    "reading": "ふる",
    "romaji": "furu",
    "meaning": "내리다 (비/눈)",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 139,
    "word": "起きる",
    "reading": "おきる",
    "romaji": "okiru",
    "meaning": "일어나다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 140,
    "word": "寝る",
    "reading": "ねる",
    "romaji": "neru",
    "meaning": "자다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 141,
    "word": "する",
    "reading": "する",
    "romaji": "suru",
    "meaning": "하다",
    "level": "beginner",
    "category": "verb"
  },
  {
    "id": 142,
    "word": "一",
    "reading": "いち",
    "romaji": "ichi",
    "meaning": "일 (1)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 143,
    "word": "二",
    "reading": "に",
    "romaji": "ni",
    "meaning": "이 (2)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 144,
    "word": "三",
    "reading": "さん",
    "romaji": "san",
    "meaning": "삼 (3)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 145,
    "word": "四",
    "reading": "よん",
    "romaji": "yon",
    "meaning": "사 (4)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 146,
    "word": "五",
    "reading": "ご",
    "romaji": "go",
    "meaning": "오 (5)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 147,
    "word": "六",
    "reading": "ろく",
    "romaji": "roku",
    "meaning": "육 (6)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 148,
    "word": "七",
    "reading": "なな",
    "romaji": "nana",
    "meaning": "칠 (7)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 149,
    "word": "八",
    "reading": "はち",
    "romaji": "hachi",
    "meaning": "팔 (8)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 150,
    "word": "九",
    "reading": "きゅう",
    "romaji": "kyuu",
    "meaning": "구 (9)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 151,
    "word": "十",
    "reading": "じゅう",
    "romaji": "juu",
    "meaning": "십 (10)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 152,
    "word": "百",
    "reading": "ひゃく",
    "romaji": "hyaku",
    "meaning": "백 (100)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 153,
    "word": "千",
    "reading": "せん",
    "romaji": "sen",
    "meaning": "천 (1000)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 154,
    "word": "万",
    "reading": "まん",
    "romaji": "man",
    "meaning": "만 (10000)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 155,
    "word": "円",
    "reading": "えん",
    "romaji": "en",
    "meaning": "엔 (통화)",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 156,
    "word": "半分",
    "reading": "はんぶん",
    "romaji": "hanbun",
    "meaning": "절반",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 157,
    "word": "月曜日",
    "reading": "げつようび",
    "romaji": "getsuyoubi",
    "meaning": "월요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 158,
    "word": "火曜日",
    "reading": "かようび",
    "romaji": "kayoubi",
    "meaning": "화요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 159,
    "word": "水曜日",
    "reading": "すいようび",
    "romaji": "suiyoubi",
    "meaning": "수요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 160,
    "word": "木曜日",
    "reading": "もくようび",
    "romaji": "mokuyoubi",
    "meaning": "목요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 161,
    "word": "金曜日",
    "reading": "きんようび",
    "romaji": "kinyoubi",
    "meaning": "금요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 162,
    "word": "土曜日",
    "reading": "どようび",
    "romaji": "doyoubi",
    "meaning": "토요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 163,
    "word": "日曜日",
    "reading": "にちようび",
    "romaji": "nichiyoubi",
    "meaning": "일요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 164,
    "word": "何曜日",
    "reading": "なんようび",
    "romaji": "nanyoubi",
    "meaning": "무슨 요일",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 165,
    "word": "本",
    "reading": "ほん",
    "romaji": "hon",
    "meaning": "책",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 166,
    "word": "辞書",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaning": "사전",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 167,
    "word": "雑誌",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaning": "잡지",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 168,
    "word": "新聞",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaning": "신문",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 169,
    "word": "ノート",
    "reading": "のーと",
    "romaji": "nooto",
    "meaning": "공책",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 170,
    "word": "手帳",
    "reading": "てちょう",
    "romaji": "techou",
    "meaning": "수첩",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 171,
    "word": "名刺",
    "reading": "めいし",
    "romaji": "meishi",
    "meaning": "명함",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 172,
    "word": "カード",
    "reading": "かーど",
    "romaji": "kaado",
    "meaning": "카드",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 173,
    "word": "鉛筆",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaning": "연필",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 174,
    "word": "ボールペン",
    "reading": "ぼーるぺん",
    "romaji": "boorupen",
    "meaning": "볼펜",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 175,
    "word": "鍵",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaning": "열쇠",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 176,
    "word": "時計",
    "reading": "とけい",
    "romaji": "tokei",
    "meaning": "시계",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 177,
    "word": "傘",
    "reading": "かさ",
    "romaji": "kasa",
    "meaning": "우산",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 178,
    "word": "鞄",
    "reading": "かばん",
    "romaji": "kaban",
    "meaning": "가방",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 179,
    "word": "テレビ",
    "reading": "てれび",
    "romaji": "terebi",
    "meaning": "텔레비전",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 180,
    "word": "ラジオ",
    "reading": "らじお",
    "romaji": "rajio",
    "meaning": "라디오",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 181,
    "word": "カメラ",
    "reading": "かめら",
    "romaji": "kamera",
    "meaning": "카메라",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 182,
    "word": "パソコン",
    "reading": "ぱそこん",
    "romaji": "pasokon",
    "meaning": "컴퓨터",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 183,
    "word": "電話",
    "reading": "でんわ",
    "romaji": "denwa",
    "meaning": "전화",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 184,
    "word": "携帯",
    "reading": "けいたい",
    "romaji": "keitai",
    "meaning": "휴대폰",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 185,
    "word": "机",
    "reading": "つくえ",
    "romaji": "tsukue",
    "meaning": "책상",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 186,
    "word": "椅子",
    "reading": "いす",
    "romaji": "isu",
    "meaning": "의자",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 187,
    "word": "車",
    "reading": "くるま",
    "romaji": "kuruma",
    "meaning": "자동차",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 188,
    "word": "自転車",
    "reading": "じてんしゃ",
    "romaji": "jitensha",
    "meaning": "자전거",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 189,
    "word": "財布",
    "reading": "さいふ",
    "romaji": "saifu",
    "meaning": "지갑",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 190,
    "word": "帽子",
    "reading": "ぼうし",
    "romaji": "boushi",
    "meaning": "모자",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 191,
    "word": "眼鏡",
    "reading": "めがね",
    "romaji": "megane",
    "meaning": "안경",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 192,
    "word": "靴",
    "reading": "くつ",
    "romaji": "kutsu",
    "meaning": "신발",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 193,
    "word": "服",
    "reading": "ふく",
    "romaji": "fuku",
    "meaning": "옷",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 194,
    "word": "窓",
    "reading": "まど",
    "romaji": "mado",
    "meaning": "창문",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 195,
    "word": "ドア",
    "reading": "どあ",
    "romaji": "doa",
    "meaning": "문",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 196,
    "word": "天気",
    "reading": "てんき",
    "romaji": "tenki",
    "meaning": "날씨",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 197,
    "word": "雨",
    "reading": "あめ",
    "romaji": "ame",
    "meaning": "비",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 198,
    "word": "雪",
    "reading": "ゆき",
    "romaji": "yuki",
    "meaning": "눈",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 199,
    "word": "風",
    "reading": "かぜ",
    "romaji": "kaze",
    "meaning": "바람",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 200,
    "word": "雲",
    "reading": "くも",
    "romaji": "kumo",
    "meaning": "구름",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 201,
    "word": "空",
    "reading": "そら",
    "romaji": "sora",
    "meaning": "하늘",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 202,
    "word": "太陽",
    "reading": "たいよう",
    "romaji": "taiyou",
    "meaning": "해 / 태양",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 203,
    "word": "海",
    "reading": "うみ",
    "romaji": "umi",
    "meaning": "바다",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 204,
    "word": "山",
    "reading": "やま",
    "romaji": "yama",
    "meaning": "산",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 205,
    "word": "川",
    "reading": "かわ",
    "romaji": "kawa",
    "meaning": "강",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 206,
    "word": "森",
    "reading": "もり",
    "romaji": "mori",
    "meaning": "숲",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 207,
    "word": "花",
    "reading": "はな",
    "romaji": "hana",
    "meaning": "꽃",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 208,
    "word": "木",
    "reading": "き",
    "romaji": "ki",
    "meaning": "나무",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 209,
    "word": "犬",
    "reading": "いぬ",
    "romaji": "inu",
    "meaning": "개",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 210,
    "word": "猫",
    "reading": "ねこ",
    "romaji": "neko",
    "meaning": "고양이",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 211,
    "word": "鳥",
    "reading": "とり",
    "romaji": "tori",
    "meaning": "새",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 212,
    "word": "虫",
    "reading": "むし",
    "romaji": "mushi",
    "meaning": "벌레",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 213,
    "word": "先生",
    "reading": "せんせい",
    "romaji": "sensei",
    "meaning": "선생님",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 214,
    "word": "学生",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaning": "학생",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 215,
    "word": "留学生",
    "reading": "りゅうがくせい",
    "romaji": "ryuugakusei",
    "meaning": "유학생",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 216,
    "word": "会社員",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaning": "회사원",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 217,
    "word": "医者",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaning": "의사",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 218,
    "word": "看護師",
    "reading": "かんごし",
    "romaji": "kangoshi",
    "meaning": "간호사",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 219,
    "word": "警察官",
    "reading": "けいさつかん",
    "romaji": "keisatsukan",
    "meaning": "경찰관",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 220,
    "word": "銀行員",
    "reading": "ぎんこういん",
    "romaji": "ginkouin",
    "meaning": "은행원",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 221,
    "word": "日本語",
    "reading": "にほんご",
    "romaji": "nihongo",
    "meaning": "일본어",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 222,
    "word": "韓国語",
    "reading": "かんこくご",
    "romaji": "kankokugo",
    "meaning": "한국어",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 223,
    "word": "英語",
    "reading": "えいご",
    "romaji": "eigo",
    "meaning": "영어",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 224,
    "word": "授業",
    "reading": "じゅぎょう",
    "romaji": "jugyou",
    "meaning": "수업",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 225,
    "word": "試験",
    "reading": "しけん",
    "romaji": "shiken",
    "meaning": "시험",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 226,
    "word": "宿題",
    "reading": "しゅくだい",
    "romaji": "shukudai",
    "meaning": "숙제",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 227,
    "word": "質問",
    "reading": "しつもん",
    "romaji": "shitsumon",
    "meaning": "질문",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 228,
    "word": "答え",
    "reading": "こたえ",
    "romaji": "kotae",
    "meaning": "답",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 229,
    "word": "頭",
    "reading": "あたま",
    "romaji": "atama",
    "meaning": "머리",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 230,
    "word": "髪",
    "reading": "かみ",
    "romaji": "kami",
    "meaning": "머리카락",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 231,
    "word": "顔",
    "reading": "かお",
    "romaji": "kao",
    "meaning": "얼굴",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 232,
    "word": "目",
    "reading": "め",
    "romaji": "me",
    "meaning": "눈",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 233,
    "word": "耳",
    "reading": "みみ",
    "romaji": "mimi",
    "meaning": "귀",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 234,
    "word": "鼻",
    "reading": "はな",
    "romaji": "hana",
    "meaning": "코",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 235,
    "word": "口",
    "reading": "くち",
    "romaji": "kuchi",
    "meaning": "입",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 236,
    "word": "歯",
    "reading": "は",
    "romaji": "ha",
    "meaning": "이 / 치아",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 237,
    "word": "首",
    "reading": "くび",
    "romaji": "kubi",
    "meaning": "목",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 238,
    "word": "手",
    "reading": "て",
    "romaji": "te",
    "meaning": "손",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 239,
    "word": "足",
    "reading": "あし",
    "romaji": "ashi",
    "meaning": "발 / 다리",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 240,
    "word": "指",
    "reading": "ゆび",
    "romaji": "yubi",
    "meaning": "손가락",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 241,
    "word": "心",
    "reading": "こころ",
    "romaji": "kokoro",
    "meaning": "마음",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 242,
    "word": "体",
    "reading": "からだ",
    "romaji": "karada",
    "meaning": "몸 / 신체",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 243,
    "word": "準備",
    "reading": "じゅんび",
    "romaji": "junbi",
    "meaning": "준비",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 244,
    "word": "計画",
    "reading": "けいかく",
    "romaji": "keikaku",
    "meaning": "계획",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 245,
    "word": "経済",
    "reading": "けいざい",
    "romaji": "keizai",
    "meaning": "경제",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 246,
    "word": "社会",
    "reading": "しゃかい",
    "romaji": "shakai",
    "meaning": "사회",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 247,
    "word": "文化",
    "reading": "ぶんか",
    "romaji": "bunka",
    "meaning": "문화",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 248,
    "word": "技術",
    "reading": "ぎじゅつ",
    "romaji": "gijutsu",
    "meaning": "기술",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 249,
    "word": "習慣",
    "reading": "しゅうかん",
    "romaji": "shuukan",
    "meaning": "습관",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 250,
    "word": "経験",
    "reading": "けいけん",
    "romaji": "keiken",
    "meaning": "경험",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 251,
    "word": "連絡",
    "reading": "れんらく",
    "romaji": "renraku",
    "meaning": "연락",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 252,
    "word": "相談",
    "reading": "そうだん",
    "romaji": "soudan",
    "meaning": "상담",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 253,
    "word": "決定",
    "reading": "けってい",
    "romaji": "kettei",
    "meaning": "결정",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 254,
    "word": "出発",
    "reading": "しゅっぱつ",
    "romaji": "shuppatsu",
    "meaning": "출발",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 255,
    "word": "到着",
    "reading": "とうちゃく",
    "romaji": "touchaku",
    "meaning": "도착",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 256,
    "word": "反対",
    "reading": "はんたい",
    "romaji": "hantai",
    "meaning": "반대",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 257,
    "word": "賛成",
    "reading": "さんせい",
    "romaji": "sansei",
    "meaning": "찬성",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 258,
    "word": "注意",
    "reading": "ちゅうい",
    "romaji": "chuui",
    "meaning": "주의",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 259,
    "word": "興味",
    "reading": "きょうみ",
    "romaji": "kyoumi",
    "meaning": "흥미",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 260,
    "word": "約束",
    "reading": "やくそく",
    "romaji": "yakusoku",
    "meaning": "약속",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 261,
    "word": "紹介",
    "reading": "しょうかい",
    "romaji": "shoukai",
    "meaning": "소개",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 262,
    "word": "説明",
    "reading": "せつめい",
    "romaji": "setsumei",
    "meaning": "설명",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 263,
    "word": "生活",
    "reading": "せいかつ",
    "romaji": "seikatsu",
    "meaning": "생활",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 264,
    "word": "世界",
    "reading": "せかい",
    "romaji": "sekai",
    "meaning": "세계",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 265,
    "word": "法律",
    "reading": "ほうりつ",
    "romaji": "houritsu",
    "meaning": "법률",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 266,
    "word": "歴史",
    "reading": "れきし",
    "romaji": "rekishi",
    "meaning": "역사",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 267,
    "word": "政治",
    "reading": "せいじ",
    "romaji": "seiji",
    "meaning": "정치",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 268,
    "word": "未来",
    "reading": "みらい",
    "romaji": "mirai",
    "meaning": "미래",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 269,
    "word": "過去",
    "reading": "かこ",
    "romaji": "kako",
    "meaning": "과거",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 270,
    "word": "現在",
    "reading": "げんざい",
    "romaji": "genzai",
    "meaning": "현재",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 271,
    "word": "科学",
    "reading": "かがく",
    "romaji": "kagaku",
    "meaning": "과학",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 272,
    "word": "環境",
    "reading": "かんきょう",
    "romaji": "kankyou",
    "meaning": "환경",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 273,
    "word": "カメラ",
    "reading": "かめら",
    "romaji": "kamera",
    "meaning": "카메라",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 274,
    "word": "パソコン",
    "reading": "ぱそこん",
    "romaji": "pasokon",
    "meaning": "컴퓨터",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 275,
    "word": "コーヒー",
    "reading": "こーひー",
    "romaji": "koohii",
    "meaning": "커피",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 276,
    "word": "コーラ",
    "reading": "こーら",
    "romaji": "koora",
    "meaning": "콜라",
    "level": "beginner",
    "category": "food"
  },
  {
    "id": 277,
    "word": "ペン",
    "reading": "ぺん",
    "romaji": "pen",
    "meaning": "펜",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 278,
    "word": "テスト",
    "reading": "てすと",
    "romaji": "tesuto",
    "meaning": "시험 / 테스트",
    "level": "beginner",
    "category": "school"
  },
  {
    "id": 279,
    "word": "ニュース",
    "reading": "にゅーす",
    "romaji": "nyuusu",
    "meaning": "뉴스",
    "level": "beginner",
    "category": "society"
  },
  {
    "id": 280,
    "word": "スマホ",
    "reading": "すまほ",
    "romaji": "sumaho",
    "meaning": "스마트폰",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 281,
    "word": "プリンター",
    "reading": "ぷりんたー",
    "romaji": "purintaa",
    "meaning": "프린터",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 282,
    "word": "テーブル",
    "reading": "てーぶる",
    "romaji": "teeburu",
    "meaning": "테이블",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 283,
    "word": "ソファー",
    "reading": "そふぁー",
    "romaji": "sofaa",
    "meaning": "소파",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 284,
    "word": "ベッド",
    "reading": "べっど",
    "romaji": "beddo",
    "meaning": "침대",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 285,
    "word": "エアコン",
    "reading": "えあこん",
    "romaji": "eakon",
    "meaning": "에어컨",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 286,
    "word": "シャンプー",
    "reading": "しゃんぷー",
    "romaji": "shanpuu",
    "meaning": "샴푸",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 287,
    "word": "タオル",
    "reading": "たおる",
    "romaji": "taoru",
    "meaning": "수건",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 288,
    "word": "ドライヤー",
    "reading": "どらいやー",
    "romaji": "doraiyaa",
    "meaning": "헤어드라이어",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 289,
    "word": "バス",
    "reading": "ばす",
    "romaji": "basu",
    "meaning": "버스",
    "level": "beginner",
    "category": "transportation"
  },
  {
    "id": 290,
    "word": "タクシー",
    "reading": "たくしー",
    "romaji": "takushii",
    "meaning": "택시",
    "level": "beginner",
    "category": "transportation"
  },
  {
    "id": 291,
    "word": "ビル",
    "reading": "びる",
    "romaji": "biru",
    "meaning": "빌딩",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 292,
    "word": "エレベーター",
    "reading": "えれべーたー",
    "romaji": "erebeetaa",
    "meaning": "엘리베이터",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 293,
    "word": "ホテル",
    "reading": "ほてる",
    "romaji": "hoteru",
    "meaning": "호텔",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 294,
    "word": "ショッピング",
    "reading": "しょっぴんぐ",
    "romaji": "shoppingu",
    "meaning": "쇼핑",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 295,
    "word": "デパート",
    "reading": "でぱーと",
    "romaji": "depaato",
    "meaning": "백화점",
    "level": "beginner",
    "category": "place"
  },
  {
    "id": 296,
    "word": "ラジオ",
    "reading": "らじお",
    "romaji": "rajio",
    "meaning": "라디오",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 297,
    "word": "テレビ",
    "reading": "てれび",
    "romaji": "terebi",
    "meaning": "텔레비전",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 298,
    "word": "カード",
    "reading": "かーど",
    "romaji": "kaado",
    "meaning": "카드",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 299,
    "word": "ノート",
    "reading": "nーと",
    "romaji": "nooto",
    "meaning": "노트",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 300,
    "word": "ボールペン",
    "reading": "ぼーるぺん",
    "romaji": "boorupen",
    "meaning": "볼펜",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 301,
    "word": "スポーツ",
    "reading": "すぽーつ",
    "romaji": "supootsu",
    "meaning": "스포츠",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 302,
    "word": "サッカー",
    "reading": "さっかー",
    "romaji": "sakkaa",
    "meaning": "축구",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 303,
    "word": "野球",
    "reading": "やきゅう",
    "romaji": "yakyuu",
    "meaning": "야구",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 304,
    "word": "テニス",
    "reading": "てにす",
    "romaji": "tenisu",
    "meaning": "테니스",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 305,
    "word": "ゴルフ",
    "reading": "ごるふ",
    "romaji": "gorufu",
    "meaning": "골프",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 306,
    "word": "ダンス",
    "reading": "だんす",
    "romaji": "dansu",
    "meaning": "댄스",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 307,
    "word": "アニメ",
    "reading": "あにめ",
    "romaji": "anime",
    "meaning": "애니메이션",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 308,
    "word": "コンサート",
    "reading": "こんさーと",
    "romaji": "konsaato",
    "meaning": "콘서트",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 309,
    "word": "フェスティバル",
    "reading": "ふぇすてぃばる",
    "romaji": "fesutibaru",
    "meaning": "축제",
    "level": "beginner",
    "category": "hobby"
  },
  {
    "id": 310,
    "word": "サービス",
    "reading": "さーびす",
    "romaji": "saabisu",
    "meaning": "서비스",
    "level": "beginner",
    "category": "office"
  },
  {
    "id": 311,
    "word": "エコ",
    "reading": "えこ",
    "romaji": "eko",
    "meaning": "친환경",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 312,
    "word": "リサイクル",
    "reading": "りさいくる",
    "romaji": "risaikuru",
    "meaning": "재활용",
    "level": "intermediate",
    "category": "society"
  },
  {
    "id": 313,
    "word": "パスポート",
    "reading": "ぱすぽーと",
    "romaji": "pasupooto",
    "meaning": "여권",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 314,
    "word": "カレンダー",
    "reading": "かれんだー",
    "romaji": "karendaー",
    "meaning": "달력",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 315,
    "word": "少し",
    "reading": "すこし",
    "romaji": "sukoshi",
    "meaning": "조금",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 316,
    "word": "たくさん",
    "reading": "たくさん",
    "romaji": "takusan",
    "meaning": "많이",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 317,
    "word": "とても",
    "reading": "とても",
    "romaji": "totemo",
    "meaning": "아주 / 매우",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 318,
    "word": "全然",
    "reading": "ぜんぜん",
    "romaji": "zenzen",
    "meaning": "전혀",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 319,
    "word": "必ず",
    "reading": "かならず",
    "romaji": "kanarazu",
    "meaning": "반드시",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 320,
    "word": "多分",
    "reading": "たぶん",
    "romaji": "tabun",
    "meaning": "아마도",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 321,
    "word": "よく",
    "reading": "よく",
    "romaji": "yoku",
    "meaning": "자주 / 잘",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 322,
    "word": "時々",
    "reading": "ときどき",
    "romaji": "tokidoki",
    "meaning": "가끔",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 323,
    "word": "いつも",
    "reading": "いつも",
    "romaji": "itsumo",
    "meaning": "항상",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 324,
    "word": "突然",
    "reading": "とつぜん",
    "romaji": "totsuzen",
    "meaning": "갑자기",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 325,
    "word": "ゆっくり",
    "reading": "ゆっくり",
    "romaji": "yukkuri",
    "meaning": "천천히",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 326,
    "word": "早く",
    "reading": "はやく",
    "romaji": "hayaku",
    "meaning": "빨리",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 327,
    "word": "まず",
    "reading": "まず",
    "romaji": "mazu",
    "meaning": "우선",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 328,
    "word": "後で",
    "reading": "あとで",
    "romaji": "atode",
    "meaning": "나중에",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 329,
    "word": "特に",
    "reading": "とくに",
    "romaji": "tokuni",
    "meaning": "특히",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 330,
    "word": "やっと",
    "reading": "やっと",
    "romaji": "yatto",
    "meaning": "겨우 / 드디어",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 331,
    "word": "やはり",
    "reading": "やはり",
    "romaji": "yahari",
    "meaning": "역시",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 332,
    "word": "絶対",
    "reading": "ぜったい",
    "romaji": "zettai",
    "meaning": "절대",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 333,
    "word": "大抵",
    "reading": "たいてい",
    "romaji": "taitei",
    "meaning": "대개 / 보통",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 334,
    "word": "非常に",
    "reading": "ひじょうに",
    "romaji": "hijou ni",
    "meaning": "매우 / 대단히",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 335,
    "word": "もし",
    "reading": "もし",
    "romaji": "moshi",
    "meaning": "만약",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 336,
    "word": "少しも",
    "reading": "すこしも",
    "romaji": "sukoshi mo",
    "meaning": "조금도",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 337,
    "word": "段々",
    "reading": "だんだん",
    "romaji": "dandan",
    "meaning": "점점 / 차츰",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 338,
    "word": "急に",
    "reading": "きゅうに",
    "romaji": "kyuu ni",
    "meaning": "갑자기",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 339,
    "word": "もっと",
    "reading": "もっと",
    "romaji": "motto",
    "meaning": "더",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 340,
    "word": "きっと",
    "reading": "きっと",
    "romaji": "kitto",
    "meaning": "꼭 / 반드시",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 341,
    "word": "さっき",
    "reading": "さっき",
    "romaji": "sakki",
    "meaning": "아까",
    "level": "beginner",
    "category": "adverb"
  },
  {
    "id": 342,
    "word": "ちっとも",
    "reading": "ちっとも",
    "romaji": "chittomo",
    "meaning": "조금도 (부정)",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 343,
    "word": "ずいぶん",
    "reading": "ずいぶん",
    "romaji": "zuibun",
    "meaning": "상당히",
    "level": "intermediate",
    "category": "adverb"
  },
  {
    "id": 344,
    "word": "定規",
    "reading": "じょうぎ",
    "romaji": "jougi",
    "meaning": "자",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 345,
    "word": "ハサミ",
    "reading": "はさみ",
    "romaji": "hasami",
    "meaning": "가위",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 346,
    "word": "消しゴム",
    "reading": "けしごむ",
    "romaji": "keshigomu",
    "meaning": "지우개",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 347,
    "word": "のり",
    "reading": "のり",
    "romaji": "nori",
    "meaning": "풀",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 348,
    "word": "ホッチキス",
    "reading": "ほっちきす",
    "romaji": "hotchikisu",
    "meaning": "스테이플러",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 349,
    "word": "色鉛筆",
    "reading": "いろえんぴつ",
    "romaji": "iroenpitsu",
    "meaning": "색연필",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 350,
    "word": "シャープペンシル",
    "reading": "しゃーぷぺんしる",
    "romaji": "shaapupenshiru",
    "meaning": "샤프",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 351,
    "word": "用紙",
    "reading": "ようし",
    "romaji": "youshi",
    "meaning": "용지",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 352,
    "word": "クリップ",
    "reading": "くりっぷ",
    "romaji": "kurippu",
    "meaning": "클립",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 353,
    "word": "セロハンテープ",
    "reading": "せろはんてーぷ",
    "romaji": "serohanteepu",
    "meaning": "테이프",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 354,
    "word": "磁石",
    "reading": "じしゃく",
    "romaji": "jishaku",
    "meaning": "자석",
    "level": "intermediate",
    "category": "object"
  },
  {
    "id": 355,
    "word": "筆箱",
    "reading": "ふでばこ",
    "romaji": "fudebako",
    "meaning": "필통",
    "level": "beginner",
    "category": "object"
  },
  {
    "id": 356,
    "word": "分度器",
    "reading": "ぶんどき",
    "romaji": "bundoki",
    "meaning": "각도기",
    "level": "intermediate",
    "category": "object"
  },
  {
    "id": 357,
    "word": "コンパス",
    "reading": "こんぱす",
    "romaji": "konpasu",
    "meaning": "컴퍼스",
    "level": "intermediate",
    "category": "object"
  },
  {
    "id": 358,
    "word": "画用紙",
    "reading": "がようし",
    "romaji": "gayoushi",
    "meaning": "도화지",
    "level": "intermediate",
    "category": "object"
  },
  {
    "id": 359,
    "word": "十一",
    "reading": "じゅういち",
    "romaji": "juuichi",
    "meaning": "십일",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 360,
    "word": "十二",
    "reading": "じゅうに",
    "romaji": "juuni",
    "meaning": "십이",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 361,
    "word": "十三",
    "reading": "じゅうさん",
    "romaji": "juusan",
    "meaning": "십삼",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 362,
    "word": "十四",
    "reading": "じゅうよん",
    "romaji": "juuyon",
    "meaning": "십사",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 363,
    "word": "十五",
    "reading": "じゅうご",
    "romaji": "juugo",
    "meaning": "십오",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 364,
    "word": "十六",
    "reading": "じゅうろく",
    "romaji": "juuroku",
    "meaning": "십육",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 365,
    "word": "十七",
    "reading": "じゅう나나",
    "romaji": "juunana",
    "meaning": "십칠",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 366,
    "word": "十八",
    "reading": "じゅうはち",
    "romaji": "juuhachi",
    "meaning": "십팔",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 367,
    "word": "十九",
    "reading": "じゅうきゅう",
    "romaji": "juukyuu",
    "meaning": "십구",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 368,
    "word": "二十",
    "reading": "にじゅう",
    "romaji": "nijuu",
    "meaning": "이십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 369,
    "word": "三十",
    "reading": "さんじゅう",
    "romaji": "sanjuu",
    "meaning": "삼십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 370,
    "word": "四十",
    "reading": "よんじゅう",
    "romaji": "yonjuu",
    "meaning": "사십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 371,
    "word": "五十",
    "reading": "ごじゅう",
    "romaji": "gojuu",
    "meaning": "오십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 372,
    "word": "六十",
    "reading": "ろくじゅう",
    "romaji": "rokujuun",
    "meaning": "육십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 373,
    "word": "七十",
    "reading": "나나じゅう",
    "romaji": "nanajuu",
    "meaning": "칠십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 374,
    "word": "八十",
    "reading": "はちじゅう",
    "romaji": "hachijuu",
    "meaning": "팔십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 375,
    "word": "九十",
    "reading": "きゅうじゅう",
    "romaji": "kyuujuu",
    "meaning": "구십",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 376,
    "word": "一月",
    "reading": "いちがつ",
    "romaji": "ichigatsu",
    "meaning": "1월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 377,
    "word": "二月",
    "reading": "にがつ",
    "romaji": "nigatsu",
    "meaning": "2월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 378,
    "word": "三月",
    "reading": "さんがつ",
    "romaji": "sangatsu",
    "meaning": "3월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 379,
    "word": "四月",
    "reading": "しがつ",
    "romaji": "shigatsu",
    "meaning": "4월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 380,
    "word": "五月",
    "reading": "ごがつ",
    "romaji": "gogatsu",
    "meaning": "5월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 381,
    "word": "六月",
    "reading": "ろくがつ",
    "romaji": "rokugatsu",
    "meaning": "6월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 382,
    "word": "七月",
    "reading": "しちがつ",
    "romaji": "shichigatsu",
    "meaning": "7월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 383,
    "word": "八月",
    "reading": "はちがつ",
    "romaji": "hachigatsu",
    "meaning": "8월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 384,
    "word": "九月",
    "reading": "くがつ",
    "romaji": "kugatsu",
    "meaning": "9월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 385,
    "word": "十月",
    "reading": "じゅうがつ",
    "romaji": "juugatsu",
    "meaning": "10월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 386,
    "word": "十一月",
    "reading": "じゅういちがつ",
    "romaji": "juuichigatsu",
    "meaning": "11월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 387,
    "word": "十二月",
    "reading": "じゅうにがつ",
    "romaji": "juunigatsu",
    "meaning": "12월",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 388,
    "word": "一日",
    "reading": "ついたち",
    "romaji": "tsuitachi",
    "meaning": "1일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 389,
    "word": "二日",
    "reading": "ふつか",
    "romaji": "futsuka",
    "meaning": "2일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 390,
    "word": "三日",
    "reading": "みっか",
    "romaji": "mikka",
    "meaning": "3일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 391,
    "word": "四日",
    "reading": "よっか",
    "romaji": "yokka",
    "meaning": "4일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 392,
    "word": "五日",
    "reading": "いつか",
    "romaji": "itsuka",
    "meaning": "5일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 393,
    "word": "六日",
    "reading": "むいか",
    "romaji": "muika",
    "meaning": "6일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 394,
    "word": "七日",
    "reading": "なのか",
    "romaji": "nanoka",
    "meaning": "7일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 395,
    "word": "八日",
    "reading": "ようか",
    "romaji": "youka",
    "meaning": "8일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 396,
    "word": "九日",
    "reading": "ここのか",
    "romaji": "kokonoka",
    "meaning": "9일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 397,
    "word": "十日",
    "reading": "とおか",
    "romaji": "tooka",
    "meaning": "10일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 398,
    "word": "十一日",
    "reading": "じゅういちにち",
    "romaji": "juuichinichi",
    "meaning": "11일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 399,
    "word": "十二日",
    "reading": "じゅうににち",
    "romaji": "juuninichi",
    "meaning": "12일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 400,
    "word": "十三日",
    "reading": "じゅうさんにち",
    "romaji": "juusannichi",
    "meaning": "13일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 401,
    "word": "十四日",
    "reading": "じゅうよっか",
    "romaji": "juuyokka",
    "meaning": "14일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 402,
    "word": "十五日",
    "reading": "じゅうごにち",
    "romaji": "juugonichi",
    "meaning": "15일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 403,
    "word": "十六日",
    "reading": "じゅうろくにち",
    "romaji": "juurokunichi",
    "meaning": "16일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 404,
    "word": "十七日",
    "reading": "じゅうしちにち",
    "romaji": "juushichinichi",
    "meaning": "17일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 405,
    "word": "十八日",
    "reading": "じゅうはちにち",
    "romaji": "juuhachinichi",
    "meaning": "18일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 406,
    "word": "十九日",
    "reading": "じゅうくにち",
    "romaji": "juukunichi",
    "meaning": "19일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 407,
    "word": "二十日",
    "reading": "はつか",
    "romaji": "hatsuka",
    "meaning": "20일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 408,
    "word": "三十日",
    "reading": "さんじゅうにち",
    "romaji": "sanjuunichi",
    "meaning": "30일",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 409,
    "word": "一人",
    "reading": "ひとり",
    "romaji": "nin1",
    "meaning": "한 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 410,
    "word": "二人",
    "reading": "ふたり",
    "romaji": "nin2",
    "meaning": "두 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 411,
    "word": "三人",
    "reading": "さんにん",
    "romaji": "nin3",
    "meaning": "세 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 412,
    "word": "四人",
    "reading": "よにん",
    "romaji": "nin4",
    "meaning": "네 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 413,
    "word": "五人",
    "reading": "ごにん",
    "romaji": "nin5",
    "meaning": "다섯 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 414,
    "word": "六人",
    "reading": "ろくにん",
    "romaji": "nin6",
    "meaning": "여섯 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 415,
    "word": "七人",
    "reading": "しちにん",
    "romaji": "nin7",
    "meaning": "일곱 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 416,
    "word": "八人",
    "reading": "はちにん",
    "romaji": "nin8",
    "meaning": "여덟 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 417,
    "word": "九人",
    "reading": "きゅうにん",
    "romaji": "nin9",
    "meaning": "아홉 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 418,
    "word": "十人",
    "reading": "じゅうにん",
    "romaji": "nin10",
    "meaning": "열 명 (명)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 419,
    "word": "一本",
    "reading": "いっぽん",
    "romaji": "hon1",
    "meaning": "한 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 420,
    "word": "二本",
    "reading": "にほん",
    "romaji": "hon2",
    "meaning": "두 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 421,
    "word": "三本",
    "reading": "さんぼん",
    "romaji": "hon3",
    "meaning": "세 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 422,
    "word": "四本",
    "reading": "よんほん",
    "romaji": "hon4",
    "meaning": "네 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 423,
    "word": "五本",
    "reading": "ごほん",
    "romaji": "hon5",
    "meaning": "다섯 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 424,
    "word": "六本",
    "reading": "ろっぽん",
    "romaji": "hon6",
    "meaning": "여섯 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 425,
    "word": "七本",
    "reading": "ななほん",
    "romaji": "hon7",
    "meaning": "일곱 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 426,
    "word": "八本",
    "reading": "はっぽん",
    "romaji": "hon8",
    "meaning": "여덟 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 427,
    "word": "九本",
    "reading": "きゅうほん",
    "romaji": "hon9",
    "meaning": "아홉 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 428,
    "word": "十本",
    "reading": "じゅっぽん",
    "romaji": "hon10",
    "meaning": "열 자루 (자루/개)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 429,
    "word": "一枚",
    "reading": "いちまい",
    "romaji": "mai1",
    "meaning": "한 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 430,
    "word": "二枚",
    "reading": "にまい",
    "romaji": "mai2",
    "meaning": "두 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 431,
    "word": "三枚",
    "reading": "さんまい",
    "romaji": "mai3",
    "meaning": "세 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 432,
    "word": "四枚",
    "reading": "よんまい",
    "romaji": "mai4",
    "meaning": "네 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 433,
    "word": "五枚",
    "reading": "ごまい",
    "romaji": "mai5",
    "meaning": "다섯 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 434,
    "word": "六枚",
    "reading": "ろくまい",
    "romaji": "mai6",
    "meaning": "여섯 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 435,
    "word": "七枚",
    "reading": "ななまい",
    "romaji": "mai7",
    "meaning": "일곱 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 436,
    "word": "八枚",
    "reading": "هاちまい",
    "romaji": "mai8",
    "meaning": "여덟 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 437,
    "word": "九枚",
    "reading": "きゅうまい",
    "romaji": "mai9",
    "meaning": "아홉 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 438,
    "word": "十枚",
    "reading": "じゅうまい",
    "romaji": "mai10",
    "meaning": "열 장 (장)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 439,
    "word": "一冊",
    "reading": "いっさつ",
    "romaji": "satsu1",
    "meaning": "한 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 440,
    "word": "二冊",
    "reading": "にさつ",
    "romaji": "satsu2",
    "meaning": "두 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 441,
    "word": "三冊",
    "reading": "さんさつ",
    "romaji": "satsu3",
    "meaning": "세 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 442,
    "word": "四冊",
    "reading": "よんさつ",
    "romaji": "satsu4",
    "meaning": "네 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 443,
    "word": "五冊",
    "reading": "ごさつ",
    "romaji": "satsu5",
    "meaning": "다섯 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 444,
    "word": "六冊",
    "reading": "ろっさつ",
    "romaji": "satsu6",
    "meaning": "여섯 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 445,
    "word": "七冊",
    "reading": "ななさつ",
    "romaji": "satsu7",
    "meaning": "일곱 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 446,
    "word": "八冊",
    "reading": "はっさつ",
    "romaji": "satsu8",
    "meaning": "여덟 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 447,
    "word": "九冊",
    "reading": "きゅうさつ",
    "romaji": "satsu9",
    "meaning": "아홉 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 448,
    "word": "十冊",
    "reading": "じゅっさつ",
    "romaji": "satsu10",
    "meaning": "열 권 (권)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 449,
    "word": "一杯",
    "reading": "いっぱい",
    "romaji": "hai1",
    "meaning": "한 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 450,
    "word": "二杯",
    "reading": "にはい",
    "romaji": "hai2",
    "meaning": "두 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 451,
    "word": "三杯",
    "reading": "さんばい",
    "romaji": "hai3",
    "meaning": "세 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 452,
    "word": "四杯",
    "reading": "よんはい",
    "romaji": "hai4",
    "meaning": "네 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 453,
    "word": "五杯",
    "reading": "ごはい",
    "romaji": "hai5",
    "meaning": "다섯 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 454,
    "word": "六杯",
    "reading": "ろっぱい",
    "romaji": "hai6",
    "meaning": "여섯 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 455,
    "word": "七杯",
    "reading": "ななはい",
    "romaji": "hai7",
    "meaning": "일곱 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 456,
    "word": "八杯",
    "reading": "はっぱい",
    "romaji": "hai8",
    "meaning": "여덟 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 457,
    "word": "九杯",
    "reading": "きゅうはい",
    "romaji": "hai9",
    "meaning": "아홉 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 458,
    "word": "十杯",
    "reading": "じゅっぱい",
    "romaji": "hai10",
    "meaning": "열 잔 (잔)",
    "level": "beginner",
    "category": "counter"
  },
  {
    "id": 459,
    "word": "一時",
    "reading": "いちじ",
    "romaji": "ichiji",
    "meaning": "1시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 460,
    "word": "二時",
    "reading": "にじ",
    "romaji": "niji",
    "meaning": "2시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 461,
    "word": "三時",
    "reading": "さんじ",
    "romaji": "sanji",
    "meaning": "3시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 462,
    "word": "四時",
    "reading": "よじ",
    "romaji": "yoji",
    "meaning": "4시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 463,
    "word": "五時",
    "reading": "ごじ",
    "romaji": "goji",
    "meaning": "5시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 464,
    "word": "六時",
    "reading": "ろくじ",
    "romaji": "rokuji",
    "meaning": "6시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 465,
    "word": "七時",
    "reading": "しちじ",
    "romaji": "shichiji",
    "meaning": "7시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 466,
    "word": "八時",
    "reading": "はちじ",
    "romaji": "hachiji",
    "meaning": "8시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 467,
    "word": "九時",
    "reading": "くじ",
    "romaji": "kuji",
    "meaning": "9시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 468,
    "word": "十時",
    "reading": "じゅうじ",
    "romaji": "juuji",
    "meaning": "10시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 469,
    "word": "十一時",
    "reading": "じゅういちじ",
    "romaji": "juuichiji",
    "meaning": "11시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 470,
    "word": "十二時",
    "reading": "じゅうにじ",
    "romaji": "juuniji",
    "meaning": "12시",
    "level": "beginner",
    "category": "time"
  },
  {
    "id": 471,
    "word": "二十一",
    "reading": "二十一",
    "romaji": "num_21",
    "meaning": "21 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 472,
    "word": "二十二",
    "reading": "二十二",
    "romaji": "num_22",
    "meaning": "22 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 473,
    "word": "二十三",
    "reading": "二十三",
    "romaji": "num_23",
    "meaning": "23 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 474,
    "word": "二十四",
    "reading": "二十四",
    "romaji": "num_24",
    "meaning": "24 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 475,
    "word": "二十五",
    "reading": "二十五",
    "romaji": "num_25",
    "meaning": "25 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 476,
    "word": "二十六",
    "reading": "二十六",
    "romaji": "num_26",
    "meaning": "26 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 477,
    "word": "二十七",
    "reading": "二十七",
    "romaji": "num_27",
    "meaning": "27 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 478,
    "word": "二十八",
    "reading": "二十八",
    "romaji": "num_28",
    "meaning": "28 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 479,
    "word": "二十九",
    "reading": "二十九",
    "romaji": "num_29",
    "meaning": "29 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 480,
    "word": "三十一",
    "reading": "三十一",
    "romaji": "num_31",
    "meaning": "31 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 481,
    "word": "三十二",
    "reading": "三十二",
    "romaji": "num_32",
    "meaning": "32 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 482,
    "word": "三十三",
    "reading": "三十三",
    "romaji": "num_33",
    "meaning": "33 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 483,
    "word": "三十四",
    "reading": "三十四",
    "romaji": "num_34",
    "meaning": "34 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 484,
    "word": "三十五",
    "reading": "三十五",
    "romaji": "num_35",
    "meaning": "35 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 485,
    "word": "三十六",
    "reading": "三十六",
    "romaji": "num_36",
    "meaning": "36 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 486,
    "word": "三十七",
    "reading": "三十七",
    "romaji": "num_37",
    "meaning": "37 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 487,
    "word": "三十八",
    "reading": "三十八",
    "romaji": "num_38",
    "meaning": "38 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 488,
    "word": "三十九",
    "reading": "三十九",
    "romaji": "num_39",
    "meaning": "39 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 489,
    "word": "四十一",
    "reading": "四十一",
    "romaji": "num_41",
    "meaning": "41 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 490,
    "word": "四十二",
    "reading": "四十二",
    "romaji": "num_42",
    "meaning": "42 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 491,
    "word": "四十三",
    "reading": "四十三",
    "romaji": "num_43",
    "meaning": "43 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 492,
    "word": "四十四",
    "reading": "四十四",
    "romaji": "num_44",
    "meaning": "44 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 493,
    "word": "四十五",
    "reading": "四十五",
    "romaji": "num_45",
    "meaning": "45 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 494,
    "word": "四十六",
    "reading": "四十六",
    "romaji": "num_46",
    "meaning": "46 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 495,
    "word": "四十七",
    "reading": "四十七",
    "romaji": "num_47",
    "meaning": "47 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 496,
    "word": "四十八",
    "reading": "四十八",
    "romaji": "num_48",
    "meaning": "48 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 497,
    "word": "四十九",
    "reading": "四十九",
    "romaji": "num_49",
    "meaning": "49 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 498,
    "word": "五十一",
    "reading": "五十一",
    "romaji": "num_51",
    "meaning": "51 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 499,
    "word": "五十二",
    "reading": "五十二",
    "romaji": "num_52",
    "meaning": "52 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 500,
    "word": "五十三",
    "reading": "五十三",
    "romaji": "num_53",
    "meaning": "53 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 501,
    "word": "五十四",
    "reading": "五十四",
    "romaji": "num_54",
    "meaning": "54 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 502,
    "word": "五十五",
    "reading": "五十五",
    "romaji": "num_55",
    "meaning": "55 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 503,
    "word": "五十六",
    "reading": "五十六",
    "romaji": "num_56",
    "meaning": "56 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 504,
    "word": "五十七",
    "reading": "五十七",
    "romaji": "num_57",
    "meaning": "57 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 505,
    "word": "五十八",
    "reading": "五十八",
    "romaji": "num_58",
    "meaning": "58 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 506,
    "word": "五十九",
    "reading": "五十九",
    "romaji": "num_59",
    "meaning": "59 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 507,
    "word": "六十一",
    "reading": "六十一",
    "romaji": "num_61",
    "meaning": "61 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 508,
    "word": "六十二",
    "reading": "六十二",
    "romaji": "num_62",
    "meaning": "62 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 509,
    "word": "六十三",
    "reading": "六十三",
    "romaji": "num_63",
    "meaning": "63 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 510,
    "word": "六十四",
    "reading": "六十四",
    "romaji": "num_64",
    "meaning": "64 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 511,
    "word": "六十五",
    "reading": "六十五",
    "romaji": "num_65",
    "meaning": "65 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 512,
    "word": "六十六",
    "reading": "六十六",
    "romaji": "num_66",
    "meaning": "66 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 513,
    "word": "六十七",
    "reading": "六十七",
    "romaji": "num_67",
    "meaning": "67 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 514,
    "word": "六十八",
    "reading": "六十八",
    "romaji": "num_68",
    "meaning": "68 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 515,
    "word": "六十九",
    "reading": "六十九",
    "romaji": "num_69",
    "meaning": "69 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 516,
    "word": "七十一",
    "reading": "七十一",
    "romaji": "num_71",
    "meaning": "71 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 517,
    "word": "七十二",
    "reading": "七十二",
    "romaji": "num_72",
    "meaning": "72 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 518,
    "word": "七十三",
    "reading": "七十三",
    "romaji": "num_73",
    "meaning": "73 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 519,
    "word": "七十四",
    "reading": "七十四",
    "romaji": "num_74",
    "meaning": "74 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 520,
    "word": "七十五",
    "reading": "七十五",
    "romaji": "num_75",
    "meaning": "75 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 521,
    "word": "七十六",
    "reading": "七十六",
    "romaji": "num_76",
    "meaning": "76 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 522,
    "word": "七十七",
    "reading": "七十七",
    "romaji": "num_77",
    "meaning": "77 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 523,
    "word": "七十八",
    "reading": "七十八",
    "romaji": "num_78",
    "meaning": "78 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 524,
    "word": "七十九",
    "reading": "七十九",
    "romaji": "num_79",
    "meaning": "79 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 525,
    "word": "八十一",
    "reading": "八十一",
    "romaji": "num_81",
    "meaning": "81 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 526,
    "word": "八十二",
    "reading": "八十二",
    "romaji": "num_82",
    "meaning": "82 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 527,
    "word": "八十三",
    "reading": "八十三",
    "romaji": "num_83",
    "meaning": "83 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 528,
    "word": "八十四",
    "reading": "八十四",
    "romaji": "num_84",
    "meaning": "84 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 529,
    "word": "八十五",
    "reading": "八十五",
    "romaji": "num_85",
    "meaning": "85 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 530,
    "word": "八十六",
    "reading": "八十六",
    "romaji": "num_86",
    "meaning": "86 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 531,
    "word": "八十七",
    "reading": "八十七",
    "romaji": "num_87",
    "meaning": "87 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 532,
    "word": "八十八",
    "reading": "八十八",
    "romaji": "num_88",
    "meaning": "88 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 533,
    "word": "八十九",
    "reading": "八十九",
    "romaji": "num_89",
    "meaning": "89 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 534,
    "word": "九十一",
    "reading": "九十一",
    "romaji": "num_91",
    "meaning": "91 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 535,
    "word": "九十二",
    "reading": "九十二",
    "romaji": "num_92",
    "meaning": "92 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 536,
    "word": "九十三",
    "reading": "九十三",
    "romaji": "num_93",
    "meaning": "93 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 537,
    "word": "九十四",
    "reading": "九十四",
    "romaji": "num_94",
    "meaning": "94 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 538,
    "word": "九十五",
    "reading": "九十五",
    "romaji": "num_95",
    "meaning": "95 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 539,
    "word": "九十六",
    "reading": "九十六",
    "romaji": "num_96",
    "meaning": "96 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 540,
    "word": "九十七",
    "reading": "九十七",
    "romaji": "num_97",
    "meaning": "97 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 541,
    "word": "九十八",
    "reading": "九十八",
    "romaji": "num_98",
    "meaning": "98 (숫자)",
    "level": "beginner",
    "category": "number"
  },
  {
    "id": 542,
    "word": "九十九",
    "reading": "九十九",
    "romaji": "num_99",
    "meaning": "99 (숫자)",
    "level": "beginner",
    "category": "number"
  }
];
