var Startup = /** @class */ (function () {
    function Startup() {
    }
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
    Startup.basicTypeStudy = function () {
        /**
         * @name 1.boolean_타입
         * 참/거짓, 진위값을 가지는 타입
         * true, false
         */
        var isDone = false;
        /**
         * @name 2.number_타입
         * 16, 10, 2, 8 진수를 포함하는 모든 숫자를 표현하는 타입.
         * 실제 내부 구현은 부동 소수 값으로 표현된다.
         */
        var decimal = 25;
        var hex = 0xf000d;
        var binary = 10;
        var octal = 475;
        /**
         * @name 3.string_타입
         * 텍스트타입, 문자열 데이터의 타입을 표현.
         * 작은 따움표, 큰 따움표, template 문자열 사용시 string 타입.
         */
        var str1 = 'Kim Beob Woo';
        var str2 = "My name is " + str1 + ", I'm " + decimal + " years old";
        /**
         * @name 4.array_타입
         */
        var list1 = [1, 2, 3];
        var list2 = [1, 2, 3];
        /**
         * @name 5.tuple_타입
         * 요소의 타입과 개수가 고정된 배열을 표현
         * 정해진 인덱스에 위치한 요소에 접근하면 해당 타입이 나타남.
         */
        var tp;
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
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        var c = Color.Green;
        var Color2;
        (function (Color2) {
            Color2[Color2["Red"] = 1] = "Red";
            Color2[Color2["Green"] = 2] = "Green";
            Color2[Color2["Blue"] = 3] = "Blue";
        })(Color2 || (Color2 = {}));
        var c2 = Color.Green;
        var colorName = Color[2];
        var colorName2 = Color[2];
        /**
         * @name 7.any_타입
         * any 타입은 타입의 일부만 알고 전체는 알지 못할 때 유용
         * 기존에 JavaScript로 작업할 수 있는 강력한 방법으로,
         * 컴파일 중에 점진적으로 타입 검사를 하거나 하지 않을 수 있다.
         */
        var notSure = 4;
        notSure = "maybe a string instead";
        notSure = false; // 성공, 분명히 진위값
        var list = [1, true, "free"];
        list[1] = 100;
        /**
         * @name 8.void_타입
         * void를 타입 변수를 선언하는 것은 유용하지 않은데, 왜냐하면 그 변수에는 null
         * (--strictNullChecks을 사용하지 않을 때만 해당, 자세한 건 다음 섹션을 참고)
         * 또는 undefined 만 할당할 수 있기 때문
         */
        function warnUser() {
            console.log("This is my warning message");
        }
        var unusable = undefined;
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
        var u = undefined;
        var n = null;
        decimal = null;
        octal = undefined;
        /**
         * @name 10.never_타입
         * never 타입은 절대 발생할 수 없는 타입을 나타냄
         * 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서
         * 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰인다.
         */
        // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
        function error(message) {
            throw new Error(message);
        }
        // 반환 타입이 never로 추론된다.
        function fail() {
            return error("Something failed");
        }
        // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
        function infiniteLoop() {
            while (true) {
            }
        }
        /**
         * @name 11.object_타입
         * object는 원시 타입이 아닌 타입.
         * (number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지)
         */
        var obj1 = {
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
        var someValue = "this is a string";
        var strLength = someValue.length;
        return 0;
    };
    /**
      * @name 인터페이스란?
      * @description TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 점.
      * 이를 "덕 타이핑(duck typing)" 혹은 "구조적 서브타이핑 (structural subtyping)" 이라고 한다.
      * TypeScript에서, 인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것뿐만
      * 아니라 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법
      */
    Startup.interfaceStudy = function () {
        function printLabel(labeledObj) {
            console.log(labeledObj.label);
        }
        var myObj = { size: 10, label: "Size 10 Object" };
        printLabel(myObj);
        function createSquare(config) {
            var newSquare = { color: "white", area: 100 };
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }
        var mySquare = createSquare({ color: "black" });
        var p1 = { x: 10, y: 20 };
        // p1.x = 5; // 오류!
        var a = [1, 2, 3, 4];
        var ro = a;
        // ro[0] = 12; // 오류!
        // ro.push(5); // 오류!
        // ro.length = 100; // 오류!
        // a = ro; // 오류!
        a = ro; // type assertion 을 통해 형변환 (읽기 가능)
        function createSquare2(config) {
            var newSquare = { color: "white", area: 100 };
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }
        function createSquare3(config) {
            console.log(config);
            return config;
        }
        var mySearch;
        mySearch = function (source, subString) {
            var result = source.search(subString);
            return result > -1;
        };
        return 0;
    };
    return Startup;
}());
Startup.basicTypeStudy();
