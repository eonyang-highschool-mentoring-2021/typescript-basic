class Startup {
  /**
   * @name basic_type(기본타입)
   * @description 타입스크립트의 기본 타입입니다.
   * 1. 진위값
   * 2. 숫자
   * 3. 문자열
   * 4. 배열
   * 5. 튜플
   * 6. 열거형
   * 7. Any
   * 8. Void
   * 9. Null and Undefined
   * 10. Never
   * 11. 객체 (Object)
   */
  public static basicTypeStudy(): number {
    /**
     * @name 1.boolean_타입
     * 참/거짓, 진위값을 가지는 타입
     * true, false
     */
    let isDone: boolean = false;

    /**
     * @name 2.number_타입
     * 16, 10, 2, 8 진수를 포함하는 모든 숫자를 표현하는 타입.
     * 실제 내부 구현은 부동 소수 값으로 표현된다.
     *
     * ex) int, double, float, ...
     */
    let decimal: number = 25;
    let hex: number = 0xf000d;
    let binary: number = 0b1010;
    let octal: number = 0o733;

    /**
     * @name 3.string_타입
     * 텍스트 타입, 문자열 데이터의 타입을 표현.
     * 작은 따움표, 큰 따움표, template 문자열 사용시 string 타입.
     */
    let str1: string = 'Kim Beob Woo';
    let str3: string = 'test test';
    let str2: string = `My name is ${str1}, I'm ${decimal} years old ${'12312'}`;

    /**
     * @name 4.array_타입
     */
    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3]; //generic initializing

    /**
     * @name 5.tuple_타입
     * 요소의 타입과 개수가 고정된 배열을 표현
     * 정해진 인덱스에 위치한 요소에 접근하면 해당 타입이 나타남.
     */
    let tp: [string, number];
    // 초기화
    tp = ['hello', 10]; // 성공
    // 잘못된 초기화
    // x = [10, "hello"]; // 오류

    /**
     * @name 6.enum_타입
     * 열거형, 집합을 표현하고 그 집합의 요소에 이름을 쉽게 붙이고 사용하기 위함.
     *
     * 기본적으로 enum 은 0부터 시작하여 요소(멤버)의 번호를 메기지만, 커스텀가능.
     * enum의 유용한 기능 중 하나는 매겨진 값을 사용해 enum 멤버의 이름을 알아낼 수 있다는 것
     */
    enum Color45 {
      Red,
      Green,
      Blue,
    } // 나만의 type 을 생성, custom type
    let c: Color45 = Color45.Green;

    console.log(Color45[c]); // output: green

    enum Color2 {
      Red = 1,
      Green,
      Blue,
    }
    let c2: Color2 = Color2.Green;
    let colorName: string = Color2[2]; // output: green
    let colorName2: string = Color2[3]; // output: blue

    /**
     * @name 7.any_타입
     * any 타입은 타입의 일부만 알고 전체는 알지 못할 때 유용
     *
     * 기존에 JavaScript로 작업할 수 있는 강력한 방법으로,
     * 컴파일 중에 점진적으로 타입 검사를 하거나 하지 않을 수 있다.
     */
    let notSure: any = '4';
    notSure = 'maybe a string instead';
    notSure = false; // 성공, 분명히 진위값

    let list: any[] = [1, true, 'free'];
    list[1] = 100; // 참신한 코딩 방법 -> 가독성을 떨어뜨리고 코드의 질을 낮출 수도 있다.

    /**
     * @name 8.void_타입
     * void를 타입 변수를 선언하는 것은 유용하지 않은데, 왜냐하면 그 변수에는 null
     * (--strictNullChecks을 사용하지 않을 때만 해당, 자세한 건 다음 섹션을 참고)
     * 또는 undefined 만 할당할 수 있기 때문
     */
    function warnUser(): void {
      console.log('This is my warning message');
    }
    let unusable: void = undefined;
    unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만

    /**
     * @name 9.null_and_undefined_타입
     * undefined 과 null 둘 다 각각 자신의
     * 타입 이름으로 undefined , null로 사용
     * null 과 undefined는 다른 모든 타입의 하위 타입
     * (null과 undefined를 number 같은 타입에 할당할 수 있다)
     *
     * --strictNullChecks를 사용하면, null과 undefined는 오직 any와 각자 자신들 타입에만 할당 가능
     */
    let u: undefined = undefined;
    let n: null = null;
    decimal = null;
    octal = undefined; // web service, app service -> data 송수신 ('q123', , ... ) -> internet network request, response

    /**
     * @name 10.never_타입
     * never 타입은 절대 발생할 수 없는 타입을 나타냄
     * 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서
     * 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰인다.
     */
    // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
    function error(message: string): never {
      // 왜 항상 이함수는 에러를 리턴? return type -> never
      throw new Error(message); // 404 notfound -> throw error code: 404, message: 'not found'
    }

    // 반환 타입이 never로 추론된다.
    function fail() {
      return error('Something failed');
    }

    // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
    function infiniteLoop(): never {
      while (true) { }
    }

    /**
     * @name 11.object_타입
     * object는 원시 타입이 아닌 타입. (구조체, union)
     *
     * 객체 -> 속성(속성명)과 그 값의 쌍으로 이루어진 변수, 데이터
     * (number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지)
     */
    let obj1 = {
      name: '11a', // name 이라는 속성에 '11a' 값
      age: 25, // age 라는 속성에 25 값
    };
    obj1.age = obj1.age + 1; // 객체명 . 프로퍼티명(속성명)

    /**
     * @name 타입_단언(Type_assertions)
     * typescript 컴파일러보다 개발자가 값에 대한 이해도가 높은 경우가 존재한다.
     * 이런 경우에는 컴파일러에게 개발자가 타이핑한 타입으로 인식하라고 강제로 컴파일 타임의
     * 타입 검사형을 지정 할 수 있다.
     */
    let someValue: any = 'this is a string'; // 얘는 문자열
    let strLength: number = (someValue as string).length; // string 기본 메소드를 사용 가능. 왜 ? string type 이니까

    return 0;
  }

  /**
   * @name 인터페이스란?
   * @description TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 점.
   * 얘는 이렇게 구성되어야 한다. -> 정의 , 규정, 약속 뭐에 대에서 정의하고 규정하고 약속? -> 타입, 값의 타입.
   * 이를 "덕 타이핑(duck typing)" 혹은 "구조적 서브타이핑 (structural subtyping)" 이라고 한다.
   *
   * TypeScript에서, 인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것뿐만
   * 아니라 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법
   */
  public static interfaceStudy(): number {
    /**
     * @name 간단한_예제
     * 컴파일러는 최소한 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사
     *
     * 타입 검사는 프로퍼티들의 순서를 요구하지 않는다.
     * 단지 인터페이스가 요구하는 프로퍼티들이 존재하는지와 프로퍼티들이 요구하는 타입을 가졌는지만을 확인
     */
    interface LabeledValue {
      label: string; // label 이라는 속성명에 string 값이 와야함.
    }

    function printLabel(labeledObj: LabeledValue) {
      console.log(labeledObj.label);
    }

    let myObj = { size: 10, label: 'Size 10 Object', test: false }; // 추가적으로 size 라는 속성에 10 이라는 값이 들어감.
    printLabel(myObj);

    /**
     * @name 선택적_프로퍼티(Optionaly)
     * 어떤 조건에서만 존재하거나 아예 없을 수도 있는 인터페이스의 속성을 정의하는데 사용
     * 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 "option bags" 같은 패턴을 만들 때 유용
     *
     * 선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고,
     * 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ?를 붙여 표시
     */
    interface SquareConfig {
      color?: string; // color 라는 속성에 string 값이 올 수도 있다.
      width?: number;
    }

    function createSquare(config: SquareConfig): {
      color: string;
      area: number;
    } {
      let newSquare = { color: 'white', area: 100 };
      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }

    let mySquare = createSquare({ color: 'black' });

    /**
     * @name 읽기전용_프로퍼티(readonly)
     * 일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야 할 수 도 있다.
     * 프로퍼티 이름 앞에 readonly를 넣어서 이를 지정할 수 있다.
     * -> safe coding, 변해서는 안되는 값을 못바꾸게 하는것!
     */
    interface Point {
      readonly x: number;
      readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 }; // 초기화, initilaizing
    // p1.x = 5; // 오류!
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12; // 오류!
    // ro.push(5); // 오류!
    // ro.length = 100; // 오류!
    // a = ro; // 오류!
    // safe 한 코딩, 개발자가 보나, 컴파일러가 보나
    interface PointWritable {
      x: number;
      readonly y: number;
    }
    let p2 = p1 as PointWritable;
    p2.x = 30;
    a = ro as number[]; // type assertion 을 통해 형변환 (읽기 가능)

    /**
     * @name 초과_프로퍼티_검사_(Excess_Property_Checks)
     * 객체 리터럴은 다른 변수에 할당할 때나 인수로 전달할 때,
     * 특별한 처리를 받고, 초과 프로퍼티 검사 (excess property checking)를 받는다.
     *
     * 객체 리터럴이 "대상 타입 (target type)"이 갖고 있지 않은 프로퍼티를 갖고 있으면, 에러가 발생
     */
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare2(config: SquareConfig): {
      color: string;
      area: number;
    } {
      let newSquare = { color: 'white', area: 100 };
      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }

    // let mySquare = createSquare({ colour: "red", width: 100 });
    interface SquareConfig2 {
      color: string;
      width: number; // 원래 와야하는 타입
      [kim: string]: any; // 초과 타입, 뭐가올지는 모름., 원래는 무시하지만, 이 구문을 통해 무시하지 않고 받아들임.
      // 위험한 코딩, 개발자도 모르는 코딩.
    }

    function createSquare3(config: SquareConfig2): object {
      console.log(config);
      return config;
    }

    /**
     * @name 함수_타입_(Function_Types)
     * 프로퍼티로 객체를 기술하는 것 외에, 인터페이스는 함수 타입을 설명 가능
     * 올바른 함수 타입 검사를 위해, 매개변수의 이름이 같을 필요는 없다.
     */
    interface SearchFunc {
      (s: string, ss: string): boolean; // 앞에 괄호 안에는 인자명과 인자 타입, 뒤에는 함수의 반환값.
    }

    let mySearch: SearchFunc;

    mySearch = function (source: string, subString: string) {
      let result = source.search(subString);
      return false; // 반환값은 boolean,
    };

    function test() {
      return 30; // 함수가 종료됨과 동시에 30을 반환해라.
    }
    // 함수 -> 입력값을 받아서 처리를 하고 반환값을 내놓는것.
    let testOver = test(); // 함수가 종료됬으니까 30을 testOver 에 대입.

    return 0;
  }

  /**
   * @name 함수란?
   * @description 함수는 Typescript 로 구성되는 모든 애플리케이션의 기본 요소이다.
   * 근본적으로 함수는 하나의 특별한 목적의 작업을 수행하기 위해 독립적으로 설계된 코드의 집합.
   *
   * 1. 재사용 가능한 기능을 만들어낸다.
   * 2. 프로그램의 문제를 파악하기 쉽게 한다.
   *
   * 클래스 모방, 정보 은닉, 모듈 및 추상화 계층에 대한 방법을 함수를 통해 구현 할 수 있다.
   */
  public static functionStudy(): number {
    /**
     * @name 기명함수
     * 자신의 고유 이름이 존재하는 함수.
     */
    function addFuncWithName(x: number, y: number): number {
      return x + y;
    }

    /**
     * @name 익명함수
     * 대입되는 변수의 이름을 함수의 이름으로 사용하는 함수.
     */
    let addFuncWithAnonymous = function (x: number, y: number): number {
      return x + y;
    };

    /**
     * @name 함수의_타입정의
     * 함수의 인자와 함수의 반환값에 대한 타입을 정의한다.
     */
    let addFuncVariableWithType: (a: number, b: number) => number =
      addFuncWithAnonymous;

    /**
     * @name 함수의_타입_추론
     * inferring the types 혹은 contextual typing 이라는 타입 추론 형태이다.
     * 핵심은 함수를 정의하는 방정식의 어느 한쪽이든 타입이 정의 되어있다면 그 타입으로
     * 추론한다는점.
     */
    let addFuncWithOnsideType1 = function (x: number, y: number): number {
      return x + y;
    };
    let addFuncWithOnsideType2: (
      baseValue: number,
      increment: number
    ) => number = function (x, y) {
      return x + y;
    };

    /**
     * @name 필수_매개변수
     * 기본적인, default 로 설정되는 매개변수 정의 방식이다.
     * 필수 매개변수는 함수 호출 시 반드시 정의된 타입으로 인자가 전달되어야 한다.
     */
    function buildName(firstName: string, lastName: string) {
      return firstName + ' ' + lastName;
    }

    // let result1 = buildName("Bob");                  // 오류, 너무 적은 매개변수
    // let result2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
    let result3 = buildName('Bob', 'Adams'); // 정확함

    /**
     * @name 선택적_매개변수
     * 물음표를 매개변수의 뒤에 붙여 해당 매개변수는 선택적임을 표기한다.
     * 선택적인 매개변수는 함수 호출 시 전달이 될 수도 있고 안될 수도 있다.
     *
     * 하단 예제에서 선택적 매개변수인 lastName 을 오류없이 올바르게 사용하기 위해서는
     * 함수 내부에서 조건문을 통해 lastName 변수가 존재함을 확인후 사용해야 한다.
     */
    function buildName2(firstName: string, lastName?: string) {
      if (lastName) return firstName + ' ' + lastName;
      else return firstName;
    }

    let result4 = buildName2('Bob'); // 지금은 바르게 동작
    // let result5 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
    let result6 = buildName2('Bob', 'Adams'); // 정확함

    /**
     * @name 기본_매개변수
     * 위의 선택적 매개변수와 개념은 비슷하다.
     * 물음표 대신 {변수명} = 기본값 의 형태로 매개변수를 정의한다.
     *
     * 하단의 예제와 같이 정의된 기본 매개변수 lastName 은 선택적 매개변수의 성질을 가진다.
     * 만약 lastName 이 함수 호출 시 전달되지 않는다면 lastName 은 기본값을 가지고 함수가
     * 실행되게 된다.
     *
     * 위의 선택적 매개변수때와 다르게, 기본값이 존재하기 때문에 조건문이 필요없음을 알 수 있다.
     */
    function buildName3(firstName: string, lastName = 'Smith') {
      return firstName + ' ' + lastName;
    }

    let result7 = buildName3('Bob'); // 올바르게 동작, "Bob Smith" 반환
    let result8 = buildName3('Bob', undefined); // 여전히 동작, 역시 "Bob Smith" 반환
    // let result9 = buildName3("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
    let result10 = buildName3('Bob', 'Adams'); // 정확함

    /** 
     * @name 나머지_매개변수
     * 위의 필수, 선택적, 기본 매개변수는 어찌되었든 하나의 매개변수에 하나의 값이 전달된다.
     * 나머지 매개변수는 함수가 호출 될 때 몇개의 매개변수가 인자로 전달 될 지 모를떄 사용한다.
     *
     * 하단의 예제에서 restOfName 이라는 매개변수는 함수에 추가로 전달된 매개변수를 배열의 형태로
     * 저장하게 된다.
     * ... 이라는 문법을 통해 나머지 매개변수임을 표기하고 있다.
     */
    function restParamsFunc(firstName: string, ...restOfName: string[]) {
      return firstName + ' ' + restOfName.join(' ');
    }

    // employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
    let employeeName = restParamsFunc('Joseph', 'Samuel', 'Lucas', 'MacKinzie');


    /**
     * @name this_매개변수에_대하여
     * this 는 함수가 호출 될 때 정해지는 변수 라고 생각 할 수 있다.
     * 이를 사용하기 위해서는 함수가 실행되는 context  에 대해 알고 있어야 한다는 전제가 필요.
     */
    let deck = {
      suits: ['hearts', 'spades', 'clubs', 'diamonds'],
      cards: Array(52),
      createCardPicker: function () {
        return function () {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          /* 개발자는 여기서 사용한 this 가 deck 객체 자신임을 알고 있어야 한다. */
          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
      },
    };

    /**
     * @error 중요, this 가 어디에 바인딩 되는지에 대한 문제.
     * typescript 에서는 최상위 레벨의 비-메소드 문법을 통한 함수 호출의 경우
     * this 를 root 혹은 undefind 로 하게 된다.
     * 
     * 따라서 하단 주석처리된 부분에서 비-메소드 형태의  함수 호출시 
     * 해당 함수의 내부에서 호출하는 this에 의해 오류가 발생하게 된다.
     */
    let cardPickerInit = deck.createCardPicker();
    // let pickedCard = cardPickerInit(); // 오류 발생

    /**
     * @name 화살표함수와_this_바인딩
     * es6 문법부터 사용가능한 화살표 함수 문법은 this 의 바인딩을 호출 된 곳이아닌
     * 생성된 쪽의 this 를 사용하게 된다.
     * 
     * 따라서 위와 동일하게 비-메소드 형태의 함수 호출을 사용하더라도
     * this 가 root 수준에서 캡쳐되거나 undefined 로 캡쳐되지 않아 오류가 발생하지 않는다.
     */
    let deck2 = {
      suits: ['hearts', 'spades', 'clubs', 'diamonds'],
      cards: Array(52),
      createCardPicker: function () {
        // NOTE: 아랫줄은 화살표 함수로써, 'this'를 deck 객체에 바인딩 할 수 있도록 한다.
        return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
      },
    };

    let cardPicker = deck2.createCardPicker();
    let pickedCard = cardPicker(); // 정상 작동

    // alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

    /**
     * @name 바인딩된_this_타입정의
     * 위에서는 바인딩된 this 가 오류를 발생시키지 않지만 typescript 컴파일러는 해당 this의 
     * 타입을 알 수 없어 any 타입으로 처리하게 된다.
     * 
     * 제일 처음에 말햇던, 개발자는 반드시 함수의 실행되는 context 를 알고 있어야 한다는 문제를
     * 더욱 어렵게 만드는 원인이 되므로 this 의 타입을 typescript 컴파일러가 알 수 있도록 하는
     * 것이 매우 중요하다.
     */
    interface Card {
      suit: string;
      card: number;
    }
    interface Deck {
      suits: string[];
      cards: number[];
      createCardPicker(this: Deck): () => Card;
    }
    let deckWithType: Deck = {
      suits: ['hearts', 'spades', 'clubs', 'diamonds'],
      cards: Array(52),
      // NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 알려준다.
      createCardPicker: function (this: Deck) {
        return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
      },
    };

    let cardPicker2 = deckWithType.createCardPicker();
    let pickedCard2 = cardPicker2();

    // alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);


    /**
     * @name 함수의_오버로드
     * 함수의 오버로드란 프로그래밍 언어에서 사용되는 함수의 특징중 하나이다.
     * 같은 함수 이름을 갖고 있더라도 매개변수, 리턴타입이 다른 함수를 정의하고 
     * 매개변수와 리턴타입에 맞게 해당 함수가 적절하게 호출되게 하는 것을 말한다.
     * 
     * 하단에 pickCardWithOverload 라는 동일한 함수명을 가진 함수가 3개 정의되어있다.
     * (함수명은 동일하지만 매개변수와 리턴타입이 서로 다름.)
     */
    let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

    function pickCardWithOverload(x: { suit: string; card: number }[]): number;
    function pickCardWithOverload(x: number): { suit: string; card: number };
    function pickCardWithOverload(x): any {
      // 인자가 배열 또는 객체인지 확인
      // 만약 그렇다면, deck이 주어지고 card를 선택한다.
      if (typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
      }
      // 그렇지 않다면 그냥 card를 선택 한다.
      else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
      }
    }

    let myDeck = [
      { suit: 'diamonds', card: 2 },
      { suit: 'spades', card: 10 },
      { suit: 'hearts', card: 4 },
    ];
    let pickedCardWithOverload1 = myDeck[pickCardWithOverload(myDeck)];
    // alert('card: ' + pickedCardWithOverload1.card + ' of ' + pickedCardWithOverload1.suit);

    let pickedCardWithOverload2 = pickCardWithOverload(15);
    // alert('card: ' + pickedCardWithOverload2.card + ' of ' + pickedCardWithOverload2.suit);
    return 0;
  }

  public static variableDeclarationStudy(): number {
    /**
     * @name var_변수선언
     * var 를 통한 변수선언은 JS 에서 쓰이는 방식이다.
     * 감싸고 있는 블럭과 상관 없이 var 변수를 감싼 모든 모듈, 함수, 네임스페이스, 전역 스코프에서
     * 접근이 가능하고 중복 선언이 가능하다.
     * 
     * 따라서, 이런 특징때문에 반복문/주기 함수와 함께 사용 시 치명적 문제가 발생한다.
     */
    var declarationWithVar: number = 30;
    var declarationWithVar: number = 22;
    // var declarationWithVar: string = 'aa'; // 오류! type 은 일치해야함.

    function reDeclarationWithVar(): void {
      var outerVar = 30;
      {
        var innerVar = 50;
      }

      console.log(outerVar);
      console.log(innerVar);
    }

    /**
     * @name let_변수선언
     * var 과 동일하게 변수 선언을 위한 선언자이다.
     * var 과 다르게 선언된 블록 내부에서만 접근이 가능한 블록 스코핑을 사용.
     * 
     * 하지만, 접근이 내부에서만 가능할 뿐 메모리상에 해당 변수는 존재한다.
     * 지역 변수 같은 전역 변수의 개념. 가장 일반적인 변수선언이다.
     */
    let declarationWithLet: number = 22;
    // let declarationWithLet: number = 33; // 오류! let 은 동일명을 통해 재선언 불가

    function reDeclarationWithLet(): void {
      let outerLet = 30;
      {
        let innerLet = 50;
      }

      console.log(outerLet);
      // console.log(innerLet); // 오류! let 은 정의된 동수준의 블록에서만 접근
    }

    /**
     * @name const_변수선언
     * let 과 대부분이 동일하나 다른점은 변수 값 바인딩 이후 변경이 불가능하다는 점.
     * 이것은 "재할당" 이 불가능함을 의미한다.
     * 
     * 주의, 객체가 참조하는 값이 불변인 것은 절대 아니다.
     */
    const declarationWithConst = 9;
    const declarationWithConst2 = {
      name: "김법우",
      age: 24
    }

    /* 오류 발생! const 의 주체인 const_obj 의 수정을 시도
    kitty = {
        name : ""..
    }
    */

    // 가능 obj 의 멤버인 age는 수정 가능
    declarationWithConst2.age = 15;


    /**
     * @name 배열_구조분해
     * 여러 변수들을 묶어놓고 해당 변수들에게 배열의 값을 차례로 대입하는
     * 작업에 편의를 제공한다.
     * 
     * 묶여진 변수들간의 관계는 존재하지 않는다.
     */
    // basic case
    let input = [1, 2];
    let input2 = [2, 1];
    let [first, second, third_2] = input;
    // first = input[0], seconde = input[1]

    // re assign with destructing
    [first, second] = input2;
    //[first , second] = ["string 1","stirng 2"]; 
    // 중요 ! 첫 대입에서 타입이 정해진다 , 당연

    // function parameter
    // 함수 인자의 타입은 number[2] 와 동일하다.
    // 하지만 함수 내부인자로는 first , second 라는 서로 다른
    // 변수를 내려 받는다.(배열과 혼동 하지 말것)
    function f([first, second]: [number, number]) {
      console.log(first);
      console.log(second);
    }
    f([1, 2]);

    // various
    // 앞의 2자리를 비워 1,2 를 무시
    let [, , third, fourth] = [1, 2, 3, 4];    // 배열의 인덱스와 구조분해된 
    // 변수에 매칭시킨다.
    let [one, ...rest] = [1, 2, 3, 4];
    // 뒤의 3자리를 ... 연산자를 통해 배열로 입력받음
    // 당연히 rest 의 타입은 number[3]

    /**
     * @name 객체_구조분해
     * 위 배열의 구조분해와 마찬가지이다.
     * 묶여진 객체의 key 와 value 쌍을 "선언없이" 분해하여 다른 변수에
     * 할당 할 수 있다.
     */

    const objectA = {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D'
    };
    var { a, b, c, d } = objectA; // "선언없이" 란 a,b,c,d 의 순차 선언이 없다는 의미.
    var { b, a, c, d } = objectA;

    // 기존 let {a,b} = obj
    // property 이름 변경
    const obj = {
      a: 'A',
      b: 'B'
    }
    let { a: newName1, b: newName2 } = obj;
    console.log(newName1);
    // property 타입 변경 안됨 어떻게 하는?
    //let {a ,b} : {a:number , b:string} = obj;
    console.log("a:" + a);

    // Defualt value
    // property 가 정의 되어 있지 않을 경우 기본 값을 사용하도록 한다
    function keepWholeObject(wholeObject: { a: string, b?: string }): void {
      let { a, b = 1001 } = wholeObject;
      // b 는 ? 연산자를 통해 선택적 사용가능하나 default 값을 지정하기위해
      // 1001 을 대입.
      console.log("a : " + a + ", b : " + b);
    }

    keepWholeObject({ a: "a is string", b: "Is b string too??" });


    /**
     * @name 함수선언과_구조분해
     * 구조분해는 함수 선언에도 사용이 가능하다.
     * 이는 간단한 경우에 한해서 뛰어난 코드 가독성을 가지게 된다.
     * 
     * 하지만 매개변수에는 기본값을 명시하는것이 좋으며 구조분해와 함께라면
     * 이것이 어려울 수 있다.
     * 
     * 주의! 구조 분해 패턴을 반드시 기본값 앞에 삽이해야 한다.
     */
    type C = { a: string, b?: string };    // 구조 분해 패턴 !
    // 타입 C는 프로퍼티 a에게 string type 을,
    // 프로퍼티 b에게 string type or undefined 를 할당한다.
    function func_with_dest({ a, b }: C): void {
      console.log(a + " " + b);
    }
    func_with_dest({ a: "hello ,", b: "world!" });


    /**
     * @name 전개
     * 구조 분해와 반대의 개념이다. 배열을 다른 배열안에,
     * 객체를 다른 객체 안에 전개한다.
     */
    // 배열 전개
    let arr1 = [1, 2]; // arr1 안에 number[2]의 원소 1,2 를 전개
    let arr2 = [3, 4]; // arr2 안에 number[2]의 원소 3,4 를 전개
    let arr3 = [0, ...arr1, ...arr2, 5];
    // arr3 안에 number[2],number[2]의 원소 1,2,3,4를 전개
    console.log("array spread : " + arr3);

    // 객체 전개
    // 동일 한 name property 를 가지는 객체들을 spread 할 경우
    // 하나의 객체로 spread 될 때 뒤에 오는 객체가 덮어쓰게된다
    // 이는 찾기 어려운 문제를 발생 시킬 가능성이 높다

    let originObj = {
      name: "김법우",
      age: 24
    }
    let addtionalObj = {
      run: true
    }
    let spreadObjs = {
      ...originObj,
      ...addtionalObj,
      food: "buger"
    }
    // 즉 여기서 spreadObjs 는 프로퍼티 name, age, run, food 를 가진다.
    console.log(spreadObjs);

    return 0;
  }
}

// Startup.basicTypeStudy();
// Startup.interfaceStudy();
Startup.functionStudy();
Startup.variableDeclarationStudy();

