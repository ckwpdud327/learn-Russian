export interface FrequentWord {
    id: number;
    russian: string;
    romanization: string;
    korean: string;
    example: string;
  }
  
  export const frequentWords: FrequentWord[] = [
    {
      id: 1,
      russian: "и",
      romanization: "i",
      korean: "그리고",
      example: "Я люблю чай и кофе. (Ya lyublyu chay i kofe.) - 나는 차와 커피를 좋아합니다."
    },
    {
      id: 2,
      russian: "в",
      romanization: "v",
      korean: "~에, ~안에",
      example: "Я живу в Москве. (Ya zhivu v Moskve.) - 나는 모스크바에 삽니다."
    },
    {
      id: 3,
      russian: "не",
      romanization: "ne",
      korean: "~않다",
      example: "Я не знаю. (Ya ne znayu.) - 나는 모릅니다."
    },
    {
      id: 4,
      russian: "на",
      romanization: "na",
      korean: "~위에, ~에",
      example: "Книга на столе. (Kniga na stole.) - 책이 테이블 위에 있습니다."
    },
    {
      id: 5,
      russian: "я",
      romanization: "ya",
      korean: "나",
      example: "Я студент. (Ya student.) - 나는 학생입니다."
    },
    {
      id: 6,
      russian: "быть",
      romanization: "byt'",
      korean: "~이다, 있다",
      example: "Я буду дома. (Ya budu doma.) - 나는 집에 있을 것입니다."
    },
    {
      id: 7,
      russian: "он",
      romanization: "on",
      korean: "그 (남성)",
      example: "Он врач. (On vrach.) - 그는 의사입니다."
    },
    {
      id: 8,
      russian: "с",
      romanization: "s",
      korean: "~와 함께",
      example: "Я иду с другом. (Ya idu s drugom.) - 나는 친구와 함께 갑니다."
    },
    {
      id: 9,
      russian: "что",
      romanization: "chto",
      korean: "무엇",
      example: "Что это? (Chto eto?) - 이게 뭐죠?"
    },
    {
      id: 10,
      russian: "а",
      romanization: "a",
      korean: "그런데",
      example: "Я русский, а ты? (Ya russkiy, a ty?) - 나는 러시아인인데, 너는?"
    },
    {
      id: 11,
      russian: "по",
      romanization: "po",
      korean: "~을 따라, ~에 의하면",
      example: "Мы идем по улице. (My idem po ulitse.) - 우리는 거리를 따라 걷고 있습니다."
    },
    {
      id: 12,
      russian: "это",
      romanization: "eto",
      korean: "이것은",
      example: "Это мой дом. (Eto moy dom.) - 이것은 내 집입니다."
    },
    {
      id: 13,
      russian: "как",
      romanization: "kak",
      korean: "어떻게",
      example: "Как дела? (Kak dela?) - 어떻게 지내세요?"
    },
    {
      id: 14,
      russian: "к",
      romanization: "k",
      korean: "~로, ~에게",
      example: "Я иду к другу. (Ya idu k drugu.) - 나는 친구에게 갑니다."
    },
    {
      id: 15,
      russian: "но",
      romanization: "no",
      korean: "그러나",
      example: "Я хочу пойти, но у меня нет времени. (Ya khochu poyti, no u menya net vremeni.) - 나는 가고 싶지만 시간이 없습니다."
    },
    {
      id: 16,
      russian: "они",
      romanization: "oni",
      korean: "그들",
      example: "Они студенты. (Oni studenty.) - 그들은 학생들입니다."
    },
    {
      id: 17,
      russian: "мы",
      romanization: "my",
      korean: "우리",
      example: "Мы друзья. (My druz'ya.) - 우리는 친구들입니다."
    },
    {
      id: 18,
      russian: "так",
      romanization: "tak",
      korean: "그렇게",
      example: "Так хорошо! (Tak khorosho!) - 그렇게 좋아요!"
    },
    {
      id: 19,
      russian: "у",
      romanization: "u",
      korean: "~에게 (소유)",
      example: "У меня есть собака. (U menya yest' sobaka.) - 나는 개가 있습니다."
    },
    {
      id: 20,
      russian: "вы",
      romanization: "vy",
      korean: "당신들, 당신(존칭)",
      example: "Вы говорите по-русски? (Vy govorite po-russki?) - 당신은 러시아어를 하십니까?"
    }
  ];