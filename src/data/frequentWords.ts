export interface FrequentWord {
  id: number;
  russian: string;
  romanization: string;
  korean: string;
  exampleRussian: string;
  exampleRomanization: string;
  exampleKorean: string;
}
export interface Chapter {
    id: number;
    title: string;
    words: FrequentWord[];
}

export const frequentWords: FrequentWord[] = [
  {
    id: 1,
    russian: "я",
    romanization: "ya",
    korean: "나",
    exampleRussian: "Я студент.",
    exampleRomanization: "Ya student.",
    exampleKorean: "나는 학생입니다."
  },
  {
    id: 2,
    russian: "ты",
    romanization: "ty",
    korean: "너",
    exampleRussian: "Ты мой друг?",
    exampleRomanization: "Ty moy drug?",
    exampleKorean: "너는 내 친구니?"
  },
  {
    id: 3,
    russian: "он",
    romanization: "on",
    korean: "그",
    exampleRussian: "Он врач.",
    exampleRomanization: "On vrach.",
    exampleKorean: "그는 의사입니다."
  },
  {
    id: 4,
    russian: "она",
    romanization: "ona",
    korean: "그녀",
    exampleRussian: "Она учитель.",
    exampleRomanization: "Ona uchitel'.",
    exampleKorean: "그녀는 선생님입니다."
  },
  {
    id: 5,
    russian: "оно",
    romanization: "ono",
    korean: "그것",
    exampleRussian: "Оно красивое.",
    exampleRomanization: "Ono krasivoye.",
    exampleKorean: "그것은 아름답습니다."
  },
  {
    id: 6,
    russian: "мы",
    romanization: "my",
    korean: "우리",
    exampleRussian: "Мы друзья.",
    exampleRomanization: "My druz'ya.",
    exampleKorean: "우리는 친구들입니다."
  },
  {
    id: 7,
    russian: "вы",
    romanization: "vy",
    korean: "당신들",
    exampleRussian: "Вы говорите по-русски?",
    exampleRomanization: "Vy govorite po-russki?",
    exampleKorean: "당신들은 러시아어를 하십니까?"
  },
  {
    id: 8,
    russian: "они",
    romanization: "oni",
    korean: "그들",
    exampleRussian: "Они студенты.",
    exampleRomanization: "Oni studenty.",
    exampleKorean: "그들은 학생들입니다."
  },
  {
    id: 9,
    russian: "быть",
    romanization: "byt'",
    korean: "있다",
    exampleRussian: "Я буду дома.",
    exampleRomanization: "Ya budu doma.",
    exampleKorean: "나는 집에 있을 것입니다."
  },
  {
    id: 10,
    russian: "иметь",
    romanization: "imet'",
    korean: "가지다",
    exampleRussian: "У меня есть книга.",
    exampleRomanization: "U menya yest' kniga.",
    exampleKorean: "나는 책을 가지고 있습니다."
  },
  {
    id: 11,
    russian: "делать",
    romanization: "delat'",
    korean: "하다",
    exampleRussian: "Что ты делаешь?",
    exampleRomanization: "Chto ty delayesh'?",
    exampleKorean: "너는 무엇을 하고 있니?"
  },
  {
    id: 12,
    russian: "говорить",
    romanization: "govorit'",
    korean: "말하다",
    exampleRussian: "Я говорю по-русски.",
    exampleRomanization: "Ya govoryu po-russki.",
    exampleKorean: "나는 러시아어로 말합니다."
  },
  {
    id: 13,
    russian: "идти",
    romanization: "idti",
    korean: "가다",
    exampleRussian: "Я иду в школу.",
    exampleRomanization: "Ya idu v shkolu.",
    exampleKorean: "나는 학교에 갑니다."
  },
  {
    id: 14,
    russian: "видеть",
    romanization: "videt'",
    korean: "보다",
    exampleRussian: "Я вижу птицу.",
    exampleRomanization: "Ya vizhu ptitsu.",
    exampleKorean: "나는 새를 봅니다."
  },
  {
    id: 15,
    russian: "знать",
    romanization: "znat'",
    korean: "알다",
    exampleRussian: "Я знаю этот город.",
    exampleRomanization: "Ya znayu etot gorod.",
    exampleKorean: "나는 이 도시를 압니다."
  },
  {
    id: 16,
    russian: "мочь",
    romanization: "moch'",
    korean: "할 수 있다",
    exampleRussian: "Я могу помочь.",
    exampleRomanization: "Ya mogu pomoch'.",
    exampleKorean: "나는 도울 수 있습니다."
  },
  {
    id: 17,
    russian: "хотеть",
    romanization: "khotet'",
    korean: "원하다",
    exampleRussian: "Я хочу пить.",
    exampleRomanization: "Ya khochu pit'.",
    exampleKorean: "나는 마시고 싶습니다."
  },
  {
    id: 18,
    russian: "думать",
    romanization: "dumat'",
    korean: "생각하다",
    exampleRussian: "О чём ты думаешь?",
    exampleRomanization: "O chyom ty dumayesh'?",
    exampleKorean: "너는 무엇을 생각하고 있니?"
  },
  {
    id: 19,
    russian: "сказать",
    romanization: "skazat'",
    korean: "말하다 (완료형)",
    exampleRussian: "Что ты сказал?",
    exampleRomanization: "Chto ty skazal?",
    exampleKorean: "너는 무엇을 말했니?"
  },
  {
    id: 20,
    russian: "дать",
    romanization: "dat'",
    korean: "주다",
    exampleRussian: "Дай мне книгу, пожалуйста.",
    exampleRomanization: "Day mne knigu, pozhaluysta.",
    exampleKorean: "책을 주세요."
  },
  {
    id: 21,
    russian: "работать",
    romanization: "rabotat'",
    korean: "일하다",
    exampleRussian: "Я работаю в офисе.",
    exampleRomanization: "Ya rabotayu v ofise.",
    exampleKorean: "나는 사무실에서 일합니다."
  },
  {
    id: 22,
    russian: "жить",
    romanization: "zhit'",
    korean: "살다",
    exampleRussian: "Я живу в Москве.",
    exampleRomanization: "Ya zhivu v Moskve.",
    exampleKorean: "나는 모스크바에 삽니다."
  },
  {
    id: 23,
    russian: "нравиться",
    romanization: "nravit'sya",
    korean: "좋아하다",
    exampleRussian: "Мне нравится эта книга.",
    exampleRomanization: "Mne nravitsya eta kniga.",
    exampleKorean: "나는 이 책이 좋습니다."
  },
  {
    id: 24,
    russian: "любить",
    romanization: "lyubit'",
    korean: "사랑하다",
    exampleRussian: "Я люблю свою семью.",
    exampleRomanization: "Ya lyublyu svoyu sem'yu.",
    exampleKorean: "나는 내 가족을 사랑합니다."
  },
  {
    id: 25,
    russian: "время",
    romanization: "vremya",
    korean: "시간",
    exampleRussian: "У меня нет времени.",
    exampleRomanization: "U menya net vremeni.",
    exampleKorean: "나는 시간이 없습니다."
  },
  {
    id: 26,
    russian: "день",
    romanization: "den'",
    korean: "날",
    exampleRussian: "Сегодня хороший день.",
    exampleRomanization: "Segodnya khoroshiy den'.",
    exampleKorean: "오늘은 좋은 날입니다."
  },
  {
    id: 27,
    russian: "год",
    romanization: "god",
    korean: "년",
    exampleRussian: "Мне 25 лет.",
    exampleRomanization: "Mne 25 let.",
    exampleKorean: "나는 25살입니다."
  },
  {
    id: 28,
    russian: "человек",
    romanization: "chelovek",
    korean: "사람",
    exampleRussian: "Он хороший человек.",
    exampleRomanization: "On khoroshiy chelovek.",
    exampleKorean: "그는 좋은 사람입니다."
  },
  {
    id: 29,
    russian: "дом",
    romanization: "dom",
    korean: "집",
    exampleRussian: "Это мой дом.",
    exampleRomanization: "Eto moy dom.",
    exampleKorean: "이것은 내 집입니다."
  },
  {
    id: 30,
    russian: "друг",
    romanization: "drug",
    korean: "친구",
    exampleRussian: "Он мой лучший друг.",
    exampleRomanization: "On moy luchshiy drug.",
    exampleKorean: "그는 내 가장 친한 친구입니다."
  },
  {
    id: 31,
    russian: "рука",
    romanization: "ruka",
    korean: "손",
    exampleRussian: "Дай мне руку.",
    exampleRomanization: "Day mne ruku.",
    exampleKorean: "내게 손을 줘."
  },
  {
    id: 32,
    russian: "глаз",
    romanization: "glaz",
    korean: "눈",
    exampleRussian: "У неё красивые глаза.",
    exampleRomanization: "U neyo krasivyye glaza.",
    exampleKorean: "그녀는 아름다운 눈을 가지고 있습니다."
  },
  {
    id: 33,
    russian: "жизнь",
    romanization: "zhizn'",
    korean: "인생",
    exampleRussian: "Жизнь прекрасна.",
    exampleRomanization: "Zhizn' prekrasna.",
    exampleKorean: "인생은 아름답습니다."
  },
  {
    id: 34,
    russian: "вода",
    romanization: "voda",
    korean: "물",
    exampleRussian: "Я хочу пить воду.",
    exampleRomanization: "Ya khochu pit' vodu.",
    exampleKorean: "나는 물을 마시고 싶습니다."
  },
  {
    id: 35,
    russian: "еда",
    romanization: "yeda",
    korean: "음식",
    exampleRussian: "Эта еда очень вкусная.",
    exampleRomanization: "Eta yeda ochen' vkusnaya.",
    exampleKorean: "이 음식은 매우 맛있습니다."
  },
  {
    id: 36,
    russian: "мир",
    romanization: "mir",
    korean: "세계, 평화",
    exampleRussian: "Мы хотим мира во всём мире.",
    exampleRomanization: "My khotim mira vo vsyom mire.",
    exampleKorean: "우리는 전 세계의 평화를 원합니다."
  },
  {
    id: 37,
    russian: "страна",
    romanization: "strana",
    korean: "나라",
    exampleRussian: "Россия - большая страна.",
    exampleRomanization: "Rossiya - bol'shaya strana.",
    exampleKorean: "러시아는 큰 나라입니다."
  },
  {
    id: 38,
    russian: "город",
    romanization: "gorod",
    korean: "도시",
    exampleRussian: "Москва - красивый город.",
    exampleRomanization: "Moskva - krasivyy gorod.",
    exampleKorean: "모스크바는 아름다운 도시입니다."
  },
  {
    id: 39,
    russian: "улица",
    romanization: "ulitsa",
    korean: "거리",
    exampleRussian: "Я живу на этой улице.",
    exampleRomanization: "Ya zhivu na etoy ulitse.",
    exampleKorean: "나는 이 거리에 삽니다."
  },
  {
    id: 40,
    russian: "школа",
    romanization: "shkola",
    korean: "학교",
    exampleRussian: "Моя школа недалеко.",
    exampleRomanization: "Moya shkola nedaleko.",
    exampleKorean: "내 학교는 멀지 않습니다."
  },
  {
    id: 41,
    russian: "работа",
    romanization: "rabota",
    korean: "일",
    exampleRussian: "У меня много работы.",
    exampleRomanization: "U menya mnogo raboty.",
    exampleKorean: "나는 일이 많습니다."
  },
  {
    id: 42,
    russian: "семья",
    romanization: "sem'ya",
    korean: "가족",
    exampleRussian: "Моя семья большая.",
    exampleRomanization: "Moya sem'ya bol'shaya.",
    exampleKorean: "내 가족은 큽니다."
  },
  {
    id: 43,
    russian: "деньги",
    romanization: "den'gi",
    korean: "돈",
    exampleRussian: "У меня нет денег.",
    exampleRomanization: "U menya net deneg.",
    exampleKorean: "나는 돈이 없습니다."
  },
  {
    id: 44,
    russian: "книга",
    romanization: "kniga",
    korean: "책",
    exampleRussian: "Я люблю читать книги.",
    exampleRomanization: "Ya lyublyu chitat' knigi.",
    exampleKorean: "나는 책 읽는 것을 좋아합니다."
  },
  {
    id: 45,
    russian: "слово",
    romanization: "slovo",
    korean: "단어",
    exampleRussian: "Я не знаю это слово.",
    exampleRomanization: "Ya ne znayu eto slovo.",
    exampleKorean: "나는 이 단어를 모릅니다."
  },
  {
    id: 46,
    russian: "имя",
    romanization: "imya",
    korean: "이름",
    exampleRussian: "Как твоё имя?",
    exampleRomanization: "Kak tvoyo imya?",
    exampleKorean: "너의 이름은 뭐니?"
  },
  {
    id: 47,
    russian: "место",
    romanization: "mesto",
    korean: "장소",
    exampleRussian: "Это хорошее место.",
    exampleRomanization: "Eto khorosheye mesto.",
    exampleKorean: "이곳은 좋은 장소입니다."
  },
  {
    id: 48,
    russian: "вещь",
    romanization: "veshch'",
    korean: "물건",
    exampleRussian: "Это моя вещь.",
    exampleRomanization: "Eto moya veshch'.",
    exampleKorean: "이것은 내 물건입니다."
  },
  {
    id: 49,
    russian: "система",
    romanization: "sistema",
    korean: "시스템",
    exampleRussian: "Эта система работает хорошо.",
    exampleRomanization: "Eta sistema rabotayet khorosho.",
    exampleKorean: "이 시스템은 잘 작동합니다."
  },
  {
    id: 50,
    russian: "проблема",
    romanization: "problema",
    korean: "문제",
    exampleRussian: "У меня есть проблема.",
    exampleRomanization: "U menya yest' problema.",
    exampleKorean: "나는 문제가 있습니다."
  },
  {
    id: 51,
    russian: "часть",
    romanization: "chast'",
    korean: "부분",
    exampleRussian: "Это важная часть.",
    exampleRomanization: "Eto vazhnaya chast'.",
    exampleKorean: "이것은 중요한 부분입니다."
  },
  {
    id: 52,
    russian: "другой",
    romanization: "drugoy",
    korean: "다른",
    exampleRussian: "Он другой человек.",
    exampleRomanization: "On drugoy chelovek.",
    exampleKorean: "그는 다른 사람입니다."
  },
  {
    id: 53,
    russian: "новый",
    romanization: "novyy",
    korean: "새로운",
    exampleRussian: "Это новый дом.",
    exampleRomanization: "Eto novyy dom.",
    exampleKorean: "이것은 새로운 집입니다."
  },
  {
    id: 54,
    russian: "старый",
    romanization: "staryy",
    korean: "오래된",
    exampleRussian: "Это старый дом.",
    exampleRomanization: "Eto staryy dom.",
    exampleKorean: "이것은 오래된 집입니다."
  },
  {
    id: 55,
    russian: "первый",
    romanization: "pervyy",
    korean: "첫 번째",
    exampleRussian: "Это первый раз.",
    exampleRomanization: "Eto pervyy raz.",
    exampleKorean: "이것은 처음입니다."
  },
  {
    id: 56,
    russian: "последний",
    romanization: "posledniy",
    korean: "마지막",
    exampleRussian: "Это последний раз.",
    exampleRomanization: "Eto posledniy raz.",
    exampleKorean: "이것은 마지막입니다."
  },
  {
    id: 57,
    russian: "большой",
    romanization: "bol'shoy",
    korean: "큰",
    exampleRussian: "Это большой дом.",
    exampleRomanization: "Eto bol'shoy dom.",
    exampleKorean: "이것은 큰 집입니다."
  },
  {
    id: 58,
    russian: "маленький",
    romanization: "malen'kiy",
    korean: "작은",
    exampleRussian: "Это маленький дом.",
    exampleRomanization: "Eto malen'kiy dom.",
    exampleKorean: "이것은 작은 집입니다."
  },
  {
    id: 59,
    russian: "длинный",
    romanization: "dlinnyy",
    korean: "긴",
    exampleRussian: "Это длинная дорога.",
    exampleRomanization: "Eto dlinnaya doroga.",
    exampleKorean: "이것은 긴 도로입니다."
  },
  {
    id: 60,
    russian: "короткий",
    romanization: "korotkiy",
    korean: "짧은",
    exampleRussian: "Это короткая дорога.",
    exampleRomanization: "Eto korotkaya doroga.",
    exampleKorean: "이것은 짧은 도로입니다."
  },
  {
    id: 61,
    russian: "широкий",
    romanization: "shirokiy",
    korean: "넓은",
    exampleRussian: "Это широкая дорога.",
    exampleRomanization: "Eto shirokaya doroga.",
    exampleKorean: "이것은 넓은 도로입니다."
  },
  {
    id: 62,
    russian: "узкий",
    romanization: "uzkiy",
    korean: "좁은",
    exampleRussian: "Это узкая дорога.",
    exampleRomanization: "Eto uzkaya doroga.",
    exampleKorean: "이것은 좁은 도로입니다."
  },
  {
    id: 63,
    russian: "хороший",
    romanization: "khoroshiy",
    korean: "좋은",
    exampleRussian: "Это хороший дом.",
    exampleRomanization: "Eto khoroshiy dom.",
    exampleKorean: "이것은 좋은 집입니다."
  },
  {
    id: 64,
    russian: "плохой",
    romanization: "plokhiy",
    korean: "나쁜",
    exampleRussian: "Это плохой дом.",
    exampleRomanization: "Eto plokhiy dom.",
    exampleKorean: "이것은 나쁜 집입니다."
  },
  {
    id: 65,
    russian: "далекий",
    romanization: "dal'kiy",
    korean: "먼",
    exampleRussian: "Это далекий дом.",
    exampleRomanization: "Eto dal'kiy dom.",
    exampleKorean: "이것은 먼 집입니다."
  },
  {
    id: 66,
    russian: "близкий",
    romanization: "blizkiy",
    korean: "가까운",
    exampleRussian: "Это близкий дом.",
    exampleRomanization: "Eto blizkiy dom.",
    exampleKorean: "이것은 가까운 집입니다."
  },
  {
    id: 67,
    russian: "верный",
    romanization: "vernyy",
    korean: "정확한",
    exampleRussian: "Это верное решение.",
    exampleRomanization: "Eto vernoe reshenie.",
    exampleKorean: "이것은 정확한 결정입니다."
  },
  {
    id: 68,
    russian: "неверный",
    romanization: "nevernyy",
    korean: "잘못된",
    exampleRussian: "Это неверное решение.",
    exampleRomanization: "Eto nevernoe reshenie.",
    exampleKorean: "이것은 잘못된 결정입니다."
  },
  {
    id: 69,
    russian: "левый",
    romanization: "levyy",
    korean: "왼쪽",
    exampleRussian: "Это левая рука.",
    exampleRomanization: "Eto levaya ruka.",
    exampleKorean: "이것은 왼쪽 손입니다."
  },
  {
    id: 70,
    russian: "правый",
    romanization: "pravyy",
    korean: "오른쪽",
    exampleRussian: "Это правая рука.",
    exampleRomanization: "Eto pravaya ruka.",
    exampleKorean: "이것은 오른쪽 손입니다."
  },
  {
    id: 71,
    russian: "старый",
    romanization: "staryy",
    korean: "오래된",
    exampleRussian: "Это старый дом.",
    exampleRomanization: "Eto staryy dom.",
    exampleKorean: "이것은 오래된 집입니다."
  },
  {
    id: 72,
    russian: "новый",
    romanization: "novyy",
    korean: "새로운",
    exampleRussian: "Это новый дом.",
    exampleRomanization: "Eto novyy dom.",
    exampleKorean: "이것은 새로운 집입니다."
  },
  {
    id: 73,
    russian: "хороший",
    romanization: "khoroshiy",
    korean: "좋은",
    exampleRussian: "Это хороший дом.",
    exampleRomanization: "Eto khoroshiy dom.",
    exampleKorean: "이것은 좋은 집입니다."
  },
  {
    id: 74,
    russian: "плохой",
    romanization: "plokhiy",
    korean: "나쁜",
    exampleRussian: "Это плохой дом.",
    exampleRomanization: "Eto plokhiy dom.",
    exampleKorean: "이것은 나쁜 집입니다."
  },
  {
    id: 75,
    russian: "большой",
    romanization: "bol'shoy",
    korean: "큰",
    exampleRussian: "Это большой дом.",
    exampleRomanization: "Eto bol'shoy dom.",
    exampleKorean: "이것은 큰 집입니다."
  },
  {
    id: 76,
    russian: "маленький",
    romanization: "malen'kiy",
    korean: "작은",
    exampleRussian: "Это маленький дом.",
    exampleRomanization: "Eto malen'kiy dom.",
    exampleKorean: "이것은 작은 집입니다."
  },
  {
    id: 77,
    russian: "длинный",
    romanization: "dlinnyy",
    korean: "긴",
    exampleRussian: "Это длинная дорога.",
    exampleRomanization: "Eto dlinnaya doroga.",
    exampleKorean: "이것은 긴 도로입니다."
  },
  {
    id: 78,
    russian: "короткий",
    romanization: "korotkiy",
    korean: "짧은",
    exampleRussian: "Это короткая дорога.",
    exampleRomanization: "Eto korotkaya doroga.",
    exampleKorean: "이것은 짧은 도로입니다."
  },
  {
    id: 79,
    russian: "широкий",
    romanization: "shirokiy",
    korean: "넓은",
    exampleRussian: "Это широкая дорога.",
    exampleRomanization: "Eto shirokaya doroga.",
    exampleKorean: "이것은 넓은 도로입니다."
  },
  {
    id: 80,
    russian: "узкий",
    romanization: "uzkiy",
    korean: "좁은",
    exampleRussian: "Это узкая дорога.",
    exampleRomanization: "Eto uzkaya doroga.",
    exampleKorean: "이것은 좁은 도로입니다."
  },
  {
    id: 81,
    russian: "далекий",
    romanization: "dal'kiy",
    korean: "먼",
    exampleRussian: "Это далекий дом.",
    exampleRomanization: "Eto dal'kiy dom.",
    exampleKorean: "이것은 먼 집입니다."
  },
  {
    id: 82,
    russian: "близкий",
    romanization: "blizkiy",
    korean: "가까운",
    exampleRussian: "Это близкий дом.",
    exampleRomanization: "Eto blizkiy dom.",
    exampleKorean: "이것은 가까운 집입니다."
  },
  {
    id: 83,
    russian: "первый",
    romanization: "pervyy",
    korean: "첫번째",
    exampleRussian: "Это первый дом.",
    exampleRomanization: "Eto pervyy dom.",
    exampleKorean: "이것은 첫번째 집입니다."    
  },
  // ... 이전 단어들 ...

  {
    id: 83,
    russian: "верный",
    romanization: "vernyy",
    korean: "정확한",
    exampleRussian: "Это верный ответ.",
    exampleRomanization: "Eto vernyy otvet.",
    exampleKorean: "이것은 정확한 답입니다."
  },
  {
    id: 84,
    russian: "неверный",
    romanization: "nevernyy",
    korean: "잘못된",
    exampleRussian: "Это неверное решение.",
    exampleRomanization: "Eto nevernoye resheniye.",
    exampleKorean: "이것은 잘못된 결정입니다."
  },
  {
    id: 85,
    russian: "левый",
    romanization: "levyy",
    korean: "왼쪽",
    exampleRussian: "Поверните налево.",
    exampleRomanization: "Povernite nalevo.",
    exampleKorean: "왼쪽으로 도세요."
  },
  {
    id: 86,
    russian: "правый",
    romanization: "pravyy",
    korean: "오른쪽",
    exampleRussian: "Магазин находится справа.",
    exampleRomanization: "Magazin nakhoditsya sprava.",
    exampleKorean: "상점은 오른쪽에 있습니다."
  },
  {
    id: 87,
    russian: "красивый",
    romanization: "krasivyy",
    korean: "아름다운",
    exampleRussian: "Это очень красивый город.",
    exampleRomanization: "Eto ochen' krasivyy gorod.",
    exampleKorean: "이것은 매우 아름다운 도시입니다."
  },
  {
    id: 88,
    russian: "умный",
    romanization: "umnyy",
    korean: "똑똑한",
    exampleRussian: "Она очень умная девушка.",
    exampleRomanization: "Ona ochen' umnaya devushka.",
    exampleKorean: "그녀는 매우 똑똑한 여자입니다."
  },
  {
    id: 89,
    russian: "сильный",
    romanization: "sil'nyy",
    korean: "강한",
    exampleRussian: "У него сильный характер.",
    exampleRomanization: "U nego sil'nyy kharakter.",
    exampleKorean: "그는 강한 성격을 가지고 있습니다."
  },
  {
    id: 90,
    russian: "слабый",
    romanization: "slabyy",
    korean: "약한",
    exampleRussian: "У меня слабое зрение.",
    exampleRomanization: "U menya slaboye zreniye.",
    exampleKorean: "나는 시력이 약합니다."
  },
  {
    id: 91,
    russian: "быстрый",
    romanization: "bystryy",
    korean: "빠른",
    exampleRussian: "Это очень быстрая машина.",
    exampleRomanization: "Eto ochen' bystraya mashina.",
    exampleKorean: "이것은 매우 빠른 차입니다."
  },
  {
    id: 92,
    russian: "медленный",
    romanization: "medlennyy",
    korean: "느린",
    exampleRussian: "Черепаха очень медленная.",
    exampleRomanization: "Cherepakha ochen' medlennaya.",
    exampleKorean: "거북이는 매우 느립니다."
  },
  {
    id: 93,
    russian: "громкий",
    romanization: "gromkiy",
    korean: "시끄러운",
    exampleRussian: "Музыка слишком громкая.",
    exampleRomanization: "Muzyka slishkom gromkaya.",
    exampleKorean: "음악이 너무 시끄럽습니다."
  },
  {
    id: 94,
    russian: "тихий",
    romanization: "tikhiy",
    korean: "조용한",
    exampleRussian: "Я люблю тихие места.",
    exampleRomanization: "Ya lyublyu tikhiye mesta.",
    exampleKorean: "나는 조용한 장소를 좋아합니다."
  },
  {
    id: 95,
    russian: "тёплый",
    romanization: "tyoplyy",
    korean: "따뜻한",
    exampleRussian: "Сегодня тёплый день.",
    exampleRomanization: "Segodnya tyoplyy den'.",
    exampleKorean: "오늘은 따뜻한 날입니다."
  },
  {
    id: 96,
    russian: "холодный",
    romanization: "kholodnyy",
    korean: "추운",
    exampleRussian: "Зимой здесь очень холодно.",
    exampleRomanization: "Zimoy zdes' ochen' kholodno.",
    exampleKorean: "겨울에는 여기가 매우 춥습니다."
  },
  {
    id: 97,
    russian: "сухой",
    romanization: "sukhoy",
    korean: "건조한",
    exampleRussian: "Летом здесь очень сухой климат.",
    exampleRomanization: "Letom zdes' ochen' sukhoy klimat.",
    exampleKorean: "여름에는 여기가 매우 건조한 기후입니다."
  },
  {
    id: 98,
    russian: "мокрый",
    romanization: "mokryy",
    korean: "젖은",
    exampleRussian: "Не ходи по мокрой траве.",
    exampleRomanization: "Ne khodi po mokroy trave.",
    exampleKorean: "젖은 잔디 위를 걷지 마세요."
  },
  {
    id: 99,
    russian: "чистый",
    romanization: "chistyy",
    korean: "깨끗한",
    exampleRussian: "Мой дом всегда чистый.",
    exampleRomanization: "Moy dom vsegda chistyy.",
    exampleKorean: "내 집은 항상 깨끗합니다."
  },
  {
    id: 100,
    russian: "грязный",
    romanization: "gryaznyy",
    korean: "더러운",
    exampleRussian: "Не носи грязную одежду.",
    exampleRomanization: "Ne nosi gryaznuyu odezhdu.",
    exampleKorean: "더러운 옷을 입지 마세요."
  },
  {
    id: 101,
    russian: "хороший",
    romanization: "khoroshiy",
    korean: "좋은",
    exampleRussian: "Это хороший фильм.",
    exampleRomanization: "Eto khoroshiy fil'm.",
    exampleKorean: "이것은 좋은 영화입니다."
  },
  {
    id: 102,
    russian: "плохой",
    romanization: "plokhoy",
    korean: "나쁜",
    exampleRussian: "Сегодня плохая погода.",
    exampleRomanization: "Segodnya plokhaya pogoda.",
    exampleKorean: "오늘은 날씨가 나쁩니다."
  },
  {
    id: 103,
    russian: "большой",
    romanization: "bol'shoy",
    korean: "큰",
    exampleRussian: "У меня большой дом.",
    exampleRomanization: "U menya bol'shoy dom.",
    exampleKorean: "나는 큰 집이 있습니다."
  },
  {
    id: 104,
    russian: "маленький",
    romanization: "malen'kiy",
    korean: "작은",
    exampleRussian: "Это маленькая собака.",
    exampleRomanization: "Eto malen'kaya sobaka.",
    exampleKorean: "이것은 작은 개입니다."
  },
  {
    id: 105,
    russian: "новый",
    romanization: "novyy",
    korean: "새로운",
    exampleRussian: "У меня новый телефон.",
    exampleRomanization: "U menya novyy telefon.",
    exampleKorean: "나는 새 전화기가 있습니다."
  },
  {
    id: 106,
    russian: "старый",
    romanization: "staryy",
    korean: "오래된",
    exampleRussian: "Это старый дом.",
    exampleRomanization: "Eto staryy dom.",
    exampleKorean: "이것은 오래된 집입니다."
  },
  {
    id: 107,
    russian: "высокий",
    romanization: "vysokiy",
    korean: "높은, 키 큰",
    exampleRussian: "Он очень высокий человек.",
    exampleRomanization: "On ochen' vysokiy chelovek.",
    exampleKorean: "그는 매우 키가 큰 사람입니다."
  },
  {
    id: 108,
    russian: "низкий",
    romanization: "nizkiy",
    korean: "낮은, 키 작은",
    exampleRussian: "У этого стола низкие ножки.",
    exampleRomanization: "U etogo stola nizkiye nozhki.",
    exampleKorean: "이 테이블은 다리가 낮습니다."
  },
  {
    id: 109,
    russian: "длинный",
    romanization: "dlinnyy",
    korean: "긴",
    exampleRussian: "У неё длинные волосы.",
    exampleRomanization: "U neyo dlinnye volosy.",
    exampleKorean: "그녀는 긴 머리를 가지고 있습니다."
  },
  {
    id: 110,
    russian: "короткий",
    romanization: "korotkiy",
    korean: "짧은",
    exampleRussian: "Это очень короткая юбка.",
    exampleRomanization: "Eto ochen' korotkaya yubka.",
    exampleKorean: "이것은 매우 짧은 치마입니다."
  },
  {
    id: 111,
    russian: "широкий",
    romanization: "shirokiy",
    korean: "넓은",
    exampleRussian: "Эта улица очень широкая.",
    exampleRomanization: "Eta ulitsa ochen' shirokaya.",
    exampleKorean: "이 거리는 매우 넓습니다."
  },
  {
    id: 112,
    russian: "узкий",
    romanization: "uzkiy",
    korean: "좁은",
    exampleRussian: "Этот коридор слишком узкий.",
    exampleRomanization: "Etot koridor slishkom uzkiy.",
    exampleKorean: "이 복도는 너무 좁습니다."
  },
  {
    id: 113,
    russian: "толстый",
    romanization: "tolstyy",
    korean: "두꺼운, 뚱뚱한",
    exampleRussian: "Это толстая книга.",
    exampleRomanization: "Eto tolstaya kniga.",
    exampleKorean: "이것은 두꺼운 책입니다."
  },
  {
    id: 114,
    russian: "тонкий",
    romanization: "tonkiy",
    korean: "얇은, 날씬한",
    exampleRussian: "У неё тонкая талия.",
    exampleRomanization: "U neyo tonkaya taliya.",
    exampleKorean: "그녀는 날씬한 허리를 가지고 있습니다."
  },
  {
    id: 115,
    russian: "тяжёлый",
    romanization: "tyazhyolyy",
    korean: "무거운",
    exampleRussian: "Этот чемодан очень тяжёлый.",
    exampleRomanization: "Etot chemodan ochen' tyazhyolyy.",
    exampleKorean: "이 가방은 매우 무겁습니다."
  },
  {
    id: 116,
    russian: "лёгкий",
    romanization: "lyogkiy",
    korean: "가벼운",
    exampleRussian: "Эта сумка очень лёгкая.",
    exampleRomanization: "Eta sumka ochen' lyogkaya.",
    exampleKorean: "이 가방은 매우 가볍습니다."
  },
  {
    id: 117,
    russian: "твёрдый",
    romanization: "tvyordyy",
    korean: "단단한",
    exampleRussian: "Этот матрас слишком твёрдый.",
    exampleRomanization: "Etot matras slishkom tvyordyy.",
    exampleKorean: "이 매트리스는 너무 단단합니다."
  },
  {
    id: 118,
    russian: "мягкий",
    romanization: "myagkiy",
    korean: "부드러운",
    exampleRussian: "Этот диван очень мягкий.",
    exampleRomanization: "Etot divan ochen' myagkiy.",
    exampleKorean: "이 소파는 매우 부드럽습니다."
  },
  {
    id: 119,
    russian: "гладкий",
    romanization: "gladkiy",
    korean: "매끄러운",
    exampleRussian: "У неё очень гладкая кожа.",
    exampleRomanization: "U neyo ochen' gladkaya kozha.",
    exampleKorean: "그녀는 매우 매끄러운 피부를 가지고 있습니다."
  },
  {
    id: 120,
    russian: "шероховатый",
    romanization: "sherokhovatyy",
    korean: "거친",
    exampleRussian: "Эта поверхность шероховатая.",
    exampleRomanization: "Eta poverkhnost' sherokhovataya.",
    exampleKorean: "이 표면은 거칩니다."
  },
  {
    id: 121,
    russian: "острый",
    romanization: "ostryy",
    korean: "날카로운",
    exampleRussian: "Этот нож очень острый.",
    exampleRomanization: "Etot nozh ochen' ostryy.",
    exampleKorean: "이 칼은 매우 날카롭습니다."
  },
  {
    id: 122,
    russian: "тупой",
    romanization: "tupoy",
    korean: "무딘",
    exampleRussian: "Этот карандаш тупой.",
    exampleRomanization: "Etot karandash tupoy.",
    exampleKorean: "이 연필은 무뎝니다."
  },
  {
    id: 123,
    russian: "прямой",
    romanization: "pryamoy",
    korean: "직선의",
    exampleRussian: "Это прямая линия.",
    exampleRomanization: "Eto pryamaya liniya.",
    exampleKorean: "이것은 직선입니다."
  },
  {
    id: 124,
    russian: "кривой",
    romanization: "krivoy",
    korean: "굽은",
    exampleRussian: "У него кривые зубы.",
    exampleRomanization: "U nego krivyye zuby.",
    exampleKorean: "그는 굽은 이빨을 가지고 있습니다."
  },
  {
    id: 125,
    russian: "круглый",
    romanization: "kruglyy",
    korean: "둥근",
    exampleRussian: "Земля круглая.",
    exampleRomanization: "Zemlya kruglaya.",
    exampleKorean: "지구는 둥글다."
  },
  {
    id: 126,
    russian: "квадратный",
    romanization: "kvadratnyy",
    korean: "정사각형의",
    exampleRussian: "Это квадратный стол.",
    exampleRomanization: "Eto kvadratnyy stol.",
    exampleKorean: "이것은 정사각형 테이블입니다."
  },
  {
    id: 127,
    russian: "треугольный",
    romanization: "treugol'nyy",
    korean: "삼각형의",
    exampleRussian: "У него треугольное лицо.",
    exampleRomanization: "U nego treugol'noye litso.",
    exampleKorean: "그는 삼각형 얼굴을 가지고 있습니다."
  },
  {
    id: 128,
    russian: "пустой",
    romanization: "pustoy",
    korean: "빈",
    exampleRussian: "Этот стакан пустой.",
    exampleRomanization: "Etot stakan pustoy.",
    exampleKorean: "이 잔은 비어 있습니다."
  },
  {
    id: 129,
    russian: "полный",
    romanization: "polnyy",
    korean: "가득 찬",
    exampleRussian: "Бак полный бензина.",
    exampleRomanization: "Bak polnyy benzina.",
    exampleKorean: "탱크에 기름이 가득 차 있습니다."
  },
  {
    id: 130,
    russian: "открытый",
    romanization: "otkrytyy",
    korean: "열린",
    exampleRussian: "Дверь открыта.",
    exampleRomanization: "Dver' otkryta.",
    exampleKorean: "문이 열려 있습니다."
  },
  {
    id: 131,
    russian: "закрытый",
    romanization: "zakrytyy",
    korean: "닫힌",
    exampleRussian: "Магазин закрыт.",
    exampleRomanization: "Magazin zakryt.",
    exampleKorean: "상점이 닫혀 있습니다."
  },
  {
    id: 132,
    russian: "живой",
    romanization: "zhivoy",
    korean: "살아있는",
    exampleRussian: "Это живое существо.",
    exampleRomanization: "Eto zhivoye sushchestvo.",
    exampleKorean: "이것은 살아있는 생물입니다."
  },
  {
    id: 133,
    russian: "мёртвый",
    romanization: "myortvyy",
    korean: "죽은",
    exampleRussian: "Это мёртвое дерево.",
    exampleRomanization: "Eto myortvoye derevo.",
    exampleKorean: "이것은 죽은 나무입니다."
  },
  {
    id: 134,
    russian: "молодой",
    romanization: "molodoy",
    korean: "젊은",
    exampleRussian: "Он ещё молодой человек.",
    exampleRomanization: "On yeshchyo molodoy chelovek.",
    exampleKorean: "그는 아직 젊은 사람입니다."
  },
  {
    id: 135,
    russian: "старый",
    romanization: "staryy",
    korean: "늙은",
    exampleRussian: "Мой дедушка уже старый.",
    exampleRomanization: "Moy dedushka uzhe staryy.",
    exampleKorean: "내 할아버지는 이미 늙으셨습니다."
  },
  {
    id: 136,
    russian: "богатый",
    romanization: "bogatyy",
    korean: "부유한",
    exampleRussian: "Он очень богатый человек.",
    exampleRomanization: "On ochen' bogatyy chelovek.",
    exampleKorean: "그는 매우 부유한 사람입니다."
  },
  {
    id: 137,
    russian: "бедный",
    romanization: "bednyy",
    korean: "가난한",
    exampleRussian: "Это бедный район города.",
    exampleRomanization: "Eto bednyy rayon goroda.",
    exampleKorean: "이것은 도시의 가난한 지역입니다."
  },
  {
    id: 138,
    russian: "дорогой",
    romanization: "dorogoy",
    korean: "비싼",
    exampleRussian: "Это очень дорогой ресторан.",
    exampleRomanization: "Eto ochen' dorogoy restoran.",
    exampleKorean: "이것은 매우 비싼 레스토랑입니다."
  },
  {
    id: 139,
    russian: "дешёвый",
    romanization: "deshyovyy",
    korean: "싼",
    exampleRussian: "Эта гостиница дешёвая.",
    exampleRomanization: "Eta gostinitsa deshyovaya.",
    exampleKorean: "이 호텔은 싸다."
  },
  {
    id: 140,
    russian: "интересный",
    romanization: "interesnyy",
    korean: "흥미로운",
    exampleRussian: "Это очень интересная книга.",
    exampleRomanization: "Eto ochen' interesnaya kniga.",
    exampleKorean: "이것은 매우 흥미로운 책입니다."
  },
  {
    id: 141,
    russian: "скучный",
    romanization: "skuchnyy",
    korean: "지루한",
    exampleRussian: "Этот фильм очень скучный.",
    exampleRomanization: "Etot fil'm ochen' skuchnyy.",
    exampleKorean: "이 영화는 매우 지루합니다."
  },
  {
    id: 142,
    russian: "весёлый",
    romanization: "vesyolyy",
    korean: "즐거운",
    exampleRussian: "У нас была весёлая вечеринка.",
    exampleRomanization: "U nas byla vesyolaya vecherinka.",
    exampleKorean: "우리는 즐거운 파티를 가졌습니다."
  },
  {
    id: 143,
    russian: "грустный",
    romanization: "grustnyy",
    korean: "슬픈",
    exampleRussian: "Это очень грустная история.",
    exampleRomanization: "Eto ochen' grustnaya istoriya.",
    exampleKorean: "이것은 매우 슬픈 이야기입니다."
  },
  {
    id: 144,
    russian: "счастливый",
    romanization: "schastlivyy",
    korean: "행복한",
    exampleRussian: "Я счастливый человек.",
    exampleRomanization: "Ya schastlivyy chelovek.",
    exampleKorean: "나는 행복한 사람입니다."
  },
  {
    id: 145,
    russian: "несчастный",
    romanization: "neschastnyy",
    korean: "불행한",
    exampleRussian: "Он выглядит несчастным.",
    exampleRomanization: "On vyglyadit neschastnym.",
    exampleKorean: "그는 불행해 보입니다."
  },
  {
    id: 146,
    russian: "удобный",
    romanization: "udobnyy",
    korean: "편안한",
    exampleRussian: "Это очень удобное кресло.",
    exampleRomanization: "Eto ochen' udobnoye kreslo.",
    exampleKorean: "이것은 매우 편안한 의자입니다."
  },
  {
    id: 147,
    russian: "неудобный",
    romanization: "neudobnyy",
    korean: "불편한",
    exampleRussian: "Эта обувь неудобная.",
    exampleRomanization: "Eta obuv' neudobnaya.",
    exampleKorean: "이 신발은 불편합니다."
  },
  {
    id: 148,
    russian: "опасный",
    romanization: "opasnyy",
    korean: "위험한",
    exampleRussian: "Это очень опасная ситуация.",
    exampleRomanization: "Eto ochen' opasnaya situatsiya.",
    exampleKorean: "이것은 매우 위험한 상황입니다."
  },
  {
    id: 149,
    russian: "безопасный",
    romanization: "bezopasnyy",
    korean: "안전한",
    exampleRussian: "Этот район считается безопасным.",
    exampleRomanization: "Etot rayon schitayetsya bezopasnym.",
    exampleKorean: "이 지역은 안전한 것으로 여겨집니다."
  },
  {
    id: 150,
    russian: "трудный",
    romanization: "trudnyy",
    korean: "어려운",
    exampleRussian: "Это очень трудная задача.",
    exampleRomanization: "Eto ochen' trudnaya zadacha.",
    exampleKorean: "이것은 매우 어려운 과제입니다."
  },
  {
    id: 151,
    russian: "лёгкий",
    romanization: "lyogkiy",
    korean: "쉬운",
    exampleRussian: "Этот тест был очень лёгким.",
    exampleRomanization: "Etot test byl ochen' lyogkim.",
    exampleKorean: "이 시험은 매우 쉬웠습니다."
  },
  {
    id: 152,
    russian: "важный",
    romanization: "vazhnyy",
    korean: "중요한",
    exampleRussian: "Это очень важное решение.",
    exampleRomanization: "Eto ochen' vazhnoye resheniye.",
    exampleKorean: "이것은 매우 중요한 결정입니다."
  },
  {
    id: 153,
    russian: "неважный",
    romanization: "nevazhnyy",
    korean: "중요하지 않은",
    exampleRussian: "Эти детали неважны.",
    exampleRomanization: "Eti detali nevazhny.",
    exampleKorean: "이 세부사항들은 중요하지 않습니다."
  },
  {
    id: 154,
    russian: "правильный",
    romanization: "pravil'nyy",
    korean: "올바른",
    exampleRussian: "Это правильный ответ.",
    exampleRomanization: "Eto pravil'nyy otvet.",
    exampleKorean: "이것은 올바른 답입니다."
  },
  {
    id: 155,
    russian: "неправильный",
    romanization: "nepravil'nyy",
    korean: "잘못된",
    exampleRussian: "Это неправильное решение.",
    exampleRomanization: "Eto nepravil'noye resheniye.",
    exampleKorean: "이것은 잘못된 결정입니다."
  },
  {
    id: 156,
    russian: "возможный",
    romanization: "vozmozhnyy",
    korean: "가능한",
    exampleRussian: "Это вполне возможно.",
    exampleRomanization: "Eto vpolne vozmozhno.",
    exampleKorean: "이것은 충분히 가능합니다."
  },
  {
    id: 157,
    russian: "невозможный",
    romanization: "nevozmozhnyy",
    korean: "불가능한",
    exampleRussian: "Эта задача невозможна.",
    exampleRomanization: "Eta zadacha nevozmozhna.",
    exampleKorean: "이 과제는 불가능합니다."
  },
  {
    id: 158,
    russian: "необходимый",
    romanization: "neobkhodimyy",
    korean: "필요한",
    exampleRussian: "Это необходимое условие.",
    exampleRomanization: "Eto neobkhodimoye usloviye.",
    exampleKorean: "이것은 필요한 조건입니다."
  },
  {
    id: 159,
    russian: "ненужный",
    romanization: "nenuzhnyy",
    korean: "불필요한",
    exampleRussian: "Эти вещи ненужные.",
    exampleRomanization: "Eti veshchi nenuzhnyye.",
    exampleKorean: "이 물건들은 불필요합니다."
  },
  {
    id: 160,
    russian: "полезный",
    romanization: "poleznyy",
    korean: "유용한",
    exampleRussian: "Это очень полезный совет.",
    exampleRomanization: "Eto ochen' poleznyy sovet.",
    exampleKorean: "이것은 매우 유용한 조언입니다."
  },
  {
    id: 161,
    russian: "вредный",
    romanization: "vrednyy",
    korean: "해로운",
    exampleRussian: "Курение вредно для здоровья.",
    exampleRomanization: "Kureniye vredno dlya zdorov'ya.",
    exampleKorean: "흡연은 건강에 해롭습니다."
  },
  {
    id: 162,
    russian: "простой",
    romanization: "prostoy",
    korean: "간단한",
    exampleRussian: "Это простое решение.",
    exampleRomanization: "Eto prostoye resheniye.",
    exampleKorean: "이것은 간단한 해결책입니다."
  },
  {
    id: 163,
    russian: "сложный",
    romanization: "slozhnyy",
    korean: "복잡한",
    exampleRussian: "Это сложная проблема.",
    exampleRomanization: "Eto slozhnaya problema.",
    exampleKorean: "이것은 복잡한 문제입니다."
  },
  {
    id: 164,
    russian: "быстрый",
    romanization: "bystryy",
    korean: "빠른",
    exampleRussian: "Это очень быстрая машина.",
    exampleRomanization: "Eto ochen' bystraya mashina.",
    exampleKorean: "이것은 매우 빠른 차입니다."
  },
  {
    id: 165,
    russian: "медленный",
    romanization: "medlennyy",
    korean: "느린",
    exampleRussian: "Этот компьютер очень медленный.",
    exampleRomanization: "Etot komp'yuter ochen' medlennyy.",
    exampleKorean: "이 컴퓨터는 매우 느립니다."
  },
  {
    id: 166,
    russian: "ранний",
    romanization: "ranniy",
    korean: "이른",
    exampleRussian: "Я люблю раннее утро.",
    exampleRomanization: "Ya lyublyu ranneye utro.",
    exampleKorean: "나는 이른 아침을 좋아합니다."
  },
  {
    id: 167,
    russian: "поздний",
    romanization: "pozdniy",
    korean: "늦은",
    exampleRussian: "Уже поздний вечер.",
    exampleRomanization: "Uzhe pozdniy vecher.",
    exampleKorean: "이미 늦은 저녁입니다."
  },
  {
    id: 168,
    russian: "свежий",
    romanization: "svezhiy",
    korean: "신선한",
    exampleRussian: "Я люблю свежий хлеб.",
    exampleRomanization: "Ya lyublyu svezhiy khleb.",
    exampleKorean: "나는 신선한 빵을 좋아합니다."
  },
  {
    id: 169,
    russian: "несвежий",
    romanization: "nesvezhiy",
    korean: "신선하지 않은",
    exampleRussian: "Это молоко уже несвежее.",
    exampleRomanization: "Eto moloko uzhe nesvezhee.",
    exampleKorean: "이 우유는 이미 신선하지 않습니다."
  },
  {
    id: 170,
    russian: "горячий",
    romanization: "goryachiy",
    korean: "뜨거운",
    exampleRussian: "Осторожно, кофе горячий!",
    exampleRomanization: "Ostorozhno, kofe goryachiy!",
    exampleKorean: "조심하세요, 커피가 뜨겁습니다!"
  },
  {
    id: 171,
    russian: "холодный",
    romanization: "kholodnyy",
    korean: "차가운",
    exampleRussian: "Я люблю холодное пиво.",
    exampleRomanization: "Ya lyublyu kholodnoye pivo.",
    exampleKorean: "나는 차가운 맥주를 좋아합니다."
  },
  {
    id: 172,
    russian: "сухой",
    romanization: "sukhoy",
    korean: "건조한",
    exampleRussian: "Здесь очень сухой климат.",
    exampleRomanization: "Zdes' ochen' sukhoy klimat.",
    exampleKorean: "여기는 매우 건조한 기후입니다."
  },
  {
    id: 173,
    russian: "влажный",
    romanization: "vlazhnyy",
    korean: "습한",
    exampleRussian: "Сегодня очень влажный день.",
    exampleRomanization: "Segodnya ochen' vlazhnyy den'.",
    exampleKorean: "오늘은 매우 습한 날입니다."
  },
  {
    id: 174,
    russian: "чистый",
    romanization: "chistyy",
    korean: "깨끗한",
    exampleRussian: "Это очень чистая комната.",
    exampleRomanization: "Eto ochen' chistaya komnata.",
    exampleKorean: "이것은 매우 깨끗한 방입니다."
  },
  {
    id: 175,
    russian: "грязный",
    romanization: "gryaznyy",
    korean: "더러운",
    exampleRussian: "Эта рубашка грязная.",
    exampleRomanization: "Eta rubashka gryaznaya.",
    exampleKorean: "이 셔츠는 더럽습니다."
  },
  {
    id: 176,
    russian: "громкий",
    romanization: "gromkiy",
    korean: "시끄러운",
    exampleRussian: "Музыка слишком громкая.",
    exampleRomanization: "Muzyka slishkom gromkaya.",
    exampleKorean: "음악이 너무 시끄럽습니다."
  },
  {
    id: 177,
    russian: "тихий",
    romanization: "tikhiy",
    korean: "조용한",
    exampleRussian: "Я люблю тихие места.",
    exampleRomanization: "Ya lyublyu tikhiye mesta.",
    exampleKorean: "나는 조용한 장소를 좋아합니다."
  },
  {
    id: 178,
    russian: "сильный",
    romanization: "sil'nyy",
    korean: "강한",
    exampleRussian: "У него сильный характер.",
    exampleRomanization: "U nego sil'nyy kharakter.",
    exampleKorean: "그는 강한 성격을 가지고 있습니다."
  },
  {
    id: 179,
    russian: "слабый",
    romanization: "slabyy",
    korean: "약한",
    exampleRussian: "У меня слабое зрение.",
    exampleRomanization: "U menya slaboye zreniye.",
    exampleKorean: "나는 시력이 약합니다."
  },
  {
    id: 180,
    russian: "умный",
    romanization: "umnyy",
    korean: "똑똑한",
    exampleRussian: "Она очень умная девушка.",
    exampleRomanization: "Ona ochen' umnaya devushka.",
    exampleKorean: "그녀는 매우 똑똑한 여자입니다."
  },
  {
    id: 181,
    russian: "глупый",
    romanization: "glupyy",
    korean: "바보 같은",
    exampleRussian: "Это глупая ошибка.",
    exampleRomanization: "Eto glupaya oshibka.",
    exampleKorean: "이것은 바보 같은 실수입니다."
  },
  {
    id: 182,
    russian: "добрый",
    romanization: "dobryy",
    korean: "친절한",
    exampleRussian: "Она очень добрая женщина.",
    exampleRomanization: "Ona ochen' dobraya zhenshchina.",
    exampleKorean: "그녀는 매우 친절한 여성입니다."
  },
  {
    id: 183,
    russian: "злой",
    romanization: "zloy",
    korean: "화난, 악한",
    exampleRussian: "Не будь злым.",
    exampleRomanization: "Ne bud' zlym.",
    exampleKorean: "화내지 마세요."
  },
  {
    id: 184,
    russian: "честный",
    romanization: "chestnyy",
    korean: "정직한",
    exampleRussian: "Он очень честный человек.",
    exampleRomanization: "On ochen' chestnyy chelovek.",
    exampleKorean: "그는 매우 정직한 사람입니다."
  },
  {
    id: 185,
    russian: "нечестный",
    romanization: "nechestnyy",
    korean: "부정직한",
    exampleRussian: "Это нечестный поступок.",
    exampleRomanization: "Eto nechestnyy postupok.",
    exampleKorean: "이것은 부정직한 행동입니다."
  },
  {
    id: 186,
    russian: "храбрый",
    romanization: "khrabryy",
    korean: "용감한",
    exampleRussian: "Он храбрый солдат.",
    exampleRomanization: "On khrabryy soldat.",
    exampleKorean: "그는 용감한 군인입니다."
  },
  {
    id: 187,
    russian: "трусливый",
    romanization: "truslivyy",
    korean: "겁 많은",
    exampleRussian: "Не будь трусливым.",
    exampleRomanization: "Ne bud' truslivym.",
    exampleKorean: "겁쟁이가 되지 마세요."
  },
  {
    id: 188,
    russian: "щедрый",
    romanization: "shchedryy",
    korean: "관대한",
    exampleRussian: "Он очень щедрый человек.",
    exampleRomanization: "On ochen' shchedryy chelovek.",
    exampleKorean: "그는 매우 관대한 사람입니다."
  },
  {
    id: 189,
    russian: "жадный",
    romanization: "zhadnyy",
    korean: "욕심 많은",
    exampleRussian: "Не будь таким жадным.",
    exampleRomanization: "Ne bud' takim zhadnym.",
    exampleKorean: "그렇게 욕심 부리지 마세요."
  },
  {
    id: 190,
    russian: "терпеливый",
    romanization: "terpelivyy",
    korean: "참을성 있는",
    exampleRussian: "Будь терпеливым.",
    exampleRomanization: "Bud' terpelivym.",
    exampleKorean: "참을성 있게 기다리세요."
  },
  {
    id: 191,
    russian: "нетерпеливый",
    romanization: "neterpelivyy",
    korean: "참을성 없는",
    exampleRussian: "Он очень нетерпеливый человек.",
    exampleRomanization: "On ochen' neterpelivyy chelovek.",
    exampleKorean: "그는 매우 참을성 없는 사람입니다."
  },
  {
    id: 192,
    russian: "вежливый",
    romanization: "vezhlivyy",
    korean: "예의 바른",
    exampleRussian: "Будьте вежливы с другими.",
    exampleRomanization: "Bud'te vezhlivy s drugimi.",
    exampleKorean: "다른 사람들에게 예의 바르게 대하세요."
  },
  {
    id: 193,
    russian: "грубый",
    romanization: "grubyy",
    korean: "무례한",
    exampleRussian: "Не будь таким грубым.",
    exampleRomanization: "Ne bud' takim grubym.",
    exampleKorean: "그렇게 무례하게 굴지 마세요."
  },
  {
    id: 194,
    russian: "спокойный",
    romanization: "spokoynyy",
    korean: "차분한",
    exampleRussian: "Оставайся спокойным.",
    exampleRomanization: "Ostavaysya spokoynym.",
    exampleKorean: "차분하게 있으세요."
  },
  {
    id: 195,
    russian: "нервный",
    romanization: "nervnyy",
    korean: "긴장한",
    exampleRussian: "Не будь таким нервным.",
    exampleRomanization: "Ne bud' takim nervnym.",
    exampleKorean: "그렇게 긴장하지 마세요."
  },
  {
    id: 196,
    russian: "уверенный",
    romanization: "uverennyy",
    korean: "자신감 있는",
    exampleRussian: "Будь уверенным в себе.",
    exampleRomanization: "Bud' uverennym v sebe.",
    exampleKorean: "자신감을 가지세요."
  },
  {
    id: 197,
    russian: "неуверенный",
    romanization: "neuverennyy",
    korean: "자신감 없는",
    exampleRussian: "Он выглядит неуверенным.",
    exampleRomanization: "On vyglyadit neuverennym.",
    exampleKorean: "그는 자신감 없어 보입니다."
  },
  {
    id: 198,
    russian: "активный",
    romanization: "aktivnyy",
    korean: "활동적인",
    exampleRussian: "Он очень активный ребёнок.",
    exampleRomanization: "On ochen' aktivnyy rebyonok.",
    exampleKorean: "그는 매우 활동적인 아이입니다."
  },
  {
    id: 199,
    russian: "пассивный",
    romanization: "passivnyy",
    korean: "수동적인",
    exampleRussian: "Не будь таким пассивным.",
    exampleRomanization: "Ne bud' takim passivnym.",
    exampleKorean: "그렇게 수동적이지 마세요."
  },
  {
    id: 200,
    russian: "серьёзный",
    romanization: "ser'yoznyy",
    korean: "진지한",
    exampleRussian: "Это серьёзная проблема.",
    exampleRomanization: "Eto ser'yoznaya problema.",
    exampleKorean: "이것은 진지한 문제입니다."
  },
  {
    id: 201,
    russian: "несерьёзный",
    romanization: "neser'yoznyy",
    korean: "진지하지 않은",
    exampleRussian: "Не будь таким несерьёзным.",
    exampleRomanization: "Ne bud' takim neser'yoznym.",
    exampleKorean: "그렇게 진지하지 않게 굴지 마세요."
  },
  {
    id: 202,
    russian: "опытный",
    romanization: "opytnyy",
    korean: "경험 많은",
    exampleRussian: "Он опытный врач.",
    exampleRomanization: "On opytnyy vrach.",
    exampleKorean: "그는 경험 많은 의사입니다."
  },
  {
    id: 203,
    russian: "неопытный",
    romanization: "neopytnyy",
    korean: "경험 없는",
    exampleRussian: "Он ещё неопытный водитель.",
    exampleRomanization: "On yeshchyo neopytnyy voditel'.",
    exampleKorean: "그는 아직 경험 없는 운전자입니다."
  },
  {
    id: 204,
    russian: "талантливый",
    romanization: "talantlivyy",
    korean: "재능 있는",
    exampleRussian: "Она талантливая художница.",
    exampleRomanization: "Ona talantlivaya khudozhnitsa.",
    exampleKorean: "그녀는 재능 있는 화가입니다."
  },
  {
    id: 205,
    russian: "бесталанный",
    romanization: "bestalannyy",
    korean: "재능 없는",
    exampleRussian: "Он считает себя бесталанным.",
    exampleRomanization: "On schitayet sebya bestalannym.",
    exampleKorean: "그는 자신을 재능 없다고 생각합니다."
  },
  {
    id: 206,
    russian: "здоровый",
    romanization: "zdorovyy",
    korean: "건강한",
    exampleRussian: "Ведите здоровый образ жизни.",
    exampleRomanization: "Vedite zdorovyy obraz zhizni.",
    exampleKorean: "건강한 생활 방식을 유지하세요."
  },
  {
    id: 207,
    russian: "больной",
    romanization: "bol'noy",
    korean: "아픈",
    exampleRussian: "Он сегодня болен.",
    exampleRomanization: "On segodnya bolen.",
    exampleKorean: "그는 오늘 아픕니다."
  },
  {
    id: 208,
    russian: "женатый",
    romanization: "zhenatyy",
    korean: "결혼한 (남성)",
    exampleRussian: "Он женатый мужчина.",
    exampleRomanization: "On zhenatyy muzhchina.",
    exampleKorean: "그는 결혼한 남자입니다."
  },
  {
    id: 209,
    russian: "замужняя",
    romanization: "zamuzhnyaya",
    korean: "결혼한 (여성)",
    exampleRussian: "Она замужняя женщина.",
    exampleRomanization: "Ona zamuzhnyaya zhenshchina.",
    exampleKorean: "그녀는 결혼한 여성입니다."
  },
  {
    id: 210,
    russian: "холостой",
    romanization: "kholostoy",
    korean: "미혼의",
    exampleRussian: "Он всё ещё холостой.",
    exampleRomanization: "On vsyo yeshchyo kholostoy.",
    exampleKorean: "그는 아직 미혼입니다."
  },
  {
    id: 211,
    russian: "одинокий",
    romanization: "odinokiy",
    korean: "외로운",
    exampleRussian: "Он чувствует себя одиноким.",
    exampleRomanization: "On chuvstvuyet sebya odinokim.",
    exampleKorean: "그는 외롭다고 느낍니다."
  },
  {
    id: 212,
    russian: "общительный",
    romanization: "obshchitel'nyy",
    korean: "사교적인",
    exampleRussian: "Она очень общительная девушка.",
    exampleRomanization: "Ona ochen' obshchitel'naya devushka.",
    exampleKorean: "그녀는 매우 사교적인 여자입니다."
  },
  {
    id: 213,
    russian: "замкнутый",
    romanization: "zamknutyy",
    korean: "내성적인",
    exampleRussian: "Он довольно замкнутый человек.",
    exampleRomanization: "On dovol'no zamknutyy chelovek.",
    exampleKorean: "그는 꽤 내성적인 사람입니다."
  },
  {
    id: 214,
    russian: "ленивый",
    romanization: "lenivyy",
    korean: "게으른",
    exampleRussian: "Не будь таким ленивым.",
    exampleRomanization: "Ne bud' takim lenivym.",
    exampleKorean: "그렇게 게으르지 마세요."
  },
  {
    id: 215,
    russian: "трудолюбивый",
    romanization: "trudolyubivyy",
    korean: "근면한",
    exampleRussian: "Он очень трудолюбивый студент.",
    exampleRomanization: "On ochen' trudolyubivyy student.",
    exampleKorean: "그는 매우 근면한 학생입니다."
  },
  {
    id: 216,
    russian: "скромный",
    romanization: "skromnyy",
    korean: "겸손한",
    exampleRussian: "Он очень скромный человек.",
    exampleRomanization: "On ochen' skromnyy chelovek.",
    exampleKorean: "그는 매우 겸손한 사람입니다."
  },
  {
    id: 217,
    russian: "высокомерный",
    romanization: "vysokomernyy",
    korean: "거만한",
    exampleRussian: "Не будь таким высокомерным.",
    exampleRomanization: "Ne bud' takim vysokomernym.",
    exampleKorean: "그렇게 거만하지 마세요."
  },
  {
    id: 218,
    russian: "дружелюбный",
    romanization: "druzhelyubnyy",
    korean: "친근한",
    exampleRussian: "Она очень дружелюбная девушка.",
    exampleRomanization: "Ona ochen' druzhelyubnaya devushka.",
    exampleKorean: "그녀는 매우 친근한 여자입니다."
  },
  {
    id: 219,
    russian: "враждебный",
    romanization: "vrazhdebnyy",
    korean: "적대적인",
    exampleRussian: "Не будь таким враждебным.",
    exampleRomanization: "Ne bud' takim vrazhdebnym.",
    exampleKorean: "그렇게 적대적이지 마세요."
  },
  {
    id: 220,
    russian: "оптимистичный",
    romanization: "optimistichnyy",
    korean: "낙관적인",
    exampleRussian: "Будь более оптимистичным.",
    exampleRomanization: "Bud' boleye optimistichnym.",
    exampleKorean: "더 낙관적이 되세요."
  },
  {
    id: 221,
    russian: "пессимистичный",
    romanization: "pessimistichnyy",
    korean: "비관적인",
    exampleRussian: "Не будь таким пессимистичным.",
    exampleRomanization: "Ne bud' takim pessimistichnym.",
    exampleKorean: "그렇게 비관적이지 마세요."
  },
  {
    id: 222,
    russian: "творческий",
    romanization: "tvorcheskiy",
    korean: "창의적인",
    exampleRussian: "У неё творческий подход.",
    exampleRomanization: "U neyo tvorcheskiy podkhod.",
    exampleKorean: "그녀는 창의적인 접근 방식을 가지고 있습니다."
  },
  {
    id: 223,
    russian: "обычный",
    romanization: "obychnyy",
    korean: "평범한",
    exampleRussian: "Это обычный день.",
    exampleRomanization: "Eto obychnyy den'.",
    exampleKorean: "이것은 평범한 날입니다."
  },
  {
    id: 224,
    russian: "особенный",
    romanization: "osobennyy",
    korean: "특별한",
    exampleRussian: "Это особенный случай.",
    exampleRomanization: "Eto osobennyy sluchay.",
    exampleKorean: "이것은 특별한 경우입니다."
  },
  {
    id: 225,
    russian: "странный",
    romanization: "strannyy",
    korean: "이상한",
    exampleRussian: "Это странное поведение.",
    exampleRomanization: "Eto strannoye povedeniye.",
    exampleKorean: "이것은 이상한 행동입니다."
  },
  {
    id: 226,
    russian: "нормальный",
    romanization: "normal'nyy",
    korean: "정상적인",
    exampleRussian: "Это нормальная реакция.",
    exampleRomanization: "Eto normal'naya reaktsiya.",
    exampleKorean: "이것은 정상적인 반응입니다."
  },
  {
    id: 227,
    russian: "современный",
    romanization: "sovremennyy",
    korean: "현대적인",
    exampleRussian: "Это современное искусство.",
    exampleRomanization: "Eto sovremennoye iskusstvo.",
    exampleKorean: "이것은 현대 예술입니다."
  },
  {
    id: 228,
    russian: "старомодный",
    romanization: "staromodnyy",
    korean: "구식의",
    exampleRussian: "Это старомодная одежда.",
    exampleRomanization: "Eto staromodnaya odezhda.",
    exampleKorean: "이것은 구식 옷입니다."
  },
  {
    id: 229,
    russian: "популярный",
    romanization: "populyarnyy",
    korean: "인기 있는",
    exampleRussian: "Это популярная песня.",
    exampleRomanization: "Eto populyarnaya pesnya.",
    exampleKorean: "이것은 인기 있는 노래입니다."
  },
  {
    id: 230,
    russian: "непопулярный",
    romanization: "nepopulyarnyy",
    korean: "인기 없는",
    exampleRussian: "Это непопулярное мнение.",
    exampleRomanization: "Eto nepopulyarnoye mneniye.",
    exampleKorean: "이것은 인기 없는 의견입니다."
  },
  {
    id: 231,
    russian: "удачливый",
    romanization: "udachlivyy",
    korean: "운이 좋은",
    exampleRussian: "Он очень удачливый человек.",
    exampleRomanization: "On ochen' udachlivyy chelovek.",
    exampleKorean: "그는 매우 운이 좋은 사람입니다."
  },
  {
    id: 232,
    russian: "неудачливый",
    romanization: "neudachlivyy",
    korean: "운이 없는",
    exampleRussian: "Он чувствует себя неудачливым.",
    exampleRomanization: "On chuvstvuyet sebya neudachlivym.",
    exampleKorean: "그는 운이 없다고 느낍니다."
  },
  {
    id: 233,
    russian: "богатый",
    romanization: "bogatyy",
    korean: "부유한",
    exampleRussian: "Это богатый район.",
    exampleRomanization: "Eto bogatyy rayon.",
    exampleKorean: "이것은 부유한 지역입니다."
  },
  {
    id: 234,
    russian: "бедный",
    romanization: "bednyy",
    korean: "가난한",
    exampleRussian: "Это бедная страна.",
    exampleRomanization: "Eto bednaya strana.",
    exampleKorean: "이것은 가난한 나라입니다."
  },
  {
    id: 235,
    russian: "образованный",
    romanization: "obrazovannyy",
    korean: "교육받은",
    exampleRussian: "Он очень образованный человек.",
    exampleRomanization: "On ochen' obrazovannyy chelovek.",
    exampleKorean: "그는 매우 교육받은 사람입니다."
  },
  {
    id: 236,
    russian: "необразованный",
    romanization: "neobrazovannyy",
    korean: "교육받지 못한",
    exampleRussian: "Он кажется необразованным.",
    exampleRomanization: "On kazhetsya neobrazovannym.",
    exampleKorean: "그는 교육받지 못한 것 같습니다."
  },
  {
    id: 237,
    russian: "культурный",
    romanization: "kul'turnyy",
    korean: "교양 있는",
    exampleRussian: "Он очень культурный человек.",
    exampleRomanization: "On ochen' kul'turnyy chelovek.",
    exampleKorean: "그는 매우 교양 있는 사람입니다."
  },
  {
    id: 238,
    russian: "некультурный",
    romanization: "nekul'turnyy",
    korean: "교양 없는",
    exampleRussian: "Это некультурное поведение.",
    exampleRomanization: "Eto nekul'turnoye povedeniye.",
    exampleKorean: "이것은 교양 없는 행동입니다."
  },
  {
    id: 239,
    russian: "вкусный",
    romanization: "vkusnyy",
    korean: "맛있는",
    exampleRussian: "Это очень вкусное блюдо.",
    exampleRomanization: "Eto ochen' vkusnoye blyudo.",
    exampleKorean: "이것은 매우 맛있는 요리입니다."
  },
  {
    id: 240,
    russian: "невкусный",
    romanization: "nevkusnyy",
    korean: "맛없는",
    exampleRussian: "Это невкусная еда.",
    exampleRomanization: "Eto nevkusnaya yeda.",
    exampleKorean: "이것은 맛없는 음식입니다."
  },
  {
    id: 241,
    russian: "удобный",
    romanization: "udobnyy",
    korean: "편리한",
    exampleRussian: "Это очень удобное кресло.",
    exampleRomanization: "Eto ochen' udobnoye kreslo.",
    exampleKorean: "이것은 매우 편리한 의자입니다."
  },
  {
    id: 242,
    russian: "неудобный",
    romanization: "neudobnyy",
    korean: "불편한",
    exampleRussian: "Эта обувь неудобная.",
    exampleRomanization: "Eta obuv' neudobnaya.",
    exampleKorean: "이 신발은 불편합니다."
  },
  {
    id: 243,
    russian: "приятный",
    romanization: "priyatnyy",
    korean: "즐거운",
    exampleRussian: "Это был приятный вечер.",
    exampleRomanization: "Eto byl priyatnyy vecher.",
    exampleKorean: "이것은 즐거운 저녁이었습니다."
  },
  {
    id: 244,
    russian: "неприятный",
    romanization: "nepriyatnyy",
    korean: "불쾌한",
    exampleRussian: "Это неприятный запах.",
    exampleRomanization: "Eto nepriyatnyy zapakh.",
    exampleKorean: "이것은 불쾌한 냄새입니다."
  },
  {
    id: 245,
    russian: "полезный",
    romanization: "poleznyy",
    korean: "유용한",
    exampleRussian: "Это полезный совет.",
    exampleRomanization: "Eto poleznyy sovet.",
    exampleKorean: "이것은 유용한 조언입니다."
  },
  {
    id: 246,
    russian: "бесполезный",
    romanization: "bespoleznyy",
    korean: "쓸모없는",
    exampleRussian: "Это бесполезная информация.",
    exampleRomanization: "Eto bespoleznaya informatsiya.",
    exampleKorean: "이것은 쓸모없는 정보입니다."
  },
  {
    id: 247,
    russian: "опасный",
    romanization: "opasnyy",
    korean: "위험한",
    exampleRussian: "Это опасная ситуация.",
    exampleRomanization: "Eto opasnaya situatsiya.",
    exampleKorean: "이것은 위험한 상황입니다."
  },
  {
    id: 248,
    russian: "безопасный",
    romanization: "bezopasnyy",
    korean: "안전한",
    exampleRussian: "Это безопасный район.",
    exampleRomanization: "Eto bezopasnyy rayon.",
    exampleKorean: "이것은 안전한 지역입니다."
  },
  {
    id: 249,
    russian: "интересный",
    romanization: "interesnyy",
    korean: "흥미로운",
    exampleRussian: "Это интересная книга.",
    exampleRomanization: "Eto interesnaya kniga.",
    exampleKorean: "이것은 흥미로운 책입니다."
  },
  {
    id: 250,
    russian: "скучный",
    romanization: "skuchnyy",
    korean: "지루한",
    exampleRussian: "Это скучный фильм.",
    exampleRomanization: "Eto skuchnyy fil'm.",
    exampleKorean: "이것은 지루한 영화입니다."
  },
  {
    id: 251,
    russian: "важный",
    romanization: "vazhnyy",
    korean: "중요한",
    exampleRussian: "Это важное решение.",
    exampleRomanization: "Eto vazhnoye resheniye.",
    exampleKorean: "이것은 중요한 결정입니다."
  },
  {
    id: 252,
    russian: "неважный",
    romanization: "nevazhnyy",
    korean: "중요하지 않은",
    exampleRussian: "Это неважная деталь.",
    exampleRomanization: "Eto nevazhnaya detal'.",
    exampleKorean: "이것은 중요하지 않은 세부사항입니다."
  },
  {
    id: 253,
    russian: "срочный",
    romanization: "srochnyy",
    korean: "긴급한",
    exampleRussian: "Это срочное дело.",
    exampleRomanization: "Eto srochnoye delo.",
    exampleKorean: "이것은 긴급한 일입니다."
  },
  {
    id: 254,
    russian: "несрочный",
    romanization: "nesrochnyy",
    korean: "긴급하지 않은",
    exampleRussian: "Это несрочный вопрос.",
    exampleRomanization: "Eto nesrochnyy vopros.",
    exampleKorean: "이것은 긴급하지 않은 문제입니다."
  },
  {
    id: 255,
    russian: "официальный",
    romanization: "ofitsial'nyy",
    korean: "공식적인",
    exampleRussian: "Это официальное заявление.",
    exampleRomanization: "Eto ofitsial'noye zayavleniye.",
    exampleKorean: "이것은 공식 성명입니다."
  },
  {
    id: 256,
    russian: "неофициальный",
    romanization: "neofitsial'nyy",
    korean: "비공식적인",
    exampleRussian: "Это неофициальная встреча.",
    exampleRomanization: "Eto neofitsial'naya vstrecha.",
    exampleKorean: "이것은 비공식 모임입니다."
  },
  {
    id: 257,
    russian: "настоящий",
    romanization: "nastoyashchiy",
    korean: "진짜의",
    exampleRussian: "Это настоящий бриллиант.",
    exampleRomanization: "Eto nastoyashchiy brilliant.",
    exampleKorean: "이것은 진짜 다이아몬드입니다."
  },
  {
    id: 258,
    russian: "поддельный",
    romanization: "podel'nyy",
    korean: "가짜의",
    exampleRussian: "Это поддельный документ.",
    exampleRomanization: "Eto podel'nyy dokument.",
    exampleKorean: "이것은 가짜 문서입니다."
  },
  {
    id: 259,
    russian: "правильный",
    romanization: "pravil'nyy",
    korean: "올바른",
    exampleRussian: "Это правильный ответ.",
    exampleRomanization: "Eto pravil'nyy otvet.",
    exampleKorean: "이것은 올바른 답입니다."
  },
  {
    id: 260,
    russian: "неправильный",
    romanization: "nepravil'nyy",
    korean: "잘못된",
    exampleRussian: "Это неправильное решение.",
    exampleRomanization: "Eto nepravil'noye resheniye.",
    exampleKorean: "이것은 잘못된 결정입니다."
  },
  {
    id: 261,
    russian: "точный",
    romanization: "tochnyy",
    korean: "정확한",
    exampleRussian: "Это точные данные.",
    exampleRomanization: "Eto tochnyye dannyye.",
    exampleKorean: "이것은 정확한 데이터입니다."
  },
  {
    id: 262,
    russian: "неточный",
    romanization: "netochnyy",
    korean: "부정확한",
    exampleRussian: "Это неточная информация.",
    exampleRomanization: "Eto netochnaya informatsiya.",
    exampleKorean: "이것은 부정확한 정보입니다."
  },
  {
    id: 263,
    russian: "полный",
    romanization: "polnyy",
    korean: "가득 찬",
    exampleRussian: "Это полный стакан.",
    exampleRomanization: "Eto polnyy stakan.",
    exampleKorean: "이것은 가득 찬 잔입니다."
  },
  {
    id: 264,
    russian: "пустой",
    romanization: "pustoy",
    korean: "빈",
    exampleRussian: "Это пустая коробка.",
    exampleRomanization: "Eto pustaya korobka.",
    exampleKorean: "이것은 빈 상자입니다."
  },
  {
    id: 265,
    russian: "сухой",
    romanization: "sukhoy",
    korean: "건조한",
    exampleRussian: "Это сухое полотенце.",
    exampleRomanization: "Eto sukhoye polotentse.",
    exampleKorean: "이것은 건조한 수건입니다."
  },
  {
    id: 266,
    russian: "мокрый",
    romanization: "mokryy",
    korean: "젖은",
    exampleRussian: "Это мокрая одежда.",
    exampleRomanization: "Eto mokraya odezhda.",
    exampleKorean: "이것은 젖은 옷입니다."
  },
  {
    id: 267,
    russian: "чистый",
    romanization: "chistyy",
    korean: "깨끗한",
    exampleRussian: "Это чистая рубашка.",
    exampleRomanization: "Eto chistaya rubashka.",
    exampleKorean: "이것은 깨끗한 셔츠입니다."
  },
  {
    id: 268,
    russian: "грязный",
    romanization: "gryaznyy",
    korean: "더러운",
    exampleRussian: "Это грязная посуда.",
    exampleRomanization: "Eto gryaznaya posuda.",
    exampleKorean: "이것은 더러운 그릇입니다."
  },
  {
    id: 269,
    russian: "тяжёлый",
    romanization: "tyazhyolyy",
    korean: "무거운",
    exampleRussian: "Это тяжёлая сумка.",
    exampleRomanization: "Eto tyazhyolaya sumka.",
    exampleKorean: "이것은 무거운 가방입니다."
  },
  {
    id: 270,
    russian: "лёгкий",
    romanization: "lyogkiy",
    korean: "가벼운",
    exampleRussian: "Это лёгкое пальто.",
    exampleRomanization: "Eto lyogkoye pal'to.",
    exampleKorean: "이것은 가벼운 코트입니다."
  },
  {
    id: 271,
    russian: "громкий",
    romanization: "gromkiy",
    korean: "시끄러운",
    exampleRussian: "Это громкая музыка.",
    exampleRomanization: "Eto gromkaya muzyka.",
    exampleKorean: "이것은 시끄러운 음악입니다."
  },
  {
    id: 272,
    russian: "тихий",
    romanization: "tikhiy",
    korean: "조용한",
    exampleRussian: "Это тихая улица.",
    exampleRomanization: "Eto tikhaya ulitsa.",
    exampleKorean: "이것은 조용한 거리입니다."
  },
  {
    id: 273,
    russian: "быстрый",
    romanization: "bystryy",
    korean: "빠른",
    exampleRussian: "Это быстрая машина.",
    exampleRomanization: "Eto bystraya mashina.",
    exampleKorean: "이것은 빠른 차입니다."
  },
  {
    id: 274,
    russian: "медленный",
    romanization: "medlennyy",
    korean: "느린",
    exampleRussian: "Это медленный компьютер.",
    exampleRomanization: "Eto medlennyy komp'yuter.",
    exampleKorean: "이것은 느린 컴퓨터입니다."
  },
  {
    id: 275,
    russian: "простой",
    romanization: "prostoy",
    korean: "간단한",
    exampleRussian: "Это простое решение.",
    exampleRomanization: "Eto prostoye resheniye.",
    exampleKorean: "이것은 간단한 해결책입니다."
  },
  {
    id: 276,
    russian: "сложный",
    romanization: "slozhnyy",
    korean: "복잡한",
    exampleRussian: "Это сложная задача.",
    exampleRomanization: "Eto slozhnaya zadacha.",
    exampleKorean: "이것은 복잡한 과제입니다."
  },
  {
    id: 277,
    russian: "дешёвый",
    romanization: "deshyovyy",
    korean: "저렴한",
    exampleRussian: "Это дешёвый отель.",
    exampleRomanization: "Eto deshyovyy otel'.",
    exampleKorean: "이것은 저렴한 호텔입니다."
  },
  {
    id: 278,
    russian: "дорогой",
    romanization: "dorogoy",
    korean: "비싼",
    exampleRussian: "Это дорогой ресторан.",
    exampleRomanization: "Eto dorogoy restoran.",
    exampleKorean: "이것은 비싼 레스토랑입니다."
  },
  {
    id: 279,
    russian: "свежий",
    romanization: "svezhiy",
    korean: "신선한",
    exampleRussian: "Это свежий хлеб.",
    exampleRomanization: "Eto svezhiy khleb.",
    exampleKorean: "이것은 신선한 빵입니다."
  },
  {
    id: 280,
    russian: "несвежий",
    romanization: "nesvezhiy",
    korean: "신선하지 않은",
    exampleRussian: "Это несвежая рыба.",
    exampleRomanization: "Eto nesvezhaya ryba.",
    exampleKorean: "이것은 신선하지 않은 생선입니다."
  },
  {
    id: 281,
    russian: "острый",
    romanization: "ostryy",
    korean: "매운",
    exampleRussian: "Это острый соус.",
    exampleRomanization: "Eto ostryy sous.",
    exampleKorean: "이것은 매운 소스입니다."
  },
  {
    id: 282,
    russian: "пресный",
    romanization: "presnyy",
    korean: "싱거운",
    exampleRussian: "Это пресная еда.",
    exampleRomanization: "Eto presnaya yeda.",
    exampleKorean: "이것은 싱거운 음식입니다."
  },
  {
    id: 283,
    russian: "сладкий",
    romanization: "sladkiy",
    korean: "달콤한",
    exampleRussian: "Это сладкое яблоко.",
    exampleRomanization: "Eto sladkoye yabloko.",
    exampleKorean: "이것은 달콤한 사과입니다."
  },
  {
    id: 284,
    russian: "кислый",
    romanization: "kislyy",
    korean: "신",
    exampleRussian: "Это кислый лимон.",
    exampleRomanization: "Eto kislyy limon.",
    exampleKorean: "이것은 신 레몬입니다."
  },
  {
    id: 285,
    russian: "горький",
    romanization: "gor'kiy",
    korean: "쓴",
    exampleRussian: "Это горький шоколад.",
    exampleRomanization: "Eto gor'kiy shokolad.",
    exampleKorean: "이것은 쓴 초콜릿입니다."
  },
  {
    id: 286,
    russian: "солёный",
    romanization: "solyonyy",
    korean: "짠",
    exampleRussian: "Это солёный суп.",
    exampleRomanization: "Eto solyonyy sup.",
    exampleKorean: "이것은 짠 수프입니다."
  }
];

export const chapters: Chapter[] = [];

for (let i = 0; i < frequentWords.length; i += 20) {
    const chapterWords = frequentWords.slice(i, i + 20);
    chapters.push({
      id: Math.floor(i / 20) + 1,
      title: `Chapter ${Math.floor(i / 20) + 1}`,
      words: chapterWords
    });
}