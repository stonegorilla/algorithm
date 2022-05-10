chap 5 클래스 기본 - 변수와 메서드 정의하기



1. 클래스(Class)

- 자바에서 생성되는 프로그램의 최소 단위



1.1 객체 모델링

- 객체의 속성과 기능을 도출하는 단계
- 특성(속성) :  객체를 특징 지울 수 있는 성질
- 기능 : 객체가 할 수 있는 행위



1.2 클래스 설계

- 특정 객체를 정의 하는 것
- 설계도면을 작성하는 것과 같은 개념
- 사용자 정의 타입
- 메모리에 객체를 생성해 사용 가능



```
class 클래스 이름{
    변수 정의;// 속성
    메소드 정의;// 기능
}
```



```
package ch05;

class AirCon {
	//변수 정의
	String company;
	String color;
	int price;
	int size;
	int temp;
	
	//메소드 정의
	void powerOn(){
		System.out.println("power on");
	}
	void powerOff(){
		System.out.println("power off");
	}
	void tempUp(){
		temp++;
	}
	void tempDown(){
		temp--;
	}
}

```

1.3 객체 생성

- 객체 생성할 때는 new 연산자 사용



1.4 객체의 변수와 메서드 사용

```
package ch05;

public class AirConUse {
	/**
	 * 객체의 변수와 메소드 사용 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AirCon airCon = new AirCon();
		
		//변수 사용
		airCon.color = "White";
		airCon.temp = 10;
		airCon.price = 10000;
		
		//메소드 사용
		airCon.tempUp();
		System.out.println("airCon.temp = " + airCon.temp + ", airCon.color = " + airCon.color
				+ ", airCon.price = " + airCon.price + "원 ");
		airCon.powerOn();
		airCon.powerOff();
		airCon.tempDown();
		System.out.println("airCon.temp = " + airCon.temp + ", airCon.color = " + airCon.color
				+ ", airCon.price = " + airCon.price + "원 ");		
	}
}

```



1.5 같은 클래스를 사용해서 객체를 여러개 생성

- 객체는 각각 독립적으로 생성(각각 고유의 주소 생성)
- 같은 주소를 참조하면 같은 객체를 가리키게 됨

```
package ch05;

public class AirConUse2 {
	/**
	 * 같은 클래스를 이용해서 여러 객체 만들기 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
			AirCon airCon1 = new AirCon();
			
			//변수 사용
			airCon1.color = "White";
			airCon1.temp = 10;
			airCon1.price = 10000;
			
			//메소드 사용
			airCon1.tempUp();
			System.out.println("airCon1.temp = " + airCon1.temp + ", airCon1.color = " + airCon1.color
					+ ", airCon1.price = " + airCon1.price + "원 ");
			airCon1.powerOn();
			airCon1.powerOff();
			airCon1.tempDown();
			System.out.println("airCon1.temp = " + airCon1.temp + ", airCon1.color = " + airCon1.color
					+ ", airCon1.price = " + airCon1.price + "원 ");
			
			//두 번째 객체 생성
			AirCon airCon2 = new AirCon();
			System.out.println("airCon2.temp = " + airCon2.temp + ", airCon2.color = " + airCon2.color
					+ ", airCon2.price = " + airCon2.price + "원 ");
			
			//airCon2 변수에 airCon1 변수 참조 값 할당
			airCon2 = airCon1;
			System.out.println("airCon2.temp = " + airCon2.temp + ", airCon2.color = " + airCon2.color
					+ ", airCon2.price = " + airCon2.price + "원 ");
	}
}
```



1.6 변수의 종류

1.6.1 인스턴스 변수 : 멤버 변수

- 클래스 영역에 정의된 변수
- 객체가 생성 될 때  자동 초기화
- 힙(heap) 영역에 생성 됨

| 데이터 타입 | 기본값   |
| ----------- | -------- |
| 정수 타입   | 0        |
| 실수 타입   | 0.0      |
| 문자 타입   | '\U0000' |
| boolean     | false    |
| 참조형      | null     |

1.6.2 스태틱(static) 멤버 변수

- 클래스가 로드될 때 Class Arae의 Static 영역에 생성
- 객체 생성 없이 클래스이름으로 바로 참조 가능



1.6.3 로컬 변수

- 메소드나 초기화 블럭 안에 정의 된 변수
- 스택(Stack)에 생성되면 메소드 실행 종료 시 자동 소멸
- 자동 초기화 되지 않음



```
package ch05;

public class VariableKind {
	//인스턴스 멤버 변수
	int memVar;
	//static 멤버 변수
	static int staticVar;
	/**
	 * 변수 종류 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//로컬 변수
		int localVar;
		
		VariableKind vk1 = new VariableKind();
		System.out.println("vk1.memVar = " + vk1.memVar);
		System.out.println("vk1.staticVar = " + vk1.staticVar);
		System.out.println("VariableKind.staticVar = " + VariableKind.staticVar);
		System.out.println("staticVar = " + staticVar);
		VariableKind vk2 = new VariableKind();
		vk1.staticVar = 20;
		System.out.println("vk2.staticVar = " + vk2.staticVar);
		//System.out.println("localVar = " + localVar);
	}
}

```



2. 메소드(Method)

- 클래스가 수행 할 수 있는 기능을 정의



2.1 메소드 구조

```
리턴 타입 메소드 이름(파라미터1, 파라미터2...){
    구현 내용;
}
```

메소드 정의

```
int add(int x, int y){
    return x+y;
}
```

메소드 사용

```
int result = add(10, 10);
```

- 리턴 값이 없는 경우 void 사용



2.2  인수 전달 방식

- 기본 적으로는 값이  복사 되어 전달(값에 의한 전달)

```
package ch05;

class Args{
	int x;
	void add(int x){
		x = x + 50;
	}
	void add(Args arg){
		arg.x = arg.x + 40;
	}
	void addNew(Args arg){
		arg = new Args();
	}
	void add(int[] arr){
		arr[0]++;
	}
}
```

```
package ch05;

public class ArgsTest {
	/**
	 * 인수 전달 방식 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Args arg = new Args();
		arg.x = 100;
		int[] arr = new int[1];
		
		arg.add(arg.x);
		System.out.println("arg.x = " + arg.x);
		
		arg.add(arg);
		System.out.println("arg.x = " + arg.x);
		
		arg.addNew(arg);
		System.out.println("arg.x = " + arg.x);
		
		arg.add(arr);
		System.out.println("arr[0] = " + arr[0]);	
	}
}
```



2.3 가변 인자 메소드(Variable Arguments) : JDK 1.5 부터 지원

2.3.1 정의

```
void printInfo(String ...infos){
    System.out.println(infos[0]);
}
```

2.3.2 호출하는 부분

```
printInfo();
printInfo("aaa");
printInfo("aaa","bbb");
printInfo("aaa","bbb","ccc");
```

```
package ch05;

public class VariableArgument {
	/**
	 * Variable Argument Test
	 */
	void printInfo(String ...infos){
		if(infos.length != 0){
			for(int i=0;i<infos.length;i++){
				System.out.println(infos[i]);
			}
		}
		else{
			System.out.println("인자가 없네요.");
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		VariableArgument vt = new VariableArgument();
		System.out.println("인자 없이");
		vt.printInfo();
		System.out.println("인자 하나");
		vt.printInfo("aaa");
		System.out.println("인자 두 개");
		vt.printInfo("aaa","bbb");
		System.out.println("인자 세 개");
		vt.printInfo("aaa","bbb","ccc");
	}
}

```



2.4 메소드 오버로딩(Method Overloading)

- 같은 이름의 메소드를 한 클래스에 여러 개 정의 할 수 있는 기능

2.4.1 오버로딩 성립 규칙

- 파라미터 타입이나 개수가 달라야 함

```
void printInfo(int x);
void printInfo(String x);
void printInfo(int x, int y);
```

```
package ch05;

class Boiler{
	String maker;
	int temp;
	String color;
	
	void tempUp(){
		temp++;
	}
	void tempUp(int amount){
		temp = temp + amount;
	}
}
```

```
package ch05;

public class OverloadingTest {
	/**
	 * Overloading 테스트
	 */	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Boiler bo = new Boiler();
		System.out.println("현재 온도 = " + bo.temp);
		bo.tempUp();
		System.out.println("bo.tempUp() 메소드 호출 후 현재 온도 = " + bo.temp);
		bo.tempUp(20);
		System.out.println("bo.tempUp(20) 메소드 호출 후 현재 온도 = " + bo.temp);
	}
}
```



2.5 static 메소드와 인스턴스 메소드

- static 메소드는  정의 부분 앞에 static 예약어가 지정된 메소드
- static 메소드는 객체 생성 없이 클래스이름.메서드이름() 으로 호출 가능
- static 메소드는 인스턴스 메서드나 변수를 바로 호출 할 수 없음

```
package ch05;

public class StaticMethod {
	int memVar;
	static int staticVar;
	void memMethod1(){
		int local = memVar;
		local = staticVar;
		staticMethod1();
		memMethod2();
		System.out.println("memMethod1");
	}
	void memMethod2(){
		System.out.println("memMethod2");
	}
	static void staticMethod1(){
		//int local = memVar;
		//memMethod1()
		StaticMethod st = new StaticMethod();
		int local = st.memVar;
		st.memMethod2();
		staticMethod2();
		System.out.println("staticMethod1");
	}
	static void staticMethod2(){
		System.out.println("staticMethod2");
	}
	/**
	 * Static Method 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//StaticMethod.memMethod1();
		StaticMethod st = new StaticMethod();
		st.memMethod1();
		StaticMethod.staticMethod2();
		staticMethod2();
		int local = staticVar;
		//local = memVar;
	}
}

```



2.6 생성자

- new 연산자에 의해서 객체 생성시 호출 되는 메서드
- 멤버 변수 초기화에 사용
- 정의 하지 않으면 클래스 이름과 같은 기본 생성자 호출
- 메소드 오버로딩을 통해 생성자 여러개 정의

```
package ch05;

class Person{
	int age;
	String name;
	int height;
	int weight;
	public Person() {
		// TODO Auto-generated constructor stub
	}
	public Person(int age) {
		// TODO Auto-generated constructor stub
		this.age = age;
	}
	public Person(String name) {
		// TODO Auto-generated constructor stub
		this.name = name;
	}
}
```

```
package ch05;

public class ConstructorTest {
	/**
	 * 생성자 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Person person1 = new Person();
		System.out.println("person1.name = " + person1.name + ", person1.height = " + person1.height
				+ ", person1.weight = " + person1.weight + ", person1.age = " + person1.age);
		
		Person person2 = new Person(30);
		System.out.println("person2.name = " + person2.name + ", person2.height = " + person2.height
				+ ", person2.weight = " + person2.weight + ", person2.age = " + person2.age);
		
		Person person3 = new Person("goodman");
		System.out.println("person3.name = " + person3.name + ", person3.height = " + person3.height
				+ ", person3.weight = " + person3.weight + ", person1.age = " + person3.age);
	}

}

```

2.7 this() 생성자

- 자기 자신 클래스의 생성자를 호출하기 위해 사용되는 생성자
- 변수 초기화 코드를 간결하게 처리 

```
class House{
	int price;
	String dong;
	int size;
	String kind;
	public House() {
		// TODO Auto-generated constructor stub
		//System.out.println("this보다 앞에서 실행");
		this(100,32,"상계동","아파트");
	}
	public House(int price) {
		// TODO Auto-generated constructor stub
		this(price,32,"상계동","아파트");
	}
	public House(int price,int size) {
		// TODO Auto-generated constructor stub
		this(price,size,"상계동","아파트");
	}
	public House(int price,int size,String dong) {
		// TODO Auto-generated constructor stub
		this(price,size,dong,"아파트");
	}
	public House(int price,int size,String dong,String kind) {
		// TODO Auto-generated constructor stub
		this.price = price;
		this.size = size;
		this.dong = dong;
		this.kind = kind;
	}
}
```

```
public class ThisConstructorTest {
     /**
	 * this() 테스트
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		House house1 = new House();
		System.out.println("house1.price = " + house1.price + ", house1.size = " + house1.size
				+ ", house1.dong = " + house1.dong + ", house1.kind = " + house1.kind);
		
		House house2 = new House(300);
		System.out.println("house2.price = " + house2.price + ", house2.size = " + house2.size
				+ ", house2.dong = " + house2.dong + ", house2.kind = " + house2.kind);
		
		House house3 = new House(300, 40);
		System.out.println("house3.price = " + house3.price + ", house3.size = " + house3.size
				+ ", house3.dong = " + house3.dong + ", house3.kind = " + house3.kind);
		
		House house4 = new House(300, 40, "서초동");
		System.out.println("house4.price = " + house4.price + ", house4.size = " + house4.size
				+ ", house4.dong = " + house4.dong + ", house4.kind = " + house4.kind);
		
		House house5 = new House(300, 40, "서초동", "빌라");
		System.out.println("house5.price = " + house5.price + ", house5.size = " + house5.size
				+ ", house5.dong = " + house5.dong + ", house5.kind = " + house5.kind);
	}
}

```

2.8 초기화 블럭

- 클래스 안에서 복잡한 초기화를 실행하는 영역
- 초기화 순서 : 암시적 초기화 > 명시적 초기화 > 생성자에 의한 초기화

인스턴스 초기화 블럭

```
{
    // 생성자 호출할 때 마다 실행
}
```

static 초기화 블럭

```
static{
    // 클래스 로딩시 한번
}
```

```
public class InitBlock {

	int num;
	String str;
	static{
		System.out.println("good의 static 초기화 블록 실행");
	}
	
	{
		System.out.println("good의 인스턴스 초기화 블록 실행");
		System.out.println("good의 생성자 실행");
	}
	
	public InitBlock() {
		//System.out.println("good의 생성자 실행");
		num = 1;
		str = "abc";
		
	}
	
	public InitBlock(int num, String str) {
		//System.out.println("good의 생성자 실행");
		this.num = num;
		this.str = str;
	}

}
```

```
public class InitBlockTest {
    /**
	 * Initial block test
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		InitBlock ib1 = new InitBlock();
		InitBlock ib2 = new InitBlock();
		InitBlock ib3 = new InitBlock();
		System.out.println("main");
	}
}

```



2.9 응용 예제

- 이름으로 회원을 검색하는 예제

회원 정보를 저장하는 클래스

```
public class Member {
	private String name;
	private int height;
	private int weight;
	private String nation;
	public Member(String name, int height, int weight, String nation) {
		super();
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.nation = nation;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getNation() {
		return nation;
	}
	public void setNation(String nation) {
		this.nation = nation;
	}
}

```

회원 이름으로 배열 객체에서 회원을 검색하는 기능 정의 클래스

```
public class SearchService {
	Member[] members = new Member[5];
	public SearchService() {
		// TODO Auto-generated constructor stub
		members[0]=new Member("오정원", 167, 77, "대한민국");
		members[1]=new Member("James", 187, 67, "미국");
		members[2]=new Member("가루상", 166, 57, "일본");
		members[3]=new Member("홍금보", 177, 80, "중국");
		members[4]=new Member("인도인", 199, 77, "인도");
	}
	boolean searchMember(String name){
		boolean searchResult=false;
		for(int i=0;i<members.length;i++){
			if(members[i].getName().equals(name)){
				printInfo(members[i]);
				searchResult = true;
			}
		}
		return searchResult;
	}
	private void printInfo(Member member) {
		// TODO Auto-generated method stub
		System.out.println(member.getName() + "으로 찾은 결과");
		System.out.println("이름 : " + member.getName());
		System.out.println("신장 : " + member.getHeight());
		System.out.println("몸무게 : " + member.getWeight());
		System.out.println("국가 : " + member.getNation());
	}
}

```

사용자로 부터 이름을 입력받는 Main(Test) 클래스

```
package ch05;

import java.util.Scanner;
public class SearchMain { 
	/**
	 * 이름으로 검색 예제
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 SearchService sv  = new SearchService();
		 Scanner sc = new Scanner(System.in); 
		 
		 do{
			 System.out.println("검색할 회원 이름을 입력하세요.");
			 String name = sc.next();
			 boolean searchResult = sv.searchMember(name);
			 if(searchResult) break;
			 System.out.println("해당 회원이 없습니다.");
		 }
		 while(true);
	}
}

```

