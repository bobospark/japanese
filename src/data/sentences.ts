export interface Sentence {
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

export const sentences: Sentence[] = [
  {
    "id": 1,
    "sentence": "これは本です。",
    "reading": "これはほんです。",
    "romaji": "kore wa hon desu.",
    "meaning": "이것은 책입니다.",
    "level": "beginner",
    "category": "basic",
    "tokens": [
      "これ",
      "は",
      "本",
      "です",
      "。"
    ]
  },
  {
    "id": 2,
    "sentence": "あそこは学校です。",
    "reading": "あそこはがっこうです。",
    "romaji": "asoko wa gakkou desu.",
    "meaning": "저곳은 학교입니다.",
    "level": "beginner",
    "category": "basic",
    "tokens": [
      "あそこ",
      "は",
      "学校",
      "です",
      "。"
    ]
  },
  {
    "id": 3,
    "sentence": "私は学生です。",
    "reading": "わたしはがくせいです。",
    "romaji": "watashi wa gakusei desu.",
    "meaning": "저는 학생입니다.",
    "level": "beginner",
    "category": "basic",
    "tokens": [
      "私",
      "は",
      "学生",
      "です",
      "。"
    ]
  },
  {
    "id": 4,
    "sentence": "キムさんは会社員ですか。",
    "reading": "キムさんはかいしゃいんですか。",
    "romaji": "kimu san wa kaishain desu ka.",
    "meaning": "김 씨는 회사원입니까?",
    "level": "beginner",
    "category": "basic",
    "tokens": [
      "キムさん",
      "は",
      "会社員",
      "です",
      "か",
      "？"
    ]
  },
  {
    "id": 5,
    "sentence": "あの人は先生ではありません。",
    "reading": "あのひとはせんせいではありません。",
    "romaji": "ano hito wa sensei de wa arimasen.",
    "meaning": "저 사람은 선생님이 아닙니다.",
    "level": "beginner",
    "category": "basic",
    "tokens": [
      "あの人",
      "は",
      "先生",
      "では",
      "ありません",
      "。"
    ]
  },
  {
    "id": 6,
    "sentence": "水をお願いします。",
    "reading": "みずをおねがいします。",
    "romaji": "mizu wo onegaishimasu.",
    "meaning": "물을 부탁합니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "水",
      "を",
      "お願い",
      "します",
      "。"
    ]
  },
  {
    "id": 7,
    "sentence": "コーヒーを飲みます。",
    "reading": "こーひーをのみます。",
    "romaji": "koohii wo nomimasu.",
    "meaning": "커피를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "コーヒー",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 8,
    "sentence": "りんごを食べました。",
    "reading": "りんごをたべました。",
    "romaji": "ringo wo tabemashita.",
    "meaning": "사과를 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "りんご",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 9,
    "sentence": "学校に行きます。",
    "reading": "がっこうにいきます。",
    "romaji": "gakkou ni ikimasu.",
    "meaning": "학교에 갑니다.",
    "level": "beginner",
    "category": "daily",
    "tokens": [
      "学校",
      "に",
      "行きます",
      "。"
    ]
  },
  {
    "id": 10,
    "sentence": "友達に会います。",
    "reading": "ともだちにあいます。",
    "romaji": "tomodachi ni aimasu.",
    "meaning": "친구를 만납니다.",
    "level": "beginner",
    "category": "daily",
    "tokens": [
      "友達",
      "に",
      "会います",
      "。"
    ]
  },
  {
    "id": 11,
    "sentence": "朝七時に起きます。",
    "reading": "あさしちじにおきます。",
    "romaji": "asa shichiji ni okimasu.",
    "meaning": "아침 7시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "朝",
      "七時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 12,
    "sentence": "夜十一時に寝ます。",
    "reading": "よるじゅういちじにねます。",
    "romaji": "yoru juuichiji ni nemasu.",
    "meaning": "밤 11시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "夜",
      "十一時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 13,
    "sentence": "日本語の勉強をします。",
    "reading": "にほんごのべんきょうをします。",
    "romaji": "nihongo no benkyou wo shimasu.",
    "meaning": "일본어 공부를 합니다.",
    "level": "beginner",
    "category": "daily",
    "tokens": [
      "日本語",
      "の",
      "勉強",
      "を",
      "します",
      "。"
    ]
  },
  {
    "id": 14,
    "sentence": "部屋にテレビがあります。",
    "reading": "へやにてれびがあります。",
    "romaji": "heya ni terebi ga arimasu.",
    "meaning": "방에 텔레비전이 있습니다.",
    "level": "beginner",
    "category": "object",
    "tokens": [
      "部屋",
      "に",
      "テレビ",
      "が",
      "あります",
      "。"
    ]
  },
  {
    "id": 15,
    "sentence": "庭に犬がいます。",
    "reading": "niわにいぬがいます。",
    "romaji": "niwa ni inu ga imasu.",
    "meaning": "정원에 개가 있습니다.",
    "level": "beginner",
    "category": "object",
    "tokens": [
      "庭",
      "に",
      "犬",
      "が",
      "います",
      "。"
    ]
  },
  {
    "id": 16,
    "sentence": "鞄の中に何がありますか。",
    "reading": "かばんのなかになにがありますか。",
    "romaji": "kaban no naka ni nani ga arimasu ka.",
    "meaning": "가방 안에 무엇이 있습니까?",
    "level": "beginner",
    "category": "object",
    "tokens": [
      "鞄",
      "の",
      "中",
      "に",
      "何",
      "が",
      "あります",
      "か",
      "？"
    ]
  },
  {
    "id": 17,
    "sentence": "昨日映画を見ました。",
    "reading": "きのうえいがをみました。",
    "romaji": "kinou eiga wo mimashita.",
    "meaning": "어제 영화를 봤습니다.",
    "level": "beginner",
    "category": "daily",
    "tokens": [
      "昨日",
      "映画",
      "を",
      "見ました",
      "。"
    ]
  },
  {
    "id": 18,
    "sentence": "週末にデパートで買い物をしました。",
    "reading": "しゅうまつにでぱーとでかいものをしました。",
    "romaji": "shuumatsu ni depaato de kaimono wo shimashita.",
    "meaning": "주말에 백화점에서 쇼핑을 했습니다.",
    "level": "beginner",
    "category": "daily",
    "tokens": [
      "週末",
      "に",
      "デパート",
      "で",
      "買い物",
      "を",
      "しました",
      "。"
    ]
  },
  {
    "id": 19,
    "sentence": "今日は天気がいいです。",
    "reading": "きょうはてんきがいいです。",
    "romaji": "kyou wa tenki ga ii desu.",
    "meaning": "오늘 날씨가 좋습니다.",
    "level": "beginner",
    "category": "weather",
    "tokens": [
      "今日",
      "は",
      "天気",
      "가",
      "いい",
      "です",
      "。"
    ]
  },
  {
    "id": 20,
    "sentence": "明日は雨が降るでしょう。",
    "reading": "あしたはあめがふるでしょう。",
    "romaji": "ashita wa ame ga furu deshou.",
    "meaning": "내일은 비가 내리겠지요.",
    "level": "intermediate",
    "category": "weather",
    "tokens": [
      "明日",
      "は",
      "雨",
      "が",
      "降る",
      "でしょう",
      "。"
    ]
  },
  {
    "id": 21,
    "sentence": "日本語を話すことができます。",
    "reading": "にほんごをはなすことができます。",
    "romaji": "nihongo wo hanasu koto ga dekimasu.",
    "meaning": "일본어를 말할 수 있습니다.",
    "level": "intermediate",
    "category": "ability",
    "tokens": [
      "日本語",
      "を",
      "話す",
      "こと",
      "が",
      "できます",
      "。"
    ]
  },
  {
    "id": 22,
    "sentence": "寿司を食べたことがありますか。",
    "reading": "すしをたべたことがありますか。",
    "romaji": "sushi wo tabeta koto ga arimasu ka.",
    "meaning": "초밥을 먹어 본 적이 있습니까?",
    "level": "intermediate",
    "category": "experience",
    "tokens": [
      "寿司",
      "を",
      "食べた",
      "こと",
      "が",
      "あります",
      "か",
      "？"
    ]
  },
  {
    "id": 23,
    "sentence": "雨が降ったら、行きません。",
    "reading": "あめがふったら、いきません。",
    "romaji": "ame ga futtara, ikimasen.",
    "meaning": "비가 내리면, 가지 않습니다.",
    "level": "intermediate",
    "category": "conditional",
    "tokens": [
      "雨",
      "が",
      "降ったら",
      "、",
      "行きません",
      "。"
    ]
  },
  {
    "id": 24,
    "sentence": "テレビを見ながら勉強をします。",
    "reading": "てれびをみながらべんきょうをします。",
    "romaji": "terebi wo minagara benkyou wo shimasu.",
    "meaning": "텔레비전을 보면서 공부를 합니다.",
    "level": "intermediate",
    "category": "daily",
    "tokens": [
      "テレビ",
      "を",
      "見ながら",
      "勉強",
      "を",
      "します",
      "。"
    ]
  },
  {
    "id": 25,
    "sentence": "早く家に帰ったほうがいいです。",
    "reading": "はやくいえにかえったほうがいいです。",
    "romaji": "hayaku ie ni kaetta hou ga ii desu.",
    "meaning": "일찍 집에 돌아가는 편이 좋습니다.",
    "level": "intermediate",
    "category": "advice",
    "tokens": [
      "早く",
      "家",
      "に",
      "帰った",
      "ほう",
      "が",
      "いい",
      "です",
      "。"
    ]
  },
  {
    "id": 26,
    "sentence": "窓を開けてもいいですか。",
    "reading": "まどをあけてもいいですか。",
    "romaji": "mado wo akete mo ii desu ka.",
    "meaning": "창문을 열어도 되겠습니까?",
    "level": "intermediate",
    "category": "permission",
    "tokens": [
      "窓",
      "を",
      "開けても",
      "いい",
      "です",
      "か",
      "？"
    ]
  },
  {
    "id": 27,
    "sentence": "ここに座らないでください。",
    "reading": "ここにすわらないでください。",
    "romaji": "koko ni suwaranaide kudasai.",
    "meaning": "여기에 앉지 말아 주십시오.",
    "level": "intermediate",
    "category": "request",
    "tokens": [
      "ここ",
      "に",
      "座らないで",
      "ください",
      "。"
    ]
  },
  {
    "id": 28,
    "sentence": "明日までに宿題を出さなければなりません。",
    "reading": "あしたまでにしゅくだいをださなければなりません。",
    "romaji": "ashita made ni shukudai wo dasanakeleba narimasen.",
    "meaning": "내일까지 숙제를 내야만 합니다.",
    "level": "intermediate",
    "category": "obligation",
    "tokens": [
      "明日",
      "までに",
      "宿題",
      "を",
      "出さなければ",
      "なりません",
      "。"
    ]
  },
  {
    "id": 29,
    "sentence": "毎日漢字を練習することにしています。",
    "reading": "まいにちかんじをれんしゅうすることにしています。",
    "romaji": "mainichi kanji wo renshuu suru koto ni shite imasu.",
    "meaning": "매일 한자를 연습하기로 하고 있습니다.",
    "level": "intermediate",
    "category": "habit",
    "tokens": [
      "毎日",
      "漢字",
      "を",
      "練習する",
      "こと",
      "に",
      "して",
      "います",
      "。"
    ]
  },
  {
    "id": 30,
    "sentence": "日本に行ったら、温泉に入りたいです。",
    "reading": "にほんにいったら、おんせんにはいりたいです。",
    "romaji": "nihon ni ittara, onsen ni hairitai desu.",
    "meaning": "일본에 가면, 온천에 들어가고 싶습니다.",
    "level": "intermediate",
    "category": "desire",
    "tokens": [
      "日本",
      "に",
      "行ったら",
      "、",
      "温泉",
      "に",
      "入りたい",
      "です",
      "。"
    ]
  },
  {
    "id": 31,
    "sentence": "お父さんは学校へ行きます。",
    "reading": "おとうさんはがっこうへいきます。",
    "romaji": "otousan wa gakkou e ikimasu.",
    "meaning": "아버지는 학교에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "学校",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 32,
    "sentence": "お父さんは駅へ行きました。",
    "reading": "おとうさんはえきへいきました。",
    "romaji": "otousan wa eki e ikimashita.",
    "meaning": "아버지는 역에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "駅",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 33,
    "sentence": "お父さんは会社へ帰ります。",
    "reading": "おとうさんはかいしゃへかえります。",
    "romaji": "otousan wa kaisha e kaerimasu.",
    "meaning": "아버지는 회사에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "会社",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 34,
    "sentence": "お父さんは銀行へ来ます。",
    "reading": "おとうさんはぎんこうへきます。",
    "romaji": "otousan wa ginkou e kimasu.",
    "meaning": "아버지는 은행에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "銀行",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 35,
    "sentence": "お父さんは病院へ来ました。",
    "reading": "おとうさんはびょういんへきました。",
    "romaji": "otousan wa byouin e kimashita.",
    "meaning": "아버지는 병원에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "病院",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 36,
    "sentence": "お父さんは図書館へ行きます。",
    "reading": "おとうさんはとしょかんへいきます。",
    "romaji": "otousan wa toshokan e ikimasu.",
    "meaning": "아버지는 도서관에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "図書館",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 37,
    "sentence": "お父さんは公園へ行きました。",
    "reading": "おとうさんはこうえんへいきました。",
    "romaji": "otousan wa kouen e ikimashita.",
    "meaning": "아버지는 공원에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "公園",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 38,
    "sentence": "お父さんはデパートへ帰ります。",
    "reading": "おとうさんはでぱーとへかえります。",
    "romaji": "otousan wa depaato e kaerimasu.",
    "meaning": "아버지는 백화점에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "デパート",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 39,
    "sentence": "お父さんは食堂へ来ます。",
    "reading": "おとうさんはしょくどうへきます。",
    "romaji": "otousan wa shokudou e kimasu.",
    "meaning": "아버지는 식당에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "食堂",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 40,
    "sentence": "お父さんは部屋へ来ました。",
    "reading": "おとうさんはへやへきました。",
    "romaji": "otousan wa heya e kimashita.",
    "meaning": "아버지는 방에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お父さん",
      "は",
      "部屋",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 41,
    "sentence": "お母さんは学校へ行きました。",
    "reading": "おかあさんはがっこうへいきました。",
    "romaji": "okaasan wa gakkou e ikimashita.",
    "meaning": "어머니는 학교에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "学校",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 42,
    "sentence": "お母さんは駅へ帰ります。",
    "reading": "おかあさんはえきへかえります。",
    "romaji": "okaasan wa eki e kaerimasu.",
    "meaning": "어머니는 역에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "駅",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 43,
    "sentence": "お母さんは会社へ来ます。",
    "reading": "おかあさんはかいしゃへきます。",
    "romaji": "okaasan wa kaisha e kimasu.",
    "meaning": "어머니는 회사에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "会社",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 44,
    "sentence": "お母さんは銀行へ来ました。",
    "reading": "おかあさんはぎんこうへきました。",
    "romaji": "okaasan wa ginkou e kimashita.",
    "meaning": "어머니는 은행에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "銀行",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 45,
    "sentence": "お母さんは病院へ行きます。",
    "reading": "おかあさんはびょういんへいきます。",
    "romaji": "okaasan wa byouin e ikimasu.",
    "meaning": "어머니는 병원에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "病院",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 46,
    "sentence": "お母さんは図書館へ行きました。",
    "reading": "おかあさんはとしょかんへいきました。",
    "romaji": "okaasan wa toshokan e ikimashita.",
    "meaning": "어머니는 도서관에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "図書館",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 47,
    "sentence": "お母さんは公園へ帰ります。",
    "reading": "おかあさんはこうえんへかえります。",
    "romaji": "okaasan wa kouen e kaerimasu.",
    "meaning": "어머니는 공원에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "公園",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 48,
    "sentence": "お母さんはデパートへ来ます。",
    "reading": "おかあさんはでぱーとへきます。",
    "romaji": "okaasan wa depaato e kimasu.",
    "meaning": "어머니는 백화점에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "デパート",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 49,
    "sentence": "お母さんは食堂へ来ました。",
    "reading": "おかあさんはしょくどうへきました。",
    "romaji": "okaasan wa shokudou e kimashita.",
    "meaning": "어머니는 식당에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "食堂",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 50,
    "sentence": "お母さんは部屋へ行きます。",
    "reading": "おかあさんはへやへいきます。",
    "romaji": "okaasan wa heya e ikimasu.",
    "meaning": "어머니는 방에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お母さん",
      "は",
      "部屋",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 51,
    "sentence": "お兄さんは学校へ帰ります。",
    "reading": "おにいさんはがっこうへかえります。",
    "romaji": "oniisan wa gakkou e kaerimasu.",
    "meaning": "형은 학교에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "学校",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 52,
    "sentence": "お兄さんは駅へ来ます。",
    "reading": "おにいさんはえきへきます。",
    "romaji": "oniisan wa eki e kimasu.",
    "meaning": "형은 역에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "駅",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 53,
    "sentence": "お兄さんは会社へ来ました。",
    "reading": "おにいさんはかいしゃへきました。",
    "romaji": "oniisan wa kaisha e kimashita.",
    "meaning": "형은 회사에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "会社",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 54,
    "sentence": "お兄さんは銀行へ行きます。",
    "reading": "おにいさんはぎんこうへいきます。",
    "romaji": "oniisan wa ginkou e ikimasu.",
    "meaning": "형은 은행에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "銀行",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 55,
    "sentence": "お兄さんは病院へ行きました。",
    "reading": "おにいさんはびょういんへいきました。",
    "romaji": "oniisan wa byouin e ikimashita.",
    "meaning": "형은 병원에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "病院",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 56,
    "sentence": "お兄さんは図書館へ帰ります。",
    "reading": "おにいさんはとしょかんへかえります。",
    "romaji": "oniisan wa toshokan e kaerimasu.",
    "meaning": "형은 도서관에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "図書館",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 57,
    "sentence": "お兄さんは公園へ来ます。",
    "reading": "おにいさんはこうえんへきます。",
    "romaji": "oniisan wa kouen e kimasu.",
    "meaning": "형은 공원에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "公園",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 58,
    "sentence": "お兄さんはデパートへ来ました。",
    "reading": "おにいさんはでぱーとへきました。",
    "romaji": "oniisan wa depaato e kimashita.",
    "meaning": "형은 백화점에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "デパート",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 59,
    "sentence": "お兄さんは食堂へ行きます。",
    "reading": "おにいさんはしょくどうへいきます。",
    "romaji": "oniisan wa shokudou e ikimasu.",
    "meaning": "형은 식당에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "食堂",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 60,
    "sentence": "お兄さんは部屋へ行きました。",
    "reading": "おにいさんはへやへいきました。",
    "romaji": "oniisan wa heya e ikimashita.",
    "meaning": "형은 방에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お兄さん",
      "は",
      "部屋",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 61,
    "sentence": "お姉さんは学校へ来ます。",
    "reading": "おねえさんはがっこうへきます。",
    "romaji": "oneesan wa gakkou e kimasu.",
    "meaning": "누나는 학교에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "学校",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 62,
    "sentence": "お姉さんは駅へ来ました。",
    "reading": "おねえさんはえきへきました。",
    "romaji": "oneesan wa eki e kimashita.",
    "meaning": "누나는 역에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "駅",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 63,
    "sentence": "お姉さんは会社へ行きます。",
    "reading": "おねえさんはかいしゃへいきます。",
    "romaji": "oneesan wa kaisha e ikimasu.",
    "meaning": "누나는 회사에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "会社",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 64,
    "sentence": "お姉さんは銀行へ行きました。",
    "reading": "おねえさんはぎんこうへいきました。",
    "romaji": "oneesan wa ginkou e ikimashita.",
    "meaning": "누나는 은행에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "銀行",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 65,
    "sentence": "お姉さんは病院へ帰ります。",
    "reading": "おねえさんはびょういんへかえります。",
    "romaji": "oneesan wa byouin e kaerimasu.",
    "meaning": "누나는 병원에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "病院",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 66,
    "sentence": "お姉さんは図書館へ来ます。",
    "reading": "おねえさんはとしょかんへきます。",
    "romaji": "oneesan wa toshokan e kimasu.",
    "meaning": "누나는 도서관에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "図書館",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 67,
    "sentence": "お姉さんは公園へ来ました。",
    "reading": "おねえさんはこうえんへきました。",
    "romaji": "oneesan wa kouen e kimashita.",
    "meaning": "누나는 공원에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "公園",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 68,
    "sentence": "お姉さんはデパートへ行きます。",
    "reading": "おねえさんはでぱーとへいきます。",
    "romaji": "oneesan wa depaato e ikimasu.",
    "meaning": "누나는 백화점에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "デパート",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 69,
    "sentence": "お姉さんは食堂へ行きました。",
    "reading": "おねえさんはしょくどうへいきました。",
    "romaji": "oneesan wa shokudou e ikimashita.",
    "meaning": "누나는 식당에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "食堂",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 70,
    "sentence": "お姉さんは部屋へ帰ります。",
    "reading": "おねえさんはへやへかえります。",
    "romaji": "oneesan wa heya e kaerimasu.",
    "meaning": "누나는 방에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "お姉さん",
      "は",
      "部屋",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 71,
    "sentence": "弟は学校へ来ました。",
    "reading": "おとうとはがっこうへきました。",
    "romaji": "otouto wa gakkou e kimashita.",
    "meaning": "남동생은 학교에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "学校",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 72,
    "sentence": "弟は駅へ行きます。",
    "reading": "おとうとはえきへいきます。",
    "romaji": "otouto wa eki e ikimasu.",
    "meaning": "남동생은 역에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "駅",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 73,
    "sentence": "弟は会社へ行きました。",
    "reading": "おとうとはかいしゃへいきました。",
    "romaji": "otouto wa kaisha e ikimashita.",
    "meaning": "남동생은 회사에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "会社",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 74,
    "sentence": "弟は銀行へ帰ります。",
    "reading": "おとうとはぎんこうへかえります。",
    "romaji": "otouto wa ginkou e kaerimasu.",
    "meaning": "남동생은 은행에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "銀行",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 75,
    "sentence": "弟は病院へ来ます。",
    "reading": "おとうとはびょういんへきます。",
    "romaji": "otouto wa byouin e kimasu.",
    "meaning": "남동생은 병원에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "病院",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 76,
    "sentence": "弟は図書館へ来ました。",
    "reading": "おとうとはとしょかんへきました。",
    "romaji": "otouto wa toshokan e kimashita.",
    "meaning": "남동생은 도서관에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "図書館",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 77,
    "sentence": "弟は公園へ行きます。",
    "reading": "おとうとはこうえんへいきます。",
    "romaji": "otouto wa kouen e ikimasu.",
    "meaning": "남동생은 공원에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "公園",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 78,
    "sentence": "弟はデパートへ行きました。",
    "reading": "おとうとはでぱーとへいきました。",
    "romaji": "otouto wa depaato e ikimashita.",
    "meaning": "남동생은 백화점에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "デパート",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 79,
    "sentence": "弟は食堂へ帰ります。",
    "reading": "おとうとはしょくどうへかえります。",
    "romaji": "otouto wa shokudou e kaerimasu.",
    "meaning": "남동생은 식당에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "食堂",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 80,
    "sentence": "弟は部屋へ来ます。",
    "reading": "おとうとはへやへきます。",
    "romaji": "otouto wa heya e kimasu.",
    "meaning": "남동생은 방에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "弟",
      "は",
      "部屋",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 81,
    "sentence": "妹は学校へ行きます。",
    "reading": "いもうとはがっこうへいきます。",
    "romaji": "imouto wa gakkou e ikimasu.",
    "meaning": "여동생은 학교에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "学校",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 82,
    "sentence": "妹は駅へ行きました。",
    "reading": "いもうとはえきへいきました。",
    "romaji": "imouto wa eki e ikimashita.",
    "meaning": "여동생은 역에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "駅",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 83,
    "sentence": "妹は会社へ帰ります。",
    "reading": "いもうとはかいしゃへかえります。",
    "romaji": "imouto wa kaisha e kaerimasu.",
    "meaning": "여동생은 회사에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "会社",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 84,
    "sentence": "妹は銀行へ来ます。",
    "reading": "いもうとはぎんこうへきます。",
    "romaji": "imouto wa ginkou e kimasu.",
    "meaning": "여동생은 은행에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "銀行",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 85,
    "sentence": "妹は病院へ来ました。",
    "reading": "いもうとはびょういんへきました。",
    "romaji": "imouto wa byouin e kimashita.",
    "meaning": "여동생은 병원에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "病院",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 86,
    "sentence": "妹は図書館へ行きます。",
    "reading": "いもうとはとしょかんへいきます。",
    "romaji": "imouto wa toshokan e ikimasu.",
    "meaning": "여동생은 도서관에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "図書館",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 87,
    "sentence": "妹は公園へ行きました。",
    "reading": "いもうとはこうえんへいきました。",
    "romaji": "imouto wa kouen e ikimashita.",
    "meaning": "여동생은 공원에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "公園",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 88,
    "sentence": "妹はデパートへ帰ります。",
    "reading": "いもうとはでぱーとへかえります。",
    "romaji": "imouto wa depaato e kaerimasu.",
    "meaning": "여동생은 백화점에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "デパート",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 89,
    "sentence": "妹は食堂へ来ます。",
    "reading": "いもうとはしょくどうへきます。",
    "romaji": "imouto wa shokudou e kimasu.",
    "meaning": "여동생은 식당에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "食堂",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 90,
    "sentence": "妹は部屋へ来ました。",
    "reading": "いもうとはへやへきました。",
    "romaji": "imouto wa heya e kimashita.",
    "meaning": "여동생은 방에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "妹",
      "は",
      "部屋",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 91,
    "sentence": "友達は学校へ行きました。",
    "reading": "ともだちはがっこうへいきました。",
    "romaji": "tomodachi wa gakkou e ikimashita.",
    "meaning": "친구는 학교에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "学校",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 92,
    "sentence": "友達は駅へ帰ります。",
    "reading": "ともだちはえきへかえります。",
    "romaji": "tomodachi wa eki e kaerimasu.",
    "meaning": "친구는 역에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "駅",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 93,
    "sentence": "友達は会社へ来ます。",
    "reading": "ともだちはかいしゃへきます。",
    "romaji": "tomodachi wa kaisha e kimasu.",
    "meaning": "친구는 회사에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "会社",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 94,
    "sentence": "友達は銀行へ来ました。",
    "reading": "ともだちはぎんこうへきました。",
    "romaji": "tomodachi wa ginkou e kimashita.",
    "meaning": "친구는 은행에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "銀行",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 95,
    "sentence": "友達は病院へ行きます。",
    "reading": "ともだちはびょういんへいきます。",
    "romaji": "tomodachi wa byouin e ikimasu.",
    "meaning": "친구는 병원에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "病院",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 96,
    "sentence": "友達は図書館へ行きました。",
    "reading": "ともだちはとしょかんへいきました。",
    "romaji": "tomodachi wa toshokan e ikimashita.",
    "meaning": "친구는 도서관에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "図書館",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 97,
    "sentence": "友達は公園へ帰ります。",
    "reading": "ともだちはこうえんへかえります。",
    "romaji": "tomodachi wa kouen e kaerimasu.",
    "meaning": "친구는 공원에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "公園",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 98,
    "sentence": "友達はデパートへ来ます。",
    "reading": "ともだちはでぱーとへきます。",
    "romaji": "tomodachi wa depaato e kimasu.",
    "meaning": "친구는 백화점에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "デパート",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 99,
    "sentence": "友達は食堂へ来ました。",
    "reading": "ともだちはしょくどうへきました。",
    "romaji": "tomodachi wa shokudou e kimashita.",
    "meaning": "친구는 식당에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "食堂",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 100,
    "sentence": "友達は部屋へ行きます。",
    "reading": "ともだちはへやへいきます。",
    "romaji": "tomodachi wa heya e ikimasu.",
    "meaning": "친구는 방에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "友達",
      "は",
      "部屋",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 101,
    "sentence": "先生は学校へ帰ります。",
    "reading": "せんせいはがっこうへかえります。",
    "romaji": "sensei wa gakkou e kaerimasu.",
    "meaning": "선생님은 학교에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "学校",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 102,
    "sentence": "先生は駅へ来ます。",
    "reading": "せんせいはえきへきます。",
    "romaji": "sensei wa eki e kimasu.",
    "meaning": "선생님은 역에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "駅",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 103,
    "sentence": "先生は会社へ来ました。",
    "reading": "せんせいはかいしゃへきました。",
    "romaji": "sensei wa kaisha e kimashita.",
    "meaning": "선생님은 회사에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "会社",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 104,
    "sentence": "先生は銀行へ行きます。",
    "reading": "せんせいはぎんこうへいきます。",
    "romaji": "sensei wa ginkou e ikimasu.",
    "meaning": "선생님은 은행에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "銀行",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 105,
    "sentence": "先生は病院へ行きました。",
    "reading": "せんせいはびょういんへいきました。",
    "romaji": "sensei wa byouin e ikimashita.",
    "meaning": "선생님은 병원에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "病院",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 106,
    "sentence": "先生は図書館へ帰ります。",
    "reading": "せんせいはとしょかんへかえります。",
    "romaji": "sensei wa toshokan e kaerimasu.",
    "meaning": "선생님은 도서관에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "図書館",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 107,
    "sentence": "先生は公園へ来ます。",
    "reading": "せんせいはこうえんへきます。",
    "romaji": "sensei wa kouen e kimasu.",
    "meaning": "선생님은 공원에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "公園",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 108,
    "sentence": "先生はデパートへ来ました。",
    "reading": "せんせいはでぱーとへきました。",
    "romaji": "sensei wa depaato e kimashita.",
    "meaning": "선생님은 백화점에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "デパート",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 109,
    "sentence": "先生は食堂へ行きます。",
    "reading": "せんせいはしょくどうへいきます。",
    "romaji": "sensei wa shokudou e ikimasu.",
    "meaning": "선생님은 식당에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "食堂",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 110,
    "sentence": "先生は部屋へ行きました。",
    "reading": "せんせいはへやへいきました。",
    "romaji": "sensei wa heya e ikimashita.",
    "meaning": "선생님은 방에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "先生",
      "は",
      "部屋",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 111,
    "sentence": "学生は学校へ来ます。",
    "reading": "がくせいはがっこうへきます。",
    "romaji": "gakusei wa gakkou e kimasu.",
    "meaning": "학생은 학교에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "学校",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 112,
    "sentence": "学生は駅へ来ました。",
    "reading": "がくせいはえきへきました。",
    "romaji": "gakusei wa eki e kimashita.",
    "meaning": "학생은 역에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "駅",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 113,
    "sentence": "学生は会社へ行きます。",
    "reading": "がくせいはかいしゃへいきます。",
    "romaji": "gakusei wa kaisha e ikimasu.",
    "meaning": "학생은 회사에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "会社",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 114,
    "sentence": "学生は銀行へ行きました。",
    "reading": "がくせいはぎんこうへいきました。",
    "romaji": "gakusei wa ginkou e ikimashita.",
    "meaning": "학생은 은행에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "銀行",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 115,
    "sentence": "学生は病院へ帰ります。",
    "reading": "がくせいはびょういんへかえります。",
    "romaji": "gakusei wa byouin e kaerimasu.",
    "meaning": "학생은 병원에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "病院",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 116,
    "sentence": "学生は図書館へ来ます。",
    "reading": "がくせいはとしょかんへきます。",
    "romaji": "gakusei wa toshokan e kimasu.",
    "meaning": "학생은 도서관에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "図書館",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 117,
    "sentence": "学生は公園へ来ました。",
    "reading": "がくせいはこうえんへきました。",
    "romaji": "gakusei wa kouen e kimashita.",
    "meaning": "학생은 공원에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "公園",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 118,
    "sentence": "学生はデパートへ行きます。",
    "reading": "がくせいはでぱーとへいきます。",
    "romaji": "gakusei wa depaato e ikimasu.",
    "meaning": "학생은 백화점에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "デパート",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 119,
    "sentence": "学生は食堂へ行きました。",
    "reading": "がくせいはしょくどうへいきました。",
    "romaji": "gakusei wa shokudou e ikimashita.",
    "meaning": "학생은 식당에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "食堂",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 120,
    "sentence": "学生は部屋へ帰ります。",
    "reading": "がくせいはへやへかえります。",
    "romaji": "gakusei wa heya e kaerimasu.",
    "meaning": "학생은 방에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "学生",
      "は",
      "部屋",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 121,
    "sentence": "社長は学校へ来ました。",
    "reading": "しゃちょうはがっこうへきました。",
    "romaji": "shachou wa gakkou e kimashita.",
    "meaning": "사장님은 학교에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "学校",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 122,
    "sentence": "社長は駅へ行きます。",
    "reading": "しゃちょうはえきへいきます。",
    "romaji": "shachou wa eki e ikimasu.",
    "meaning": "사장님은 역에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "駅",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 123,
    "sentence": "社長は会社へ行きました。",
    "reading": "しゃちょうはかいしゃへいきました。",
    "romaji": "shachou wa kaisha e ikimashita.",
    "meaning": "사장님은 회사에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "会社",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 124,
    "sentence": "社長は銀行へ帰ります。",
    "reading": "しゃちょうはぎんこうへかえります。",
    "romaji": "shachou wa ginkou e kaerimasu.",
    "meaning": "사장님은 은행에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "銀行",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 125,
    "sentence": "社長は病院へ来ます。",
    "reading": "しゃちょうはびょういんへきます。",
    "romaji": "shachou wa byouin e kimasu.",
    "meaning": "사장님은 병원에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "病院",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 126,
    "sentence": "社長は図書館へ来ました。",
    "reading": "しゃちょうはとしょかんへきました。",
    "romaji": "shachou wa toshokan e kimashita.",
    "meaning": "사장님은 도서관에 왔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "図書館",
      "へ",
      "来ました",
      "。"
    ]
  },
  {
    "id": 127,
    "sentence": "社長は公園へ行きます。",
    "reading": "しゃちょうはこうえんへいきます。",
    "romaji": "shachou wa kouen e ikimasu.",
    "meaning": "사장님은 공원에 갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "公園",
      "へ",
      "行きます",
      "。"
    ]
  },
  {
    "id": 128,
    "sentence": "社長はデパートへ行きました。",
    "reading": "しゃちょうはでぱーとへいきました。",
    "romaji": "shachou wa depaato e ikimashita.",
    "meaning": "사장님은 백화점에 갔습니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "デパート",
      "へ",
      "行きました",
      "。"
    ]
  },
  {
    "id": 129,
    "sentence": "社長は食堂へ帰ります。",
    "reading": "しゃちょうはしょくどうへかえります。",
    "romaji": "shachou wa shokudou e kaerimasu.",
    "meaning": "사장님은 식당에 돌아갑니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "食堂",
      "へ",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 130,
    "sentence": "社長は部屋へ来ます。",
    "reading": "しゃちょうはへやへきます。",
    "romaji": "shachou wa heya e kimasu.",
    "meaning": "사장님은 방에 옵니다.",
    "level": "beginner",
    "category": "travel",
    "tokens": [
      "社長",
      "は",
      "部屋",
      "へ",
      "来ます",
      "。"
    ]
  },
  {
    "id": 131,
    "sentence": "お父さんはご飯を食べます。",
    "reading": "おとうさんはごはんをたべます。",
    "romaji": "otousan wa gohan wo tabemasu.",
    "meaning": "아버지는 밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "ご飯",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 132,
    "sentence": "お父さんは水を飲みました。",
    "reading": "おとうさんはみずをのみました。",
    "romaji": "otousan wa mizu wo nomimashita.",
    "meaning": "아버지는 물을 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "水",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 133,
    "sentence": "お父さんはお茶を飲みます。",
    "reading": "おとうさんはおちゃをのみます。",
    "romaji": "otousan wa ocha wo nomimasu.",
    "meaning": "아버지는 차를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "お茶",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 134,
    "sentence": "お父さんは牛乳を飲みました。",
    "reading": "おとうさんはぎゅうにゅうをのみました。",
    "romaji": "otousan wa gyuunyuu wo nomimashita.",
    "meaning": "아버지는 우유를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "牛乳",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 135,
    "sentence": "お父さんはビールを飲みます。",
    "reading": "おとうさんはびーるをのみます。",
    "romaji": "otousan wa biiru wo nomimasu.",
    "meaning": "아버지는 맥주를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "ビール",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 136,
    "sentence": "お父さんは肉を食べました。",
    "reading": "おとうさんはにくをたべました。",
    "romaji": "otousan wa niku wo tabemashita.",
    "meaning": "아버지는 고기를 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "肉",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 137,
    "sentence": "お父さんは魚を食べます。",
    "reading": "おとうさんはさかなをたべます。",
    "romaji": "otousan wa sakana wo tabemasu.",
    "meaning": "아버지는 생선을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "魚",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 138,
    "sentence": "お父さんはパンを食べました。",
    "reading": "おとうさんはぱんをたべました。",
    "romaji": "otousan wa pan wo tabemashita.",
    "meaning": "아버지는 빵을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "パン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 139,
    "sentence": "お父さんはラーメンを食べます。",
    "reading": "おとうさんはらーめんをたべます。",
    "romaji": "otousan wa raamen wo tabemasu.",
    "meaning": "아버지는 라면을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "ラーメン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 140,
    "sentence": "お父さんは寿司を食べました。",
    "reading": "おとうさんはすしをたべました。",
    "romaji": "otousan wa sushi wo tabemashita.",
    "meaning": "아버지는 초밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お父さん",
      "は",
      "寿司",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 141,
    "sentence": "お母さんはご飯を食べました。",
    "reading": "おかあさんはごはんをたべました。",
    "romaji": "okaasan wa gohan wo tabemashita.",
    "meaning": "어머니는 밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "ご飯",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 142,
    "sentence": "お母さんは水を飲みます。",
    "reading": "おかあさんはみずをのみます。",
    "romaji": "okaasan wa mizu wo nomimasu.",
    "meaning": "어머니는 물을 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "水",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 143,
    "sentence": "お母さんはお茶を飲みました。",
    "reading": "おかあさんはおちゃをのみました。",
    "romaji": "okaasan wa ocha wo nomimashita.",
    "meaning": "어머니는 차를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "お茶",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 144,
    "sentence": "お母さんは牛乳を飲みます。",
    "reading": "おかあさんはぎゅうにゅうをのみます。",
    "romaji": "okaasan wa gyuunyuu wo nomimasu.",
    "meaning": "어머니는 우유를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "牛乳",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 145,
    "sentence": "お母さんはビールを飲みました。",
    "reading": "おかあさんはびーるをのみました。",
    "romaji": "okaasan wa biiru wo nomimashita.",
    "meaning": "어머니는 맥주를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "ビール",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 146,
    "sentence": "お母さんは肉を食べます。",
    "reading": "おかあさんはにくをたべます。",
    "romaji": "okaasan wa niku wo tabemasu.",
    "meaning": "어머니는 고기를 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "肉",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 147,
    "sentence": "お母さんは魚を食べました。",
    "reading": "おかあさんはさかなをたべました。",
    "romaji": "okaasan wa sakana wo tabemashita.",
    "meaning": "어머니는 생선을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "魚",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 148,
    "sentence": "お母さんはパンを食べます。",
    "reading": "おかあさんはぱんをたべます。",
    "romaji": "okaasan wa pan wo tabemasu.",
    "meaning": "어머니는 빵을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "パン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 149,
    "sentence": "お母さんはラーメンを食べました。",
    "reading": "おかあさんはらーめんをたべました。",
    "romaji": "okaasan wa raamen wo tabemashita.",
    "meaning": "어머니는 라면을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "ラーメン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 150,
    "sentence": "お母さんは寿司を食べます。",
    "reading": "おかあさんはすしをたべます。",
    "romaji": "okaasan wa sushi wo tabemasu.",
    "meaning": "어머니는 초밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お母さん",
      "は",
      "寿司",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 151,
    "sentence": "お兄さんはご飯を食べます。",
    "reading": "おにいさんはごはんをたべます。",
    "romaji": "oniisan wa gohan wo tabemasu.",
    "meaning": "형은 밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "ご飯",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 152,
    "sentence": "お兄さんは水を飲みました。",
    "reading": "おにいさんはみずをのみました。",
    "romaji": "oniisan wa mizu wo nomimashita.",
    "meaning": "형은 물을 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "水",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 153,
    "sentence": "お兄さんはお茶を飲みます。",
    "reading": "おにいさんはおちゃをのみます。",
    "romaji": "oniisan wa ocha wo nomimasu.",
    "meaning": "형은 차를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "お茶",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 154,
    "sentence": "お兄さんは牛乳を飲みました。",
    "reading": "おにいさんはぎゅうにゅうをのみました。",
    "romaji": "oniisan wa gyuunyuu wo nomimashita.",
    "meaning": "형은 우유를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "牛乳",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 155,
    "sentence": "お兄さんはビールを飲みます。",
    "reading": "おにいさんはびーるをのみます。",
    "romaji": "oniisan wa biiru wo nomimasu.",
    "meaning": "형은 맥주를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "ビール",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 156,
    "sentence": "お兄さんは肉を食べました。",
    "reading": "おにいさんはにくをたべました。",
    "romaji": "oniisan wa niku wo tabemashita.",
    "meaning": "형은 고기를 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "肉",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 157,
    "sentence": "お兄さんは魚を食べます。",
    "reading": "おにいさんはさかなをたべます。",
    "romaji": "oniisan wa sakana wo tabemasu.",
    "meaning": "형은 생선을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "魚",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 158,
    "sentence": "お兄さんはパンを食べました。",
    "reading": "おにいさんはぱんをたべました。",
    "romaji": "oniisan wa pan wo tabemashita.",
    "meaning": "형은 빵을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "パン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 159,
    "sentence": "お兄さんはラーメンを食べます。",
    "reading": "おにいさんはらーめんをたべます。",
    "romaji": "oniisan wa raamen wo tabemasu.",
    "meaning": "형은 라면을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "ラーメン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 160,
    "sentence": "お兄さんは寿司を食べました。",
    "reading": "おにいさんはすしをたべました。",
    "romaji": "oniisan wa sushi wo tabemashita.",
    "meaning": "형은 초밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お兄さん",
      "は",
      "寿司",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 161,
    "sentence": "お姉さんはご飯を食べました。",
    "reading": "おねえさんはごはんをたべました。",
    "romaji": "oneesan wa gohan wo tabemashita.",
    "meaning": "누나는 밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "ご飯",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 162,
    "sentence": "お姉さんは水を飲みます。",
    "reading": "おねえさんはみずをのみます。",
    "romaji": "oneesan wa mizu wo nomimasu.",
    "meaning": "누나는 물을 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "水",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 163,
    "sentence": "お姉さんはお茶を飲みました。",
    "reading": "おねえさんはおちゃをのみました。",
    "romaji": "oneesan wa ocha wo nomimashita.",
    "meaning": "누나는 차를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "お茶",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 164,
    "sentence": "お姉さんは牛乳を飲みます。",
    "reading": "おねえさんはぎゅうにゅうをのみます。",
    "romaji": "oneesan wa gyuunyuu wo nomimasu.",
    "meaning": "누나는 우유를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "牛乳",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 165,
    "sentence": "お姉さんはビールを飲みました。",
    "reading": "おねえさんはびーるをのみました。",
    "romaji": "oneesan wa biiru wo nomimashita.",
    "meaning": "누나는 맥주를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "ビール",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 166,
    "sentence": "お姉さんは肉を食べます。",
    "reading": "おねえさんはにくをたべます。",
    "romaji": "oneesan wa niku wo tabemasu.",
    "meaning": "누나는 고기를 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "肉",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 167,
    "sentence": "お姉さんは魚を食べました。",
    "reading": "おねえさんはさかなをたべました。",
    "romaji": "oneesan wa sakana wo tabemashita.",
    "meaning": "누나는 생선을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "魚",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 168,
    "sentence": "お姉さんはパンを食べます。",
    "reading": "おねえさんはぱんをたべます。",
    "romaji": "oneesan wa pan wo tabemasu.",
    "meaning": "누나는 빵을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "パン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 169,
    "sentence": "お姉さんはラーメンを食べました。",
    "reading": "おねえさんはらーめんをたべました。",
    "romaji": "oneesan wa raamen wo tabemashita.",
    "meaning": "누나는 라면을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "ラーメン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 170,
    "sentence": "お姉さんは寿司を食べます。",
    "reading": "おねえさんはすしをたべます。",
    "romaji": "oneesan wa sushi wo tabemasu.",
    "meaning": "누나는 초밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "お姉さん",
      "は",
      "寿司",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 171,
    "sentence": "弟はご飯を食べます。",
    "reading": "おとうとはごはんをたべます。",
    "romaji": "otouto wa gohan wo tabemasu.",
    "meaning": "남동생은 밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "ご飯",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 172,
    "sentence": "弟は水を飲みました。",
    "reading": "おとうとはみずをのみました。",
    "romaji": "otouto wa mizu wo nomimashita.",
    "meaning": "남동생은 물을 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "水",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 173,
    "sentence": "弟はお茶を飲みます。",
    "reading": "おとうとはおちゃをのみます。",
    "romaji": "otouto wa ocha wo nomimasu.",
    "meaning": "남동생은 차를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "お茶",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 174,
    "sentence": "弟は牛乳を飲みました。",
    "reading": "おとうとはぎゅうにゅうをのみました。",
    "romaji": "otouto wa gyuunyuu wo nomimashita.",
    "meaning": "남동생은 우유를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "牛乳",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 175,
    "sentence": "弟はビールを飲みます。",
    "reading": "おとうとはびーるをのみます。",
    "romaji": "otouto wa biiru wo nomimasu.",
    "meaning": "남동생은 맥주를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "ビール",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 176,
    "sentence": "弟は肉を食べました。",
    "reading": "おとうとはにくをたべました。",
    "romaji": "otouto wa niku wo tabemashita.",
    "meaning": "남동생은 고기를 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "肉",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 177,
    "sentence": "弟は魚を食べます。",
    "reading": "おとうとはさかなをたべます。",
    "romaji": "otouto wa sakana wo tabemasu.",
    "meaning": "남동생은 생선을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "魚",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 178,
    "sentence": "弟はパンを食べました。",
    "reading": "おとうとはぱんをたべました。",
    "romaji": "otouto wa pan wo tabemashita.",
    "meaning": "남동생은 빵을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "パン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 179,
    "sentence": "弟はラーメンを食べます。",
    "reading": "おとうとはらーめんをたべます。",
    "romaji": "otouto wa raamen wo tabemasu.",
    "meaning": "남동생은 라면을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "ラーメン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 180,
    "sentence": "弟は寿司を食べました。",
    "reading": "おとうとはすしをたべました。",
    "romaji": "otouto wa sushi wo tabemashita.",
    "meaning": "남동생은 초밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "弟",
      "は",
      "寿司",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 181,
    "sentence": "妹はご飯を食べました。",
    "reading": "いもうとはごはんをたべました。",
    "romaji": "imouto wa gohan wo tabemashita.",
    "meaning": "여동생은 밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "ご飯",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 182,
    "sentence": "妹は水を飲みます。",
    "reading": "いもうとはみずをのみます。",
    "romaji": "imouto wa mizu wo nomimasu.",
    "meaning": "여동생은 물을 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "水",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 183,
    "sentence": "妹はお茶を飲みました。",
    "reading": "いもうとはおちゃをのみました。",
    "romaji": "imouto wa ocha wo nomimashita.",
    "meaning": "여동생은 차를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "お茶",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 184,
    "sentence": "妹は牛乳を飲みます。",
    "reading": "いもうとはぎゅうにゅうをのみます。",
    "romaji": "imouto wa gyuunyuu wo nomimasu.",
    "meaning": "여동생은 우유를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "牛乳",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 185,
    "sentence": "妹はビールを飲みました。",
    "reading": "いもうとはびーるをのみました。",
    "romaji": "imouto wa biiru wo nomimashita.",
    "meaning": "여동생은 맥주를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "ビール",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 186,
    "sentence": "妹は肉を食べます。",
    "reading": "いもうとはにくをたべます。",
    "romaji": "imouto wa niku wo tabemasu.",
    "meaning": "여동생은 고기를 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "肉",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 187,
    "sentence": "妹は魚を食べました。",
    "reading": "いもうとはさかなをたべました。",
    "romaji": "imouto wa sakana wo tabemashita.",
    "meaning": "여동생은 생선을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "魚",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 188,
    "sentence": "妹はパンを食べます。",
    "reading": "いもうとはぱんをたべます。",
    "romaji": "imouto wa pan wo tabemasu.",
    "meaning": "여동생은 빵을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "パン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 189,
    "sentence": "妹はラーメンを食べました。",
    "reading": "いもうとはらーめんをたべました。",
    "romaji": "imouto wa raamen wo tabemashita.",
    "meaning": "여동생은 라면을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "ラーメン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 190,
    "sentence": "妹は寿司を食べます。",
    "reading": "いもうとはすしをたべます。",
    "romaji": "imouto wa sushi wo tabemasu.",
    "meaning": "여동생은 초밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "妹",
      "は",
      "寿司",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 191,
    "sentence": "友達はご飯を食べます。",
    "reading": "ともだちはごはんをたべます。",
    "romaji": "tomodachi wa gohan wo tabemasu.",
    "meaning": "친구는 밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "ご飯",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 192,
    "sentence": "友達は水を飲みました。",
    "reading": "ともだちはみずをのみました。",
    "romaji": "tomodachi wa mizu wo nomimashita.",
    "meaning": "친구는 물을 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "水",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 193,
    "sentence": "友達はお茶を飲みます。",
    "reading": "ともだちはおちゃをのみます。",
    "romaji": "tomodachi wa ocha wo nomimasu.",
    "meaning": "친구는 차를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "お茶",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 194,
    "sentence": "友達は牛乳を飲みました。",
    "reading": "ともだちはぎゅうにゅうをのみました。",
    "romaji": "tomodachi wa gyuunyuu wo nomimashita.",
    "meaning": "친구는 우유를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "牛乳",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 195,
    "sentence": "友達はビールを飲みます。",
    "reading": "ともだちはびーるをのみます。",
    "romaji": "tomodachi wa biiru wo nomimasu.",
    "meaning": "친구는 맥주를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "ビール",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 196,
    "sentence": "友達は肉を食べました。",
    "reading": "ともだちはにくをたべました。",
    "romaji": "tomodachi wa niku wo tabemashita.",
    "meaning": "친구는 고기를 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "肉",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 197,
    "sentence": "友達は魚を食べます。",
    "reading": "ともだちはさかなをたべます。",
    "romaji": "tomodachi wa sakana wo tabemasu.",
    "meaning": "친구는 생선을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "魚",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 198,
    "sentence": "友達はパンを食べました。",
    "reading": "ともだちはぱんをたべました。",
    "romaji": "tomodachi wa pan wo tabemashita.",
    "meaning": "친구는 빵을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "パン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 199,
    "sentence": "友達はラーメンを食べます。",
    "reading": "ともだちはらーめんをたべます。",
    "romaji": "tomodachi wa raamen wo tabemasu.",
    "meaning": "친구는 라면을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "ラーメン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 200,
    "sentence": "友達は寿司を食べました。",
    "reading": "ともだちはすしをたべました。",
    "romaji": "tomodachi wa sushi wo tabemashita.",
    "meaning": "친구는 초밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "友達",
      "は",
      "寿司",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 201,
    "sentence": "先生はご飯を食べました。",
    "reading": "せんせいはごはんをたべました。",
    "romaji": "sensei wa gohan wo tabemashita.",
    "meaning": "선생님은 밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "ご飯",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 202,
    "sentence": "先生は水を飲みます。",
    "reading": "せんせいはみずをのみます。",
    "romaji": "sensei wa mizu wo nomimasu.",
    "meaning": "선생님은 물을 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "水",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 203,
    "sentence": "先生はお茶を飲みました。",
    "reading": "せんせいはおちゃをのみました。",
    "romaji": "sensei wa ocha wo nomimashita.",
    "meaning": "선생님은 차를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "お茶",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 204,
    "sentence": "先生は牛乳を飲みます。",
    "reading": "せんせいはぎゅうにゅうをのみます。",
    "romaji": "sensei wa gyuunyuu wo nomimasu.",
    "meaning": "선생님은 우유를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "牛乳",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 205,
    "sentence": "先生はビールを飲みました。",
    "reading": "せんせいはびーるをのみました。",
    "romaji": "sensei wa biiru wo nomimashita.",
    "meaning": "선생님은 맥주를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "ビール",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 206,
    "sentence": "先生は肉を食べます。",
    "reading": "せんせいはにくをたべます。",
    "romaji": "sensei wa niku wo tabemasu.",
    "meaning": "선생님은 고기를 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "肉",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 207,
    "sentence": "先生は魚を食べました。",
    "reading": "せんせいはさかなをたべました。",
    "romaji": "sensei wa sakana wo tabemashita.",
    "meaning": "선생님은 생선을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "魚",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 208,
    "sentence": "先生はパンを食べます。",
    "reading": "せんせいはぱんをたべます。",
    "romaji": "sensei wa pan wo tabemasu.",
    "meaning": "선생님은 빵을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "パン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 209,
    "sentence": "先生はラーメンを食べました。",
    "reading": "せんせいはらーめんをたべました。",
    "romaji": "sensei wa raamen wo tabemashita.",
    "meaning": "선생님은 라면을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "ラーメン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 210,
    "sentence": "先生は寿司を食べます。",
    "reading": "せんせいはすしをたべます。",
    "romaji": "sensei wa sushi wo tabemasu.",
    "meaning": "선생님은 초밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "先生",
      "は",
      "寿司",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 211,
    "sentence": "学生はご飯を食べます。",
    "reading": "がくせいはごはんをたべます。",
    "romaji": "gakusei wa gohan wo tabemasu.",
    "meaning": "학생은 밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "ご飯",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 212,
    "sentence": "学生は水を飲みました。",
    "reading": "がくせいはみずをのみました。",
    "romaji": "gakusei wa mizu wo nomimashita.",
    "meaning": "학생은 물을 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "水",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 213,
    "sentence": "学生はお茶を飲みます。",
    "reading": "がくせいはおちゃをのみます。",
    "romaji": "gakusei wa ocha wo nomimasu.",
    "meaning": "학생은 차를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "お茶",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 214,
    "sentence": "学生は牛乳を飲みました。",
    "reading": "がくせいはぎゅうにゅうをのみました。",
    "romaji": "gakusei wa gyuunyuu wo nomimashita.",
    "meaning": "학생은 우유를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "牛乳",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 215,
    "sentence": "学生はビールを飲みます。",
    "reading": "がくせいはびーるをのみます。",
    "romaji": "gakusei wa biiru wo nomimasu.",
    "meaning": "학생은 맥주를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "ビール",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 216,
    "sentence": "学生は肉を食べました。",
    "reading": "がくせいはにくをたべました。",
    "romaji": "gakusei wa niku wo tabemashita.",
    "meaning": "학생은 고기를 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "肉",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 217,
    "sentence": "学生は魚を食べます。",
    "reading": "がくせいはさかなをたべます。",
    "romaji": "gakusei wa sakana wo tabemasu.",
    "meaning": "학생은 생선을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "魚",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 218,
    "sentence": "学生はパンを食べました。",
    "reading": "がくせいはぱんをたべました。",
    "romaji": "gakusei wa pan wo tabemashita.",
    "meaning": "학생은 빵을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "パン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 219,
    "sentence": "学生はラーメンを食べます。",
    "reading": "がくせいはらーめんをたべます。",
    "romaji": "gakusei wa raamen wo tabemasu.",
    "meaning": "학생은 라면을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "ラーメン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 220,
    "sentence": "学生は寿司を食べました。",
    "reading": "がくせいはすしをたべました。",
    "romaji": "gakusei wa sushi wo tabemashita.",
    "meaning": "학생은 초밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "学生",
      "は",
      "寿司",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 221,
    "sentence": "社長はご飯を食べました。",
    "reading": "しゃちょうはごはんをたべました。",
    "romaji": "shachou wa gohan wo tabemashita.",
    "meaning": "사장님은 밥을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "ご飯",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 222,
    "sentence": "社長は水を飲みます。",
    "reading": "しゃちょうはみずをのみます。",
    "romaji": "shachou wa mizu wo nomimasu.",
    "meaning": "사장님은 물을 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "水",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 223,
    "sentence": "社長はお茶を飲みました。",
    "reading": "しゃちょうはおちゃをのみました。",
    "romaji": "shachou wa ocha wo nomimashita.",
    "meaning": "사장님은 차를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "お茶",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 224,
    "sentence": "社長は牛乳を飲みます。",
    "reading": "しゃちょうはぎゅうにゅうをのみます。",
    "romaji": "shachou wa gyuunyuu wo nomimasu.",
    "meaning": "사장님은 우유를 마십니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "牛乳",
      "を",
      "飲みます",
      "。"
    ]
  },
  {
    "id": 225,
    "sentence": "社長はビールを飲みました。",
    "reading": "しゃちょうはびーるをのみました。",
    "romaji": "shachou wa biiru wo nomimashita.",
    "meaning": "사장님은 맥주를 마셨습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "ビール",
      "を",
      "飲みました",
      "。"
    ]
  },
  {
    "id": 226,
    "sentence": "社長は肉を食べます。",
    "reading": "しゃちょうはにくをたべます。",
    "romaji": "shachou wa niku wo tabemasu.",
    "meaning": "사장님은 고기를 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "肉",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 227,
    "sentence": "社長は魚を食べました。",
    "reading": "しゃちょうはさかなをたべました。",
    "romaji": "shachou wa sakana wo tabemashita.",
    "meaning": "사장님은 생선을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "魚",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 228,
    "sentence": "社長はパンを食べます。",
    "reading": "しゃちょうはぱんをたべます。",
    "romaji": "shachou wa pan wo tabemasu.",
    "meaning": "사장님은 빵을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "パン",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 229,
    "sentence": "社長はラーメンを食べました。",
    "reading": "しゃちょうはらーめんをたべました。",
    "romaji": "shachou wa raamen wo tabemashita.",
    "meaning": "사장님은 라면을 먹었습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "ラーメン",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 230,
    "sentence": "社長は寿司を食べます。",
    "reading": "しゃちょうはすしをたべます。",
    "romaji": "shachou wa sushi wo tabemasu.",
    "meaning": "사장님은 초밥을 먹습니다.",
    "level": "beginner",
    "category": "dining",
    "tokens": [
      "社長",
      "は",
      "寿司",
      "を",
      "食べます",
      "。"
    ]
  },
  {
    "id": 231,
    "sentence": "お父さんは朝六時に起きます。",
    "reading": "おとうさんはあさろくじにおきます。",
    "romaji": "otousan wa asa rokuji ni okimasu.",
    "meaning": "아버지는 아침 6시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お父さん",
      "は",
      "朝",
      "六時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 232,
    "sentence": "お父さんは昼七時に寝ます。",
    "reading": "おとうさんはひるしちじにねます。",
    "romaji": "otousan wa hiru shichiji ni nemasu.",
    "meaning": "아버지는 낮 7시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お父さん",
      "は",
      "昼",
      "七時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 233,
    "sentence": "お父さんは夜八時に勉強します。",
    "reading": "おとうさんはよるはちじにべんきょうします。",
    "romaji": "otousan wa yoru hachiji ni benkyoushimasu.",
    "meaning": "아버지는 밤 8시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お父さん",
      "は",
      "夜",
      "八時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 234,
    "sentence": "お父さんは毎日九時に働きます。",
    "reading": "おとうさんはまいにちくじにはたらきます。",
    "romaji": "otousan wa mainichi kuji ni hatarakimasu.",
    "meaning": "아버지는 매일 9시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お父さん",
      "は",
      "毎日",
      "九時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 235,
    "sentence": "お父さんは朝十時に帰ります。",
    "reading": "おとうさんはあさじゅうじにかえります。",
    "romaji": "otousan wa asa juuji ni kaerimasu.",
    "meaning": "아버지는 아침 10시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お父さん",
      "は",
      "朝",
      "十時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 236,
    "sentence": "お母さんは昼六時に寝ます。",
    "reading": "おかあさんはひるろくじにねます。",
    "romaji": "okaasan wa hiru rokuji ni nemasu.",
    "meaning": "어머니는 낮 6시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お母さん",
      "は",
      "昼",
      "六時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 237,
    "sentence": "お母さんは夜七時に勉強します。",
    "reading": "おかあさんはよるしちじにべんきょうします。",
    "romaji": "okaasan wa yoru shichiji ni benkyoushimasu.",
    "meaning": "어머니는 밤 7시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お母さん",
      "は",
      "夜",
      "七時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 238,
    "sentence": "お母さんは毎日八時に働きます。",
    "reading": "おかあさんはまいにちはちじにはたらきます。",
    "romaji": "okaasan wa mainichi hachiji ni hatarakimasu.",
    "meaning": "어머니는 매일 8시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お母さん",
      "は",
      "毎日",
      "八時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 239,
    "sentence": "お母さんは朝九時に帰ります。",
    "reading": "おかあさんはあさくじにかえります。",
    "romaji": "okaasan wa asa kuji ni kaerimasu.",
    "meaning": "어머니는 아침 9시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お母さん",
      "は",
      "朝",
      "九時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 240,
    "sentence": "お母さんは昼十時に起きます。",
    "reading": "おかあさんはひるじゅうじにおきます。",
    "romaji": "okaasan wa hiru juuji ni okimasu.",
    "meaning": "어머니는 낮 10시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お母さん",
      "は",
      "昼",
      "十時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 241,
    "sentence": "お兄さんは夜六時に勉強します。",
    "reading": "おにいさんはよるろくじにべんきょうします。",
    "romaji": "oniisan wa yoru rokuji ni benkyoushimasu.",
    "meaning": "형은 밤 6시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お兄さん",
      "は",
      "夜",
      "六時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 242,
    "sentence": "お兄さんは毎日七時に働きます。",
    "reading": "おにいさんはまいにちしちじにはたらきます。",
    "romaji": "oniisan wa mainichi shichiji ni hatarakimasu.",
    "meaning": "형은 매일 7시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お兄さん",
      "は",
      "毎日",
      "七時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 243,
    "sentence": "お兄さんは朝八時に帰ります。",
    "reading": "おにいさんはあさはちじにかえります。",
    "romaji": "oniisan wa asa hachiji ni kaerimasu.",
    "meaning": "형은 아침 8시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お兄さん",
      "は",
      "朝",
      "八時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 244,
    "sentence": "お兄さんは昼九時に起きます。",
    "reading": "おにいさんはひるくじにおきます。",
    "romaji": "oniisan wa hiru kuji ni okimasu.",
    "meaning": "형은 낮 9시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お兄さん",
      "は",
      "昼",
      "九時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 245,
    "sentence": "お兄さんは夜十時に寝ます。",
    "reading": "おにいさんはよるじゅうじにねます。",
    "romaji": "oniisan wa yoru juuji ni nemasu.",
    "meaning": "형은 밤 10시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お兄さん",
      "は",
      "夜",
      "十時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 246,
    "sentence": "お姉さんは毎日六時に働きます。",
    "reading": "おねえさんはまいにちろくじにはたらきます。",
    "romaji": "oneesan wa mainichi rokuji ni hatarakimasu.",
    "meaning": "누나는 매일 6시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お姉さん",
      "は",
      "毎日",
      "六時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 247,
    "sentence": "お姉さんは朝七時に帰ります。",
    "reading": "おねえさんはあさしちじにかえります。",
    "romaji": "oneesan wa asa shichiji ni kaerimasu.",
    "meaning": "누나는 아침 7시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お姉さん",
      "は",
      "朝",
      "七時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 248,
    "sentence": "お姉さんは昼八時に起きます。",
    "reading": "おねえさんはひるはちじにおきます。",
    "romaji": "oneesan wa hiru hachiji ni okimasu.",
    "meaning": "누나는 낮 8시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お姉さん",
      "は",
      "昼",
      "八時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 249,
    "sentence": "お姉さんは夜九時に寝ます。",
    "reading": "おねえさんはよるくじにねます。",
    "romaji": "oneesan wa yoru kuji ni nemasu.",
    "meaning": "누나는 밤 9시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お姉さん",
      "は",
      "夜",
      "九時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 250,
    "sentence": "お姉さんは毎日十時に勉強します。",
    "reading": "おねえさんはまいにちじゅうじにべんきょうします。",
    "romaji": "oneesan wa mainichi juuji ni benkyoushimasu.",
    "meaning": "누나는 매일 10시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "お姉さん",
      "は",
      "毎日",
      "十時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 251,
    "sentence": "弟は朝六時に帰ります。",
    "reading": "おとうとはあさろくじにかえります。",
    "romaji": "otouto wa asa rokuji ni kaerimasu.",
    "meaning": "남동생은 아침 6시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "弟",
      "は",
      "朝",
      "六時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 252,
    "sentence": "弟は昼七時に起きます。",
    "reading": "おとうとはひるしちじにおきます。",
    "romaji": "otouto wa hiru shichiji ni okimasu.",
    "meaning": "남동생은 낮 7시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "弟",
      "は",
      "昼",
      "七時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 253,
    "sentence": "弟は夜八時に寝ます。",
    "reading": "おとうとはよるはちじにねます。",
    "romaji": "otouto wa yoru hachiji ni nemasu.",
    "meaning": "남동생은 밤 8시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "弟",
      "は",
      "夜",
      "八時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 254,
    "sentence": "弟は毎日九時に勉強します。",
    "reading": "おとうとはまいにちくじにべんきょうします。",
    "romaji": "otouto wa mainichi kuji ni benkyoushimasu.",
    "meaning": "남동생은 매일 9시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "弟",
      "は",
      "毎日",
      "九時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 255,
    "sentence": "弟は朝十時に働きます。",
    "reading": "おとうとはあさじゅうじにはたらきます。",
    "romaji": "otouto wa asa juuji ni hatarakimasu.",
    "meaning": "남동생은 아침 10시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "弟",
      "は",
      "朝",
      "十時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 256,
    "sentence": "妹は昼六時に起きます。",
    "reading": "いもうとはひるろくじにおきます。",
    "romaji": "imouto wa hiru rokuji ni okimasu.",
    "meaning": "여동생은 낮 6시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "妹",
      "は",
      "昼",
      "六時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 257,
    "sentence": "妹は夜七時に寝ます。",
    "reading": "いもうとはよるしちじにねます。",
    "romaji": "imouto wa yoru shichiji ni nemasu.",
    "meaning": "여동생은 밤 7시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "妹",
      "は",
      "夜",
      "七時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 258,
    "sentence": "妹は毎日八時に勉強します。",
    "reading": "いもうとはまいにちはちじにべんきょうします。",
    "romaji": "imouto wa mainichi hachiji ni benkyoushimasu.",
    "meaning": "여동생은 매일 8시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "妹",
      "は",
      "毎日",
      "八時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 259,
    "sentence": "妹は朝九時に働きます。",
    "reading": "いもうとはあさくじにはたらきます。",
    "romaji": "imouto wa asa kuji ni hatarakimasu.",
    "meaning": "여동생은 아침 9시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "妹",
      "は",
      "朝",
      "九時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 260,
    "sentence": "妹は昼十時に帰ります。",
    "reading": "いもうとはひるじゅうじにかえります。",
    "romaji": "imouto wa hiru juuji ni kaerimasu.",
    "meaning": "여동생은 낮 10시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "妹",
      "は",
      "昼",
      "十時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 261,
    "sentence": "友達は夜六時に寝ます。",
    "reading": "ともだちはよるろくじにねます。",
    "romaji": "tomodachi wa yoru rokuji ni nemasu.",
    "meaning": "친구는 밤 6시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "友達",
      "は",
      "夜",
      "六時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 262,
    "sentence": "友達は毎日七時に勉強します。",
    "reading": "ともだちはまいにちしちじにべんきょうします。",
    "romaji": "tomodachi wa mainichi shichiji ni benkyoushimasu.",
    "meaning": "친구는 매일 7시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "友達",
      "は",
      "毎日",
      "七時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 263,
    "sentence": "友達は朝八時に働きます。",
    "reading": "ともだちはあさはちじにはたらきます。",
    "romaji": "tomodachi wa asa hachiji ni hatarakimasu.",
    "meaning": "친구는 아침 8시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "友達",
      "は",
      "朝",
      "八時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 264,
    "sentence": "友達は昼九時に帰ります。",
    "reading": "ともだちはひるくじにかえります。",
    "romaji": "tomodachi wa hiru kuji ni kaerimasu.",
    "meaning": "친구는 낮 9시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "友達",
      "は",
      "昼",
      "九時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 265,
    "sentence": "友達は夜十時に起きます。",
    "reading": "ともだちはよるじゅうじにおきます。",
    "romaji": "tomodachi wa yoru juuji ni okimasu.",
    "meaning": "친구는 밤 10시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "友達",
      "は",
      "夜",
      "十時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 266,
    "sentence": "先生は毎日六時に勉強します。",
    "reading": "せんせいはまいにちろくじにべんきょうします。",
    "romaji": "sensei wa mainichi rokuji ni benkyoushimasu.",
    "meaning": "선생님은 매일 6시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "先生",
      "は",
      "毎日",
      "六時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 267,
    "sentence": "先生は朝七時に働きます。",
    "reading": "せんせいはあさしちじにはたらきます。",
    "romaji": "sensei wa asa shichiji ni hatarakimasu.",
    "meaning": "선생님은 아침 7시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "先生",
      "は",
      "朝",
      "七時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 268,
    "sentence": "先生は昼八時に帰ります。",
    "reading": "せんせいはひるはちじにかえります。",
    "romaji": "sensei wa hiru hachiji ni kaerimasu.",
    "meaning": "선생님은 낮 8시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "先生",
      "は",
      "昼",
      "八時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 269,
    "sentence": "先生は夜九時に起きます。",
    "reading": "せんせいはよるくじにおきます。",
    "romaji": "sensei wa yoru kuji ni okimasu.",
    "meaning": "선생님은 밤 9시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "先生",
      "は",
      "夜",
      "九時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 270,
    "sentence": "先生は毎日十時に寝ます。",
    "reading": "せんせいはまいにちじゅうじにねます。",
    "romaji": "sensei wa mainichi juuji ni nemasu.",
    "meaning": "선생님은 매일 10시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "先生",
      "は",
      "毎日",
      "十時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 271,
    "sentence": "学生は朝六時に働きます。",
    "reading": "がくせいはあさろくじにはたらきます。",
    "romaji": "gakusei wa asa rokuji ni hatarakimasu.",
    "meaning": "학생은 아침 6시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "学生",
      "は",
      "朝",
      "六時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 272,
    "sentence": "学生は昼七時に帰ります。",
    "reading": "がくせいはひるしちじにかえります。",
    "romaji": "gakusei wa hiru shichiji ni kaerimasu.",
    "meaning": "학생은 낮 7시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "学生",
      "は",
      "昼",
      "七時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 273,
    "sentence": "学生は夜八時に起きます。",
    "reading": "がくせいはよるはちじにおきます。",
    "romaji": "gakusei wa yoru hachiji ni okimasu.",
    "meaning": "학생은 밤 8시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "学生",
      "は",
      "夜",
      "八時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 274,
    "sentence": "学生は毎日九時に寝ます。",
    "reading": "がくせいはまいにちくじにねます。",
    "romaji": "gakusei wa mainichi kuji ni nemasu.",
    "meaning": "학생은 매일 9시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "学生",
      "は",
      "毎日",
      "九時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 275,
    "sentence": "学生は朝十時に勉強します。",
    "reading": "がくせいはあさじゅうじにべんきょうします。",
    "romaji": "gakusei wa asa juuji ni benkyoushimasu.",
    "meaning": "학생은 아침 10시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "学生",
      "は",
      "朝",
      "十時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 276,
    "sentence": "社長は昼六時に帰ります。",
    "reading": "しゃちょうはひるろくじにかえります。",
    "romaji": "shachou wa hiru rokuji ni kaerimasu.",
    "meaning": "사장님은 낮 6시에 돌아갑니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "社長",
      "は",
      "昼",
      "六時",
      "に",
      "帰ります",
      "。"
    ]
  },
  {
    "id": 277,
    "sentence": "社長は夜七時に起きます。",
    "reading": "しゃちょうはよるしちじにおきます。",
    "romaji": "shachou wa yoru shichiji ni okimasu.",
    "meaning": "사장님은 밤 7시에 일어납니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "社長",
      "は",
      "夜",
      "七時",
      "に",
      "起きます",
      "。"
    ]
  },
  {
    "id": 278,
    "sentence": "社長は毎日八時に寝ます。",
    "reading": "しゃちょうはまいにちはちじにねます。",
    "romaji": "shachou wa mainichi hachiji ni nemasu.",
    "meaning": "사장님은 매일 8시에 잡니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "社長",
      "は",
      "毎日",
      "八時",
      "に",
      "寝ます",
      "。"
    ]
  },
  {
    "id": 279,
    "sentence": "社長は朝九時に勉強します。",
    "reading": "しゃちょうはあさくじにべんきょうします。",
    "romaji": "shachou wa asa kuji ni benkyoushimasu.",
    "meaning": "사장님은 아침 9시에 공부합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "社長",
      "は",
      "朝",
      "九時",
      "に",
      "勉強します",
      "。"
    ]
  },
  {
    "id": 280,
    "sentence": "社長は昼十時に働きます。",
    "reading": "しゃちょうはひるじゅうじにはたらきます。",
    "romaji": "shachou wa hiru juuji ni hatarakimasu.",
    "meaning": "사장님은 낮 10시에 일합니다.",
    "level": "beginner",
    "category": "time",
    "tokens": [
      "社長",
      "は",
      "昼",
      "十時",
      "に",
      "働きます",
      "。"
    ]
  },
  {
    "id": 281,
    "sentence": "この映画は美味しいです。",
    "reading": "このえいがはおいしいです。",
    "romaji": "kono eiga wa oishii desu.",
    "meaning": "이 영화는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 282,
    "sentence": "この映画は面白いです。",
    "reading": "このえいがはおもしろいです。",
    "romaji": "kono eiga wa omoshiroi desu.",
    "meaning": "이 영화는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 283,
    "sentence": "この映画は新しいです。",
    "reading": "このえいがはあたらしいです。",
    "romaji": "kono eiga wa atarashii desu.",
    "meaning": "이 영화는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 284,
    "sentence": "この映画は綺麗です。",
    "reading": "このえいがはきれいです。",
    "romaji": "kono eiga wa kirei desu.",
    "meaning": "이 영화는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 285,
    "sentence": "この映画は静かです。",
    "reading": "このえいがはしずかです。",
    "romaji": "kono eiga wa shizuka desu.",
    "meaning": "이 영화는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 286,
    "sentence": "この映画は賑やかです。",
    "reading": "このえいがはにぎやかです。",
    "romaji": "kono eiga wa nigiyaka desu.",
    "meaning": "이 영화는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 287,
    "sentence": "この映画は簡単です。",
    "reading": "このえいがはかんたんです。",
    "romaji": "kono eiga wa kantan desu.",
    "meaning": "이 영화는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 288,
    "sentence": "この映画は難しいです。",
    "reading": "このえいがはむずかしいです。",
    "romaji": "kono eiga wa muzukashii desu.",
    "meaning": "이 영화는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 289,
    "sentence": "この映画は忙しいです。",
    "reading": "このえいがはいそがしいです。",
    "romaji": "kono eiga wa isogashii desu.",
    "meaning": "이 영화는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この映画",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 290,
    "sentence": "その日本語は面白いです。",
    "reading": "そのにほんごはおもしろいです。",
    "romaji": "sono nihongo wa omoshiroi desu.",
    "meaning": "그 일본어는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 291,
    "sentence": "その日本語は新しいです。",
    "reading": "そのにほんごはあたらしいです。",
    "romaji": "sono nihongo wa atarashii desu.",
    "meaning": "그 일본어는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 292,
    "sentence": "その日本語は綺麗です。",
    "reading": "そのにほんごはきれいです。",
    "romaji": "sono nihongo wa kirei desu.",
    "meaning": "그 일본어는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 293,
    "sentence": "その日本語は静かです。",
    "reading": "そのにほんごはしずかです。",
    "romaji": "sono nihongo wa shizuka desu.",
    "meaning": "그 일본어는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 294,
    "sentence": "その日本語は賑やかです。",
    "reading": "そのにほんごはにぎやかです。",
    "romaji": "sono nihongo wa nigiyaka desu.",
    "meaning": "그 일본어는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 295,
    "sentence": "その日本語は簡単です。",
    "reading": "そのにほんごはかんたんです。",
    "romaji": "sono nihongo wa kantan desu.",
    "meaning": "그 일본어는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 296,
    "sentence": "その日本語は難しいです。",
    "reading": "そのにほんごはむずかしいです。",
    "romaji": "sono nihongo wa muzukashii desu.",
    "meaning": "그 일본어는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 297,
    "sentence": "その日本語は忙しいです。",
    "reading": "そのにほんごはいそがしいです。",
    "romaji": "sono nihongo wa isogashii desu.",
    "meaning": "그 일본어는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 298,
    "sentence": "その日本語は美味しいです。",
    "reading": "そのにほんごはおいしいです。",
    "romaji": "sono nihongo wa oishii desu.",
    "meaning": "그 일본어는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "その日本語",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 299,
    "sentence": "あの学校は新しいです。",
    "reading": "あのがっこうはあたらしいです。",
    "romaji": "ano gakkou wa atarashii desu.",
    "meaning": "저 학교는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 300,
    "sentence": "あの学校は綺麗です。",
    "reading": "あのがっこうはきれいです。",
    "romaji": "ano gakkou wa kirei desu.",
    "meaning": "저 학교는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 301,
    "sentence": "あの学校は静かです。",
    "reading": "あのがっこうはしずかです。",
    "romaji": "ano gakkou wa shizuka desu.",
    "meaning": "저 학교는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 302,
    "sentence": "あの学校は賑やかです。",
    "reading": "あのがっこうはにぎやかです。",
    "romaji": "ano gakkou wa nigiyaka desu.",
    "meaning": "저 학교는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 303,
    "sentence": "あの学校は簡単です。",
    "reading": "あのがっこうはかんたんです。",
    "romaji": "ano gakkou wa kantan desu.",
    "meaning": "저 학교는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 304,
    "sentence": "あの学校は難しいです。",
    "reading": "あのがっこうはむずかしいです。",
    "romaji": "ano gakkou wa muzukashii desu.",
    "meaning": "저 학교는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 305,
    "sentence": "あの学校は忙しいです。",
    "reading": "あのがっこうはいそがしいです。",
    "romaji": "ano gakkou wa isogashii desu.",
    "meaning": "저 학교는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 306,
    "sentence": "あの学校は美味しいです。",
    "reading": "あのがっこうはおいしいです。",
    "romaji": "ano gakkou wa oishii desu.",
    "meaning": "저 학교는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 307,
    "sentence": "あの学校は面白いです。",
    "reading": "あのがっこうはおもしろいです。",
    "romaji": "ano gakkou wa omoshiroi desu.",
    "meaning": "저 학교는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの学校",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 308,
    "sentence": "今日の天気は綺麗です。",
    "reading": "きょうのてんきはきれいです。",
    "romaji": "kyou no tenki wa kirei desu.",
    "meaning": "오늘 날씨는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 309,
    "sentence": "今日の天気は静かです。",
    "reading": "きょうのてんきはしずかです。",
    "romaji": "kyou no tenki wa shizuka desu.",
    "meaning": "오늘 날씨는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 310,
    "sentence": "今日の天気は賑やかです。",
    "reading": "きょうのてんきはにぎやかです。",
    "romaji": "kyou no tenki wa nigiyaka desu.",
    "meaning": "오늘 날씨는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 311,
    "sentence": "今日の天気は簡単です。",
    "reading": "きょうのてんきはかんたんです。",
    "romaji": "kyou no tenki wa kantan desu.",
    "meaning": "오늘 날씨는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 312,
    "sentence": "今日の天気は難しいです。",
    "reading": "きょうのてんきはむずかしいです。",
    "romaji": "kyou no tenki wa muzukashii desu.",
    "meaning": "오늘 날씨는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 313,
    "sentence": "今日の天気は忙しいです。",
    "reading": "きょうのてんきはいそがしいです。",
    "romaji": "kyou no tenki wa isogashii desu.",
    "meaning": "오늘 날씨는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 314,
    "sentence": "今日の天気は美味しいです。",
    "reading": "きょうのてんきはおいしいです。",
    "romaji": "kyou no tenki wa oishii desu.",
    "meaning": "오늘 날씨는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 315,
    "sentence": "今日の天気は面白いです。",
    "reading": "きょうのてんきはおもしろいです。",
    "romaji": "kyou no tenki wa omoshiroi desu.",
    "meaning": "오늘 날씨는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 316,
    "sentence": "今日の天気は新しいです。",
    "reading": "きょうのてんきはあたらしいです。",
    "romaji": "kyou no tenki wa atarashii desu.",
    "meaning": "오늘 날씨는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "今日の天気",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 317,
    "sentence": "日本料理は静かです。",
    "reading": "にほんりょうりはしずかです。",
    "romaji": "nihon ryouri wa shizuka desu.",
    "meaning": "일본 요리는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 318,
    "sentence": "日本料理は賑やかです。",
    "reading": "にほんりょうりはにぎやかです。",
    "romaji": "nihon ryouri wa nigiyaka desu.",
    "meaning": "일본 요리는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 319,
    "sentence": "日本料理は簡単です。",
    "reading": "にほんりょうりはかんたんです。",
    "romaji": "nihon ryouri wa kantan desu.",
    "meaning": "일본 요리는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 320,
    "sentence": "日本料理は難しいです。",
    "reading": "にほんりょうりはむずかしいです。",
    "romaji": "nihon ryouri wa muzukashii desu.",
    "meaning": "일본 요리는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 321,
    "sentence": "日本料理は忙しいです。",
    "reading": "にほんりょうりはいそがしいです。",
    "romaji": "nihon ryouri wa isogashii desu.",
    "meaning": "일본 요리는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 322,
    "sentence": "日本料理は美味しいです。",
    "reading": "にほんりょうりはおいしいです。",
    "romaji": "nihon ryouri wa oishii desu.",
    "meaning": "일본 요리는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 323,
    "sentence": "日本料理は面白いです。",
    "reading": "にほんりょうりはおもしろいです。",
    "romaji": "nihon ryouri wa omoshiroi desu.",
    "meaning": "일본 요리는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 324,
    "sentence": "日本料理は新しいです。",
    "reading": "にほんりょうりはあたらしいです。",
    "romaji": "nihon ryouri wa atarashii desu.",
    "meaning": "일본 요리는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 325,
    "sentence": "日本料理は綺麗です。",
    "reading": "にほんりょうりはきれいです。",
    "romaji": "nihon ryouri wa kirei desu.",
    "meaning": "일본 요리는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "日本料理",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 326,
    "sentence": "私の部屋は賑やかです。",
    "reading": "わたしのへやはにぎやかです。",
    "romaji": "watashi no heya wa nigiyaka desu.",
    "meaning": "내 방은 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 327,
    "sentence": "私の部屋は簡単です。",
    "reading": "わたしのへやはかんたんです。",
    "romaji": "watashi no heya wa kantan desu.",
    "meaning": "내 방은 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 328,
    "sentence": "私の部屋は難しいです。",
    "reading": "わたしのへやはむずかしいです。",
    "romaji": "watashi no heya wa muzukashii desu.",
    "meaning": "내 방은 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 329,
    "sentence": "私の部屋は忙しいです。",
    "reading": "わたしのへやはいそがしいです。",
    "romaji": "watashi no heya wa isogashii desu.",
    "meaning": "내 방은 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 330,
    "sentence": "私の部屋は美味しいです。",
    "reading": "わたしのへやはおいしいです。",
    "romaji": "watashi no heya wa oishii desu.",
    "meaning": "내 방은 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 331,
    "sentence": "私の部屋は面白いです。",
    "reading": "わたしのへやはおもしろいです。",
    "romaji": "watashi no heya wa omoshiroi desu.",
    "meaning": "내 방은 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 332,
    "sentence": "私の部屋は新しいです。",
    "reading": "わたしのへやはあたらしいです。",
    "romaji": "watashi no heya wa atarashii desu.",
    "meaning": "내 방은 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 333,
    "sentence": "私の部屋は綺麗です。",
    "reading": "わたしのへやはきれいです。",
    "romaji": "watashi no heya wa kirei desu.",
    "meaning": "내 방은 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 334,
    "sentence": "私の部屋は静かです。",
    "reading": "わたしのへやはしずかです。",
    "romaji": "watashi no heya wa shizuka desu.",
    "meaning": "내 방은 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の部屋",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 335,
    "sentence": "私の仕事は簡単です。",
    "reading": "わたしのしごとはかんたんです。",
    "romaji": "watashi no shigoto wa kantan desu.",
    "meaning": "내 일은 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 336,
    "sentence": "私の仕事は難しいです。",
    "reading": "わたしのしごとはむずかしいです。",
    "romaji": "watashi no shigoto wa muzukashii desu.",
    "meaning": "내 일은 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 337,
    "sentence": "私の仕事は忙しいです。",
    "reading": "わたしのしごとはいそがしいです。",
    "romaji": "watashi no shigoto wa isogashii desu.",
    "meaning": "내 일은 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 338,
    "sentence": "私の仕事は美味しいです。",
    "reading": "わたしのしごとはおいしいです。",
    "romaji": "watashi no shigoto wa oishii desu.",
    "meaning": "내 일은 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 339,
    "sentence": "私の仕事は面白いです。",
    "reading": "わたしのしごとはおもしろいです。",
    "romaji": "watashi no shigoto wa omoshiroi desu.",
    "meaning": "내 일은 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 340,
    "sentence": "私の仕事は新しいです。",
    "reading": "わたしのしごとはあたらしいです。",
    "romaji": "watashi no shigoto wa atarashii desu.",
    "meaning": "내 일은 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 341,
    "sentence": "私の仕事は綺麗です。",
    "reading": "わたしのしごとはきれいです。",
    "romaji": "watashi no shigoto wa kirei desu.",
    "meaning": "내 일은 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 342,
    "sentence": "私の仕事は静かです。",
    "reading": "わたしのしごとはしずかです。",
    "romaji": "watashi no shigoto wa shizuka desu.",
    "meaning": "내 일은 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 343,
    "sentence": "私の仕事は賑やかです。",
    "reading": "わたしのしごとはにぎやかです。",
    "romaji": "watashi no shigoto wa nigiyaka desu.",
    "meaning": "내 일은 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "私の仕事",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 344,
    "sentence": "この街は難しいです。",
    "reading": "このまちはむずかしいです。",
    "romaji": "kono machi wa muzukashii desu.",
    "meaning": "이 거리는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 345,
    "sentence": "この街は忙しいです。",
    "reading": "このまちはいそがしいです。",
    "romaji": "kono machi wa isogashii desu.",
    "meaning": "이 거리는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 346,
    "sentence": "この街は美味しいです。",
    "reading": "このまちはおいしいです。",
    "romaji": "kono machi wa oishii desu.",
    "meaning": "이 거리는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 347,
    "sentence": "この街は面白いです。",
    "reading": "このまちはおもしろいです。",
    "romaji": "kono machi wa omoshiroi desu.",
    "meaning": "이 거리는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 348,
    "sentence": "この街は新しいです。",
    "reading": "このまちはあたらしいです。",
    "romaji": "kono machi wa atarashii desu.",
    "meaning": "이 거리는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 349,
    "sentence": "この街は綺麗です。",
    "reading": "このまちはきれいです。",
    "romaji": "kono machi wa kirei desu.",
    "meaning": "이 거리는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 350,
    "sentence": "この街は静かです。",
    "reading": "このまちはしずかです。",
    "romaji": "kono machi wa shizuka desu.",
    "meaning": "이 거리는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 351,
    "sentence": "この街は賑やかです。",
    "reading": "このまちはにぎやかです。",
    "romaji": "kono machi wa nigiyaka desu.",
    "meaning": "이 거리는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 352,
    "sentence": "この街は簡単です。",
    "reading": "このまちはかんたんです。",
    "romaji": "kono machi wa kantan desu.",
    "meaning": "이 거리는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "この街",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 353,
    "sentence": "あの先生は忙しいです。",
    "reading": "あのせんせいはいそがしいです。",
    "romaji": "ano sensei wa isogashii desu.",
    "meaning": "저 선생님은 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 354,
    "sentence": "あの先生は美味しいです。",
    "reading": "あのせんせいはおいしいです。",
    "romaji": "ano sensei wa oishii desu.",
    "meaning": "저 선생님은 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 355,
    "sentence": "あの先生は面白いです。",
    "reading": "あのせんせいはおもしろいです。",
    "romaji": "ano sensei wa omoshiroi desu.",
    "meaning": "저 선생님은 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 356,
    "sentence": "あの先生は新しいです。",
    "reading": "あのせんせいはあたらしいです。",
    "romaji": "ano sensei wa atarashii desu.",
    "meaning": "저 선생님은 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 357,
    "sentence": "あの先生は綺麗です。",
    "reading": "あのせんせいはきれいです。",
    "romaji": "ano sensei wa kirei desu.",
    "meaning": "저 선생님은 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 358,
    "sentence": "あの先生は静かです。",
    "reading": "あのせんせいはしずかです。",
    "romaji": "ano sensei wa shizuka desu.",
    "meaning": "저 선생님은 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 359,
    "sentence": "あの先生は賑やかです。",
    "reading": "あのせんせいはにぎやかです。",
    "romaji": "ano sensei wa nigiyaka desu.",
    "meaning": "저 선생님은 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 360,
    "sentence": "あの先生は簡単です。",
    "reading": "あのせんせいはかんたんです。",
    "romaji": "ano sensei wa kantan desu.",
    "meaning": "저 선생님은 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 361,
    "sentence": "あの先生は難しいです。",
    "reading": "あのせんせいはむずかしいです。",
    "romaji": "ano sensei wa muzukashii desu.",
    "meaning": "저 선생님은 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "あの先生",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 362,
    "sentence": "韓国の料理は美味しいです。",
    "reading": "かんこくのりょうりはおいしいです。",
    "romaji": "kankoku no ryouri wa oishii desu.",
    "meaning": "한국 요리는 맛있습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "美味しいです",
      "。"
    ]
  },
  {
    "id": 363,
    "sentence": "韓国の料理は面白いです。",
    "reading": "かんこくのりょうりはおもしろいです。",
    "romaji": "kankoku no ryouri wa omoshiroi desu.",
    "meaning": "한국 요리는 재밌습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "面白いです",
      "。"
    ]
  },
  {
    "id": 364,
    "sentence": "韓国の料理は新しいです。",
    "reading": "かんこくのりょうりはあたらしいです。",
    "romaji": "kankoku no ryouri wa atarashii desu.",
    "meaning": "한국 요리는 새롭습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "新しいです",
      "。"
    ]
  },
  {
    "id": 365,
    "sentence": "韓国の料理は綺麗です。",
    "reading": "かんこくのりょうりはきれいです。",
    "romaji": "kankoku no ryouri wa kirei desu.",
    "meaning": "한국 요리는 깨끗합니다 / 예쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "綺麗です",
      "。"
    ]
  },
  {
    "id": 366,
    "sentence": "韓国の料理は静かです。",
    "reading": "かんこくのりょうりはしずかです。",
    "romaji": "kankoku no ryouri wa shizuka desu.",
    "meaning": "한국 요리는 조용합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "静かです",
      "。"
    ]
  },
  {
    "id": 367,
    "sentence": "韓国の料理は賑やかです。",
    "reading": "かんこくのりょうりはにぎやかです。",
    "romaji": "kankoku no ryouri wa nigiyaka desu.",
    "meaning": "한국 요리는 번화합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "賑やかです",
      "。"
    ]
  },
  {
    "id": 368,
    "sentence": "韓国の料理は簡単です。",
    "reading": "かんこくのりょうりはかんたんです。",
    "romaji": "kankoku no ryouri wa kantan desu.",
    "meaning": "한국 요리는 간단합니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "簡単です",
      "。"
    ]
  },
  {
    "id": 369,
    "sentence": "韓国の料理は難しいです。",
    "reading": "かんこくのりょうりはむずかしいです。",
    "romaji": "kankoku no ryouri wa muzukashii desu.",
    "meaning": "한국 요리는 어렵습니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "難しいです",
      "。"
    ]
  },
  {
    "id": 370,
    "sentence": "韓国の料理は忙しいです。",
    "reading": "かんこくのりょうりはいそがしいです。",
    "romaji": "kankoku no ryouri wa isogashii desu.",
    "meaning": "한국 요리는 바쁩니다.",
    "level": "beginner",
    "category": "adjective",
    "tokens": [
      "韓国の料理",
      "は",
      "忙しいです",
      "。"
    ]
  },
  {
    "id": 371,
    "sentence": "ご飯を食べてください。",
    "reading": "ごはんを食べてください。",
    "romaji": "gohan wo tabete kudasai.",
    "meaning": "밥을 먹어주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ご飯を",
      "食べて",
      "ください"
    ]
  },
  {
    "id": 372,
    "sentence": "ご飯を食べてもいいですか。",
    "reading": "ごはんを食べてもいいですか。",
    "romaji": "gohan wo tabete mo ii desu ka.",
    "meaning": "밥을 먹어도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ご飯を",
      "食べて",
      "もいいですか"
    ]
  },
  {
    "id": 373,
    "sentence": "ご飯を食べてはいけません。",
    "reading": "ごはんを食べてはいけません。",
    "romaji": "gohan wo tabete wa ikemasen.",
    "meaning": "밥을 먹어서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ご飯を",
      "食べて",
      "はいけません"
    ]
  },
  {
    "id": 374,
    "sentence": "ご飯を食べています。",
    "reading": "ごはんを食べています。",
    "romaji": "gohan wo tabete imasu.",
    "meaning": "밥을 먹어고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ご飯を",
      "食べて",
      "います"
    ]
  },
  {
    "id": 375,
    "sentence": "ご飯を食べてみてください。",
    "reading": "ごはんを食べてみてください。",
    "romaji": "gohan wo tabete mite kudasai.",
    "meaning": "밥을 먹어해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ご飯を",
      "食べて",
      "みてください"
    ]
  },
  {
    "id": 376,
    "sentence": "お水を飲んでください。",
    "reading": "おみず을飲んでください。",
    "romaji": "omizu wo nonde kudasai.",
    "meaning": "물을 마셔주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "お水を",
      "飲んで",
      "ください"
    ]
  },
  {
    "id": 377,
    "sentence": "お水を飲んでもいいですか。",
    "reading": "おみず을飲んでもいいですか。",
    "romaji": "omizu wo nonde mo ii desu ka.",
    "meaning": "물을 마셔도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "お水を",
      "飲んで",
      "もいいですか"
    ]
  },
  {
    "id": 378,
    "sentence": "お水を飲んではいけません。",
    "reading": "おみず을飲んではいけません。",
    "romaji": "omizu wo nonde wa ikemasen.",
    "meaning": "물을 마셔서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "お水を",
      "飲んで",
      "はいけません"
    ]
  },
  {
    "id": 379,
    "sentence": "お水を飲んでいます。",
    "reading": "おみず을飲んでいます。",
    "romaji": "omizu wo nonde imasu.",
    "meaning": "물을 마셔고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "お水を",
      "飲んで",
      "います"
    ]
  },
  {
    "id": 380,
    "sentence": "お水を飲んでみてください。",
    "reading": "おみず을飲んでみてください。",
    "romaji": "omizu wo nonde mite kudasai.",
    "meaning": "물을 마셔해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "お水を",
      "飲んで",
      "みてください"
    ]
  },
  {
    "id": 381,
    "sentence": "学校に行ってください。",
    "reading": "がっこうに行ってください。",
    "romaji": "gakkou ni itte kudasai.",
    "meaning": "학교에 가주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "学校に",
      "行って",
      "ください"
    ]
  },
  {
    "id": 382,
    "sentence": "学校に行ってもいいですか。",
    "reading": "がっこうに行ってもいいですか。",
    "romaji": "gakkou ni itte mo ii desu ka.",
    "meaning": "학교에 가도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "学校に",
      "行って",
      "もいいですか"
    ]
  },
  {
    "id": 383,
    "sentence": "学校に行ってはいけません。",
    "reading": "がっこうに行ってはいけません。",
    "romaji": "gakkou ni itte wa ikemasen.",
    "meaning": "학교에 가서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "学校に",
      "行って",
      "はいけません"
    ]
  },
  {
    "id": 384,
    "sentence": "学校に行っています。",
    "reading": "がっこうに行っています。",
    "romaji": "gakkou ni itte imasu.",
    "meaning": "학교에 가고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "学校に",
      "行って",
      "います"
    ]
  },
  {
    "id": 385,
    "sentence": "学校に行ってみてください。",
    "reading": "がっこうに行ってみてください。",
    "romaji": "gakkou ni itte mite kudasai.",
    "meaning": "학교에 가해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "学校に",
      "行って",
      "みてください"
    ]
  },
  {
    "id": 386,
    "sentence": "ここへ来てください。",
    "reading": "ここへ来てください。",
    "romaji": "koko e kite kudasai.",
    "meaning": "여기에 와주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ここへ",
      "来て",
      "ください"
    ]
  },
  {
    "id": 387,
    "sentence": "ここへ来てもいいですか。",
    "reading": "ここへ来てもいいですか。",
    "romaji": "koko e kite mo ii desu ka.",
    "meaning": "여기에 와도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ここへ",
      "来て",
      "もいいですか"
    ]
  },
  {
    "id": 388,
    "sentence": "ここへ来てはいけません。",
    "reading": "ここへ来てはいけません。",
    "romaji": "koko e kite wa ikemasen.",
    "meaning": "여기에 와서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ここへ",
      "来て",
      "はいけません"
    ]
  },
  {
    "id": 389,
    "sentence": "ここへ来ています。",
    "reading": "ここへ来ています。",
    "romaji": "koko e kite imasu.",
    "meaning": "여기에 와고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ここへ",
      "来て",
      "います"
    ]
  },
  {
    "id": 390,
    "sentence": "ここへ来てみてください。",
    "reading": "ここへ来てみてください。",
    "romaji": "koko e kite mite kudasai.",
    "meaning": "여기에 와해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ここへ",
      "来て",
      "みてください"
    ]
  },
  {
    "id": 391,
    "sentence": "映画を見てください。",
    "reading": "えいがを見てください。",
    "romaji": "eiga wo mite kudasai.",
    "meaning": "영화를 봐주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "映画を",
      "見て",
      "ください"
    ]
  },
  {
    "id": 392,
    "sentence": "映画を見てもいいですか。",
    "reading": "えいがを見てもいいですか。",
    "romaji": "eiga wo mite mo ii desu ka.",
    "meaning": "영화를 봐도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "映画を",
      "見て",
      "もいいですか"
    ]
  },
  {
    "id": 393,
    "sentence": "映画を見てはいけません。",
    "reading": "えいがを見てはいけません。",
    "romaji": "eiga wo mite wa ikemasen.",
    "meaning": "영화를 봐서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "映画を",
      "見て",
      "はいけません"
    ]
  },
  {
    "id": 394,
    "sentence": "映画を見ています。",
    "reading": "えいがを見ています。",
    "romaji": "eiga wo mite imasu.",
    "meaning": "영화를 봐고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "映画を",
      "見て",
      "います"
    ]
  },
  {
    "id": 395,
    "sentence": "映画を見てみてください。",
    "reading": "えいがを見てみてください。",
    "romaji": "eiga wo mite mite kudasai.",
    "meaning": "영화를 봐해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "映画を",
      "見て",
      "みてください"
    ]
  },
  {
    "id": 396,
    "sentence": "ラジオを聞いてください。",
    "reading": "らじおを聞いてください。",
    "romaji": "rajio wo kiite kudasai.",
    "meaning": "라디오를 들어주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ラジオを",
      "聞いて",
      "ください"
    ]
  },
  {
    "id": 397,
    "sentence": "ラジオを聞いてもいいですか。",
    "reading": "らじおを聞いてもいいですか。",
    "romaji": "rajio wo kiite mo ii desu ka.",
    "meaning": "라디오를 들어도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ラジオを",
      "聞いて",
      "もいいですか"
    ]
  },
  {
    "id": 398,
    "sentence": "ラジオを聞いてはいけません。",
    "reading": "らじおを聞いてはいけません。",
    "romaji": "rajio wo kiite wa ikemasen.",
    "meaning": "라디오를 들어서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ラジオを",
      "聞いて",
      "はいけません"
    ]
  },
  {
    "id": 399,
    "sentence": "ラジオを聞いています。",
    "reading": "らじおを聞いています。",
    "romaji": "rajio wo kiite imasu.",
    "meaning": "라디오를 들어고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ラジオを",
      "聞いて",
      "います"
    ]
  },
  {
    "id": 400,
    "sentence": "ラジオを聞いてみてください。",
    "reading": "らじおを聞いてみてください。",
    "romaji": "rajio wo kiite mite kudasai.",
    "meaning": "라디오를 들어해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ラジオを",
      "聞いて",
      "みてください"
    ]
  },
  {
    "id": 401,
    "sentence": "手紙を書いてください。",
    "reading": "てがみを書いてください。",
    "romaji": "tegami wo kaite kudasai.",
    "meaning": "편지를 써주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "手紙を",
      "書いて",
      "ください"
    ]
  },
  {
    "id": 402,
    "sentence": "手紙を書いてもいいですか。",
    "reading": "てがみを書いてもいいですか。",
    "romaji": "tegami wo kaite mo ii desu ka.",
    "meaning": "편지를 써도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "手紙を",
      "書いて",
      "もいいですか"
    ]
  },
  {
    "id": 403,
    "sentence": "手紙を書いてはいけません。",
    "reading": "てがみを書いてはいけません。",
    "romaji": "tegami wo kaite wa ikemasen.",
    "meaning": "편지를 써서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "手紙を",
      "書いて",
      "はいけません"
    ]
  },
  {
    "id": 404,
    "sentence": "手紙を書いています。",
    "reading": "てがみを書いています。",
    "romaji": "tegami wo kaite imasu.",
    "meaning": "편지를 써고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "手紙を",
      "書いて",
      "います"
    ]
  },
  {
    "id": 405,
    "sentence": "手紙を書いてみてください。",
    "reading": "てがみを書いてみてください。",
    "romaji": "tegami wo kaite mite kudasai.",
    "meaning": "편지를 써해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "手紙を",
      "書いて",
      "みてください"
    ]
  },
  {
    "id": 406,
    "sentence": "本を読んでください。",
    "reading": "ほんを読んでください。",
    "romaji": "hon wo yonde kudasai.",
    "meaning": "책을 읽어주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "本を",
      "読んで",
      "ください"
    ]
  },
  {
    "id": 407,
    "sentence": "本を読んでもいいですか。",
    "reading": "ほんを読んでもいいですか。",
    "romaji": "hon wo yonde mo ii desu ka.",
    "meaning": "책을 읽어도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "本を",
      "読んで",
      "もいいですか"
    ]
  },
  {
    "id": 408,
    "sentence": "本を読んではいけません。",
    "reading": "ほんを読んではいけません。",
    "romaji": "hon wo yonde wa ikemasen.",
    "meaning": "책을 읽어서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "本を",
      "読んで",
      "はいけません"
    ]
  },
  {
    "id": 409,
    "sentence": "本を読んでいます。",
    "reading": "ほんを読んでいます。",
    "romaji": "hon wo yonde imasu.",
    "meaning": "책을 읽어고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "本を",
      "読んで",
      "います"
    ]
  },
  {
    "id": 410,
    "sentence": "本を読んでみてください。",
    "reading": "ほんを読んでみてください。",
    "romaji": "hon wo yonde mite kudasai.",
    "meaning": "책을 읽어해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "本を",
      "読んで",
      "みてください"
    ]
  },
  {
    "id": 411,
    "sentence": "日本語で話してください。",
    "reading": "にほんごで話してください。",
    "romaji": "nihongo de hanashite kudasai.",
    "meaning": "일본어로 말해주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "日本語で",
      "話して",
      "ください"
    ]
  },
  {
    "id": 412,
    "sentence": "日本語で話してもいいですか。",
    "reading": "にほんごで話してもいいですか。",
    "romaji": "nihongo de hanashite mo ii desu ka.",
    "meaning": "일본어로 말해도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "日本語で",
      "話して",
      "もいいですか"
    ]
  },
  {
    "id": 413,
    "sentence": "日本語で話してはいけません。",
    "reading": "にほんごで話してはいけません。",
    "romaji": "nihongo de hanashite wa ikemasen.",
    "meaning": "일본어로 말해서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "日本語で",
      "話して",
      "はいけません"
    ]
  },
  {
    "id": 414,
    "sentence": "日本語で話しています。",
    "reading": "にほんごで話しています。",
    "romaji": "nihongo de hanashite imasu.",
    "meaning": "일본어로 말해고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "日本語で",
      "話して",
      "います"
    ]
  },
  {
    "id": 415,
    "sentence": "日本語で話してみてください。",
    "reading": "にほんごで話してみてください。",
    "romaji": "nihongo de hanashite mite kudasai.",
    "meaning": "일본어로 말해해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "日本語で",
      "話して",
      "みてください"
    ]
  },
  {
    "id": 416,
    "sentence": "ちょっと待ってください。",
    "reading": "ちょっと待ってください。",
    "romaji": "chotto matte kudasai.",
    "meaning": "잠깐 기다려주십시오.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ちょっと",
      "待って",
      "ください"
    ]
  },
  {
    "id": 417,
    "sentence": "ちょっと待ってもいいですか。",
    "reading": "ちょっと待ってもいいですか。",
    "romaji": "chotto matte mo ii desu ka.",
    "meaning": "잠깐 기다려도 되겠습니까?",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ちょっと",
      "待って",
      "もいいですか"
    ]
  },
  {
    "id": 418,
    "sentence": "ちょっと待ってはいけません。",
    "reading": "ちょっと待ってはいけません。",
    "romaji": "chotto matte wa ikemasen.",
    "meaning": "잠깐 기다려서는 안 됩니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ちょっと",
      "待って",
      "はいけません"
    ]
  },
  {
    "id": 419,
    "sentence": "ちょっと待っています。",
    "reading": "ちょっと待っています。",
    "romaji": "chotto matte imasu.",
    "meaning": "잠깐 기다려고 있습니다.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ちょっと",
      "待って",
      "います"
    ]
  },
  {
    "id": 420,
    "sentence": "ちょっと待ってみてください。",
    "reading": "ちょっと待ってみてください。",
    "romaji": "chotto matte mite kudasai.",
    "meaning": "잠깐 기다려해 보세요.",
    "level": "intermediate",
    "category": "grammar",
    "tokens": [
      "ちょっと",
      "待って",
      "みてください"
    ]
  },
  {
    "id": 421,
    "sentence": "日本語の勉強は大変ですが、面白いです。",
    "reading": "にほんごのべんきょうはたいへんですが、おもしろいです。",
    "romaji": "nihongo no benkyou wa taihen desu ga, omoshiroi desu.",
    "meaning": "일본어 공부는 힘들지만, 재밌습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "日本語",
      "의",
      "勉強",
      "は",
      "大変",
      "ですが",
      "、",
      "面白い",
      "です",
      "。"
    ]
  },
  {
    "id": 422,
    "sentence": "将来、日本の会社で働きたいと思っています。",
    "reading": "しょうらい、にほんのかいしゃではたらきたいとおもっています。",
    "romaji": "shourai, nihon no kaisha de hatarakitai to omotte imasu.",
    "meaning": "장래에, 일본 회사에서 일하고 싶다고 생각하고 있습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "将来",
      "、",
      "日本",
      "の",
      "会社",
      "で",
      "働きたい",
      "と",
      "思って",
      "います",
      "。"
    ]
  },
  {
    "id": 423,
    "sentence": "わからない単語があれば、辞書で調べてください。",
    "reading": "わからないたんごがあれば、じしょでしらべてください。",
    "romaji": "wakaranai tango ga areba, jisho de shirabete kudasai.",
    "meaning": "모르는 단어가 있다면, 사전으로 찾아보십시오.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "わからない",
      "単語",
      "が",
      "あれば",
      "、",
      "辞書",
      "で",
      "調べて",
      "ください",
      "。"
    ]
  },
  {
    "id": 424,
    "sentence": "日本の文化に興味を持つようになりました。",
    "reading": "にほんのぶんかにきょうみをもつようになりました。",
    "romaji": "nihon no bunka ni kyoumi wo motsu you ni narimashita.",
    "meaning": "일본 문화에 흥미를 가지게 되었습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "日本",
      "の",
      "文化",
      "に",
      "興味",
      "を",
      "持つ",
      "ように",
      "なりました",
      "。"
    ]
  },
  {
    "id": 425,
    "sentence": "昨日は友達と新宿で会って、ご飯を食べました。",
    "reading": "きのうはともだちとしんじゅくであって、ごはんをたべました。",
    "romaji": "kinou wa tomodachi to shinjuku de atte, gohan wo tabemashita.",
    "meaning": "어제는 친구와 신주쿠에서 만나서, 밥을 먹었습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "昨日",
      "は",
      "友達",
      "と",
      "新宿",
      "で",
      "会って",
      "、",
      "ご飯",
      "を",
      "食べました",
      "。"
    ]
  },
  {
    "id": 426,
    "sentence": "体にいいですから、毎日運動를することにしています。",
    "reading": "からだにいいですから、まいにちうんどうをすることにしています。",
    "romaji": "karada ni ii desu kara, mainichi undou wo suru koto ni shite imasu.",
    "meaning": "몸에 좋으니까, 매일 운동을 하기로 하고 있습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "体",
      "に",
      "いい",
      "ですから",
      "、",
      "毎日",
      "運動",
      "を",
      "する",
      "こと",
      "に",
      "して",
      "います",
      "。"
    ]
  },
  {
    "id": 427,
    "sentence": "図書館では静かにしなければなりません。",
    "reading": "としょかんではしずかにしなければなりません。",
    "romaji": "toshokan de wa shizuka ni shinakereba narimasen.",
    "meaning": "도서관에서는 조용히 해야만 합니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "図書館",
      "では",
      "静かに",
      "しなければ",
      "なりません",
      "。"
    ]
  },
  {
    "id": 428,
    "sentence": "風邪をひいたので、今日は会社を休むことにしました。",
    "reading": "かぜをひいたので、きょうはかいしゃをやすむことにしました。",
    "romaji": "kaze wo hiita node, kyou wa kaisha wo yasumu koto ni shimashita.",
    "meaning": "감기에 걸려서, 오늘은 회사를 쉬기로 결정했습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "風邪",
      "を",
      "ひいた",
      "ので",
      "、",
      "今日",
      "は",
      "会社",
      "を",
      "休む",
      "ことに",
      "しました",
      "。"
    ]
  },
  {
    "id": 429,
    "sentence": "この仕事を終えてから、遊びに行きましょう。",
    "reading": "このしごとをおえてから、あそびにいきましょう。",
    "romaji": "kono shigoto wo oete kara, asobi ni ikimashou.",
    "meaning": "이 일을 끝내고 나서, 놀러 갑시다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "この",
      "仕事",
      "を",
      "終えて",
      "から",
      "、",
      "遊び",
      "に",
      "行きましょう",
      "。"
    ]
  },
  {
    "id": 430,
    "sentence": "試験に合格できるように、一所懸命勉強します。",
    "reading": "しけんにごうかくできるように、いっしょけんめいべんきょうします。",
    "romaji": "shiken ni goukaku dekiru you ni, isshokenmei benkyou shimasu.",
    "meaning": "시험에 합격할 수 있도록, 열심히 공부하겠습니다.",
    "level": "intermediate",
    "category": "conversation",
    "tokens": [
      "試験",
      "に",
      "合格",
      "できる",
      "ように",
      "、",
      "一生懸命",
      "勉強します",
      "。"
    ]
  }
];
