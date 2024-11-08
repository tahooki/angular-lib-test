# 목적

- 작업된 프로젝트를 캡슐화 시켜 납품자에게 소스코드를 공개하지 않고 서비스를 이용하도록 만들기
- 이후 자신이 원하는 개발을 자유롭게 추가할 수 있는 환경 구성하기

---

# 개발 내용

## origin-app

- flight list와 상세 페이지 컴포넌트 개발
- hotel list와 상세 페이지 컴포넌트 개발

## new-app
- origin-app의 재사용
- new-hotel 추가하여 hotels url에 오버라이드
- 신규 car list와 상세 페이지 컴포넌트 개발


## 폴더구조

```jsx
📁 origin-app
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 flights
│   │   │   ├── 📁 flight-detail
│   │   │   │   └── flight-detail.component.ts
│   │   │   ├── 📁 flight-list
│   │   │   │   └── flight-list.component.ts
│   │   │   └── flights.routes.ts
│   │   ├── 📁 hotels
│   │   │   ├── 📁 hotel-detail
│   │   │   │   └── hotel-detail.component.ts
│   │   │   ├── 📁 hotel-list
│   │   │   │   └── hotel-list.component.ts
│   │   │   └── hotels.routes.ts
│   │   ├── 📁 main
│   │   │   └── main.component.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   └── public-api.ts
└── 📁 dist (빌드 후 생성)
    └── 라이브러리 빌드 파일들

📁 new-app
├── 📁 src
│   └── 📁 app
│       ├── 📁 cars (새로 추가)
│       │   ├── 📁 car-detail
│       │   │   └── car-detail.component.ts
│       │   ├── 📁 car-list
│       │   │   └── car-list.component.ts
│       │   └── cars.routes.ts
│       ├── 📁 new-hotels (origin-app의 hotels를 오버라이드)
│       │   ├── 📁 hotel-detail
│       │   │   └── hotel-detail.component.ts
│       │   ├── 📁 hotel-list
│       │   │   └── hotel-list.component.ts
│       │   └── hotels.routes.ts
│       ├── app.component.ts
│       ├── app.config.ts
│       └── app.routes.ts
```

---

## 실행 방법

- origin-app 에서 npm install
- origin-app 에서 npm run lib:build
- new-app 에서 npm install
- new-app 에서 ng serve

---