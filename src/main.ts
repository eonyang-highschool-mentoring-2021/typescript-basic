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
     */
    let decimal: number = 25;
    let hex: number = 0xf000d;
    let binary: number = 0b1010;
    let octal: number = 0o733;

    /**
     * @name 3.string_타입
     * 텍스트타입, 문자열 데이터의 타입을 표현.
     * 작은 따움표, 큰 따움표, template 문자열 사용시 string 타입.
     */
    let str1: string = 'Kim Beob Woo';
    let str2: string = `My name is ${str1}, I'm ${decimal} years old`;

    /**
     * @name 4.array_타입
     */
    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    /**
     * @name 5.tuple_타입
     * 요소의 타입과 개수가 고정된 배열을 표현
     * 정해진 인덱스에 위치한 요소에 접근하면 해당 타입이 나타남.
     */
    let tp: [string, number];
    // 초기화
    tp = ["hello", 10]; // 성공
    // 잘못된 초기화
    // x = [10, "hello"]; // 오류

    /* enum, 열거형 */
    /**
     * @name 6.enum_타입
     * 열거형, 집합을 표현하고 그 집합의 요소에 이름을 쉽게 붙이고 사용하기 위함.
     * 기본적으로 enum 은 0부터 시작하여 요소(멤버)의 번호를 메기지만, 커스텀가능.
     * enum의 유용한 기능 중 하나는 매겨진 값을 사용해 enum 멤버의 이름을 알아낼 수 있다는 것
     */
    enum Color { Red, Green, Blue }
    let c: Color = Color.Green;
    enum Color2 { Red = 1, Green, Blue }
    let c2: Color = Color.Green;
    let colorName: string = Color[2];
    let colorName2: string = Color[2];

    /**
     * @name 7.any_타입
     * any 타입은 타입의 일부만 알고 전체는 알지 못할 때 유용
     * 기존에 JavaScript로 작업할 수 있는 강력한 방법으로, 
     * 컴파일 중에 점진적으로 타입 검사를 하거나 하지 않을 수 있다.
     */
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // 성공, 분명히 진위값

    let list: any[] = [1, true, "free"];
    list[1] = 100;

    /**
     * @name 8.void_타입
     * void를 타입 변수를 선언하는 것은 유용하지 않은데, 왜냐하면 그 변수에는 null
     * (--strictNullChecks을 사용하지 않을 때만 해당, 자세한 건 다음 섹션을 참고)
     * 또는 undefined 만 할당할 수 있기 때문
     */
    function warnUser(): void {
      console.log("This is my warning message");
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
    octal = undefined;

    /**
     * @name 10.never_타입
     * never 타입은 절대 발생할 수 없는 타입을 나타냄 
     * 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서 
     * 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰인다.
     */
    // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
    function error(message: string): never {
      throw new Error(message);
    }

    // 반환 타입이 never로 추론된다.
    function fail() {
      return error("Something failed");
    }

    // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
    function infiniteLoop(): never {
      while (true) {
      }
    }

    /**
     * @name 11.object_타입
     * object는 원시 타입이 아닌 타입.
     * (number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지)
     */
    let obj1 = {
      name: str1,
      age: 25
    };
    obj1.age = obj1.age + 1;

    /**
     * @name 타입_단언(Type_assertions)
     * typescript 컴파일러보다 개발자가 값에 대한 이해도가 높은 경우가 존재한다.
     * 이런 경우에는 컴파일러에게 개발자가 타이핑한 타입으로 인식하라고 강제로 컴파일 타임의
     * 타입 검사형을 지정 할 수 있다.
     */
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;

    return 0;
  }

  /**
    * @name 인터페이스란?
    * @description TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 점.
    * 이를 "덕 타이핑(duck typing)" 혹은 "구조적 서브타이핑 (structural subtyping)" 이라고 한다. 
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
      label: string;
    }

    function printLabel(labeledObj: LabeledValue) {
      console.log(labeledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
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
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      let newSquare = { color: "white", area: 100 };
      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }

    let mySquare = createSquare({ color: "black" });

    /**
     * @name 읽기전용_프로퍼티(readonly)
     * 일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야 할 수 도 있다.
     * 프로퍼티 이름 앞에 readonly를 넣어서 이를 지정할 수 있다.
     * 
     */
    interface Point {
      readonly x: number;
      readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // 오류!
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12; // 오류!
    // ro.push(5); // 오류!
    // ro.length = 100; // 오류!
    // a = ro; // 오류!
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

    function createSquare2(config: SquareConfig): { color: string; area: number } {
      let newSquare = { color: "white", area: 100 };
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
      color?: string;
      width?: number;
      [propName: string]: any;
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
      (s: string, ss: string): boolean;
    }

    let mySearch: SearchFunc;

    mySearch = function (source: string, subString: string) {
      let result = source.search(subString);
      return result > -1;
    }

    return 0;
  }
}

Startup.basicTypeStudy();