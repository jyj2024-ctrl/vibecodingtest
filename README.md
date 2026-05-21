# 학습혁신담당 Team Building Day

팀빌딩 이벤트를 위한 웹 기반 플랫폼입니다. 16명의 참가자가 각자의 기기에서 실시간으로 팀 배정에 참여할 수 있습니다.

## 🚀 빠른 시작

**Firebase 설정 완료!** → [QUICK_START.md](./QUICK_START.md) 파일을 열어 **3단계만** 따라하면 바로 사용 가능합니다.

1. Firestore Database 활성화
2. 보안 규칙 설정
3. Google 로그인 활성화

---

## 📋 프로젝트 개요

**목적**: 학습혁신담당, 영상미디어팀, 인재육성팀, 컬처파트 총 16명의 구성원이 공정하고 균형잡힌 3개 팀으로 배정되어 런치 토크 및 팀빌딩 활동을 진행합니다.

**일정**: 2026년 3월 26일(목) 11:30~13:00  
**예산**: 인당 최대 20,000원 (점심식사 + 음료)

## 🎯 주요 기능

### 1. **홈 페이지** (`index.html`)
- 팀빌딩 일정 및 진행 안내
- 3단계 프로세스 설명
- 팀빌딩의 3가지 목표 제시

### 2. **팀구성 게임** (`team-game.html`) ⭐ 실시간 동기화
- **실시간 멀티 디바이스 지원**: 16명이 각자의 기기에서 동시에 참여 가능
- **자동 팀 밸런싱**:
  - **A팀 5명**: 컬처파트 1명 + 영상미디어 2명 + 인재육성 2명
  - **B팀 5명**: 컬처파트 1명 + 영상미디어 2명 + 인재육성 2명
  - **C팀 6명**: 학습혁신담당 1명 + 영상미디어 3명 + 인재육성 2명
  - 총 16명: 학습혁신담당 1명 + 영상미디어 7명 + 인재육성 6명 + 컬처파트 2명
- **실시간 업데이트**: 2초마다 서버에서 최신 팀 배정 상태 동기화
- **진행 상황 표시**: 16명 중 몇 명이 배정되었는지 실시간 확인

**데이터 저장**: RESTful Table API (`team_assignments` 테이블)
- `member_id`: 멤버 고유 ID
- `member_name`: 멤버 이름
- `department`: 소속 부서
- `team_index`: 배정된 팀 (0=A팀, 1=B팀, 2=C팀)
- `assigned_at`: 배정 시각

### 3. **런치 토크 안내** (`lunch-talk.html`)
- 슬라이드 형식의 가이드
- 대화 주제 2가지 제시:
  - 나의 '요즘' 관심사
  - 나의 MBTI (MBTI 가이드 페이지 연결)
- 실시간 팀 구성 명단 표시 (첫 번째 멤버가 조장)
- 식사 약속 및 주의사항

### 4. **MBTI 가이드** (`mbti-guide.html`)
- 16가지 MBTI 유형 카드 표시
- 카드 클릭 시 상세 모달:
  - **좌측**: 강점 (녹색 체크 아이콘)
  - **우측**: 약점/발전 포인트 (빨간색 X 아이콘)
  - 추천 직업 및 궁합 좋은 유형

## 🚀 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6
- **Fonts**: Noto Sans KR, Pretendard
- **Authentication**: Firebase Authentication (Google Sign-In)
- **Database**: Firebase Firestore (사용자별 팀 배정 저장)
- **팀 배정 저장**: Firebase Firestore + RESTful Table API (이중 저장)
- **동기화**: Polling (2초 간격)

## 📁 파일 구조

```
.
├── index.html              # 홈 페이지
├── team-game.html          # 팀구성 게임 (실시간 동기화 + Firebase 인증)
├── lunch-talk.html         # 런치 토크 안내
├── mbti-guide.html         # MBTI 성격 유형 가이드
├── firebase-config.js      # Firebase 설정 파일
├── FIREBASE_SETUP.md       # Firebase 프로젝트 설정 가이드
├── css/
│   └── style.css          # 공통 스타일시트
├── js/
│   └── main.js            # 공통 JavaScript
└── README.md              # 프로젝트 문서
```

## 🎮 사용 방법

### 🔐 Firebase 프로젝트 설정 (최초 1회)

**중요**: 팀 배정 데이터를 안전하게 저장하고 사용자별로 복원하려면 Firebase 설정이 필요합니다.

1. **`FIREBASE_SETUP.md` 파일을 참조하여 Firebase 프로젝트 생성**
   - Firebase Console에서 새 프로젝트 생성
   - Firestore Database 활성화
   - Google Authentication 활성화
   - 보안 규칙 설정

2. **`firebase-config.js` 파일에 본인의 Firebase 설정 입력**
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY_HERE",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:abcdef123456789"
   };
   ```

3. **호스팅 도메인을 Firebase Console의 승인된 도메인에 추가**
   - 로컬 테스트: `localhost`
   - 프로덕션: 배포된 도메인 (예: `your-site.netlify.app`)

### 팀 배정 프로세스

1. **Google 계정으로 로그인**
   - 팀구성 게임 페이지 접속 시 로그인 모달 표시
   - "Google로 로그인" 버튼 클릭
   - Google 계정 선택하여 인증

2. **모든 참가자가 각자의 기기에서 접속**
   - 스마트폰, 태블릿, PC 모두 지원 (반응형 디자인)
   - 로그인한 사용자 정보가 우측 상단에 표시

3. **팀구성 게임 페이지로 이동**
   - 상단 메뉴에서 "팀구성 게임" 클릭

4. **본인 이름 클릭**
   - 자동으로 팀에 배정됨
   - 배정 즉시 Firebase Firestore에 저장
   - 다른 사람의 화면에도 2초 내 반영

5. **실시간 확인**
   - 진행 현황: "X / 16명" 표시
   - A팀, B팀, C팀 명단 실시간 업데이트
   - 배정된 이름 버튼 비활성화

6. **재로그인 시 데이터 자동 복원**
   - 같은 Google 계정으로 다시 로그인하면
   - 이전에 선택했던 팀 배정이 자동으로 화면에 표시됨
   - 다른 기기에서 로그인해도 동일한 데이터 표시

7. **런치 토크 안내로 이동**
   - 최종 팀 명단 확인
   - 각 팀 첫 번째 멤버가 조장 역할

### 데이터 초기화

- 우측 하단 "데이터 초기화" 버튼 클릭
- 비밀번호 입력: `20260319`
- 서버 데이터 및 로컬 데이터 모두 삭제

## 🔄 실시간 동기화 원리

### Firebase Firestore 데이터 구조

**`users` 컬렉션** (사용자 프로필):
```javascript
{
  uid: "google-user-id",
  email: "user@example.com",
  displayName: "홍길동",
  photoURL: "https://...",
  lastLoginAt: 1234567890,
  teamAssignment: {
    memberId: 1,
    teamIndex: 0,
    updatedAt: 1234567890
  }
}
```

**`teamAssignments` 컬렉션** (팀 배정 기록):
```javascript
{
  userId: "google-user-id",
  email: "user@example.com",
  displayName: "홍길동",
  memberId: 1,
  memberName: "홍길동",
  department: "인재육성팀",
  teamIndex: 0,
  assignedAt: 1234567890
}
```

### API 엔드포인트 (기존 RESTful API 유지)

```javascript
// 팀 배정 저장
POST /tables/team_assignments
{
  "member_id": 1,
  "member_name": "홍길동",
  "department": "인재육성팀",
  "team_index": 0,
  "assigned_at": 1234567890
}

// 팀 배정 조회
GET /tables/team_assignments?limit=100

// 팀 배정 삭제 (초기화 시)
DELETE /tables/team_assignments/{id}
```

### 동기화 흐름

**인증 및 데이터 로드:**
1. **사용자가 페이지 접속** → 로그인 모달 표시
2. **Google 로그인** → Firebase Authentication 인증
3. **인증 성공** → `onAuthStateChanged` 이벤트 발생
4. **Firestore에서 이전 배정 데이터 로드** → 화면에 자동 복원
5. **사용자 프로필 저장** → `users` 컬렉션에 저장/업데이트

**팀 배정 (이중 저장 시스템):**
1. **사용자 A가 이름 클릭** → 서버에 POST 요청 (RESTful API)
2. **서버가 데이터 저장** → 응답 반환
3. **Firestore에 사용자별 배정 기록 저장** → `teamAssignments` 컬렉션
4. **모든 사용자(A, B, C...)의 브라우저**가 2초마다 GET 요청
5. **서버에서 최신 데이터 수신** → 화면 자동 업데이트
6. **버튼 상태, 팀 명단, 진행 바** 모두 실시간 반영

**재로그인 시 데이터 복원:**
1. **사용자가 다시 로그인** → Firebase 인증
2. **Firestore 쿼리** → `userId`로 이전 배정 조회
3. **화면에 자동 복원** → 팀 명단, 버튼 상태 복구
4. **다른 기기에서도 동일** → 크로스 디바이스 동기화

## 📱 반응형 디자인

모든 페이지는 다양한 화면 크기에 최적화되어 있습니다:

- **데스크톱 (1200px+)**: 3단 레이아웃, 풀 기능
- **태블릿 (768px~1200px)**: 2단 레이아웃, 적응형 조정
- **모바일 (768px 이하)**: 1단 세로 배치, 터치 최적화
- **소형 모바일 (480px 이하)**: 컴팩트 UI, 최소 간격

## 🎨 디자인 테마

- **메인 컬러**: 그린 계열 (#10b981, #059669, #34d399)
- **팀 컬러**:
  - A팀: 인디고 (Indigo)
  - B팀: 에메랄드 (Emerald)
  - C팀: 앰버 (Amber)
- **부서 컬러**:
  - 학습혁신담당: 퍼플
  - 영상미디어팀: 블루
  - 인재육성팀: 그린
  - 컬처파트: 오렌지

## 🔒 데이터 보안

### Firebase Firestore 보안 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 팀 배정 기록: 로그인한 사용자만 읽기/쓰기 가능
    match /teamAssignments/{assignmentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // 사용자 프로필: 본인 데이터만 읽기/쓰기 가능
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

- **인증 필수**: 로그인하지 않으면 Firestore 데이터 접근 불가
- **사용자별 격리**: 각 사용자는 본인의 프로필만 수정 가능
- **팀 배정 기록**: 인증된 사용자만 조회 가능
- **서버 데이터**: 팀 배정 정보는 RESTful API 서버에도 이중 저장 (개발 환경, 멀티 디바이스 동기화)
- **로컬 저장**: 팀 배정 완료 후 localStorage에도 저장하여 오프라인 접근 가능

## ⚠️ 주의사항

1. **Firebase 설정 필수**: 최초 1회 `FIREBASE_SETUP.md` 가이드에 따라 Firebase 프로젝트 설정 필요
2. **Google 로그인 필수**: 팀 배정 데이터를 저장하고 복원하려면 로그인 필요
3. **팀 배정 중 새로고침 금지**: 진행 중에는 페이지를 새로고침하지 마세요 (자동 복구됨)
4. **중복 클릭 방지**: 한 번 배정되면 버튼이 비활성화되므로 중복 배정 불가
5. **인터넷 연결 필수**: Firebase 인증 및 실시간 동기화를 위해 안정적인 인터넷 연결 필요
6. **브라우저 호환성**: Chrome, Safari, Edge, Firefox 최신 버전 권장
7. **팝업 차단 해제**: Google 로그인 시 팝업 차단이 해제되어 있어야 함

## 🐛 문제 해결

### 로그인이 안 될 때
- 브라우저 팝업 차단이 해제되어 있는지 확인
- Firebase Console에서 Google Authentication이 활성화되어 있는지 확인
- Firebase Console의 승인된 도메인에 현재 도메인이 추가되어 있는지 확인

### 이전 팀 배정이 복원되지 않을 때
- 같은 Google 계정으로 로그인했는지 확인
- 브라우저 콘솔(F12)에서 Firebase 연결 에러 확인
- Firestore 보안 규칙이 올바르게 설정되어 있는지 확인

### 팀 배정이 다른 사람에게 보이지 않을 때
- 인터넷 연결 상태 확인
- 페이지 새로고침 (F5)
- 브라우저 콘솔(F12)에서 에러 확인

### "정원이 찼습니다" 메시지가 계속 뜰 때
- 데이터 초기화 (비밀번호: 20260319)
- 모든 참가자가 페이지 새로고침

## 📊 현재 구현 완료

✅ 홈 페이지 (일정 및 안내)  
✅ 실시간 팀구성 게임 (멀티 디바이스 동기화)  
✅ Firebase Authentication (Google 로그인)  
✅ Firebase Firestore (사용자별 팀 배정 저장 및 복원)  
✅ 크로스 디바이스 데이터 동기화  
✅ 런치 토크 안내 (조장 자동 지정)  
✅ MBTI 가이드 (모달 강점/약점 분리)  
✅ 반응형 디자인 (모바일/태블릿/데스크톱)  
✅ RESTful API 기반 팀 배정 동기화  
✅ 데이터 초기화 기능  

## 🔜 향후 개선 가능 항목

- 관리자 대시보드 (실시간 참여 현황 모니터링)
- 팀별 채팅 기능
- 사진 업로드 및 갤러리
- 참여자 프로필 사진

## 📞 문의

프로젝트 관련 문의사항이 있으시면 학습혁신담당으로 연락주세요.

---

**© 2026 학습혁신담당 Team Building Day. All rights reserved.**
